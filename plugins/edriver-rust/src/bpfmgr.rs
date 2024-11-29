use crate::cache::Transformer;
use crate::events::{execve::Execve, Event};
use anyhow::{anyhow, Context, Result};
use lazy_static::lazy_static;
use libbpf_rs::{
    skel::{OpenSkel, Skel, SkelBuilder},
    PerfBufferBuilder,
};
use log::*;
use sdk::{Client, Record};
use std::{
    sync::{Arc, Mutex},
    thread,
    time::{Duration, SystemTime, UNIX_EPOCH},
};

mod hades_skel {
    include!(concat!(
        env!("CARGO_MANIFEST_DIR"),
        "/src/bpf/hades.skel.rs"
    ));
}

use hades_skel::*;

lazy_static! {
    pub static ref LOSS_CNT: Arc<Mutex<u64>> = Arc::new(Mutex::new(0));
}

pub struct Bpfmanager {}

impl Bpfmanager {
    pub fn new(client: Client) -> Result<Self> {
        Self::bump_rlimit()?;

        let skel_builder = HadesSkelBuilder::default();
        let open_skel = skel_builder.open().context("Skel open failed")?;
        let mut skel = open_skel.load().context("Load skel failed")?;

        skel.attach().context("Skel attach failed")?;

        let loss_cnt_c = LOSS_CNT.clone();
        let mut trans = Transformer::new();

        /* event handle wrap */
        let handle = |_cpu: i32, data: &[u8]| {
            let map = Execve::parse(&data[4..], &mut trans).unwrap();
            println!("{:?}", map);
        };

        Self::start_heartbeat_thread(client, loss_cnt_c)?;

        let binding = skel.maps();
        let map = binding.events();
        let events = PerfBufferBuilder::new(map)
            .sample_cb(handle)
            .lost_cb(Self::handle_lost_events)
            .build()?;

        loop {
            events.poll(Duration::from_millis(100))?
        }
    }

    fn handle_lost_events(_cpu: i32, cnt: u64) {
        let mut loss_count = LOSS_CNT.lock().unwrap();
        *loss_count += cnt;
    }

    fn bump_rlimit() -> Result<()> {
        let rlimit = libc::rlimit {
            rlim_cur: 128 << 20,
            rlim_max: 128 << 20,
        };
        if unsafe { libc::setrlimit(libc::RLIMIT_MEMLOCK, &rlimit) } != 0 {
            return Err(anyhow!("failed to increase rlimit"));
        }
        Ok(())
    }

    fn start_heartbeat_thread(mut client: Client, loss_counter: Arc<Mutex<u64>>) -> Result<()> {
        thread::Builder::new()
            .name("heartbeat".to_string())
            .spawn(move || loop {
                let timestamp = SystemTime::now()
                    .duration_since(UNIX_EPOCH)
                    .unwrap()
                    .as_secs() as i64;

                let mut rec = Record::new();
                rec.timestamp = timestamp;
                rec.data_type = 900;

                let pld = rec.mut_data();
                if let Ok(loss_count) = loss_counter.lock() {
                    pld.fields
                        .insert("loss_cnt".to_string(), loss_count.to_string());
                } else {
                    warn!("Failed to lock loss_counter");
                    continue;
                }

                if let Err(err) = client.send_record(&rec) {
                    warn!("Heartbeat will exit: {}", err);
                    break;
                }

                *loss_counter.lock().unwrap() = 0;
                thread::sleep(Duration::from_secs(30));
            })
            .context("Failed to spawn heartbeat thread")?;

        Ok(())
    }
}

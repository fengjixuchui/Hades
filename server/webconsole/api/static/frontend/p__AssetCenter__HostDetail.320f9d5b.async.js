"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[414],{55767:function(Ce,W,r){r.r(W),r.d(W,{default:function(){return Le}});var q=r(15009),l=r.n(q),ee=r(99289),_=r.n(ee),te=r(19632),T=r.n(te),Z=r(5574),B=r.n(Z),M=r(93769),ne=r(12121),y=r(38345),x=r(14373),E=r(89129),ae=r(47375),U=r(97269),V=r(64317),K=r(97462),S=r(67294),re=r(96974),P=r(26713),O=r(20550),L=r(84908),ie=r(69677),k=r(30381),d=r.n(k),g=r(48555),I=r(63430),h=r(12461),m=r(80737),Te=r(71577),he=r(10010),me=r(24969),C=r(49748),J=r(80854),Ze={tag:"tag___kCu44"},Se=r(55171),$e=r.n(Se),e=r(85893),Ye=M.Z.Divider,Ae=[{title:"\u63D2\u4EF6\u540D\u79F0",dataIndex:"name",width:"6%"},{title:"\u7248\u672C",search:!1,dataIndex:"pversion",copyable:!0},{title:"\u72B6\u6001",search:!1,dataIndex:"status",valueEnum:{true:{text:"\u5728\u7EBF",status:"Success"},false:{text:"\u79BB\u7EBF",status:"Error"}}},{title:"\u5BA2\u6237\u7AEF\u6027\u80FD",search:!1,render:function(p,c,D,G){return(0,e.jsxs)(P.Z,{size:[20,24],children:[(0,e.jsxs)(P.Z,{size:[0,4],wrap:!0,children:[(0,e.jsx)(O.Z,{color:"default",children:"CPU"}),(c.cpu*100).toFixed(2)+"%"]}),(0,e.jsx)("p",{}),(0,e.jsxs)(P.Z,{size:[0,4],wrap:!0,children:[(0,e.jsx)(O.Z,{color:"default",children:"MEM"}),(c.rss/(1024*1024)).toFixed(1)+"MB"]})]})},width:"20%"},{title:function(){return(0,e.jsx)(L.Z,{title:"kbps",children:(0,e.jsxs)(P.Z,{children:["\u4E0A\u4F20\u901F\u7387",(0,e.jsx)(he.Z,{style:{color:"#1890ff"}})]})})},search:!1,width:"10%",dataIndex:"tx_speed",renderText:function(p){return(p/1024).toFixed(2)}},{title:function(){return(0,e.jsxs)(P.Z,{children:["\u4E0A\u4F20 tps",(0,e.jsx)(he.Z,{style:{color:"#1890ff"}})]})},search:!1,width:"10%",dataIndex:"tx_tps",renderText:function(p){return p.toFixed(2)}},{title:"\u4E0A\u7EBF\u65F6\u95F4",search:!1,dataIndex:"start_at",renderText:function(p){var c=new Date(p*1e3);return d()(c).fromNow()}},{title:"\u6700\u8FD1\u5FC3\u8DF3\u65F6\u95F4",search:!1,dataIndex:"last_heartbeat_time",renderText:function(p){var c=new Date(p*1e3);return d()(c).fromNow()}},{title:"\u64CD\u4F5C",search:!1,valueType:"option",key:"option",dataIndex:"",render:function(p,c,D,G){return[(0,e.jsx)("a",{href:"javascript:void(0);",onClick:function(){var $;return(0,C.nc)({name:($=c.name)!==null&&$!==void 0?$:"",pversion:c.pversion,agent_id:window.location.pathname.replace("/assetcenter/host/",""),action:"upgrade"}).then(function(Y){return Y.code!=0?(h.ZP.error("\u5347\u7EA7\u5931\u8D25:"+Y.data),!1):(h.ZP.success("\u5347\u7EA7\u6210\u529F"),Y)})},rel:"noopener noreferrer",children:"\u5347\u7EA7"},"remove"),(0,e.jsx)("a",{href:"javascript:void(0);",onClick:function(){var $;return(0,C.nc)({name:($=c.name)!==null&&$!==void 0?$:"",pversion:c.pversion,agent_id:window.location.pathname.replace("/assetcenter/host/",""),action:"delete"}).then(function(Y){return Y.code!=0?(h.ZP.error("\u5220\u9664\u5931\u8D25:"+Y.data),!1):(h.ZP.success("\u5220\u9664\u6210\u529F"),Y)})},rel:"noopener noreferrer",children:"\u5378\u8F7D"},"remove")]}}],Me=[{title:"PID",dataIndex:"pid",width:"5%",defaultSortOrder:"descend"},{title:"PPID",search:!1,dataIndex:"ppid",width:"5%"},{title:"\u8FDB\u7A0B\u540D",dataIndex:"name",width:"10%",copyable:!0,ellipsis:!0},{title:"\u6267\u884C\u6587\u4EF6",dataIndex:"exe",ellipsis:!0,width:"30%",copyable:!0},{title:"UID",search:!1,dataIndex:"uid",width:"5%"},{title:"\u7528\u6237\u540D",search:!1,dataIndex:"username",width:"10%",ellipsis:!0,order:1},{title:"\u542F\u52A8\u65F6\u95F4",search:!1,width:"17.5%",dataIndex:"start_time",renderText:function(p){var c=new Date(p*1e3);return d()(c).utc(!0).format("YYYY-MM-DD HH:mm:ss")}},{title:"\u6570\u636E\u66F4\u65B0\u65F6\u95F4",search:!1,width:"17.5%",dataIndex:"update_time",renderText:function(p){var c=new Date(p*1e3);return d()(c).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}],ze=[{title:"UID",dataIndex:"uid",width:"5%",defaultSortOrder:"descend"},{title:"GID",search:!1,dataIndex:"gid",width:"5%"},{title:"\u7528\u6237\u540D",dataIndex:"username",width:"10%",ellipsis:!0,copyable:!0},{title:"\u7528\u6237\u7EC4\u540D",dataIndex:"group_name",width:"10%",ellipsis:!0,copyable:!0},{title:"\u5386\u53F2\u767B\u5F55 IP",dataIndex:"last_login_ip",ellipsis:!0,width:"10%",search:!1},{title:"\u5BC6\u7801\u66F4\u65B0\u65F6\u95F4",search:!1,dataIndex:"password_update_time",ellipsis:!0,width:"14%"},{title:"Home \u76EE\u5F55",search:!1,dataIndex:"home_dir",ellipsis:!0,width:"13%"},{title:"shell",search:!1,dataIndex:"shell",ellipsis:!0,width:"13%"},{title:"\u7528\u6237\u4FE1\u606F",search:!1,ellipsis:!0,dataIndex:"info",width:"20%"}],Be=[{title:"PID",dataIndex:"pid",width:"5%"},{title:"\u534F\u8BAE\u7C7B\u578B",dataIndex:"type",width:"5%",valueEnum:{1:{text:"ICMP"},6:{text:"TCP"},17:{text:"UDP"}},search:!1,filters:[{text:"ICMP",value:1},{text:"TCP",value:6},{text:"UDP",value:17}],onFilter:!0},{title:"\u8FDB\u7A0B\u540D\u79F0",search:!1,copyable:!0,dataIndex:"comm",width:"10%"},{title:"\u8FDC\u7A0B IP",dataIndex:"dip",width:"8%"},{title:"\u8FDC\u7A0B Port",dataIndex:"dport",ellipsis:!0,width:"4%"},{title:"\u672C\u5730 IP",search:!1,dataIndex:"sip",width:"8%"},{title:"\u672C\u5730 Port",search:!1,dataIndex:"sport",width:"4%"},{title:"\u6267\u884C\u547D\u4EE4",search:!1,dataIndex:"cmdline",width:"20%",ellipsis:!0,copyable:!0}],He=[{title:"\u6587\u4EF6\u8DEF\u5F84",dataIndex:"path",width:"20%",ellipsis:!0,copyable:!0},{title:"\u7528\u6237\u540D",search:!1,dataIndex:"user",width:"10%",ellipsis:!0},{title:"minute",search:!1,dataIndex:"minute",width:"5%",ellipsis:!0},{title:"hour",search:!1,dataIndex:"hour",width:"5%",ellipsis:!0},{title:"dom",search:!1,dataIndex:"day_of_month",width:"5%",ellipsis:!0},{title:"month",search:!1,dataIndex:"month",width:"5%",ellipsis:!0},{title:"dow",search:!1,dataIndex:"day_of_week",width:"5%",ellipsis:!0},{title:"\u547D\u4EE4",dataIndex:"command",width:"45%",ellipsis:!0,copyable:!0}],Re=[{title:"PID",search:!1,dataIndex:"pid",width:"5%",ellipsis:!0},{title:"\u7C7B\u578B",dataIndex:"type",width:"10%",ellipsis:!0,valueEnum:{container:{text:"container"},software:{text:"software"},database:{text:"database"},web:{text:"web"},service:{text:"service"},bigdata:{text:"bigdata"}},search:!1,filters:!0,onFilter:!0},{title:"\u540D\u79F0",dataIndex:"name",width:"13%",copyable:!0,ellipsis:!0},{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"container_name",width:"8%",ellipsis:!0,copyable:!0},{title:"\u7248\u672C",search:!1,dataIndex:"version",width:"5%",ellipsis:!0},{title:"\u76D1\u542C\u7AEF\u53E3",search:!1,dataIndex:"listen_addrs",width:"15%",ellipsis:!0},{title:"UID",search:!1,dataIndex:"uid",width:"5%",ellipsis:!0},{title:"\u6267\u884C\u547D\u4EE4",search:!1,dataIndex:"cmdline",width:"35%",ellipsis:!0,copyable:!0}],Oe=[{title:"\u540D\u79F0",dataIndex:"name",width:"15%",copyable:!0,ellipsis:!0},{title:"Size",search:!1,dataIndex:"size",width:"10%",ellipsis:!0,sorter:!0},{title:"\u5F15\u7528\u8BA1\u6570",dataIndex:"refcount",width:"5%",ellipsis:!0,search:!1},{title:"Used by",search:!1,dataIndex:"used_by",width:"30%",ellipsis:!0},{title:"State",dataIndex:"state",width:"6%",search:!1,ellipsis:!0,filters:!0,onFilter:!0,valueEnum:{Live:{text:"Live",status:"success"},Loading:{text:"Loading",status:"default"}}},{title:"Addr",dataIndex:"addr",width:"15%",ellipsis:!0,copyable:!0},{title:"\u66F4\u65B0\u65F6\u95F4",search:!1,dataIndex:"update_time",renderText:function(p){var c=new Date(p*1e3);return d()(c).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}],Ue=[{title:"PID",dataIndex:"pid",width:"5%",ellipsis:!0,search:!1},{title:"ID",search:!1,dataIndex:"id",width:"18%",ellipsis:!0,copyable:!0},{title:"\u8FD0\u884C\u65F6",dataIndex:"runtime",width:"5%",ellipsis:!0,search:!1,filters:!0,onFilter:!0,valueEnum:{containerd:{text:"containerd"},docker:{text:"docker"},kubelet:{text:"kubelet"},"kube-apiserver":{text:"kube-apiserver"}}},{title:"\u540D\u79F0",dataIndex:"names",width:"10%",copyable:!0,ellipsis:!0},{title:"\u955C\u50CF\u540D\u79F0",dataIndex:"image_name",width:"10%",copyable:!0,ellipsis:!0},{title:"\u72B6\u6001",dataIndex:"state",ellipsis:!0,width:"5%",valueEnum:{running:{text:"\u8FD0\u884C\u4E2D",status:"Success"},exited:{text:"\u5DF2\u9000\u51FA",status:"Error"}},filters:!0,onFilter:!0,search:!1},{title:"\u72B6\u6001\u8BE6\u60C5",dataIndex:"status",width:"12%",ellipsis:!0,search:!1},{title:"\u5BB9\u5668\u6807\u7B7E",search:!1,dataIndex:"labels",width:"20%",ellipsis:!0,render:function(p,c){return(0,e.jsx)($e(),{name:"labels",collapsed:!0,displayDataTypes:!1,src:JSON.parse(c.labels)})}},{title:"\u521B\u5EFA\u65F6\u95F4",search:!1,dataIndex:"created",sorter:!0,renderText:function(p){var c=new Date(p*1e3);return d()(c).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}];function se(w){var p,c,D=0;return D+=(p=(c=w.agent_info)===null||c===void 0?void 0:c.cpu)!==null&&p!==void 0?p:0,D}function ue(w){var p,c,D=0;return D+=(p=(c=w.agent_info)===null||c===void 0?void 0:c.rss)!==null&&p!==void 0?p:0,D=D/(1024*1024),D}var Ke=function(){var p,c,D,G,N,$,Y,le,de,A=(0,re.UO)(),ke=(0,S.useRef)(),Ge=(0,S.useState)(!1),ge=B()(Ge,2),xe=ge[0],Ne=ge[1],_e={},We=S.useState(_e),Ie=B()(We,2),f=Ie[0],Ve=Ie[1],Je=m.Z.useForm(),Qe=B()(Je,1),Xe=Qe[0],qe=(0,J.useRequest)(function(s){return(0,C.pi)({agent_id:A.agent_id})},{pollingInterval:30*1e3}),H=qe.data,R=(p=(0,J.useRequest)(C.UV).data)===null||p===void 0?void 0:p.plugins,et=(0,S.useState)(!1),we=B()(et,2),oe=we[0],be=we[1],ye=(0,S.useRef)(null),tt=(0,S.useState)(""),je=B()(tt,2),Q=je[0],De=je[1];(0,S.useEffect)(function(){if(oe){var s;(s=ye.current)===null||s===void 0||s.focus()}},[oe]);var nt=function(){be(!0)},Fe=function(){be(!1),De(""),(0,J.request)("/api/v1/tag",{method:"PUT",params:{agent_id:A.agent_id,name:Q}});var a=[],t=new Set;z!==void 0&&(t=new Set(z)),t.has(Q)||a.push.apply(a,T()(z).concat([Q])),ce(a)},at=function(a){De(a.target.value)},rt=(0,S.useState)([]),Ee=B()(rt,2),z=Ee[0],ce=Ee[1],it={width:60,verticalAlign:"top"},st=function(a){var t=z==null?void 0:z.filter(function(o){return o!==a});(0,J.request)("/api/v1/tag",{method:"DELETE",params:{agent_id:A.agent_id,name:a}}),ce(t)};return S.useEffect(function(){Ve(H!=null?H:_e),ce(H==null?void 0:H.tags)},[H]),(0,e.jsxs)(ne._z,{title:" ",children:[(0,e.jsx)(y.Z,{title:"\u57FA\u7840\u4FE1\u606F",children:(0,e.jsxs)(x.vY,{actionRef:ke,column:4,dataSource:f,children:[(0,e.jsx)(x.vY.Item,{dataIndex:["agent_info","hostname"],label:"\u4E3B\u673A\u540D\u79F0"}),(0,e.jsx)(x.vY.Item,{dataIndex:["agent_info","intranet_ipv4"],label:"\u5185\u7F51 IPv4"}),(0,e.jsx)(x.vY.Item,{dataIndex:["agent_info","pid"],label:"PID"}),(0,e.jsx)(x.vY.Item,{dataIndex:["agent_info","boot_at"],label:"\u7CFB\u7EDF\u542F\u52A8\u65F6\u95F4",renderText:function(a){var t=new Date(a*1e3);return d()(t).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}),(0,e.jsx)(x.vY.Item,{dataIndex:["agent_info","arch"],label:"\u7CFB\u7EDF\u67B6\u6784"}),(0,e.jsx)(x.vY.Item,{dataIndex:["agent_info","intranet_ipv6"],label:"\u5185\u7F51 IPv6"}),(0,e.jsx)(x.vY.Item,{dataIndex:["agent_info","addr"],label:"\u8FDE\u63A5\u5730\u5740"}),(0,e.jsx)(x.vY.Item,{dataIndex:["agent_info","last_heartbeat_time"],label:"\u6700\u8FD1\u5FC3\u8DF3\u65F6\u95F4",renderText:function(a){var t=new Date(a*1e3);return d()(t).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}),(0,e.jsx)(x.vY.Item,{dataIndex:"agent_info",label:"\u7CFB\u7EDF\u7248\u672C",renderText:function(a){return a!==void 0?a.platform+" "+a.platform_family+" "+a.platform_version:"-"}}),(0,e.jsx)(x.vY.Item,{dataIndex:["agent_info","extranet_ipv4"],label:"\u516C\u7F51 IPv4"}),(0,e.jsx)(x.vY.Item,{dataIndex:["agent_info"],label:"\u4E0A\u4F20 TPS",render:function(){var a,t;return(0,e.jsx)(P.Z,{children:((a=(t=f.agent_info)===null||t===void 0?void 0:t.tx_tps)!==null&&a!==void 0?a:0).toFixed(2)})}}),(0,e.jsx)(x.vY.Item,{dataIndex:["agent_info","start_at"],label:"Agent \u542F\u52A8\u65F6\u95F4",renderText:function(a){var t=new Date(a*1e3);return d()(t).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}),(0,e.jsx)(x.vY.Item,{dataIndex:["agent_info","kernel_version"],label:"\u5185\u6838\u7248\u672C"}),(0,e.jsx)(x.vY.Item,{dataIndex:["agent_info","extranet_ipv6"],label:"\u516C\u7F51 IPv6"}),(0,e.jsx)(x.vY.Item,{label:"\u7CFB\u7EDF\u4FE1\u606F",dataIndex:["agent_info"],render:function(){var a,t,o,v;return((a=f.agent_info)===null||a===void 0||(t=a.cpu_num)===null||t===void 0?void 0:t.toString())+" Core / "+(((o=(v=f.agent_info)===null||v===void 0?void 0:v.total_memory)!==null&&o!==void 0?o:0)/(1024*1024*1024)).toFixed(1)+"GB"}}),(0,e.jsx)(x.vY.Item,{dataIndex:["agent_info","version"],label:"Agent \u7248\u672C"}),(0,e.jsx)(x.vY.Item,{dataIndex:["agent_info","cpu_name"],label:"CPU \u540D\u79F0"}),(0,e.jsx)(x.vY.Item,{dataIndex:["agent_info","tags"],label:"\u6807\u7B7E",render:function(){return(0,e.jsxs)(P.Z,{size:[0,8],children:[(0,e.jsx)(P.Z,{size:[0,8],children:z==null?void 0:z.map(function(a,t){return(0,e.jsx)(O.Z,{closable:!0,onClose:function(){return st(a)},color:"green",children:a},a)})}),oe?(0,e.jsx)(ie.Z,{ref:ye,type:"text",size:"small",style:it,value:Q,onChange:at,onBlur:Fe,onPressEnter:Fe}):(0,e.jsx)(O.Z,{onClick:nt,className:Ze.tag,children:(0,e.jsx)(me.Z,{style:{fontSize:"10px",width:"10px",height:"10px"}})})]})}}),(0,e.jsx)(x.vY.Item,{dataIndex:["agent_info"],label:"\u7CFB\u7EDF\u8D1F\u8F7D",render:function(){var a,t,o,v,u,i;return((a=f.agent_info)===null||a===void 0||(t=a.load_1)===null||t===void 0?void 0:t.toString())+"/"+((o=f.agent_info)===null||o===void 0||(v=o.load_5)===null||v===void 0?void 0:v.toString())+"/"+((u=f.agent_info)===null||u===void 0||(i=u.load_15)===null||i===void 0?void 0:i.toString())}}),(0,e.jsx)(x.vY.Item,{dataIndex:["agent_info","online"],label:"\u5BA2\u6237\u7AEF\u72B6\u6001",valueEnum:{false:{text:"\u79BB\u7EBF",status:"Error"},true:{text:"\u5728\u7EBF",status:"Success"}}})]})}),(0,e.jsx)("p",{}),(0,e.jsx)(y.Z,{title:"\u6027\u80FD\u8D1F\u8F7D",children:(0,e.jsx)(g.Z,{onResize:function(a){Ne(a.width<596)},children:(0,e.jsxs)(M.Z.Group,{direction:xe?"column":"row",children:[(0,e.jsx)(M.Z,{statistic:{title:"Agent CPU",value:se(f)*100,suffix:"%",precision:2},chart:(0,e.jsx)(I.Z,{height:70,width:70,innerRadius:.7,renderer:"svg",data:[{name:"",value:.1-se(f)},{name:"CPU",value:se(f)}],angleField:"value",colorField:"name",statistic:void 0,legend:!1,tooltip:!1,label:!1,color:["#f5f5f5","#6394f9"]}),chartPlacement:"left"}),(0,e.jsx)(M.Z,{statistic:{title:"Agent \u5185\u5B58",value:ue(f),suffix:"Mb",precision:2},chart:(0,e.jsx)(I.Z,{height:70,width:70,innerRadius:.7,renderer:"svg",data:[{name:"",value:250-ue(f)},{name:"\u5185\u5B58",value:ue(f)}],angleField:"value",colorField:"name",statistic:void 0,legend:!1,tooltip:!1,label:!1,color:["#f5f5f5","#6394f9"]}),chartPlacement:"left"}),(0,e.jsx)(Ye,{type:xe?"horizontal":"vertical"}),(0,e.jsx)(M.Z,{statistic:{title:"\u7CFB\u7EDF CPU",value:f==null||(c=f.agent_info)===null||c===void 0?void 0:c.sys_cpu,suffix:"%",precision:2},chart:(0,e.jsx)(I.Z,{height:70,width:70,innerRadius:.7,renderer:"svg",data:[{name:"",value:100-((D=f==null||(G=f.agent_info)===null||G===void 0?void 0:G.sys_cpu)!==null&&D!==void 0?D:0)},{name:"CPU",value:f==null||(N=f.agent_info)===null||N===void 0?void 0:N.sys_cpu}],angleField:"value",colorField:"name",statistic:void 0,legend:!1,tooltip:!1,label:!1,color:["#f5f5f5","#6394f9"]}),chartPlacement:"left"}),(0,e.jsx)(M.Z,{statistic:{title:"\u7CFB\u7EDF\u5185\u5B58",value:f==null||($=f.agent_info)===null||$===void 0?void 0:$.sys_mem,suffix:"%",precision:2},chart:(0,e.jsx)(I.Z,{height:70,width:70,innerRadius:.7,renderer:"svg",data:[{name:"",value:100-((Y=f==null||(le=f.agent_info)===null||le===void 0?void 0:le.sys_mem)!==null&&Y!==void 0?Y:0)},{name:"\u5185\u5B58",value:f==null||(de=f.agent_info)===null||de===void 0?void 0:de.sys_mem}],angleField:"value",colorField:"name",statistic:void 0,legend:!1,tooltip:!1,label:!1,color:["#f5f5f5","#6394f9"]}),chartPlacement:"left"})]})},"resize-observer")}),(0,e.jsx)("p",{}),(0,e.jsxs)(y.Z,{tabs:{type:"card"},title:"\u4E3B\u673A\u8BE6\u60C5",children:[(0,e.jsx)(y.Z.TabPane,{tab:"\u63D2\u4EF6\u5217\u8868",children:(0,e.jsx)(E.Z,{columns:Ae,options:!1,rowKey:function(){return Math.random()},dataSource:f.plugins_info,search:{defaultCollapsed:!1,labelWidth:"auto",optionRender:function(a,t,o){return[(0,e.jsx)(ae.Y,{title:"\u4E0B\u53D1\u63D2\u4EF6",trigger:(0,e.jsxs)(Te.Z,{type:"primary",children:[(0,e.jsx)(me.Z,{}),"\u4E0B\u53D1\u63D2\u4EF6"]}),form:Xe,autoFocusFirstInput:!0,modalProps:{destroyOnClose:!0,onCancel:function(){return console.log("run")}},submitTimeout:2e3,onFinish:function(u){var i,j;return(0,C.nc)({name:(i=u.name)!==null&&i!==void 0?i:"",pversion:u.pversion,agent_id:(j=A.agent_id)!==null&&j!==void 0?j:"",action:"insert"}).then(function(n){return n.code!=0?(h.ZP.error("\u4E0B\u53D1\u5931\u8D25:"+n.data),!1):(h.ZP.success("\u4E0B\u53D1\u6210\u529F"),n)})},children:(0,e.jsxs)(U.A.Group,{children:[(0,e.jsx)(V.Z,{width:"md",name:"name",label:"\u63D2\u4EF6\u540D\u79F0",labelAlign:"left",request:_()(l()().mark(function v(){var u,i,j,n,X;return l()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(u=new Array,i=new Map,R===void 0){b.next=16;break}b.t0=l()().keys(R);case 4:if((b.t1=b.t0()).done){b.next=16;break}if(j=b.t1.value,n=R[j].name,i.get(n)!==!0){b.next=11;break}return b.abrupt("continue",4);case 11:i.set(n,!0);case 12:X={label:n,value:n},u.push(X),b.next=4;break;case 16:return b.abrupt("return",u);case 17:case"end":return b.stop()}},v)})),placeholder:"\u8BF7\u9009\u62E9\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u63D2\u4EF6\u540D\u79F0"}]}),(0,e.jsx)(K.Z,{name:["name"],ignoreFormListField:!0,children:function(u){var i=u.name;return(0,e.jsx)(V.Z,{width:"md",name:"pversion",params:{name:i},request:function(){var j=_()(l()().mark(function n(X){var fe,b,pe,ve,Pe;return l()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:if(fe=X.name,b=new Array,R===void 0){F.next=13;break}F.t0=l()().keys(R);case 4:if((F.t1=F.t0()).done){F.next=13;break}if(pe=F.t1.value,R[pe].name==fe){F.next=8;break}return F.abrupt("continue",4);case 8:ve=R[pe].pversion,Pe={label:ve,value:ve},b.push(Pe),F.next=4;break;case 13:return F.abrupt("return",b);case 14:case"end":return F.stop()}},n)}));return function(n){return j.apply(this,arguments)}}(),label:"\u63D2\u4EF6\u7248\u672C",placeholder:"\u8BF7\u8F93\u5165\u7248\u672C",rules:[{required:!0}]})}})]})})].concat(T()(o.reverse()))}}})},"tab1"),(0,e.jsx)(y.Z.TabPane,{tab:"\u8FDB\u7A0B\u5217\u8868",children:(0,e.jsx)(E.Z,{columns:Me,options:!1,rowKey:function(){return Math.random()},pagination:{pageSize:10,pageSizeOptions:["10","20","50"]},request:function(){var s=_()(l()().mark(function a(t,o,v){var u,i;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,C.Nh)({type:"processes",agent_id:(u=A.agent_id)!==null&&u!==void 0?u:"",page:t.current,size:t.pageSize,sort:o,filter:v,keyword:{pid:t.pid,name:t.name,exe:t.exe}});case 2:return i=n.sent,n.abrupt("return",{data:i.data.assets,success:i.code==0,total:i.data.total});case 4:case"end":return n.stop()}},a)}));return function(a,t,o){return s.apply(this,arguments)}}()})},"tab2"),(0,e.jsx)(y.Z.TabPane,{tab:"\u7F51\u7EDC\u5217\u8868",children:(0,e.jsx)(E.Z,{columns:Be,options:!1,pagination:{pageSize:10},rowKey:function(){return Math.random()},request:function(){var s=_()(l()().mark(function a(t,o,v){var u,i;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,C.Nh)({type:"sockets",agent_id:(u=A.agent_id)!==null&&u!==void 0?u:"",page:t.current,size:t.pageSize,sort:o,filter:v,keyword:{pid:t.pid,dip:t.dip,dport:t.dport}});case 2:return i=n.sent,n.abrupt("return",{data:i.data.assets,success:i.code==0,total:i.data.total});case 4:case"end":return n.stop()}},a)}));return function(a,t,o){return s.apply(this,arguments)}}()})},"tab3"),(0,e.jsx)(y.Z.TabPane,{tab:"\u7528\u6237\u5217\u8868",children:(0,e.jsx)(E.Z,{columns:ze,options:!1,pagination:{pageSize:10},rowKey:function(){return Math.random()},request:function(){var s=_()(l()().mark(function a(t,o,v){var u,i;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,C.Nh)({type:"users",agent_id:(u=A.agent_id)!==null&&u!==void 0?u:"",page:t.current,size:t.pageSize,sort:o,filter:v,keyword:{username:t.username,group_name:t.group_name,uid:t.uid}});case 2:return i=n.sent,n.abrupt("return",{data:i.data.assets,success:i.code==0,total:i.data.total});case 4:case"end":return n.stop()}},a)}));return function(a,t,o){return s.apply(this,arguments)}}()})},"tab4"),(0,e.jsx)(y.Z.TabPane,{tab:"\u5B9A\u65F6\u4EFB\u52A1",children:(0,e.jsx)(E.Z,{columns:He,options:!1,pagination:{pageSize:10},rowKey:function(){return Math.random()},request:function(){var s=_()(l()().mark(function a(t,o,v){var u,i;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,C.Nh)({type:"crons",agent_id:(u=A.agent_id)!==null&&u!==void 0?u:"",page:t.current,size:t.pageSize,sort:o,filter:v,keyword:{command:t.command,path:t.path}});case 2:return i=n.sent,n.abrupt("return",{data:i.data.assets,success:i.code==0,total:i.data.total});case 4:case"end":return n.stop()}},a)}));return function(a,t,o){return s.apply(this,arguments)}}()})},"tab5"),(0,e.jsx)(y.Z.TabPane,{tab:"\u5E94\u7528\u8D44\u4EA7",children:(0,e.jsx)(E.Z,{columns:Re,options:!1,pagination:{pageSize:10},rowKey:function(){return Math.random()},request:function(){var s=_()(l()().mark(function a(t,o,v){var u,i;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,C.Nh)({type:"apps",agent_id:(u=A.agent_id)!==null&&u!==void 0?u:"",page:t.current,size:t.pageSize,sort:o,filter:v,keyword:{type:t.type,name:t.name,container_name:t.container_name}});case 2:return i=n.sent,n.abrupt("return",{data:i.data.assets,success:i.code==0,total:i.data.total});case 4:case"end":return n.stop()}},a)}));return function(a,t,o){return s.apply(this,arguments)}}()})},"tab6"),(0,e.jsx)(y.Z.TabPane,{tab:"\u5185\u6838\u6A21\u5757",children:(0,e.jsx)(E.Z,{columns:Oe,options:!1,pagination:{pageSize:10},rowKey:function(){return Math.random()},request:function(){var s=_()(l()().mark(function a(t,o,v){var u,i;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,C.Nh)({type:"kmods",agent_id:(u=A.agent_id)!==null&&u!==void 0?u:"",page:t.current,size:t.pageSize,sort:o,filter:v,keyword:{addr:t.addr,name:t.name}});case 2:return i=n.sent,n.abrupt("return",{data:i.data.assets,success:i.code==0,total:i.data.total});case 4:case"end":return n.stop()}},a)}));return function(a,t,o){return s.apply(this,arguments)}}()})},"tab7"),(0,e.jsx)(y.Z.TabPane,{tab:"\u5BB9\u5668\u8D44\u4EA7",children:(0,e.jsx)(E.Z,{columns:Ue,options:!1,pagination:{pageSize:10},rowKey:function(){return Math.random()},request:function(){var s=_()(l()().mark(function a(t,o,v){var u,i;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(o,v),n.next=3,(0,C.Nh)({type:"containers",agent_id:(u=A.agent_id)!==null&&u!==void 0?u:"",page:t.current,size:t.pageSize,sort:o,filter:v,keyword:{names:t.names,image_name:t.image_name}});case 3:return i=n.sent,n.abrupt("return",{data:i.data.assets,success:i.code==0,total:i.data.total});case 5:case"end":return n.stop()}},a)}));return function(a,t,o){return s.apply(this,arguments)}}()})},"tab8")]})]})},Le=Ke},49748:function(Ce,W,r){r.d(W,{Ek:function(){return B},LH:function(){return O},Nh:function(){return ie},UV:function(){return V},ZN:function(){return re},Zs:function(){return ne},nc:function(){return ae},pi:function(){return x},sk:function(){return S}});var q=r(15009),l=r.n(q),ee=r(97857),_=r.n(ee),te=r(99289),T=r.n(te),Z=r(80854);function B(d){return M.apply(this,arguments)}function M(){return M=T()(l()().mark(function d(g){return l()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,Z.request)("/api/v1/grpc/conn/count",_()({method:"GET"},g||{})));case 1:case"end":return h.stop()}},d)})),M.apply(this,arguments)}function ne(d,g){return y.apply(this,arguments)}function y(){return y=T()(l()().mark(function d(g,I){return l()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",(0,Z.request)("/api/v1/grpc/conn/basic",_()({method:"GET",params:_()({},g)},I||{})));case 1:case"end":return m.stop()}},d)})),y.apply(this,arguments)}function x(d,g){return E.apply(this,arguments)}function E(){return E=T()(l()().mark(function d(g,I){return l()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",(0,Z.request)("/api/v1/grpc/conn/stat",_()({method:"GET",params:_()({},g)},I||{})));case 1:case"end":return m.stop()}},d)})),E.apply(this,arguments)}function ae(d,g){return U.apply(this,arguments)}function U(){return U=T()(l()().mark(function d(g,I){return l()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",(0,Z.request)("/api/v1/plugin/send",_()({method:"POST",data:JSON.stringify({name:g.name,pversion:g.pversion,agent_id:g.agent_id,action:g.action}),headers:{"Content-Type":"application/json"}},I||{})));case 1:case"end":return m.stop()}},d)})),U.apply(this,arguments)}function V(d){return K.apply(this,arguments)}function K(){return K=T()(l()().mark(function d(g){return l()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,Z.request)("/api/v1/plugin/list",_()({method:"GET"},g||{})));case 1:case"end":return h.stop()}},d)})),K.apply(this,arguments)}function S(d){return(0,Z.request)("/api/v1/plugin/delete",_()({method:"GET"},d||{}))}function re(d){return P.apply(this,arguments)}function P(){return P=T()(l()().mark(function d(g){return l()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,Z.request)("/api/v1/application/dashboard",_()({method:"GET"},g||{})));case 1:case"end":return h.stop()}},d)})),P.apply(this,arguments)}function O(d,g){return L.apply(this,arguments)}function L(){return L=T()(l()().mark(function d(g,I){return l()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",(0,Z.request)(g,_()({},I||{})));case 1:case"end":return m.stop()}},d)})),L.apply(this,arguments)}function ie(d,g){return k.apply(this,arguments)}function k(){return k=T()(l()().mark(function d(g,I){return l()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",(0,Z.request)("/api/v1/asset/get",_()({method:"GET",params:g},I||{})));case 1:case"end":return m.stop()}},d)})),k.apply(this,arguments)}}}]);

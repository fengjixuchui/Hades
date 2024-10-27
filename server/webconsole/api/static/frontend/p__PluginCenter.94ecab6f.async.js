"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[898],{51042:function($,T,e){var D=e(1413),d=e(67294),R=e(42110),b=e(91146),W=function(Z,c){return d.createElement(b.Z,(0,D.Z)((0,D.Z)({},Z),{},{ref:c,icon:R.Z}))},p=d.forwardRef(W);T.Z=p},5966:function($,T,e){var D=e(97685),d=e(1413),R=e(91),b=e(21770),W=e(8232),p=e(55241),y=e(97435),Z=e(67294),c=e(34762),l=e(85893),S=["fieldProps","proFieldProps"],U=["fieldProps","proFieldProps"],A="text",H=function(n){var r=n.fieldProps,i=n.proFieldProps,P=(0,R.Z)(n,S);return(0,l.jsx)(c.Z,(0,d.Z)({valueType:A,fieldProps:r,filedConfig:{valueType:A},proFieldProps:i},P))},z=function(n){var r=(0,b.Z)(n.open||!1,{value:n.open,onChange:n.onOpenChange}),i=(0,D.Z)(r,2),P=i[0],L=i[1];return(0,l.jsx)(W.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(B){var v,s=B.getFieldValue(n.name||[]);return(0,l.jsx)(p.Z,(0,d.Z)((0,d.Z)({getPopupContainer:function(o){return o&&o.parentNode?o.parentNode:o},onOpenChange:function(o){return L(o)},content:(0,l.jsxs)("div",{style:{padding:"4px 0"},children:[(v=n.statusRender)===null||v===void 0?void 0:v.call(n,s),n.strengthText?(0,l.jsx)("div",{style:{marginTop:10},children:(0,l.jsx)("span",{children:n.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},n.popoverProps),{},{open:P,children:n.children}))}})},Y=function(n){var r=n.fieldProps,i=n.proFieldProps,P=(0,R.Z)(n,U),L=(0,Z.useState)(!1),K=(0,D.Z)(L,2),B=K[0],v=K[1];return r!=null&&r.statusRender&&P.name?(0,l.jsx)(z,{name:P.name,statusRender:r==null?void 0:r.statusRender,popoverProps:r==null?void 0:r.popoverProps,strengthText:r==null?void 0:r.strengthText,open:B,onOpenChange:v,children:(0,l.jsx)("div",{children:(0,l.jsx)(c.Z,(0,d.Z)({valueType:"password",fieldProps:(0,d.Z)((0,d.Z)({},(0,y.Z)(r,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(g){var o;r==null||(o=r.onBlur)===null||o===void 0||o.call(r,g),v(!1)},onClick:function(g){var o;r==null||(o=r.onClick)===null||o===void 0||o.call(r,g),v(!0)}}),proFieldProps:i,filedConfig:{valueType:A}},P))})}):(0,l.jsx)(c.Z,(0,d.Z)({valueType:"password",fieldProps:r,proFieldProps:i,filedConfig:{valueType:A}},P))},F=H;F.Password=Y,F.displayName="ProFormComponent",T.Z=F},27028:function($,T,e){e.r(T);var D=e(97857),d=e.n(D),R=e(19632),b=e.n(R),W=e(15009),p=e.n(W),y=e(13769),Z=e.n(y),c=e(99289),l=e.n(c),S=e(5574),U=e.n(S),A=e(51042),H=e(38345),z=e(39880),Y=e(37476),F=e(34994),h=e(5966),n=e(35312),r=e(2453),i=e(14726),P=e(17788),L=e(8232),K=e(27484),B=e.n(K),v=e(67294),s=e(85893),g=["current","pageSize"],o=function(){var V=(0,v.useState)([]),G=U()(V,2),J=G[0],Q=G[1],X=(0,v.useState)(0),N=U()(X,2),k=N[0],w=N[1],x=function(){var I=l()(p()().mark(function E(){var a,j,C,f,M,O,m,t=arguments;return p()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return a=t.length>0&&t[0]!==void 0?t[0]:{},j=t.length>1&&t[1]!==void 0?t[1]:{},C=t.length>2&&t[2]!==void 0?t[2]:{},_.prev=3,f=a.current,M=a.pageSize,O=Z()(a,g),_.next=7,(0,n.request)("/api/v1/plugin/list",{params:{page:f,size:M,keyword:O,sort:j,filter:C}});case 7:if(m=_.sent,m.code!==0){_.next=14;break}return Q(m.data.items||[]),w(m.data.total||0),_.abrupt("return",m.data.items);case 14:return r.ZP.error(m.message),_.abrupt("return",{});case 16:_.next=22;break;case 18:return _.prev=18,_.t0=_.catch(3),r.ZP.error("\u83B7\u53D6\u6570\u636E\u5931\u8D25\uFF01"),_.abrupt("return",{});case 22:case"end":return _.stop()}},E,null,[[3,18]])}));return function(){return I.apply(this,arguments)}}(),q=function(E,a,j,C){var f=E.current,M=E.pageSize;x({current:f,pageSize:M},j,a)},ee=[{title:(0,s.jsx)(n.FormattedMessage,{id:"name"}),dataIndex:"name",copyable:!0},{title:(0,s.jsx)(n.FormattedMessage,{id:"version"}),dataIndex:"pversion"},{title:"SHA256",dataIndex:"sha256",copyable:!0},{title:"URL",dataIndex:"urls",search:!1,ellipsis:!0},{title:(0,s.jsx)(n.FormattedMessage,{id:"create_at"}),dataIndex:"create_at",search:!1,render:function(E,a){return a?B().unix(a==null?void 0:a.create_at).format("YYYY-MM-DD HH:mm:ss"):"-"}},{title:(0,s.jsx)(n.FormattedMessage,{id:"update_time"}),dataIndex:"modify_at",search:!1,render:function(E,a){return a?B().unix(a==null?void 0:a.modify_at).format("YYYY-MM-DD HH:mm:ss"):"-"}},{title:(0,s.jsx)(n.FormattedMessage,{id:"option"}),key:"option",valueType:"option",render:function(E,a){return[(0,s.jsx)(i.ZP,{type:"link",disabled:!0,size:"small",children:(0,s.jsx)(n.FormattedMessage,{id:"detail"})},"detail"),(0,s.jsx)(i.ZP,{type:"link",disabled:!0,size:"small",children:(0,s.jsx)(n.FormattedMessage,{id:"update"})},"update"),(0,s.jsx)(i.ZP,{type:"link",size:"small",onClick:function(){P.Z.confirm({title:(0,s.jsx)(n.FormattedMessage,{id:"confirm"}),content:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",onOk:function(){var C=l()(p()().mark(function M(){var O;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,n.request)("/api/v1/plugin/delete",{method:"GET",params:{name:a.name,pversion:a.pversion}});case 3:O=t.sent,O.code===0?(r.ZP.success("\u5220\u9664\u6210\u529F"),x()):r.ZP.error(O.message),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r.ZP.error("\u5220\u9664\u5931\u8D25\uFF01");case 10:case"end":return t.stop()}},M,null,[[0,7]])}));function f(){return C.apply(this,arguments)}return f}()})},children:(0,s.jsx)(n.FormattedMessage,{id:"delete"})},"delete")]},width:"12%"}],re=L.Z.useForm(),ne=U()(re,1),se=ne[0];return(0,s.jsx)(H.Z,{children:(0,s.jsx)(z.Z,{columns:ee,options:!1,pagination:{total:k,pageSize:10,showSizeChanger:!0,pageSizeOptions:[10,20,50]},request:x,search:{defaultCollapsed:!1,optionRender:function(E,a,j){return[].concat(b()(j.reverse()),[(0,s.jsxs)(Y.Y,{title:"\u65B0\u589E\u63D2\u4EF6",trigger:(0,s.jsxs)(i.ZP,{type:"primary",children:[(0,s.jsx)(A.Z,{}),"\u65B0\u589E\u63D2\u4EF6"]}),form:se,onFinish:function(){var C=l()(p()().mark(function f(M){var O,m;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,O=M.urls.split(",").map(function(_){return _.trim()}).filter(function(_){return _}),u.next=4,(0,n.request)("/api/v1/plugin/insert",{method:"POST",data:d()(d()({},M),{},{urls:O})});case 4:if(m=u.sent,m.code!==0){u.next=9;break}return r.ZP.success("\u63D0\u4EA4\u6210\u529F"),x(),u.abrupt("return",!0);case 9:r.ZP.error(m.message),u.next=15;break;case 12:u.prev=12,u.t0=u.catch(0),r.ZP.error("\u63D0\u4EA4\u5931\u8D25\uFF01");case 15:case"end":return u.stop()}},f,null,[[0,12]])}));return function(f){return C.apply(this,arguments)}}(),children:[(0,s.jsxs)(F.A.Group,{children:[(0,s.jsx)(h.Z,{width:"md",name:"name",label:"\u63D2\u4EF6\u540D\u79F0",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",required:!0}),(0,s.jsx)(h.Z,{width:"md",name:"pversion",label:(0,s.jsx)(n.FormattedMessage,{id:"version"}),tooltip:"\u4F8B\u5982 v1.0.0",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",required:!0})]}),(0,s.jsx)(h.Z,{width:"xl",name:"sha256",label:"HASH",required:!0}),(0,s.jsx)(h.Z,{width:"xl",name:"urls",label:"URL",required:!0}),(0,s.jsx)(h.Z,{width:"xl",name:"desc",label:(0,s.jsx)(n.FormattedMessage,{id:"desc"})})]})])}},rowKey:"key",tooltip:!1,dataSource:J,onChange:q})})};T.default=o}}]);

"use strict";(self["webpackChunkqltools"]=self["webpackChunkqltools"]||[]).push([[881],{6594:function(i,t,n){n.d(t,{Z:function(){return q}});var s=n(6252);const a={class:"mdui-drawer mdui-shadow-6",id:"main-drawer",style:{"box-sizing":"border-box"}},e={class:"mdui-list"},d=(0,s._)("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"desktop_mac",-1),o=(0,s._)("div",{class:"mdui-list-item-content"},"仪表盘",-1),l=[d,o],m=(0,s._)("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"playlist_play",-1),c=(0,s._)("div",{class:"mdui-list-item-content"},"变量管理",-1),r=[m,c],u=(0,s._)("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"apps",-1),p=(0,s._)("div",{class:"mdui-list-item-content"},"面板管理",-1),_=[u,p],v=(0,s._)("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"import_export",-1),h=(0,s._)("div",{class:"mdui-list-item-content"},"迁移/复制",-1),g=[v,h],f=(0,s._)("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"sms",-1),w=(0,s._)("div",{class:"mdui-list-item-content"},"推送管理",-1),b=[f,w],x=(0,s._)("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"settings",-1),y=(0,s._)("div",{class:"mdui-list-item-content"},"网站设置",-1),k=[x,y],C=(0,s._)("a",{class:"mdui-list-item","mdui-drawer-close":""},[(0,s._)("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"chevron_left"),(0,s._)("div",{class:"mdui-list-item-content"},"收起菜单")],-1);function U(i,t,n,d,o,m){return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",e,[(0,s._)("a",{onClick:t[0]||(t[0]=i=>this.OpenURL("/#/admin/")),class:"mdui-list-item"},l),(0,s._)("a",{onClick:t[1]||(t[1]=i=>this.OpenURL("/#/admin/env/")),class:"mdui-list-item"},r),(0,s._)("a",{onClick:t[2]||(t[2]=i=>this.OpenURL("/#/admin/panel/")),class:"mdui-list-item"},_),(0,s._)("a",{onClick:t[3]||(t[3]=i=>this.OpenURL("/#/admin/transfer/")),class:"mdui-list-item"},g),(0,s._)("a",{onClick:t[4]||(t[4]=i=>this.OpenURL("/#/admin/message/")),class:"mdui-list-item"},b),(0,s._)("a",{onClick:t[5]||(t[5]=i=>this.OpenURL("/#/admin/settings/")),class:"mdui-list-item"},k),C])])}var A=n(4493),L={name:"AdminBar",methods:{changeStyle(){window.innerWidth>=1e3&&document.getElementById("main-drawer").classList.add("mdui-drawer-open");let i=document.querySelector("#container");i.style.minHeight=window.innerHeight-document.body.clientHeight+i.clientHeight+"px",A.Z.mutation()},OpenURL(i){window.open(i,"_self"),location.reload()}},mounted(){this.changeStyle()}},Z=n(3744);const W=(0,Z.Z)(L,[["render",U]]);var q=W},28:function(i,t,n){n.d(t,{Z:function(){return O}});var s=n(6252);const a=i=>((0,s.dD)("data-v-3aab8718"),i=i(),(0,s.Cn)(),i),e={class:"mdui-m-t-5"},d={class:"mdui-p-a-5 mdui-typo mdui-container"},o={class:"mdui-row-sm-3"},l={class:"mdui-col mdui-text"},m=a((()=>(0,s._)("span",{id:"Copyright"},"Copyright © 2022 All rights reserved. ",-1))),c={href:"https://github.com/nuanxinqing123/QLTools"},r=(0,s.Uk)("青龙 Tools"),u=a((()=>(0,s._)("p",null,"简单便捷的第三方工具，给您带来不一样的体验！",-1))),p={class:"mdui-col mdui-text"},_=(0,s.Uk)("邮件联系: "),v={href:"mailto:nuanxinqing@gmail.com"},h=(0,s.Uk)("nuanxinqing@gmail.com"),g=(0,s.Uk)("电报联系: "),f={href:"https://t.me/Nuanxinqing"},w=(0,s.Uk)("@Nuanxinqing"),b={class:"mdui-col mdui-text"},x=(0,s.Uk)("电报频道: "),y={href:"https://t.me/qltool"},k=(0,s.Uk)("青龙Tools"),C=(0,s.Uk)("电报群组: "),U={href:"https://t.me/qltools"},A=(0,s.Uk)("青龙Tools吹水群");function L(i,t,n,a,L,Z){const W=(0,s.up)("st");return(0,s.wg)(),(0,s.iD)("footer",e,[(0,s._)("div",d,[(0,s._)("div",o,[(0,s._)("div",l,[(0,s._)("p",null,[m,(0,s._)("a",c,[(0,s.Wm)(W,null,{default:(0,s.w5)((()=>[r])),_:1})])]),u]),(0,s._)("div",p,[(0,s._)("p",null,[_,(0,s._)("a",v,[(0,s.Wm)(W,null,{default:(0,s.w5)((()=>[h])),_:1})])]),(0,s._)("p",null,[g,(0,s._)("a",f,[(0,s.Wm)(W,null,{default:(0,s.w5)((()=>[w])),_:1})])])]),(0,s._)("div",b,[(0,s._)("p",null,[x,(0,s._)("a",y,[(0,s.Wm)(W,null,{default:(0,s.w5)((()=>[k])),_:1})])]),(0,s._)("p",null,[C,(0,s._)("a",U,[(0,s.Wm)(W,null,{default:(0,s.w5)((()=>[A])),_:1})])])])])])])}var Z={name:"AdminFooter"},W=n(3744);const q=(0,W.Z)(Z,[["render",L],["__scopeId","data-v-3aab8718"]]);var O=q},2743:function(i,t,n){n.d(t,{Z:function(){return f}});var s=n(6252);const a={class:"mdui-appbar mdui-appbar-fixed mdui-color-indigo-800"},e={class:"mdui-toolbar"},d=(0,s._)("a",{"mdui-tooltip":"{content: '菜单'}","mdui-drawer":"{target: '#main-drawer'}",class:"mdui-btn mdui-btn-icon"},[(0,s._)("i",{class:"mdui-icon material-icons"},"menu")],-1),o=(0,s._)("a",{href:"javascript:;",class:"mdui-typo-headline"},"Tools",-1),l=(0,s._)("div",{class:"mdui-toolbar-spacer"},null,-1),m=(0,s._)("i",{class:"mdui-icon material-icons"},"home",-1),c=[m],r=(0,s._)("a",{"mdui-tooltip":"{content: '刷新页面'}",href:"javascript:location.reload();",class:"mdui-btn mdui-btn-icon"},[(0,s._)("i",{class:"mdui-icon material-icons"},"refresh")],-1),u=(0,s._)("i",{class:"mdui-icon material-icons"},"exit_to_app",-1),p=[u];function _(i,t,n,m,u,_){return(0,s.wg)(),(0,s.iD)("header",a,[(0,s._)("div",e,[d,o,l,(0,s._)("a",{"mdui-tooltip":"{content: '前往首页'}",onClick:t[0]||(t[0]=(...i)=>_.GoIndex&&_.GoIndex(...i)),class:"mdui-btn mdui-btn-icon"},c),r,(0,s._)("a",{"mdui-tooltip":"{content: '退出登录'}",onClick:t[1]||(t[1]=i=>this.LogOut()),href:"javascript:;",class:"mdui-btn mdui-btn-icon",id:"LogOut"},p)])])}var v={name:"AdminHeader",methods:{LogOut(){console.log("退出登录"),localStorage.clear(),window.open("/#/","_self"),location.reload()},GoIndex(){window.open("/#/","_self"),location.reload()}}},h=n(3744);const g=(0,h.Z)(v,[["render",_]]);var f=g},4881:function(i,t,n){n.r(t),n.d(t,{default:function(){return w}});var s=n(6252);const a={class:"mdui-appbar-with-toolbar"};function e(i,t,n,e,d,o){const l=(0,s.up)("AdminHeader"),m=(0,s.up)("AdminBar"),c=(0,s.up)("AdminMsgCom"),r=(0,s.up)("AdminFooter");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s.Wm)(l),(0,s.Wm)(m),(0,s.Wm)(c),(0,s.Wm)(r)])}var d=n(2743),o=n(6594),l=n(28);const m={id:"container",class:"mdui-container mdui-p-t-1",style:{"margin-top":"10px"}},c=(0,s.uE)('<div class="mdui-card mt" style="border-radius:15px;"><div class="mdui-card-primary"><div class="mdui-card-primary-title">消息推送</div><div class="mdui-card-primary-subtitle">Message Push</div></div><div class="mdui-card-content mdui-typo"><p class="text_s">消息推送是用于管理员感知用户提交操作、网站安全等通知设置</p></div></div><div class="mdui-card mt" style="border-radius:15px;margin-top:15px;"><div style="text-align:center;"><h2>待开发</h2></div></div>',2),r=[c];function u(i,t,n,a,e,d){return(0,s.wg)(),(0,s.iD)("div",m,r)}var p={name:"AdminMsgCom"},_=n(3744);const v=(0,_.Z)(p,[["render",u]]);var h=v,g={name:"AdminEnvView",components:{AdminHeader:d.Z,AdminBar:o.Z,AdminFooter:l.Z,AdminMsgCom:h},mounted(){window.innerWidth>=1e3&&document.body.classList.add("mdui-drawer-body-left")}};const f=(0,_.Z)(g,[["render",e]]);var w=f}}]);
//# sourceMappingURL=881.29fe8010.js.map
"use strict";(self["webpackChunkqltools"]=self["webpackChunkqltools"]||[]).push([[469],{3798:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(6252);const i=e=>((0,a.dD)("data-v-326b083d"),e=e(),(0,a.Cn)(),e),d={class:"mdui-m-t-5",id:"footer"},o={class:"mdui-p-a-5 mdui-typo mdui-container"},l={class:"mdui-col mdui-text"},s=i((()=>(0,a._)("span",{id:"Copyright"},"Copyright © 2022 All rights reserved. ",-1))),c={href:"https://github.com/nuanxinqing123/QLTools"},r=(0,a.Uk)("青龙 Tools"),m=i((()=>(0,a._)("p",null,"简单便捷的第三方工具，给您带来不一样的体验！",-1)));function u(e,t,n,i,u,g){const v=(0,a.up)("st");return(0,a.wg)(),(0,a.iD)("footer",d,[(0,a._)("div",o,[(0,a._)("div",l,[(0,a._)("p",null,[s,(0,a._)("a",c,[(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[r])),_:1})])]),m])])])}var g={name:"FooterCom"},v=n(3744);const p=(0,v.Z)(g,[["render",u],["__scopeId","data-v-326b083d"]]);var y=p},5388:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(6252);const i={class:"mdui-toolbar"},d=(0,a._)("a",{href:"/#/",class:"mdui-btn mdui-btn-icon"},[(0,a._)("i",{class:"mdui-icon material-icons"},"account_balance_wallet")],-1),o=(0,a._)("span",{class:"mdui-typo-title"},"青龙Tools",-1),l=(0,a._)("div",{class:"mdui-toolbar-spacer"},null,-1),s=(0,a._)("a",{"mdui-tooltip":"{content: '刷新页面'}",href:"javascript:location.reload();",class:"mdui-btn mdui-btn-icon"},[(0,a._)("i",{class:"mdui-icon material-icons"},"refresh")],-1),c=(0,a._)("i",{class:"mdui-icon material-icons"},"center_focus_strong",-1),r=[c],m=(0,a._)("i",{class:"mdui-icon material-icons"},"center_focus_weak",-1),u=[m],g=(0,a._)("i",{class:"mdui-icon material-icons"},"account_circle",-1),v=[g],p=(0,a._)("i",{class:"mdui-icon material-icons"},"exit_to_app",-1),y=[p];function I(e,t,n,c,m,g){return(0,a.wg)(),(0,a.iD)("div",i,[d,o,l,s,(0,a._)("a",{"mdui-tooltip":"{content: '登录'}",onClick:t[0]||(t[0]=e=>this.Login()),id:"Login",class:"mdui-btn mdui-btn-icon"},r),(0,a._)("a",{"mdui-tooltip":"{content: '注册'}",onClick:t[1]||(t[1]=e=>this.Register()),id:"Register",class:"mdui-btn mdui-btn-icon"},u),(0,a._)("a",{"mdui-tooltip":"{content: '管理面板'}",onClick:t[2]||(t[2]=e=>this.GoAdmin()),id:"Admin",class:"mdui-btn mdui-btn-icon",style:{display:"none"}},v),(0,a._)("a",{"mdui-tooltip":"{content: '退出登录'}",onClick:t[3]||(t[3]=e=>this.LogOut()),id:"LogOut",class:"mdui-btn mdui-btn-icon",style:{display:"none"}},y)])}var _=n(9669),h=n.n(_),x={name:"HeaderCom",methods:{CheckLogin(){let e=localStorage.getItem("Bearer");if(null!==e&&""!==e){let t={token:e};h().post("/v1/api/check/token",t).then((e=>{!0===e.data.data?(document.getElementById("Admin").style.display="inline",document.getElementById("Login").style.display="none",document.getElementById("Register").style.display="none",document.getElementById("LogOut").style.display="inline"):localStorage.clear()}))}},LogOut(){console.log("退出登录"),localStorage.clear(),window.open("/#/","_self"),location.reload()},GoAdmin(){window.open("/#/admin","_self"),location.reload()},Register(){window.open("/#/register","_self"),location.reload()},Login(){window.open("/#/login","_self"),location.reload()}},mounted(){this.CheckLogin()}},E=n(3744);const D=(0,E.Z)(x,[["render",I]]);var b=D},469:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var a=n(6252);function i(e,t,n,i,d,o){const l=(0,a.up)("HeaderCom"),s=(0,a.up)("NoticeCom"),c=(0,a.up)("FooterCom");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",null,[(0,a.Wm)(l)]),(0,a._)("div",null,[(0,a.Wm)(s)]),(0,a._)("div",null,[(0,a.Wm)(c)])],64)}var d=n(9963);const o=e=>((0,a.dD)("data-v-7d4761ae"),e=e(),(0,a.Cn)(),e),l={id:"BodyCon"},s=o((()=>(0,a._)("div",{class:"box",id:"box_notice"},[(0,a._)("div",null,[(0,a._)("p",{style:{"padding-bottom":"10px"}},"网站公告"),(0,a._)("hr"),(0,a._)("div",{class:"notice_data",id:"notice_data"},[(0,a._)("strong",null,[(0,a._)("span",{style:{color:"#E53333","text-align":"center"}},"本工具仅用于学习和调试使用，禁止用于任何违法犯罪行为")]),(0,a._)("br")])])],-1))),c={class:"box",style:{"margin-top":"35px"}},r=o((()=>(0,a._)("p",{style:{"padding-bottom":"10px"}},"变量提交",-1))),m=o((()=>(0,a._)("hr",null,null,-1))),u={id:"envSelect"},g={style:{width:"100%"}},v={style:{"margin-top":"8px"}},p=(0,a.Uk)(" 服务器： "),y={style:{"margin-top":"8px"}},I=(0,a.Uk)(" 变量组： "),_=o((()=>(0,a._)("div",{style:{"margin-top":"8px","font-size":"16px"}},[(0,a.Uk)(" 剩余位置："),(0,a._)("span",{id:"num"},"0")],-1))),h={class:"envInput"},x={class:"mdui-textfield"},E={class:"mdui-textfield"},D=o((()=>(0,a._)("div",{style:{"text-align":"center","padding-top":"20px"}},[(0,a._)("button",{class:"mdui-btn mdui-btn-raised mdui-ripple mdui-color-blue-50",style:{width:"200px"},id:"LoginBtn"},"提  交")],-1))),b=o((()=>(0,a._)("div",{id:"SendOK",class:"mdui-dialog",style:{display:"none"}},[(0,a._)("div",{class:"mdui-dialog-title",id:"dialog-title"},"Success"),(0,a._)("div",{class:"mdui-dialog-content",id:"dialog-content"},"您已提交成功"),(0,a._)("div",{class:"mdui-dialog-actions"},[(0,a._)("button",{class:"mdui-btn mdui-ripple","mdui-dialog-close":""},"确认")])],-1)));function B(e,t,n,i,o,B){return(0,a.wg)(),(0,a.iD)("div",l,[s,(0,a._)("div",c,[(0,a._)("div",null,[r,m,(0,a._)("div",u,[(0,a._)("div",g,[(0,a._)("div",v,[p,(0,a._)("select",{class:"mdui-select",onChange:t[0]||(t[0]=e=>B.changeEnvData(e)),id:"server"},null,32)]),(0,a._)("div",y,[I,(0,a._)("select",{class:"mdui-select",onChange:t[1]||(t[1]=e=>B.changeNum(e)),id:"env"},null,32)]),_])]),(0,a._)("div",h,[(0,a._)("form",{onSubmit:t[4]||(t[4]=(0,d.iM)(((...e)=>B.POSTEnvAdd&&B.POSTEnvAdd(...e)),["prevent"]))},[(0,a._)("div",x,[(0,a.wy)((0,a._)("input",{type:"text",class:"mdui-textfield-input",placeholder:"Cookie","onUpdate:modelValue":t[2]||(t[2]=e=>o.EnvAdd.envData=e)},null,512),[[d.nr,o.EnvAdd.envData]])]),(0,a._)("div",E,[(0,a.wy)((0,a._)("input",{type:"text",class:"mdui-textfield-input",placeholder:"备注（可空）","onUpdate:modelValue":t[3]||(t[3]=e=>o.EnvAdd.envRemarks=e)},null,512),[[d.nr,o.EnvAdd.envRemarks]])]),D],32)])])]),b])}var T=n(9669),k=n.n(T),f=n(4493),w={name:"NoticeCom",data(){return{InitIndexData:[],EnvData:[],EnvAdd:{serverID:0,envName:"",envData:"",envRemarks:""}}},methods:{GetIndexData(){k().get("/v1/api/index/data").then((e=>{this.InitIndexData=e.data.data,this.EnvData=this.InitIndexData["serverData"][0]["envData"],this.EnvAdd.serverID=this.InitIndexData["serverData"][0]["ID"],this.EnvAdd.envName=this.InitIndexData["serverData"][0]["envData"][0]["name"],document.getElementById("num").innerText=this.InitIndexData["serverData"][0]["envData"][0]["quantity"];let t=new f.Z.Select("#server"),n=new f.Z.Select("#env"),a="",i="";for(let d=0;d<this.InitIndexData["serverData"].length;d++)a=a+"<option>"+this.InitIndexData["serverData"][d]["PanelName"]+"</option>";for(let d=0;d<this.InitIndexData["serverData"][0].envData.length;d++)i=i+"<option>"+this.InitIndexData["serverData"][0].envData[d]["name"]+"</option>";document.getElementById("server").innerHTML=a,document.getElementById("env").innerHTML=i,t.handleUpdate(),n.handleUpdate()}))},GetNotice(){k().get("/v1/api/set/setting?key=notice").then((e=>{document.getElementById("notice_data").innerHTML=e.data.data["value"]}))},changeEnvData(e){let t=e.target.selectedIndex;this.EnvData=this.InitIndexData["serverData"][t]["envData"],this.EnvAdd.serverID=this.InitIndexData["serverData"][t]["ID"],this.EnvAdd.envName=this.InitIndexData["serverData"][t]["envData"][0]["name"],document.getElementById("num").innerText=this.InitIndexData["serverData"][t]["envData"][0]["quantity"]},changeNum(e){let t=e.target.selectedIndex;document.getElementById("num").innerText=this.EnvData[t]["quantity"],this.EnvAdd.envName=this.EnvData[t]["name"]},POSTEnvAdd(){let e=new f.Z.Dialog("#SendOK");k().post("/v1/api/env/add",this.EnvAdd).then((t=>{switch(""!==t.data){case 2e3===t.data.code:document.getElementById("dialog-title").innerText="Success",document.getElementById("dialog-content").innerText="您已提交成功",e.toggle();break;case 5020===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="限额已满，禁止提交",e.toggle();break;case 5019===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="上传内容不符合规定, 请检查后再提交",e.toggle();break;case 5015===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="提交服务器或变量名不在白名单",e.toggle();break;case 5016===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="发生一点小意外，请重新提交",e.toggle();break;case 5024===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="禁止提交重复数据",e.toggle();break;case 5025===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="变量已被管理员禁止提交",e.toggle();break;case 5026===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="今日提交已到达上限",e.toggle();break;case 5028===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText=t.data.msg,e.toggle();break;case 5029===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="提交数据已被管理员拒绝，原因："+t.data.msg,e.toggle();break;case 5003===t.data.code:document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="服务繁忙,请稍后重试",e.toggle();break;case 5002===t.data.code:""===t.data.data?(document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText="服务繁忙,请稍后重试",e.toggle()):(document.getElementById("dialog-title").innerText="Error",document.getElementById("dialog-content").innerText=JSON.parse(t.data.msg),e.toggle());break}})).catch((e=>{f.Z.snackbar({message:e,position:"right-top"})}))},changeStyle(){let e=document.querySelector("#BodyCon");e.style.minHeight=window.innerHeight-document.body.clientHeight+e.clientHeight+"px",f.Z.mutation()}},mounted(){this.GetIndexData(),this.GetNotice(),this.changeStyle()}},C=n(3744);const A=(0,C.Z)(w,[["render",B],["__scopeId","data-v-7d4761ae"]]);var S=A,L=n(5388),N=n(3798),Z={name:"IndexView",components:{HeaderCom:L.Z,NoticeCom:S,FooterCom:N.Z}};const H=(0,C.Z)(Z,[["render",i]]);var O=H}}]);
//# sourceMappingURL=469.6414e393.js.map
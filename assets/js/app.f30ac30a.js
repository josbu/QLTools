(function(){"use strict";var e={6581:function(e,t,n){var r=n(9963),o=n(6252);function a(e,t,n,r,a,i){const u=(0,o.up)("router-view"),l=(0,o.Q2)("wechat-title");return(0,o.wy)(((0,o.wg)(),(0,o.j4)(u,null,null,512)),[[l,e.$route.meta["title"]]])}var i={name:"App"},u=n(3744);const l=(0,u.Z)(i,[["render",a]]);var c=l,s=n(2119),f=n(9669),d=n.n(f);const m=[{path:"/",name:"Index",meta:{requireAuth:!1,title:"青龙Tools"},component:()=>Promise.all([n.e(493),n.e(660)]).then(n.bind(n,2660))},{path:"/login",name:"login",meta:{requireAuth:!1,title:"管理员登录"},component:()=>Promise.all([n.e(493),n.e(63)]).then(n.bind(n,5063))},{path:"/register",name:"register",meta:{requireAuth:!1,title:"管理员注册"},component:()=>Promise.all([n.e(493),n.e(923)]).then(n.bind(n,8923))},{path:"/admin",name:"admin",meta:{requireAuth:!0,title:"后台管理"},component:()=>Promise.all([n.e(493),n.e(965)]).then(n.bind(n,8965))},{path:"/admin/env",name:"adminEnv",meta:{requireAuth:!0,title:"变量管理"},component:()=>Promise.all([n.e(493),n.e(49)]).then(n.bind(n,7049))},{path:"/admin/panel",name:"adminPanel",meta:{requireAuth:!0,title:"面板管理"},component:()=>Promise.all([n.e(493),n.e(464)]).then(n.bind(n,7464))},{path:"/admin/transfer",name:"adminTransfer",meta:{requireAuth:!0,title:"迁移/复制管理"},component:()=>Promise.all([n.e(493),n.e(744)]).then(n.bind(n,6744))},{path:"/admin/message",name:"adminMessage",meta:{requireAuth:!0,title:"推送管理"},component:()=>Promise.all([n.e(493),n.e(881)]).then(n.bind(n,4881))},{path:"/admin/settings",name:"adminSettings",meta:{requireAuth:!0,title:"网站设置"},component:()=>Promise.all([n.e(493),n.e(200)]).then(n.bind(n,5200))}],h=(0,s.p7)({history:(0,s.r5)("/static/"),routes:m});h.beforeEach(((e,t,n)=>{if(e.meta.requireAuth){let e=localStorage.getItem("Bearer");if(null===e||""===e)h.push("login");else{let e={token:localStorage.getItem("Bearer")};d().post("/v1/api/check/token",e).then((e=>{!0===e.data.data?n():(localStorage.clear(),h.push("login"))}))}}else n()}));var p=h,g=n(3907),v=(0,g.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),b=n(8838),y=n.n(b);d().defaults.timeout=5e3,d().defaults.baseURL="/",d().defaults.headers.common.Authorization="Bearer "+localStorage.getItem("Bearer"),(0,r.ri)(c).use(v).use(p).use(y()).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var u=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(u=!1,a<i&&(i=a));if(u){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{49:"ed324cc1",63:"9f399253",200:"ab71d030",464:"4a6d4ab9",493:"fdb76b15",660:"cb83d582",744:"77fe4f60",881:"29fe8010",923:"70e51e1b",965:"4b246b11"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{49:"3a34f17a",63:"8bdd163e",200:"f54ca039",464:"3a34f17a",660:"d7c16347",744:"3a34f17a",881:"3a34f17a",923:"57532a43",965:"3a34f17a"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="qltools:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var f=c[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+a){u=f;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/static/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=u,o.parentNode.removeChild(o),r(l)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return o();e(r,u,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={49:1,63:1,200:1,464:1,660:1,744:1,881:1,923:1,965:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,l=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],l=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(l)var s=l(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},r=self["webpackChunkqltools"]=self["webpackChunkqltools"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6581)}));r=n.O(r)})();
//# sourceMappingURL=app.f30ac30a.js.map
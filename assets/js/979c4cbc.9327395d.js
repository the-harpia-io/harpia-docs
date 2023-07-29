"use strict";(self.webpackChunkharpia_docs=self.webpackChunkharpia_docs||[]).push([[8114],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1914:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:9},a="Send SMS",s={unversionedId:"scenarios-overview/sms",id:"scenarios-overview/sms",title:"Send SMS",description:"Make sure that you configured SMS Harp Bot. It won`t work without it.",source:"@site/docs/scenarios-overview/sms.md",sourceDirName:"scenarios-overview",slug:"/scenarios-overview/sms",permalink:"/docs/scenarios-overview/sms",draft:!1,editUrl:"https://github.com/the-harpia-io/harpia-docs/tree/master/docs/scenarios-overview/sms.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Create Slack notification",permalink:"/docs/scenarios-overview/slack"},next:{title:"Send Telegram message",permalink:"/docs/scenarios-overview/telegram"}},c={},p=[],l={toc:p};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"send-sms"},"Send SMS"),(0,o.kt)("admonition",{title:"Prerequisite",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Make sure that you configured ",(0,o.kt)("a",{parentName:"p",href:"/docs/configure-bots/sms"},"SMS Harp Bot"),". It won`t work without it.")),(0,o.kt)("p",null,"Harp Platform can automatically send the SMS using integration with Twilio"),(0,o.kt)("p",null,"You can also define how much time need to wait before trigger the action. 0s - means to send immediately"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img_18.png",src:r(3182).Z,width:"2542",height:"627"})))}u.isMDXComponent=!0},3182:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/img_18-7f5a3e80561e51c158c6d28db7449f9a.png"}}]);
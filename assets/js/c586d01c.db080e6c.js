"use strict";(self.webpackChunkharpia_docs=self.webpackChunkharpia_docs||[]).push([[2567],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8943:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:8},i="Platform Health",l={unversionedId:"status-page-overview",id:"status-page-overview",title:"Platform Health",description:"Status page will help you to understand the health of your Harp Platform (SaaS or On Prem)",source:"@site/docs/status-page-overview.md",sourceDirName:".",slug:"/status-page-overview",permalink:"/docs/status-page-overview",draft:!1,editUrl:"https://github.com/the-harpia-io/harpia-docs/tree/master/docs/status-page-overview.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Platform Installation",permalink:"/docs/platform-installation"},next:{title:"Platform Architecture",permalink:"/docs/platform-architecture"}},s={},c=[{value:"How to find",id:"how-to-find",level:3},{value:"What you can see inside",id:"what-you-can-see-inside",level:3},{value:"What I should do in case of problem?",id:"what-i-should-do-in-case-of-problem",level:3}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"platform-health"},"Platform Health"),(0,n.kt)("p",null,"Status page will help you to understand the health of your Harp Platform (SaaS or On Prem)"),(0,n.kt)("h3",{id:"how-to-find"},"How to find"),(0,n.kt)("p",null,"Go to ",(0,n.kt)("inlineCode",{parentName:"p"},"Menu")," and choose ",(0,n.kt)("inlineCode",{parentName:"p"},"Status Page")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img_59.png",src:r(5625).Z,width:"2232",height:"499"})),(0,n.kt)("h3",{id:"what-you-can-see-inside"},"What you can see inside"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Harp backend services"),": if some services are red - part of the Harp functionality can be broken"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Harp databases"),": if some databases are red - part of the Harp functionality can be broken"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Alerts in Queue"),": if queue is increasing it means that you can receive alerts in Harp UI with daley")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img_60.png",src:r(5526).Z,width:"2548",height:"1219"})),(0,n.kt)("h3",{id:"what-i-should-do-in-case-of-problem"},"What I should do in case of problem?"),(0,n.kt)("p",null,"You can open the chat icon and notify us about potential problems"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img_61.png",src:r(1740).Z,width:"2542",height:"1290"})))}u.isMDXComponent=!0},5625:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/img_59-17081c28637773bb4248bd8257882475.png"},5526:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/img_60-3a00d7d335b842cceaa44947481aac36.png"},1740:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/img_61-a2282e340cdfa3f4ed773ccc4a9c8ec8.png"}}]);
"use strict";(self.webpackChunkharpia_docs=self.webpackChunkharpia_docs||[]).push([[8253],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(n),d=r,h=g["".concat(s,".").concat(d)]||g[d]||u[d]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:6},o="Grafana",l={unversionedId:"incoming-integrations/grafana",id:"incoming-integrations/grafana",title:"Grafana",description:"This article will describe how you can connect your monitoring systems to Harp",source:"@site/docs/incoming-integrations/grafana.md",sourceDirName:"incoming-integrations",slug:"/incoming-integrations/grafana",permalink:"/docs/incoming-integrations/grafana",draft:!1,editUrl:"https://github.com/the-harpia-io/harpia-docs/tree/master/docs/incoming-integrations/grafana.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"GCP",permalink:"/docs/incoming-integrations/gcp"},next:{title:"Icinga2",permalink:"/docs/incoming-integrations/icinga"}},s={},c=[{value:"How it works",id:"how-it-works",level:3},{value:"How to register new integration in Harp",id:"how-to-register-new-integration-in-harp",level:3},{value:"How to configure in Grafana",id:"how-to-configure-in-grafana",level:3},{value:"1. Go to \u201cNotification Channels\u201d",id:"1-go-to-notification-channels",level:4},{value:"2. Create a new Grafana channel",id:"2-create-a-new-grafana-channel",level:4},{value:"3. After save, you should see the Harp channel in the list",id:"3-after-save-you-should-see-the-harp-channel-in-the-list",level:4},{value:"4. Add Harp channel to your alert",id:"4-add-harp-channel-to-your-alert",level:4},{value:"5. You are good to go! Your Grafana integration is completed, and you can start working with alerts in Harp",id:"5-you-are-good-to-go-your-grafana-integration-is-completed-and-you-can-start-working-with-alerts-in-harp",level:4},{value:"Additional info",id:"additional-info",level:3}],p={toc:c};function g(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"grafana"},"Grafana"),(0,r.kt)("p",null,"This article will describe how you can connect your monitoring systems to Harp"),(0,r.kt)("h3",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"Grafana uses Webhook to send alerts to the Harp endpoint"),(0,r.kt)("h3",{id:"how-to-register-new-integration-in-harp"},"How to register new integration in Harp"),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"/docs/integration"},"these steps")," to register a new integration in Harp Platform"),(0,r.kt)("h3",{id:"how-to-configure-in-grafana"},"How to configure in Grafana"),(0,r.kt)("h4",{id:"1-go-to-notification-channels"},"1. Go to \u201cNotification Channels\u201d"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img.png",src:n(1254).Z,width:"1460",height:"485"})),(0,r.kt)("h4",{id:"2-create-a-new-grafana-channel"},"2. Create a new Grafana channel"),(0,r.kt)("p",null,"You should specify:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Harp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"webhook")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL"),": ",(0,r.kt)("a",{parentName:"li",href:"../integration#how-to-find-url-for-integration"},"How to find URL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Http Method"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"POST")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Include Image"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"True"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img_1.png",src:n(5106).Z,width:"733",height:"981"})),(0,r.kt)("h4",{id:"3-after-save-you-should-see-the-harp-channel-in-the-list"},"3. After save, you should see the Harp channel in the list"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img_2.png",src:n(2203).Z,width:"1035",height:"385"})),(0,r.kt)("h4",{id:"4-add-harp-channel-to-your-alert"},"4. Add Harp channel to your alert"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img_3.png",src:n(6685).Z,width:"1740",height:"1552"})),(0,r.kt)("h4",{id:"5-you-are-good-to-go-your-grafana-integration-is-completed-and-you-can-start-working-with-alerts-in-harp"},"5. You are good to go! Your Grafana integration is completed, and you can start working with alerts in Harp"),(0,r.kt)("h3",{id:"additional-info"},"Additional info"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/integration"},"How to register new integration in Harp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../category/incoming-integrations"},"List of all integration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://grafana.com/"},"More details about Prometheus"))))}g.isMDXComponent=!0},1254:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/img-8258040258ea8c113a1ee19f4ab391b3.png"},5106:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/img_1-406967d0a498e959bef28c4b2309d634.png"},2203:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/img_2-1c44bd9511c8af93e2266753a2d57999.png"},6685:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/img_3-9b061098d7636b29318f17884394fdfa.png"}}]);
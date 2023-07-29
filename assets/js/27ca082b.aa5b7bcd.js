"use strict";(self.webpackChunkharpia_docs=self.webpackChunkharpia_docs||[]).push([[9694],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(o),u=i,h=p["".concat(l,".").concat(u)]||p[u]||g[u]||r;return o?n.createElement(h,a(a({ref:t},d),{},{components:o})):n.createElement(h,a({ref:t},d))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},5118:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=o(7462),i=(o(7294),o(3905));const r={sidebar_position:6},a="Anodot",s={unversionedId:"incoming-integrations/anodot",id:"incoming-integrations/anodot",title:"Anodot",description:"Anodot detects and groups anomalies across silos to help you find and fix business incidents in real time",source:"@site/docs/incoming-integrations/anodot.md",sourceDirName:"incoming-integrations",slug:"/incoming-integrations/anodot",permalink:"/docs/incoming-integrations/anodot",draft:!1,editUrl:"https://github.com/the-harpia-io/harpia-docs/tree/master/docs/incoming-integrations/anodot.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Airbrake",permalink:"/docs/incoming-integrations/airbrake"},next:{title:"API",permalink:"/docs/incoming-integrations/api"}},l={},c=[{value:"How it works",id:"how-it-works",level:3},{value:"How to register new integration in Harp",id:"how-to-register-new-integration-in-harp",level:3},{value:"How to configure in Anodot",id:"how-to-configure-in-anodot",level:3},{value:"1. Go to \u201cChannels\u201d and click on \u201cNew\u201d",id:"1-go-to-channels-and-click-on-new",level:4},{value:"2. Choose \u201cWebhook Instance\u201d from the list",id:"2-choose-webhook-instance-from-the-list",level:4},{value:"3. Specify details about your new webhook and click on \u201cSave\u201d",id:"3-specify-details-about-your-new-webhook-and-click-on-save",level:4},{value:"4. Attach Harp Webhook to your alert",id:"4-attach-harp-webhook-to-your-alert",level:4},{value:"5. You are good to go! Your Datadog integration is completed, and you can start working with alerts in Harp",id:"5-you-are-good-to-go-your-datadog-integration-is-completed-and-you-can-start-working-with-alerts-in-harp",level:4},{value:"Additional info",id:"additional-info",level:3}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"anodot"},"Anodot"),(0,i.kt)("p",null,"Anodot detects and groups anomalies across silos to help you find and fix business incidents in real time"),(0,i.kt)("h3",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"Anodot sends alerts to the Incident management system endpoint via HTTP webhook"),(0,i.kt)("h3",{id:"how-to-register-new-integration-in-harp"},"How to register new integration in Harp"),(0,i.kt)("p",null,"Follow ",(0,i.kt)("a",{parentName:"p",href:"/docs/integration"},"these steps")," to register a new integration in Harp Platform"),(0,i.kt)("h3",{id:"how-to-configure-in-anodot"},"How to configure in Anodot"),(0,i.kt)("h4",{id:"1-go-to-channels-and-click-on-new"},"1. Go to \u201cChannels\u201d and click on \u201cNew\u201d"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img_11.png",src:o(951).Z,width:"1777",height:"878"})),(0,i.kt)("h4",{id:"2-choose-webhook-instance-from-the-list"},"2. Choose \u201cWebhook Instance\u201d from the list"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img_12.png",src:o(7483).Z,width:"415",height:"430"})),(0,i.kt)("h4",{id:"3-specify-details-about-your-new-webhook-and-click-on-save"},"3. Specify details about your new webhook and click on \u201cSave\u201d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Webhook Name: Harp Webhook\nURL: <URL Generated in Harp Integrations>\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img_13.png",src:o(8763).Z,width:"1779",height:"658"})),(0,i.kt)("h4",{id:"4-attach-harp-webhook-to-your-alert"},"4. Attach Harp Webhook to your alert"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img_14.png",src:o(2148).Z,width:"1356",height:"663"})),(0,i.kt)("h4",{id:"5-you-are-good-to-go-your-datadog-integration-is-completed-and-you-can-start-working-with-alerts-in-harp"},"5. You are good to go! Your Datadog integration is completed, and you can start working with alerts in Harp"),(0,i.kt)("h3",{id:"additional-info"},"Additional info"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/integration"},"How to register new integration in Harp")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../category/incoming-integrations"},"List of all integration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.anodot.com/"},"More details about Anodot"))))}p.isMDXComponent=!0},951:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/img_11-1d5612b3e538cd666fa50f58583138ca.png"},7483:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/img_12-e2d7215f120f17a83f46ceb739fbeaff.png"},8763:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/img_13-bbf5b42fa157222b3d1428c087b4a299.png"},2148:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/img_14-863ed40381ff8fe75a34740311c9e029.png"}}]);
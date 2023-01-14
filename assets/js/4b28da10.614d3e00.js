"use strict";(self.webpackChunkharpia_docs=self.webpackChunkharpia_docs||[]).push([[3898],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>d});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(i),g=a,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||o;return i?n.createElement(d,r(r({ref:t},p),{},{components:i})):n.createElement(d,r({ref:t},p))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}g.displayName="MDXCreateElement"},4577:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(7462),a=(i(7294),i(3905));const o={sidebar_position:2},r="Email Bot",l={unversionedId:"configure-bots/email",id:"configure-bots/email",title:"Email Bot",description:"You need to register the new email account (for example gmail) or use the existing.",source:"@site/docs/configure-bots/email.md",sourceDirName:"configure-bots",slug:"/configure-bots/email",permalink:"/docs/configure-bots/email",draft:!1,editUrl:"https://github.com/the-harpia-io/harpia-docs/tree/master/docs/configure-bots/email.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/configure-bots/intro"},next:{title:"Jira Bot",permalink:"/docs/configure-bots/jira"}},s={},c=[{value:"Configure GMAIL account",id:"configure-gmail-account",level:3},{value:"Configure Email Bot",id:"configure-email-bot",level:3},{value:"Test Email Bot",id:"test-email-bot",level:3},{value:"Example of the email",id:"example-of-the-email",level:3}],p={toc:c};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"email-bot"},"Email Bot"),(0,a.kt)("p",null,"You need to ",(0,a.kt)("a",{parentName:"p",href:"#configure-gmail-account"},"register the new email")," account (for example gmail) or use the existing."),(0,a.kt)("p",null,"Bot configuration requires ",(0,a.kt)("inlineCode",{parentName:"p"},"EMAIL USER")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"EMAIL PASSWORD")),(0,a.kt)("p",null,"After that you can use Email bot in ",(0,a.kt)("a",{parentName:"p",href:"/docs/scenarios-overview/email"},"Harp Scenarios")," to describe when to send auto notification and who should receive it."),(0,a.kt)("h3",{id:"configure-gmail-account"},"Configure GMAIL account"),(0,a.kt)("p",null,"Follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Manage your Google Account"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img.png",src:i(3192).Z,width:"406",height:"211"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("inlineCode",{parentName:"li"},"Security tab"),", activate ",(0,a.kt)("inlineCode",{parentName:"li"},"2-Step Verificaion")," and go to ",(0,a.kt)("inlineCode",{parentName:"li"},"App passwords"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img_2.png",src:i(8509).Z,width:"2299",height:"991"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Select app - ",(0,a.kt)("inlineCode",{parentName:"li"},"Other"),", specify the custom name and click ",(0,a.kt)("inlineCode",{parentName:"li"},"Generate"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img_3.png",src:i(3269).Z,width:"2316",height:"770"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"You will see app password that you can use inside Email Harp Bot")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img_4.png",src:i(6545).Z,width:"2135",height:"556"})),(0,a.kt)("h3",{id:"configure-email-bot"},"Configure Email Bot"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Menu")," and choose ",(0,a.kt)("inlineCode",{parentName:"li"},"Bots"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img_5.png",src:i(9175).Z,width:"2230",height:"498"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"You will see the full list of available Bots")),(0,a.kt)("p",null,"There are two different statuses:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Yellow: Bot is not configured, and you cannot use it in ",(0,a.kt)("a",{parentName:"li",href:"/docs/scenarios-overview/"},"Scenarios")),(0,a.kt)("li",{parentName:"ul"},"Green: Bot is configured")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img_7.png",src:i(2283).Z,width:"2238",height:"739"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Choose Email Bot")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img_6.png",src:i(3652).Z,width:"2237",height:"735"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Specify ",(0,a.kt)("inlineCode",{parentName:"li"},"EMAIL USER")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"EMAIL PASSWORD")," from the ",(0,a.kt)("a",{parentName:"li",href:"#configure-gmail-account"},"previous section")," and press ",(0,a.kt)("inlineCode",{parentName:"li"},"Save"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img_10.png",src:i(2091).Z,width:"2233",height:"749"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("a",{parentName:"li",href:"/docs/scenarios-overview/email"},"Harp Scenarios settings"),", and you can add Email action to your scenario")),(0,a.kt)("h3",{id:"test-email-bot"},"Test Email Bot"),(0,a.kt)("p",null,"In Bot settings you can specify the email that should receive notification and press the button ",(0,a.kt)("inlineCode",{parentName:"p"},"Test")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img_11.png",src:i(2119).Z,width:"2225",height:"753"})),(0,a.kt)("h3",{id:"example-of-the-email"},"Example of the email"),(0,a.kt)("p",null,"Below you can see the example of the email that you will receive once the alert will be triggered"),(0,a.kt)("p",null,"Information inside email depends on the alert configuration and the monitoring system that trigger the alert"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img_12.png",src:i(5500).Z,width:"2144",height:"960"})))}m.isMDXComponent=!0},3192:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/img-1af85f39a1e1cf98306f9489e5abe72c.png"},2091:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/img_10-6f3223dcf6f614fa0994e4a48e2dbd00.png"},2119:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/img_11-1f73aa55758676cff6333a95c8fe6962.png"},5500:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/img_12-d4be7350352e1b6e978fbdd44291b2f4.png"},8509:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/img_2-ecf3da9fe893208ececa9c0402feb664.png"},3269:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/img_3-96785fa89d65f1aec4ebfbd0d8032570.png"},6545:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/img_4-7b47467e3703b8b7a4be71fe605d4ec4.png"},9175:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/img_5-0cc0a7ee619555890a200329bde5f3cd.png"},3652:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/img_6-40e07339038dc1f9d9f53a4f94f8033f.png"},2283:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/img_7-00f985da5685e5ed6a5336b42393ba88.png"}}]);
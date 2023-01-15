"use strict";(self.webpackChunkharpia_docs=self.webpackChunkharpia_docs||[]).push([[6706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:6},a="API REST",l={unversionedId:"incoming-integrations/api-rest",id:"incoming-integrations/api-rest",title:"API REST",description:"REST API is a simple HTTP endpoint to generate alerts directly from your services or jobs",source:"@site/docs/incoming-integrations/api-rest.md",sourceDirName:"incoming-integrations",slug:"/incoming-integrations/api-rest",permalink:"/docs/incoming-integrations/api-rest",draft:!1,editUrl:"https://github.com/the-harpia-io/harpia-docs/tree/master/docs/incoming-integrations/api-rest.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Anodot",permalink:"/docs/incoming-integrations/anodot"},next:{title:"AppDynamics",permalink:"/docs/incoming-integrations/appdynamics"}},s={},c=[{value:"How it works",id:"how-it-works",level:3},{value:"How to register new integration in Harp",id:"how-to-register-new-integration-in-harp",level:3},{value:"How to configure in your script or service",id:"how-to-configure-in-your-script-or-service",level:3},{value:"1. Specify Harp Endpoint",id:"1-specify-harp-endpoint",level:4},{value:"2. JSON Payload which should be sent out of your code",id:"2-json-payload-which-should-be-sent-out-of-your-code",level:4},{value:"3. You are good to go! Your API integration is completed, and you can start working with alerts in Harp",id:"3-you-are-good-to-go-your-api-integration-is-completed-and-you-can-start-working-with-alerts-in-harp",level:4},{value:"Additional info",id:"additional-info",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"api-rest"},"API REST"),(0,o.kt)("p",null,"REST API is a simple HTTP endpoint to generate alerts directly from your services or jobs"),(0,o.kt)("h3",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"You can send alerts directly from your code. Need just to specify Harp Endpoint which should receive notification and JSON Payload which should be sent."),(0,o.kt)("h3",{id:"how-to-register-new-integration-in-harp"},"How to register new integration in Harp"),(0,o.kt)("p",null,"Follow ",(0,o.kt)("a",{parentName:"p",href:"/docs/integration"},"these steps")," to register a new integration in Harp Platform"),(0,o.kt)("h3",{id:"how-to-configure-in-your-script-or-service"},"How to configure in your script or service"),(0,o.kt)("h4",{id:"1-specify-harp-endpoint"},"1. Specify Harp Endpoint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST https://<YOUR_INTEGRATION_URL>\n")),(0,o.kt)("p",null,"Note: YOUR_INTEGRATION_URL you can find in registered integration (or register new if you didn`t perform it before)"),(0,o.kt)("h4",{id:"2-json-payload-which-should-be-sent-out-of-your-code"},"2. JSON Payload which should be sent out of your code"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To create alert")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n "name": "Auto Test: New alert",\n "severity": "critical",\n "source": "API Source",\n "object": "monitoring-host",\n "output": "notification_output: 0",\n "extra_tags": {\n   "description": "Some Desc",\n   "script_name": "script.py",\n   "owner": "some@gmail.com"\n },\n "extra_urls": {\n   "URL1": "http://some_url",\n   "URL_NAME": "http://some_url_to_docs"\n }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To resolve alert")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n "name": "Auto Test: New alert",\n "severity": "ok",\n "source": "API Source",\n "object": "monitoring-host",\n "output": "notification_output: 0",\n "extra_tags": {\n   "description": "Some Desc",\n   "script_name": "script.py",\n   "owner": "some@gmail.com"\n },\n "extra_urls": {\n   "URL1": "http://some_url",\n   "URL_NAME": "http://some_url_to_docs"\n }\n}\n')),(0,o.kt)("p",null,"Notes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," \u2013 Name of your notification"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"severity")," \u2013 severity of your notification. Possible values are \u2013 ok, information, warning, critical, unknown, urgent"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"source")," \u2013 unique name of the integration"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"object")," \u2013 hostname or some other identifier to show where your service is running"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"output")," \u2013 additional output when notification is triggered"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"extra_tags")," \u2013 you can create your own additional fields which you can see in Harp once notification will be"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"extra_urls")," \u2013 you can add list of URLs to external systems which you will see directly in your alert")),(0,o.kt)("h4",{id:"3-you-are-good-to-go-your-api-integration-is-completed-and-you-can-start-working-with-alerts-in-harp"},"3. You are good to go! Your API integration is completed, and you can start working with alerts in Harp"),(0,o.kt)("h3",{id:"additional-info"},"Additional info"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/integration"},"How to register new integration in Harp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../category/incoming-integrations"},"List of all integration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.airbrake.io/"},"More details about Airbrake"))))}u.isMDXComponent=!0}}]);
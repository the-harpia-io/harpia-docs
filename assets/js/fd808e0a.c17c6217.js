"use strict";(self.webpackChunkharpia_docs=self.webpackChunkharpia_docs||[]).push([[9143],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,m=d["".concat(c,".").concat(u)]||d[u]||g[u]||o;return t?i.createElement(m,r(r({ref:n},p),{},{components:t})):i.createElement(m,r({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},387:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=t(7462),a=(t(7294),t(3905));const o={sidebar_position:6},r="Icinga2",s={unversionedId:"incoming-integrations/icinga",id:"incoming-integrations/icinga",title:"Icinga2",description:"Icinga is a monitoring system which checks the availability of your network resources, notifies users of outages, and generates performance data for reporting",source:"@site/docs/incoming-integrations/icinga.md",sourceDirName:"incoming-integrations",slug:"/incoming-integrations/icinga",permalink:"/docs/incoming-integrations/icinga",draft:!1,editUrl:"https://github.com/the-harpia-io/harpia-docs/tree/master/docs/incoming-integrations/icinga.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Grafana",permalink:"/docs/incoming-integrations/grafana"},next:{title:"New Relic",permalink:"/docs/incoming-integrations/newrelic"}},c={},l=[{value:"How it works",id:"how-it-works",level:3},{value:"How to register new integration in Harp",id:"how-to-register-new-integration-in-harp",level:3},{value:"How to configure in Icinga",id:"how-to-configure-in-icinga",level:3},{value:"1. Run the agent using Docker Compose",id:"1-run-the-agent-using-docker-compose",level:4},{value:"2. Get API user and password",id:"2-get-api-user-and-password",level:4},{value:"3. Specify details about your Icinga instance in config.yaml which was downloaded",id:"3-specify-details-about-your-icinga-instance-in-configyaml-which-was-downloaded",level:4},{value:"4. Start agent",id:"4-start-agent",level:4},{value:"5. Attache notification to scenario and environment",id:"5-attache-notification-to-scenario-and-environment",level:4},{value:"6. You are good to go! Your Icinga2 integration is completed, and you can start working with alerts in Harp",id:"6-you-are-good-to-go-your-icinga2-integration-is-completed-and-you-can-start-working-with-alerts-in-harp",level:4},{value:"Additional info",id:"additional-info",level:3}],p={toc:l};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"icinga2"},"Icinga2"),(0,a.kt)("p",null,"Icinga is a monitoring system which checks the availability of your network resources, notifies users of outages, and generates performance data for reporting"),(0,a.kt)("h3",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"You should install Harp agent on server which has access to your Icinga environment. Agent will pull active alerts from Icinga and forward them to Harp system"),(0,a.kt)("h3",{id:"how-to-register-new-integration-in-harp"},"How to register new integration in Harp"),(0,a.kt)("p",null,"Follow ",(0,a.kt)("a",{parentName:"p",href:"/docs/integration"},"these steps")," to register a new integration in Harp Platform"),(0,a.kt)("h3",{id:"how-to-configure-in-icinga"},"How to configure in Icinga"),(0,a.kt)("admonition",{title:"Prerequisite",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Docker daemon should be installed and running on your server \u2013 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"https://docs.docker.com/engine/install/")),(0,a.kt)("p",{parentName:"admonition"},"Docker Compose should be installed \u2013 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"https://docs.docker.com/compose/install/"))),(0,a.kt)("h4",{id:"1-run-the-agent-using-docker-compose"},"1. Run the agent using Docker Compose"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sSL https://raw.githubusercontent.com/the-harpia-io/harp-agent/master/docker-compose.yml > docker-compose.yml\ncurl -sSL https://raw.githubusercontent.com/the-harpia-io/harp-agent/master/config.yaml > config.yaml\n")),(0,a.kt)("h4",{id:"2-get-api-user-and-password"},"2. Get API user and password"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'cat /etc/icinga2/conf.d/api-users.conf\n\n/**\n * The ApiUser objects are used for authentication against the API.\n */\nobject ApiUser "root" {\n  password = "a08101bfd30ae35d"\n  // client_cn = ""\n\n  permissions = [ "*" ]\n}\n')),(0,a.kt)("h4",{id:"3-specify-details-about-your-icinga-instance-in-configyaml-which-was-downloaded"},"3. Specify details about your Icinga instance in config.yaml which was downloaded"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'icinga:\n  - integration_name: "icinga_test"\n    url: <URL to Harp Endpoint>\n    user: "root"\n    password: "a08101bfd30ae35d"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," ",(0,a.kt)("a",{parentName:"p",href:"../integration#how-to-find-url-for-integration"},"How to find URL to Harp Endpoint")),(0,a.kt)("h4",{id:"4-start-agent"},"4. Start agent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose up -d\n")),(0,a.kt)("h4",{id:"5-attache-notification-to-scenario-and-environment"},"5. Attache notification to scenario and environment"),(0,a.kt)("p",null,"Add environment_id and scenario_id on integration level in config.yaml. All alerts from monitoring system will be attached to that Env and Scenario"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'icinga:\n  - integration_name: "icinga_test"\n    url: <URL to Harp Endpoint>\n    user: "root"\n    password: "a08101bfd30ae35d"\n    environment_id: 10\n    scenario_id: 20\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," ",(0,a.kt)("a",{parentName:"p",href:"../integration#how-to-find-url-for-integration"},"How to find URL to Harp Endpoint")),(0,a.kt)("h4",{id:"6-you-are-good-to-go-your-icinga2-integration-is-completed-and-you-can-start-working-with-alerts-in-harp"},"6. You are good to go! Your Icinga2 integration is completed, and you can start working with alerts in Harp"),(0,a.kt)("h3",{id:"additional-info"},"Additional info"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/integration"},"How to register new integration in Harp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../category/incoming-integrations"},"List of all integration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://icinga.com/docs/icinga-2/latest/doc/01-about/"},"More details about Icinga2"))))}d.isMDXComponent=!0}}]);
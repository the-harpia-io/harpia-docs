"use strict";(self.webpackChunkharpia_docs=self.webpackChunkharpia_docs||[]).push([[7920],{8824:(e,t,a)=>{a.d(t,{c:()=>u});var r=a(7294),n=a(2263);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}},1473:(e,t,a)=>{a.r(t),a.d(t,{default:()=>$});var r=a(7294),n=a(2263),l=a(5924),s=a(5742),c=a(9960),o=a(5999),u=a(8824),m=a(6010),h=a(6550),i=a(412);const p=function(){const e=(0,h.k6)(),t=(0,h.TH)(),{siteConfig:{baseUrl:a}}=(0,n.Z)(),r=i.Z.canUseDOM?new URLSearchParams(t.search):null,l=r?.get("q")||"",s=r?.get("ctx")||"",c=r?.get("version")||"",o=e=>{const a=new URLSearchParams(t.search);return e?a.set("q",e):a.delete("q"),a};return{searchValue:l,searchContext:s,searchVersion:c,updateSearchPath:t=>{const a=o(t);e.replace({search:a.toString()})},updateSearchContext:a=>{const r=new URLSearchParams(t.search);r.set("ctx",a),e.replace({search:r.toString()})},generateSearchPageLink:e=>{const t=o(e);return`${a}search?${t.toString()}`}}};var g=a(22),d=a(8202),f=a(2539),y=a(726),E=a(1073),S=a(311),v=a(3926),w=a(1029);const x="searchContextInput_mXoe",C="searchQueryInput_CFBF",I="searchResultItem_U687",P="searchResultItemPath_uIbk",_="searchResultItemSummary_oZHr",b="searchQueryColumn_q7nx",F="searchContextColumn_oWAF";function R(){const{siteConfig:{baseUrl:e}}=(0,n.Z)(),{selectMessage:t}=(0,u.c)(),{searchValue:a,searchContext:l,searchVersion:c,updateSearchPath:h,updateSearchContext:i}=p(),[f,y]=(0,r.useState)(a),[E,v]=(0,r.useState)(),[I,P]=(0,r.useState)(),_=`${e}${c}`,R=(0,r.useMemo)((()=>f?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:f}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[f]);(0,r.useEffect)((()=>{h(f),E&&(f?E(f,(e=>{P(e)})):P(void 0))}),[f,E]);const $=(0,r.useCallback)((e=>{y(e.target.value)}),[]);return(0,r.useEffect)((()=>{a&&a!==f&&y(a)}),[a]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,g.w)(_,l);v((()=>(0,d.v)(e,t,100)))}()}),[l,_]),r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,R)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,R),r.createElement("div",{className:"row"},r.createElement("div",{className:(0,m.Z)("col",{[b]:Array.isArray(w.Kc),"col--9":Array.isArray(w.Kc),"col--12":!Array.isArray(w.Kc)})},r.createElement("input",{type:"search",name:"q",className:C,"aria-label":"Search",onChange:$,value:f,autoComplete:"off",autoFocus:!0})),Array.isArray(w.Kc)?r.createElement("div",{className:(0,m.Z)("col","col--3","padding-left--none",F)},r.createElement("select",{name:"search-context",className:x,id:"context-selector",value:l,onChange:e=>i(e.target.value)},r.createElement("option",{value:""},w.pQ?(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""),w.Kc.map((e=>r.createElement("option",{key:e,value:e},e))))):null),!E&&f&&r.createElement("div",null,r.createElement(S.Z,null)),I&&(I.length>0?r.createElement("p",null,t(I.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:I.length}))):r.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,I&&I.map((e=>r.createElement(k,{key:e.document.i,searchResult:e}))))))}function k(e){let{searchResult:{document:t,type:a,page:n,tokens:l,metadata:s}}=e;const o=0===a,u=2===a,m=(o?t.b:n.b).slice(),h=u?t.s:t.t;o||m.push(n.t);let i="";if(w.vc&&l.length>0){const e=new URLSearchParams;for(const t of l)e.append("_highlight",t);i=`?${e.toString()}`}return r.createElement("article",{className:I},r.createElement("h2",null,r.createElement(c.Z,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,f.C)(h,l):(0,y.o)(h,(0,E.m)(s,"t"),l,100)}})),m.length>0&&r.createElement("p",{className:P},(0,v.e)(m)),u&&r.createElement("p",{className:_,dangerouslySetInnerHTML:{__html:(0,y.o)(t.t,(0,E.m)(s,"t"),l,100)}}))}const $=function(){return r.createElement(l.Z,null,r.createElement(R,null))}}}]);
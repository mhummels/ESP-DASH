"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[5838],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>y});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),s=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=s(e.components);return a.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(t),y=n,m=u["".concat(p,".").concat(y)]||u[y]||c[y]||l;return t?a.createElement(m,i(i({ref:r},d),{},{components:t})):a.createElement(m,i({ref:r},d))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7550:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(7462),n=(t(7294),t(3905));const l={title:"Energy Card",sidebar_label:"Energy (Pro)",sidebar_position:4},i=void 0,o={unversionedId:"cards/energy",id:"version-v3.x.x/cards/energy",title:"Energy Card",description:"This feature is available in DASH Pro only.",source:"@site/versioned_docs/version-v3.x.x/cards/energy.md",sourceDirName:"cards",slug:"/cards/energy",permalink:"/v3.x.x/cards/energy",draft:!1,tags:[],version:"v3.x.x",sidebarPosition:4,frontMatter:{title:"Energy Card",sidebar_label:"Energy (Pro)",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Air (Pro)",permalink:"/v3.x.x/cards/air"},next:{title:"Progress",permalink:"/v3.x.x/cards/progress"}},p={},s=[{value:"Preview:",id:"preview",level:4},{value:"Type:",id:"type",level:4},{value:"Valid Data Types:",id:"valid-data-types",level:4},{value:"Initializer:",id:"initializer",level:4},{value:"Updaters:",id:"updaters",level:4}],d={toc:s};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("div",{style:{border:"1px solid rgba(255,0,0, 0.03)",padding:20,borderRadius:14,backgroundColor:"rgba(255,0,0, 0.03)",maxWidth:600}},(0,n.kt)("h4",{style:{fontWeight:"500",marginBottom:5}}," This feature is available in ",(0,n.kt)("a",{target:"_blank",style:{color:"red"},href:"https://espdash.pro"},"DASH Pro")," only.")),(0,n.kt)("h4",{id:"preview"},"Preview:"),(0,n.kt)("img",{src:"/img//energy-card.png",width:"280px",alt:"Energy Card Preview"}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"This card adds a distinctive energy/power icon, and just like generic card you can add a symbol which will be appended to your data. This card can be used to show something related to power consumption and usage etc."),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"type"},"Type:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"ENERGY_CARD")),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"valid-data-types"},"Valid Data Types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"int")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"float")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"String"))),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"initializer"},"Initializer:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'/* \n  Energy Card\n  Valid Arguments: (ESPDash dashboard, Card Type, const char* name, const char* symbol (optional) )\n*/\nCard card1(&dashboard, ENERGY_CARD, "Power Consumption", "kWh");\n')),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"updaters"},"Updaters:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"card1.update(int value);\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"card1.update(float value);\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"card1.update(String value);\n")),(0,n.kt)("p",null,"Or you can also update the symbol along with the value like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'card1.update(value, "kWh");\n')),(0,n.kt)("br",null),(0,n.kt)("br",null))}c.isMDXComponent=!0}}]);
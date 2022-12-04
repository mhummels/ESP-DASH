"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[5729],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,v=p["".concat(o,".").concat(m)]||p[m]||c[m]||s;return r?a.createElement(v,i(i({ref:t},d),{},{components:r})):a.createElement(v,i({ref:t},d))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<s;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3829:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const s={title:"Status Card",sidebar_label:"Status",sidebar_position:5},i=void 0,l={unversionedId:"cards/status",id:"version-v4.x.x/cards/status",title:"Status Card",description:"Preview:",source:"@site/versioned_docs/version-v4.x.x/cards/status.md",sourceDirName:"cards",slug:"/cards/status",permalink:"/cards/status",draft:!1,tags:[],version:"v4.x.x",sidebarPosition:5,frontMatter:{title:"Status Card",sidebar_label:"Status",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Button",permalink:"/cards/button"},next:{title:"Slider",permalink:"/cards/slider"}},o={},u=[{value:"Preview:",id:"preview",level:4},{value:"Type:",id:"type",level:4},{value:"Valid Data Types:",id:"valid-data-types",level:4},{value:"Valid Statuses:",id:"valid-statuses",level:4},{value:"Initializer:",id:"initializer",level:4},{value:"Updaters:",id:"updaters",level:4}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"preview"},"Preview:"),(0,n.kt)("img",{src:"/img/v4/status-card-idle.png",width:"280px",alt:"Preview"}),(0,n.kt)("img",{src:"/img/v4/status-card-warning.png",width:"280px",alt:"Preview"}),(0,n.kt)("img",{src:"/img/v4/status-card-success.png",width:"280px",alt:"Preview"}),(0,n.kt)("img",{src:"/img/v4/status-card-danger.png",width:"280px",alt:"Preview"}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"As it's name suggests, status card is used to display some kind of status on your dashboard. It can show 4 different kinds of status along with a short message."),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"type"},"Type:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"STATUS_CARD")),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"valid-data-types"},"Valid Data Types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"String"))),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"valid-statuses"},"Valid Statuses:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'"success"')," - Green"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'"danger"')," - Red"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'"warning"')," - Yellow"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'"idle"')," - Grey")),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"initializer"},"Initializer:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'/* \n  Status Card\n  Valid Arguments: (ESPDash dashboard, Card Type, const char* name, const char* status (optional) )\n*/\nCard card1(&dashboard, STATUS_CARD, "Test Status", "success");\n')),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"updaters"},"Updaters:"),(0,n.kt)("p",null,"Status card updater allows you to set a message:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'card1.update("message");\n')),(0,n.kt)("p",null,"Or, message + status at the same time:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'card1.update("Message", "success");\n')))}p.isMDXComponent=!0}}]);
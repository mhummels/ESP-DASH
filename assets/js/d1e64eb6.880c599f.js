"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[7166],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=c(r),d=n,m=b["".concat(s,".").concat(d)]||b[d]||u[d]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5699:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={title:"Tabs",sidebar_label:"Tabs (Pro)",sidebar_position:7},o=void 0,l={unversionedId:"tabs",id:"version-v4.x.x/tabs",title:"Tabs",description:"This feature is available in DASH Pro only.",source:"@site/versioned_docs/version-v4.x.x/tabs.md",sourceDirName:".",slug:"/tabs",permalink:"/tabs",draft:!1,tags:[],version:"v4.x.x",sidebarPosition:7,frontMatter:{title:"Tabs",sidebar_label:"Tabs (Pro)",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/more-examples"},next:{title:"Statistics",permalink:"/custom-statistics"}},s={},c=[{value:"Example",id:"example",level:3},{value:"Initializer:",id:"initializer",level:5},{value:"Set Tab:",id:"set-tab",level:5}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"pro-label"},(0,n.kt)("i",null,(0,n.kt)("h4",{style:{fontWeight:"500",marginBottom:5}},"This feature is available in ",(0,n.kt)("a",{target:"_blank",style:{color:"red"},href:"https://espdash.pro"},"DASH Pro")," only."))),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("img",{src:"/img/v4/tabs.png",alt:"Concept Diagram",width:"300px"}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"Tabs in ESP-DASH allow you to create multiple pages to organize and sort your various cards & charts. This feature comes particularly useful when there are all a lot of widgets."),(0,n.kt)("p",null,"By default, ESP-DASH puts everything into 'Overview' Tab. If every card or chart is assigned a custom tab, then the dashboard will automatically hide the overview tab from sidebar."),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("h5",{id:"initializer"},"Initializer:"),(0,n.kt)("p",null,"Initializer should be kept in global scope. ( ie. outside of any function in your sketch )"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'Tab tab1(&dashboard, "Custom Tab 1");\n')),(0,n.kt)("h5",{id:"set-tab"},"Set Tab:"),(0,n.kt)("p",null,"Once a tab has been created, you need to set the tab for relevant cards and charts using ",(0,n.kt)("inlineCode",{parentName:"p"},"setTab")," function of Card or Chart class. ",(0,n.kt)("inlineCode",{parentName:"p"},"setTab")," accepts a pointer to the tab which we just created."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"card1.setTab(&tab1);\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"chart1.setTab(&tab1);\n")))}u.isMDXComponent=!0}}]);
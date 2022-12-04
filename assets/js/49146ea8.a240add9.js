"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[6874],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(r),d=n,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1872:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={title:"Migration Guide",sidebar_label:"Migration Guide",sidebar_position:12},i=void 0,l={unversionedId:"migrate",id:"version-v4.x.x/migrate",title:"Migration Guide",description:"Note: If you are currently using ESP-DASH V3 or ESP-DASH Pro ( previous releases <= v4.0.8 ), then this article is for you.",source:"@site/versioned_docs/version-v4.x.x/migrate.md",sourceDirName:".",slug:"/migrate",permalink:"/migrate",draft:!1,tags:[],version:"v4.x.x",sidebarPosition:12,frontMatter:{title:"Migration Guide",sidebar_label:"Migration Guide",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Custom Card Size (Pro)",permalink:"/features/sizing"}},s={},c=[{value:"\u26a0\ufe0f Minor Changes:",id:"\ufe0f-minor-changes",level:2},{value:"\u2692\ufe0f Breaking Changes:",id:"\ufe0f-breaking-changes",level:2},{value:"Button Callback",id:"button-callback",level:3},{value:"Charts",id:"charts",level:3}],u={toc:c};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note: If you are currently using ESP-DASH V3 or ESP-DASH Pro ( previous releases <= v4.0.8 ), then this article is for you.")),(0,n.kt)("p",null,"This article will cover all the minor and breaking changing which come as part of switching your existing codebase to ESP-DASH V4. DASH V4 was made with backwards compatibility in mind therefore there are not many changes to the existing functionality, which means you can get started using it in a few minutes!:"),(0,n.kt)("h2",{id:"\ufe0f-minor-changes"},"\u26a0\ufe0f Minor Changes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The second argument of ESPDash Class constructor now only disables system statistics. ",(0,n.kt)("inlineCode",{parentName:"p"},"ESPDash(AsyncWebServer* server, bool enable_default_stats = true);"),". The statistics tab now gets automatically hidden when there are no custom stats added by user and when default (system) statistics are disabled as well.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"sendUpdates(bool force);")," function now has a ",(0,n.kt)("inlineCode",{parentName:"p"},"force")," argument which can be used to force refresh the whole layout on connected dashboards."))),(0,n.kt)("h2",{id:"\ufe0f-breaking-changes"},"\u2692\ufe0f Breaking Changes:"),(0,n.kt)("h3",{id:"button-callback"},"Button Callback"),(0,n.kt)("p",null,"The button callback now gets called with a ",(0,n.kt)("inlineCode",{parentName:"p"},"int")," rather than ",(0,n.kt)("inlineCode",{parentName:"p"},"bool")," which lead to issues. The value returned by callback will be ",(0,n.kt)("inlineCode",{parentName:"p"},"1")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"// New Button Callback\nbutton.attachCallback([&](int value){\n  button.update(value);\n  dashboard.sendUpdates();\n});\n")),(0,n.kt)("h3",{id:"charts"},"Charts"),(0,n.kt)("p",null,"There is a major overhaul inside the library for the charts functionality to improve reliability of host microcontroller."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Previously, ESP-DASH would copy the whole X & Y axis array into SRAM of your ESP8266/ESP32 microcontroller, which was fine for smaller arrays but quickly led to crashes whenever somebody tried to use a large dataset.")),(0,n.kt)("p",null,"With V4, the library only keeps the pointer to the dataset which will be used for the charts. This in return lets you use a large array for charts without memory hogging the microcontroller! :D"),(0,n.kt)("p",null,"As part of this critical fix, now you need to keep the dataset ( X & Y axis ) arrays into the global scope all the time and then provide a reference of these array to the library along with it's size. The only thing which you need to change is that if you were creating a array into heap, ( i.e inside a function ) now you need to shift it into global scope. Carefully study the following reference: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ayushsharma82/ESP-DASH/blob/master/examples/Benchmark/Benchmark.ino#L56"},"Benchmark Example")))}h.isMDXComponent=!0}}]);
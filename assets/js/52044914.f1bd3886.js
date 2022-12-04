"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[3818],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,b=s["".concat(d,".").concat(m)]||s[m]||u[m]||l;return r?a.createElement(b,i(i({ref:t},c),{},{components:r})):a.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2396:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={title:"Slider Card",sidebar_label:"Slider",sidebar_position:6},i=void 0,o={unversionedId:"cards/slider",id:"version-v3.x.x/cards/slider",title:"Slider Card",description:"Preview:",source:"@site/versioned_docs/version-v3.x.x/cards/slider.md",sourceDirName:"cards",slug:"/cards/slider",permalink:"/v3.x.x/cards/slider",draft:!1,tags:[],version:"v3.x.x",sidebarPosition:6,frontMatter:{title:"Slider Card",sidebar_label:"Slider",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Status",permalink:"/v3.x.x/cards/status"},next:{title:"Text Input (Pro)",permalink:"/v3.x.x/cards/text-input"}},d={},p=[{value:"Preview:",id:"preview",level:4},{value:"Type:",id:"type",level:4},{value:"Valid Data Types:",id:"valid-data-types",level:4},{value:"Initializer:",id:"initializer",level:4},{value:"Callback:",id:"callback",level:4},{value:"Updaters:",id:"updaters",level:4}],c={toc:p};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"preview"},"Preview:"),(0,n.kt)("br",null),(0,n.kt)("img",{src:"/img//slider-card.png",width:"280px",alt:"Preview"}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"This card adds a interactive horizontal slider to your dashboard. Slider card is useful when you require a integer input within a certain range. ( Example use case: LED brightness control )"),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"type"},"Type:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"SLIDER_CARD")),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"valid-data-types"},"Valid Data Types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"int"))),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"initializer"},"Initializer:"),(0,n.kt)("p",null,"With slider card, Initializer requires ",(0,n.kt)("inlineCode",{parentName:"p"},"min")," & ",(0,n.kt)("inlineCode",{parentName:"p"},"max")," range."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'/* \n  Slider Card\n  Valid Arguments: (ESPDash dashboard, Card Type, const char* name, const char* symbol (optional), int min, int max)\n*/\nCard card1(&dashboard, SLIDER_CARD, "Test Slider", "", 0, 255);\n')),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"callback"},"Callback:"),(0,n.kt)("p",null,"Slider Card requires a callback function which will be called when we receive a input from our dashboard. We will be calling our ",(0,n.kt)("inlineCode",{parentName:"p"},"attachCallback")," function and provide a lambda function with a ",(0,n.kt)("inlineCode",{parentName:"p"},"int")," argument."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," You need to call the ",(0,n.kt)("inlineCode",{parentName:"p"},"update")," function and ",(0,n.kt)("inlineCode",{parentName:"p"},"sendUpdates")," immediately once you receive the value in callback. Otherwise user input will not be registered on dashboard."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'/*\n  We provide our attachCallback with a lambda function to handle incomming data\n  `value` is the boolean sent from your dashboard\n*/\ncard1.attachCallback([&](int value){\n  Serial.println("[Card1] Slider Callback Triggered: "+String(value));\n  card1.update(value);\n  dashboard.sendUpdates();\n});\n')),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"updaters"},"Updaters:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"card1.update(int value);\n")),(0,n.kt)("p",null,"Or, update symbol along your value:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'card1.update(244, "%");\n')))}s.isMDXComponent=!0}}]);
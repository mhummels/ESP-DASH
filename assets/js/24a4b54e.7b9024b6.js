"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[7511],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(o),d=n,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return o?r.createElement(g,a(a({ref:t},c),{},{components:o})):r.createElement(g,a({ref:t},c))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},64:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const i={title:"Custom Logo",sidebar_label:"Custom Logo (Pro)",sidebar_position:4},a=void 0,l={unversionedId:"features/custom-logo",id:"version-v4.x.x/features/custom-logo",title:"Custom Logo",description:"This feature is available in DASH Pro only.",source:"@site/versioned_docs/version-v4.x.x/features/custom-logo.md",sourceDirName:"features",slug:"/features/custom-logo",permalink:"/features/custom-logo",draft:!1,tags:[],version:"v4.x.x",sidebarPosition:4,frontMatter:{title:"Custom Logo",sidebar_label:"Custom Logo (Pro)",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Custom Title (Pro)",permalink:"/features/title"},next:{title:"Card Indexing (Pro)",permalink:"/features/indexing"}},s={},p=[{value:"Setting Custom Logo",id:"setting-custom-logo",level:3},{value:"What you&#39;ll need",id:"what-youll-need",level:4},{value:"Step 1: Procedure to convert logo into byte array",id:"step-1-procedure-to-convert-logo-into-byte-array",level:4},{value:"Step 2: Setting custom logo in sketch",id:"step-2-setting-custom-logo-in-sketch",level:4}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"pro-label"},(0,n.kt)("i",null,(0,n.kt)("h4",{style:{fontWeight:"500",marginBottom:5}},"This feature is available in ",(0,n.kt)("a",{target:"_blank",style:{color:"red"},href:"https://espdash.pro"},"DASH Pro")," only."))),(0,n.kt)("br",null),(0,n.kt)("img",{src:"/img/v4/custom-logo-mini.png",width:"305px",alt:"Energy Card Preview"}),"\xa0",(0,n.kt)("img",{src:"/img/v4/custom-logo-large.png",width:"400px",alt:"Energy Card Preview"}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,'If you are not familiar with the interface yet, the dashboard has an sidebar which can be expanded and collapsed, in that case the logo switches between "mini" and "large" scale version.'),(0,n.kt)("p",null,"Both these logos can be changed by the user by modifying the ",(0,n.kt)("inlineCode",{parentName:"p"},"logo.h")," & ",(0,n.kt)("inlineCode",{parentName:"p"},"logo.cpp")," file in the library source directory."),(0,n.kt)("h3",{id:"setting-custom-logo"},"Setting Custom Logo"),(0,n.kt)("p",null,"The logo used in DASH is image file converted to byte array. We'll go through the process below:"),(0,n.kt)("h4",{id:"what-youll-need"},"What you'll need"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You'll need a compatible logo image ",(0,n.kt)("i",null,"( jpeg / png / gif / tif etc. )")," or an SVG file ( recommended due to small file size ). ",(0,n.kt)("i",null,(0,n.kt)("b",null,"Important: Please make sure your image is optimized and small in file size."))),(0,n.kt)("li",{parentName:"ul"},"Know the MIME file type of your image. You can use ",(0,n.kt)("a",{parentName:"li",href:"https://www.htmlstrip.com/mime-file-type-checker"},"HTTPStrip's mime utility"),".")),(0,n.kt)("h4",{id:"step-1-procedure-to-convert-logo-into-byte-array"},"Step 1: Procedure to convert logo into byte array"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("a",{parentName:"li",href:"https://ayushsharma82.github.io/file2raw/"},"File2Raw utility")," ( which I created a few years back for the purpose of converting files into byte array for C++ applications )."),(0,n.kt)("li",{parentName:"ol"},"Select your logo."),(0,n.kt)("li",{parentName:"ol"},'Select "Gzip Compress" & "Use PROGMEM (Arduino)".'),(0,n.kt)("li",{parentName:"ol"},'Click "Convert".')),(0,n.kt)("h4",{id:"step-2-setting-custom-logo-in-sketch"},"Step 2: Setting custom logo in sketch"),(0,n.kt)("p",null,"Now once your custom logo has been prepared, let's set it in our ESP-DASH Pro library. To do so, the library contains 2 files which contain the variable that govern 'mini' and 'large' logos used by our webpage."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("inlineCode",{parentName:"li"},"logo.h")),(0,n.kt)("li",{parentName:"ol"},"Set ",(0,n.kt)("inlineCode",{parentName:"li"},"DASH_MINI_LOGO_MIME")," to your image file type. To find your file's mime type, use this utility: ",(0,n.kt)("a",{parentName:"li",href:"https://www.htmlstrip.com/mime-file-type-checker"},"https://www.htmlstrip.com/mime-file-type-checker")),(0,n.kt)("li",{parentName:"ol"},"Set ",(0,n.kt)("inlineCode",{parentName:"li"},"DASH_MINI_LOGO_WIDTH")," & ",(0,n.kt)("inlineCode",{parentName:"li"},"DASH_MINI_LOGO_HEIGHT")," according to your desired size which will be displayed on the webpage."),(0,n.kt)("li",{parentName:"ol"},"Replace the array length of ",(0,n.kt)("inlineCode",{parentName:"li"},"DASH_MINI_LOGO")," with the newly generated array length."),(0,n.kt)("li",{parentName:"ol"},"Now open ",(0,n.kt)("inlineCode",{parentName:"li"},"logo.cpp")),(0,n.kt)("li",{parentName:"ol"},"Replace the data inside ",(0,n.kt)("inlineCode",{parentName:"li"},"DASH_MINI_LOGO")," with new data generated just before using File2Raw.")),(0,n.kt)("p",null,"Once done, you may repeat the same steps as above for ",(0,n.kt)("inlineCode",{parentName:"p"},"DASH_LARGE_LOGO"),"."))}u.isMDXComponent=!0}}]);
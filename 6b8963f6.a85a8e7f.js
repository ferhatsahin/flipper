(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{130:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),c=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},p=function(e){var t=c(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},g=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=o,b=p["".concat(l,".").concat(g)]||p[g]||d[g]||r;return n?i.a.createElement(b,a({ref:t},u,{components:n})):i.a.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=g;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<r;u++)l[u]=n[u];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},131:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return l}));var o=n(133),i=n(132);function r(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var r=void 0===o?{}:o,l=r.forcePrependBaseUrl,a=void 0!==l&&l,s=r.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(a)return t+n;var c=!n.startsWith(t)?t+n.replace(/^\//,""):n;return u?e+c:c}(r,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},132:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}))},133:function(e,t,n){"use strict";var o=n(0),i=n(19);t.a=function(){var e=Object(o.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var o=n(2),i=n(6),r=(n(0),n(130)),l=n(131),a={id:"debugging",title:"Debugging"},s={unversionedId:"extending/debugging",id:"extending/debugging",isDocsHomePage:!1,title:"Debugging",description:"Built-in Developer Tools",source:"@site/../docs/extending/debugging.mdx",permalink:"/docs/extending/debugging",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/debugging.mdx",sidebar:"extending",previous:{title:"Testing",permalink:"/docs/extending/testing"},next:{title:"Creating Desktop Plugin (Sandy)",permalink:"/docs/extending/desktop-plugins"}},u=[{value:"Built-in Developer Tools",id:"built-in-developer-tools",children:[]},{value:"Google Chrome Developer Tools",id:"google-chrome-developer-tools",children:[]},{value:"Visual Studio Code",id:"visual-studio-code",children:[]},{value:"Plugin missing",id:"plugin-missing",children:[]}],c={rightToc:u};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"built-in-developer-tools"},"Built-in Developer Tools"),Object(r.b)("p",null,"Flipper is built on Electron which itself is built on Chromium. This means we can debug Flipper using Chrome's developer tools. Flipper will also automatically install the React devtools extension allowing you to have better insight into what is going on in your plugin."),Object(r.b)("p",null,"You can open the dev tools from the menu with ",Object(r.b)("inlineCode",{parentName:"p"},"View")," > ",Object(r.b)("inlineCode",{parentName:"p"},"Toggle Developer Tools")," or pressing \u2325\u2318I on a Mac."),Object(r.b)("p",null,"In addition to helping you with the JavaScript, the JS console will also display uncaught exceptions thrown from the client plugin in response to Flipper method calls."),Object(r.b)("h2",{id:"google-chrome-developer-tools"},"Google Chrome Developer Tools"),Object(r.b)("p",null,"As an alternative to using built-in Developer Tools you can also attach to the running Flipper instance from Google Chrome Developer Tools. Sometimes this is useful, because the version of Dev Tools in Google Chrome is more recent than the embedded one, and it is possible to easily install additional extensions if required."),Object(r.b)("p",null,'To attach the running Flipper instance open new tab in Google Chrome, navigate to "http://localhost:9222" and choose "Flipper" in the opened list.'),Object(r.b)("img",{alt:"Attach From Google Chrome",src:Object(l.a)("img/debugging-from-google-chrome.png")}),Object(r.b)("h2",{id:"visual-studio-code"},"Visual Studio Code"),Object(r.b)("p",null,'If you prefer to use the same editor for both coding and debugging, you can attach to the running Flipper instance for debugging right from Visual Studio Code. First of all, you need to install extension "Debugger for Chrome". Then, to start debugging, open folder ',Object(r.b)("inlineCode",{parentName:"p"},"desktop")," of Flipper repository in VSCode, execute ",Object(r.b)("inlineCode",{parentName:"p"},"yarn start")," in terminal to launch Flipper in development mode, select tab ",Object(r.b)("inlineCode",{parentName:"p"},"Debug and Run"),", and run task ",Object(r.b)("inlineCode",{parentName:"p"},"Attach to Running Renderer"),". By default this task is set as the first one, so you can just press ",Object(r.b)("inlineCode",{parentName:"p"},"F5")," to run it."),Object(r.b)("img",{alt:"Attach From Visual Studio Code",src:Object(l.a)("img/debugging-from-vscode.png")}),Object(r.b)("h2",{id:"plugin-missing"},"Plugin missing"),Object(r.b)("p",null,"If a plugin you created is not showing up there might be two potential classes of problems: Either there is a problem on the mobile side or on the desktop side. Understanding where the problem is rooted helps debugging it."),Object(r.b)("p",null,'Click on "Plugin now showing" in the sidebar and see if your plugin is listed here. If it is not listed, the desktop side of the plugin is not loaded. One of the main reasons for this is that the plugin could not be compiled, due to some errors. Try launching Flipper from the Terminal to see some additional logs: ',Object(r.b)("inlineCode",{parentName:"p"},"/Applications/Flipper.app/Contents/MacOS/Flipper"),"."),Object(r.b)("p",null,"A common error here is ",Object(r.b)("inlineCode",{parentName:"p"},"Error: fsevents unavailable (this watcher can only be used on Darwin)"),". This can be fixed by installing watchman (",Object(r.b)("inlineCode",{parentName:"p"},"brew install watchman"),")."),Object(r.b)("p",null,"If the plugin is listed in the desktop app, but still is not showing up in the sidebar, the mobile app is not announcing the plugin. In this case, make sure, to instantiate your plugin and add it to your FlipperClient."))}p.isMDXComponent=!0}}]);
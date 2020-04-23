(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{269:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(441)),i={},c={id:"jme3/contributions/entitysystem",title:"entitysystem",description:"Entity Systems are a new way of organising your game data.",source:"@site/docs/jme3/contributions/entitysystem.md",permalink:"/wikidemo/docs/jme3/contributions/entitysystem",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/contributions/entitysystem.md"},b=[],s={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Entity Systems are a new way of organising your game data."),Object(o.b)("p",null,"The basic idea comes from the famous t-machine article about entity\nsystems as a possibility for mmorpg development. Zay-ES is pspeed's\nEntity System which he uses for his game Mythruna. Entity Systems aim to\nmake your project more clear and dynamic."),Object(o.b)("h1",{id:"entity-system-introduction"},"Entity System Introduction"),Object(o.b)("p",null,"If you are new to this topic you should read:"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../jme3/contributions/entitysystem/introduction"}),"Entity System\nIntroduction")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Read this if you want to look carefully at the design of a general ES\nand compare between different projects.")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../jme3/contributions/entitysystem/detailed"}),"Entity System\nDetailed")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../jme3/contributions/entitysystem/interviews"}),"Entity System Approaches and\nInterviews")),Object(o.b)("h1",{id:"zay-es-tutorials"},"Zay-ES Tutorials"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine-Contributions/zay-es/wiki"}),"Official Zay ES\nWiki"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../jme3/contributions/entitysystem/beginner"}),"Zay-ES\nBeginner"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../jme3/contributions/entitysystem/entityset"}),"The EntitySet"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"AppStates/Filter")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Zay-ES and SQL"))),Object(o.b)("h1",{id:"zay-es-examples"},"Zay-ES Examples"),Object(o.b)("p",null,"In the future, more examples will be added to help with solving problems\nthe Entity System way."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../jme3/contributions/entitysystem/examples/damagesystem"}),"Making a Damage\nSystem"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../jme3/contributions/entitysystem/examples/own_logic_thread"}),"Your Own Logic\nThread")))),Object(o.b)("h1",{id:"zay-es-forum"},"Zay-ES Forum"),Object(o.b)("p",null,"A lot of very up-to-date information on the Zay-ES entity system can be\nfound on the jME3 Forum. There are example projects, example code, and a\nlot of general help."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://hub.jmonkeyengine.org/c/user-code-projects/zay-es"}),"Zay-ES\nforum"))),Object(o.b)("h1",{id:"zay-es-download"},"Zay-ES Download"),Object(o.b)("p",null,"Zay-ES can be downloaded via SVN from\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine-Contributions/zay-es"}),"https://github.com/jMonkeyEngine-Contributions/zay-es")),Object(o.b)("p",null,"It also now available as a jMonkey SDK plugin."))}p.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),l=p(n),u=r,y=l["".concat(i,".").concat(u)]||l[u]||m[u]||o;return n?a.a.createElement(y,c({ref:t},s,{components:n})):a.a.createElement(y,c({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
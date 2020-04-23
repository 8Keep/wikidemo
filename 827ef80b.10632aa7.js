(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{292:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(441)),i={},c={id:"sdk/update_center",title:"update_center",description:"Automatically Updating jMonkeyEngine SDK",source:"@site/docs/sdk/update_center.md",permalink:"/wikidemo/docs/sdk/update_center",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/sdk/update_center.md"},l=[{value:"Getting stable updates",id:"getting-stable-updates",children:[]},{value:"Testing the nightly version",id:"testing-the-nightly-version",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"automatically-updating-jmonkeyengine-sdk"},"Automatically Updating jMonkeyEngine SDK"),Object(o.b)("h2",{id:"getting-stable-updates"},"Getting stable updates"),Object(o.b)("p",null,"The jMonkeyEngine SDK includes an automatic web update feature. To run\nan update, simply go to Help\u2192Check for Updates and you will get the most\ncurrent stable update of the SDK and the engine. By default the IDE will\ncheck every week for new updates and inform you about them with a symbol\nin the lower right."),Object(o.b)("h2",{id:"testing-the-nightly-version"},"Testing the nightly version"),Object(o.b)("p",null,"You can test the nightly version with all the latest untested features\nto give feedback to the developers. Be warned however, the changes in\nthe nightly versions might break your current game project if heavy\nchanges have been committed. To make sure that you do not break your\ncurrent development environment it is recommended to use a separate\napplication and settings directory for the nightly version."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Copy the whole application (folder) to a new name like\njmonkeyplatform","_","nightly.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Edit the file jmonkeyplatform.conf in the etc directory of the\nfolder. Mac users have to right-click the application and select\n"Show package contents and then navigate to\nContents/Resources/jmonkeyplatform.')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Change the default","_","userdir or default","_","mac","_",'userdir from\n"\\${HOME}/.\\${APPNAME}/version to something like\n"\\${HOME}/.\\${APPNAME}/nightly.'))),Object(o.b)("p",null,"Then start the new application and have your SDK being updated to the\nmost current nightly version:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Go to Tools\u2192Plugins")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Select the "Settings tab')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Select the checkbox for "jMonkeyEngine SDK nightly svn')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Make sure the "force install to shared directories checkbox is\nselected')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Select the "Updates tab')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Press "Reload Catalog')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Press "Update'))))}u.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return n?a.a.createElement(m,c({ref:t},p,{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
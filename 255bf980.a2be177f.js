(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),i=(n(0),n(441)),l={},o={id:"sdk/development/extension_library",title:"extension_library",description:"This page describes how you can wrap any jar library into a plugin that",source:"@site/docs/sdk/development/extension_library.md",permalink:"/wikidemo/docs/sdk/development/extension_library",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/sdk/development/extension_library.md"},c=[],p={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This page describes how you can wrap any jar library into a plugin that\na jMonkeyEngine SDK user can download, install and then use the\ncontained library in his own game projects."),Object(i.b)("p",null,"Make sure you have your SDK set up for plugin development ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../../sdk/development/setup"}),"as described\nhere"),"."),Object(i.b)("p",null,"Creating the plugin project (in jMonkeyEngine SDK):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Create a new Module Suite (or use an existing one)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Open the suite, right-click the "Modules folder and select "Add\nnew..')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'For "Project Name enter an all-lowercase name without spaces like\n',Object(i.b)("inlineCode",{parentName:"p"},"my-library"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Make sure the "Project Location is inside the module suite folder\nand press "Next')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Enter the base java package for your plugin in "Code Name Base like\n',Object(i.b)("inlineCode",{parentName:"p"},"com.mycompany.plugins.mylibrary"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Enter a "Module Display Name for your plugin like "My Library')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Press Finish"))),Object(i.b)("p",null,"Adding the library:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Right click the Module Project and select "New\u2192Other')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Under "Module Development select the "Java SE Library Descriptor\ntemplate and press "Next')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'If you dont have the external library registered in the\njMonkeyEngine SDK yet, click "Manage Libraries and do the following:'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Click "New Library, enter a name for the library and press OK')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'In the "Classpath tab, press "Add JAR/Folder and select the jar\nfile(s) needed for the library')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'In the "JavaDoc tab, press "Add ZIP/Folder and add the javadoc\nfor the library (zipped or folder)')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'In the "Sources tab you can add a folder or jar file containing\nthe source files of the library if available')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Press OK")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Select the external library from the list and press "Next')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Enter a name for the Library (used as filename for the description\nfile)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Enter a display name for the Library (This is the name the user\nlater sees in his library list)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Press OK"))),Object(i.b)("p",null,'You will notice a new file "MyLibrary.xml is created in the plugins base\npackage and linked to in the layer.xml file. Additionally the jar file\nand sources /javadoc are copied into a "release folder in the project\nroot. This is basically it, you can configure a version number, license\nfile (should be placed in Module root folder) and more via the Module\nProperties.'),Object(i.b)("p",null,"Note that the files in the release folder are ",Object(i.b)("strong",{parentName:"p"},"not")," automatically\nupdated when the library changes, you have to pack and replace the jar\nand zip files manually. See the build script extension in the link below\non how you can make your module build script do that automatically."),Object(i.b)("p",null,"After you are done, you can ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../../sdk/development/setup.xml#jmonkeyengine_sdk_contributions_update_center"}),"contribute the plugin in the jMonkeyEngine\nSDK contribution update\ncenter"),"."))}b.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||s[d]||i;return n?a.a.createElement(m,o({ref:t},p,{components:n})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
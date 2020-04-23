(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{390:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),i=(n(0),n(441)),o={},c={id:"jme3/contributions/cubes/settings",title:"settings",description:"This framework is intended to run every kind of block world the user",source:"@site/docs/jme3/contributions/cubes/settings.md",permalink:"/wikidemo/docs/jme3/contributions/cubes/settings",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/contributions/cubes/settings.md"},s=[],l={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This framework is intended to run every kind of block world the user\nwants - This includes different chunk sizes, block sizes, materials and\na lot more."),Object(i.b)("p",null,"Those attributes are handled by an instance of the class\n",Object(i.b)("strong",{parentName:"p"},"CubesSettings"),". You will have to specify such an object when creating\nyour block world:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"//You have to specify a valid application, the framework will use e.g. its assetManager\nCubesSettings settings = new CubesSettings(application);\n")),Object(i.b)("p",null,"Now, you can set all needed options via ",Object(i.b)("inlineCode",{parentName:"p"},"get"),"/",Object(i.b)("inlineCode",{parentName:"p"},"set"),"-methods:"),Object(i.b)("p",null,"+-------------+---------+---------------------------------------------+\n| Setting     | Default | Usage                                       |\n|             | Value   |                                             |\n+=============+=========+=============================================+\n| ",Object(i.b)("inlineCode",{parentName:"p"},"           | 3       | The side length of a block in world units.  |\n| Block Size")," |         |                                             |\n+-------------+---------+---------------------------------------------+\n| ",Object(i.b)("inlineCode",{parentName:"p"},"Chunk      | 16      | The amount of blocks, that are contained in |\n| Size X/Y/Z")," | /256/15 | one chunk in the given direction.           |\n+-------------+---------+---------------------------------------------+\n| ",Object(i.b)("inlineCode",{parentName:"p"},"Bloc       | null    | The material that will be used by the       |\n| k Material")," |         | chunks\\' geometries. You can load also load |\n|             |         | a default blockworld-fitting material by    |\n|             |         | calling                                     |\n|             |         | ",Object(i.b)("inlineCode",{parentName:"p"},"setDef                                     |\n|             |         | aultBlockMaterial(String textureFilePath)"),". |\n+-------------+---------+---------------------------------------------+\n| ",Object(i.b)("inlineCode",{parentName:"p"},"Textures   | 16      | The amount of textures in your image file,  |\n|  Count X/Y")," |         | on the given axis.                          |\n+-------------+---------+---------------------------------------------+"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can generate valid test settings by calling\n",Object(i.b)("inlineCode",{parentName:"p"},"CubesTestAssets.getSettings(application)"),"."))),Object(i.b)("p",null,'::: {.warning}\nAt the moment, changes to the settings won\'t affect the block world at\n"runtime", i.e. ',Object(i.b)("strong",{parentName:"p"},"after")," it's created.\n:::"))}b.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return n?a.a.createElement(m,c({ref:t},l,{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
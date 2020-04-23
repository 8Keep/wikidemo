(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{271:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),a=(n(0),n(441)),i={},c={id:"jme3/contributions/cubes/tools/noise",title:"noise",description:'Noises are arrays of random numbers, that "fit together in some way -',source:"@site/docs/jme3/contributions/cubes/tools/noise.md",permalink:"/wikidemo/docs/jme3/contributions/cubes/tools/noise",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/contributions/cubes/tools/noise.md"},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Noises are arrays of random numbers, that \"fit together in some way -\nThey're often used to generate content, for example block worlds. After\nspecifying a noise, the framework will generate the random numbers and\nplace according blocks (the larger the number, the heigher the terrain\nat this point)."),Object(a.b)("p",null,"::: {.important}\nRemember that large noises will take some time to calculate.\n:::"),Object(a.b)("h1",{id:"generate-a-noise"},"Generate a noise"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"http://destroflyer.mania-community.de/other/imagehost/cubes/noise_example.jpg",alt:"noise_example.jpg"}))),Object(a.b)("p",null,"At the moment, the framework supports only one noise type (based on the\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Diamond-square_algorithm"}),"Diamond-square\nAlgorithm"),") - You\ncan see a visualization of such a noise at the right."),Object(a.b)("p",null,"This is how you can use it:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"//Create the block terrain (4x1x4 chunks)\nBlockTerrainControl blockTerrain = new BlockTerrainControl(new Vector3Int(4, 1, 4));\n\n//Specify location, size, roughness and the block class\n//(The smaller the roughness, the flatter the generated terrain)\nblockTerrain.setBlocksFromNoise(new Vector3Int(0, 0, 0), new Vector3Int(64, 50, 64), 0.3f, CubesTestAssets.BLOCK_GRASS);\n\n//Add the block terrain to a node\nNode terrainNode = new Node();\nterrainNode.addControl(blockTerrain);\nrootNode.attachChild(terrainNode);\n")),Object(a.b)("p",null,"Some random results of the according noise:"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"http://destroflyer.mania-community.de/other/imagehost/cubes/test_noise.png",alt:"test_noise.png"}))),Object(a.b)("h1",{id:"further-improvements"},"Further improvements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"There will be mutltiple noises available and even an interface to\ndefine your own noises")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'It will be possible to specify a loader, that selects a "suitable\nblock type dependant on the location'))))}u.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return n?o.a.createElement(d,c({ref:t},l,{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
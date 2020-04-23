(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{411:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var o=n(1),r=n(9),a=(n(0),n(441)),c={},i={id:"jme3/contributions/cubes/register_your_blocks",title:"register_your_blocks",description:"To add blocks to the framework, you just have to add them to the",source:"@site/docs/jme3/contributions/cubes/register_your_blocks.md",permalink:"/wikidemo/docs/jme3/contributions/cubes/register_your_blocks",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/contributions/cubes/register_your_blocks.md"},s=[],l={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To add blocks to the framework, you just have to add them to the\nBlockManager - This happens by specifying a block object (has to extend\n",Object(a.b)("strong",{parentName:"p"},"cubes.Block"),', by overriding methods you can specify own behaviours).\nEach block needs at least one "skin", which you have to pass in the\nconstructor of the ',Object(a.b)("strong",{parentName:"p"},"cubes.Block"),' class). A "skin" contains all\ninformation to display the block - Texture-Index in the Atlas,\nTransparency and so on.'),Object(a.b)("p",null,"After initialising your object, you have to register it in the\nBlockManager:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"BlockManager.register(myBlockObject);\n")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Using own blocks ",Object(a.b)("em",{parentName:"p"},"should")," work at the moment, if you encounter problems\nyou can test your code using the default blocks (e.g.\n",Object(a.b)("strong",{parentName:"p"},"CubesTestAssets.BLOCK","_","GRASS"),")."),Object(a.b)("p",{parentName:"div"},"You can register them by calling ",Object(a.b)("inlineCode",{parentName:"p"},"CubesTestAssets.registerBlocks();"),"."))),Object(a.b)("h1",{id:"single-texture-block"},"Single Texture Block"),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"http://destroflyer.mania-community.de/other/imagehost/cubes/block_stone.png",alt:"block_stone.png"}))),Object(a.b)("p",null,"Let's say, you want to add a simple block, which uses the same texture\non every face. The framework recognizes, when only one texture is\nspecified and therefore uses this for each face:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"//The stone texture is in the 10th column and 1st row in the texture atlas\nBlock blockStone = new Block(new BlockSkin(new BlockSkin_TextureLocation(9, 0), false));\nBlockManager.register(blockStone);\n")),Object(a.b)("h1",{id:"face-dependant-textures-block"},"Face-Dependant Textures Block"),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"http://destroflyer.mania-community.de/other/imagehost/cubes/block_wood.png",alt:"block_wood.png"}))),Object(a.b)("p",null,"Now it's time to get prettier blocks - The wood block as known in\nMinecraft has two textures: Top/Bottom (cross-section) and\nLeft/Right/Front/Back (bark). A simple way to set the texture for each\nface is to just give 6 textures to the skin (in the right order :P):"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"Block blockWood = new Block(new BlockSkin[]{\n    new BlockSkin(new BlockSkin_TextureLocation(4, 0), false),\n    new BlockSkin(new BlockSkin_TextureLocation(4, 0), false),\n    new BlockSkin(new BlockSkin_TextureLocation(3, 0), false),\n    new BlockSkin(new BlockSkin_TextureLocation(3, 0), false),\n    new BlockSkin(new BlockSkin_TextureLocation(3, 0), false),\n    new BlockSkin(new BlockSkin_TextureLocation(3, 0), false)\n});\nBlockManager.register(blockWood);\n")),Object(a.b)("h1",{id:"dynamic-textures-block"},"Dynamic Textures Block"),Object(a.b)("p",null,"Last but not least: What if a block wants to change its texture\naccording to its environment?"),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"http://destroflyer.mania-community.de/other/imagehost/cubes/block_grass.png",alt:"block_grass.png"}))),Object(a.b)("p",null,"A nice example would be a grass block - If it's on the surface, it\ncontains a nice grass texture at the top face and a little\nearth-grass-transition at the sides. Otherwise, all 6 sides should\ndisplay an earth texture. Special behaviours like this can be achieved\nby overwriting the ",Object(a.b)("strong",{parentName:"p"},"getSkinIndex")," method:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"Block blockGrass = new Block(new BlockSkin[]{\n        //We specify the 3 skins we need:\n        //Grass, Earth-Grass-Transition and Earth\n        new BlockSkin(new BlockSkin_TextureLocation(0, 0), false),\n        new BlockSkin(new BlockSkin_TextureLocation(1, 0), false),\n        new BlockSkin(new BlockSkin_TextureLocation(2, 0), false)\n    }){\n\n    @Override\n    //The number that's being returned specified the index\n    //of the skin in the previous declared BlockSkin array\n    protected int getSkinIndex(BlockChunkControl chunk, Vector3Int location, Block.Face face){\n        if(chunk.isBlockOnSurface(location)){\n            switch(face){\n                case Top:\n                    return 0;\n\n                case Bottom:\n                    return 2;\n            }\n            return 1;\n        }\n        return 2;\n    }\n};\nBlockManager.register(blockGrass);\n")))}b.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},k=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),k=o,d=u["".concat(c,".").concat(k)]||u[k]||p[k]||a;return n?r.a.createElement(d,i({ref:t},l,{components:n})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}k.displayName="MDXCreateElement"}}]);
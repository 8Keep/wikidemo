(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{280:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(1),r=n(9),a=(n(0),n(441)),c={},i={id:"jme3/contributions/cubes/build_your_block_world",title:"build_your_block_world",description:"Now you've set up your different block types and we're ready to build",source:"@site/docs/jme3/contributions/cubes/build_your_block_world.md",permalink:"/wikidemo/docs/jme3/contributions/cubes/build_your_block_world",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/contributions/cubes/build_your_block_world.md"},l=[],s={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Now you've set up your different block types and we're ready to build\nsome cool stuff in our world. :)"),Object(a.b)("h1",{id:"usage-example"},"Usage example"),Object(a.b)("p",null,"Instead of explaining every different method of the framework, here's a\ndescriptive example, that should explain the usage:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"//This is your terrain, it contains the whole\n//block world and offers methods to modify it\nBlockTerrainControl blockTerrain = new BlockTerrainControl(CubesTestAssets.getSettings(this), new Vector3Int(1, 1, 1));\n\n//To set a block, just specify the location and the block object\n//(Existing blocks will be replaced)\nblockTerrain.setBlock(new Vector3Int(0, 0, 0), CubesTestAssets.BLOCK_WOOD);\nblockTerrain.setBlock(new Vector3Int(0, 0, 1), CubesTestAssets.BLOCK_WOOD);\nblockTerrain.setBlock(new Vector3Int(1, 0, 0), CubesTestAssets.BLOCK_WOOD);\nblockTerrain.setBlock(new Vector3Int(1, 0, 1), CubesTestAssets.BLOCK_STONE);\nblockTerrain.setBlock(0, 0, 0, CubesTestAssets.BLOCK_GRASS); //For the lazy users :P\n\n//You can place whole areas of blocks too: setBlockArea(location, size, block)\n//(The specified block will be cloned each time)\n//The following line will set 3 blocks on top of each other\n//({1,1,1}, {1,2,3} and {1,3,1})\nblockTerrain.setBlockArea(new Vector3Int(1, 1, 1), new Vector3Int(1, 3, 1), CubesTestAssets.BLOCK_STONE);\n\n//Removing a block works in a similar way\nblockTerrain.removeBlock(new Vector3Int(1, 2, 1));\nblockTerrain.removeBlock(new Vector3Int(1, 3, 1));\n\n//The terrain is a jME-Control, you can add it\n//to a node of the scenegraph to display it\nNode terrainNode = new Node();\nterrainNode.addControl(blockTerrain);\nrootNode.attachChild(terrainNode);\n")),Object(a.b)("p",null,"After running those few lines, you should see this:"),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"http://destroflyer.mania-community.de/other/imagehost/cubes/test_tutorial.png",alt:"test_tutorial.png"}))),Object(a.b)("p",null,"As you see, creating and managing your own block world will just take a\nfew lines of code and doesn't require any special knowledge. :)"),Object(a.b)("h1",{id:"me-wantz-spezzial-phyziczzz-and-shadowzzz"},"Me wantz spezzial phyziczzz and shadowzzz"),Object(a.b)("p",null,"The BlockTerrainControl attaches the world to the assigned jME-Node -\nThis way you can specify behaviors like shadows or even physics just\nlike you do with each other object:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"terrainNode.setShadowMode(ShadowMode.CastAndReceive);\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"terrainNode.addControl(new RigidBodyControl(0));\nphysicsSpace.addAll(terrainNode);\n")))}u.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=o,f=b["".concat(c,".").concat(p)]||b[p]||d[p]||a;return n?r.a.createElement(f,i({ref:t},s,{components:n})):r.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
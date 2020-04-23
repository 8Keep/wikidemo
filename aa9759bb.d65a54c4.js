(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{337:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(441)),i={},c={id:"jme3/intermediate/optimization",title:"optimization",description:"This page is intended as a reference collection of optimization tricks",source:"@site/docs/jme3/intermediate/optimization.md",permalink:"/wikidemo/docs/jme3/intermediate/optimization",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/intermediate/optimization.md",sidebar:"main",previous:{title:"features",permalink:"/wikidemo/docs/jme3/features"},next:{title:"faq",permalink:"/wikidemo/docs/jme3/faq"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This page is intended as a reference collection of optimization tricks\nthat can be used to speed up JME3 applications."),Object(o.b)("h1",{id:"maintain-low-geometry-count"},"Maintain low Geometry count"),Object(o.b)("p",null,"The more Geometry objects are added to the scene, the harder it gets to\nhandle them in a speedy fashion. The reason for this is that a render\ncommand must be done for every object, potentially creating a bottleneck\nbetween the CPU and the graphics card."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Possible optimization techniques")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Use GeometryBatchFactory.optimize(node) to merge the meshes of the\ngeometries contained in the given node into fewer batches, each\nbased on common Materials used.\\\nYou can optimize nodes using the SceneComposer in the SDK as well:\nRight-click a node and select "Optimize Geometry.')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Side-effects")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Using GeometryBatchFactory merges individual Geometries into a\nsingle mesh. Thereby it becomes hard to apply specific Materials or\nto remove a single Geometry. Therefore it should be used for static\nGeometry only that does not require frequent changes or individual\nmaterials/texturing.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Using a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../jme3/advanced/texture_atlas"}),"Texture Atlas"),"\nprovides limited individual texturing of batched geometries.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Using the still experimental BatchNode allows batching Geometry\nwhile keeping the single Geometry objects movable separately\n(similar to animation, the buffer gets updated per Geometry\nposition)."))),Object(o.b)("h1",{id:"avoid-creating-new-objects"},"Avoid creating new objects"),Object(o.b)("p",null,"Different Java implementations use different garbage collection\nalgorithms, so depending on the platforms you target, different advice\napplies."),Object(o.b)("p",null,"The major variants are Oracle's JRE, old (pre-Gingerbread) Androids, and\nnewer (Gingerbread or later) Androids."),Object(o.b)("p",null,"Oracle's JRE is a copying collector. This means that it does not need to\ndo any work for objects that have become unreachable, it just keeps\ncopying live objects to new memory areas and recycles the now-unused\narea as a whole. Older objects are copied less often, so the garbage\ncollection overhead is roughly proportional to the rate at which your\ncode creates new objects that survive for, say, more than a minute."),Object(o.b)("p",null,"Gingerbread and newer Androids use a garbage collector that does some\noptimization tricks with local variables, but you should avoid creating\nand forgetting lots of objects in the scene graph."),Object(o.b)("p",null,"Older Androids use a very naive garbage collector that needs to do real\nwork for every object, both during creation and during collection.\nCreating local variables can build up a heap of work, particularly if\nthe function is called often."),Object(o.b)("p",null,"To avoid creating a temporary object, use ",Object(o.b)("em",{parentName:"p"},"local methods")," to overwrite\nthe contents of an existing object instead of creating a new temporary\nobject for the result."),Object(o.b)("p",null,"E.g. when you use math operations like ",Object(o.b)("inlineCode",{parentName:"p"},"vectorA.mult(vectorB);"),", they\ncreate new objects for the result."),Object(o.b)("p",null,"Check your math operations for opportunities to use the ",Object(o.b)("em",{parentName:"p"},"local")," version\nof the math operations, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"vectorA.multLocal(vectorB)"),". Local methods\nstore the result in vectorA and do not create a new object."),Object(o.b)("h1",{id:"avoid-large-objects-in-physics"},"Avoid large objects in physics"),Object(o.b)("p",null,"To offload much computation to the less CPU intense physics broadphase\ncollision check, avoid having large meshes that cover e.g. the whole map\nof your level. Instead, separate the collision shapes into multiple\nsmaller chunks. Obviously, don't exaggerate the chunking, because having\nexcessive amounts of physics objects similarly cause performance\nproblems."),Object(o.b)("h1",{id:"check-the-statistics"},"Check the Statistics"),Object(o.b)("p",null,"SimpleApplication displays a HUD with statistics. Use\n",Object(o.b)("inlineCode",{parentName:"p"},"app.setDisplayStatView(true);")," to activate it, and false to deactivate\nit. The StatsView counts Objects,Uniforms,Triangles,Vertices are in the\nscene, and it counts how many FrameBuffers, Textures, or Shaders:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"... were switched in the last frame (S)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"... were used during the last frame (F)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"... exist in OpenGL memory (M)"))),Object(o.b)("p",null,"For example, ",Object(o.b)("inlineCode",{parentName:"p"},"Textures (M)")," tells you how many textures are currently in\nOpenGL memory."),Object(o.b)("p",null,"Generally jME3 is well optimized and optimizes these things correctly.\nRead ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../jme3/advanced/statsview"}),"statsview")," to learn the details\nabout how to interpret the statistics, how to tell whether your values\nare off, or whether they point out a problem."))}p.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,c({ref:t},l,{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
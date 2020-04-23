(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{147:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return p})),r.d(n,"default",(function(){return s}));var t=r(1),a=r(9),o=(r(0),r(441)),i={},c={id:"jme3/advanced/read_graphic_card_capabilites",title:"read_graphic_card_capabilites",description:"When different people test your new game, you may get feedback that the",source:"@site/docs/jme3/advanced/read_graphic_card_capabilites.md",permalink:"/wikidemo/docs/jme3/advanced/read_graphic_card_capabilites",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/advanced/read_graphic_card_capabilites.md"},p=[],l={rightToc:p};function s(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When different people test your new game, you may get feedback that the\ngame doesn't run on their hardware, or that some details don't look as\nexpected. You need to detect which fetaures the user's hardware\nsupports, and offer a replacement for non-supported features on olde\nhardware (or deactivate them automatically)."),Object(o.b)("p",null,"You can read (and print) the capabilities of the user's graphic card\nusing the ",Object(o.b)("inlineCode",{parentName:"p"},"com.jme3.renderer.Caps")," class:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"Collection<Caps> caps = renderer.getCaps();\nLogger.getLogger(HelloWorld.class.getName()).log(Level.INFO, \u201cCaps: {0}\u201d, caps.toString());\n")),Object(o.b)("p",null,"::: {.note}\nReplace ",Object(o.b)("inlineCode",{parentName:"p"},"HelloWorld")," by the name of the class where you are using this\nline.\n:::"),Object(o.b)("h1",{id:"examples"},"Examples"),Object(o.b)("p",null,"A newer graphic card has modern capabilities, for example OpenGL 2.1 and\nNonPowerOfTwoTextures:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"INFO: Running on jMonkeyEngine 3.0.0\nINFO: Using LWJGL 2.8.2\nINFO: Selected display mode: 1280 x 720 x 0 @0Hz\nINFO: Adapter: null\nINFO: Driver Version: null\nINFO: Vendor: ATI Technologies Inc.\nINFO: OpenGL Version: 2.1 ATI-7.14.5\nINFO: Renderer: AMD Radeon HD 6770M OpenGL Engine\nINFO: GLSL Ver: 1.20\nINFO: Timer resolution: 1.000 ticks per second\nINFO: Capabilities: [FrameBuffer, FrameBufferMRT, FrameBufferMultisample,\nOpenGL20, OpenGL21, ARBprogram, GLSL100, GLSL110, GLSL120,\nVertexTextureFetch, TextureArray, FloatTexture,\nFloatColorBuffer, FloatDepthBuffer, PackedFloatTexture, SharedExponentTexture, PackedFloatColorBuffer,\nTextureCompressionLATC, NonPowerOfTwoTextures, MeshInstancing]\n")),Object(o.b)("p",null,"Here is an example of the capabilities of an semi-old graphic card that\nonly supports OpenGL 2.0. If you use OpenGL 2.1 features you need to\ndecide whether to branch to a low-quality replacement of the unsupported\nfeatures (if you still want to support this card); or whether the game\nwill not start at all and displays an error message explaining the user\nwhat capabilities his hardware is missing to be able to play the game."),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"INFO: Running on jMonkey Engine 3\nINFO: Using LWJGL 2.7.1\nINFO: Selected display mode: 1024 x 768 x 0 @0Hz\nINFO: Adapter: null\nINFO: Driver Version: null\nINFO: Vendor: ATI Technologies Inc.\nINFO: OpenGL Version: 2.0 ATI-1.6.36\nINFO: Renderer: ATI Radeon X1600 OpenGL Engine\nINFO: GLSL Ver: 1.20\nINFO: Timer resolution: 1.000 ticks per second\nINFO: Capabilities: [FrameBuffer, FrameBufferMRT, FrameBufferMultisample,\nOpenGL20, ARBprogram, GLSL100, GLSL110, GLSL120,\nVertexTextureFetch, FloatTexture,\nTextureCompressionLATC, NonPowerOfTwoTextures]\n")),Object(o.b)("p",null,"This next example is lacking ",Object(o.b)("inlineCode",{parentName:"p"},"NonPowerOfTwoTextures"),", this tells you\nthat this user's graphic card cannot handle textures with sizes that are\nnot square powers of two (such as \"128x128)."),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"INFO: Capabilities: [FrameBuffer, FrameBufferMRT, FrameBufferMultisample,\nOpenGL20, ARBprogram, GLSL100, GLSL110, GLSL120,\nVertexTextureFetch, FloatTexture, TextureCompressionLATC]\n")))}s.isMDXComponent=!0},441:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return m}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c({},n,{},e)),r},u=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=t,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return r?a.a.createElement(m,c({ref:n},l,{components:r})):a.a.createElement(m,c({ref:n},l))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);
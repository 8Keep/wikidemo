(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{235:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(1),o=n(9),l=(n(0),n(441)),r={},i={id:"jme3/contributions/tonegodgui/element",title:"element",description:"The Element Class",source:"@site/docs/jme3/contributions/tonegodgui/element.md",permalink:"/wikidemo/docs/jme3/contributions/tonegodgui/element",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/contributions/tonegodgui/element.md"},s=[{value:"Constructors",id:"constructors",children:[]},{value:"Text/Font Related Methods",id:"textfont-related-methods",children:[]},{value:"Element Positions/Dimensions Related Methods",id:"element-positionsdimensions-related-methods",children:[]},{value:"Other Positions/Dimensions Related Methods",id:"other-positionsdimensions-related-methods",children:[]},{value:"Child Elements",id:"child-elements",children:[]},{value:"Element Display Methods",id:"element-display-methods",children:[]},{value:"Hooks",id:"hooks",children:[]},{value:"Clipping",id:"clipping",children:[]},{value:"Accessing the Element&#39;s Components",id:"accessing-the-elements-components",children:[]},{value:"Modifying the Material",id:"modifying-the-material",children:[]},{value:"Effect Related Methods",id:"effect-related-methods",children:[]},{value:"Drag &amp; Drop Related Methods",id:"drag--drop-related-methods",children:[]},{value:"Storing &amp; Retrieving Custom Data",id:"storing--retrieving-custom-data",children:[]}],c={rightToc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"the-element-class"},"The Element Class"),Object(l.b)("p",null,"All controls are extensions of the Element class and thus, provide\ncommon methods for handling common features. Before getting to specific\ncontrols, I thought it might be a good idea to cover some of the common\nmethods for changing basic properties... such as: text, etc."),Object(l.b)("h2",{id:"constructors"},"Constructors"),Object(l.b)("p",null,"The Element class only provides a single constructor using all 6 of the\ncommon parameters:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"/**\n  * Parameters:\n  * Screen screen\n  * String UID\n  * Vector2f position\n  * Vector2f dimensions\n  *  Vector4f resizeBorders\n  * String defaultImgPath\n  */\nElement el = new Element(\n    screen,\n    \u201cSomeID\u201d,\n    new Vector2f(5,5),\n    new Vector2f(100,100),\n    new Vector4f(5,5,5,5),\n    \u201csomeImgPath.png\u201d\n);\n")),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"All setter provide getters."))),Object(l.b)("h2",{id:"textfont-related-methods"},"Text/Font Related Methods"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"element.setFont(String font path)\nelement.setFontSize(float fontSize);\nelement.setFontColor(ColorRGBA fontColor);\nelement.setTextAlign(BitmapFont.Align textAlign);\nelement.setTextVAlign(BitmapFont.VAlign textVAlign);\nelement.setTextWrap(LineWrapMode textWrap);\nelement.setTextPosition(float x, float y);\nelement.setTextPadding(float textPadding);\nelement.setText(String text);\n")),Object(l.b)("h2",{id:"element-positionsdimensions-related-methods"},"Element Positions/Dimensions Related Methods"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"element.setPosition(Vector2f position);\nelement.setPosition(float x, float y);\nelement.setX(float x);\nelement.setY(float y);\nelement.setDimensions(Vector2f dimensions);\nelement.setDimensions(float w, float h);\nelement.setWidth(float width);\nelement.setHeight(float height);\nelement.setMinDimensions(new Vector2f(float x, float y));\n")),Object(l.b)("h2",{id:"other-positionsdimensions-related-methods"},"Other Positions/Dimensions Related Methods"),Object(l.b)("p",null,"Since position and dimensions are relative to the Element's parent\nElement, there are additional getters provided for retrieving absolute\nX, Y, Width & Height (absolute positions start from screen coords 0, 0)"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"element.getAbsoluteX();\nelement.getAbsoluteY();\nelement.getAbsoluteWidth();\nelement.getAbsoluteHeight();\n")),Object(l.b)("h2",{id:"child-elements"},"Child Elements"),Object(l.b)("p",null,"There are additional methods that provide recursive updates to child\nElements:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"element.moveTo(float x, float y);\nelement.resize(float diffX, floar diffY, Element.Borders dir);\n")),Object(l.b)("h2",{id:"element-display-methods"},"Element Display Methods"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"el.show();\nel.showWithEffect();\nel.hide();\nel.hideWithEffect();\n")),Object(l.b)("h2",{id:"hooks"},"Hooks"),Object(l.b)("p",null,"Overridable hooks are provided for default behavoirs:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public void controlResizeHook() {  }\npublic void controlMoveHook() {  }\npublic void controlCleanupHook() {  }\n")),Object(l.b)("h2",{id:"clipping"},"Clipping"),Object(l.b)("p",null,"To have the element be clipped by another element's bounds, use:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"el.setClippingLayer(Element element);\n")),Object(l.b)("p",null,"To set the clipping layer of the Element and propagate clipping to all\nchildren of the Element, use:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"el.setControlClippingLayer(Element element);\n")),Object(l.b)("h2",{id:"accessing-the-elements-components"},"Accessing the Element's Components"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"el.getGeometry(); // The element's Geometry\nel.getModel(); // The element's mesh\nel.getTextElement(); // BitmapText (null if setText() has not been previously called)\n")),Object(l.b)("h2",{id:"modifying-the-material"},"Modifying the Material"),Object(l.b)("p",null,"There are plenty of methods that allow for modifying the look & feel of\nthe Element:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// Accessing the element's material\nel.getElementMaterial();\n\n// Updating the texture:\nel.setColorMap(String imgPath); // To modify the element's base texture\nel.setAlphaMap(String imgPath); // To set the element's alphamap\n\n// Using gradient fills:\nel.getModel().setGradientFillHorizontal(ColorRGBA start, ColorRGBA end);\nel.getModel().setGradientFillVertical(ColorRGBA start, ColorRGBA end);\n\n// Defining each vertex color\nel.getModel().setColorBuffer(FloatBuffer colors);\n\n// Adjusting the element's alpha\nel.setGlobalAlpha(float alpha);\n")),Object(l.b)("h2",{id:"effect-related-methods"},"Effect Related Methods"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"el.addEffect(Effect effect);\nel.removeEffect(Effect.EffectEvent effectEvent);\nel.populateEffects(String styleName); // Loads all effects associated with a Style\n")),Object(l.b)("h2",{id:"drag--drop-related-methods"},"Drag & Drop Related Methods"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"el.setIsDragDropDragElement(boolean isDragElement);\nel.setIsDragDropDropElement(boolean isDropElement);\n\n// for retrieving the current drop object under the element, use:\nscreen.getDropObject();\n")),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"You must manage your own list of acceptable drop objects as any Element\nflagged as isDropObject will be returned."))),Object(l.b)("h2",{id:"storing--retrieving-custom-data"},"Storing & Retrieving Custom Data"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"el.setElementUserData(Object data);\nel.getElementUserData();\n")))}d.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},m=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),b=a,h=m["".concat(r,".").concat(b)]||m[b]||p[b]||l;return n?o.a.createElement(h,i({ref:t},c,{components:n})):o.a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var c=2;c<l;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
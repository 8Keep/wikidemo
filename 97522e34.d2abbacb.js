(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{314:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(1),a=t(9),i=(t(0),t(441)),o={},c={id:"jme3/contributions/tonegodgui/indicator",title:"indicator",description:"Indicator Class",source:"@site/docs/jme3/contributions/tonegodgui/indicator.md",permalink:"/wikidemo/docs/jme3/contributions/tonegodgui/indicator",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/contributions/tonegodgui/indicator.md"},l=[{value:"Constructor example:",id:"constructor-example",children:[]},{value:"Changing &amp; Reshaping the Indicator",id:"changing--reshaping-the-indicator",children:[]},{value:"Methods specific to the Indicator class",id:"methods-specific-to-the-indicator-class",children:[]}],d={rightToc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"indicator-class"},"Indicator Class"),Object(i.b)("p",null,"An indicator is a highly customizable progress bar, which can be used\nshowing/displaying player stats, etc"),Object(i.b)("p",null,"The Indicator uses the 3 standard constructors as shown in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../../../jme3/contributions/tonegodgui/quickstart"}),"Quick\nStart Guide")," with\nthe addition of one extra parameter:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Orientation appended to the end of the param list for each")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Features include:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Clipping + an alpha mask to create any shaped indicator you would\nlike")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Display the indicator in any color you choose.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Image based indicators in place of color+clipping")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"An overlay image for transparent indicator containers"))),Object(i.b)("h2",{id:"constructor-example"},"Constructor example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"/**\n  * Parameters:\n  * Screen screen\n  * String UID\n  * Vector2f position\n  * Orientation orientation\n  */\nIndicator ind = new Indicator(\n    screen,\n    \u201cSomeID\u201d,\n    new Vector2f(10,10),\n   Orientation.VERTICAL\n);\n")),Object(i.b)("h2",{id:"changing--reshaping-the-indicator"},"Changing & Reshaping the Indicator"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Using an image in place of a colored indicator\nind.setBaseImage(String imgPath);\n\n// Use a clipped image for the indicator\nind.setIndicatorImage(String imgPath);\n\n// Changing the color of the indicator or colorize the image-based indicator\nind.setIndicatorColor(ColorRGBA indicatorColor);\n\n// Add padding (margins) to the indicator portion of the indicator\nind.setIndicatorPadding(Vector4f padding);\n\n// Reshape the indicator !IMPORTANT! setIndicatorAlphaMap is now @Deprecated, use this instead:\nind.setAlphaMap(String alphaMapPath);\n")),Object(i.b)("h2",{id:"methods-specific-to-the-indicator-class"},"Methods specific to the Indicator class"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Get the indicators oritentation\nind.getOrientation();\n\n// Adjust value ranges\nind.setMaxValue(float maxValue);\nind.setCurrentValue(float currentValue);\n\n// Get current info\nind.getCurrentPercentage();\nind.getCurrentValue();\nind.getMaxValue();\nind.getTextDisplayElement(); // Return the text element for formatting purposes\nind.setDisplayValues(); // Display value in format:  current/max or 10/100\nind.setDisplayPercentage(); // Displays percentage:  82% etc\nind.setHideText(); // removes display text (default)\n")),Object(i.b)("h1",{id:"indicator-examples"},"Indicator Examples"),Object(i.b)("p",null,"Cut & Paste the following code into the simpleInitApp method of a new\nJME project. Use the slider to adjust the indicator."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'flyCam.setDragToRotate(true);\ninputManager.setCursorVisible(true);\n\nscreen = new Screen(this);\nguiNode.addControl(screen);\n\nfinal ColorRGBA color = new ColorRGBA();\n\nfinal Indicator ind = new Indicator(\n    screen,\n    new Vector2f(50,50),\n    new Vector2f(300,30),\n    Orientation.HORIZONTAL\n) {\n    @Override\n    public void onChange(float currentValue, float currentPercentage) {  }\n};\nind.setBaseImage(screen.getStyle("Window").getString("defaultImg"));\n//ind.setIndicatorImage(screen.getStyle("Window").getString("defaultImg"));\nind.setIndicatorColor(ColorRGBA.randomColor());\nind.setAlphaMap(screen.getStyle("Indicator").getString("alphaImg"));\nind.setIndicatorPadding(new Vector4f(7,7,7,7));\nind.setMaxValue(100);\nind.setDisplayPercentage();\n\nscreen.addElement(ind);\n\nSlider slider = new Slider(screen, new Vector2f(100,100), Orientation.HORIZONTAL, true) {\n    @Override\n    public void onChange(int selectedIndex, Object value) {\n        float blend = selectedIndex*0.01f;\n        color.interpolate(ColorRGBA.Red, ColorRGBA.Green, blend);\n        ind.setIndicatorColor(color);\n        ind.setCurrentValue((Integer)value);\n    }\n};\n\nscreen.addElement(slider);\n')),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/images/../jme3/contributions/tonegodgui/indicatorexample.png",alt:"indicatorexample.png"}))))}s.isMDXComponent=!0},441:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),s=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},p=function(e){var n=s(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),b=r,g=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return t?a.a.createElement(g,c({ref:n},d,{components:t})):a.a.createElement(g,c({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
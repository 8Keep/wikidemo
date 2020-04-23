(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{420:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var o=n(1),a=n(9),r=(n(0),n(441)),c={},l={id:"jme3/contributions/tonegodgui/button",title:"button",description:"Button Class",source:"@site/docs/jme3/contributions/tonegodgui/button.md",permalink:"/wikidemo/docs/jme3/contributions/tonegodgui/button",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/contributions/tonegodgui/button.md"},i=[{value:"Hover State",id:"hover-state",children:[]},{value:"Pressed State",id:"pressed-state",children:[]},{value:"Abstract Event Methods:",id:"abstract-event-methods",children:[]},{value:"Adding an Icon",id:"adding-an-icon",children:[]},{value:"Methods specific to the Button class",id:"methods-specific-to-the-button-class",children:[]}],s={rightToc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"button-class"},"Button Class"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Buttons have a default state, a hover state and a pressed state.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"They implement the tonegodGUI MouseButtonListener &\nMouseFocusListener interfaces")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"They provide an optional stillPressed event")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Can either consist of text label or icon")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"They can be set to Toggle mode.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"They have default effects set for Hover, Pressed & LoseFocus")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Buttons are an abstract class providing methods for handling user\ninput"))),Object(r.b)("p",null,"Again, the same three options for constructor are available as show in\nthe ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"../../../jme3/contributions/tonegodgui/quickstart"}),"Quick Start\nGuide"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Constructor 1:")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"/** Parameters:\n  * Screen screen,\n  * String UID,\n  * Vector2f position\n  */\n\nButton button = new Button(screen, \u201cbutton\u201d, new Vector2f(15, 15));\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Constructor 2:")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"/** Additional Parameter:\n  * Vector2f dimensions  */\n\nButton button = new Button(screen, \u201cbutton\u201d, new Vector2f(15, 15),\n    new Vector2f(100, 25)\n);\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Constructor 3:")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"/** Additional Parameters:\n  * Vector4f resizeBorders,\n  * String defaultImg\n  */\n\nButton button = new Button(screen, \u201cbutton\u201d, new Vector2f(15, 15), new Vector2f(100, 25),\n    new Vector4f(5,5,5,5),\n    \u201ctonegod/gui/style/def/Button/button_u_x.png\u201d\n);\n")),Object(r.b)("h2",{id:"hover-state"},"Hover State"),Object(r.b)("p",null,"You can override the default hover state using the following method:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"// Override the information used by the hover effect\nbutton.setButtonHoverInfo(String imagePath, ColorRGBA textHoverColor);\n")),Object(r.b)("h2",{id:"pressed-state"},"Pressed State"),Object(r.b)("p",null,"You can override the default pressed state using the following method:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"// Override the information used by the pressed effect\nbutton.setButtonPressedInfo(String imagePath, ColorRGBA textPressedColor);\n")),Object(r.b)("h2",{id:"abstract-event-methods"},"Abstract Event Methods:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"public void onButtonMouseLeftDown(MouseButtonEvent evt, boolean toggled);\npublic void onButtonMouseRightDown(MouseButtonEvent evt, boolean toggled);\npublic void onButtonMouseLeftUp(MouseButtonEvent evt, boolean toggled);\npublic void onButtonMouseRightUp(MouseButtonEvent evt, boolean toggled);\npublic void onButtonFocus(MouseMotionEvent evt);\npublic void onButtonLostFocus(MouseMotionEvent evt);\npublic void onButtonStillPressedInterval();\n")),Object(r.b)("h2",{id:"adding-an-icon"},"Adding an Icon"),Object(r.b)("p",null,"In place of text, you can use an image icon by calling the following\nmethod:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"button.setButtonIcon(float width, float height, String texturePath);\n")),Object(r.b)("h2",{id:"methods-specific-to-the-button-class"},"Methods specific to the Button class"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"//Toggle info\nbutton.setIsToggleButton(boolean isToggleButton); // Also provides a getter\nbutton.getIsToggleButton();\nbutton.getIsToggled();\n\n// Additional state info\nbutton.clearAltImages();\n\n// Enabling/disabling invternal calls (StillPressed event)\nbutton.setInterval(float intervalsPerSecond); // 0 deactivates\n")),Object(r.b)("p",null,"::: {.note}\nWhen not otherwise specified, use the primitive Element method for\nsetting the text of a control. For instance, to set the text of the\nButton instance, you simply call:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"button.setText(String text);\n")),Object(r.b)("p",null,":::"),Object(r.b)("h1",{id:"buttonadapter-class"},"ButtonAdapter Class"),Object(r.b)("p",null,"Tips for using the Button class:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a button")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Implement all abstract methods")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Write your code for the event handlers you wish to use")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Change the Button to a ButtonAdapter")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Remove all unused event handler methods"))))}u.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(n),d=o,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||r;return n?a.a.createElement(m,l({ref:t},s,{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<r;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),c=n(9),o=(n(0),n(441)),a={},i={id:"jme3/contributions/tonegodgui/checkbox",title:"checkbox",description:"CheckBox Class",source:"@site/docs/jme3/contributions/tonegodgui/checkbox.md",permalink:"/wikidemo/docs/jme3/contributions/tonegodgui/checkbox",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/contributions/tonegodgui/checkbox.md"},s=[{value:"Hover State",id:"hover-state",children:[]},{value:"Pressed State",id:"pressed-state",children:[]},{value:"Abstract Event Methods:",id:"abstract-event-methods",children:[]},{value:"Methods Specific to the CheckBox Class:",id:"methods-specific-to-the-checkbox-class",children:[]}],b={rightToc:s};function l(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"checkbox-class"},"CheckBox Class"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"CheckBox's extend the Button class and enable the Toggle setting")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"They provide a default label (which is only added if the label text\nis set).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"They provide the abstract method onChange for executing code when\nthe CheckBox is altered by the user."))),Object(o.b)("p",null,"Again, the same three options for constructor are available as show in\nthe ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../../jme3/contributions/tonegodgui/quickstart"}),"Quick Start\nGuide"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Constructor 1:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"/** Parameters:\n  * Screen screen,\n  * String UID,\n  * Vector2f position\n  */\n\nCheckBox cb = new CheckBox(screen, \u201ccb\u201d, new Vector2f(15, 15));\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Constructor 2:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"/** Additional Parameter:\n  * Vector2f dimensions  */\n\nCheckBox cb = new CheckBox(screen, \u201ccb\u201d, new Vector2f(15, 15),\n    new Vector2f(25, 25)\n);\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Constructor 3:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"/** Additional Parameters:\n  * Vector4f resizeBorders,\n  * String defaultImg\n  */\n\nCheckBox cb = new CheckBox(screen, \u201ccb\u201d, new Vector2f(15, 15), new Vector2f(25, 25),\n    new Vector4f(3,3,3,3),\n    \u201ctonegod/gui/style/def/Button/checkbox_u_x.png\u201d\n);\n")),Object(o.b)("h2",{id:"hover-state"},"Hover State"),Object(o.b)("p",null,"You can override the default hover state using the following method:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Override the information used by the hover effect\ncb.setButtonHoverInfo(String imagePath, ColorRGBA textHoverColor);\n")),Object(o.b)("h2",{id:"pressed-state"},"Pressed State"),Object(o.b)("p",null,"You can override the default pressed state using the following method:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Override the information used by the pressed effect\ncb.setButtonPressedInfo(String imagePath, ColorRGBA textPressedColor);\n")),Object(o.b)("h2",{id:"abstract-event-methods"},"Abstract Event Methods:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public void onChange(boolean isChecked);\n")),Object(o.b)("h2",{id:"methods-specific-to-the-checkbox-class"},"Methods Specific to the CheckBox Class:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"cb.setCheckboxText(String text);\ncb.getIsChecked();\n")))}l.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var b=c.a.createContext({}),l=function(e){var t=c.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=l(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,h=u["".concat(a,".").concat(d)]||u[d]||p[d]||o;return n?c.a.createElement(h,i({ref:t},b,{components:n})):c.a.createElement(h,i({ref:t},b))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var b=2;b<o;b++)a[b]=n[b];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
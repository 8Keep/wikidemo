(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{218:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(441)),i={},c={id:"jme3/contributions/tonegodgui/slider",title:"slider",description:"Slider Class",source:"@site/docs/jme3/contributions/tonegodgui/slider.md",permalink:"/wikidemo/docs/jme3/contributions/tonegodgui/slider",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/contributions/tonegodgui/slider.md"},l=[{value:"Abstract Event Methods:",id:"abstract-event-methods",children:[]},{value:"Methods specific to the Slider class:",id:"methods-specific-to-the-slider-class",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"slider-class"},"Slider Class"),Object(o.b)("p",null,"The Slider class provides the same 3 common contrustors shown in the\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../../jme3/contributions/tonegodgui/quickstart"}),"Quick Start\nGuide")," with the\naddition of two extra parameters."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The orientation of the Slider")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'A boolean flag telling the control whether or not the track should\n"surround" the thumb.'))),Object(o.b)("p",null,"The additional parameter are appended to the existing parameter list for\nall 3 constructors, like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"/**\n  * Parameters:\n  * Screen screen\n  * String UID\n  * Vector2f position\n  * Slider.Orientation orientation\n  * boolean trackSurroundsThumb\n  */\nSlider slider1 = new Slider(\n    screen,\n    \u201cSomeID\u201d,\n    new Vector2f(15, 15),\n    Slider.Orientation.HORIZONTAL,\n    true\n);\n")),Object(o.b)("h2",{id:"abstract-event-methods"},"Abstract Event Methods:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public void onChange(int selectedIndex, String value);\n")),Object(o.b)("h2",{id:"methods-specific-to-the-slider-class"},"Methods specific to the Slider class:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Adding/removing step values\nslider1.addStepValue(String value);\nslider1.removeStepValue(String value);\n\n// Selected values\nslider1.getSelectedIndex();\n")),Object(o.b)("p",null,"You can set the select Sliders position and selected value using:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"slider1.setSelectedIndex(int selectedIndex)\n")))}u.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return n?a.a.createElement(m,c({ref:t},s,{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
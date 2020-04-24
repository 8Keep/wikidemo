(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return i}));var a=n(1),o=n(9),l=(n(0),n(441)),r={},c={id:"jme3/contributions/tonegodgui/styles",title:"styles",description:"Creating a new Theme",source:"@site/docs/jme3/contributions/tonegodgui/styles.md",permalink:"/wikidemo/docs/jme3/contributions/tonegodgui/styles",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/contributions/tonegodgui/styles.md"},p=[{value:"Understanding Styles",id:"understanding-styles",children:[]},{value:"The &#39;effects&#39; Tag",id:"the-effects-tag",children:[]},{value:"style_map.xml",id:"style_mapxml",children:[]},{value:"To set up a custom global Look &amp; Feel for your UI",id:"to-set-up-a-custom-global-look--feel-for-your-ui",children:[{value:"STEP 1: Copy the style_map.xml file to a local directory in your Project Assets folder.",id:"step-1-copy-the-style_mapxml-file-to-a-local-directory-in-your-project-assets-folder",children:[]},{value:"STEP 2: Point your Screen class to the new style_map.xml file.",id:"step-2-point-your-screen-class-to-the-new-style_mapxml-file",children:[]}]}],s={rightToc:p};function i(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"creating-a-new-theme"},"Creating a new Theme"),Object(l.b)("h2",{id:"understanding-styles"},"Understanding Styles"),Object(l.b)("p",null,"The Style class is set up to be as open ended as possible for creating\ncustom controls."),Object(l.b)("p",null,"Each property of a style can be one of the following data type:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"String")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"float")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"int")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"boolean")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"ColorRGBA")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Vector2f")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Vector3f")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Vector4f")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Effect")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Object"))),Object(l.b)("p",null,"To retrieve a tag from a style you must use the get method for the data\ntype you trying to retrieve like so:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"screen.getStyle(\u201cStyleName\u201d).getColorRGBA(\u201cTagNameInStyle\u201d);\n")),Object(l.b)("p",null,"These can be used as flags for configuring you control, or style\nspecific info for default Look & Feel"),Object(l.b)("p",null,"Lets look at the Button.xml file as an example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-{.htmlblock}"}),"<root>\n    <element name=\u201dButton\u201d>\n        <font>\n            <property name=\u201dfontSize\u201d type=\u201dfloat\u201d value=\u201d18\u2033 />\n            <property name=\u201dfontColor\u201d type=\u201dColorRGBA\u201d>\n                <r value=\u201d0.8\u2033 />\n                <g value=\u201d0.8\u2033 />\n                <b value=\u201d0.8\u2033 />\n                <a value=\u201d1.0\u2033 />\n            </property>\n            <property name=\u201dtextAlign\u201d type=\u201dString\u201d value=\u201dCenter\u201d />\n            <property name=\u201dtextVAlign\u201d type=\u201dString\u201d value=\u201dCenter\u201d />\n            <property name=\u201dtextWrap\u201d type=\u201dString\u201d value=\u201dClip\u201d />\n            <property name=\u201dhoverColor\u201d type=\u201dColorRGBA\u201d>\n                <r value=\u201d1.0\u2033 />\n                <g value=\u201d1.0\u2033 />\n                <b value=\u201d1.0\u2033 />\n                <a value=\u201d1.0\u2033 />\n            </property>\n            <property name=\u201dpressedColor\u201d type=\u201dColorRGBA\u201d>\n                <r value=\u201d0.6\u2033 />\n                <g value=\u201d0.6\u2033 />\n                <b value=\u201d0.6\u2033 />\n                <a value=\u201d1.0\u2033 />\n            </property>\n        </font>\n        <attributes>\n            <property name=\u201dresizeBorders\u201d type=\u201dVector4f\u201d>\n                <x value=\u201d5\u2033 />\n                <y value=\u201d5\u2033 />\n                <z value=\u201d5\u2033 />\n                <w value=\u201d5\u2033 />\n            </property>\n            <property name=\u201ddefaultSize\u201d type=\u201dVector2f\u201d>\n                <x value=\u201d100\u2033 />\n                <y value=\u201d30\u2033 />\n            </property>\n        </attributes>\n        <images>\n            <property name=\u201ddefaultImg\u201d type=\u201dString\u201d value=\u201dtonegod/gui/style/def/Button/button_x_u.png\u201d />\n            <property name=\u201dhoverImg\u201d type=\u201dString\u201d value=\u201dtonegod/gui/style/def/Button/button_x_h.png\u201d />\n            <property name=\u201dpressedImg\u201d type=\u201dString\u201d value=\u201dtonegod/gui/style/def/Button/button_x_d.png\u201d />\n        </images>\n        <effects>\n            <property name=\u201devent0\u2033 type=\u201dEffect\u201d>\n                <event value=\u201dHover\u201d />\n                <effect value=\u201dPulse\u201d />\n                <speed value=\u201d3\u2033 />\n            </property>\n            <property name=\u201devent1\u2033 type=\u201dEffect\u201d>\n                <event value=\u201dPress\u201d />\n                <effect value=\u201dImageSwap\u201d />\n                <speed value=\u201d0\u2033 />\n            </property>\n            <property name=\u201devent2\u2033 type=\u201dEffect\u201d>\n                <event value=\u201dLoseFocus\u201d />\n                <effect value=\u201dImageSwap\u201d />\n                <speed value=\u201d0\u2033 />\n            </property>\n        </effects>\n    </element>\n</root>\n")),Object(l.b)("p",null,"The Style XML file for any given control can contain as many element\ntags as you would like. Each becomes another style that can be retrieved\nvia:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'screen.getStyle("styleName");\n')),Object(l.b)("p",null,"Each element tag is divided into 4 sections:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"fonts")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"attributes")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"images")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"effects"))),Object(l.b)("p",null,"The first 3 are interchangeable and only there for organizational\npurposes."),Object(l.b)("p",null,"The 4th (effects) is more specific, as the effects are stored and\nretrieved via the EffectManage of the Screen."),Object(l.b)("p",null,"The tags for storing properties are fomatted as follows:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"If the data type has a single value, the value is stored in the\nsingle property tag:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-{.htmlblock}"}),'<property name="ID" type="float" value="0.5" />\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"If the data type has multiple value, the property tag would contain\ninner tags named after the value, like such:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-{.htmlblock}"}),'<property name="ID" type="Vector4f />\n    <x value="0.5 />\n    <y value="0.5 />\n    <z value="0.5 />\n    <w value="0.5 />\n</property>\n')),Object(l.b)("p",null,"Again, to retrieve this you would call:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'screen.getStyle("styleName").getVector4f("ID");\n')),Object(l.b)("h2",{id:"the-effects-tag"},"The \\'effects\\' Tag"),Object(l.b)("p",null,"To add a default effect to a control, you would add a property tag under\nthe \\'effects\\' tag, like so:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-{.htmlblock}"}),"<property name=\u201devent0\u2033 type=\u201dEffect\u201d>\n    <event value=\u201dHover\u201d />\n    <effect value=\u201dPulse\u201d />\n    <speed value=\u201d3\u2033 />\n</property>\n")),Object(l.b)("p",null,"Using Effects can be found HERE."),Object(l.b)("h2",{id:"style_mapxml"},"style","_","map.xml"),Object(l.b)("p",null,"The style","_","map.xml file consists of a list of all other XML documents\nthat contain style information for controls. All other XMLdocs could\nvery well could be a single XML document containing all styles, however,\nfor organization purposes, I read in as many from this list as you would\nlike to add."),Object(l.b)("p",null,"Each entry in the style","_","map.xml file are formatted as follows:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-{.htmlblock}"}),"<style control=\u201dCustomControl\u201d path=\u201dsomePath/MyNewControl.xml\u201d />\n")),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"The control= property is not enforced, it is their for you to keep track\nof what XML file is used for what control."))),Object(l.b)("h2",{id:"to-set-up-a-custom-global-look--feel-for-your-ui"},"To set up a custom global Look & Feel for your UI"),Object(l.b)("h3",{id:"step-1-copy-the-style_mapxml-file-to-a-local-directory-in-your-project-assets-folder"},"STEP 1: Copy the style","_","map.xml file to a local directory in your Project Assets folder."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-{.htmlblock}"}),'<?xml version="1.0" encoding="UTF-8"?>\n<root>\n    <cursors path="somePath/Cursors.xml" />\n    <audio path="somePath/Audio.xml" />\n    <style control="Font" path="somePath/Fonts.xml" />\n    <style control="Common" path="somePath/Common.xml" />\n    <style control="Scrolling" path="somePath/Scrolling.xml" />\n    <style control="Window" path="somePath/Window.xml" />\n    <style control="Button" path="somePath/Button.xml" />\n    <style control="Menu" path="somePath/Menu.xml" />\n    <style control="Label" path="somePath/Label.xml" />\n    <style control="Slider" path="somePath/Slider.xml" />\n    <style control="TextField" path="somePath/TextField.xml" />\n    <style control="ChatBox" path="somePath/ChatBox.xml" />\n    <style control="Indicator" path="somePath/Indicator.xml" />\n</root>\n')),Object(l.b)("h3",{id:"step-2-point-your-screen-class-to-the-new-style_mapxml-file"},"STEP 2: Point your Screen class to the new style","_","map.xml file."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'Screen screen = new Screen(this, "somePath/style_map.xml");\n')),Object(l.b)("p",null,"You can now copy the existing XML docs for each listed in the\nstyle","_","map.xml file and make the adjustments you would like as default\nstyles."),Object(l.b)("p",null,"::: {.important}\nDon't forget to update the path in the style","_","map.xml file to point to\nyour local copy for each control XML file you copy/edit.\n:::"))}i.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var a=n(0),o=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),i=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=i(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,y=u["".concat(r,".").concat(m)]||u[m]||b[m]||l;return n?o.a.createElement(y,c({ref:t},s,{components:n})):o.a.createElement(y,c({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<l;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
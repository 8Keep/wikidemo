(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),i=(a(0),a(441)),c={},l={id:"jme3/advanced/nifty_gui",title:"nifty_gui",description:"![nifty-gui-13.png](/images/jme3/advanced/nifty-gui-13.png)",source:"@site/docs/jme3/advanced/nifty_gui.md",permalink:"/wikidemo/docs/jme3/advanced/nifty_gui",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/advanced/nifty_gui.md"},b=[{value:"JME-Nifty Sample Code",id:"jme-nifty-sample-code",children:[]},{value:"External Documentation",id:"external-documentation",children:[]}],o={rightToc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/jme3/advanced/nifty-gui-13.png",alt:"nifty-gui-13.png"}))),Object(i.b)("p",null,"You may want your players to press a button to save a game, you want a\nscrolling text field for highscores, a text label to display the score,\ndrop-downs to select keymap preferences, or checkboxes to specify\nmulti-media options. Usually you solve these tasks by using Swing\ncontrols. Although it is possible to embed a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/swing_canvas"}),"jME3\ncanvas")," in a Swing GUI, a 3D game\ntypically runs full-screen, or in a window of its own."),Object(i.b)("p",null,"This document introduces you to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/nifty-gui/nifty-gui/"}),"Nifty\nGUI"),", a Java library for\nbuilding interactive graphical user interfaces (GUIs) for games or\nsimilar applications. Nifty GUI (the ",Object(i.b)("inlineCode",{parentName:"p"},"de.lessvoid.nifty")," package) is\nwell integrated with jME3 through the ",Object(i.b)("inlineCode",{parentName:"p"},"com.jme3.niftygui")," package. You\ndefine the base GUI layout in XML, and control it dynamically from your\nJava code. The necessary JAR libraries are included in your jME3\ndownload, you do not need to install anything extra. (Just make sure\nthey are on the classpath.)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://vimeo.com/25637085"}),"Video demo of Nifty GUI 1.3"))),Object(i.b)("h1",{id:"tutorial-overview"},"Tutorial Overview"),Object(i.b)("p",null,"Learn to add a Nifty GUI to your jME3 game by going through this\nmulti-part tutorial:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Understand the Nifty GUI Concepts described on this page.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/nifty_gui_best_practices"}),"Browse this short list of Best\nPractices"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Lay out your graphical user interface:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/nifty_gui_xml_layout"}),"Lay out the GUI in\nXML")," -- or --")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/nifty_gui_java_layout"}),"Lay out the GUI in\nJava"))))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Integrate the GUI into the game:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/nifty_gui_overlay"}),"Overlay the User Interface Over the\nScreen")," -- or --")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/nifty_gui_projection"}),"Project the User Interface Onto a\nTexture"))))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/nifty_gui_java_interaction"}),"Interact with the GUI from\nJava")))),Object(i.b)("h1",{id:"must-know-nifty-gui-concepts"},"Must Know: Nifty GUI Concepts"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/jme3/advanced/nifty-screen-layer-panel.png",alt:"nifty-screen-layer-panel.png"}))),Object(i.b)("p",null,"Nifty GUIs are made up of the following ",Object(i.b)("strong",{parentName:"p"},"elements"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A Nifty GUI contains one or more ",Object(i.b)("strong",{parentName:"p"},"screens"),"."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Only one screen is visible at a time.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Name the first screen ",Object(i.b)("inlineCode",{parentName:"p"},"start"),". Name any others whatever you\nlike.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Screen are ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/nifty_gui_java_interaction"}),"controlled by a Java Controller\nclass"),".")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A screen contains one or more ",Object(i.b)("strong",{parentName:"p"},"layers"),"."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Layers are containers that impose alignment on their contents\n(vertical, horizontal, or centered)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Layers can overlap (z-order), and cannot be nested.")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A layer contains ",Object(i.b)("strong",{parentName:"p"},"panels"),"."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Panels are containers that impose alignment on their contents\n(vertical, horizontal, or centered)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Panels can be nested, and cannot overlap.")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A panel contains ",Object(i.b)("strong",{parentName:"p"},"images, text, or controls (buttons, etc)"),"."))),Object(i.b)("h2",{id:"jme-nifty-sample-code"},"JME-Nifty Sample Code"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"XML examples"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-testdata/src/main/resources/Interface/Nifty/HelloJme"}),"HelloJme.xml")," -\nCan be found in\n",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"../../sdk/sample_code.xml#jme3testdata-assets#"}),"jme-testdata/Interface/Nifty"),"\nalso."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Java examples"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/niftygui/TestNiftyGui.java"}),"TestNiftyGui.java")," -\nCan be found in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../sdk/sample_code.xml#the-jme3tests-project-template#"}),"jme3\ntests"),"\nalso.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/niftygui/TestNiftyToMesh.java"}),"TestNiftyToMesh.java")," -\nCan be found in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../sdk/sample_code.xml#the-jme3tests-project-template#"}),"jme3\ntests"),"\nalso.")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"jME3-ready version of the Nifty GUI 1.3 demo (sample code, Java)"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://files.seapegasus.org/NiftyGuiDemo.zip"}),"NiftyGuiDemo.zip")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Find more sample code in the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/nifty-gui/nifty-gui/tree/1.4/nifty-examples/src/main/java/de/lessvoid/nifty/examples"}),"nifty-examples"),"\nrepositories."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/nifty-gui/nifty-gui/wiki/Examples"}),"Running The Nifty\nExamples"))))),Object(i.b)("h2",{id:"external-documentation"},"External Documentation"),Object(i.b)("p",null,"Learn more from the NiftyGUI page:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/nifty-gui/nifty-gui/raw/1.4/nifty-core/manual/nifty-gui-the-manual-1.3.2.pdf"}),"Nifty GUI - the\nManual"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/nifty-gui/nifty-gui/wiki"}),"Nifty GUI - Wiki"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://nifty-gui.sourceforge.net/projects/1.4.2/nifty/nifty/apidocs/index.html"}),"Nifty 1.4.2\nJavaDoc"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://nifty-gui.sourceforge.net/projects/1.4.2/nifty/nifty-default-controls/apidocs/index.html"}),"Nifty 1.4.2 Controls\nJavaDoc"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.jmonkeyengine.org/t/anyone-succeeded-in-changing-text-in-nifty-programatically/14424"}),"Forum post: Changing Text in Nifty GUIs\nprogrammatically")))),Object(i.b)("h1",{id:"nifty-logging-nifty-142"},"Nifty Logging (Nifty 1.4.2)"),Object(i.b)("p",null,"If you want to disable the nifty log lines, add this code after you\ncreated nifty:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'Logger.getLogger("de.lessvoid.nifty").setLevel(Level.SEVERE);\nLogger.getLogger("NiftyInputEventHandlingLog").setLevel(Level.SEVERE);\n')))}p.isMDXComponent=!0},441:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},m=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,j=m["".concat(c,".").concat(u)]||m[u]||s[u]||i;return a?r.a.createElement(j,l({ref:t},o,{components:a})):r.a.createElement(j,l({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<i;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);
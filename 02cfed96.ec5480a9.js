(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),i=(n(0),n(441)),l={},o={id:"jme3/setting_up_jme3_in_eclipse",title:"setting_up_jme3_in_eclipse",description:"For development with the jMonkeyEngine 3, we recommend to use the",source:"@site/docs/jme3/setting_up_jme3_in_eclipse.md",permalink:"/wikidemo/docs/jme3/setting_up_jme3_in_eclipse",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/setting_up_jme3_in_eclipse.md"},c=[],p={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"For development with the jMonkeyEngine 3, we recommend to use the\njMonkeyEngine SDK."),Object(i.b)("p",null,"Alternatively, you can use your favorite IDE: In this tutorial we show\nhow to download and set up the latest nightly build of the jMonkeyEngine\n3 for use with the Eclipse IDE. Instructions for ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../jme3/setting_up_netbeans_and_jme3"}),"NetBeans\nIDE")," are also available."),Object(i.b)("h1",{id:"downloading-jme3"},"Downloading jME3"),Object(i.b)("p",null,"The currently available JAR binaries are the nightly builds."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Download the most recent zipped build from\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/releases"}),"https://github.com/jMonkeyEngine/jmonkeyengine/releases"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Unzip the file and save it as ",Object(i.b)("inlineCode",{parentName:"p"},"jME3.2-stable")," in your home directory\n(\\$HOME). You should see the following files and directories:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"lib/")," -- The jMonkeyEngine binaries, and libraries used by the\njMonkeyEngine. (Don't remove)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"jMonkeyEngine3.jar")," -- Run this to see various feature demos.\n(optional)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"javadoc/")," -- jME3 API documentation. (optional)"))))),Object(i.b)("h1",{id:"creating-a-new-game-project"},"Creating a New Game Project"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In Eclipse, choose ",Object(i.b)("inlineCode",{parentName:"p"},"File New Java Project"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Project Name: ",Object(i.b)("inlineCode",{parentName:"p"},"HelloJME3"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click Finish"))),Object(i.b)("p",null,"The new project appears in the Explorer."),Object(i.b)("h1",{id:"setting-up-dependencies"},"Setting up Dependencies"),Object(i.b)("p",null,"Your project depends on the jMonkeyEngine libraries and needs to know\nwhere they are."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Right-click the project in the explorer and choose\n",Object(i.b)("inlineCode",{parentName:"p"},"Build Path Add External Archives"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'In the "JAR" selection dialog, browse to the ',Object(i.b)("inlineCode",{parentName:"p"},"$HOME/jME3.2-stable"),"\ndirectory.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select all JARs in the ",Object(i.b)("inlineCode",{parentName:"p"},"lib")," directory and click Open."))),Object(i.b)("p",null,"All necessary JAR libraries are now on the classpath and should appear\nin the Referenced Libraries list. For a detailed description of the\nseparate jar files see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../jme3/jme3_source_structure.xml#structure_of_jmonkeyengine3_jars"}),"this\nlist"),"."),Object(i.b)("h1",{id:"setting-up-assets"},"Setting up Assets"),Object(i.b)("p",null,"The easiest way to make sure the asset manager can access the assets is\nby adding the assets folder to the classpath."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Go to ",Object(i.b)("inlineCode",{parentName:"p"},"Project Properties"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select ",Object(i.b)("inlineCode",{parentName:"p"},"Java Build Path"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Under the ",Object(i.b)("inlineCode",{parentName:"p"},"Source")," tab click Add Folder")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Add your Assets folder"))),Object(i.b)("h1",{id:"writing-a-simple-application"},"Writing a Simple Application"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"From the menu call ",Object(i.b)("inlineCode",{parentName:"p"},"File New New Package"),". Name the src package for\nexample ",Object(i.b)("inlineCode",{parentName:"p"},"hello"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"From the menu call ",Object(i.b)("inlineCode",{parentName:"p"},"File New Class"),"."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Select package ",Object(i.b)("inlineCode",{parentName:"p"},"hello"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Name the class for example ",Object(i.b)("inlineCode",{parentName:"p"},"MyGame"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Superclass: ",Object(i.b)("inlineCode",{parentName:"p"},"com.jme3.app.SimpleApplication"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Make sure that the checkbox to ",Object(i.b)("inlineCode",{parentName:"p"},"Create the main() Method")," is\nactive.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Make sure that the checkbox to ",Object(i.b)("inlineCode",{parentName:"p"},"Inheriting Abstract Methods")," is\nactive.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click Finish."))))),Object(i.b)("p",null,"You can now continue to write ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../jme3/beginner/hello_simpleapplication"}),"your first jme3\napplication"),"!"))}b.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),j=a,u=s["".concat(l,".").concat(j)]||s[j]||m[j]||i;return n?r.a.createElement(u,o({ref:t},p,{components:n})):r.a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=j;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);
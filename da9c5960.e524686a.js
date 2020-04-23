(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{404:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),i=(n(0),n(441)),o={},l={id:"sdk/development/setup",title:"setup",description:"Note that the creation of a Module Suite is only necessary if you want",source:"@site/docs/sdk/development/setup.md",permalink:"/wikidemo/docs/sdk/development/setup",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/sdk/development/setup.md"},p=[{value:"Adding your plugin to the repository",id:"adding-your-plugin-to-the-repository",children:[]},{value:"Building wrapped library jar files on the server",id:"building-wrapped-library-jar-files-on-the-server",children:[]}],c={rightToc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Note that the creation of a Module Suite is only necessary if you want\nto upload your plugin to the contribution update center."),Object(i.b)("h1",{id:"using-jmonkeyengine-sdk-for-development"},"Using jMonkeyEngine SDK for development"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Install the "Netbeans Plugin Development and "NetBeans API\nDocumentation plugins via Tools\u2192Plugins')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Create a new "Module Suite project (can be any name, this will be\nyour local "collection of plugins that you create)')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If no platform is listed, add one by selecting the SDK application\nfolder"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'Mac users have to right-click the jmonkeyplatform application\nand select "show contents and then select the jmonkeyplatform\nfolder under Contents/Resources/'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Open the suite, right-click the "Modules folder and select "Add\nnew..')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'For "Project Name enter an all-lowercase name without spaces like\n',Object(i.b)("inlineCode",{parentName:"p"},"my-library"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Make sure the "Project Location is inside the module suite folder\nand press "Next')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Enter the base java package for your plugin in "Code Name Base like\n',Object(i.b)("inlineCode",{parentName:"p"},"com.mycompany.plugins.mylibrary"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Enter a "Module Display Name for your plugin like "My Library')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Press Finish")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'To use core SDK or jME3 functions, add "SDK Core and "SDK Engine via\n"Module Properties\u2192Library\u2192Add Dependency')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Write your plugin (e.g. ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../../sdk/development"}),"create a new\neditor")," or ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../../sdk/development/extension_library"}),"wrap a jar\nlibrary"),")"))),Object(i.b)("h1",{id:"jmonkeyengine-sdk-contributions-update-center"},"jMonkeyEngine SDK Contributions Update Center"),Object(i.b)("p",null,'If you want your plugin to appear in the "jMonkeyEngine SDK\nContributions Update Center so users can download, install and update it\neasily via the plugin manager, you can host your plugin in the\ncontributions update center svn repository. The contributions update\ncenter is based on a googlecode project for contributed plugins which\nwill be automatically compiled, version-labeled and added to the\ncontributions update center like the core jMonkeyEngine SDK plugins.'),Object(i.b)("p",null,"Effectively its one large module suite with multiple modules which each\nrepresent one plugin, extension library."),Object(i.b)("h2",{id:"adding-your-plugin-to-the-repository"},"Adding your plugin to the repository"),Object(i.b)("p",null,"To add your plugin to the repository, do the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Make sure the plugin is part of a "Module Suite and that its located\nin the folder of the suite (this saves you from problems with the\nsvn and local version not being configured the same)')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'In "Module Properties\u2192Sources'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'Set the "Source Level to 1.5 if possible (jMonkeyEngine SDK is\ncompatible to Java 1.5)'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'In "Module Properties\u2192API Versioning'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Set a specification version for your plugin (like 0.8.1)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Set the "implementation version to "0 and select "append\nimplementation versions automatically')))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'In "Module Properties\u2192Display'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Enter a purposeful description of your plugin and one of the\nfollowing categories:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'For a library plugin: "jME3 - Library')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'For a SDK plugin: "jME3 - SDK Plugin')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'For a model loader plugin: "jME3 - Loader')))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'In "Module Properties\u2192Build\u2192Packaging'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add your name")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add a link to your forum post / home page relating to the plugin")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add a license, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"../license-jme.txt")," to insert the\ndefault jME BSD license or use a text file you store in the\nproject folder")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Ask the managers or developers for access to the gc project")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Commit ",Object(i.b)("strong",{parentName:"p"},"only the module project")," to trunk:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Right click the Module Project and select "Versioning \u2192 Import\ninto Subversion Repository')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Enter\n",Object(i.b)("inlineCode",{parentName:"p"},"https://jmonkeyplatform-contributions.googlecode.com/svn/trunk"),"\nin the URL field")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Enter your googlecode username and commit password (different\nthan login pass, you can find your password\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://code.google.com/hosting/settings"}),"here"),'!) and press\n"Next')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Check that the "Repository Folder is ',Object(i.b)("inlineCode",{parentName:"p"},"trunk/mypluginfolder")," and\nenter an import message")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Press "Finish'))))),Object(i.b)("p",null,"And thats it, from now on each time you commit changes to your module it\nwill be built and added to the contributions center automatically and\nthe version number will be extended by the svn revision number (e.g.\n0.8.1.1234)"),Object(i.b)("h2",{id:"building-wrapped-library-jar-files-on-the-server"},"Building wrapped library jar files on the server"),Object(i.b)("p",null,"You can just build your library locally and update and commit the jar\nfile and javadoc/sources zip files to the ",Object(i.b)("inlineCode",{parentName:"p"},"release/libs")," folder of your\nplugin in the contrib repo. The users plugins will automatically be\nupdated with the new jar files. You can however also build the library\nproject on the server."),Object(i.b)("p",null,'As normally only the module project is being built on the server, any\nprojects that create the actual jar files for library plugins ("normal\nprojects from the SDK/NetBeans) have to be built from the module build\nfile. To do that simply add the following ant targets to the module\nbuild file (adapt to your project file and folder names):'),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-{.xml}"}),'<target name="init" depends="basic-init,files-init,build-init,-javac-init,-build-subproject"/>\n<target name="-build-subproject">\n    <ant dir="./AI" inheritall="false" inheritrefs="false" target="clean"/>\n    <ant dir="./AI" inheritall="false" inheritrefs="false" target="jar"/>\n    <ant dir="./AI" inheritall="false" inheritrefs="false" target="javadoc"/>\n    <zip basedir="./AI/dist/javadoc" file="release/libs/jME3-ai-javadoc.zip"/>\n    <zip basedir="./AI/src" file="release/libs/jME3-ai-sources.zip"/>\n    <copy file="./AI/dist/jME3-ai.jar" todir="release/libs"/>\n</target>\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note that for the module version number to increase automatically on a\ncommit to the library project, the library project has to be a subfolder\nof the main module project.")))}b.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||s[d]||i;return n?a.a.createElement(m,l({ref:t},c,{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{412:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(1),r=a(9),i=(a(0),a(441)),o={},l={id:"jme3/beginner/what_s_an_ide",title:"what_s_an_ide",description:"-   IDE stands for Integrated Development Environment. It's a software",source:"@site/docs/jme3/beginner/what_s_an_ide.md",permalink:"/wikidemo/docs/jme3/beginner/what_s_an_ide",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/beginner/what_s_an_ide.md"},c=[],p={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"IDE stands for Integrated Development Environment. It's a software\ntool for developers.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"NetBeans IDE, Eclipse, IntelliJ are examples of development\nenvironments (=IDEs) for developers who are writing Java\napplications.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Java is a programming language."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\"Java Beans is just a funny way of naming a certain type of data\nobject that you can write in Java.\\\n(Java = coffee... coffee beans, get it? No, developers aren't\nvery funny.)\\\n",Object(i.b)("em",{parentName:"li"},"Java Beans have nothing to do with this topic or NetBeans!")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"jMonkeyEngine is a game engine written in Java. You use it by\nputting a JAR library on the class path, and calling its API from\nyour Java code.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The jMonkeyEngine ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../sdk"}),"SDK")," (Software Development Kit) is\na customized NetBeans IDE that has special tools that help you\ndevelop 3D Java games."))),Object(i.b)("p",null,"::: {.important}\nThe writing of the game (the actual game development) is still up to\nyou, the person using these tools. There is an expectation that you, the\nperson using these tools, already know how to program in Java.\n:::"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/sdk/jme3-jmonkeyplatform.png",alt:"jme3-jmonkeyplatform.png"}))),Object(i.b)("h1",{id:"the-past-a-world-without-ides"},"The Past: A World Without IDEs"),Object(i.b)("p",null,"Let's say you have no IDE. The typical stuff that you need for game\ndevelopment is:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'Install the Java SDK ("JDK 6) from Sun/Oracle.'),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The JDK includes essential development tools, such as the Java\ncompiler (",Object(i.b)("inlineCode",{parentName:"li"},"javac"),") and Java runtime (",Object(i.b)("inlineCode",{parentName:"li"},"java"),")."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install the jMonkeyEngine JAR libraries."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"These libraries include the special classes that you need for\ngame development.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"As with all Java applications, you put JAR libraries on the\nclasspath. (",Object(i.b)("inlineCode",{parentName:"p"},"java -cp \u201cbla.jar;foo.jar myapp"),"...)")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Get a text editor to write .java and .xml files.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Get a 3D model editor to preview 3D models and arrange them in\nscenes.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create Java project:"),Object(i.b)("p",{parentName:"li"},"a.  create directories for Java packages,"),Object(i.b)("p",{parentName:"li"},"b.  create more directories for textures and sound files and 3D\nmodels,"),Object(i.b)("p",{parentName:"li"},"c.  write an Ant build script,"),Object(i.b)("p",{parentName:"li"},"d.  move JAR files around and check the classpath...")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Write code:"),Object(i.b)("p",{parentName:"li"},"a.  write code in text editor,"),Object(i.b)("p",{parentName:"li"},"b.  look up javadoc in the web browser,"),Object(i.b)("p",{parentName:"li"},"c.  compile and then run code in the terminal,"),Object(i.b)("p",{parentName:"li"},"d.  when you get error output in the terminal, go find the file and\nline back in text editor...")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Repeat."))),Object(i.b)("p",null,"Basically, you switch back and forth between terminal, 3D model editor,\nweb browser, and text editor a lot. You have to repeat lots of manual\nfine-tuning for every new file and project."),Object(i.b)("p",null,"Some people got annoyed by these maintenance tasks, and that's why they\ninvented the IDE."),Object(i.b)("h1",{id:"the-present-the-world-with-ides"},"The Present: The world with IDEs"),Object(i.b)("p",null,"An IDE is a source code editor that developers use to write applications\nand manage projects. It replaces the text editor -- and all the\nswitching between browser and terminal and text editors. The essential\nword here is ",Object(i.b)("strong",{parentName:"p"},"integrated"),": An IDE integrates all development tools\n(listed above) in one window."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'There are New Project and New File menu items that create\ndirectories and packages. It creates a professional Ant script. It\nmanages the classpath for you. These formerly manual tasks are\nalways the same for you -- now they are automated in the "Project\nwindow.')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'The "Editor window lets you edit Java and XML files. (more details\nbelow)')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'You can drag and drop commonly used code snippets from a "Palette\nwindow into your Java files.')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'A "Navigator window gives you a quick overview of long Java classes,\nand lets you jump to methods and fields.')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The Build button starts the JDK6 compiler (",Object(i.b)("inlineCode",{parentName:"p"},"ant")," and ",Object(i.b)("inlineCode",{parentName:"p"},"javac"),"), the\nClean button runs ",Object(i.b)("inlineCode",{parentName:"p"},"ant clean"),", the Run button runs the application\n(",Object(i.b)("inlineCode",{parentName:"p"},"ant run")," and ",Object(i.b)("inlineCode",{parentName:"p"},"java"),") -- all these tasks are now once-click actions\nin a toolbar or context menu.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'After building and running, the IDE opens the "Application window.\nThis window is what end-users of your applications will see. Here\nyou can test your gameplay.'))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"The Editor")," is the heart of the IDE, and it has tons of great\nadditional capabilties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The IDE tries to compile in the background what you write in the\nEditor. If you made a horrible, but obvious, mistake (forgot\nsemicolon, mixed up data types, made a typo in a method call...) it\ntells you so immediately through warning colors and icons. This is\ncalled syntactic and semantic code highlighting."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'You still get Terminal output for errors and warnings (in the\n"Output window inside the IDE), but this way you erradicate tiny\ntypos and compiletime errors immediately, and you can focus on\nserious runtime errors in the Output window.'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The number of commands in the Java API is limited. So while you type\na method or class name, there is only a limited number of things it\ncan be. If you temporarily forgot what a method was called, the\nEditor pops up a list of options (plus javadoc comments), and you\ncan simply select it.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Similarly, every class and method only has a limited number of\narguments. Again, the IDE pops up a list of expected arguments, so\nyou don't need to search for them in the javadoc."))),Object(i.b)("h1",{id:"your-future-a-world-with-jmonkeyengine-sdk"},"Your Future: A World With jMonkeyEngine SDK"),Object(i.b)("p",null,"The jMonkeyEngine SDK is the same as NetBeans IDE, plus"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The New Project Wizards automatically adds the jMonkeyEngine\nlibraries on the classpath and creates a build script.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The javadoc popup dispalys Standard Java and jMonkeyEngine APIs in\nthe editor.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The Palette contains special code snippets from the jMonkeyEngine\nAPI for loading and saving 3D objects, input handling, nodes,\nlights, materials, rotation constants, etc.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The Projects, SceneComposer, and SceneExplorer windows let you\nconvert, preview, and arrange 3D models before you load them in your\nJava code.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"And more..."))),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/sdk/jmonkeyplatform-docu-1.png",alt:"jmonkeyplatform-docu-1.png"}))),Object(i.b)("p",null,"You see how such a unique IDE can speed up your development process\ndrastically, it's worth giving it a try!"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.youtube.com/watch?v=cTErYjsJ_Yk"}),"Video: jMonkeyEngine3 -\nIntro"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../sdk/comic"}),"jMonkeyEngine SDK - the Comic")))))}s.isMDXComponent=!0},441:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(a),u=n,d=b["".concat(o,".").concat(u)]||b[u]||m[u]||i;return a?r.a.createElement(d,l({ref:t},p,{components:a})):r.a.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);
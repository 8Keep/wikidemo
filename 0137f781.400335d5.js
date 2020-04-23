(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(1),r=t(9),o=(t(0),t(441)),i={},l={id:"jme3/simpleapplication_from_the_commandline",title:"simpleapplication_from_the_commandline",description:"Although we recommend the jMonkeyEngine [SDK](../sdk) for developing",source:"@site/docs/jme3/simpleapplication_from_the_commandline.md",permalink:"/wikidemo/docs/jme3/simpleapplication_from_the_commandline",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/simpleapplication_from_the_commandline.md"},c=[{value:"Sample Code",id:"sample-code",children:[]}],m={rightToc:c};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Although we recommend the jMonkeyEngine ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../sdk"}),"SDK")," for developing\nJME3 games, you can use any IDE (integrated development environment)\nsuch as ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../jme3/setting_up_netbeans_and_jme3"}),"NetBeans")," or\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../jme3/setting_up_jme3_in_eclipse"}),"Eclipse"),', and even work freely\nfrom the command-line. Here is a generic IDE-independent "getting\nstarted" tutorial.'),Object(o.b)("h1",{id:"installing-the-jme3-framework"},"Installing the JME3 Framework"),Object(o.b)("p",null,"There are many ways to install the JME framework from the command-line,\nbut for this tutorial we will narrow it down to two, the easy way and\nthe hard way."),Object(o.b)("h1",{id:"installing-with-git-easy-way"},"Installing with Git (easy way)"),Object(o.b)("p",null,"You can build JME3 from the sources. (Recommended for JME3 developers.)\nThis example expects ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.github.com/articles/set-up-git/"}),"Git"),"\nto be installed on your system."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"mkdir jme3\ncd jme3\n\n// if you have a rsa key configured\ngit clone git@github.com:jMonkeyEngine/jmonkeyengine.git\n// or\n// if you don't, but you'll be asked for credential after the next command\ngit clone https://github.com/jMonkeyEngine/jmonkeyengine.git\n//can take a while\n\n// build the engine and install it in your local maven repo.\n./gradlew install\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"What is an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/"}),"RSA\nkey"),"?"))),Object(o.b)("p",null,"The install command will install the built jars into your local maven\nrepositories org.jmonkeyengine folder, which on Linux is ","~","/.m2, and on\nWindows might be in AppData, or in your home directory."),Object(o.b)("p",null,"To use the engine in a game project, you can use\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.jmonkeyengine.org/t/bootmonkey-bootstrap-your-jme-project/37141"}),"BootMonkey"),"\nor clone a template project from GitHub."),Object(o.b)("p",null,"To use the template, first create a folder for your project:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"cd ..\nmkdir HelloJME3\ncd HelloJME3\n")),Object(o.b)("p",null,"Next, clone one of these templates:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Simsilica/Examples/tree/master/simple-jme"}),"Simsilica/Examples"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Nehon/base-jme"}),"Nehon/base-jme")))),Object(o.b)("p",null,"After cloning, open the ",Object(o.b)("inlineCode",{parentName:"p"},"build.gradle")," file and uncomment the\n",Object(o.b)("inlineCode",{parentName:"p"},"mavenLocal()")," repository, change the version variable, and uncomment\nany dependencies you will need:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'repositories {\n    //This is where jme3 dependencies are stored.\n    jcenter()\n\n    //Uncomment this if you install local dependencies.\n    mavenLocal()\n\n    //Uncomment this if you use external dependencies\n    //mavenCentral()\n\n    //Uncomment this if you use jme3-niftygui\n    //maven{url \'http://nifty-gui.sourceforge.net/nifty-maven-repo\'}\n\n}\n\next.jmeVersion = "[3.2,)"\n\n...\n\ndependencies {\n\n    compile "org.jmonkeyengine:jme3-core:$jmeVersion"\n    compile "org.jmonkeyengine:jme3-desktop:$jmeVersion"\n    compile "org.jmonkeyengine:jme3-lwjgl:$jmeVersion"\n\n    //Those are jme3 additional library uncomment the ones you need\n    //compile "org.jmonkeyengine:jme3-android-native:$jmeVersion"\n    //compile "org.jmonkeyengine:jme3-android:$jmeVersion"\n    //compile "org.jmonkeyengine:jme3-bullet-native-android:$jmeVersion"\n    //compile "org.jmonkeyengine:jme3-blender:$jmeVersion"\n    //compile "org.jmonkeyengine:jme3-bullet-native:$jmeVersion"\n    //compile "org.jmonkeyengine:jme3-bullet:$jmeVersion"\n    //compile "org.jmonkeyengine:jme3-effects:$jmeVersion"\n    //compile "org.jmonkeyengine:jme3-jogg:$jmeVersion"\n    //compile "org.jmonkeyengine:jme3-jogl:$jmeVersion"\n    //compile "org.jmonkeyengine:jme3-lwjgl3:$jmeVersion"\n    //compile "org.jmonkeyengine:jme3-networking:$jmeVersion"\n    //compile "org.jmonkeyengine:jme3-plugins:$jmeVersion"\n    //compile "org.jmonkeyengine:jme3-terrain:$jmeVersion"\n\n    //You need to uncomment nifty repository in the repositories section if you use this dependency\n    //compile "org.jmonkeyengine:jme3-niftygui:$jmeVersion"\n\n    runtime project(\':assets\')\n}\n...\n')),Object(o.b)("p",null,"For a detailed description of the separate jar files see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../jme3/jme3_source_structure.xml#structure_of_jmonkeyengine3_jars"}),"this\nlist"),"."),Object(o.b)("p",null,"That's it, you're done. After the clone, you will have a project that\ncontains a source package with a default blue cube JME3 app and a\nsubproject that has the proper asset directory structure for your\nassets."),Object(o.b)("p",null,"Build and run your project and you should see a blue cube."),Object(o.b)("h1",{id:"manual-download-hard-way"},"Manual Download (hard way)"),Object(o.b)("p",null,"This example shows how to set up and run a simple application\n(HelloJME3) that depends on the jMonkeyEngine3 libraries."),Object(o.b)("p",null,"The directory structure will look as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"jme3/\njme3/lib\njme3/src\n...\nHelloJME3/\nHelloJME3/lib\nHelloJME3/assets\nHelloJME3/src\n...\n")),Object(o.b)("p",null,"To install the development version of jme3, download the latest ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/releases"}),"stable\nrelease"),", unzip\nthe folder into a directory named ",Object(o.b)("inlineCode",{parentName:"p"},"jme3"),". The filenames here are just an\nexample, but they will always be something like ",Object(o.b)("inlineCode",{parentName:"p"},"jME3.x-stable"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"mkdir jme3\ncd jme3\nunzip jME3.2-stable.zip\ncd ..\n")),Object(o.b)("h1",{id:"sample-project-directory-structure"},"Sample Project Directory Structure"),Object(o.b)("p",null,"First we set up the directory and source package structure for your game\nproject. Note that the game project directory ",Object(o.b)("inlineCode",{parentName:"p"},"HelloJME3")," is on the same\nlevel as your ",Object(o.b)("inlineCode",{parentName:"p"},"jme3")," folder. In this example, we create a Java package\nthat we call ",Object(o.b)("inlineCode",{parentName:"p"},"mygame")," in the source directory."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"mkdir HelloJME3\nmkdir HelloJME3/src\nmkdir HelloJME3/src/mygame\n")),Object(o.b)("h1",{id:"libraries"},"Libraries"),Object(o.b)("p",null,"Next you copy the necessary JAR libraries from the download to your\nproject. You only have to do this set of steps once every time you\ndownload a new JME3 build. For a detailed description of the separate\njar files see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../jme3/jme3_source_structure.xml#structure_of_jmonkeyengine3_jars"}),"this\nlist"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"mkdir HelloJME3/build\nmkdir HelloJME3/lib\ncp jme3/lib/*.* HelloJME3/lib\n")),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("p",null,"To test your setup, create the file\n",Object(o.b)("inlineCode",{parentName:"p"},"HelloJME3/src/mygame/HelloJME3.java")," with any text editor, paste the\nfollowing sample code, and save."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'package mygame;\n\nimport com.jme3.app.SimpleApplication;\nimport com.jme3.material.Material;\nimport com.jme3.math.Vector3f;\nimport com.jme3.scene.Geometry;\nimport com.jme3.scene.shape.Box;\nimport com.jme3.math.ColorRGBA;\n\npublic class HelloJME3 extends SimpleApplication {\n\n    public static void main(String[] args){\n        HelloJME3 app = new HelloJME3();\n        app.start();\n    }\n\n    @Override\n    public void simpleInitApp() {\n        Box b = new Box(Vector3f.ZERO, 1, 1, 1);\n        Geometry geom = new Geometry("Box", b);\n        Material mat = new Material(assetManager,\n          "Common/MatDefs/Misc/Unshaded.j3md");\n        mat.setColor("Color", ColorRGBA.Blue);\n        geom.setMaterial(mat);\n        rootNode.attachChild(geom);\n    }\n}\n')),Object(o.b)("h1",{id:"build-and-run"},"Build and Run"),Object(o.b)("p",null,"We build the sample application into the build directory..."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'cd HelloJME3\njavac -d build -cp "lib/eventbus.jar:lib/j-ogg-all.jar:lib/jme3-lwjgl.jar:lib/jme3-bullet.jar:lib/jinput.jar:lib/lwjgl.jar:lib/stack-alloc.jar:lib/vecmath.jar:lib/xpp3.jar:lib/jme3-blender.jar:lib/jme3-core.jar:lib/jme3-desktop.jar:lib/jme3-jogg.jar:lib/jme3-plugins.jar:lib/jme3-terrain.jar:lib/jme3-testdata.jar:lib/jme3-niftygui.jar:lib/nifty-default-controls.jar:lib/nifty-examples.jar:lib/nifty-style-black.jar:lib/nifty.jar:." src/mygame/HelloJME3.java\n')),Object(o.b)("p",null,"... and run it."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'cd build\njava -cp "../lib/eventbus.jar:../lib/j-ogg-all.jar:../lib/jme3-lwjgl.jar:../lib/jme3-bullet.jar:../lib/jinput.jar:../lib/lwjgl.jar:../lib/stack-alloc.jar:../lib/vecmath.jar:../lib/xpp3.jar:../lib/jme3-blender.jar:../lib/jme3-core.jar:../lib/jme3-desktop.jar:../lib/jme3-jogg.jar:../lib/jme3-plugins.jar:../lib/jme3-terrain.jar:../lib/jme3-testdata.jar:../lib/jme3-niftygui.jar:../lib/nifty-default-controls.jar:../lib/nifty-examples.jar:../lib/nifty-style-black.jar:../lib/nifty.jar:." mygame/HelloJME3\n')),Object(o.b)("p",null,"::: {.note}\nIf you use Windows, the classpath separator is ","\\"," instead of /.\n:::"),Object(o.b)("p",null,"If a settings dialog pops up, confirm the default settings. You should\nnow see a simple window with a 3-D cube. Use the mouse and the WASD keys\nto move. It works!"),Object(o.b)("h1",{id:"recommended-asset-directory-structure"},"Recommended Asset Directory Structure"),Object(o.b)("p",null,"For ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../jme3/intermediate/multi-media_asset_pipeline"}),"multi-media files, models, and other\nassets"),", we\nrecommend creating the following project structure:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"cd HelloJME3\nmkdir assets\nmkdir assets/Interface\nmkdir assets/Materials\nmkdir assets/MatDefs\nmkdir assets/Models\nmkdir assets/Scenes\nmkdir assets/Shaders\nmkdir assets/Sounds\nmkdir assets/Textures\n")),Object(o.b)("p",null,"This directory structure will allow\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../jme3/intermediate/simpleapplication"}),"SimpleApplication"),"\\'s\ndefault ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../jme3/advanced/asset_manager"}),"AssetManager")," to load media\nfiles from your ",Object(o.b)("inlineCode",{parentName:"p"},"assets")," directory, like in this example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'import com.jme3.scene.Spatial;\n...\n  Spatial elephant = assetManager.loadModel("Models/Elephant/Elephant.meshxml");\n  rootNode.attachChild(elephant);\n...\n')),Object(o.b)("p",null,"You will learn more about the asset manager and how to customize it\nlater. For now feel free to structure your assets (images, textures,\nmodels) into further sub-directories, like in this example the\n",Object(o.b)("inlineCode",{parentName:"p"},"assets/models/Elephant")," directory that contains the ",Object(o.b)("inlineCode",{parentName:"p"},"elephant.mesh.xml"),"\nmodel and its materials."),Object(o.b)("h1",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"Now follow the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../jme3"}),"tutorials")," and write your first\njMonkeyEngine game."))}s.isMDXComponent=!0},441:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=r.a.createContext({}),s=function(e){var n=r.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},p=function(e){var n=s(e.components);return r.a.createElement(m.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},j=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(t),j=a,d=p["".concat(i,".").concat(j)]||p[j]||b[j]||o;return t?r.a.createElement(d,l({ref:n},m,{components:t})):r.a.createElement(d,l({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=j;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=t[m];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"}}]);
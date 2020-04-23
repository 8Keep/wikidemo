(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{350:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(1),o=n(9),r=(n(0),n(441)),i={},l={id:"jme3/beginner/hello_main_event_loop",title:"hello_main_event_loop",description:"Previous: [Hello Assets](../../jme3/beginner/hello_asset), Next:",source:"@site/docs/jme3/beginner/hello_main_event_loop.md",permalink:"/wikidemo/docs/jme3/beginner/hello_main_event_loop",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/beginner/hello_main_event_loop.md",sidebar:"main",previous:{title:"hello_asset",permalink:"/wikidemo/docs/jme3/beginner/hello_asset"},next:{title:"hello_input_system",permalink:"/wikidemo/docs/jme3/beginner/hello_input_system"}},p=[],c={rightToc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Previous: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../../jme3/beginner/hello_asset"}),"Hello Assets"),", Next:\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../../jme3/beginner/hello_input_system"}),"Hello Input System")),Object(r.b)("p",null,"Now that you know how to load assets, such as 3D models, you want to\nimplement some gameplay that uses these assets. In this tutorial we look\nat the update loop. The update loop of your game is where the action\nhappens."),Object(r.b)("h1",{id:"code-sample"},"Code Sample"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'package jme3test.helloworld;\n\nimport com.jme3.app.SimpleApplication;\nimport com.jme3.material.Material;\nimport com.jme3.math.ColorRGBA;\nimport com.jme3.scene.Geometry;\nimport com.jme3.scene.shape.Box;\n\n/** Sample 4 - how to trigger repeating actions from the main event loop.\n * In this example, you use the loop to make the player character\n * rotate continuously. */\npublic class HelloLoop extends SimpleApplication {\n\n    public static void main(String[] args){\n        HelloLoop app = new HelloLoop();\n        app.start();\n    }\n\n    protected Geometry player;\n\n    @Override\n    public void simpleInitApp() {\n        /** this blue box is our player character */\n        Box b = new Box(1, 1, 1);\n        player = new Geometry("blue cube", b);\n        Material mat = new Material(assetManager,\n          "Common/MatDefs/Misc/Unshaded.j3md");\n        mat.setColor("Color", ColorRGBA.Blue);\n        player.setMaterial(mat);\n        rootNode.attachChild(player);\n    }\n\n    /* Use the main event loop to trigger repeating actions. */\n    @Override\n    public void simpleUpdate(float tpf) {\n        // make the player rotate:\n        player.rotate(0, 2*tpf, 0);\n    }\n}\n')),Object(r.b)("p",null,"Build and run the file: You see a constantly rotating cube."),Object(r.b)("h1",{id:"understanding-the-code"},"Understanding the Code"),Object(r.b)("p",null,"Compared to our previous code samples you note that the player Geometry\nis now a class field. This is because we want the update loop to be able\nto access and transform this Geometry. As usual, we initialize the\nplayer object in the ",Object(r.b)("inlineCode",{parentName:"p"},"simpleInitApp()")," method."),Object(r.b)("p",null,"Now have a closer look at the ",Object(r.b)("inlineCode",{parentName:"p"},"simpleUpdate()")," method -- this is the\nupdate loop."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"player.rotate(0, 2*tpf, 0);")," line changes the rotation of the\nplayer object.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"We use the ",Object(r.b)("inlineCode",{parentName:"p"},"tpf"),' variable ("time per frame") to time this action\ndepending on the current frames per second rate. This simply means\nthat the cube rotates with the same speed on fast and slow machines,\nand the game remains playable.')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"When the game runs, the rotate() code is executed again and again."))),Object(r.b)("h1",{id:"using-the-update-loop"},"Using the Update Loop"),Object(r.b)("p",null,"A rotating object is just a simple example. In the update loop, you\ntypically have many tests and trigger various game actions. This is\nwhere you update score and health points, check for collisions, make\nenemies calculate their next move, roll the dice whether a trap has been\nset off, play random ambient sounds, and much more."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"simpleUpdate()")," method starts running after the\n",Object(r.b)("inlineCode",{parentName:"p"},"simpleInitApp()")," method has initialized the scene graph and state\nvariables.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"JME3 executes everything in the ",Object(r.b)("inlineCode",{parentName:"p"},"simpleUpdate()")," method repeatedly,\nas fast as possible."),Object(r.b)("p",{parentName:"li"},"a.  Use the loop to poll the game state and then initiate actions."),Object(r.b)("p",{parentName:"li"},"b.  Use the loop to trigger reactions and update the game state."),Object(r.b)("p",{parentName:"li"},"c.  Use the loop wisely, because having too many calls in the loop\nalso slows down the game."))),Object(r.b)("h1",{id:"init---update---render"},"Init - Update - Render"),Object(r.b)("p",null,"Note the the three phases of every game:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Init:")," The ",Object(r.b)("inlineCode",{parentName:"p"},"simpleInitApp()")," method is executed only ",Object(r.b)("em",{parentName:"p"},"once"),",\nright at the beginning;")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Update:")," The ",Object(r.b)("inlineCode",{parentName:"p"},"simpleUpdate()")," method runs ",Object(r.b)("em",{parentName:"p"},"repeatedly"),", during\nthe game.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Render:")," After every update, the jMonkeyEngine ",Object(r.b)("em",{parentName:"p"},"automatically"),"\nredraws (",Object(r.b)("inlineCode",{parentName:"p"},"renders"),") the screen for you."))),Object(r.b)("p",null,"Since rendering is automatic, initialization and updating are the two\nmost important concepts in a SimpleApplication-based game for you:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"simpleInitApp()"),' method is the application\'s "first breath".'),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Here you load and create game data (once)."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"simpleUpdate()"),' method is the application\'s "heartbeat" (the\ntime unit is called ',Object(r.b)("inlineCode",{parentName:"p"},"ticks"),").\\\nHere you change their properties to update the game state\n(repeatedly)."))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Everything in a game happens either during initialization, or during the\nupdate loop. This means that these two methods grow very long over time.\nFollwo these two strategies to spread out init and update code over\nseveral modular Java classes:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Move code blocks from the simpleInitApp() method to\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../../jme3/advanced/application_states"}),"AppStates"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Move code blocks from the simpleUpdate() method to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../../jme3/advanced/custom_controls"}),"Custom\nControls"),"."))),Object(r.b)("p",{parentName:"div"},"Keep this in mind for later when your application grows."))),Object(r.b)("h1",{id:"exercises"},"Exercises"),Object(r.b)("p",null,"Here are some fun things to try:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"What happens if you give the rotate() method negative numbers?")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Can you create two Geometries next to each other, and make one\nrotate twice as fast as the other? (use the ",Object(r.b)("inlineCode",{parentName:"p"},"tpf")," variable)")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Can you make a cube that pulsates? (grows and shrinks)")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Can you make a cube that changes color? (change and set the\nMaterial)")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Can you make a rolling cube? (rotate around the x axis, and\ntranslate along the z axis)"))),Object(r.b)("p",null,"Look back at the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../../jme3/beginner/hello_node"}),"Hello Node"),"\ntutorial if you do not remember the transformation methods for scaling,\ntranslating, and rotating."),Object(r.b)("p",null,"::: {.important}\nLink to user-proposed solutions: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../../jme3/beginner/solutions"}),"Some proposed\nsolutions"),"\\\nBe sure to try to solve them for yourself first!\n:::"),Object(r.b)("h1",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,'Now you are listening to the update loop, the "heartbeat" of the game,\nand you can add all kinds of action to it.'),Object(r.b)("p",null,"The next thing the game needs is some ",Object(r.b)("em",{parentName:"p"},"inter"),"action! Continue learning\nhow to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../../jme3/beginner/hello_input_system"}),"respond to user\ninput"),"."),Object(r.b)("p",null,"See also:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Advanced jME3 developers use ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"../../jme3/advanced/application_states"}),"Application\nStates")," and ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"../../jme3/advanced/custom_controls"}),"Custom\nControls")," to implement game\nmechanics in their update loops. You will come across these topics\nagain later when you proceed to more advanced documentation.")))}s.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,u=b["".concat(i,".").concat(d)]||b[d]||m[d]||r;return n?o.a.createElement(u,l({ref:t},c,{components:n})):o.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
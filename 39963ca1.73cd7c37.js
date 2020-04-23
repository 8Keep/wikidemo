(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{214:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(1),i=t(9),r=(t(0),t(441)),o={},s={id:"jme3/advanced/input_handling",title:"input_handling",description:"Users interact with your jME3 application with different input devices",source:"@site/docs/jme3/advanced/input_handling.md",permalink:"/wikidemo/docs/jme3/advanced/input_handling",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/advanced/input_handling.md"},l=[{value:"ActionListener",id:"actionlistener",children:[]},{value:"AnalogListener",id:"analoglistener",children:[]},{value:"ActionListener",id:"actionlistener-1",children:[]},{value:"AnalogListener",id:"analoglistener-1",children:[]}],c={rightToc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Users interact with your jME3 application with different input devices\n-- the mouse, the keyboard, or a joystick. To respond to inputs we use\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"inputManager")," object in ",Object(r.b)("inlineCode",{parentName:"p"},"SimpleApplication"),"."),Object(r.b)("p",null,"This is how you add interaction to your game:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"For each action, choose the trigger(s) (a key or mouse click etc)")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"For each action, add a trigger mapping to the inputManager")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create at least one listener in SimpleApplication")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"For each action, register its mappings to a listener")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Implement each action in the listener"))),Object(r.b)("h1",{id:"code-samples"},"Code Samples"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/input/TestControls.java"}),"TestControls.java"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/input/TestJoystick.java"}),"TestJoystick.java")))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("h1",Object(a.a)({parentName:"li"},{id:"choose-trigger"}),"Choose Trigger"))),Object(r.b)("p",null,"Choose one or several key/mouse events for the interaction. We use\n",Object(r.b)("inlineCode",{parentName:"p"},"KeyTrigger"),", ",Object(r.b)("inlineCode",{parentName:"p"},"MouseAxisTrigger"),", ",Object(r.b)("inlineCode",{parentName:"p"},"MouseButtonTrigger"),", ",Object(r.b)("inlineCode",{parentName:"p"},"JoyAxisTrigger"),"\nand ",Object(r.b)("inlineCode",{parentName:"p"},"JoyButtonTrigger")," constants from the ",Object(r.b)("inlineCode",{parentName:"p"},"com.jme3.input.controls"),"\npackage."),Object(r.b)("p",null,"::: {.note}\nThe MouseAxis and JoyAxis triggers go along the X axis (right/left) or Y\naxis (up/down). These Triggers come with extra booleans for the negative\nhalf of the axis (left, down). Remember to write code that listens to\nthe negative (true) and positive (false) axis!\n:::"),Object(r.b)("p",null,"+-----------------------------------+-----------------------------------+\n| Trigger                           | Code                              |\n+===================================+===================================+\n| Mouse button: Left Click          | MouseButto                        |\n|                                   | nTrigger(MouseInput.BUTTON","_","LEFT) |\n+-----------------------------------+-----------------------------------+\n| Mouse button: Right Click         | MouseButton                       |\n|                                   | Trigger(MouseInput.BUTTON","_","RIGHT) |\n+-----------------------------------+-----------------------------------+\n| Mouse button: Middle Click        | MouseButtonT                      |\n|                                   | rigger(MouseInput.BUTTON","_","MIDDLE) |\n+-----------------------------------+-----------------------------------+\n| Mouse movement: Right             | Mou                               |\n|                                   | seAxisTrigger(MouseInput.AXIS","_","X, |\n|                                   | true)                             |\n+-----------------------------------+-----------------------------------+\n| Mouse movement: Left              | Mou                               |\n|                                   | seAxisTrigger(MouseInput.AXIS","_","X, |\n|                                   | false)                            |\n+-----------------------------------+-----------------------------------+\n| Mouse movement: Up                | Mou                               |\n|                                   | seAxisTrigger(MouseInput.AXIS","_","Y, |\n|                                   | true)                             |\n+-----------------------------------+-----------------------------------+\n| Mouse movement: Down              | Mou                               |\n|                                   | seAxisTrigger(MouseInput.AXIS","_","Y, |\n|                                   | false)                            |\n+-----------------------------------+-----------------------------------+\n| Mouse wheel: Up                   | MouseAxisTrig                     |\n|                                   | ger(MouseInput.AXIS","_","WHEEL,false) |\n+-----------------------------------+-----------------------------------+\n| Mouse wheel: Down                 | MouseAxisTri                      |\n|                                   | gger(MouseInput.AXIS","_","WHEEL,true) |\n+-----------------------------------+-----------------------------------+\n| NumPad: 1, 2, 3, ...              | KeyTrigger(KeyInput.KEY","_","NUMPAD1) |\n|                                   | ...                               |\n+-----------------------------------+-----------------------------------+\n| Keyboard: 1, 2 , 3, ...           | KeyTrigger(KeyInput.KEY","_","1) ...   |\n+-----------------------------------+-----------------------------------+\n| Keyboard: A, B, C, ...            | KeyTrigger(KeyInput.KEY","_","A) ...   |\n+-----------------------------------+-----------------------------------+\n| Keyboard: Spacebar                | KeyTrigger(KeyInput.KEY","_","SPACE)   |\n+-----------------------------------+-----------------------------------+\n| Keyboard: Shift                   | K                                 |\n|                                   | eyTrigger(KeyInput.KEY","_","RSHIFT),\\ |\n|                                   | KeyTrigger(KeyInput.KEY","_","LSHIFT)  |\n+-----------------------------------+-----------------------------------+\n| Keyboard: F1, F2, ...             | KeyTrigger(KeyInput.KEY","_","F1) ...  |\n+-----------------------------------+-----------------------------------+\n| Keyboard: Return, Enter           | K                                 |\n|                                   | eyTrigger(KeyInput.KEY","_","RETURN),\\ |\n|                                   | KeyT                              |\n|                                   | rigger(KeyInput.KEY","_","NUMPADENTER) |\n+-----------------------------------+-----------------------------------+\n| Keyboard: PageUp, PageDown        | KeyTrigger(KeyInput.KEY","_","PGUP),\\  |\n|                                   | KeyTrigger(KeyInput.KEY","_","PGDN)    |\n+-----------------------------------+-----------------------------------+\n| Keyboard: Delete, Backspace       | KeyTrigger(KeyInput.KEY","_","BACK),\\  |\n|                                   | KeyTrigger(KeyInput.KEY","_","DELETE)  |\n+-----------------------------------+-----------------------------------+\n| Keyboard: Escape                  | KeyTrigger(KeyInput.KEY","_","ESCAPE)  |\n+-----------------------------------+-----------------------------------+\n| Keyboard: Arrows                  | KeyTrigger(KeyInput.KEY","_","DOWN),\\  |\n|                                   | KeyTrigger(KeyInput.KEY","_","UP)\\     |\n|                                   | KeyTrigger(KeyInput.KEY","_","LEFT),   |\n|                                   | KeyTrigger(KeyInput.KEY","_","RIGHT)   |\n+-----------------------------------+-----------------------------------+\n| Joystick Button:                  | JoyButtonTrigger(0,               |\n|                                   | JoyInput.AXIS","_","POV","_","X),\\          |\n|                                   | JoyButtonTrigger(0,               |\n|                                   | JoyInput.AXIS","_","POV","_","Y) ?          |\n+-----------------------------------+-----------------------------------+\n| Joystick Movement: Right          | JoyAxisTrigger(0,                 |\n|                                   | JoyInput.AXIS","_","POV","_","X, true)      |\n+-----------------------------------+-----------------------------------+\n| Joystick Movement: Left           | JoyAxisTrigger(0,                 |\n|                                   | JoyInput.AXIS","_","POV","_","X, false)     |\n+-----------------------------------+-----------------------------------+\n| Joystick Movement: Forward        | JoyAxisTrigger(0,                 |\n|                                   | JoyInput.AXIS","_","POV","_","Z, true)      |\n+-----------------------------------+-----------------------------------+\n| Joystick Movement: Backward       | JoyAxisTrigger(0,                 |\n|                                   | JoyInput.AXIS","_","POV","_","Z, false)     |\n+-----------------------------------+-----------------------------------+"),Object(r.b)("p",null,"In your IDE, use code completion to quickly look up Trigger literals. In\nthe jMonkeyEngine SDK for example, press ctrl-space or ctrl-/ after\n",Object(r.b)("inlineCode",{parentName:"p"},"KeyInput.|")," to choose from the list of all keys."),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},Object(r.b)("h1",Object(a.a)({parentName:"li"},{id:"remove-default-trigger-mappings"}),"Remove Default Trigger Mappings"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"inputManager.deleteMapping( SimpleApplication.INPUT_MAPPING_MEMORY );\n")))),Object(r.b)("p",null,"+----------------------+----------------------+-----------------------+\n| Default Mapping      | Key                  | Description           |\n+======================+======================+=======================+\n| INPUT","_","              | F5                   | Hides the statistics  |\n| MAPPING","_","HIDE","_","STATS |                      | in the bottom left.   |\n+----------------------+----------------------+-----------------------+\n| INPUT","_","              | KEY","_","C               | Prints debug output   |\n| MAPPING","_","CAMERA","_","POS |                      | about the camera.     |\n+----------------------+----------------------+-----------------------+\n| IN                   | KEY","_","M               | Prints debug output   |\n| PUT","_","MAPPING","_","MEMORY |                      | for memory usage.     |\n+----------------------+----------------------+-----------------------+\n| INPUT","_","MAPPING","_","EXIT | KEY","_","ESCAPE          | Closes the            |\n|                      |                      | application by        |\n|                      |                      | calling ",Object(r.b)("inlineCode",{parentName:"p"},"stop();"),".    |\n|                      |                      | Typically you do not  |\n|                      |                      | remove this, unless   |\n|                      |                      | you replace it by     |\n|                      |                      | another way of        |\n|                      |                      | quitting gracefully.  |\n+----------------------+----------------------+-----------------------+"),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},Object(r.b)("h1",Object(a.a)({parentName:"li"},{id:"add-custom-trigger-mapping"}),"Add Custom Trigger Mapping"))),Object(r.b)("p",null,"When initializing the application, add a Mapping for each Trigger."),Object(r.b)("p",null,"Give the mapping a meaningful name. The name should reflect the action,\nnot the button/key (because buttons/keys can change). Here some\nexamples:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'inputManager.addMapping("Pause Game", new KeyTrigger(KeyInput.KEY_P));\ninputManager.addMapping("Rotate",     new KeyTrigger(KeyInput.KEY_SPACE));\n...\n')),Object(r.b)("p",null,"There are cases where you may want to provide more then one trigger for\none action. For example, some users prefer the WASD keys to navigate,\nwhile others prefer the arrow keys. Add several triggers for one\nmapping, by separating the Trigger objects with commas:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'inputManager.addMapping("Left",  new KeyTrigger(KeyInput.KEY_A),\n                                 new KeyTrigger(KeyInput.KEY_LEFT)); // A and left arrow\ninputManager.addMapping("Right", new KeyTrigger(KeyInput.KEY_D),\n                                 new KeyTrigger(KeyInput.KEY_RIGHT)); // D and right arrow\n                                 ...\n')),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},Object(r.b)("h1",Object(a.a)({parentName:"li"},{id:"create-listeners"}),"Create Listeners"))),Object(r.b)("p",null,"The jME3 input manager supports two types of event listeners for inputs:\nAnalogListener and ActionListener. You can use one or both listeners in\nthe same application. Add one or both of the following code snippets to\nyour main SimpleApplication-based class to activate the listeners."),Object(r.b)("p",null,"::: {.note}\nThe two input listeners do not know, and do not care, which actual key\nwas pressed. They only know which ",Object(r.b)("em",{parentName:"p"},"named input mapping")," was triggered.\n:::"),Object(r.b)("h2",{id:"actionlistener"},"ActionListener"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"com.jme3.input.controls.ActionListener")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'Use for absolute "button pressed or released?, "on or off? actions.'),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Examples: Pause/unpause, a rifle or revolver shot, jump, click\nto select."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"JME gives you access to:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The mapping name of the triggered action.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"A boolean whether the trigger is still pressed or has just been\nreleased.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"A float of the current time-per-frame as timing factor"))))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"private ActionListener actionListener = new ActionListener() {\n  public void onAction(String name, boolean keyPressed, float tpf) {\n     /** TODO: test for mapping names and implement actions */\n  }\n};\n")),Object(r.b)("h2",{id:"analoglistener"},"AnalogListener"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"com.jme3.input.controls.AnalogListener")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Use for continuous and gradual actions."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Examples: Walk, run, rotate, accelerate vehicle, strafe,\n(semi-)automatic weapon shot"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"JME gives you access to:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The mapping name of the triggered action.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"A gradual float value between how long the trigger has been\npressed.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"A float of the current time-per-frame as timing factor"))))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"private AnalogListener analogListener = new AnalogListener() {\n  public void onAnalog(String name, float keyPressed, float tpf) {\n     /** TODO: test for mapping names and implement actions */\n  }\n};\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},Object(r.b)("h1",Object(a.a)({parentName:"li"},{id:"register-mappings-to-listeners"}),"Register Mappings to Listeners"))),Object(r.b)("p",null,"To activate the mappings, you must register them to a Listener. Write\nyour registration code after the code block where you have added the\nmappings to the inputManager."),Object(r.b)("p",null,'In the following example, you register the "Pause Game mapping to the\n',Object(r.b)("inlineCode",{parentName:"p"},"actionListener"),' object, because pausing a game is in "either/or\ndecision.'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'inputManager.addListener(actionListener, new String[]{"Pause Game"});\n')),Object(r.b)("p",null,"In the following example, you register navigational mappings to the\n",Object(r.b)("inlineCode",{parentName:"p"},"analogListener"),' object, because walking is a continuous action. Players\ntypically keep the key pressed to express continuity, for example when\nthey want to "walk on or "accelerate.'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'inputManager.addListener(analogListener, new String[]{"Left", "Right"});\n')),Object(r.b)("p",null,"As you see, you can add several listeners in one String array. You can\ncall the addListener() method more than once, each time with a subset of\nyour list, if that helps you keep you code tidy. Again, the Listeners do\nnot care about actual which keys are configured, you only register named\ntrigger mappings."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Did you register an action, but it does not work? Check the string's\ncapitalization and spelling, it's case sensitive!"))),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},Object(r.b)("h1",Object(a.a)({parentName:"li"},{id:"implement-actions-in-listeners"}),"Implement Actions in Listeners"))),Object(r.b)("p",null,"You specify the action to be triggered where it says TODO in the\nListener code snippets. Typically, you write a series of if/else\nconditions, testing for all the mapping names, and then calling the\nrespective action."),Object(r.b)("p",null,"Make use of the distinction between ",Object(r.b)("inlineCode",{parentName:"p"},"if")," and ",Object(r.b)("inlineCode",{parentName:"p"},"else if")," in this\nconditional."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If several actions can be triggered simultaneously, test for all of\nthese with a series of bare ","`","if","`","s. For example, a character can be\nrunning forward ",Object(r.b)("em",{parentName:"p"},"and")," to the left.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If certain actions exclude one another, test for them with\n",Object(r.b)("inlineCode",{parentName:"p"},"else if"),", the the rest of the exclusive tests can be skipped and\nyou save some miliseconds. For example, you either shoot or pick\nsomething up."))),Object(r.b)("h2",{id:"actionlistener-1"},"ActionListener"),Object(r.b)("p",null,"In the most common case, you want an action to be triggered once, in the\nmoment when the button or key trigger is released. For example, when the\nplayer presses a key to open a door, or clicks to pick up an item. For\nthese cases, use an ActionListener and test for ",Object(r.b)("inlineCode",{parentName:"p"},"&& !keyPressed"),", like\nshown in the following example."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'private ActionListener actionListener = new ActionListener() {\n    public void onAction(String name, boolean keyPressed, float tpf) {\n\n      if (name.equals("Pause Game") && !keyPressed) { // test?\n        isRunning = !isRunning;                       // action!\n      }\n\n      if ...\n\n    }\n  };\n')),Object(r.b)("h2",{id:"analoglistener-1"},"AnalogListener"),Object(r.b)("p",null,"The following example shows how you define actions with an\nAnalogListener. These actions are triggered continuously, as long\n(intensity ",Object(r.b)("inlineCode",{parentName:"p"},"value"),") as the named key or mouse button is down. Use this\nlisteners for semi-automatic weapons and navigational actions."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'private AnalogListener analogListener = new AnalogListener() {\n    public void onAnalog(String name, float value, float tpf) {\n\n      if (name.equals("Rotate")) {         // test?\n        player.rotate(0, value*speed, 0);  // action!\n      }\n\n      if ...\n\n    }\n  };\n')),Object(r.b)("h1",{id:"let-users-remap-keys"},"Let Users Remap Keys"),Object(r.b)("p",null,'It is likely that your players have different keyboard layouts, are used\nto "reversed mouse navigation, or prefer different navigational keys\nthan the ones that you defined. You should create an options screen that\nlets users customize their mouse/key triggers for your mappings. Replace\nthe trigger literals in the ',Object(r.b)("inlineCode",{parentName:"p"},"inputManager.addMapping()")," lines with\nvariables, and load sets of triggers when the game starts."),Object(r.b)("p",null,"The abstraction of separating triggers and mappings has the advantage\nthat you can remap triggers easily. Your code only needs to remove and\nadd some trigger mappings. The core of the code (the listeners and\nactions) remains unchanged."),Object(r.b)("h1",{id:"detecting-joystick-connection-states"},"Detecting Joystick Connection States"),Object(r.b)("p",null,"For information regarding the connection state of a joystick see\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../../jme3/beginner/hello_input_system.xml#listening-for-joystick-connections"}),"Listening for Joystick\nConnections"),"."))}p.isMDXComponent=!0},441:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s({},n,{},e)),t},b=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},g=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(t),g=a,m=b["".concat(o,".").concat(g)]||b[g]||u[g]||r;return t?i.a.createElement(m,s({ref:n},c,{components:t})):i.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);
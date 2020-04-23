(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{311:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return c}));var a=t(1),i=t(9),o=(t(0),t(441)),r={},l={id:"jme3/beginner/hello_input_system",title:"hello_input_system",description:"Previous: [Hello Update",source:"@site/docs/jme3/beginner/hello_input_system.md",permalink:"/wikidemo/docs/jme3/beginner/hello_input_system",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/beginner/hello_input_system.md",sidebar:"main",previous:{title:"hello_main_event_loop",permalink:"/wikidemo/docs/jme3/beginner/hello_main_event_loop"},next:{title:"hello_material",permalink:"/wikidemo/docs/jme3/beginner/hello_material"}},s=[],p={rightToc:s};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Previous: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../jme3/beginner/hello_main_event_loop"}),"Hello Update\nLoop"),", Next: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../jme3/beginner/hello_material"}),"Hello\nMaterial")),Object(o.b)("p",null,"By default, SimpleApplication sets up a camera control that allows you\nto steer the camera with the W A S D keys, the arrow keys, and the\nmouse. You can use it as a flying first-person camera right away. But\nwhat if you need a third-person camera, or you want keys to trigger\nspecial game actions?"),Object(o.b)("p",null,"Every game has its custom keybindings, and this tutorial explains how\nyou define them. We first define the key presses and mouse events, and\nthen we define the actions they should trigger."),Object(o.b)("h1",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'package jme3test.helloworld;\n\nimport com.jme3.app.SimpleApplication;\nimport com.jme3.material.Material;\nimport com.jme3.math.Vector3f;\nimport com.jme3.scene.Geometry;\nimport com.jme3.scene.shape.Box;\nimport com.jme3.math.ColorRGBA;\nimport com.jme3.input.KeyInput;\nimport com.jme3.input.MouseInput;\nimport com.jme3.input.controls.ActionListener;\nimport com.jme3.input.controls.AnalogListener;\nimport com.jme3.input.controls.KeyTrigger;\nimport com.jme3.input.controls.MouseButtonTrigger;\n\n/**\n * Sample 5 - how to map keys and mousebuttons to actions\n */\npublic class HelloInput extends SimpleApplication {\n\n    public static void main(String[] args) {\n        HelloInput app = new HelloInput();\n        app.start();\n    }\n\n    protected Geometry player;\n    private boolean isRunning = true;\n\n    @Override\n    public void simpleInitApp() {\n        Box b = new Box(1, 1, 1);\n        player = new Geometry("Player", b);\n        Material mat = new Material(assetManager, "Common/MatDefs/Misc/Unshaded.j3md");\n        mat.setColor("Color", ColorRGBA.Blue);\n        player.setMaterial(mat);\n        rootNode.attachChild(player);\n        initKeys(); // load my custom keybinding\n    }\n\n    /**\n     * Custom Keybinding: Map named actions to inputs.\n     */\n    private void initKeys() {\n        // You can map one or several inputs to one named action\n        inputManager.addMapping("Pause",  new KeyTrigger(KeyInput.KEY_P));\n        inputManager.addMapping("Left",   new KeyTrigger(KeyInput.KEY_J));\n        inputManager.addMapping("Right",  new KeyTrigger(KeyInput.KEY_K));\n        inputManager.addMapping("Rotate", new KeyTrigger(KeyInput.KEY_SPACE),\n                                          new MouseButtonTrigger(MouseInput.BUTTON_LEFT));\n        // Add the names to the action listener.\n        inputManager.addListener(actionListener, "Pause");\n        inputManager.addListener(analogListener, "Left", "Right", "Rotate");\n\n    }\n\n    private final ActionListener actionListener = new ActionListener() {\n        @Override\n        public void onAction(String name, boolean keyPressed, float tpf) {\n            if (name.equals("Pause") && !keyPressed) {\n                isRunning = !isRunning;\n            }\n        }\n    };\n\n    private final AnalogListener analogListener = new AnalogListener() {\n        @Override\n        public void onAnalog(String name, float value, float tpf) {\n            if (isRunning) {\n                if (name.equals("Rotate")) {\n                    player.rotate(0, value * speed, 0);\n                }\n                if (name.equals("Right")) {\n                    Vector3f v = player.getLocalTranslation();\n                    player.setLocalTranslation(v.x + value * speed, v.y, v.z);\n                }\n                if (name.equals("Left")) {\n                    Vector3f v = player.getLocalTranslation();\n                    player.setLocalTranslation(v.x - value * speed, v.y, v.z);\n                }\n            } else {\n                System.out.println("Press P to unpause.");\n            }\n        }\n    };\n}\n')),Object(o.b)("p",null,"Build and run the example."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Press the Spacebar or click to rotate the cube.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Press the J and K keys to move the cube.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Press P to pause and unpause the game. While paused, the game should\nnot respond to any input, other than P."))),Object(o.b)("h1",{id:"defining-mappings-and-triggers"},"Defining Mappings and Triggers"),Object(o.b)("p",null,"First you register each mapping name with its trigger(s). Remember the\nfollowing:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"An input trigger can be a key press or mouse action."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"For example a mouse movement, a mouse click, or pressing the\nletter P ."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The mapping name is a string that you can choose."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'The name should describe the action (e.g. "Rotate"), and not the\ntrigger. Because the trigger can change.'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"One named mapping can have several triggers."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'For example, the "Rotate" action can be triggered by a click and\nby pressing the spacebar.')))),Object(o.b)("p",null,"Have a look at the code:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'You register the mapping named "Rotate" to the Spacebar key\ntrigger.\\\n',Object(o.b)("inlineCode",{parentName:"p"},"new KeyTrigger(KeyInput.KEY_SPACE)"),").")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'In the same line, you also register "Rotate" to an alternative mouse\nclick trigger.\\\n',Object(o.b)("inlineCode",{parentName:"p"},"new MouseButtonTrigger(MouseInput.BUTTON_LEFT)"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You map the ",Object(o.b)("inlineCode",{parentName:"p"},"Pause"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Left"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Right")," mappings to the P, J, K keys,\nrespectively."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'    // You can map one or several inputs to one named action\n    inputManager.addMapping("Pause",  new KeyTrigger(KeyInput.KEY_P));\n    inputManager.addMapping("Left",   new KeyTrigger(KeyInput.KEY_J));\n    inputManager.addMapping("Right",  new KeyTrigger(KeyInput.KEY_K));\n    inputManager.addMapping("Rotate", new KeyTrigger(KeyInput.KEY_SPACE),\n                                      new MouseButtonTrigger(MouseInput.BUTTON_LEFT));\n')))),Object(o.b)("p",null,"Now you need to register your trigger mappings."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'You register the pause action to the ActionListener, because it is\nan "on/off" action.')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You register the movement actions to the AnalogListener, because\nthey are gradual actions."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'    // Add the names to the action listener.\n    inputManager.addListener(actionListener,"Pause");\n    inputManager.addListener(analogListener,"Left", "Right", "Rotate");\n')))),Object(o.b)("p",null,"This code goes into the ",Object(o.b)("inlineCode",{parentName:"p"},"simpleInitApp()")," method. But since we will\nlikely add many keybindings, we extract these lines and wrap them in an\nauxiliary method, ",Object(o.b)("inlineCode",{parentName:"p"},"initKeys()"),". The ",Object(o.b)("inlineCode",{parentName:"p"},"initKeys()")," method is not part of\nthe Input Controls interface -- you can name it whatever you like. Just\ndon't forget to call your method from the ",Object(o.b)("inlineCode",{parentName:"p"},"initSimpleApp()")," method."),Object(o.b)("h1",{id:"implementing-the-actions"},"Implementing the Actions"),Object(o.b)("p",null,"You have mapped action names to input triggers. Now you specify the\nactions themselves."),Object(o.b)("p",null,"The two important methods here are the ",Object(o.b)("inlineCode",{parentName:"p"},"ActionListener")," with its\n",Object(o.b)("inlineCode",{parentName:"p"},"onAction()")," method, and the ",Object(o.b)("inlineCode",{parentName:"p"},"AnalogListener")," with its ",Object(o.b)("inlineCode",{parentName:"p"},"onAnalog()"),"\nmethod. In these two methods, you test for each named mapping, and call\nthe game action you want to trigger."),Object(o.b)("p",null,"In this example, we trigger the following actions:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("em",{parentName:"p"},"Rotate")," mapping triggers the action\n",Object(o.b)("inlineCode",{parentName:"p"},"player.rotate(0, value, 0)"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("em",{parentName:"p"},"Left")," and ",Object(o.b)("em",{parentName:"p"},"Right")," mappings increase and decrease the player's x\ncoordinate.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("em",{parentName:"p"},"Pause")," mapping flips a boolean ",Object(o.b)("inlineCode",{parentName:"p"},"isRunning"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"We also want to check the boolean ",Object(o.b)("inlineCode",{parentName:"p"},"isRunning")," before any action\n(other than unpausing) is executed."))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'    private final ActionListener actionListener = new ActionListener() {\n        @Override\n        public void onAction(String name, boolean keyPressed, float tpf) {\n            if (name.equals("Pause") && !keyPressed) {\n                isRunning = !isRunning;\n            }\n        }\n    };\n\n    private final AnalogListener analogListener = new AnalogListener() {\n        @Override\n        public void onAnalog(String name, float value, float tpf) {\n            if (isRunning) {\n                if (name.equals("Rotate")) {\n                    player.rotate(0, value * speed, 0);\n                }\n                if (name.equals("Right")) {\n                    Vector3f v = player.getLocalTranslation();\n                    player.setLocalTranslation(v.x + value * speed, v.y, v.z);\n                }\n                if (name.equals("Left")) {\n                    Vector3f v = player.getLocalTranslation();\n                    player.setLocalTranslation(v.x - value * speed, v.y, v.z);\n                }\n            } else {\n                System.out.println("Press P to unpause.");\n            }\n        }\n    };\n')),Object(o.b)("p",null,"You can also combine both listeners into one, the engine will send the\nappropriate events to each method (onAction or onAnalog)."),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'private class MyCombinedListener implements AnalogListener, ActionListener {\n\n    @Override\n    public void onAction(String name, boolean keyPressed, float tpf) {\n        if (name.equals("Pause") && !keyPressed) {\n            isRunning = !isRunning;\n        }\n    }\n\n    @Override\n    public void onAnalog(String name, float value, float tpf) {\n        if (isRunning) {\n            if (name.equals("Rotate")) {\n                player.rotate(0, value * speed, 0);\n            }\n            if (name.equals("Right")) {\n                Vector3f v = player.getLocalTranslation();\n                player.setLocalTranslation(v.x + value * speed, v.y, v.z);\n            }\n            if (name.equals("Left")) {\n                Vector3f v = player.getLocalTranslation();\n                player.setLocalTranslation(v.x - value * speed, v.y, v.z);\n            }\n        } else {\n            System.out.println("Press P to unpause.");\n        }\n    }\n}\n// ...\ninputManager.addListener(combinedListener, new String[]{"Pause", "Left", "Right", "Rotate"});\n')),Object(o.b)("p",null,"It's okay to use only one of the two Listeners, and not implement the\nother one, if you are not using this type of interaction. In the\nfollowing, we have a closer look how to decide which of the two\nlisteners is best suited for which situation."),Object(o.b)("h1",{id:"analog-pressed-or-released"},"Analog, Pressed, or Released?"),Object(o.b)("p",null,'Technically, every input can be either an "analog" or a "digital"\naction. Here is how you find out which listener is the right one for\nwhich type of input.'),Object(o.b)("p",null,"Mappings registered to the ",Object(o.b)("strong",{parentName:"p"},"AnalogListener")," are triggered repeatedly\nand gradually."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Parameters:"),Object(o.b)("p",{parentName:"li"},"a.  JME gives you access to the name of the triggered action."),Object(o.b)("p",{parentName:"li"},"b.  JME gives you access to a gradual value showing the strength of\nthat input. In the case of a keypress that will be the tpf value\nfor which it was pressed since the last frame. For other inputs\nsuch as a joystick which give analogue control though then the\nvalue will also indicate the strength of the input premultiplied\nby tpf. For an example on this go to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../jme3/beginner/hello_input_system/timekeypressed"}),"jMonkeyEngine 3\nTutorial (5) - Hello Input System - Variation over time key is\npressed")))),Object(o.b)("p",null,"In order to see the total time that a key has been pressed for then the\nincoming value can be accumulated. The analogue listener may also need\nto be combined with an action listener so that you are notified when the\nkey is released."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Example: Navigational events (e.g. Left, Right, Rotate, Run,\nStrafe), situations where you interact continuously.")),Object(o.b)("p",null,"Mappings registered to the ",Object(o.b)("strong",{parentName:"p"},"ActionListener"),' are digital either-or\nactions -- "Pressed" or "Peleased"? "On" or "Off"?'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Parameters:"),Object(o.b)("p",{parentName:"li"},"a.  JME gives you access to the name of the triggered action."),Object(o.b)("p",{parentName:"li"},"b.  JME gives you access to a boolean whether the key is pressed or\nnot.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Example: Pause button, shooting, selecting, jumping, one-time click\ninteractions."))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"It's very common that you want an action to be only triggered once, in\nthe moment when the key is ",Object(o.b)("em",{parentName:"p"},"released"),". For instance when opening a door,\nflipping a boolean state, or picking up an item. To achieve that, you\nuse an ",Object(o.b)("inlineCode",{parentName:"p"},"ActionListener")," and test for ",Object(o.b)("inlineCode",{parentName:"p"},"\u2026 && !keyPressed"),". For an example,\nlook at the Pause button code:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'      if (name.equals("Pause") && !keyPressed) {\n        isRunning = !isRunning;\n      }\n')))),Object(o.b)("h1",{id:"table-of-triggers"},"Table of Triggers"),Object(o.b)("p",null,"You can find the list of input constants in the files\n",Object(o.b)("inlineCode",{parentName:"p"},"src/core/com/jme3/input/KeyInput.java"),", ",Object(o.b)("inlineCode",{parentName:"p"},"JoyInput.java"),", and\n",Object(o.b)("inlineCode",{parentName:"p"},"MouseInput.java"),". Here is an overview of the most common triggers\nconstants:"),Object(o.b)("p",null,"+-----------------------------------+-----------------------------------+\n| Trigger                           | Code                              |\n+===================================+===================================+\n| Mouse button: Left Click          | MouseButto                        |\n|                                   | nTrigger(MouseInput.BUTTON","_","LEFT) |\n+-----------------------------------+-----------------------------------+\n| Mouse button: Right Click         | MouseButton                       |\n|                                   | Trigger(MouseInput.BUTTON","_","RIGHT) |\n+-----------------------------------+-----------------------------------+\n| Keyboard: Characters and Numbers  | KeyTrigger(KeyInput.KEY","_","X)       |\n+-----------------------------------+-----------------------------------+\n| Keyboard: Spacebar                | KeyTrigger(KeyInput.KEY","_","SPACE)   |\n+-----------------------------------+-----------------------------------+\n| Keyboard: Return, Enter           | K                                 |\n|                                   | eyTrigger(KeyInput.KEY","_","RETURN),\\ |\n|                                   | KeyT                              |\n|                                   | rigger(KeyInput.KEY","_","NUMPADENTER) |\n+-----------------------------------+-----------------------------------+\n| Keyboard: Escape                  | KeyTrigger(KeyInput.KEY","_","ESCAPE)  |\n+-----------------------------------+-----------------------------------+\n| Keyboard: Arrows                  | KeyTrigger(KeyInput.KEY","_","UP),\\    |\n|                                   | KeyTrigger(KeyInput.KEY","_","DOWN)\\   |\n|                                   | KeyTrigger(KeyInput.KEY","_","LEFT),\\  |\n|                                   | KeyTrigger(KeyInput.KEY","_","RIGHT)   |\n+-----------------------------------+-----------------------------------+"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you don't recall an input constant during development, you benefit\nfrom an IDE's code completion functionality: Place the caret after e.g.\n",Object(o.b)("inlineCode",{parentName:"p"},"KeyInput.|")," and trigger code completion to select possible input\nidentifiers."))),Object(o.b)("h1",{id:"listening-for-joystick-connections"},"Listening For Joystick Connections"),Object(o.b)("p",null,"Note: Joystick Connection/Disconnection events are only available in\n",Object(o.b)("strong",{parentName:"p"},"LWJGL3"),"."),Object(o.b)("p",null,"If your game requires handling the addition and removal of new joystick\ndevices you can subscribe to a joystick connection listener. This will\ngive you the opportunity to enable joystick movement, pause the game if\nthe joystick is disconnected, change keybindings to mouse/keyboard."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'inputManager.addJoystickConnectionListener(new JoystickConnectionListener() {\n            @Override\n            public void onConnected(Joystick joystick) {\n                System.out.println("Joystick connected: " + joystick.getName());\n            }\n\n            @Override\n            public void onDisconnected(Joystick joystick) {\n                System.out.println("Joystick Disconnected: " + joystick.getName());\n            }\n        });\n')),Object(o.b)("h1",{id:"exercises"},"Exercises"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add mappings for moving the player (box) up and down with the H and\nL keys!")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Switch off the flyCam and override the WASD keys."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Tip: Use\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"../../jme3/faq.xml#how-do-i-switch-between-third-person-and-first-person-view"}),"flyCam.setEnabled(false);")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Modify the mappings so that you can also trigger the up an down\nmotion with the mouse scroll wheel!"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Tip: Use ",Object(o.b)("inlineCode",{parentName:"li"},"new MouseAxisTrigger(MouseInput.AXIS_WHEEL, true)")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In which situation would it be better to use variables instead of\nliterals for the MouseInput/KeyInput definitions?"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-{=html}"}),"\x3c!-- --\x3e\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'int usersPauseKey = KeyInput.KEY_P;\n...\ninputManager.addMapping("Pause",  new KeyTrigger(usersPauseKey));\n')),Object(o.b)("p",null,"::: {.important}\nLink to user-proposed solutions: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../jme3/beginner/solutions"}),"Some proposed\nsolutions"),"\\\nBe sure to try to solve them for yourself first!\n:::"),Object(o.b)("h1",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,'You are now able to add custom interactions to your game: You know that\nyou first have to define the key mappings, and then the actions for each\nmapping. You have learned to respond to mouse events and to the\nkeyboard. You understand the difference between "analog" (gradually\nrepeated) and "digital" (on/off) inputs.'),Object(o.b)("p",null,"Now you can already write a little interactive game! But wouldn't it be\ncooler if these old boxes were a bit more fancy? Let's continue with\nlearning about ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../jme3/beginner/hello_material"}),"materials"),"."))}c.isMDXComponent=!0},441:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),c=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},b=function(e){var n=c(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=c(t),m=a,d=b["".concat(r,".").concat(m)]||b[m]||u[m]||o;return t?i.a.createElement(d,l({ref:n},p,{components:t})):i.a.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);
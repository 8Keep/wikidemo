(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{369:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(1),i=n(9),s=(n(0),n(441)),a={},l={id:"jme3/advanced/physics_listeners",title:"physics_listeners",description:"You can control physical objects (push them around) by applying physical",source:"@site/docs/jme3/advanced/physics_listeners.md",permalink:"/wikidemo/docs/jme3/advanced/physics_listeners",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/advanced/physics_listeners.md"},c=[{value:"When (Not) to Use Tick Listener?",id:"when-not-to-use-tick-listener",children:[]},{value:"How to Listen to Physics Ticks",id:"how-to-listen-to-physics-ticks",children:[]},{value:"When (Not) to Use Collision Listener",id:"when-not-to-use-collision-listener",children:[]},{value:"How to Listen to Collisions",id:"how-to-listen-to-collisions",children:[]},{value:"Reading Details From a PhysicsCollisionEvent",id:"reading-details-from-a-physicscollisionevent",children:[]},{value:"Collision Groups",id:"collision-groups",children:[]}],r={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"You can control physical objects (push them around) by applying physical\nforces to them. Typically, you also want to respond to the resulting\ncollisions, e.g. by substracting health points or by playing a sound. To\nspecify how the game responds to such physics events, you use Physics\nListeners."),Object(s.b)("h1",{id:"sample-code"},"Sample Code"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/bullet/TestCollisionListener.java"}),"TestCollisionListener.java"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/bullet/TestAttachGhostObject.java"}),"TestAttachGhostObject.java"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/bullet/TestGhostObject.java"}),"TestGhostObject.java")))),Object(s.b)("h1",{id:"physicsghostobjects"},"PhysicsGhostObjects"),Object(s.b)("p",null,"Attach a com.jme3.bullet.control.GhostControl to any Spatial to turn it\ninto a PhysicsGhostObject. Ghost objects automatically follow their\nspatial and detect collisions. The attached ghost itself is invisible\nand non-solid (!) and doesn't interfere with your game otherwise, it\nonly passively reports collisions."),Object(s.b)("p",null,"You can leave the GhostControl non-solid and invisible and attach it to\nan (invisible) Node in the scene to create something like a motion\ndetector. But a GhostControl also works fine when added to spatials that\nare solid (with RigidBodyControl) and visible (with Geometry). One use\ncase for GhostControls is to check for collisions among\n",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"../../jme3/advanced/walking_character"}),"CharacterControls")," when the\ncharacters are walking."),Object(s.b)("p",null,"The shape of the ghost depends on the CollisionShape that you gave the\nGhostControl. This means that the GhostControl's shape can be different\nfrom the RigidBodyControl's shape. For example, the non-solid ghost\nshape can be bigger than the solid shape of the Spatial (so you can\n\"feel ahead)."),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'GhostControl ghost = new GhostControl(\n  new BoxCollisionShape(new Vector3f(1,1,1)));  // a box-shaped ghost\nNode node = new Node("a ghost-controlled thing");\nnode.addControl(ghost);                         // the ghost follows this node\n// Optional: Add a Geometry, or other controls, to the node if you need to\n...\n// attach everything to activate it\nrootNode.attachChild(node);\ngetPhysicsSpace().add(ghost);\n')),Object(s.b)("p",null,"+-----------------------------------+-----------------------------------+\n| Ghost methods                     | Usage                             |\n+===================================+===================================+\n| getOverlappingObjects()           | Returns the List of objects that  |\n|                                   | are currently colliding           |\n|                                   | (overlapping) with the ghost.     |\n+-----------------------------------+-----------------------------------+\n| getOverlappingCount()             | Returns the number of currently   |\n|                                   | colliding objects.                |\n+-----------------------------------+-----------------------------------+\n| getOverlapping(i)                 | Get PhysicsCollisionObject number |\n|                                   | i.                                |\n+-----------------------------------+-----------------------------------+"),Object(s.b)("h1",{id:"physics-tick-listener"},"Physics Tick Listener"),Object(s.b)("p",null,"The jBullet Physics implementation is stepped at a constant 60 physics\nticks per second frame rate. Applying forces or checking for overlaps\nonly has an effect right at a physics update cycle, which is not every\nframe. If you do physics interactions at arbitrary spots in the\nsimpleUpdate() loop, calls will be dropped at irregular intervals,\nbecause they happen out of cycle."),Object(s.b)("h2",{id:"when-not-to-use-tick-listener"},"When (Not) to Use Tick Listener?"),Object(s.b)("p",null,"When you write game mechanics that apply forces, you must implement a\ntick listener (com.jme3.bullet.PhysicsTickListener) for it. The tick\nlistener makes certain the forces are not dropped, but applied in time\nfor the next physics tick."),Object(s.b)("p",null,"Also, when you check for overlaps of two physical objects using a\nGhostControl, you cannot just go ",Object(s.b)("inlineCode",{parentName:"p"},"ghost.getOverLappingObjects()"),"\nsomewhere outside the update loop. You have to make certain 1 physics\ntick has passed before the overlapping objects list is filled with data.\nAgain, the PhysicsTickListener does the timing for you."),Object(s.b)("p",null,"When your game mechanics however just poll the current state (e.g.\ngetPhysicsLocation()) of physical objects, or if you only use the\nGhostControl like a sphere trigger inside an update loop, then you don't\nneed an extra PhysicsTickListener."),Object(s.b)("h2",{id:"how-to-listen-to-physics-ticks"},"How to Listen to Physics Ticks"),Object(s.b)("p",null,"Here's is the declaration of an examplary Physics Control that listens\nto ticks. (The example shows a RigidBodyControl, but it can also be\nGhostControl.)"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"public class MyCustomControl\n    extends RigidBodyControl implements PhysicsTickListener { ... }\n")),Object(s.b)("p",null,"When you implement the interface, you have to implement ",Object(s.b)("inlineCode",{parentName:"p"},"physicsTick()"),"\nand ",Object(s.b)("inlineCode",{parentName:"p"},"preTick()")," methods."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"prePhysicsTick(PhysicsSpace space, float tpf)")," is called before\neach step, here you apply forces (change the state).")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"physicsTick(PhysicsSpace space, float tpf)")," is called after each\nstep, here you poll the results (get the current state)."))),Object(s.b)("p",null,"The tpf value is time per frame in seconds. You can use it as a factor\nto time actions so they run equally on slow and fast machines."),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"@override\npublic void prePhysicsTick(PhysicsSpace space, float tpf){\n  // apply state changes ...\n}\n@override\npublic void physicsTick(PhysicsSpace space, float tpf){\n  // poll game state ...\n}\n")),Object(s.b)("h1",{id:"physics-collision-listener"},"Physics Collision Listener"),Object(s.b)("h2",{id:"when-not-to-use-collision-listener"},"When (Not) to Use Collision Listener"),Object(s.b)("p",null,'If you do not implement the Collision Listener interface\n(com.jme3.bullet.collision.PhysicsCollisionListener), a collisions will\njust mean that physical forces between solid objects are applied\nautomatically. If you just want "Balls rolling, bricks falling you do\nnot need a listener.'),Object(s.b)("p",null,"If however you want to respond to a collision event\n(com.jme3.bullet.collision.PhysicsCollisionEvent) with a custom action,\nthen you need to implement the PhysicsCollisionListener interface.\nTypical actions triggered by collisions include:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Increasing a counter (e.g. score points)")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Decreasing a counter (e.g. health points)")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Triggering an effect (e.g. explosion)")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Playing a sound (e.g. explosion, ouch)")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"... and countless more, depending on your game"))),Object(s.b)("h2",{id:"how-to-listen-to-collisions"},"How to Listen to Collisions"),Object(s.b)("p",null,"You need to add the PhysicsCollisionListener to the physics space before\ncollisions will be listened for. Here's an example of a Physics Control\nthat uses a collision listener. (The example shows a RigidBodyControl,\nbut it can also be GhostControl.)"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"public class MyCustomControl extends RigidBodyControl\n    implements PhysicsCollisionListener {\n    public MyCustomControl() {\n        bulletAppState.getPhysicsSpace().addCollisionListener(this);\n        ...\n    }\n")),Object(s.b)("p",null,"To respond to the PhysicsCollisionEvent you now have to override the\n",Object(s.b)("inlineCode",{parentName:"p"},"collision()")," method in MyCustomControl. This gives you access to the\n",Object(s.b)("inlineCode",{parentName:"p"},"event")," object. Mostly you will be interested in the identity of any two\nnodes that collided: ",Object(s.b)("inlineCode",{parentName:"p"},"event.getNodeA()")," and ",Object(s.b)("inlineCode",{parentName:"p"},"event.getNodeB()"),"."),Object(s.b)("p",null,"After you identify the colliding nodes, specify the action to trigger\nwhen this pair collides. Note that you cannot know which one will be\nNode A or Node B, you have to deal with either variant."),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'    public void collision(PhysicsCollisionEvent event) {\n        if ( event.getNodeA().getName().equals("player") ) {\n            final Node node = event.getNodeA();\n            /** ... do something with the node ... */\n        } else if ( event.getNodeB().getName().equals("player") ) {\n            final Node node = event.getNodeB();\n            /** ... do something with the node ... */\n        }\n    }\n')),Object(s.b)("p",null,"::: {.important}\nNote that after the collision() method ends, the PhysicsCollisionEvent\nis cleared. You must get all objects and values you need within the\ncollision() method.\n:::"),Object(s.b)("h2",{id:"reading-details-from-a-physicscollisionevent"},"Reading Details From a PhysicsCollisionEvent"),Object(s.b)("p",null,"The PhysicsCollisionEvent ",Object(s.b)("inlineCode",{parentName:"p"},"event")," gives you access to detailed\ninformation about the collision. You already know the event objects can\nidentify which nodes collided, but it even knows how hard they collided:"),Object(s.b)("p",null,"+-----------------------------------+-----------------------------------+\n| Method                            | Purpose                           |\n+===================================+===================================+\n| getObjectA()\\                     | The two participants in the       |\n| getObjectB()                      | collision. You cannot know in     |\n|                                   | advance whether some node will be |\n|                                   | recorded as A or B, you always    |\n|                                   | have to consider both cases.      |\n+-----------------------------------+-----------------------------------+\n| getAppliedImpulse()               | A float value representing the    |\n|                                   | collision impulse                 |\n+-----------------------------------+-----------------------------------+\n| getAppliedImpulseLateral1()       | A float value representing the    |\n|                                   | lateral collision impulse         |\n+-----------------------------------+-----------------------------------+\n| getAppliedImpulseLateral2()       | A float value representing the    |\n|                                   | lateral collision impulse         |\n+-----------------------------------+-----------------------------------+\n| getCombinedFriction()             | A float value representing the    |\n|                                   | collision friction                |\n+-----------------------------------+-----------------------------------+\n| getCombinedRestitution()          | A float value representing the    |\n|                                   | collision restitution             |\n|                                   | (bounciness)                      |\n+-----------------------------------+-----------------------------------+"),Object(s.b)("p",null,"Note that after the collision method has been called the object is not\nvalid anymore so you should copy any data you want to keep into local\nvariables."),Object(s.b)("h2",{id:"collision-groups"},"Collision Groups"),Object(s.b)("p",null,"You can improve performance by resricting the number of tests that\ncollision detection has to perform. If you have a case where you are\nonly interested in collisions between certain objects but not others,\nyou can assign sets of physical obejcts to different collision groups."),Object(s.b)("p",null,"For example, for a click-to-select, you only care if the selection ray\ncollides with a few selectable objects such as dropped weapons or\npowerups (one group), but not with non-selectables such as floors or\nwalls (different group)."),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"myNode.getControl(RigidBodyControl.class).setCollisionGroup(PhysicsCollisionObject.COLLISION_GROUP_02);\nmyNode.getControl(RigidBodyControl.class).setCollideWithGroups(PhysicsCollisionObject.COLLISION_GROUP_02);\n")))}p.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return d}));var o=n(0),i=n.n(o);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=i.a.createContext({}),p=function(e){var t=i.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},h=function(e){var t=p(e.components);return i.a.createElement(r.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,r=c(e,["components","mdxType","originalType","parentName"]),h=p(n),u=o,d=h["".concat(a,".").concat(u)]||h[u]||b[u]||s;return n?i.a.createElement(d,l({ref:t},r,{components:n})):i.a.createElement(d,l({ref:t},r))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var r=2;r<s;r++)a[r]=n[r];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
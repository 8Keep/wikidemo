(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{394:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(9),i=(n(0),n(441)),o={},l={id:"jme3/advanced/terrain_collision",title:"terrain_collision",description:"Terrain Collision",source:"@site/docs/jme3/advanced/terrain_collision.md",permalink:"/wikidemo/docs/jme3/advanced/terrain_collision",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/advanced/terrain_collision.md"},p=[{value:"The Terrain Code",id:"the-terrain-code",children:[]},{value:"The Collision Detection Code",id:"the-collision-detection-code",children:[]},{value:"Combining the Two",id:"combining-the-two",children:[]}],c={rightToc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"terrain-collision"},"Terrain Collision"),Object(i.b)("p",null,"This tutorial expands the HelloTerrain tutorial and makes the terrain\nsolid. You combine what you learned in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../jme3/beginner/hello_terrain"}),"Hello\nTerrain")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../jme3/beginner/hello_collision"}),"Hello\nCollision")," and add a\nCollisionShape to the terrain. The terrain's CollisionShape lets the\nfirst-person player (who is also a CollisionShape) collide with the\nterrain, i.e. walk on it and stand on it."),Object(i.b)("h1",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'package jme3test.helloworld;\n\nimport com.jme3.app.SimpleApplication;\nimport com.jme3.bullet.BulletAppState;\nimport com.jme3.bullet.collision.shapes.CapsuleCollisionShape;\nimport com.jme3.bullet.collision.shapes.CollisionShape;\nimport com.jme3.bullet.control.CharacterControl;\nimport com.jme3.bullet.control.RigidBodyControl;\nimport com.jme3.bullet.util.CollisionShapeFactory;\nimport com.jme3.input.KeyInput;\nimport com.jme3.input.controls.ActionListener;\nimport com.jme3.input.controls.KeyTrigger;\nimport com.jme3.material.Material;\nimport com.jme3.math.Vector3f;\nimport com.jme3.renderer.Camera;\nimport com.jme3.scene.Node;\nimport com.jme3.terrain.geomipmap.TerrainLodControl;\nimport com.jme3.terrain.heightmap.AbstractHeightMap;\nimport com.jme3.terrain.geomipmap.TerrainQuad;\nimport com.jme3.terrain.heightmap.ImageBasedHeightMap;\nimport com.jme3.texture.Texture;\nimport com.jme3.texture.Texture.WrapMode;\nimport java.util.ArrayList;\nimport java.util.List;\nimport jme3tools.converters.ImageToAwt;\n\n/**\n * This demo shows a terrain with collision detection,\n * that you can walk around in with a first-person perspective.\n * This code combines HelloCollision and HelloTerrain.\n */\npublic class HelloTerrainCollision extends SimpleApplication\n        implements ActionListener {\n\n  private BulletAppState bulletAppState;\n  private RigidBodyControl landscape;\n  private CharacterControl player;\n  private Vector3f walkDirection = new Vector3f();\n  private boolean left = false, right = false, up = false, down = false;\n  private TerrainQuad terrain;\n  private Material mat_terrain;\n\n  public static void main(String[] args) {\n    HelloTerrainCollision app = new HelloTerrainCollision();\n    app.start();\n  }\n\n  @Override\n  public void simpleInitApp() {\n    /** Set up Physics */\n    bulletAppState = new BulletAppState();\n    stateManager.attach(bulletAppState);\n    //Uncomment for debugging.\n \xa0  //bulletAppState.setDebugEnabled(true);\n\n    flyCam.setMoveSpeed(100);\n    setUpKeys();\n\n    /** 1. Create terrain material and load four textures into it. */\n    mat_terrain = new Material(assetManager,\n            "Common/MatDefs/Terrain/Terrain.j3md");\n\n    /** 1.1) Add ALPHA map (for red-blue-green coded splat textures) */\n    mat_terrain.setTexture("Alpha", assetManager.loadTexture(\n            "Textures/Terrain/splat/alphamap.png"));\n\n    /** 1.2) Add GRASS texture into the red layer (Tex1). */\n    Texture grass = assetManager.loadTexture(\n            "Textures/Terrain/splat/grass.jpg");\n    grass.setWrap(WrapMode.Repeat);\n    mat_terrain.setTexture("Tex1", grass);\n    mat_terrain.setFloat("Tex1Scale", 64f);\n\n    /** 1.3) Add DIRT texture into the green layer (Tex2) */\n    Texture dirt = assetManager.loadTexture(\n            "Textures/Terrain/splat/dirt.jpg");\n    dirt.setWrap(WrapMode.Repeat);\n    mat_terrain.setTexture("Tex2", dirt);\n    mat_terrain.setFloat("Tex2Scale", 32f);\n\n    /** 1.4) Add ROAD texture into the blue layer (Tex3) */\n    Texture rock = assetManager.loadTexture(\n            "Textures/Terrain/splat/road.jpg");\n    rock.setWrap(WrapMode.Repeat);\n    mat_terrain.setTexture("Tex3", rock);\n    mat_terrain.setFloat("Tex3Scale", 128f);\n\n    /** 2. Create the height map */\n    AbstractHeightMap heightmap = null;\n    Texture heightMapImage = assetManager.loadTexture(\n            "Textures/Terrain/splat/mountains512.png");\n    heightmap = new ImageBasedHeightMap(heightMapImage.getImage());\n    heightmap.load();\n\n    /** 3. We have prepared material and heightmap.\n     * Now we create the actual terrain:\n     * 3.1) Create a TerrainQuad and name it "my terrain".\n     * 3.2) A good value for terrain tiles is 64x64 -- so we supply 64+1=65.\n     * 3.3) We prepared a heightmap of size 512x512 -- so we supply 512+1=513.\n     * 3.4) As LOD step scale we supply Vector3f(1,1,1).\n     * 3.5) We supply the prepared heightmap itself.\n     */\n    terrain = new TerrainQuad("my terrain", 65, 513, heightmap.getHeightMap());\n\n    /** 4. We give the terrain its material, position & scale it, and attach it. */\n    terrain.setMaterial(mat_terrain);\n    terrain.setLocalTranslation(0, -100, 0);\n    terrain.setLocalScale(2f, 1f, 2f);\n    rootNode.attachChild(terrain);\n\n    /** 5. The LOD (level of detail) depends on were the camera is: */\n    List<Camera> cameras = new ArrayList<Camera>();\n    cameras.add(getCamera());\n    TerrainLodControl control = new TerrainLodControl(terrain, cameras);\n    terrain.addControl(control);\n\n    /** 6. Add physics: */\n    // We set up collision detection for the scene by creating a static\n    RigidBodyControl with mass zero.*/\n    terrain.addControl(new RigidBodyControl(0));\n\n    /**\n     * We set up collision detection for the player by creating\n     * a capsule collision shape and a CharacterControl.\n     * The CharacterControl offers extra settings for\n     * size, stepheight, jumping, falling, and gravity.\n     * We also put the player in its starting position.\n     */\n    CapsuleCollisionShape capsuleShape = new CapsuleCollisionShape(1.5f, 6f, 1);\n    player = new CharacterControl(capsuleShape, 0.05f);\n    player.setJumpSpeed(20);\n    player.setFallSpeed(30);\n\n    player.setPhysicsLocation(new Vector3f(-10, 10, 10));\n\n    // We attach the scene and the player to the rootnode and the physics space,\n    // to make them appear in the game world.\n    bulletAppState.getPhysicsSpace().add(terrain);\n    bulletAppState.getPhysicsSpace().add(player);\n\n    // You can change the gravity of individual physics objects after they are\n    // added to the PhysicsSpace.\n    player.setGravity(new Vector3f(0,-30f,0));\n\n  }\n  /** We over-write some navigational key mappings here, so we can\n   * add physics-controlled walking and jumping: */\n  private void setUpKeys() {\n    inputManager.addMapping("Left", new KeyTrigger(KeyInput.KEY_A));\n    inputManager.addMapping("Right", new KeyTrigger(KeyInput.KEY_D));\n    inputManager.addMapping("Up", new KeyTrigger(KeyInput.KEY_W));\n    inputManager.addMapping("Down", new KeyTrigger(KeyInput.KEY_S));\n    inputManager.addMapping("Jump", new KeyTrigger(KeyInput.KEY_SPACE));\n    inputManager.addListener(this, "Left");\n    inputManager.addListener(this, "Right");\n    inputManager.addListener(this, "Up");\n    inputManager.addListener(this, "Down");\n    inputManager.addListener(this, "Jump");\n  }\n\n  /** These are our custom actions triggered by key presses.\n   * We do not walk yet, we just keep track of the direction the user pressed. */\n  public void onAction(String binding, boolean value, float tpf) {\n    if (binding.equals("Left")) {\n      if (value) { left = true; } else { left = false; }\n    } else if (binding.equals("Right")) {\n      if (value) { right = true; } else { right = false; }\n    } else if (binding.equals("Up")) {\n      if (value) { up = true; } else { up = false; }\n    } else if (binding.equals("Down")) {\n      if (value) { down = true; } else { down = false; }\n    } else if (binding.equals("Jump")) {\n      player.jump(new Vector3f(0,20f,0));\n    }\n  }\n\n  /**\n   * This is the main event loop--walking happens here.\n   * We check in which direction the player is walking by interpreting\n   * the camera direction forward (camDir) and to the side (camLeft).\n   * The setWalkDirection() command is what lets a physics-controlled player walk.\n   * We also make sure here that the camera moves with player.\n   */\n  @Override\n  public void simpleUpdate(float tpf) {\n    Vector3f camDir = cam.getDirection().clone().multLocal(0.6f);\n    Vector3f camLeft = cam.getLeft().clone().multLocal(0.4f);\n    walkDirection.set(0, 0, 0);\n    if (left)  { walkDirection.addLocal(camLeft); }\n    if (right) { walkDirection.addLocal(camLeft.negate()); }\n    if (up)    { walkDirection.addLocal(camDir); }\n    if (down)  { walkDirection.addLocal(camDir.negate()); }\n    player.setWalkDirection(walkDirection);\n    cam.setLocation(player.getPhysicsLocation());\n  }\n}\n')),Object(i.b)("p",null,"To try this code, create a ",Object(i.b)("inlineCode",{parentName:"p"},"New Project JME3 BasicGame"),' using the\ndefault settings. Paste the sample code over the pregenerated Main.java\nclass. Change the package to "mygame" if necessary. Open the\n',Object(i.b)("inlineCode",{parentName:"p"},"File Project Properties Libraries")," and add the ",Object(i.b)("inlineCode",{parentName:"p"},"jme3-test-data")," library\nto make certain you have all the files."),Object(i.b)("p",null,"Compile and run the code. You should see a terrain. You can use the WASD\nkeys and the mouse to run up and down the hills."),Object(i.b)("h1",{id:"understanding-the-code"},"Understanding the Code"),Object(i.b)("h2",{id:"the-terrain-code"},"The Terrain Code"),Object(i.b)("p",null,"Read ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../jme3/beginner/hello_terrain"}),"Hello Terrain")," for details\nof the following parts that we reuse:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"AbstractHeightMap")," is an efficient way to describe the shape of\nthe terrain.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"Terrain.j3md"),"-based Material and its texture layers let you\ncolorize rocky mountain, grassy valleys, and a paved path\ncriss-crossing over the landscape.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The TerrainQuad is the finished ",Object(i.b)("inlineCode",{parentName:"p"},"terrain")," Spatial that you attach to\nthe rootNode."))),Object(i.b)("h2",{id:"the-collision-detection-code"},"The Collision Detection Code"),Object(i.b)("p",null,"Read ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../jme3/beginner/hello_collision"}),"Hello Collision")," for\ndetails of the following parts that we reuse:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"BulletAppState")," lines activate physics.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"ActionListener")," (",Object(i.b)("inlineCode",{parentName:"p"},"onAction()"),") lets you reconfigure the input\nhandling for the first-person player, so it takes collision\ndetection into account.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The custom ",Object(i.b)("inlineCode",{parentName:"p"},"setUpKeys()")," method loads your reconfigured input\nhandlers. They now don't just walk blindly, but calculate the\n",Object(i.b)("inlineCode",{parentName:"p"},"walkDirection")," vector that we need for collision detection.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"simpleUpdate()")," uses the ",Object(i.b)("inlineCode",{parentName:"p"},"walkDirection")," vector and makes the\ncharacter walk, while taking obstacles and solid walls/floor into\naccount."))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"player.setWalkDirection(walkDirection);\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The RigidBodyControl ",Object(i.b)("inlineCode",{parentName:"p"},"landscape")," is the CollisionShape of the\nterrain.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The physical first-person player is a CapsuleCollisionShape with a\nCharacterControl."))),Object(i.b)("h2",{id:"combining-the-two"},"Combining the Two"),Object(i.b)("p",null,"Here are the changed parts to combine the two:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You create a static (zero-mass) RigidBodyControl.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Add the control to the ",Object(i.b)("inlineCode",{parentName:"p"},"terrain")," to make it physical."))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"/** 6. Add physics: */\n    terrain.addControl(new RigidBodyControl(0));\n")),Object(i.b)("p",null,"You attach the ",Object(i.b)("inlineCode",{parentName:"p"},"terrain")," and the first-person ",Object(i.b)("inlineCode",{parentName:"p"},"player")," to the rootNode,\nand to the physics space, to make them appear in the game world."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"    bulletAppState.getPhysicsSpace().add(terrain);\n    bulletAppState.getPhysicsSpace().add(player);\n")),Object(i.b)("h1",{id:"conclusion"},"Conclusion"),Object(i.b)("p",null,"You see that you can combine snippets of sample code (such as\nHelloTerrain and HelloCollision), and create a new application from it\nthat combines two features into soemthing new."),Object(i.b)("p",null,"You should spawn high up in the area and fall down to the map, giving\nyou a few seconds to survey the area. Then walk around and see how you\nlike the lay of the land."),Object(i.b)("p",null,"See also:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../jme3/beginner/hello_terrain"}),"Hello Terrain"),",")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../jme3/advanced/terrain"}),"Terrain")))))}s.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,u=d["".concat(o,".").concat(h)]||d[h]||m[h]||i;return n?r.a.createElement(u,l({ref:t},c,{components:n})):r.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);
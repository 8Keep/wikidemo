(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(1),o=a(9),i=(a(0),a(441)),l={},r={id:"jme3/beginner/hello_physics",title:"hello_physics",description:"Previous: [Hello Effects](../../jme3/beginner/hello_effects), Next:",source:"@site/docs/jme3/beginner/hello_physics.md",permalink:"/wikidemo/docs/jme3/beginner/hello_physics",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/beginner/hello_physics.md",sidebar:"main",previous:{title:"hello_effects",permalink:"/wikidemo/docs/jme3/beginner/hello_effects"},next:{title:"best_practices",permalink:"/wikidemo/docs/jme3/intermediate/best_practices"}},c=[{value:"Geometries",id:"geometries",children:[]},{value:"RigidBodyControl: Brick",id:"rigidbodycontrol-brick",children:[]},{value:"RigidBodyControl: Cannonball",id:"rigidbodycontrol-cannonball",children:[]},{value:"RigidBodyControl: Floor",id:"rigidbodycontrol-floor",children:[]},{value:"Exercise 1: Debug Shapes",id:"exercise-1-debug-shapes",children:[]},{value:"Exercise 2: No Mo&#39; Static",id:"exercise-2-no-mo-static",children:[]},{value:"Exercise 3: Behind the Curtain",id:"exercise-3-behind-the-curtain",children:[]}],s={rightToc:c};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Previous: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/beginner/hello_effects"}),"Hello Effects"),", Next:\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3"}),"JME 3 documentation")),Object(i.b)("p",null,"Do you remember the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/beginner/hello_collision"}),"Hello\nCollision")," tutorial where you\nmade the model of a town solid and walked through it in a first-person\nperspective? Then you may remember that, for the simulation of physical\nforces, jME3 integrates the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://jbullet.advel.cz/"}),"jBullet")," library."),Object(i.b)("p",null,'Apart from making models "solid, the most common use cases for physics\nin 3D games are:'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Driving vehicles with suspensions, tyre friction, ramp jumping,\ndrifting -- Example: car racers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Rolling and bouncing balls -- Example: pong, pool billiard, bowling")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Sliding and falling boxes -- Example: Breakout, Arkanoid")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Exposing objects to forces and gravity -- Example: spaceships or\nzero-g flight")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Animating ragdolls -- Example: "realistic character simulations')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Swinging pendulums, rope bridges, flexible chains, and much more..."))),Object(i.b)("p",null,"All these physical properties can be simulated in JME3. Let's have a\nlook at a simulation of physical forces in this example where you shoot\ncannon balls at a brick wall."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/jme3/beginner/beginner-physics.png",alt:"beginner-physics.png"}))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},'To use the example assets in a new jMonkeyEngine SDK project,\nright-click your project, select "Properties, go to "Libraries, press\n"Add Library and add the "jme3-test-data library.'))),Object(i.b)("h1",{id:"sample-code"},"Sample Code"),Object(i.b)("p",null,"Thanks to double1984 for contributing this fun sample!"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'package jme3test.helloworld;\n\nimport com.jme3.app.SimpleApplication;\nimport com.jme3.asset.TextureKey;\nimport com.jme3.bullet.BulletAppState;\nimport com.jme3.bullet.control.RigidBodyControl;\nimport com.jme3.font.BitmapText;\nimport com.jme3.input.MouseInput;\nimport com.jme3.input.controls.ActionListener;\nimport com.jme3.input.controls.MouseButtonTrigger;\nimport com.jme3.material.Material;\nimport com.jme3.math.Vector2f;\nimport com.jme3.math.Vector3f;\nimport com.jme3.scene.Geometry;\nimport com.jme3.scene.shape.Box;\nimport com.jme3.scene.shape.Sphere;\nimport com.jme3.scene.shape.Sphere.TextureMode;\nimport com.jme3.texture.Texture;\nimport com.jme3.texture.Texture.WrapMode;\n\n/**\n * Example 12 - how to give objects physical properties so they bounce and fall.\n * @author base code by double1984, updated by zathras\n */\npublic class HelloPhysics extends SimpleApplication {\n\n  public static void main(String args[]) {\n    HelloPhysics app = new HelloPhysics();\n    app.start();\n  }\n\n  /** Prepare the Physics Application State (jBullet) */\n  private BulletAppState bulletAppState;\n\n  /** Prepare Materials */\n  Material wall_mat;\n  Material stone_mat;\n  Material floor_mat;\n\n  /** Prepare geometries and physical nodes for bricks and cannon balls. */\n  private RigidBodyControl    brick_phy;\n  private static final Box    box;\n  private RigidBodyControl    ball_phy;\n  private static final Sphere sphere;\n  private RigidBodyControl    floor_phy;\n  private static final Box    floor;\n\n  /** dimensions used for bricks and wall */\n  private static final float brickLength = 0.48f;\n  private static final float brickWidth  = 0.24f;\n  private static final float brickHeight = 0.12f;\n\n  static {\n    /** Initialize the cannon ball geometry */\n    sphere = new Sphere(32, 32, 0.4f, true, false);\n    sphere.setTextureMode(TextureMode.Projected);\n    /** Initialize the brick geometry */\n    box = new Box(brickLength, brickHeight, brickWidth);\n    box.scaleTextureCoordinates(new Vector2f(1f, .5f));\n    /** Initialize the floor geometry */\n    floor = new Box(10f, 0.1f, 5f);\n    floor.scaleTextureCoordinates(new Vector2f(3, 6));\n  }\n\n  @Override\n  public void simpleInitApp() {\n    /** Set up Physics Game */\n    bulletAppState = new BulletAppState();\n    stateManager.attach(bulletAppState);\n    //bulletAppState.getPhysicsSpace().enableDebug(assetManager);\n\n    /** Configure cam to look at scene */\n    cam.setLocation(new Vector3f(0, 4f, 6f));\n    cam.lookAt(new Vector3f(2, 2, 0), Vector3f.UNIT_Y);\n    /** Add InputManager action: Left click triggers shooting. */\n    inputManager.addMapping("shoot",\n            new MouseButtonTrigger(MouseInput.BUTTON_LEFT));\n    inputManager.addListener(actionListener, "shoot");\n    /** Initialize the scene, materials, and physics space */\n    initMaterials();\n    initWall();\n    initFloor();\n    initCrossHairs();\n  }\n\n  /**\n   * Every time the shoot action is triggered, a new cannon ball is produced.\n   * The ball is set up to fly from the camera position in the camera direction.\n   */\n  private ActionListener actionListener = new ActionListener() {\n    public void onAction(String name, boolean keyPressed, float tpf) {\n      if (name.equals("shoot") && !keyPressed) {\n        makeCannonBall();\n      }\n    }\n  };\n\n  /** Initialize the materials used in this scene. */\n  public void initMaterials() {\n    wall_mat = new Material(assetManager, "Common/MatDefs/Misc/Unshaded.j3md");\n    TextureKey key = new TextureKey("Textures/Terrain/BrickWall/BrickWall.jpg");\n    key.setGenerateMips(true);\n    Texture tex = assetManager.loadTexture(key);\n    wall_mat.setTexture("ColorMap", tex);\n\n    stone_mat = new Material(assetManager, "Common/MatDefs/Misc/Unshaded.j3md");\n    TextureKey key2 = new TextureKey("Textures/Terrain/Rock/Rock.PNG");\n    key2.setGenerateMips(true);\n    Texture tex2 = assetManager.loadTexture(key2);\n    stone_mat.setTexture("ColorMap", tex2);\n\n    floor_mat = new Material(assetManager, "Common/MatDefs/Misc/Unshaded.j3md");\n    TextureKey key3 = new TextureKey("Textures/Terrain/Pond/Pond.jpg");\n    key3.setGenerateMips(true);\n    Texture tex3 = assetManager.loadTexture(key3);\n    tex3.setWrap(WrapMode.Repeat);\n    floor_mat.setTexture("ColorMap", tex3);\n  }\n\n  /** Make a solid floor and add it to the scene. */\n  public void initFloor() {\n    Geometry floor_geo = new Geometry("Floor", floor);\n    floor_geo.setMaterial(floor_mat);\n    floor_geo.setLocalTranslation(0, -0.1f, 0);\n    this.rootNode.attachChild(floor_geo);\n    /* Make the floor physical with mass 0.0f! */\n    floor_phy = new RigidBodyControl(0.0f);\n    floor_geo.addControl(floor_phy);\n    bulletAppState.getPhysicsSpace().add(floor_phy);\n  }\n\n  /** This loop builds a wall out of individual bricks. */\n  public void initWall() {\n    float startpt = brickLength / 4;\n    float height = 0;\n    for (int j = 0; j < 15; j++) {\n      for (int i = 0; i < 6; i++) {\n        Vector3f vt =\n         new Vector3f(i * brickLength * 2 + startpt, brickHeight + height, 0);\n        makeBrick(vt);\n      }\n      startpt = -startpt;\n      height += 2 * brickHeight;\n    }\n  }\n\n  /** This method creates one individual physical brick. */\n  public void makeBrick(Vector3f loc) {\n    /** Create a brick geometry and attach to scene graph. */\n    Geometry brick_geo = new Geometry("brick", box);\n    brick_geo.setMaterial(wall_mat);\n    rootNode.attachChild(brick_geo);\n    /** Position the brick geometry  */\n    brick_geo.setLocalTranslation(loc);\n    /** Make brick physical with a mass > 0.0f. */\n    brick_phy = new RigidBodyControl(2f);\n    /** Add physical brick to physics space. */\n    brick_geo.addControl(brick_phy);\n    bulletAppState.getPhysicsSpace().add(brick_phy);\n  }\n\n  /** This method creates one individual physical cannon ball.\n   * By defaul, the ball is accelerated and flies\n   * from the camera position in the camera direction.*/\n   public void makeCannonBall() {\n    /** Create a cannon ball geometry and attach to scene graph. */\n    Geometry ball_geo = new Geometry("cannon ball", sphere);\n    ball_geo.setMaterial(stone_mat);\n    rootNode.attachChild(ball_geo);\n    /** Position the cannon ball  */\n    ball_geo.setLocalTranslation(cam.getLocation());\n    /** Make the ball physcial with a mass > 0.0f */\n    ball_phy = new RigidBodyControl(1f);\n    /** Add physical ball to physics space. */\n    ball_geo.addControl(ball_phy);\n    bulletAppState.getPhysicsSpace().add(ball_phy);\n    /** Accelerate the physcial ball to shoot it. */\n    ball_phy.setLinearVelocity(cam.getDirection().mult(25));\n  }\n\n  /** A plus sign used as crosshairs to help the player with aiming.*/\n  protected void initCrossHairs() {\n    guiNode.detachAllChildren();\n    guiFont = assetManager.loadFont("Interface/Fonts/Default.fnt");\n    BitmapText ch = new BitmapText(guiFont, false);\n    ch.setSize(guiFont.getCharSet().getRenderedSize() * 2);\n    ch.setText("+");        // fake crosshairs :)\n    ch.setLocalTranslation( // center\n      settings.getWidth() / 2 - guiFont.getCharSet().getRenderedSize() / 3 * 2,\n      settings.getHeight() / 2 + ch.getLineHeight() / 2, 0);\n    guiNode.attachChild(ch);\n  }\n}\n')),Object(i.b)("p",null,"You should see a brick wall. Click to shoot cannon balls. Watch the\nbricks fall and bounce off one another!"),Object(i.b)("h1",{id:"a-basic-physics-application"},"A Basic Physics Application"),Object(i.b)("p",null,'In the previous tutorials, you used static Geometries (boxes, spheres,\nand models) that you placed in the scene. Depending on their\ntranslation, Geometries can "float in mid-air and even overlap -- they\nare not affected by "gravity and have no physical mass. This tutorial\nshows how to add physical properties to Geometries.'),Object(i.b)("p",null,"As always, start with a standard com.jme3.app.SimpleApplication. To\nactivate physics, create a com.jme3.bullet.BulletAppState, and and\nattach it to the SimpleApplication's AppState manager."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"public class HelloPhysics extends SimpleApplication {\n  private BulletAppState bulletAppState;\n\n  public void simpleInitApp() {\n    bulletAppState = new BulletAppState();\n    stateManager.attach(bulletAppState);\n    ...\n  }\n  ...\n}\n")),Object(i.b)("p",null,"The BulletAppState gives the game access to a PhysicsSpace. The\nPhysicsSpace lets you use com.jme3.bullet.control.PhysicsControls that\nadd physical properties to Nodes."),Object(i.b)("h1",{id:"creating-bricks-and-cannon-balls"},"Creating Bricks and Cannon Balls"),Object(i.b)("h2",{id:"geometries"},"Geometries"),Object(i.b)("p",null,"In this \"shoot at the wall example, you use Geometries such as cannon\nballs and bricks. Geometries contain meshes, such as Shapes. Let's\ncreate and initialize some Shapes: Boxes and Spheres."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"  /** Prepare geometries and physical nodes for bricks and cannon balls. */\n  private static final Box    box;\n  private static final Sphere sphere;\n  private static final Box    floor;\n  /** dimensions used for bricks and wall */\n  private static final float brickLength = 0.48f;\n  private static final float brickWidth  = 0.24f;\n  private static final float brickHeight = 0.12f;\n  static {\n    /** Initialize the cannon ball geometry */\n    sphere = new Sphere(32, 32, 0.4f, true, false);\n    sphere.setTextureMode(TextureMode.Projected);\n    /** Initialize the brick geometry */\n    box = new Box(brickLength, brickHeight, brickWidth);\n    box.scaleTextureCoordinates(new Vector2f(1f, .5f));\n    /** Initialize the floor geometry */\n    floor = new Box(10f, 0.1f, 5f);\n    floor.scaleTextureCoordinates(new Vector2f(3, 6));\n  }\n")),Object(i.b)("h2",{id:"rigidbodycontrol-brick"},"RigidBodyControl: Brick"),Object(i.b)("p",null,"We want to create brick Geometries from those boxes. For each Geometry\nwith physical properties, you create a RigidBodyControl."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"  private RigidBodyControl brick_phy;\n")),Object(i.b)("p",null,"The custom ",Object(i.b)("inlineCode",{parentName:"p"},"makeBrick(loc)")," methods creates individual bricks at the\nlocation ",Object(i.b)("inlineCode",{parentName:"p"},"loc"),". A brick has the following properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"It has a visible Geometry ",Object(i.b)("inlineCode",{parentName:"p"},"brick_geo")," (Box Shape Geometry).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"It has physical properties ",Object(i.b)("inlineCode",{parentName:"p"},"brick_phy")," (RigidBodyControl)"))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'  public void makeBrick(Vector3f loc) {\n    /** Create a brick geometry and attach to scene graph. */\n    Geometry brick_geo = new Geometry("brick", box);\n    brick_geo.setMaterial(wall_mat);\n    rootNode.attachChild(brick_geo);\n    /** Position the brick geometry  */\n    brick_geo.setLocalTranslation(loc);\n    /** Make brick physical with a mass > 0.0f. */\n    brick_phy = new RigidBodyControl(2f);\n    /** Add physical brick to physics space. */\n    brick_geo.addControl(brick_phy);\n    bulletAppState.getPhysicsSpace().add(brick_phy);\n  }\n')),Object(i.b)("p",null,"This code sample does the following:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You create a brick Geometry brick","_","geo. A Geometry describes the\nshape and look of an object."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"brick","_","geo has a box shape")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"brick","_","geo has a brick-colored material.")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You attach brick","_","geo to the rootNode")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You position brick","_","geo at ",Object(i.b)("inlineCode",{parentName:"p"},"loc"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You create a RigidBodyControl brick","_","phy for brick","_","geo."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"brick","_","phy has a mass of 2f.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You add brick","_","phy to brick","_","geo.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You register brick","_","phy to the PhysicsSpace."))))),Object(i.b)("h2",{id:"rigidbodycontrol-cannonball"},"RigidBodyControl: Cannonball"),Object(i.b)("p",null,"You notice that the cannon ball is created in the same way, using the\ncustom ",Object(i.b)("inlineCode",{parentName:"p"},"makeCannonBall()")," method. The cannon ball has the following\nproperties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"It has a visible Geometry ",Object(i.b)("inlineCode",{parentName:"p"},"ball_geo")," (Sphere Shape Geometry)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"It has physical properties ",Object(i.b)("inlineCode",{parentName:"p"},"ball_phy")," (RigidBodyControl)"))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'    /** Create a cannon ball geometry and attach to scene graph. */\n    Geometry ball_geo = new Geometry("cannon ball", sphere);\n    ball_geo.setMaterial(stone_mat);\n    rootNode.attachChild(ball_geo);\n    /** Position the cannon ball  */\n    ball_geo.setLocalTranslation(cam.getLocation());\n    /** Make the ball physcial with a mass > 0.0f */\n    ball_phy = new RigidBodyControl(1f);\n    /** Add physical ball to physics space. */\n    ball_geo.addControl(ball_phy);\n    bulletAppState.getPhysicsSpace().add(ball_phy);\n    /** Accelerate the physcial ball to shoot it. */\n    ball_phy.setLinearVelocity(cam.getDirection().mult(25));\n')),Object(i.b)("p",null,"This code sample does the following:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You create a ball Geometry ball","_","geo. A Geometry describes the shape\nand look of an object."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"ball","_","geo has a sphere shape")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"ball","_","geo has a stone-colored material.")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You attach ball","_","geo to the rootNode")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You position ball","_","geo at the camera location.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You create a RigidBodyControl ball","_","phy for ball","_","geo."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"ball","_","phy has a mass of 1f.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You add ball","_","phy to ball","_","geo.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You register ball","_","phy to the PhysicsSpace."))))),Object(i.b)("p",null,"Since you are shooting cannon balls, the last line accelerates the ball\nin the direction the camera is looking, with a speed of 25f."),Object(i.b)("h2",{id:"rigidbodycontrol-floor"},"RigidBodyControl: Floor"),Object(i.b)("p",null,"The (static) floor has one important difference compared to the\n(dynamic) bricks and cannonballs: ",Object(i.b)("strong",{parentName:"p"},"Static objects have a mass of\nzero.")," As before, you write a custom ",Object(i.b)("inlineCode",{parentName:"p"},"initFloor()")," method that creates\na flat box with a rock texture that you use as floor. The floor has the\nfollowing properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"It has a visible Geometry ",Object(i.b)("inlineCode",{parentName:"p"},"floor_geo")," (Box Shape Geometry)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"It has physical properties ",Object(i.b)("inlineCode",{parentName:"p"},"floor_phy")," (RigidBodyControl)"))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'  public void initFloor() {\n    Geometry floor_geo = new Geometry("Floor", floor);\n    floor_geo.setMaterial(floor_mat);\n    floor_geo.setLocalTranslation(0, -0.1f, 0);\n    this.rootNode.attachChild(floor_geo);\n    /* Make the floor physical with mass 0.0f! */\n    floor_phy = new RigidBodyControl(0.0f);\n    floor_geo.addControl(floor_phy);\n    bulletAppState.getPhysicsSpace().add(floor_phy);\n  }\n')),Object(i.b)("p",null,"This code sample does the following:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You create a floor Geometry floor","_","geo. A Geometry describes the\nshape and look of an object."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"floor","_","geo has a box shape")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"floor","_","geo has a pebble-colored material.")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You attach floor","_","geo to the rootNode")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You position floor","_","geo a bit below y=0 (to prevent overlap with\nother PhysicControl'ed Spatials).")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You create a RigidBodyControl floor","_","phy for floor","_","geo."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"floor","_","phy has a mass of 0f")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You add floor","_","phy to floor","_","geo.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You register floor","_","phy to the PhysicsSpace."))))),Object(i.b)("h1",{id:"creating-the-scene"},"Creating the Scene"),Object(i.b)("p",null,"Let's have a quick look at the custom helper methods:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"initMaterial()")," -- This method initializes all the materials we use\nin this demo.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"initWall()")," -- A double loop that generates a wall by positioning\nbrick objects: 15 rows high with 6 bricks per row. It's important to\nspace the physical bricks so they do not overlap.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"initCrossHairs()")," -- This method simply displays a plus sign that\nyou use as crosshairs for aiming. Note that screen elements such as\ncrosshairs are attached to the ",Object(i.b)("inlineCode",{parentName:"p"},"guiNode"),", not the ",Object(i.b)("inlineCode",{parentName:"p"},"rootNode"),"!")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"initInputs()")," -- This method sets up the click-to-shoot action."))),Object(i.b)("p",null,"These methods are each called once from the ",Object(i.b)("inlineCode",{parentName:"p"},"simpleInitApp()")," method at\nthe start of the game. As you see, you can write any number of custom\nmethods to set up your game's scene."),Object(i.b)("h1",{id:"the-cannon-ball-shooting-action"},"The Cannon Ball Shooting Action"),Object(i.b)("p",null,"In the ",Object(i.b)("inlineCode",{parentName:"p"},"initInputs()")," method, you add an input mapping that triggers a\nshoot action when the left mouse button is pressed."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'  private void initInputs() {\n    inputManager.addMapping("shoot",\n            new MouseButtonTrigger(MouseInput.BUTTON_LEFT));\n    inputManager.addListener(actionListener, "shoot");\n  }\n')),Object(i.b)("p",null,"You define the actual action of shooting a new cannon ball as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'    private ActionListener actionListener = new ActionListener() {\n        public void onAction(String name, boolean keyPressed, float tpf) {\n            if (name.equals("shoot") && !keyPressed) {\n                makeCannonBall();\n            }\n        }\n    };\n')),Object(i.b)("p",null,"In the moment the cannonball appears in the scene, it flies off with the\nvelocity (and in the direction) that you specified using\n",Object(i.b)("inlineCode",{parentName:"p"},"setLinearVelocity()")," inside ",Object(i.b)("inlineCode",{parentName:"p"},"makeCannonBall()"),". The newly created\ncannon ball flies off, hits the wall, and exerts a ",Object(i.b)("em",{parentName:"p"},"physical force")," that\nimpacts individual bricks."),Object(i.b)("h1",{id:"moving-a-physical-spatial"},"Moving a Physical Spatial"),Object(i.b)("p",null,"The location of the dynamic Spatial is controlled by its\nRigidBodyControl. Move the RigidBodyControl to move the Spatial. If it's\na dynamic PhysicsControl, you can use setLinearVelocity() and apply\nforces and torques to it. Other RigidBodyControl'led objects can push\nthe dynamic Spatial around (like pool/billiard balls)."),Object(i.b)("p",null,"You can make Spatials that are not dynamic: Switch the RigidBodyControl\nto setKinematic(true) to have it move along with its Spatial."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'A kinematic is unaffected by forces or gravity, which means it can\nfloat in mid-air and cannot be pushed away by dynamic "cannon balls\netc.')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A kinematic RigidBody has a mass.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A kinematic can be moved and can exert forces on dynamic RigidBodys.\nThis means you can use a kinematic node as a billiard cue or a\nremote-controlled battering ram."))),Object(i.b)("p",null,"Learn more about static versus kinematic versus dynamic in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/physics"}),"advanced\nphysics doc"),"."),Object(i.b)("h1",{id:"excercises"},"Excercises"),Object(i.b)("h2",{id:"exercise-1-debug-shapes"},"Exercise 1: Debug Shapes"),Object(i.b)("p",null,"Add the following line after the bulletAppState initialization."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// For older versions up to JME sdk 3.0.10\nbulletAppState.getPhysicsSpace().enableDebug(assetManager);\n")),Object(i.b)("p",null,"or"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// For new versions thereafter\nbulletAppState.setDebugEnabled(true);\n")),Object(i.b)("p",null,"Now you see the collisionShapes of the bricks and spheres, and the floor\nhighlighted."),Object(i.b)("h2",{id:"exercise-2-no-mo-static"},"Exercise 2: No Mo\\' Static"),Object(i.b)("p",null,"What happens if you give a static node, such as the floor, a mass of\nmore than 0.0f?"),Object(i.b)("h2",{id:"exercise-3-behind-the-curtain"},"Exercise 3: Behind the Curtain"),Object(i.b)("p",null,"Fill your scene with walls, bricks, and cannon balls. When do you begin\nto see a performance impact?"),Object(i.b)("p",null,'Popular AAA games use a clever mix of physics, animation and prerendered\ngraphics to give you the illusion of a real, "physical world. Think of\nyour favorite video games and try to spot where and how the game\ndesigners trick you into believing that the whole scene is physical. For\nexample, think of a building "breaking into 4-8 parts after an\nexplosion. The pieces most likely fly on predefined (so called\nkinematic) paths and are only replaced by dynamic Spatials after they\ntouch the ground... Now that you start to implement game physics\nyourself, look behind the curtain!'),Object(i.b)("p",null,"Using physics everywhere in a game sounds like a cool idea, but it is\neasily overused. Although the physics nodes are put to \"sleep when they\nare not moving, creating a world solely out of dynamic physics nodes\nwill quickly bring you to the limits of your computer's capabilities."),Object(i.b)("h1",{id:"conclusion"},"Conclusion"),Object(i.b)("p",null,"You have learned how to activate the jBullet PhysicsSpace in an\napplication by adding a ",Object(i.b)("inlineCode",{parentName:"p"},"BulletAppState"),". You have created\nPhysicsControls for simple Shape-based Geometries (for more complex\nshapes, read up on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/physics"}),"CollisionShapes"),").\nYou have learned that physical objects are not only attached to the\nrootNode, but also registered to the PhysicsSpace. You know that it\nmakes a difference whether a physical object has a mass (dynamic) or not\n(static). You are aware that overusing physics has a huge performance\nimpact."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Congratulations! -- You have completed the last beginner tutorial. Now\nyou are ready to start ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3"}),"combining what you have\nlearned"),", to create a cool 3D game of your own. Show us\nwhat you can do, and feel free to share your demos, game videos, and\nscreenshots on the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://hub.jmonkeyengine.org/c/user-code-projects"}),"User Code & Projects\nForum"),"!"))))}p.isMDXComponent=!0},441:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r({},t,{},e)),a},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,d=b["".concat(l,".").concat(m)]||b[m]||h[m]||i;return a?o.a.createElement(d,r({ref:t},s,{components:a})):o.a.createElement(d,r({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var s=2;s<i;s++)l[s]=a[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);
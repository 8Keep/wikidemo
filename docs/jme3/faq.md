I want to create and configure a jME3 Application
=================================================

How do I start writing a preconfigured jME game?
------------------------------------------------

Write a Java class that extends
[com.jme3.app.SimpleApplication](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-core/src/main/java/com/jme3/app/SimpleApplication.java).

**Learn more:**

-   [Hello
    SimpleApplication](../jme3/beginner/hello_simpleapplication)

-   [TestAppStateLifeCycle](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/app/TestAppStateLifeCycle.java).

How do I change the background color?
-------------------------------------

```java
viewPort.setBackgroundColor(ColorRGBA.Blue);
```

Can I customize the SimpleApplication class?
--------------------------------------------

Yes! Actually, you MUST customize it! For your own games, you always
create a custom base class that extends
[com.jme3.app.SimpleApplication](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-core/src/main/java/com/jme3/app/SimpleApplication.java)
class. From now on it's no longer a `simple application` -- it's now
your game. Configure your [application
settings](../jme3/intermediate/appsettings), implement methods, and
customize away!

**Learn more:**

-   [SimpleApplication](../jme3/intermediate/simpleapplication)

-   [AppSettings](../jme3/intermediate/appsettings).

How can I switch between screens or states?
-------------------------------------------

You should break down your application logic into components by
spreading it out over individual AppStates. AppStates can be attached to
and detached from the game. AppStates have access to all objects
(rootNode, PhysicsSpace, inputManager, etc) and methods in your main
application. So each AppState can bring its own subset of input
handlers, GUI nodes, spatial nodes, and even its own subset of game
mechanics in the update() loop.

**Learn more:**

-   [Application States](../jme3/advanced/application_states)

How do I pause/unpause a game?
------------------------------

You split up your application into several AppStates and implement the
setEnabled() methods for each state. Then you create, for example, a
GameRunningAppState and a GamePausedAppState. GamePausedAppState's job
is to attach all your AppStates that contain the logic and GUI of the
pause screen, and to detach all the AppStates that contain logic and GUI
of the running game. GameRunningAppState does the opposite. By attaching
one or the other to the game, you switch between the paused and unpaused
states.

**Learn more:**

-   [Application States](../jme3/advanced/application_states)

How do I disable logger output to the console?
----------------------------------------------

During development, you can switch the severity level of the default
logger to no longer print FINE warnings, but only WARNINGs.

```java
java.util.logging.Logger.getLogger("").setLevel(Level.WARNING);
```

For the release, switch the severity level of the default logger to
print only SEVERE errors.

```java
java.util.logging.Logger.getLogger("").setLevel(Level.SEVERE);
```

**Learn more:**

-   [Logging](../jme3/advanced/logging)

Why does the executable crash with \"Cannot locate resource\"?
--------------------------------------------------------------

Make sure to only load() models converted to .j3o binary format, not the
original Ogre or Wavefront formats. If you load assets from zip files,
make sure to ammend the build script to copy them to the build
directory.

**Learn more:**

-   [Asset Manager](../jme3/advanced/asset_manager)

What is java.lang.LinkageError: Version mismatch?
-------------------------------------------------

This rare exception shows a message similar to the following:
`Exception in thread "LWJGL" Renderer Thread java.lang.LinkageError: Version mismatch: jar version is (number), native library version is (another number)`.
jME3 needs native libraries (.dll, .jnilib, lib\*.so files) to run LWJGL
and jBullet. The correct versions of these libraries are included when
you install the SDK or download the binaries. However there are
circumstances where jME3 cannot determine which copy of the native
library it should use:

-   If you install another application that needs a different version of
    a native library, and this app globally installs its version over
    jME3's.

-   If an old copy of a native library is in your project directory,
    your home directory, or Java library path, or in the classpath.

-   If you permanently linked an old copy in your IDE's settings.

Java then assumes you prefer these native libraries over the bundled
ones, and your jME3 application ends up running with the wrong version.

To fix this, search for .dll (Windows), .jnilib (Mac), and .so (Linux)
files for jBullet and LWJGL on your harddrive and in your path and IDE
settings, and verify they don't interfere. (If you have other jME
versions installed and linked somehow, the outdated natives may also be
in a lwjgl.jar or jbullet.jar file!)

I want to load my scene
=======================

How do I make objects appear / disappear in the 3D scene?
---------------------------------------------------------

To make a spatial appear in the scene, you attach it to the rootNode (or
to a node that is attached to the rootnode). To remove a spatial, you
detach it from its parent node.

```java
rootNode.attachChild(spatial); // appear in scene
```

```java
rootNode.detachChild(spatial); // remove from scene
```

**Learn more:**

-   [The Scene Graph](../jme3/the_scene_graph)

-   [Hello Node](../jme3/beginner/hello_node)

-   [Hello Asset](../jme3/beginner/hello_asset)

-   [Spatial](../jme3/advanced/spatial)

-   [com.jme3.scene.Node](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-core/src/main/java/com/jme3/scene/Node.java)

-   [com.jme3.scene.Geometry](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-core/src/main/java/com/jme3/scene/Geometry.java)

Why do I get AssetNotFoundException when loading X ?
----------------------------------------------------

First check whether the file path of the asset is correct. By default it
is relative to your project's assets directory:

```java
// To load .../jMonkeyProjects/MyGame/assets/Models/Ninja/Ninja.j3o
Spatial ninja = assetManager.loadModel("Models/Ninja/Ninja.j3o");
```

If you are not using the default `assets` directory, verify that you
have registered a locator to the AssetManager. [Different Locator
types]({link-javadoc}/com/jme3/asset/plugins/package-summary.html) are
available.

```java
this.assetManager.registerLocator("assets/", FileLocator.class); // default
this.assetManager.registerLocator("c:/jme3User/JMEisSoCool/myAwesomeFolder/", FileLocator.class);
this.assetManager.registerLocator("town.zip", ZipLocator.class);
```

Note that you should not register every single folder containing a
texture as the assetmanager will not be able to discern between images
with the same name anymore.

**Learn more:** [Asset Manager](../jme3/advanced/asset_manager)

How do I Create 3-D models, textures, sounds?
---------------------------------------------

Follow our best practices for the [multi-media asset
pipeline](../jme3/intermediate/multi-media_asset_pipeline).\
You create 3-D models in a 3-D mesh editor, for example Blender, and
export it in one of the 3D model [Supported External File
Types](../jme3/features.xml#supported-external-file-types) such as GLTF
(animated objects, scenes) or Wavefront OBJ format (static objects,
scenes). You create textures in a graphic editor, for example Gimp, and
export them as PNG or JPG. You create sounds in an audio editor, for
example, Audacity, and export them as WAVE or OGG.

**Learn more:**

-   [3D Models](../jme3/advanced/3d_models)

-   [Multi-Media Asset
    Pipeline](../jme3/intermediate/multi-media_asset_pipeline)

-   [Creating assets in Blender3D](../jme3/external/blender)

-   [Download Blender](http://blender.org)

-   [Blender intro
    tutorial](http://en.wikibooks.org/wiki/Blender_3D:_Noob_to_Pro)

-   [Comparison of 3D graphic software features
    (Wikipedia)](http://en.wikipedia.org/wiki/Comparison_of_3D_computer_graphics_software#Features).

How do I load a 3-D model into the scene?
-----------------------------------------

Export your model using one of the [Supported External File
Types](../jme3/features.xml#supported-external-file-types) for 3D
models. Convert to .j3o binary format. Load the .j3o file using the
AssetManager.

```java
// To load .../jMonkeyProjects/MyGame/assets/Models/Ninja/Ninja.j3o
Spatial ninja = assetManager.loadModel("Models/Ninja/Ninja.j3o");
```

**Learn more:**

-   [Hello Asset](../jme3/beginner/hello_asset)

-   [Asset Manager](../jme3/advanced/asset_manager)

-   [com.jme3.assets.AssetManager](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-core/src/main/java/com/jme3/asset/AssetManager.java)

-   [com.jme3.scene.Geometry](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-core/src/main/java/com/jme3/scene/Geometry.java)

-   [jMonkeyEngine SDK j3o
    converter](../sdk/model_loader_and_viewer)

**Code sample:**

-   [TestOgreLoading.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/model/TestOgreLoading.java)

-   [TestOgreConvert.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/export/TestOgreConvert.java).

-   [TestGltfLoading.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/2124e3e86bf898d6c7a7bc90a191cf639e39bacb/jme3-examples/src/main/java/jme3test/model/TestGltfLoading.java)

How to initialize the scene?
----------------------------

Use the simpleInitApp() method in SimpleApplication (or initApp() in
Application).

**Learn more:**

-   [Hello
    SimpleApplication](../jme3/beginner/hello_simpleapplication)

-   [SimpleApplication.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-core/src/main/java/com/jme3/app/SimpleApplication.java)

I want to transform objects in the scene
========================================

How do I move or turn or resize a spatial?
------------------------------------------

To move or turn or resize a spatial you use transformations. You can
concatenate transformations (e.g. perform rotations around several axes
in one step using a [Quaternion](../jme3/rotate.html) with `slerp()`
or a com.jme3.math.Transform with interpolateTransforms().

```java
spatial.setLocalTranslation(1,-3,2.5f); spatial.rotate(0,3.14f,0); spatial.scale(2,2,2);
```

**Learn more:**

-   [Hello Node](../jme3/beginner/hello_node)

-   [Spatial](../jme3/advanced/spatial)

-   [math\_for\_dummies](../jme3/math_for_dummies)

How do I make a spatial move by itself?
---------------------------------------

Change the geometry's translation (position) live in the update loop
using setLocalTranslation() for non-physical and applyForce() or
setWalkDirection() for physical objects. You can also define and
remote-control a spatial's motion using
[Cinematics](../jme3/advanced/cinematics), e.g. to record cutscenes,
or to implement mobile platforms, elevators, airships, etc.

**Learn more:**

-   [Hello Loop](../jme3/beginner/hello_main_event_loop)

-   [Update Loop](../jme3/advanced/update_loop)

-   [Custom Controls](../jme3/advanced/custom_controls)

-   [Cinematics](../jme3/advanced/cinematics)

**Code sample:**

-   [TestBumpModel.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/material/TestBumpModel.java)

-   [TestOgreLoading.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/model/TestOgreLoading.java)

How do I access a named sub-mesh in Model?
------------------------------------------

```java
Geometry submesh = (Geometry) model.getChild("door 12");
```

**Learn more:**

-   [Spatial](../jme3/advanced/spatial)

How do I make procedural or custom shapes?
------------------------------------------

You can programmatically create com.jme3.scene.Mesh'es.

**Learn more:**

-   [Custom Meshes](../jme3/advanced/custom_meshes)

I want to change the surface of objects in the scene
====================================================

Why is my UV wrapping / texture appearance all wrong?
-----------------------------------------------------

The most likely reason is the flipping of textures. You may be using the
following default method:

```java
material.setTexture("ColorMap", assetManager.loadTexture("myTexture.jpg"));
```

You can set the boolean value in the constructor of TextureKey to
flipped or not flipped. Toggle the boolean to see if it fixes your UV
wrapping/texture problem:

```java
material.setTexture("ColorMap", this.assetManager.loadTexture(new TextureKey("myTexture.jpg", false)));
```

How do I scale, mirror, or wrap a texture?
------------------------------------------

You cannot scale a texture, but you scale the texture coordinates of the
mesh the texture is applied to:

```java
mesh.scaleTextureCoordinates(new Vector2f(2,2));
```

You can choose among various `com.jme3.texture.Texture.WrapMode`s for
individual texture maps of a material: BorderClamp, EdgeClamp, Clamp;
MirrorBorderClamp, MirrorEdgeClamp, MirrorClamp; Repeat, MirroredRepeat.

```java
material.getTextureParam("DiffuseMap").getTextureValue().setWrap(WrapMode.Repeat);
```

How do I change color or shininess of an material?
--------------------------------------------------

Use the AssetManager to load Materials, and change material settings.

**Learn more:**

-   [Hello Material](../jme3/beginner/hello_material)

-   [How To Use
    Materials](../jme3/intermediate/how_to_use_materials)

-   [Materials Overview](../jme3/advanced/materials_overview),
    [Asset Manager](../jme3/advanced/asset_manager).

**Code sample:**

-   [TestNormalMapping.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/material/TestNormalMapping.java)

-   [TestSphere.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/model/shape/TestSphere.java).

How do I make a surface wood, stone, metal, etc?
------------------------------------------------

Create Textures as image files. Use the AssetManager to load a Material
and use texture mapping for improved looks.

**Learn more:**

-   [Hello Material](../jme3/beginner/hello_material)

-   [How To Use
    Materials](../jme3/intermediate/how_to_use_materials)

-   [Materials Overview](../jme3/advanced/materials_overview)

-   [Asset Manager](../jme3/advanced/asset_manager)

-   [com.jme3.assets.AssetManager](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-core/src/main/java/com/jme3/asset/AssetManager.java)

-   [Blender: Creating Bump Maps and Normal
    Maps](http://wiki.blender.org/index.php/Doc:Manual/Textures/Maps/Bump_and_Normal_Maps)

**Code sample:**

[TestSimpleBumps.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/material/TestSimpleBumps.java)

Why are materials too bright, too dark, or flickering?
------------------------------------------------------

If you use a lit material (based on Lighting.j3md) then you must attach
a light source to the rootNode, otherwise you see nothing. If you use
lit material colors, make sure you have specified an Ambient color (can
be the same as the Diffuse color) if you use an AmbientLight. If you see
objects, but they are gray or too dark, set the light color to white, or
make it brighter (you can multiply the color value with a scalar), or
add a global white light source (AmbientLight). Similarly, if everything
is too white, tune down the lights. If materials flicker under a
directional light, change the light direction vector. Change the
background color (which is independent of light sources) to get a better
contrast while debugging a light problem.

How do I make geometries cast a shadow?
---------------------------------------

Use com.jme3.shadow.BasicShadowRenderer together with
com.jme3.light.DirectionalLight, and setShadowMode().

**Learn more:**

-   [Light and Shadow](../jme3/advanced/light_and_shadow)

**Code sample:**

-   [TestEverything.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/effect/TestEverything.java)

-   [TestShadow.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/light/TestShadow.java)

How do I make materials transparent?
------------------------------------

Assign a texture with an alpha channel to a Material and set the
Material's blend mode to alpha. Use this to create transparent or
translucent materials such as glass, window panes, water, tree leaves,
etc.

```java
material.getAdditionalRenderState().setBlendMode(BlendMode.Alpha);
```

**Learn more:**

-   [Hello Material](../jme3/beginner/hello_material)

-   [How To Use
    Materials](../jme3/intermediate/how_to_use_materials)

How do I force or disable culling?
----------------------------------

While debugging custom meshes, you can switch the
`com.jme3.material.RenderState.FaceCullMode` off to see the inside and
outside of the mesh.

```java
someMaterial.getAdditionalRenderState().setFaceCullMode(FaceCullMode.Off);
```

You can also deactivate the `com.jme3.scene.Spatial.CullHint` of a whole
spatial to force jme to calculate it even if it is behind the camera and
outside of view.

```java
someNode.setCullHint(CullHint.Never);
```

**Learn more:**

-   [Spatial](../jme3/advanced/spatial)

Can I draw only an outline of the scene?
----------------------------------------

Add a renders state to the material's and activate `Wireframe`.

```java
material.getAdditionalRenderState().setWireframe(true);
```

**Learn more:**

-   [Debugging](../jme3/advanced/debugging).

I want to control the camera
============================

The default camera `cam` is an instance of the `Camera` class.

**Learn more:**

-   [com.jme3.renderer.Camera](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-core/src/main/java/com/jme3/renderer/Camera.java)

How do I keep the camera from moving?
-------------------------------------

SimpleApplication activates `flyCam` (an instance of `FlyByCamera`) by
default. `flyCam` causes the camera to move with the mouse and the WASD
keys. You can disable flyCam as follows:

```java
flyCam.setEnabled(false);
```

How do I switch between third-person and first-person view ?
------------------------------------------------------------

You can activate the FlyBy Cam as a first-person camera.

```java
flyCam.setEnabled(true);
```

**Learn more:**

-   [Hello Collision](../jme3/beginner/hello_collision)

**Code sample:**

-   [com.jme3.input.FlyByCamera](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-core/src/main/java/com/jme3/input/FlyByCamera.java)

You can also create a third-person chase cam.

```java
flyCam.setEnabled(false);
chaseCam = new ChaseCamera(cam, spatial, inputManager);
```

**Learn more:**

-   [com.jme3.input.ChaseCamera](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-core/src/main/java/com/jme3/input/ChaseCamera.java)

**Code sample:**

[jme3test/input/TestChaseCamera.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/input/TestChaseCamera.java)

How do I increase camera speed?
-------------------------------

```java
flyCam.setMoveSpeed(50f);
```

Actions, Interactions, Physics
==============================

How do I implement game logic / game mechanics?
-----------------------------------------------

Use Controls to define the behaviour of types of Spatials. Use
Application States to implement global behaviour, to group subsets of
input handlers or GUI screens, etc. Use the `simpleUpdate()` and
`update()` loops for tests and interactions. Use Cinematics to
remote-control objects in scenes.

**Learn more:**

-   [Hello Loop](../jme3/beginner/hello_main_event_loop)

-   [Update Loop](../jme3/advanced/update_loop)

-   [Custom Controls](../jme3/advanced/custom_controls)

-   [Application States](../jme3/advanced/application_states)

-   [Cinematics](../jme3/advanced/cinematics)

How do I let players interact via keyboard?
-------------------------------------------

Use com.jme3.input.KeyInput and a Input Listener.

**Learn more:**

-   [Hello Input](../jme3/beginner/hello_input_system)

-   [Input Handling](../jme3/advanced/input_handling)

How do I let players interact by clicking?
------------------------------------------

Players typically click the mouse to pick up objects, to open doors, to
shoot a weapon, etc. Use an Input Listener to respond to mouse clicks,
then cast a ray from the player; if it intersects with the bounding
volume of a spatial, this is the selected target. The links below
contain code samples for both `fixed` crosshair picking and `free` mouse
pointer picking.

**Learn more:**

-   [Hello Picking](../jme3/beginner/hello_picking)

-   [Mouse Picking](../jme3/advanced/mouse_picking)

-   [Collision and
    Intersection](../jme3/advanced/collision_and_intersection)

-   [Input Handling](../jme3/advanced/input_handling)

-   [com.jme3.bounding.](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-core/src/main/java/com/jme3/bounding)

-   [com.jme3.math.Ray.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-core/src/main/java/com/jme3/math/Ray.java)

-   [com.jme3.collision.CollisionResults.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-core/src/main/java/com/jme3/math/Ray.java)

**Code sample:**

-   [TestRayCollision.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/bounding/TestRayCollision.java)

How do I animate characters?
----------------------------

Create an animated OgreMesh model with bones in a 3-D mesh editor (e.g.
Blender).

**Learn more:**

-   [com.jme3.animation.](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-core/src/main/java/com/jme3/animation)

-   [Hello Animation](../jme3/beginner/hello_animation)

-   [Animation](../jme3/advanced/animation)

-   [Blender animation
    tutorial](http://wiki.blender.org/index.php/Doc:Tutorials/Animation/BSoD/Character_Animation)

**Code sample:**

-   [animation](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/model/anim)

How do I keep players from falling through walls and floors?
------------------------------------------------------------

Use collision detection. The most common solution is to use jme's
physics integration, jBullet.

**Learn more:**

-   [Hello Collision](../jme3/beginner/hello_collision)

-   [Physics](../jme3/advanced/physics)

-   [com.jme3.bullet.](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-bullet/src/common/java/com/jme3/bullet)

-   CapsuleCollisionShape versus CompoundCollisionShape,
    CharacterControl versus RigidBodyControl.

How do I make balls/wheels/etc bounce and roll?
-----------------------------------------------

Add physics controls to Spatials and give them spherical or cylindrical
bounding volumes.

**Learn more:**

-   [Hello Physics](../jme3/beginner/hello_physics)

-   [Physics](../jme3/advanced/physics)

-   [com.jme3.bounding.](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-core/src/main/java/com/jme3/bounding)

-   [com.jme3.bullet.collisions](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-bullet/src/main/java/com/jme3/bullet/collision)

-   [com.jme3.bullet.control.RigidBodyControl.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-bullet/src/common/java/com/jme3/bullet/control/RigidBodyControl.java)

**Code sample:**

-   [TestSimplePhysics.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/bullet/TestSimplePhysics.java)

-   [more physics
    samples](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/bullet)

How do I debug weird Physics behaviour?
---------------------------------------

Maybe your collision shapes overlap -- or they are not where you think
they are. Make the collision shapes visible by adding the following line
after the bulletAppState initialization:

```java
bulletAppState.getPhysicsSpace().enableDebug(assetManager);
```

How do I make a walking character?
----------------------------------

You can use jBullet's CharacterControl that locks a physical object
upright, so it does not tip over when moving/walking (as tall physical
objects are typically wanted to).

**Learn more:**

-   [BetterCharacterControl](../jme3/advanced/walking_character.xml#bettercharactercontrol)

**Code Sample:**

-   [TestQ3.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/bullet/TestQ3.java)
    (first-person)

-   [TestPhysicsCharacter.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/bullet/TestPhysicsCharacter.java)
    (third-person)

How do I steer vehicles?
------------------------

Use a VehicleControl that supports suspension behavior.

**Learn more:**

-   [Vehicles](../jme3/advanced/vehicles)

-   [com.jme3.bullet.control.VehicleControl](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-bullet/src/common/java/com/jme3/bullet/control/)

**Code Sample:**

-   [TestFancyCar.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/bullet/TestFancyCar.java)
    (Press HUJK keys to steer, spacebar to jump.)

Can objects swing like a pendulums, chains, ropebridges?
--------------------------------------------------------

Use a PhysicsControl's hinges and joints.

**Learn more:**

-   [Hinges and Joints](../jme3/advanced/hinges_and_joints)

-   [TestPhysicsHingeJoint.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/bullet/TestPhysicsHingeJoint.java)
    (Press HK keys to turn, spacebar to swing.)

Default GUI Display
===================

What are these FPS/Objects/Vertices/Triangles statistics?
---------------------------------------------------------

At the bottom left of every default SimpleGame, you see the
[StatsView](../jme3/advanced/statsview) and the FPS (frames per
seconds) view. These views provide you with extra information during the
development phase. For example, if you notice the object count is
increasing and the FPS is decreasing, then you know that your code
attaches too many objects and does not detach enough of them again
(maybe a loop gone wild?).

**Learn more:**

-   [StatsView](../jme3/advanced/statsview)

How do I get rid of the FPS/Objects statistics?
-----------------------------------------------

In the application's simpleInitApp() method, call:

    setDisplayFps(false); // to hide the FPS
    setDisplayStatView(false); // to hide the statistics

How do I display score, health, mini-maps, status icons?
--------------------------------------------------------

Attach text and pictures to the orthogonal `guiNode` to create a
heads-up display
([HUD](http://en.wikipedia.org/wiki/HUD_%28video_gaming%29)).

**Learn more:**

-   [HUD](../jme3/advanced/hud)

-   [com.jme3.font.](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-core/src/main/java/com/jme3/font)

-   [com.jme3.ui.Picture](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-core/src/main/java/com/jme3/ui/Picture.java)
    guiNode.attachChild()

**Code Sample:**

-   [TestOrtho.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/gui/TestOrtho.java)

-   [TestBitmapFont.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/gui/TestBitmapFont.java)

How do I display buttons and UI controls?
-----------------------------------------

You may want to display buttons to let the player switch between the
game, settings screen, and score screens. For buttons and other more
advanced UI controls, jME supports the Nifty GUI library.

**Learn more:**

-   [Nifty GUI](../jme3/advanced/nifty_gui)

**Code Sample:**

-   [TestNiftyGui.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/niftygui/TestNiftyGui.java)

How do i display a loading screen?
----------------------------------

Instead of having a frozen frame while your games loads, you can have a
loading screen while it loads.

**Learn more:**

-   [Loading screen](../jme3/advanced/loading_screen)

Nifty GUI
=========

I get NoSuchElementException when adding controls (buttons etc)!
----------------------------------------------------------------

Verify that you include a controls definition file link in your XML:
This is the default:

``` {.xml}
<useControls filename="nifty-default-controls.xml"/>
```

Where can I find example code of Nifty GUI's XML and Java classes?
------------------------------------------------------------------

<http://nifty-gui.svn.sourceforge.net/viewvc/nifty-gui/nifty-examples/trunk/src/main/>

Is there Java Doc for Nifty GUI?
--------------------------------

[Nifty GUI 1.3 Java
docs](../jme3/advanced/nifty_gui_java_interaction.xml#useful_links)

I want to create an environment with sounds, effects, and landscapes
====================================================================

How do I play sounds and noises?
--------------------------------

Use AudioRenderer, Listener, and AudioNode from com.jme3.audio..

**Learn more:**

-   [Hello Audio](../jme3/beginner/hello_audio)

-   [Audio](../jme3/advanced/audio)

**Code sample:**

-   [audio](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/audio)

How do I make fire, smoke, explosions, swarms, magic spells?
------------------------------------------------------------

For swarm like effects you use particle emitters.

**Learn more:**

-   [Hello Effects](../jme3/beginner/hello_effects)

-   [Particle Emitters](../jme3/advanced/particle_emitters)

-   [Bloom and Glow](../jme3/advanced/bloom_and_glow)

-   [Effects Overview](../jme3/advanced/effects_overview)

-   [com.jme3.effect.EmitterSphereShape.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-core/src/main/java/com/jme3/effect/shapes/EmitterSphereShape.java)

-   [com.jme3.effect.ParticleEmitter.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-core/src/main/java/com/jme3/effect/ParticleEmitter.java)

**Code sample:**

-   [TestExplosionEffect.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/effect/TestExplosionEffect.java)

-   [TestMovingParticle.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/effect/TestMovingParticle.java)

-   [TestSoftParticle.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/effect/TestSoftParticles.java)

How do I make water, waves, reflections?
----------------------------------------

Use a special post-processor renderer from com.jme3.water..

**Learn more:**

-   [Water](../jme3/advanced/water)

-   [Post-Processor Water](../jme3/advanced/post-processor_water)

**Code sample:**

-   [TestSimpleWater.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/water/TestSimpleWater.java)

-   [TestSceneWater.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/water/TestSceneWater.java)

-   [TestPostWaterLake.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/water/TestPostWaterLake.java)

-   [TestPostWater.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/water/TestPostWater.java)

How do I make fog, bloom, blur, light scattering?
-------------------------------------------------

Use special post-processor renderers from com.jme3.post..

**Learn more:**

-   [Effects Overview](../jme3/advanced/effects_overview)

How do I generate a terrain?
----------------------------

Use com.jme3.terrain.. The JMonkeyEngine also provides you with a
Terrain Editor plugin.

**Learn more:**

-   [Hello Terrain](../jme3/beginner/hello_terrain)

-   [Terrain](../jme3/advanced/terrain)

-   [Terrain Editor](../sdk/terrain_editor)

**Code sample:**

-   [TerrainTest.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/terrain/TerrainTest.java)

How do I make a sky?
--------------------

**Code sample:**

-   [TestSkyLoading.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/texture/TestSkyLoading.java)

```java
rootNode.attachChild(SkyFactory.createSky( assetManager,
       "Textures/Sky/Bright/BrightSky.dds", false));
skyGeo.setQueueBucket(Bucket.Sky)
```

**Learn more:**

-   [Sky](../jme3/advanced/sky)

I want to access to back-end properties
=======================================

How do I read out graphic card capabilities?
--------------------------------------------

If your game is heavily using features that older cards do not support,
you can [Read Graphic Card
Capabilites](../jme3/advanced/read_graphic_card_capabilites) in the
beginning before starting the app, and then decide how to proceed.

```java
Collection<com.jme3.renderer.Caps> caps = renderer.getCaps();
Logger.getLogger(HelloJME3.class.getName()).log(Level.INFO, "Capabilities: {0}", caps.toString());
```

How do I Run jMonkeyEngine 3 with OpenGL1?
------------------------------------------

In your game, add

```java
settings.setRenderer(AppSettings.LWJGL_OPENGL1)
```

to the [AppSettings](../jme3/intermediate/appsettings) (see details
there).\
For the jMonkeyEngine SDK itself, choose Options \> OpenGL, and check
OpenGL1.

How do I optimize the heck out of the Scene Graph?
--------------------------------------------------

You can batch all Geometries in a scene (or a subnode) that remains
static.

```java
jme3tools.optimize.GeometryBatchFactory.optimize(rootNode);
```

Batching means that all Geometries with the same Material are combined
into one mesh. This optimization only has an effect if you use only few
(roughly up to 32) Materials total. The pay-off is that batching takes
extra time when the game is initialized.

How do I prevent users from unzipping my JAR?
---------------------------------------------

Add an [obfuscator to the Ant
script](http://netbeans.dzone.com/tips/obfuscating-netbeans-java-appl).
The SDK comes with a basic obfuscation script that you can enable in the
project settings.

I want to do maths
==================

What does addLocal() / multLocal() etc mean?
--------------------------------------------

Many maths functions (mult(), add(), subtract(), etc) come as local and
a non-local variant (multLocal(), addLocal(), subtractLocal(), etc).

1.  Non-local means a new independent object is created (similar to
    clone()) as a return value. Use non-local methods if you want to
    keep using the old value of the object calling the method.

    -   Example 1: `Quaternion q1 = q2.mult(q3);`

        -   Returns the result as a new
            [Quaternion](../jme3/rotate.html) q1.

        -   The involved objects q2 and q3 stay as they are and can be
            reused.

    -   Example 2: `v.mult(b).add(b);`

        -   **Watch out:** This calculates the expected result, but
            unless you actually use the return value, it is discarded!

2.  Local means that no new objects are created, instead, the calling
    object is modified. Use this if you are sure you no longer need the
    old value of the calling object.

    -   Example 1: `q2.multLocal(q3)`

        -   Calculates q2\*q3 without creating temp objects.

        -   The result is stored in the calling object q2. The old value
            of q2 is gone.

        -   Object q3 stays as it was.

    -   Example 2: `v.multLocal(a).addLocal(b);`

        -   Calculates the expected result without creating temp
            objects.

        -   The result is stored in the calling object v. The old value
            of v is gone.

        -   The objects a and b stay as they were.

What is the difference between World and Local coordinates?
-----------------------------------------------------------

World coordinates of a Spatial are its absolute coordinates in the 3D
scene (this is like giving GPS coordinates). Local coordinates are
relative to the Spatial's parent Spatial (this is like saying,
`I’m ten meters left of the entrance`).

How do I convert Degrees to Radians?
------------------------------------

Multiply degree value by FastMath.DEG\_TO\_RAD to convert it to radians.

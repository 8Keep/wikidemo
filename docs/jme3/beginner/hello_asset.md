Previous: [Hello Node](../../jme3/beginner/hello_node), Next: [Hello
Update Loop](../../jme3/beginner/hello_main_event_loop)

In this tutorial we will learn to load 3D models and text into the scene
graph, using the jME [Asset
Manager](../../jme3/advanced/asset_manager). You will also learn how
to determine the correct paths, and which file formats to use.

![beginner-assets-models.png](/images/jme3/beginner/beginner-assets-models.png)

:::note
[Trouble finding the files to run this
sample?](../../sdk/sample_code) To get the assets (3D models) used
in this example, add the included `jME3-testdata.jar` to your classpath.
In project created with the jMonkeyEngine SDK (recommended), simply
right-click your project, choose "Properties", go to "Libraries", press
"Add Library" and add the preconfigured "jme3-test-data" library.
:::

Code Sample
===========

```java
package jme3test.helloworld;

import com.jme3.app.SimpleApplication;
import com.jme3.font.BitmapText;
import com.jme3.light.DirectionalLight;
import com.jme3.material.Material;
import com.jme3.math.Vector3f;
import com.jme3.scene.Geometry;
import com.jme3.scene.Spatial;
import com.jme3.scene.shape.Box;

/** Sample 3 - how to load an OBJ model, and OgreXML model,
 * a material/texture, or text. */
public class HelloAssets extends SimpleApplication {

    public static void main(String[] args) {
        HelloAssets app = new HelloAssets();
        app.start();
    }

    @Override
    public void simpleInitApp() {

        Spatial teapot = assetManager.loadModel("Models/Teapot/Teapot.obj");
        Material mat_default = new Material(
            assetManager, "Common/MatDefs/Misc/ShowNormals.j3md");
        teapot.setMaterial(mat_default);
        rootNode.attachChild(teapot);

        // Create a wall with a simple texture from test_data
        Box box = new Box(2.5f,2.5f,1.0f);
        Spatial wall = new Geometry("Box", box );
        Material mat_brick = new Material(
            assetManager, "Common/MatDefs/Misc/Unshaded.j3md");
        mat_brick.setTexture("ColorMap",
            assetManager.loadTexture("Textures/Terrain/BrickWall/BrickWall.jpg"));
        wall.setMaterial(mat_brick);
        wall.setLocalTranslation(2.0f,-2.5f,0.0f);
        rootNode.attachChild(wall);

        // Display a line of text with a default font
        guiNode.detachAllChildren();
        guiFont = assetManager.loadFont("Interface/Fonts/Default.fnt");
        BitmapText helloText = new BitmapText(guiFont, false);
        helloText.setSize(guiFont.getCharSet().getRenderedSize());
        helloText.setText("Hello World");
        helloText.setLocalTranslation(300, helloText.getLineHeight(), 0);
        guiNode.attachChild(helloText);

        // Load a model from test_data (OgreXML + material + texture)
        Spatial ninja = assetManager.loadModel("Models/Ninja/Ninja.mesh.xml");
        ninja.scale(0.05f, 0.05f, 0.05f);
        ninja.rotate(0.0f, -3.0f, 0.0f);
        ninja.setLocalTranslation(0.0f, -5.0f, -2.0f);
        rootNode.attachChild(ninja);
        // You must add a light to make the model visible
        DirectionalLight sun = new DirectionalLight();
        sun.setDirection(new Vector3f(-0.1f, -0.7f, -1.0f));
        rootNode.addLight(sun);

    }
}
```

Build and run the code sample. You should see a green Ninja with a
colorful teapot standing behind a wall. The text on the screen should
say "Hello World".

The Asset Manager
=================

**By game assets we mean all multi-media files, such as models,
materials, textures, whole scenes, custom shaders, music and sound
files, and custom fonts.** JME3 comes with a handy AssetManager object
that helps you access your assets. The AssetManager can load files from:

-   The current classpath (the top level of your project directory).

-   The sub-folders of the `assets` directory of your project.

-   Optionally, custom paths that you register.

The following is the recommended directory structure for storing assets
in your project directoy:

    MyGame/assets/
    MyGame/assets/Interface/
    MyGame/assets/MatDefs/
    MyGame/assets/Materials/
    MyGame/assets/Models/       <-- your .j3o models go here
    MyGame/assets/Scenes/
    MyGame/assets/Shaders/
    MyGame/assets/Sounds/       <-- your audio files go here
    MyGame/assets/Textures/     <-- your textures go here
    MyGame/build.xml            <-- Default Ant build script
    MyGame/src/...              <-- your Java sources go here
    MyGame/...

This is just a suggested best practice, and it's what you get by default
when creating a new Java project in the jMokeyEngine
[SDK](../../sdk). You can create an `assets` directory and
technically name the subdirectories whatever you like.

::: {.important}
When you build your project for distribution, there will be no `assets`
directory. Instead, you will generate an `assets.jar` file, located in
the `dist/lib` folder of your project that will contain the sub-folders
of the `assets` directory and all the assets in those folders.
:::

Loading Textures
----------------

Place your textures in a subdirectory of `assets/Textures/`. Load the
texture into the material before you set the Material. The following
code sample is from the `simpleInitApp()` method and loads a simple wall
model:

```java
// Create a wall with a simple texture from test_data
Box box = new Box(2.5f,2.5f,1.0f);
Spatial wall = new Geometry("Box", box );
Material mat_brick = new Material(
    assetManager, "Common/MatDefs/Misc/Unshaded.j3md");
mat_brick.setTexture("ColorMap",
    assetManager.loadTexture("Textures/Terrain/BrickWall/BrickWall.jpg"));
wall.setMaterial(mat_brick);
wall.setLocalTranslation(2.0f,-2.5f,0.0f);
rootNode.attachChild(wall);
```

In this case, you [create your own
Material](../../jme3/beginner/hello_material) and apply it to a
Geometry. You base Materials on default material descriptions (such as
"Unshaded.j3md"), as shown in this example.

Loading Text and Fonts
----------------------

This example displays the text "Hello World" in the default font at the
bottom edge of the window. You attach text to the `guiNode` -- this is a
special node for flat (orthogonal) display elements. You display text to
show the game score, player health, etc. The following code sample goes
into the `simpleInitApp()` method.

```java
// Display a line of text with a default font
guiNode.detachAllChildren();
guiFont = assetManager.loadFont("Interface/Fonts/Default.fnt");
BitmapText helloText = new BitmapText(guiFont, false);
helloText.setSize(guiFont.getCharSet().getRenderedSize());
helloText.setText("Hello World");
helloText.setLocalTranslation(300, helloText.getLineHeight(), 0);
guiNode.attachChild(helloText);
```

:::note
Clear existing text in the guiNode by detaching all its children.
:::

Loading a Model
---------------

Export your 3D model in a [Supported External File
Type](../../jme3/features.xml#supported-external-file-types) (.mesh.xml,
.scene, .material, .skeleton.xml, .gltf) and place it in a subdirectory
of `assets/Models/`. The following code sample goes into the
`simpleInitApp()` method.

```java
// Load a model from test_data (OgreXML + material + texture)
Spatial ninja = assetManager.loadModel("Models/Ninja/Ninja.mesh.xml");
ninja.scale(0.05f, 0.05f, 0.05f);
ninja.rotate(0.0f, -3.0f, 0.0f);
ninja.setLocalTranslation(0.0f, -5.0f, -2.0f);
rootNode.attachChild(ninja);
// You must add a directional light to make the model visible!
DirectionalLight sun = new DirectionalLight();
sun.setDirection(new Vector3f(-0.1f, -0.7f, -1.0f).normalizeLocal());
rootNode.addLight(sun);
```

:::note
You do not need to create a Material if you exported the model with a
material. Remember to add a light source, as shown, otherwise the
material (and the whole model) is not visible!
:::

Loading Assets From Custom Paths
--------------------------------

What if your game relies on user supplied model files, that are not
included in the distribution? If a file is not located in the default
location (e.g. assets directory), you can register a custom Locator and
load it from any path.

Here is a usage example of a ZipLocator that is registered to a file
`town.zip` in the top level of your project directory:

```java
    assetManager.registerLocator("town.zip", ZipLocator.class);
    Spatial scene = assetManager.loadModel("main.scene");
    rootNode.attachChild(scene);
```

Here is a HttpZipLocator that can download zipped models and load them:

```java
    assetManager.registerLocator("https://storage.googleapis.com/"
            + "google-code-archive-downloads/v2/code.google.com/"
            + "jmonkeyengine/wildhouse.zip", HttpZipLocator.class);
    Spatial scene = assetManager.loadModel("main.scene");
    rootNode.attachChild(scene);
```

JME3 offers ClasspathLocator, ZipLocator, FileLocator, HttpZipLocator,
and UrlLocator (see `com.jme3.asset.plugins`).

Creating Models and Scenes
==========================

To create 3D models and scenes, you need a 3D Mesh Editor. If you don't
have any tools, install Blender. Then you [create fully textured models
(e.g. with
Blender)](http://en.wikibooks.org/wiki/Blender_3D:_Noob_to_Pro/UV_Map_Basics),
export them to your project using a [Supported External File
Type](../../jme3/features.xml#supported-formats), [convert
models](../../jme3/features.xml#supported-external-file-types) to `.j3o`
using the recommended method for your chosen file type, [load
models](../../jme3/beginner/hello_asset.xml#loading-models-and-scenes),
and create 3D scenes from them.

Model File Formats
------------------

JME3 can convert and load

-   Ogre XML models + materials.

-   Ogre DotScenes.

-   Wavefront OBJ + MTL models.

-   .gltf

The `loadModel()` method loads these original file formats when you run
your code directly from the SDK. If you however build the executables
using the default build script, then the original model files (XML, OBJ,
etc) *are not included*. This means, when you run the executable outside
the SDK, and load any original models directly, you get the following
error message:

    com.jme3.asset.DesktopAssetManager loadAsset
    WARNING: Cannot locate resource: Models/Ninja/Ninja.mesh.xml
    com.jme3.app.Application handleError
    SEVERE: Uncaught exception thrown in Thread[LWJGL Renderer Thread,5,main]
    java.lang.NullPointerException

You see that loading the **XML/OBJ/GLTF** directly is only acceptable
during the development phase in the SDK. For example, every time your
graphic designer pushes updated files to the asset directory, you can
quickly review the latest version in your development environment.

But for QA test builds and for the final release build, you use **.j3o
files** exclusively. J3o is an optimized binary format for jME3
applications. When you do QA test builds, or are ready to release, use
the [SDK](../../sdk) to
[convert](../../sdk/model_loader_and_viewer) all
.obj/.scene/.xml/.gltf files to .j3o files, and update all code to load
the .j3o files. The default build script automatically packages .j3o
files in the executables.

Open your JME3 Project in the jMonkeyEngine SDK.

1.  Right-click a .OBJ, GLTF, or .mesh.xml file in the Projects window,
    and choose "Convert to j3o Binary".

2.  The .j3o file appears next to the .mesh.xml file and has the same
    name.

3.  Update all your `loadModel()` lines accordingly. For example:

    ```java
    Spatial ninja = assetManager.loadModel("Models/Ninja/Ninja.j3o");
    ```

:::note
If your executable throws a "Cannot locate resource" runtime exception,
check all load paths and make sure you have converted all models to .j3o
files!
:::

Loading Models and Scenes
-------------------------

+---------+------------------------------------------------------------+
| Task?   | Solution!                                                  |
+=========+============================================================+
| Load    | Use the asset manager's `loadModel()` method and attach    |
| model   | the Spatial to the rootNode.                               |
| W/      |                                                            |
| mat     | ```java                                                |
| erials. | Spatial elephant = as                                      |
|         | setManager.loadModel("Models/Elephant/Elephant.mesh.xml"); |
|         | rootNode.attachChild(elephant);                            |
|         | ```                                                        |
|         |                                                            |
|         | ```java                                                |
|         | Spatial elephant                                           |
|         |  = assetManager.loadModel("Models/Elephant/Elephant.j3o"); |
|         | rootNode.attachChild(elephant);                            |
|         | ```                                                        |
+---------+------------------------------------------------------------+
| Load    | If you have a model without materials, you have to give it |
| model   | a material to make it visible.                             |
| W/O     |                                                            |
| mat     | ```java                                                |
| erials. | Spatial te                                                 |
|         | apot = assetManager.loadModel("Models/Teapot/Teapot.j3o"); |
|         | Material mat = new Material(assetManager, "C               |
|         | ommon/MatDefs/Misc/ShowNormals.j3md"); // default material |
|         | teapot.setMaterial(mat);                                   |
|         | rootNode.attachChild(teapot);                              |
|         | ```                                                        |
+---------+------------------------------------------------------------+
| Load a  | You load scenes just like you load models:                 |
| scene.  |                                                            |
|         | ```java                                                |
|         | Spatial                                                    |
|         |  scene = assetManager.loadModel("Scenes/town/main.scene"); |
|         | rootNode.attachChild(scene);                               |
|         | ```                                                        |
|         |                                                            |
|         | ```java                                                |
|         | Spati                                                      |
|         | al scene = assetManager.loadModel("Scenes/town/main.j3o"); |
|         | rootNode.attachChild(scene);                               |
|         | ```                                                        |
+---------+------------------------------------------------------------+

Excercise - How to Load Assets
==============================

As an exercise, let's try different ways of loading a scene. You will
learn how to load the scene directly, or from a zip file.

Remember that there will be no `assets` folder in a final deployment. If
you are going to use a zip, do not put it in the `assets` folder.
Otherwise, you will likely get errors about a missing file. For final
distribution, add it to your dist folder.

1.  [Download the
    town.zip](https://github.com/jMonkeyEngine/wiki/raw/master/src/docs/resources/Scenes/Town/town.zip)
    sample scene.

2.  Place the town.zip file in the top level directory of your JME3
    project, like so:

        jMonkeyProjects/MyGameProject/assets/
        jMonkeyProjects/MyGameProject/build.xml
        jMonkeyProjects/MyGameProject/src/
        jMonkeyProjects/MyGameProject/town.zip
        ...

    Use the following method to load models from a zip file:

3.  Verify `town.zip` is in the project directory.

4.  Register a zip file locator to the project directory: Add the
    following code under `simpleInitApp()`.

    ```java
        assetManager.registerLocator("town.zip", ZipLocator.class);
        Spatial gameLevel = assetManager.loadModel("main.scene");
        gameLevel.setLocalTranslation(0, -5.2f, 0);
        gameLevel.setLocalScale(2);
        rootNode.attachChild(gameLevel);
    ```

    The loadModel() method now searches this zip directly for the files
    to load.\
    (This means, do not write `loadModel(town.zip/main.scene)` or
    similar!)

5.  Clean, build and run the project.\
    You should now see the Ninja+wall+teapot standing in a town.

:::note
If you register new locators, make sure you do not get any file name
conflicts: Don't name all scenes `main.scene` but give each scene a
unique name.
:::

Earlier in this tutorial, you loaded scenes and models from the asset
directory. This is the most common way you will be loading scenes and
models. Here is the typical procedure:

1.  Remove the code that you added for the previous exercise.

2.  Unzip the town.zip to see the structure of the contained Ogre
    dotScene: You will get a directory named `town`. It contains XML,
    texture files, and a file called main.scene.

3.  Move the unzipped `town/` directory into the `assets/Scenes/`
    directory of your project.

4.  Add the following code under `simpleInitApp()`.

    ```java
        Spatial gameLevel = assetManager.loadModel("Scenes/town/main.scene");
        gameLevel.setLocalTranslation(0, -5.2f, 0);
        gameLevel.setLocalScale(2);
        rootNode.attachChild(gameLevel);
    ```

    Note that the path is relative to the `assets/…` directory.

5.  Clean, build and run the project.\
    Again, you should see the Ninja+wall+teapot standing in a town.

Here is a third method you must know, loading a scene/model from a .j3o
file:

1.  Remove the code from the previous exercise.

2.  If you haven't already, open the [SDK](../../sdk) and open the
    project that contains the HelloAsset class.

3.  In the projects window, browse to the `assets/Scenes/town`
    directory.

4.  Right-click the `main.scene` and convert the scene to binary: The
    jMonkeyPlatform generates a main.j3o file.

5.  Add the following code under `simpleInitApp() {`

    ```java
        Spatial gameLevel = assetManager.loadModel("Scenes/town/main.j3o");
        gameLevel.setLocalTranslation(0, -5.2f, 0);
        gameLevel.setLocalScale(2);
        rootNode.attachChild(gameLevel);
    ```

    Again, note that the path is relative to the `assets/…` directory.

6.  Clean, Build and run the project.\
    Again, you should see the Ninja+wall+teapot standing in a town.

Conclusion
==========

Now you know how to populate the scenegraph with static shapes and
models, and how to build scenes. You have learned how to load assets
using the `assetManager` and you have seen that the paths start relative
to your project directory. Another important thing you have learned is
to convert models to .j3o format for the executable JARs etc.

Let's add some action to the scene and continue with the [Update
Loop](../../jme3/beginner/hello_main_event_loop)!

**See also:**

-   [The definitive Blender import
    tutorial](../../jme3/external/blender)

-   [Asset pipeline
    introduction](../../jme3/intermediate/multi-media_asset_pipeline)

-   If you want to learn how to load sounds, see [Hello
    Audio](../../jme3/beginner/hello_audio)

-   If you want to learn more about loading textures and materials, see
    [Hello Material](../../jme3/beginner/hello_material)

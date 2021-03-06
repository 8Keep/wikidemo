Although we recommend the jMonkeyEngine [SDK](../sdk) for developing
JME3 games, you can use any IDE (integrated development environment)
such as [NetBeans](../jme3/setting_up_netbeans_and_jme3) or
[Eclipse](../jme3/setting_up_jme3_in_eclipse), and even work freely
from the command-line. Here is a generic IDE-independent "getting
started" tutorial.

Installing the JME3 Framework
=============================

There are many ways to install the JME framework from the command-line,
but for this tutorial we will narrow it down to two, the easy way and
the hard way.

Installing with Git (easy way)
==============================

You can build JME3 from the sources. (Recommended for JME3 developers.)
This example expects [Git](https://help.github.com/articles/set-up-git/)
to be installed on your system.

    mkdir jme3
    cd jme3

    // if you have a rsa key configured
    git clone git@github.com:jMonkeyEngine/jmonkeyengine.git
    // or
    // if you don't, but you'll be asked for credential after the next command
    git clone https://github.com/jMonkeyEngine/jmonkeyengine.git
    //can take a while

    // build the engine and install it in your local maven repo.
    ./gradlew install

:::note
What is an [RSA
key](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)?
:::

The install command will install the built jars into your local maven
repositories org.jmonkeyengine folder, which on Linux is \~/.m2, and on
Windows might be in AppData, or in your home directory.

To use the engine in a game project, you can use
[BootMonkey](https://hub.jmonkeyengine.org/t/bootmonkey-bootstrap-your-jme-project/37141)
or clone a template project from GitHub.

To use the template, first create a folder for your project:

    cd ..
    mkdir HelloJME3
    cd HelloJME3

Next, clone one of these templates:

-   [Simsilica/Examples](https://github.com/Simsilica/Examples/tree/master/simple-jme)

-   [Nehon/base-jme](https://github.com/Nehon/base-jme)

After cloning, open the `build.gradle` file and uncomment the
`mavenLocal()` repository, change the version variable, and uncomment
any dependencies you will need:

    repositories {
        //This is where jme3 dependencies are stored.
        jcenter()

        //Uncomment this if you install local dependencies.
        mavenLocal()

        //Uncomment this if you use external dependencies
        //mavenCentral()

        //Uncomment this if you use jme3-niftygui
        //maven{url 'http://nifty-gui.sourceforge.net/nifty-maven-repo'}

    }

    ext.jmeVersion = "[3.2,)"

    ...

    dependencies {

        compile "org.jmonkeyengine:jme3-core:$jmeVersion"
        compile "org.jmonkeyengine:jme3-desktop:$jmeVersion"
        compile "org.jmonkeyengine:jme3-lwjgl:$jmeVersion"

        //Those are jme3 additional library uncomment the ones you need
        //compile "org.jmonkeyengine:jme3-android-native:$jmeVersion"
        //compile "org.jmonkeyengine:jme3-android:$jmeVersion"
        //compile "org.jmonkeyengine:jme3-bullet-native-android:$jmeVersion"
        //compile "org.jmonkeyengine:jme3-blender:$jmeVersion"
        //compile "org.jmonkeyengine:jme3-bullet-native:$jmeVersion"
        //compile "org.jmonkeyengine:jme3-bullet:$jmeVersion"
        //compile "org.jmonkeyengine:jme3-effects:$jmeVersion"
        //compile "org.jmonkeyengine:jme3-jogg:$jmeVersion"
        //compile "org.jmonkeyengine:jme3-jogl:$jmeVersion"
        //compile "org.jmonkeyengine:jme3-lwjgl3:$jmeVersion"
        //compile "org.jmonkeyengine:jme3-networking:$jmeVersion"
        //compile "org.jmonkeyengine:jme3-plugins:$jmeVersion"
        //compile "org.jmonkeyengine:jme3-terrain:$jmeVersion"

        //You need to uncomment nifty repository in the repositories section if you use this dependency
        //compile "org.jmonkeyengine:jme3-niftygui:$jmeVersion"

        runtime project(':assets')
    }
    ...

For a detailed description of the separate jar files see [this
list](../jme3/jme3_source_structure.xml#structure_of_jmonkeyengine3_jars).

That's it, you're done. After the clone, you will have a project that
contains a source package with a default blue cube JME3 app and a
subproject that has the proper asset directory structure for your
assets.

Build and run your project and you should see a blue cube.

Manual Download (hard way)
==========================

This example shows how to set up and run a simple application
(HelloJME3) that depends on the jMonkeyEngine3 libraries.

The directory structure will look as follows:

    jme3/
    jme3/lib
    jme3/src
    ...
    HelloJME3/
    HelloJME3/lib
    HelloJME3/assets
    HelloJME3/src
    ...

To install the development version of jme3, download the latest [stable
release](https://github.com/jMonkeyEngine/jmonkeyengine/releases), unzip
the folder into a directory named `jme3`. The filenames here are just an
example, but they will always be something like `jME3.x-stable`.

    mkdir jme3
    cd jme3
    unzip jME3.2-stable.zip
    cd ..

Sample Project Directory Structure
==================================

First we set up the directory and source package structure for your game
project. Note that the game project directory `HelloJME3` is on the same
level as your `jme3` folder. In this example, we create a Java package
that we call `mygame` in the source directory.

    mkdir HelloJME3
    mkdir HelloJME3/src
    mkdir HelloJME3/src/mygame

Libraries
=========

Next you copy the necessary JAR libraries from the download to your
project. You only have to do this set of steps once every time you
download a new JME3 build. For a detailed description of the separate
jar files see [this
list](../jme3/jme3_source_structure.xml#structure_of_jmonkeyengine3_jars).

    mkdir HelloJME3/build
    mkdir HelloJME3/lib
    cp jme3/lib/*.* HelloJME3/lib

Sample Code
-----------

To test your setup, create the file
`HelloJME3/src/mygame/HelloJME3.java` with any text editor, paste the
following sample code, and save.

```java
package mygame;

import com.jme3.app.SimpleApplication;
import com.jme3.material.Material;
import com.jme3.math.Vector3f;
import com.jme3.scene.Geometry;
import com.jme3.scene.shape.Box;
import com.jme3.math.ColorRGBA;

public class HelloJME3 extends SimpleApplication {

    public static void main(String[] args){
        HelloJME3 app = new HelloJME3();
        app.start();
    }

    @Override
    public void simpleInitApp() {
        Box b = new Box(Vector3f.ZERO, 1, 1, 1);
        Geometry geom = new Geometry("Box", b);
        Material mat = new Material(assetManager,
          "Common/MatDefs/Misc/Unshaded.j3md");
        mat.setColor("Color", ColorRGBA.Blue);
        geom.setMaterial(mat);
        rootNode.attachChild(geom);
    }
}
```

Build and Run
=============

We build the sample application into the build directory...

    cd HelloJME3
    javac -d build -cp "lib/eventbus.jar:lib/j-ogg-all.jar:lib/jme3-lwjgl.jar:lib/jme3-bullet.jar:lib/jinput.jar:lib/lwjgl.jar:lib/stack-alloc.jar:lib/vecmath.jar:lib/xpp3.jar:lib/jme3-blender.jar:lib/jme3-core.jar:lib/jme3-desktop.jar:lib/jme3-jogg.jar:lib/jme3-plugins.jar:lib/jme3-terrain.jar:lib/jme3-testdata.jar:lib/jme3-niftygui.jar:lib/nifty-default-controls.jar:lib/nifty-examples.jar:lib/nifty-style-black.jar:lib/nifty.jar:." src/mygame/HelloJME3.java

... and run it.

    cd build
    java -cp "../lib/eventbus.jar:../lib/j-ogg-all.jar:../lib/jme3-lwjgl.jar:../lib/jme3-bullet.jar:../lib/jinput.jar:../lib/lwjgl.jar:../lib/stack-alloc.jar:../lib/vecmath.jar:../lib/xpp3.jar:../lib/jme3-blender.jar:../lib/jme3-core.jar:../lib/jme3-desktop.jar:../lib/jme3-jogg.jar:../lib/jme3-plugins.jar:../lib/jme3-terrain.jar:../lib/jme3-testdata.jar:../lib/jme3-niftygui.jar:../lib/nifty-default-controls.jar:../lib/nifty-examples.jar:../lib/nifty-style-black.jar:../lib/nifty.jar:." mygame/HelloJME3

:::note
If you use Windows, the classpath separator is \\ instead of /.
:::

If a settings dialog pops up, confirm the default settings. You should
now see a simple window with a 3-D cube. Use the mouse and the WASD keys
to move. It works!

Recommended Asset Directory Structure
=====================================

For [multi-media files, models, and other
assets](../jme3/intermediate/multi-media_asset_pipeline), we
recommend creating the following project structure:

    cd HelloJME3
    mkdir assets
    mkdir assets/Interface
    mkdir assets/Materials
    mkdir assets/MatDefs
    mkdir assets/Models
    mkdir assets/Scenes
    mkdir assets/Shaders
    mkdir assets/Sounds
    mkdir assets/Textures

This directory structure will allow
[SimpleApplication](../jme3/intermediate/simpleapplication)\'s
default [AssetManager](../jme3/advanced/asset_manager) to load media
files from your `assets` directory, like in this example:

    import com.jme3.scene.Spatial;
    ...
      Spatial elephant = assetManager.loadModel("Models/Elephant/Elephant.meshxml");
      rootNode.attachChild(elephant);
    ...

You will learn more about the asset manager and how to customize it
later. For now feel free to structure your assets (images, textures,
models) into further sub-directories, like in this example the
`assets/models/Elephant` directory that contains the `elephant.mesh.xml`
model and its materials.

Next Steps
==========

Now follow the [tutorials](../jme3) and write your first
jMonkeyEngine game.

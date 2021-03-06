For development with the jMonkeyEngine 3, we recommend to use the
jMonkeyEngine SDK.

Alternatively, you can use your favorite IDE: In this tutorial we show
how to download and set up the latest nightly build of the jMonkeyEngine
3 for use with the Eclipse IDE. Instructions for [NetBeans
IDE](../jme3/setting_up_netbeans_and_jme3) are also available.

Downloading jME3
================

The currently available JAR binaries are the nightly builds.

1.  Download the most recent zipped build from
    <https://github.com/jMonkeyEngine/jmonkeyengine/releases>

2.  Unzip the file and save it as `jME3.2-stable` in your home directory
    (\$HOME). You should see the following files and directories:

    -   `lib/` -- The jMonkeyEngine binaries, and libraries used by the
        jMonkeyEngine. (Don't remove)

    -   `jMonkeyEngine3.jar` -- Run this to see various feature demos.
        (optional)

    -   `javadoc/` -- jME3 API documentation. (optional)

Creating a New Game Project
===========================

-   In Eclipse, choose `File New Java Project`

-   Project Name: `HelloJME3`

-   Click Finish

The new project appears in the Explorer.

Setting up Dependencies
=======================

Your project depends on the jMonkeyEngine libraries and needs to know
where they are.

1.  Right-click the project in the explorer and choose
    `Build Path Add External Archives`

2.  In the "JAR" selection dialog, browse to the `$HOME/jME3.2-stable`
    directory.

3.  Select all JARs in the `lib` directory and click Open.

All necessary JAR libraries are now on the classpath and should appear
in the Referenced Libraries list. For a detailed description of the
separate jar files see [this
list](../jme3/jme3_source_structure.xml#structure_of_jmonkeyengine3_jars).

Setting up Assets
=================

The easiest way to make sure the asset manager can access the assets is
by adding the assets folder to the classpath.

1.  Go to `Project Properties`

2.  Select `Java Build Path`

3.  Under the `Source` tab click Add Folder

4.  Add your Assets folder

Writing a Simple Application
============================

1.  From the menu call `File New New Package`. Name the src package for
    example `hello`.

2.  From the menu call `File New Class`.

    -   Select package `hello`.

    -   Name the class for example `MyGame`.

    -   Superclass: `com.jme3.app.SimpleApplication`

    -   Make sure that the checkbox to `Create the main() Method` is
        active.

    -   Make sure that the checkbox to `Inheriting Abstract Methods` is
        active.

    -   Click Finish.

You can now continue to write [your first jme3
application](../jme3/beginner/hello_simpleapplication)!

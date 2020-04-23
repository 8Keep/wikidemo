An overview of the source structure of the JME3 project. In order to
support both Desktop and Android Java platforms, it was necessary to
split the source code into several parts. This wiki page describes the
packages and their purpose. Status: Up-to-date for JME3 beta.

Structure of src directory
==========================

You can build jME using the included build.xml script:
`ant clean; ant jar; ant run` When building the sources in a project
created with another IDE, include every folder under `src` in the
project as its own separate source root.

Core
----

+-----------------------------------+-----------------------------------+
| Source Package                    | Description                       |
+===================================+===================================+
| src/core                          | The main package. Must always be  |
|                                   | included, as all other packages   |
|                                   | depend on it.                     |
+-----------------------------------+-----------------------------------+
| src/core-effects                  | Core effects like Water, PSSM     |
|                                   | etc.                              |
+-----------------------------------+-----------------------------------+
| src/core-data                     | Basic material definitions,       |
|                                   | shaders and fonts that are needed |
|                                   | by most jME3 applications.        |
+-----------------------------------+-----------------------------------+
| src/core-plugins                  | Important asset plugins, such as  |
|                                   | .j3o model loader, .obj loader,   |
|                                   | font loader, basic image loaders. |
+-----------------------------------+-----------------------------------+
| src/desktop                       | Must be included if deploying on  |
|                                   | desktop, applet or web start.     |
|                                   | **Exclude Android**               |
+-----------------------------------+-----------------------------------+
| src/android                       | Must be included if deploying on  |
|                                   | the Android platform. **Exclude   |
|                                   | Desktop**                         |
+-----------------------------------+-----------------------------------+
| src/lwjgl                         | LWJGL OpenGL display              |
|                                   | implementation. **Exclude         |
|                                   | Android**                         |
+-----------------------------------+-----------------------------------+

Physics
-------

+-----------------------------------+-----------------------------------+
| Source Package                    | Description                       |
+===================================+===================================+
| \* src/jbullet                    | Game Physics Engine, based on the |
|                                   | jBullet framework. Desktop only.  |
|                                   | **Exclude Bullet**                |
+-----------------------------------+-----------------------------------+
| \* src/bullet                     | Game Physics Engine, based on the |
|                                   | native Bullet framework. Needs    |
|                                   | jme3-bullet-native or             |
|                                   | jme3-bullet-native-android (beta) |
|                                   | **Exclude jBullet**               |
+-----------------------------------+-----------------------------------+
| src/bullet-native                 | Native Bullet implementation C++  |
|                                   | classes. **Exclude jBullet**      |
+-----------------------------------+-----------------------------------+
| src/jme3-bullet-native-android    | Native libraries needed for       |
|                                   | bullet (not jbullet) on android.  |
+-----------------------------------+-----------------------------------+

::: {.note}
\* Only one of the physics libraries can be used at a time as they
replace each other.

-   jbullet

or

-   bullet

    -   with one or both "natives" library

        -   bullet-native

        -   jme3-bullet-native-android
:::

Plugins and Extra packages
--------------------------

+-----------------------------------+-----------------------------------+
| Source Package                    | Description                       |
+===================================+===================================+
| src/ogre                          | Ogre3D model and scene loader.    |
|                                   | Supports skeletal and vertex      |
|                                   | animation, scene loading, and     |
|                                   | materials.                        |
+-----------------------------------+-----------------------------------+
| src/xml                           | Provides an XML im/exporter.      |
+-----------------------------------+-----------------------------------+
| src/jogg                          | OGG/Vorbis loader to play .ogg    |
|                                   | sound files.                      |
+-----------------------------------+-----------------------------------+
| src/niftygui                      | Support for custom Graphical User |
|                                   | Interfaces.                       |
+-----------------------------------+-----------------------------------+
| src/blender                       | Blender model importer            |
+-----------------------------------+-----------------------------------+
| src/networking                    | SpiderMonkey networking package   |
+-----------------------------------+-----------------------------------+
| src/terrain                       | Terrain generation tools          |
+-----------------------------------+-----------------------------------+
| src/vr                            | Virtual reality                   |
+-----------------------------------+-----------------------------------+

Tests, Games and Tools
----------------------

+-----------------------------------+-----------------------------------+
| Source Package                    | Description                       |
+===================================+===================================+
| src/test                          | Small sample Applications that    |
|                                   | demo individual jME3 features.    |
|                                   | jme3\_test-data.jar               |
+-----------------------------------+-----------------------------------+
| src/test-data                     | Data assets (jme3\_test-data.jar) |
|                                   | required by jme3\_test samples.   |
+-----------------------------------+-----------------------------------+
| src/tools                         | Tools and programs that help you  |
|                                   | use jme3.                         |
+-----------------------------------+-----------------------------------+

Structure of lib directory
==========================

JME3 depends on the following JARs and native libraries in the `lib`
directory. The JAR libraries must be on the classpath.

::: {.note}
The jME3-**natives**.jar bundles contain the native libraries, those are
necessary `.dll`, `.jnilib`, `lib.so` files. You do not need to manually
include native libraries on the java.library.path! jME3 handles the
extraction of natives automatically via the JAR bundles.
:::

-   lib/android:

    -   android.jar

-   lib/bullet:

    -   android, jME3-bullet-natives-android.jar,
        jME3-bullet-natives.jar, jarcontent (natives)

        ::: {.note}
        **Only one version of jme3-jbullet OR jme3-bullet with "natives"
        library can be used.**
        :::

-   lib/jbullet:

    -   asm-all.jar, jbullet.jar, stack-alloc.jar, vecmath.jar

-   lib/jogg:

    -   j-ogg-oggd.jar, j-ogg-vorbisd.jar

-   lib/lwjgl:

    -   jME3-lwjgl-natives.jar, jinput.jar, lwjgl.jar

-   lib/niftygui:

    -   nifty.jar, nifty-javadoc.jar, xmlpull-xpp3.jar, eventbus.jar

    -   nifty-default-controls-javadoc.jar, nifty-default-controls.jar,

    -   nifty-examples.jar, nifty-examples-javadoc.jar,
        nifty-style-black.jar

Structure of jMonkeyEngine3 JARs
================================

After the build is complete (in the `dist` directory), you see that the
jMonkeyEngine library is split up over several JAR files. This allows
for better separation of the parts for different operating systems,
projects etc.

+----------------------+----------------------+-----------------------+
| JAR file             | Purpose              | External Dependence   |
+======================+======================+=======================+
| di                   | Platform-independent | None                  |
| st/lib/jME3-core.jar | core libraries       |                       |
|                      | (math, animation,    |                       |
|                      | scenegraph,          |                       |
|                      | Wavefront OBJ model  |                       |
|                      | support, etc)        |                       |
+----------------------+----------------------+-----------------------+
| dist/                | Core jME3 effects    | None                  |
| lib/jME3-effects.jar | (Water, SSAO etc)    |                       |
+----------------------+----------------------+-----------------------+
| dist/                | Desktop PC only jME3 | None                  |
| lib/jME3-desktop.jar | libraries            |                       |
+----------------------+----------------------+-----------------------+
| dist/                | Basic import plugins | None                  |
| lib/jME3-plugins.jar | (OgreXML models and  |                       |
|                      | j3o)             |                       |
+----------------------+----------------------+-----------------------+
| dist/                | Blender model import | None                  |
| lib/jME3-blender.jar | plugin (Desktop      |                       |
|                      | only)                |                       |
+----------------------+----------------------+-----------------------+
| dist/lib             | "Spidermonkey"       | None                  |
| /jME3-networking.jar | networking library   |                       |
+----------------------+----------------------+-----------------------+
| di                   | J-OGG audio plugin   | j-ogg-vorbisd.jar,    |
| st/lib/jME3-jogg.jar |                      | j-ogg-oggd.jar        |
+----------------------+----------------------+-----------------------+
| dist/                | Terrain system       | None                  |
| lib/jME3-terrain.jar |                      |                       |
+----------------------+----------------------+-----------------------+
| dist/                | jBullet physics      | jbullet.jar,          |
| lib/jME3-jbullet.jar |                      | vecmath.jar,          |
|                      |                      | stack-alloc.jar,      |
|                      |                      | asm-all-3.1.jar       |
+----------------------+----------------------+-----------------------+
| dist                 | Bullet physics (only | jM                    |
| /lib/jME3-bullet.jar | jBullet **or**       | E3-bullet-natives.jar |
|                      | Bullet can be used)  |                       |
+----------------------+----------------------+-----------------------+
| dist/l               | NiftyGUI support     | nifty.jar,            |
| ib/jME3-niftygui.jar |                      | nifty-                |
|                      |                      | default-controls.jar, |
|                      |                      | eventbus.jar,         |
|                      |                      | xmlpull-xpp3.jar      |
+----------------------+----------------------+-----------------------+
| dis                  | LWJGL Desktop        | lwjgl.jar,            |
| t/lib/jME3-lwjgl.jar | Renderer             | jM                    |
|                      |                      | E3-lwjgl-natives.jar, |
|                      |                      | jinput.jar            |
+----------------------+----------------------+-----------------------+
| dist/                | Android Renderer     | Android system        |
| lib/jME3-android.jar |                      |                       |
+----------------------+----------------------+-----------------------+

Optional:

-   nifty-examples.jar

-   jME3-testdata.jar

-   nifty-style-black.jar (default nifty style)

API Structure
=============

For details see the [javadoc]({link-javadoc}).

Data File Types
===============

+----------------------+----------------------+-----------------------+
| Path                 | File types           | purpose               |
+======================+======================+=======================+
| /Common/MatDefs/\*/  | .glsllib             | Standard ShaderLibs   |
+----------------------+----------------------+-----------------------+
| /Common/MatDefs/\*/  | .j3md                | Standard Material     |
|                      |                      | Definitions           |
+----------------------+----------------------+-----------------------+
| /                    | .j3m                 | Standard Material     |
| Common/Materials/\*/ |                      |                       |
+----------------------+----------------------+-----------------------+
| /Interface/Fonts/    | .fnt + .png          | Standard Fonts        |
+----------------------+----------------------+-----------------------+

See also: [Supported Formats](../jme3/features.xml#supported-formats).

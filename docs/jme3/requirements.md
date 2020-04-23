This page shows software and hardware requirements from two points of
view:

-   For the Java developers who create games; and

-   For the users (your customers) who play the games that you created.

For Developers
==============

These are the minimum requirements for developers who create games using
the jMonkeyEngine SDK:

+-------------+--------------------------------------------------------+
| Operating   | Mac OS X, Windows, Linux                               |
| system      |                                                        |
+=============+========================================================+
| Memory (JVM | \> 40 MB + memory for assets.                          |
| heap size)  |                                                        |
+-------------+--------------------------------------------------------+
| CPU         | \> 1 GHz                                               |
+-------------+--------------------------------------------------------+
| Graphic     | AMD/ATI Radeon 9500, NVIDIA GeForce 5 FX, Intel GMA    |
| card        | 4500, or better supporting OpenGL 2.0 or better.       |
|             | (native libraries are included in download)\           |
|             | Mac OS, only OpenGL 3.2 is available; You need to      |
|             | specify OpenGL 3.2 in AppSettings, you can't use       |
|             | OpenGL 2.0.                                            |
|             |                                                        |
|             | All platforms:\                                        |
|             | If you use the LWJGL3 library (LWJGL2 is default), you |
|             | need a specific launch argument                        |
|             | (-XstartOnFirstThread), and thus can't use any         |
|             | launchers not using the main thread. Because of this,  |
|             | calls to app.start() hang as it uses the current       |
|             | thread.                                                |
|             |                                                        |
|             | See the forum post [LWJGL v2 versus                    |
|             | v3](htt                                                |
|             | ps://hub.jmonkeyengine.org/t/lwjgl-v2-versus-v3/42125) |
|             | for additional details.                                |
+-------------+--------------------------------------------------------+
| Java        | JDK 7 or higher\                                       |
| Development | Your development team gets the Java Development Kit    |
| Kit         | for free from <http://www.java.com>.\                  |
|             | Mac OS, see                                            |
|             | [apple.com](http://support.apple.com/kb/DL1421).\      |
|             | At least intermediate Java experience is required.     |
+-------------+--------------------------------------------------------+

We recommend using the [jMonkeyEngine SDK](../sdk) as game
development environment (IDE). However, any third-party Java IDE (and
even a text editor and the commandline) will work fine together with the
jME framework if you are experienced with the tool of your choice. For
requirements of other IDEs, please see the third party's documentation.

For Users
=========

These are the minimum requirements for your customers, users who play
the games that were created using the jMonkeyEngine3 framework:

+-------------+--------------------------------------------------------+
| Operating   | Mac OS X, Windows, Linux                               |
| system      |                                                        |
+=============+========================================================+
| Memory (JVM | \> 10 MB + memory for assets. (models, textures,       |
| heap size)  | sounds, etc, of a particular game)                     |
+-------------+--------------------------------------------------------+
| CPU         | \> 1 GHz                                               |
+-------------+--------------------------------------------------------+
| Graphic     | AMD/ATI Radeon 9500, NVIDIA GeForce 5 FX, Intel GMA    |
| card        | 4500, or better supporting OpenGL 2.0 or better.       |
|             | (native libraries are included in download)\           |
|             | Mac OS requires OpenGL 3.2.                            |
+-------------+--------------------------------------------------------+
| [Android    | (For mobile games only) Android 2.2 OS, graphics card  |
| Device      | supporting OpenGL 2                                    |
| s](https:// |                                                        |
| hub.jmonkey |                                                        |
| engine.org/ |                                                        |
| t/does-my-p |                                                        |
| hone-meet-t |                                                        |
| he-requirem |                                                        |
| ents-necess |                                                        |
| ary-to-run- |                                                        |
| jmonkeyengi |                                                        |
| ne-3/17231) |                                                        |
+-------------+--------------------------------------------------------+
| Java        | Java 5 or higher.\                                     |
| Runtime     | The Java Virtual Machine (JVM) is required to run jME  |
|             | games.\                                                |
|             | The JVM is often preinstalled, if not, your users get  |
|             | it for free from <http://www.java.com>.\               |
|             | Mac OS, see                                            |
|             | [apple.com](http://support.apple.com/kb/DL1421).       |
+-------------+--------------------------------------------------------+

Make sure to inform your users about these requirements.

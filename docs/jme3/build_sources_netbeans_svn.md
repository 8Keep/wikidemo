You are welcome to try out the new jME3, and contribute patches and
features! This document shows how to download, set up, build, and run
the latest development version from the sources. These instructions work
in NetBeans IDE 6 or better.

Note: In the following, always replace "\~ with the path to your home
directory.

Downloading the Sources
=======================

Check out the sources from the repository. (The following NetBeans
instructions are equivalent to executing
`cd ~/NetBeansProjects; svn checkout http://jmonkeyengine.googlecode.com/svn/branches/3.0final/engine jme3`
on the commandline.)

1.  In NetBeans go to Team \> Subversion \> Checkout

    a.  Repository URL: `https://jmonkeyengine.googlecode.com/svn`

    b.  You can leave user/pw blank for anonymous access.

2.  Click Next

    a.  Repository Folders: `branches/3.0final/engine`

    b.  Enable the checkbox to Skip "engine and only checkout its
        contents.

    c.  Local Folder: `~/NetBeansProjects/jme3`

3.  Click Finish and wait.

The jme3 project opens in the Project window. It already includes a
working ANT build script for building and running.

Look into the Libraries node and confirm that the project depends on the
following libraries in the classpath:

-   j-ogg-oggd.jar

-   j-ogg-vorbisd.jar

-   jbullet.jar

-   stack-alloc.jar

-   vecmath.jar

-   lwjgl.jar

-   jME3-lwjgl-natives.jar

-   jinput.jar

-   eventbus.jar

-   nifty-default-controls.jar

-   nifty-examples.jar

-   nifty-style-black.jar

-   nifty.jar

-   jglfont-core.jar

-   xmlpull-xpp3.jar

-   android.jar

-   jME3-bullet-natives.jar

-   gluegen-rt.jar

-   joal.jar

-   jogl-all.jar

-   jME3-natives-joal.jar

-   jME3-openal-soft-natives-android.jar

For a detailed description of the separate jar files see [this
list](../jme3/jme3_source_structure.xml#structure_of_jmonkeyengine3_jars).

Build the Project and Run a Sample App
======================================

1.  Right-click the jme3 project node and "Clean and Build the project.

2.  In the Projects window, open the `Test` folder which contains the
    sample apps.

3.  Every file with a Main class (for example
    `jme3test.model/TestHoverTank.java` or
    `jme3test.game/CubeField.java`) is an app.

4.  Right-click a sample app and choose "Run File (Shift-F6).

5.  Generally in sample apps:

    a.  the mouse and the WASD keys control movement

    b.  the Esc key exits the application

Optional: Javadoc Popups and Source Navigation in NetBeans
==========================================================

If you are working on the jme3 sources:

1.  In the Projects window, right-click the jme3 project and choose
    Generate Javadoc. Wait.

2.  Confirm in the Files window that the javadoc has been created in
    `~/NetBeansProjects/jme3/dist/javadoc`

3.  In the editor, place the caret in a jme class and press ctrl-space
    to view javadoc.

If you are working on a game project that depends on jme3:

1.  First follow the previous tip. (In the future, we may offer jme
    javadoc as download instead.)

2.  In your game project, right-click the Libraries node and choose
    "Properties.

3.  In the Library properties, select jme3.jar and click the Edit
    button.

    a.  For the Javadoc field, browse to
        `~/NetBeansProjects/jme3/dist/javadoc`. Check "as relative path
        and click select.

    b.  For the Sources field, browse to `~/NetBeansProjects/jme3/src`.
        Check "as relative path and click select.

    c.  Click OK.

4.  In the editor, place the caret in a jme class and press ctrl-space
    to view javadoc. Ctrl-click any jme3 method to jump to its
    definition in the sources.

This tip works for any third-party JAR library that you use. (You may
have to download the javadoc/sources from their home page separately).
\'\'\'

Sources used:
[BuildJme3](http://code.google.com/p/jmonkeyengine/wiki/BuildJme3),
[NetBeans tutorial from
forum](http://www.jmonkeyengine.com/forum/index.php?topic=13108.0)

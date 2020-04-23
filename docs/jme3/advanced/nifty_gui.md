![nifty-gui-13.png](/images/jme3/advanced/nifty-gui-13.png)

You may want your players to press a button to save a game, you want a
scrolling text field for highscores, a text label to display the score,
drop-downs to select keymap preferences, or checkboxes to specify
multi-media options. Usually you solve these tasks by using Swing
controls. Although it is possible to embed a [jME3
canvas](../../jme3/advanced/swing_canvas) in a Swing GUI, a 3D game
typically runs full-screen, or in a window of its own.

This document introduces you to [Nifty
GUI](https://github.com/nifty-gui/nifty-gui/), a Java library for
building interactive graphical user interfaces (GUIs) for games or
similar applications. Nifty GUI (the `de.lessvoid.nifty` package) is
well integrated with jME3 through the `com.jme3.niftygui` package. You
define the base GUI layout in XML, and control it dynamically from your
Java code. The necessary JAR libraries are included in your jME3
download, you do not need to install anything extra. (Just make sure
they are on the classpath.)

-   [Video demo of Nifty GUI 1.3](http://vimeo.com/25637085)

Tutorial Overview
=================

Learn to add a Nifty GUI to your jME3 game by going through this
multi-part tutorial:

1.  Understand the Nifty GUI Concepts described on this page.

2.  [Browse this short list of Best
    Practices](../../jme3/advanced/nifty_gui_best_practices)

3.  Lay out your graphical user interface:

    -   [Lay out the GUI in
        XML](../../jme3/advanced/nifty_gui_xml_layout) -- or --

    -   [Lay out the GUI in
        Java](../../jme3/advanced/nifty_gui_java_layout)

4.  Integrate the GUI into the game:

    -   [Overlay the User Interface Over the
        Screen](../../jme3/advanced/nifty_gui_overlay) -- or --

    -   [Project the User Interface Onto a
        Texture](../../jme3/advanced/nifty_gui_projection)

5.  [Interact with the GUI from
    Java](../../jme3/advanced/nifty_gui_java_interaction)

Must Know: Nifty GUI Concepts
=============================

![nifty-screen-layer-panel.png](/images/jme3/advanced/nifty-screen-layer-panel.png)

Nifty GUIs are made up of the following **elements**:

-   A Nifty GUI contains one or more **screens**.

    -   Only one screen is visible at a time.

    -   Name the first screen `start`. Name any others whatever you
        like.

    -   Screen are [controlled by a Java Controller
        class](../../jme3/advanced/nifty_gui_java_interaction).

-   A screen contains one or more **layers**.

    -   Layers are containers that impose alignment on their contents
        (vertical, horizontal, or centered)

    -   Layers can overlap (z-order), and cannot be nested.

-   A layer contains **panels**.

    -   Panels are containers that impose alignment on their contents
        (vertical, horizontal, or centered)

    -   Panels can be nested, and cannot overlap.

-   A panel contains **images, text, or controls (buttons, etc)**.

JME-Nifty Sample Code
---------------------

-   XML examples

    -   [HelloJme.xml](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-testdata/src/main/resources/Interface/Nifty/HelloJme) -
        Can be found in
        [jme-testdata/Interface/Nifty](../../sdk/sample_code.xml#jme3testdata-assets#)
        also.

-   Java examples

    -   [TestNiftyGui.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/niftygui/TestNiftyGui.java) -
        Can be found in [jme3
        tests](../../sdk/sample_code.xml#the-jme3tests-project-template#)
        also.

    -   [TestNiftyToMesh.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/niftygui/TestNiftyToMesh.java) -
        Can be found in [jme3
        tests](../../sdk/sample_code.xml#the-jme3tests-project-template#)
        also.

-   jME3-ready version of the Nifty GUI 1.3 demo (sample code, Java)

    -   [NiftyGuiDemo.zip](http://files.seapegasus.org/NiftyGuiDemo.zip)

-   Find more sample code in the
    [nifty-examples](https://github.com/nifty-gui/nifty-gui/tree/1.4/nifty-examples/src/main/java/de/lessvoid/nifty/examples)
    repositories.

    -   [Running The Nifty
        Examples](https://github.com/nifty-gui/nifty-gui/wiki/Examples)

External Documentation
----------------------

Learn more from the NiftyGUI page:

-   [Nifty GUI - the
    Manual](https://github.com/nifty-gui/nifty-gui/raw/1.4/nifty-core/manual/nifty-gui-the-manual-1.3.2.pdf)

-   [Nifty GUI - Wiki](https://github.com/nifty-gui/nifty-gui/wiki)

-   [Nifty 1.4.2
    JavaDoc](http://nifty-gui.sourceforge.net/projects/1.4.2/nifty/nifty/apidocs/index.html)

-   [Nifty 1.4.2 Controls
    JavaDoc](http://nifty-gui.sourceforge.net/projects/1.4.2/nifty/nifty-default-controls/apidocs/index.html)

-   [Forum post: Changing Text in Nifty GUIs
    programmatically](https://hub.jmonkeyengine.org/t/anyone-succeeded-in-changing-text-in-nifty-programatically/14424)

Nifty Logging (Nifty 1.4.2)
===========================

If you want to disable the nifty log lines, add this code after you
created nifty:

    Logger.getLogger("de.lessvoid.nifty").setLevel(Level.SEVERE);
    Logger.getLogger("NiftyInputEventHandlingLog").setLevel(Level.SEVERE);

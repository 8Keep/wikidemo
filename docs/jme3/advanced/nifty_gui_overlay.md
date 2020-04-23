1.  [Nifty GUI Concepts](../../jme3/advanced/nifty_gui)

2.  [Nifty GUI Best
    Practices](../../jme3/advanced/nifty_gui_best_practices)

3.  [Nifty GUI XML Layout](../../jme3/advanced/nifty_gui_xml_layout)
    or [Nifty GUI Java
    Layout](../../jme3/advanced/nifty_gui_java_layout)

4.  **Nifty GUI Overlay** or [Nifty GUI
    Projection](../../jme3/advanced/nifty_gui_projection)

5.  [Interact with the GUI from
    Java](../../jme3/advanced/nifty_gui_java_interaction)

![nifty-gui-example.png](/images/jme3/advanced/nifty-gui-example.png)

Typically, you define a key (for example escape) that switches the GUI
on and off. The GUI can be a StartScreen, OptionsScreen,
CharacterCreationScreen, etc. While the GUI is up, you pause the running
game, and then overlay the GUI. You also must switch to a different set
of user inputs while the game is paused, so the player can use the mouse
pointer and keyboard to interact with the GUI.

You can also [project](../../jme3/advanced/nifty_gui_projection) the
GUI as a texture onto a mesh texture (but then you cannot click to
select). On this page, we look at the overlay variant, which is more
commonly used in games.

Sample Code
===========

-   [TestNiftyGui.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/niftygui/TestNiftyGui.java)

:::note
The jme3-niftygui library is included in jMonkeyEngine. If you installed
jMonkeyEngine using one of the [optional
methods](../../documentation.xml#install), it will be added to your
projects Library folder as part of the installation. If you're using the
jMonkeyEngine SDK, you add it to any project by RMB selecting your
projects `Library` folder, choosing `Add Library jme-niftygui` followed
by `Add Library`.
:::

Overlaying the User Interface Over the Screen
=============================================

This code shows you how to overlay anything on the screen with the GUI.
This is the most common usecase.

```java
NiftyJmeDisplay niftyDisplay = NiftyJmeDisplay.newNiftyJmeDisplay(
    assetManager, inputManager, audioRenderer, guiViewPort);
/** Create a new NiftyGUI object */
Nifty nifty = niftyDisplay.getNifty();
/** Read your XML and initialize your custom ScreenController */
nifty.fromXml("Interface/tutorial/step2/screen.xml", "start");
// nifty.fromXml("Interface/helloworld.xml", "start", new MySettingsScreen(data));
// attach the Nifty display to the gui view port as a processor
guiViewPort.addProcessor(niftyDisplay);
// disable the fly cam
flyCam.setDragToRotate(true);
```

Currently you do not have a ScreenController -- we will create one in
the next exercise. As soon as you have a screen controller, you will use
the commented variant of the XML loading method:

```java
nifty.fromXml("Interface/helloworld.xml", "start", new MySettingsScreen());
```

The `MySettingsScreen` class is a custom
de.lessvoid.nifty.screen.ScreenController in which you will implement
your GUI behaviour.

If you have many screens or you want to keep them organized in separate
files there is a method available that will just load an additional XML
file. The content of the files are simply added to whatever XML data has
been loaded before.

```java
nifty.addXml("Interface/mysecondscreen.xml");
```

Next Steps
==========

Now that you have layed out and integrated the GUI in your app, you want
to respond to user input and display the current game. Time to create a
ScreenController!

-   [Interact with the GUI from
    Java](../../jme3/advanced/nifty_gui_java_interaction)

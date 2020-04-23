A HUD (Head-Up Display) is part of a game's visual user interface. It's
an overlay that displays additional information as (typically)
2-dimensional text or icons on the screen, on top of the 3D scene. Not
all games have, or need a HUD. To avoid breaking the immersion and
cluttering the screen, only use a HUD if it is the only way to convey
certain information.

HUDs are used to supply players with essential information about the
game state.

-   Status: Score, minimap, points, stealth mode, ...

-   Resources: Ammunition, lives/health, time, ...

-   Vehicle instruments: Cockpit, speedometer, ...

-   Navigational aides: Crosshairs, mouse pointer or hand, ...

You have multiple options how to create HUDs.

+----------------------+----------------------+-----------------------+
| Option               | Pros                 | Cons                  |
+======================+======================+=======================+
| Attach elements to   | Easy to learn.       | Only basic features.\ |
| default guiNode:     | jMonkeyEngine        | You will have to      |
|                      | built-in API for     | write custom controls |
|                      | attaching plain      | / buttons / effects   |
|                      | images and bitmap    | if you need them.     |
|                      | text.                |                       |
+----------------------+----------------------+-----------------------+
| Use advanced [Nifty  | Full-featured        | Steeper learning      |
| GUI](../../jme3/adv  | interactive user     | curve.                |
| anced/nifty_gui) | interface.\          |                       |
| integration:         | Includes buttons,    |                       |
|                      | effects, controls.\  |                       |
|                      | Supports XML and     |                       |
|                      | Java layouts.        |                       |
+----------------------+----------------------+-----------------------+
| Use user contributed | Both have many       | Are not necessarily   |
| GUI libraries such   | features that would  | guaranteed future     |
| as                   | be difficult to do   | updates, not as well  |
| [tonegodgui](        | with Nifty\          | documented            |
| ../../jme3/contribut | Includes buttons,    |                       |
| ions/tonegodgui) | effects, controls.\  |                       |
| or                   | New features are     |                       |
| [Lemur](ht           | still being released |                       |
| tp://hub.jmonkeyengi |                      |                       |
| ne.org/t/lemur-api-d |                      |                       |
| ocumentation/27209): |                      |                       |
+----------------------+----------------------+-----------------------+

Using the GUI Node is the default approach in jme3 to create simple
HUDs. If you just quickly want to display a line of text, or a simple
icon on the screen, use the no-frills GUI Node, it's easier.

Simple HUD: GUI Node
====================

You already know the `rootNode` that holds the 3-dimensional scene
graph. jME3 also offers a 2-dimension (orthogonal) node, the `guiNode`.

This is how you use the guiNode for HUDs:

-   Create a GUI element: a BitmapText or Picture object.

-   Attach the element to the guiNode.

-   Place the element in the orthogonal render queue using
    `setQueueBucket(Bucket.Gui)`.

The BitmapTexts and Pictures appear as 2 dimensional element on the
screen.

:::note
By default, the guiNode has some scene graph statistics attached. To
clear the guiNode before you attach your own GUI elements, use the
following methods:

```java
setDisplayStatView(false); setDisplayFps(false);
```
:::

Displaying Pictures in the HUD
------------------------------

A simple image can be displayed using `com.jme3.ui.Picture`.

```java
Picture pic = new Picture("HUD Picture");
pic.setImage(assetManager, "Textures/ColoredTex/Monkey.png", true);
pic.setWidth(settings.getWidth()/2);
pic.setHeight(settings.getHeight()/2);
pic.setPosition(settings.getWidth()/4, settings.getHeight()/4);
guiNode.attachChild(pic);
```

When you set the last boolean in setImage() to true, the alpha channel
of your image is rendered transparent/translucent.

Displaying Text in the HUD
--------------------------

You use `com.jme3.font.BitmapText` to display text on the screen.

```java
BitmapText hudText = new BitmapText(guiFont, false);
hudText.setSize(guiFont.getCharSet().getRenderedSize());      // font size
hudText.setColor(ColorRGBA.Blue);                             // font color
hudText.setText("You can write any string here");             // the text
hudText.setLocalTranslation(300, hudText.getLineHeight(), 0); // position
guiNode.attachChild(hudText);
```

The BitmapFont object `guiFont` is a default font provided by
SimpleApplication. Copy you own fonts as .fnt plus .png files into the
`assets/Interface/Fonts` directory and load them like this:

    BitmapFont myFont = assetManager.loadFont("Interface/Fonts/Console.fnt");
    hudText = new BitmapText(myFont, false);

Positioning HUD Elements
------------------------

-   When positioning GUI text and images in 2D, the **bottom left
    corner** of the screen is `(0f,0f)`, and the **top right corner** is
    at `(settings.getWidth(),settings.getHeight())`.

-   If you have several 2D elements in the GUI bucket that overlap,
    define their depth order by specifing a Z value. For example use
    `pic.move(x, y, -1)` to move the picture to the background, or
    `hudText.setLocalTranslation(x,y,1)` to move text to the foreground.

-   Size and length values in the orthogonal render queue are treated
    like pixels. A 20\*20-wu big quad is rendered 20 pixels wide.

Displaying Geometries in the HUD
--------------------------------

It is technically possible to attach Quads and 3D Geometries to the HUD.
They show up as flat, static GUI elements. The size unit for the guiNode
is pixels, not world units. If you attach a Geometry that uses a lit
Material, you must add a light to the guiNode.

::: {.important}
If you don't see an attached object in the GUI, check it's position and
material (add a light to guiNode). Also verify whether it is not too
tiny to be seen. For comparison: A 1 world-unit wide cube is only 1
pixel wide when attached to the guiNode! You may need to scale it
bigger.
:::

Keeping the HUD Up-To-Date
--------------------------

Use the update loop to keep the content up-to-date.

```java
public void simpleUpdate(float tpf) {
  ...
  hudText.setText("Score: " + score);
  ...
  picture.setImage(assetManager, "Interface/statechange.png", true);
  ...
}
```

Advanced HUD: Nifty GUI
=======================

The recommended approach to create HUDs is using [Nifty
GUI](../../jme3/advanced/nifty_gui).

1.  Lay out the GUI in one or several Nifty XML or Java files.

2.  Write the controller classes in Java.

3.  Load the XML file with the controller object in your game's
    simpleInit() method.

The advantage of Nifty GUI is that it is well integrated into jME and
the jMonkeyEngine SDK, and that it offers all the features that you
expect from a professional modern user interface.

For HUDs, you basically follow the same instructions as for creating a
normal [Nifty GUI](../../jme3/advanced/nifty_gui), you just don't
pause the game while the HUD is up.

See also
========

-   [Fonts](../../jme3/external/fonts)

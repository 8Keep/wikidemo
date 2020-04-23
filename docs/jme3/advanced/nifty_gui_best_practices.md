This page is a short list of best practices that you should know of when
starting to use Nifty GUI. The JME3 tutorials focus on JME3-Nifty
integration related details. You will find more features in the [Nifty
GUI
Manual](https://github.com/nifty-gui/nifty-gui/raw/1.4/nifty-core/manual/nifty-gui-the-manual-1.3.2.pdf).

1.  [Nifty GUI Concepts](../../jme3/advanced/nifty_gui)

2.  **Nifty GUI Best Practices**

3.  [Nifty GUI XML Layout](../../jme3/advanced/nifty_gui_xml_layout)
    or [Nifty GUI Java
    Layout](../../jme3/advanced/nifty_gui_java_layout)

4.  [Nifty GUI Overlay](../../jme3/advanced/nifty_gui_overlay) or
    [Nifty GUI Projection](../../jme3/advanced/nifty_gui_projection)

5.  [Nifty GUI Java
    Interaction](../../jme3/advanced/nifty_gui_java_interaction)

XML or Java?
============

You can build Nifty GUIs using XML or Java syntax. Which one should you
choose? The XML and Java syntax are equivalent, so is it an either-or
choice? Not quite. You typically use XML and Java together.

-   Build your basic static UI layout using XML - it's cleaner to write
    and read.

-   Use Java syntax to control the dynamic parts of the GUI at runtime -
    it's easier to interact with object-oriented code.

-   **Example:** You design two UIs with slightly different XML layouts
    for mobile and desktop. If you use the same IDs for equivalent
    elements, your dynamic Java code works the same no matter which of
    the two base XML layout you use it on. This allows you to switch
    between a phone and a desktop UI by simply swapping one base XML
    file.

```{=html}
<!-- -->
```
-   When you open an XML file, you can switch between XML Editor and GUI
    Preview mode.

Validate the XML before loading
===============================

The [Nifty
class](http://nifty-gui.sourceforge.net/projects/1.4.2/nifty/nifty/apidocs/index.html?de/lessvoid/nifty/Nifty.html)
has *validateXml()* method that takes the same input XML argument as
*fromXml()*. Nifty does not validate the Xml by default, and will blow
up in surprising ways if your XML does not conform to the schema. Adding
the validation step will save you debugging time. You can validate right
before loading, or in your unit tests.

Use Code Completion
===================

-   Include the following XML schema in the first line of your NiftyGUI
    XML files

```{=html}
<!-- -->
```
    <?xml version="1.0" encoding="UTF-8"?>
    <nifty xmlns="http://nifty-gui.lessvoid.com/nifty-gui" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://raw.githubusercontent.com/void256/nifty-gui/1.4/nifty-core/src/main/resources/nifty.xsd https://raw.githubusercontent.com/void256/nifty-gui/1.4/nifty-core/src/main/resources/nifty.xsd">
         <!-- Your IDE now tells you that one <screen></screen> element is expected here, etc. -->
    </nifty>

-   Now your IDE (including the jMonkeyEngine SDK) will display extra
    info and do code completion for the Nifty GUI API.

Use the ID String Right
=======================

-   If you want to interact with an element, give it an ID (String).

-   Use transparent ID-less panels as anonymous spacers.

Sizing Layers and Panels
========================

-   Specify widths and heights in percent to allow the GUI to scale.

-   Use `*` instead of a fixed value to make the element fill the
    remaining space automatically.

-   Be cautious when specifying fixed sizes, and test the outcome in
    various resolutions.

Colorcode for Clarity
=====================

Screens, layers, and panels...

-   ... can have an RGBA background color.\
    You can use temporary colors during the design phase to highlight
    which container is which.

-   ... can be transparent.\
    In the finished GUI, screens, layers, and panels are typically
    transparent; the visible elements are the images, text fields, and
    controls, inside the panels.

:::note
During development (and during a tutorial), the following debug code
makes all panels visible. This helps you arrange them and find errors.

```java
nifty.setDebugOptionPanelColors(true);
```

Before the release, and during testing, set the debug view to false
again.
:::

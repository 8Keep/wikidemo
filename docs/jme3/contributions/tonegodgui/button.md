Button Class
============

-   Buttons have a default state, a hover state and a pressed state.

-   They implement the tonegodGUI MouseButtonListener &
    MouseFocusListener interfaces

-   They provide an optional stillPressed event

-   Can either consist of text label or icon

-   They can be set to Toggle mode.

-   They have default effects set for Hover, Pressed & LoseFocus

-   Buttons are an abstract class providing methods for handling user
    input

Again, the same three options for constructor are available as show in
the [Quick Start
Guide](../../../jme3/contributions/tonegodgui/quickstart).

**Constructor 1:**

```java
/** Parameters:
  * Screen screen,
  * String UID,
  * Vector2f position
  */

Button button = new Button(screen, “button”, new Vector2f(15, 15));
```

**Constructor 2:**

```java
/** Additional Parameter:
  * Vector2f dimensions  */

Button button = new Button(screen, “button”, new Vector2f(15, 15),
    new Vector2f(100, 25)
);
```

**Constructor 3:**

```java
/** Additional Parameters:
  * Vector4f resizeBorders,
  * String defaultImg
  */

Button button = new Button(screen, “button”, new Vector2f(15, 15), new Vector2f(100, 25),
    new Vector4f(5,5,5,5),
    “tonegod/gui/style/def/Button/button_u_x.png”
);
```

Hover State
-----------

You can override the default hover state using the following method:

```java
// Override the information used by the hover effect
button.setButtonHoverInfo(String imagePath, ColorRGBA textHoverColor);
```

Pressed State
-------------

You can override the default pressed state using the following method:

```java
// Override the information used by the pressed effect
button.setButtonPressedInfo(String imagePath, ColorRGBA textPressedColor);
```

Abstract Event Methods:
-----------------------

```java
public void onButtonMouseLeftDown(MouseButtonEvent evt, boolean toggled);
public void onButtonMouseRightDown(MouseButtonEvent evt, boolean toggled);
public void onButtonMouseLeftUp(MouseButtonEvent evt, boolean toggled);
public void onButtonMouseRightUp(MouseButtonEvent evt, boolean toggled);
public void onButtonFocus(MouseMotionEvent evt);
public void onButtonLostFocus(MouseMotionEvent evt);
public void onButtonStillPressedInterval();
```

Adding an Icon
--------------

In place of text, you can use an image icon by calling the following
method:

```java
button.setButtonIcon(float width, float height, String texturePath);
```

Methods specific to the Button class
------------------------------------

```java
//Toggle info
button.setIsToggleButton(boolean isToggleButton); // Also provides a getter
button.getIsToggleButton();
button.getIsToggled();

// Additional state info
button.clearAltImages();

// Enabling/disabling invternal calls (StillPressed event)
button.setInterval(float intervalsPerSecond); // 0 deactivates
```

:::note
When not otherwise specified, use the primitive Element method for
setting the text of a control. For instance, to set the text of the
Button instance, you simply call:

```java
button.setText(String text);
```
:::

ButtonAdapter Class
===================

Tips for using the Button class:

1.  Create a button

2.  Implement all abstract methods

3.  Write your code for the event handlers you wish to use

4.  Change the Button to a ButtonAdapter

5.  Remove all unused event handler methods

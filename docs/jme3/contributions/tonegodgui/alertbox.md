AlertBox Class
==============

The AlertBox class extends Window, adding a scroll area for displaying
messages, as well as a configurable button for closing the AlertBox.

It utilizes the 3 standard constructors as shown in the [Quick Start
Guide](../../../jme3/contributions/tonegodgui/quickstart).

**Constructor 1:**

```java
/** Parameters:
  * Screen screen,
  * String UID,
  * Vector2f position
  */

AlertBox alert = new AlertBox(screen, “alert”, new Vector2f(15, 15));
```

**Constructor 2:**

```java
/** Additional Parameter:
  * Vector2f dimensions  */

AlertBox alert = new AlertBox(screen, “alert”, new Vector2f(15, 15),
    new Vector2f(400, 300)
);
```

**Constructor 3:**

```java
/** Additional Parameters:
  * Vector4f resizeBorders,
  * String defaultImg
  */

AlertBox alert = new AlertBox(screen, “alert”, new Vector2f(15, 15), new Vector2f(400, 300),
    new Vector4f(14,14,14,14),
    “tonegod/gui/style/def/Window/panel_x.png”
);
```

Abstract Event Methods:
-----------------------

```java
public void onButtonOkPressed(MouseButtonEvent evt, boolean toggled);
```

AlertBox specific methods:
--------------------------

```java
alert.setMsg(String text); // Set the alert message
alert.setButtonOkText(String text); // Sets the text for the ok button of the AlertBox
```

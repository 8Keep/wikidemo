CheckBox Class
==============

-   CheckBox's extend the Button class and enable the Toggle setting

-   They provide a default label (which is only added if the label text
    is set).

-   They provide the abstract method onChange for executing code when
    the CheckBox is altered by the user.

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

CheckBox cb = new CheckBox(screen, “cb”, new Vector2f(15, 15));
```

**Constructor 2:**

```java
/** Additional Parameter:
  * Vector2f dimensions  */

CheckBox cb = new CheckBox(screen, “cb”, new Vector2f(15, 15),
    new Vector2f(25, 25)
);
```

**Constructor 3:**

```java
/** Additional Parameters:
  * Vector4f resizeBorders,
  * String defaultImg
  */

CheckBox cb = new CheckBox(screen, “cb”, new Vector2f(15, 15), new Vector2f(25, 25),
    new Vector4f(3,3,3,3),
    “tonegod/gui/style/def/Button/checkbox_u_x.png”
);
```

Hover State
-----------

You can override the default hover state using the following method:

```java
// Override the information used by the hover effect
cb.setButtonHoverInfo(String imagePath, ColorRGBA textHoverColor);
```

Pressed State
-------------

You can override the default pressed state using the following method:

```java
// Override the information used by the pressed effect
cb.setButtonPressedInfo(String imagePath, ColorRGBA textPressedColor);
```

Abstract Event Methods:
-----------------------

```java
public void onChange(boolean isChecked);
```

Methods Specific to the CheckBox Class:
---------------------------------------

```java
cb.setCheckboxText(String text);
cb.getIsChecked();
```

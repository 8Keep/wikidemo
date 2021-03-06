Creating Custom Controls
========================

In this section, I'm going to walk you through creating a custom control
and hopefully pass along a few tip and help standardize how controls are
built. This way (if you feel so inclined) you can share your controls
with other and all will know exactly how to use your control.

A Reusable Contextual Menu
--------------------------

We're going to be building a reusable contextual right-click menu that
will:

-   lock and unlock certain features of a standard window/panel

-   Allow you to add/remove menu items specific to each window as it is
    called.

### STEP 1: Adding the framework for the new class.

First, we'll set up the class and add the three standard constructors.
We'll be using the default Menu style information. The class will remain
abstract to leverage the existing callback method of the super class
Menu.

```java
public abstract class ContextualMenu extends Menu {
    public ContextualMenu(Screen screen, String UID, Vector2f position, boolean isScrollable) {
        this(screen, UID, position,
            screen.getStyle("Menu").getVector2f("defaultSize"),
            screen.getStyle("Menu").getVector4f("resizeBorders"),
            screen.getStyle("Menu").getString("defaultImg"),
            isScrollable
        );
    }

    public ContextualMenu(Screen screen, String UID, Vector2f position, Vector2f dimensions,
            boolean isScrollable) {
        this(screen, UID, position, dimensions,
            screen.getStyle("Menu").getVector4f("resizeBorders"),
            screen.getStyle("Menu").getString("defaultImg"),
            isScrollable
        );
    }
    public ContextualMenu(Screen screen, String UID, Vector2f position, Vector2f dimensions,
            Vector4f resizeBorders, String defaultImg, boolean isScrollable) {
        // Call the super class to construct our basic menu
        super(screen, UID, position, dimensions, resizeBorders, defaultImg, false);
    }
}
```

### STEP 2: Adding a public method for building standard options

This method will be used by calling windows to ensure the menu starts
with only the default options. If the particular calling window needs
extra options, we can add them once this method is called.

```java
public void resetMenuOptions() {
    // First, clear the current menuItems
    getMenuItems().clear();
    // Now add the default items
    /** Parameters:
      * String caption
      * Object value - We'll store a String that gives us a hint as to the menu item function
      * Menu subMenu - null, because there isn't one
      * boolean isToggleItem - adds a CheckBox to the menu item
      */
    addMenuItem("Lock window position", "position", null, true);
    addMenuItem("Lock window size", "dimensions", null, true);
    addMenuItem("Lock current alpha setting", "alpha", null, true);
}
```

Adding Our New Control to the Screen
------------------------------------

```java
// Create a single instance of the reusable contextual menu
ContextualMenu rcMenu = new ContextualMenu(screen, "rcMenu", Vector2f.ZERO) {
    // Override the abstract event method
    @Override
    public void onMenuItemClicked(int index, Object value, boolean isToggled) {
        // Now we will pass this through to our calling window.
        getCallerElement().setOption((String)value, isToggled);
    }
};
rcMenu.resetMenuOptions();
screen.add(rcMenu);
```

Extending the Window Class to Utilize Our Control
-------------------------------------------------

### STEP 1: Extend the window class and add a few methods

We need to entend the window class in order to add right-click event
handling and handle the setOption() method call from our ContextualMenu
class.

```java
public abstract class ContextualWindow extends Window implements MouseButtonListener {
    // Add the 3 standard contructors from the Window class and rename them

    // implement all abstract methods from the listener and add the following to right mouse button up:
    @Override
    public void onRightMouseReleased(MouseButtonEvent evt) {
        ContextualMenu rcMenu = screen.getElementById("rcMenu");
        // set the toggle state for each of the options
        rcMenu.getMenuItem(0).setIsToggled(getIsMovable());
        rcMenu.getMenuItem(1).setIsToggled(getIsResizable());
        rcMenu.getMenuItem(2).setIsToggled(getIgnoreGlobalAlpha());
        // Show the menu
        rcMenu.showMenu(this, screen.getMouseXY().x, screen.getMouseXY().y);
    }

    // Add the setOption method tohandle menu item events
    public void setOption(String value, boolean isToggled) {
        if (value.equals("position")) {
            setIsMovable(isToggled);
        } else if (value.equals("dimensions")) {
            setIsResizable(isToggled);
        } else if (value.equals("alpha")) {
            setIgnoreGlobalAlpha(isToggled);
        }
    }
}
```

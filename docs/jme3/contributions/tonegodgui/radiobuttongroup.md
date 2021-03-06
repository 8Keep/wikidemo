RadioButtonGroup Class
======================

-   Manages the interaction between any number of Button derived classes

-   Provides the abstract method onSelect for executing code when a
    Radio Button is selected by the user.

**Sample Usage:**

```java
/** Parameters:
  * Screen screen,
  * String UID,
  * Form form
  */
RadioButtonGroup rbg = new RadioButtonGroup(screen, "rbg") {
    @Override
    public void onSelect(int index, Button value) {
        System.out.println((String)value);
    }
};
/** Parameters:
  * Vector2f position
  * String caption
  * Object value
  */
rbg.addButton(new ButtonAdapter(screen, new Vector2f(10,10));
rbg.addButton(new CheckBox(screen, new Vector2f(10,30));
rbg.addButton(new RadioButton(screen, new Vector2f(10,50));
rbg.setDisplayElement(null); // null adds the button list to the screen layer
```

Abstract Event Methods:
-----------------------

```java
public void onSelect(int index, Button value);
```

Methods Specific to the CheckBox Class:
---------------------------------------

```java
// Adds all radio buttons as children of specified Element.  Use null to add to screen
rbg.setDisplayElement(Element element);

// Selects a radio button via code
rbg.setSelected(int index);
rbg.setSelected(Button button);
```

Users interact with your jME3 application with different input devices
-- the mouse, the keyboard, or a joystick. To respond to inputs we use
the `inputManager` object in `SimpleApplication`.

This is how you add interaction to your game:

1.  For each action, choose the trigger(s) (a key or mouse click etc)

2.  For each action, add a trigger mapping to the inputManager

3.  Create at least one listener in SimpleApplication

4.  For each action, register its mappings to a listener

5.  Implement each action in the listener

Code Samples
============

-   [TestControls.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/input/TestControls.java)

-   [TestJoystick.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/input/TestJoystick.java)

1. Choose Trigger
=================

Choose one or several key/mouse events for the interaction. We use
`KeyTrigger`, `MouseAxisTrigger`, `MouseButtonTrigger`, `JoyAxisTrigger`
and `JoyButtonTrigger` constants from the `com.jme3.input.controls`
package.

::: {.note}
The MouseAxis and JoyAxis triggers go along the X axis (right/left) or Y
axis (up/down). These Triggers come with extra booleans for the negative
half of the axis (left, down). Remember to write code that listens to
the negative (true) and positive (false) axis!
:::

+-----------------------------------+-----------------------------------+
| Trigger                           | Code                              |
+===================================+===================================+
| Mouse button: Left Click          | MouseButto                        |
|                                   | nTrigger(MouseInput.BUTTON\_LEFT) |
+-----------------------------------+-----------------------------------+
| Mouse button: Right Click         | MouseButton                       |
|                                   | Trigger(MouseInput.BUTTON\_RIGHT) |
+-----------------------------------+-----------------------------------+
| Mouse button: Middle Click        | MouseButtonT                      |
|                                   | rigger(MouseInput.BUTTON\_MIDDLE) |
+-----------------------------------+-----------------------------------+
| Mouse movement: Right             | Mou                               |
|                                   | seAxisTrigger(MouseInput.AXIS\_X, |
|                                   | true)                             |
+-----------------------------------+-----------------------------------+
| Mouse movement: Left              | Mou                               |
|                                   | seAxisTrigger(MouseInput.AXIS\_X, |
|                                   | false)                            |
+-----------------------------------+-----------------------------------+
| Mouse movement: Up                | Mou                               |
|                                   | seAxisTrigger(MouseInput.AXIS\_Y, |
|                                   | true)                             |
+-----------------------------------+-----------------------------------+
| Mouse movement: Down              | Mou                               |
|                                   | seAxisTrigger(MouseInput.AXIS\_Y, |
|                                   | false)                            |
+-----------------------------------+-----------------------------------+
| Mouse wheel: Up                   | MouseAxisTrig                     |
|                                   | ger(MouseInput.AXIS\_WHEEL,false) |
+-----------------------------------+-----------------------------------+
| Mouse wheel: Down                 | MouseAxisTri                      |
|                                   | gger(MouseInput.AXIS\_WHEEL,true) |
+-----------------------------------+-----------------------------------+
| NumPad: 1, 2, 3, ...              | KeyTrigger(KeyInput.KEY\_NUMPAD1) |
|                                   | ...                               |
+-----------------------------------+-----------------------------------+
| Keyboard: 1, 2 , 3, ...           | KeyTrigger(KeyInput.KEY\_1) ...   |
+-----------------------------------+-----------------------------------+
| Keyboard: A, B, C, ...            | KeyTrigger(KeyInput.KEY\_A) ...   |
+-----------------------------------+-----------------------------------+
| Keyboard: Spacebar                | KeyTrigger(KeyInput.KEY\_SPACE)   |
+-----------------------------------+-----------------------------------+
| Keyboard: Shift                   | K                                 |
|                                   | eyTrigger(KeyInput.KEY\_RSHIFT),\ |
|                                   | KeyTrigger(KeyInput.KEY\_LSHIFT)  |
+-----------------------------------+-----------------------------------+
| Keyboard: F1, F2, ...             | KeyTrigger(KeyInput.KEY\_F1) ...  |
+-----------------------------------+-----------------------------------+
| Keyboard: Return, Enter           | K                                 |
|                                   | eyTrigger(KeyInput.KEY\_RETURN),\ |
|                                   | KeyT                              |
|                                   | rigger(KeyInput.KEY\_NUMPADENTER) |
+-----------------------------------+-----------------------------------+
| Keyboard: PageUp, PageDown        | KeyTrigger(KeyInput.KEY\_PGUP),\  |
|                                   | KeyTrigger(KeyInput.KEY\_PGDN)    |
+-----------------------------------+-----------------------------------+
| Keyboard: Delete, Backspace       | KeyTrigger(KeyInput.KEY\_BACK),\  |
|                                   | KeyTrigger(KeyInput.KEY\_DELETE)  |
+-----------------------------------+-----------------------------------+
| Keyboard: Escape                  | KeyTrigger(KeyInput.KEY\_ESCAPE)  |
+-----------------------------------+-----------------------------------+
| Keyboard: Arrows                  | KeyTrigger(KeyInput.KEY\_DOWN),\  |
|                                   | KeyTrigger(KeyInput.KEY\_UP)\     |
|                                   | KeyTrigger(KeyInput.KEY\_LEFT),   |
|                                   | KeyTrigger(KeyInput.KEY\_RIGHT)   |
+-----------------------------------+-----------------------------------+
| Joystick Button:                  | JoyButtonTrigger(0,               |
|                                   | JoyInput.AXIS\_POV\_X),\          |
|                                   | JoyButtonTrigger(0,               |
|                                   | JoyInput.AXIS\_POV\_Y) ?          |
+-----------------------------------+-----------------------------------+
| Joystick Movement: Right          | JoyAxisTrigger(0,                 |
|                                   | JoyInput.AXIS\_POV\_X, true)      |
+-----------------------------------+-----------------------------------+
| Joystick Movement: Left           | JoyAxisTrigger(0,                 |
|                                   | JoyInput.AXIS\_POV\_X, false)     |
+-----------------------------------+-----------------------------------+
| Joystick Movement: Forward        | JoyAxisTrigger(0,                 |
|                                   | JoyInput.AXIS\_POV\_Z, true)      |
+-----------------------------------+-----------------------------------+
| Joystick Movement: Backward       | JoyAxisTrigger(0,                 |
|                                   | JoyInput.AXIS\_POV\_Z, false)     |
+-----------------------------------+-----------------------------------+

In your IDE, use code completion to quickly look up Trigger literals. In
the jMonkeyEngine SDK for example, press ctrl-space or ctrl-/ after
`KeyInput.|` to choose from the list of all keys.

2. Remove Default Trigger Mappings
==================================

    inputManager.deleteMapping( SimpleApplication.INPUT_MAPPING_MEMORY );

+----------------------+----------------------+-----------------------+
| Default Mapping      | Key                  | Description           |
+======================+======================+=======================+
| INPUT\_              | F5                   | Hides the statistics  |
| MAPPING\_HIDE\_STATS |                      | in the bottom left.   |
+----------------------+----------------------+-----------------------+
| INPUT\_              | KEY\_C               | Prints debug output   |
| MAPPING\_CAMERA\_POS |                      | about the camera.     |
+----------------------+----------------------+-----------------------+
| IN                   | KEY\_M               | Prints debug output   |
| PUT\_MAPPING\_MEMORY |                      | for memory usage.     |
+----------------------+----------------------+-----------------------+
| INPUT\_MAPPING\_EXIT | KEY\_ESCAPE          | Closes the            |
|                      |                      | application by        |
|                      |                      | calling `stop();`.    |
|                      |                      | Typically you do not  |
|                      |                      | remove this, unless   |
|                      |                      | you replace it by     |
|                      |                      | another way of        |
|                      |                      | quitting gracefully.  |
+----------------------+----------------------+-----------------------+

3. Add Custom Trigger Mapping
=============================

When initializing the application, add a Mapping for each Trigger.

Give the mapping a meaningful name. The name should reflect the action,
not the button/key (because buttons/keys can change). Here some
examples:

```java
inputManager.addMapping("Pause Game", new KeyTrigger(KeyInput.KEY_P));
inputManager.addMapping("Rotate",     new KeyTrigger(KeyInput.KEY_SPACE));
...
```

There are cases where you may want to provide more then one trigger for
one action. For example, some users prefer the WASD keys to navigate,
while others prefer the arrow keys. Add several triggers for one
mapping, by separating the Trigger objects with commas:

```java
inputManager.addMapping("Left",  new KeyTrigger(KeyInput.KEY_A),
                                 new KeyTrigger(KeyInput.KEY_LEFT)); // A and left arrow
inputManager.addMapping("Right", new KeyTrigger(KeyInput.KEY_D),
                                 new KeyTrigger(KeyInput.KEY_RIGHT)); // D and right arrow
                                 ...
```

4. Create Listeners
===================

The jME3 input manager supports two types of event listeners for inputs:
AnalogListener and ActionListener. You can use one or both listeners in
the same application. Add one or both of the following code snippets to
your main SimpleApplication-based class to activate the listeners.

::: {.note}
The two input listeners do not know, and do not care, which actual key
was pressed. They only know which *named input mapping* was triggered.
:::

ActionListener
--------------

`com.jme3.input.controls.ActionListener`

-   Use for absolute "button pressed or released?, "on or off? actions.

    -   Examples: Pause/unpause, a rifle or revolver shot, jump, click
        to select.

-   JME gives you access to:

    -   The mapping name of the triggered action.

    -   A boolean whether the trigger is still pressed or has just been
        released.

    -   A float of the current time-per-frame as timing factor

```java
private ActionListener actionListener = new ActionListener() {
  public void onAction(String name, boolean keyPressed, float tpf) {
     /** TODO: test for mapping names and implement actions */
  }
};
```

AnalogListener
--------------

`com.jme3.input.controls.AnalogListener`

-   Use for continuous and gradual actions.

    -   Examples: Walk, run, rotate, accelerate vehicle, strafe,
        (semi-)automatic weapon shot

-   JME gives you access to:

    -   The mapping name of the triggered action.

    -   A gradual float value between how long the trigger has been
        pressed.

    -   A float of the current time-per-frame as timing factor

```java
private AnalogListener analogListener = new AnalogListener() {
  public void onAnalog(String name, float keyPressed, float tpf) {
     /** TODO: test for mapping names and implement actions */
  }
};
```

4. Register Mappings to Listeners
=================================

To activate the mappings, you must register them to a Listener. Write
your registration code after the code block where you have added the
mappings to the inputManager.

In the following example, you register the "Pause Game mapping to the
`actionListener` object, because pausing a game is in "either/or
decision.

```java
inputManager.addListener(actionListener, new String[]{"Pause Game"});
```

In the following example, you register navigational mappings to the
`analogListener` object, because walking is a continuous action. Players
typically keep the key pressed to express continuity, for example when
they want to "walk on or "accelerate.

```java
inputManager.addListener(analogListener, new String[]{"Left", "Right"});
```

As you see, you can add several listeners in one String array. You can
call the addListener() method more than once, each time with a subset of
your list, if that helps you keep you code tidy. Again, the Listeners do
not care about actual which keys are configured, you only register named
trigger mappings.

:::note
Did you register an action, but it does not work? Check the string's
capitalization and spelling, it's case sensitive!
:::

5. Implement Actions in Listeners
=================================

You specify the action to be triggered where it says TODO in the
Listener code snippets. Typically, you write a series of if/else
conditions, testing for all the mapping names, and then calling the
respective action.

Make use of the distinction between `if` and `else if` in this
conditional.

-   If several actions can be triggered simultaneously, test for all of
    these with a series of bare \`if\`s. For example, a character can be
    running forward *and* to the left.

-   If certain actions exclude one another, test for them with
    `else if`, the the rest of the exclusive tests can be skipped and
    you save some miliseconds. For example, you either shoot or pick
    something up.

ActionListener
--------------

In the most common case, you want an action to be triggered once, in the
moment when the button or key trigger is released. For example, when the
player presses a key to open a door, or clicks to pick up an item. For
these cases, use an ActionListener and test for `&& !keyPressed`, like
shown in the following example.

```java
private ActionListener actionListener = new ActionListener() {
    public void onAction(String name, boolean keyPressed, float tpf) {

      if (name.equals("Pause Game") && !keyPressed) { // test?
        isRunning = !isRunning;                       // action!
      }

      if ...

    }
  };
```

AnalogListener
--------------

The following example shows how you define actions with an
AnalogListener. These actions are triggered continuously, as long
(intensity `value`) as the named key or mouse button is down. Use this
listeners for semi-automatic weapons and navigational actions.

```java
private AnalogListener analogListener = new AnalogListener() {
    public void onAnalog(String name, float value, float tpf) {

      if (name.equals("Rotate")) {         // test?
        player.rotate(0, value*speed, 0);  // action!
      }

      if ...

    }
  };
```

Let Users Remap Keys
====================

It is likely that your players have different keyboard layouts, are used
to "reversed mouse navigation, or prefer different navigational keys
than the ones that you defined. You should create an options screen that
lets users customize their mouse/key triggers for your mappings. Replace
the trigger literals in the `inputManager.addMapping()` lines with
variables, and load sets of triggers when the game starts.

The abstraction of separating triggers and mappings has the advantage
that you can remap triggers easily. Your code only needs to remove and
add some trigger mappings. The core of the code (the listeners and
actions) remains unchanged.

Detecting Joystick Connection States
====================================

For information regarding the connection state of a joystick see
[Listening for Joystick
Connections](../../jme3/beginner/hello_input_system.xml#listening-for-joystick-connections).

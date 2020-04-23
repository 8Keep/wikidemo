Previous: [Hello Assets](../../jme3/beginner/hello_asset), Next:
[Hello Input System](../../jme3/beginner/hello_input_system)

Now that you know how to load assets, such as 3D models, you want to
implement some gameplay that uses these assets. In this tutorial we look
at the update loop. The update loop of your game is where the action
happens.

Code Sample
===========

```java
package jme3test.helloworld;

import com.jme3.app.SimpleApplication;
import com.jme3.material.Material;
import com.jme3.math.ColorRGBA;
import com.jme3.scene.Geometry;
import com.jme3.scene.shape.Box;

/** Sample 4 - how to trigger repeating actions from the main event loop.
 * In this example, you use the loop to make the player character
 * rotate continuously. */
public class HelloLoop extends SimpleApplication {

    public static void main(String[] args){
        HelloLoop app = new HelloLoop();
        app.start();
    }

    protected Geometry player;

    @Override
    public void simpleInitApp() {
        /** this blue box is our player character */
        Box b = new Box(1, 1, 1);
        player = new Geometry("blue cube", b);
        Material mat = new Material(assetManager,
          "Common/MatDefs/Misc/Unshaded.j3md");
        mat.setColor("Color", ColorRGBA.Blue);
        player.setMaterial(mat);
        rootNode.attachChild(player);
    }

    /* Use the main event loop to trigger repeating actions. */
    @Override
    public void simpleUpdate(float tpf) {
        // make the player rotate:
        player.rotate(0, 2*tpf, 0);
    }
}
```

Build and run the file: You see a constantly rotating cube.

Understanding the Code
======================

Compared to our previous code samples you note that the player Geometry
is now a class field. This is because we want the update loop to be able
to access and transform this Geometry. As usual, we initialize the
player object in the `simpleInitApp()` method.

Now have a closer look at the `simpleUpdate()` method -- this is the
update loop.

-   The `player.rotate(0, 2*tpf, 0);` line changes the rotation of the
    player object.

-   We use the `tpf` variable ("time per frame") to time this action
    depending on the current frames per second rate. This simply means
    that the cube rotates with the same speed on fast and slow machines,
    and the game remains playable.

-   When the game runs, the rotate() code is executed again and again.

Using the Update Loop
=====================

A rotating object is just a simple example. In the update loop, you
typically have many tests and trigger various game actions. This is
where you update score and health points, check for collisions, make
enemies calculate their next move, roll the dice whether a trap has been
set off, play random ambient sounds, and much more.

-   The `simpleUpdate()` method starts running after the
    `simpleInitApp()` method has initialized the scene graph and state
    variables.

-   JME3 executes everything in the `simpleUpdate()` method repeatedly,
    as fast as possible.

    a.  Use the loop to poll the game state and then initiate actions.

    b.  Use the loop to trigger reactions and update the game state.

    c.  Use the loop wisely, because having too many calls in the loop
        also slows down the game.

Init - Update - Render
======================

Note the the three phases of every game:

-   **Init:** The `simpleInitApp()` method is executed only *once*,
    right at the beginning;

-   **Update:** The `simpleUpdate()` method runs *repeatedly*, during
    the game.

-   **Render:** After every update, the jMonkeyEngine *automatically*
    redraws (`renders`) the screen for you.

Since rendering is automatic, initialization and updating are the two
most important concepts in a SimpleApplication-based game for you:

-   The `simpleInitApp()` method is the application's "first breath".

    -   Here you load and create game data (once).

-   The `simpleUpdate()` method is the application's "heartbeat" (the
    time unit is called `ticks`).\
    Here you change their properties to update the game state
    (repeatedly).

:::note
Everything in a game happens either during initialization, or during the
update loop. This means that these two methods grow very long over time.
Follwo these two strategies to spread out init and update code over
several modular Java classes:

-   Move code blocks from the simpleInitApp() method to
    [AppStates](../../jme3/advanced/application_states).

-   Move code blocks from the simpleUpdate() method to [Custom
    Controls](../../jme3/advanced/custom_controls).

Keep this in mind for later when your application grows.
:::

Exercises
=========

Here are some fun things to try:

1.  What happens if you give the rotate() method negative numbers?

2.  Can you create two Geometries next to each other, and make one
    rotate twice as fast as the other? (use the `tpf` variable)

3.  Can you make a cube that pulsates? (grows and shrinks)

4.  Can you make a cube that changes color? (change and set the
    Material)

5.  Can you make a rolling cube? (rotate around the x axis, and
    translate along the z axis)

Look back at the [Hello Node](../../jme3/beginner/hello_node)
tutorial if you do not remember the transformation methods for scaling,
translating, and rotating.

::: {.important}
Link to user-proposed solutions: [Some proposed
solutions](../../jme3/beginner/solutions)\
Be sure to try to solve them for yourself first!
:::

Conclusion
==========

Now you are listening to the update loop, the "heartbeat" of the game,
and you can add all kinds of action to it.

The next thing the game needs is some *inter*action! Continue learning
how to [respond to user
input](../../jme3/beginner/hello_input_system).

See also:

-   Advanced jME3 developers use [Application
    States](../../jme3/advanced/application_states) and [Custom
    Controls](../../jme3/advanced/custom_controls) to implement game
    mechanics in their update loops. You will come across these topics
    again later when you proceed to more advanced documentation.

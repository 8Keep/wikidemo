When players steer a game character with 1st-person view, they directly
steer the camera (`flyCam.setEnabled(true);`), and they never see the
walking character itself. In a game with 3rd-person view, however, the
players see the character walk, and you (the game developer) want to
make the camera follow the character around when it walks.

There are two ways how the camera can do that:

-   Registering a chase camera to the player and the input manager.

-   Attaching the camera to the character using a camera node.

**Important:** Using third-person view requires you to deactivate the
default flyCam (first-person view). This means that you have to
configure your own navigation ([key inputs and
analogListener](../../jme3/advanced/input_handling)) that make your
player character walk. For moving a physical player character, use
`player.setWalkDirection()`, for a non-physical character you can use
`player.move()`.

Code Samples
============

Press the WASD or arrow keys to move. Drag with the left mouse button to
rotate.

-   [TestChaseCamera.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/input/TestChaseCamera.java)

-   [TestCameraNode.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/input/TestCameraNode.java)

Camera Node
===========

To make the camera follow a target node, add this camera node code to
your init method (e.g. `simpleInitApp()`). The `target` spatial is
typically the player node.

```java
// Disable the default flyby cam
flyCam.setEnabled(false);
//create the camera Node
camNode = new CameraNode("Camera Node", cam);
//This mode means that camera copies the movements of the target:
camNode.setControlDir(ControlDirection.SpatialToCamera);
//Attach the camNode to the target:
target.attachChild(camNode);
//Move camNode, e.g. behind and above the target:
camNode.setLocalTranslation(new Vector3f(0, 5, -5));
//Rotate the camNode to look at the target:
camNode.lookAt(target.getLocalTranslation(), Vector3f.UNIT_Y);
```

::: {.important}
Where the example says
`camNode.setLocalTranslation(new Vector3f(0, 5, -5));`, you have to
supply your own start position for the camera. This depends on the size
of your target (the player character) and its position in your
particular scene. Optimally, you set this to a spot a bit behind and
above the target.
:::

+-----------------------------------+-----------------------------------+
| Methods                           | Description                       |
+===================================+===================================+
| setControlDir(                    | User input steers the target      |
| ControlDirection.SpatialToCamera) | spatial, and the camera follows   |
|                                   | the spatial.\                     |
|                                   | The spatial's transformation is   |
|                                   | copied over the camera's          |
|                                   | transformation.\                  |
|                                   | Example: Use with                 |
|                                   | [CharacterControl](..             |
|                                   | /../jme3/advanced/physics)led |
|                                   | spatial.                          |
+-----------------------------------+-----------------------------------+
| setControlDir(                    | User input steers the camera, and |
| ControlDirection.CameraToSpatial) | the target spatial follows the    |
|                                   | camera.\                          |
|                                   | The camera's transformation is    |
|                                   | copied over the spatial's         |
|                                   | transformation. Use with          |
|                                   | first-person flyCam.              |
+-----------------------------------+-----------------------------------+

**Code sample:**

-   [TestCameraNode.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/input/TestCameraNode.java)
    -- Press the WASD or arrow keys to move. Drag with the left mouse
    button to rotate.

Chase Camera
============

To activate the chase camera, add the following code to your init method
(e.g. `simpleInitApp()`). The `target` spatial is typically the player
node. You will be able to rotate the target by dragging (keeping the
left mouse button pressed and moving the mouse).

```java
// Disable the default flyby cam
flyCam.setEnabled(false);
// Enable a chase cam for this target (typically the player).
ChaseCamera chaseCam = new ChaseCamera(cam, target, inputManager);
chaseCam.setSmoothMotion(true);
```

+-----------------------------------+-----------------------------------+
| Method                            | Description                       |
+===================================+===================================+
| setInvertVerticalAxis(true)       | Invert the camera's vertical      |
|                                   | rotation Axis                     |
+-----------------------------------+-----------------------------------+
| setInvertHorizontalAxis(true)     | Invert the camera's horizontal    |
|                                   | rotation Axis                     |
+-----------------------------------+-----------------------------------+
| setTrailingEnabled(true)          | Camera follows the target and     |
|                                   | flies around and behind when the  |
|                                   | target moves towards the camera.  |
|                                   | Trailing only works with smooth   |
|                                   | motion enabled. (Default)         |
+-----------------------------------+-----------------------------------+
| setTrailingEnabled(false)         | Camera follows the target, but    |
|                                   | does not rotate around the target |
|                                   | when the target changes           |
|                                   | direction.                        |
+-----------------------------------+-----------------------------------+
| setSmoothMotion(true)             | Activate SmoothMotion when        |
|                                   | trailing. This means the camera   |
|                                   | seems to accelerate and fly after |
|                                   | the character, when it has caught |
|                                   | up, it slows down again.          |
+-----------------------------------+-----------------------------------+
| setSmoothMotion(false)            | Disable smooth camera motion.     |
|                                   | Disabling SmoothMotion also       |
|                                   | disables trailing.                |
+-----------------------------------+-----------------------------------+
| setLookA                          | Camera looks at a point 3 world   |
| tOffset(Vector3f.UNIT\_Y.mult(3)) | units above the target.           |
+-----------------------------------+-----------------------------------+
| setToggleRotationTrigger(new      | Enable rotation by keeping the    |
| MouseButtonTr                     | middle mouse button pressed (like |
| igger(MouseInput.BUTTON\_MIDDLE)) | in Blender). This disables the    |
|                                   | rotation on right and left mouse  |
|                                   | button click.                     |
+-----------------------------------+-----------------------------------+
| setToggleRotationTrigger(new      | Activate mutiple triggers for the |
| MouseButtonTrigger(\              | rotation of the camera, e.g.      |
| MouseInput.BUTTON\_MIDDLE),\      | spacebar and middle mouse button, |
| new                               | etc.                              |
| KeyTrigger(KeyInput.KEY\_SPACE))  |                                   |
+-----------------------------------+-----------------------------------+
| setRotationSensitivity(5f)        | How fast the camera rotates. Use  |
|                                   | values around \<1.0f (all bigger  |
|                                   | values are ignored).              |
+-----------------------------------+-----------------------------------+

**Code sample:**

-   [TestChaseCamera.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/input/TestChaseCamera.java)
    -- Press the WASD or arrow keys to move. Drag with the left mouse
    button to rotate.

Which to Choose?
================

What is the difference of the two code samples above?

+-----------------------------------+-----------------------------------+
| CameraNode                        | ChaseCam                          |
+===================================+===================================+
| Camera follows immediately, flies | Camera moves smoothly and         |
| at same speed as target.          | accelerates and decelerates,      |
|                                   | flies more slowly than the target |
|                                   | and catches up.                   |
+-----------------------------------+-----------------------------------+
| Camera stays attached to the      | Camera orbits the target and      |
| target at a constant distance.    | approaches slowly.                |
+-----------------------------------+-----------------------------------+
| Drag-to-Rotate rotates the target | Drag-to-Rotate rotates only the   |
| and the camera. You always see    | camera. You can see the target    |
| the target from behind.           | from various sides.               |
+-----------------------------------+-----------------------------------+

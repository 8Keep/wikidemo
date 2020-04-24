:::note
By default, the mouse pointer is invisible, and the mouse is set up to
control the camera rotation.
:::

Default Camera
==============

The default com.jme3.renderer.Camera object is `cam` in
com.jme3.app.Application.

The camera object is created with the following defaults:

-   Width and height are set to the current Application's
    settings.getWidth() and settings.getHeight() values.

-   Frustum Perspective:

    -   Frame of view angle of 45° along the Y axis

    -   Aspect ratio of width divided by height

    -   Near view plane of 1 wu

    -   Far view plane of 1000 wu

-   Start location at (0f, 0f, 10f).

-   Start direction is looking at the origin.

+-----------------------------------+-----------------------------------+
| Method                            | Usage                             |
+===================================+===================================+
| cam.getLocation(), setLocation()  | The camera position               |
+-----------------------------------+-----------------------------------+
| cam.getRotation(), setRotation()  | The camera rotation               |
+-----------------------------------+-----------------------------------+
| cam.getLeft(), setLeft()          | The left axis of the camera       |
+-----------------------------------+-----------------------------------+
| cam.getUp(), setUp()              | The up axis of the camera,        |
|                                   | usually Vector3f(0,1,0)           |
+-----------------------------------+-----------------------------------+
| cam.getDirection()                | The vector the camera is facing   |
+-----------------------------------+-----------------------------------+
| cam.getAxes(),                    | One accessor for the three        |
| setAxes(left,up,dir)              | properties left/up/direction.     |
+-----------------------------------+-----------------------------------+
| cam.getFrame(),                   | One accessor for the four         |
| setFrame(loc,left,up,dir)         | properties                        |
|                                   | location/left/up/direction.       |
+-----------------------------------+-----------------------------------+
| cam.resize(width, height,         | Resize an existing camera object  |
| fixAspect)                        | while keeping all other settings. |
|                                   | Set fixAspect to true to adjust   |
|                                   | the aspect ratio (?)              |
+-----------------------------------+-----------------------------------+
| cam.setFrustum( near, far, left,  | The frustum is defined by the     |
| right, top, bottom )              | near/far plane, left/right plane, |
|                                   | top/bottom plane (all distances   |
|                                   | as float values)                  |
+-----------------------------------+-----------------------------------+
| cam.setFrustumPerspective( fovY,  | The frustum is defined by view    |
| aspect ratio, near, far)          | angle along the Y axis (in        |
|                                   | degrees), aspect ratio, and the   |
|                                   | near/far plane.                   |
+-----------------------------------+-----------------------------------+
| cam.lookAt(target,up)             | Turn the camera to look at        |
|                                   | Coordinate target, and rotate it  |
|                                   | around the up axis.               |
+-----------------------------------+-----------------------------------+
| cam.setParallelProjection(false)  | Normal perspective                |
+-----------------------------------+-----------------------------------+
| cam.setParallelProjection(true)   | Parallel projection perspective   |
+-----------------------------------+-----------------------------------+
| c                                 | Converts the given position from  |
| am.getScreenCoordinates(worldPos) | world space to screen space.      |
+-----------------------------------+-----------------------------------+

:::note
After you change view port, frustum, or frame, call `cam.update();`
:::

FlyBy Camera
============

The `flyCam` class field gives you access to an AppState that extends
the default camera in `com.jme3.app.SimpleApplication` with more
features. The input manager of the `com.jme3.input.FlyByCamera` AppState
is preconfigured to respond to the WASD keys for walking forwards and
backwards, and strafing to the sides; move the mouse to rotate the
camera ("Mouse Look"), scroll the mouse wheel for zooming in or out. The
QZ keys raise or lower the camera vertically.

    Q  W             up   forw
    A  S  D    -->  left  back  right
    Z               down

+-----------------------------------+-----------------------------------+
| Method                            | Usage                             |
+===================================+===================================+
| flyCam.setEnabled(true);          | Activate the flyby cam            |
+-----------------------------------+-----------------------------------+
| flyCam.setMoveSpeed(10);          | Control the move speed            |
+-----------------------------------+-----------------------------------+
| flyCam.setRotationSpeed(10);      | Control the rotation speed        |
+-----------------------------------+-----------------------------------+
| flyCam.setDragToRotate(true)      | Forces the player to keep mouse   |
|                                   | button pressed to rotate camera,  |
|                                   | typically used for Applets. If    |
|                                   | false (default), all mouse        |
|                                   | movement will be captured and     |
|                                   | interpreted as rotations.         |
+-----------------------------------+-----------------------------------+

The FlyByCamera is active by default, but you can change all these
defaults for your game.

Chase Camera
============

jME3 also supports an optional Chase Cam that can follow a moving target
Spatial (`com.jme3.input.ChaseCamera`). When you use the chase cam, the
player clicks and hold the mouse button to rotate the camera around the
camera target. You can use a chase cam if you need the mouse pointer
visible in your game.

```java
flyCam.setEnabled(false);
ChaseCamera chaseCam = new ChaseCamera(cam, target, inputManager);
```

+-----------------------------------+-----------------------------------+
| Method                            | Usage                             |
+===================================+===================================+
| chaseCam.setSmoothMotion(true);   | Interpolates a smoother           |
|                                   | acceleration/deceleration when    |
|                                   | the camera moves.                 |
+-----------------------------------+-----------------------------------+
| c                                 | The lower the chasing             |
| haseCam.setChasingSensitivity(5f) | sensitivity, the slower the       |
|                                   | camera will follow the target     |
|                                   | when it moves.                    |
+-----------------------------------+-----------------------------------+
| chas                              | The lower the traling             |
| eCam.setTrailingSensitivity(0.5f) | sensitivity, the slower the       |
|                                   | camera will begin to go after the |
|                                   | target when it moves. Default is  |
|                                   | 0.5;                              |
+-----------------------------------+-----------------------------------+
| ch                                | The lower the sensitivity, the    |
| aseCam.setRotationSensitivity(5f) | slower the camera will rotate     |
|                                   | around the target when the mosue  |
|                                   | is dragged. Default is 5.         |
+-----------------------------------+-----------------------------------+
| chaseCam                          | This prevents the camera to stop  |
| .setTrailingRotationInertia(0.1f) | too abruptly when the target      |
|                                   | stops rotating before the camera  |
|                                   | has reached the target's trailing |
|                                   | position. Default is 0.1f.        |
+-----------------------------------+-----------------------------------+
| chaseCam.setDefaultDistance(40);  | The default distance to the       |
|                                   | target at the start of the        |
|                                   | application.                      |
+-----------------------------------+-----------------------------------+
| chaseCam.setMaxDistance(40);      | The maximum zoom distance.        |
|                                   | Default is 40f.                   |
+-----------------------------------+-----------------------------------+
| chaseCam.setMinDistance(1);       | The minimum zoom distance.        |
|                                   | Default is 1f.                    |
+-----------------------------------+-----------------------------------+
| chaseCam.setMin                   | The minimal vertical rotation     |
| VerticalRotation(-FastMath.PI/2); | angle of the camera around the    |
|                                   | target. Default is 0.             |
+-----------------------------------+-----------------------------------+
| chaseCam.setDefault               | The default vertical rotation     |
| VerticalRotation(-FastMath.PI/2); | angle of the camera around the    |
|                                   | target at the start of the        |
|                                   | application.                      |
+-----------------------------------+-----------------------------------+
| chaseCam.setDefaultHo             | The default horizontal rotation   |
| rizontalRotation(-FastMath.PI/2); | angle of the camera around the    |
|                                   | target at the start of the        |
|                                   | application.                      |
+-----------------------------------+-----------------------------------+

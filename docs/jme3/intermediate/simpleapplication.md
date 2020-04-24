The base class of the jMonkeyEngine3 is
`com.jme3.app.SimpleApplication`. Your first game's Main class extends
SimpleApplication directly. When you feel confident you understand the
features, you will typically extend SimpleApplication to create a custom
base class for the type of games that you want to develop.

SimpleApplication gives you access to standard game features, such as a
scene graph (rootNode), an asset manager, a user interface (guiNode),
input manager, audio manager, a physics simulation, and a fly-by camera.
You call app.start() and app.stop() on your game instance to start or
quit the application.

::: {.important}
For each game, you (directly or indirectly) extend SimpleApplication
exactly once as the central class. If you need access to any
SimpleApplication features from another game class, make the other class
extend [AbstractAppState](../../jme3/advanced/application_states)
(don't extend SimpleApplication once more).
:::

:::note
The SimpleApplication class is undergoing changes. To understand how
these changes may affect your projects and how to best prepare for them,
see [The Future of
SimpleApplication](../../jme3/beginner/hello_simpleapplication.xml#the-future-of-simpleapplication#)
topic in the "Hello SimpleApplication" tutorial for beginners.
:::

The following code sample shows the typical base structure of a jME3
game:

```java
import com.jme3.app.SimpleApplication;

public class MyBaseGame extends SimpleApplication {

    public static void main(String[] args){
        MyBaseGame app = new MyBaseGame();
        app.start();
    }

    @Override
    public void simpleInitApp() {
       /* Initialize the game scene here */
    }

    @Override
    public void simpleUpdate(float tpf) {
       /* Interact with game events in the main loop */
    }

    @Override
    public void simpleRender(RenderManager rm) {
       /* (optional) Make advanced modifications to frameBuffer and scene graph. */
    }
}
```

Let's have a look at the API of the base class.

Application Class
=================

Internally, com.jme3.app.SimpleApplication extends
com.jme3.app.Application. The Application class represents a generic
real-time 3D rendering jME3 application (i.e., not necessarily a game).
Typically, you do not extend com.jme3.app.Application directly to create
a game.

+-----------------+-----------------------------------------------------+
| Application     | Purpose                                             |
| class fields    |                                                     |
+=================+=====================================================+
| viewPort\       | The view object for the default camera. You can     |
| getViewPort()   | register advanced [post-processor                   |
|                 | filters](../../jme3/advanced/effects_overview)  |
|                 | here.                                               |
+-----------------+-----------------------------------------------------+
| settings\       | Use this AppSettings object to specify the display  |
| setSettings()   | width and height (by default 640x480), color bit    |
|                 | depth, z-buffer bits, anti-aliasing samples, and    |
|                 | update frequency, video and audio renderer, asset   |
|                 | manager.\                                           |
|                 | See:                                                |
|                 | [App                                                |
|                 | Settings](../../jme3/intermediate/appsettings). |
+-----------------+-----------------------------------------------------+
| cam\            | The default                                         |
| getCamera()     | [camera](../../jme3/advanced/camera) provides   |
|                 | perspective projection, 45° field of view, near     |
|                 | plane = 1 wu, far plane = 1000 wu.                  |
+-----------------+-----------------------------------------------------+
| assetManager\   | An object that manages paths for loading models,    |
| ge              | textures, materials, sounds, etc.\                  |
| tAssetManager() | By default the [Asset                               |
|                 | Manager](../../jme3/advanced/asset_manager)     |
|                 | paths are relative to your project's root           |
|                 | directory.                                          |
+-----------------+-----------------------------------------------------+
| audioRenderer\  | This object gives you access to the jME3            |
| get             | [audio](../../jme3/advanced/audio) system.      |
| AudioRenderer() |                                                     |
+-----------------+-----------------------------------------------------+
| listener\       | This object represents the user's ear for the jME3  |
| getListener()   | [audio](../../jme3/advanced/audio) system.      |
+-----------------+-----------------------------------------------------+
| inputManager\   | Use the                                             |
| ge              | [in                                                 |
| tInputManager() | putManager](../../jme3/advanced/input_handling) |
|                 | to configure your custom inputs (mouse movement,    |
|                 | clicks, key presses, etc) and set mouse pointer     |
|                 | visibility.                                         |
+-----------------+-----------------------------------------------------+
| stateManager\   | You use the Application's state manager to activate |
| ge              | [AppS                                               |
| tStateManager() | tates](../../jme3/advanced/application_states), |
|                 | such as [Physics](../../jme3/advanced/physics). |
+-----------------+-----------------------------------------------------+

+-----------------+-----------------------------------------------------+
| Application     | Purpose                                             |
| methods         |                                                     |
+=================+=====================================================+
| setPauseOn      | Set this boolean whether the game loop should stop  |
| LostFocus(true) | running when ever the window loses focus (typical   |
|                 | for single-player game). Set this to false for      |
|                 | real-time and multi-player games that keep running. |
+-----------------+-----------------------------------------------------+
| start()         | Call this method to start a jME3 game. By default   |
|                 | this opens a new jME3 window, initializes the       |
|                 | scene, and starts the event loop.                   |
+-----------------+-----------------------------------------------------+
| restart()       | Loads modified                                      |
|                 | [Ap                                                 |
|                 | pSettings](../../jme3/intermediate/appsettings) |
|                 | into the current application context.               |
+-----------------+-----------------------------------------------------+
| stop()          | Stops the running jME3 game and closes the jME3     |
|                 | window.                                             |
+-----------------+-----------------------------------------------------+
| start           | Switch Context com.​jme3.​system.​JmeContext.Type   |
| (Type.Headless) | when starting the application:\                     |
| etc             | Type.Display -- jME application runs in a window of |
|                 | its own. (This is the default.)\                    |
|                 | Type.Canvas -- jME application is embedded in a     |
|                 | [Swing                                              |
|                 | Canvas](../../jme3/advanced/swing_canvas).\     |
|                 | Type.Headless -- jME application runs its event     |
|                 | loop without calculating any view and without       |
|                 | opening any window. Can be used for a [Headless     |
|                 | Server](../../jme3/advanced/headless_server)    |
|                 | application.\                                       |
|                 | Type.OffscreenSurface -- jME application view is    |
|                 | not shown and no window opens, but everything       |
|                 | calculated and cached as bitmap (back buffer) for   |
|                 | use by other applications.                          |
+-----------------+-----------------------------------------------------+

+-----------------+-----------------------------------------------------+
| Internal class  | Purpose                                             |
| field/method    |                                                     |
+=================+=====================================================+
| context\        | The application context contains the renderer,      |
| getContext()    | [App                                                |
|                 | Settings](../../jme3/intermediate/appsettings), |
|                 | timer, etc. Typically, you do not directly access   |
|                 | the context object.                                 |
+-----------------+-----------------------------------------------------+
| inputEnabled    | this internal boolean is true if you want the       |
|                 | system to listen for user inputs, and false if you  |
|                 | just want to play a non-interactive scene. You      |
|                 | change the boolean using                            |
|                 | [App                                                |
|                 | Settings](../../jme3/intermediate/appsettings). |
+-----------------+-----------------------------------------------------+
| keyInput,       | Default input contexts for keyboard, mouse, and     |
| mouseInput\     | joystick. Internally used to enable handling of     |
| joyInput,       | joysticks or touch devices. The base classes        |
| touchInput      | contain key and mouse button enums.                 |
+-----------------+-----------------------------------------------------+
| renderManager\  | Low-level and high-level rendering interface.       |
| getR            | Mostly used internally.                             |
| enderManager()\ |                                                     |
| renderer\       |                                                     |
| getRenderer();  |                                                     |
+-----------------+-----------------------------------------------------+
| guiViewPort\    | The view object for the orthogonal GUI view. Only   |
| g               | used internally for                                 |
| etGuiViewPort() | [HUD](../../jme3/advanced/hud)s.                |
+-----------------+-----------------------------------------------------+
| timer           | An internal update loop timer, don't use. See `tpf` |
|                 | in `simpleUpdate()` below to learn about timers.    |
+-----------------+-----------------------------------------------------+
| paused          | Boolean is used only internally during runtime to   |
|                 | pause/unpause a game. (You need to implement your   |
|                 | own isRunning boolean or so.)                       |
+-----------------+-----------------------------------------------------+

SimpleApplication Class
=======================

The com.jme3.app.SimpleApplication class extends the generic
com.jme3.app.Application class. SimpleApplication makes it easy to start
writing a game because it adds typical functionality:

-   First-person (fly-by) camera

-   Scene graph that manages your models in the rendered 3D scene.

-   Useful default input mappings (details below.)

Additional to the functionality that Application brings,
SimpleApplication offers the following methods and fields that can be
used, for example, inside the `simpleInitApp()` method:

+-----------------+-----------------------------------------------------+
| Si              | Purpose                                             |
| mpleApplication |                                                     |
| Class Field     |                                                     |
+=================+=====================================================+
| rootNode\       | The root node of the scene graph. Attach a          |
| getRootNode()   | [Spatial](../../jme3/advanced/spatial) to the   |
|                 | rootNode and it appears in the 3D scene.            |
+-----------------+-----------------------------------------------------+
| guiNode\        | Attach flat GUI elements (such as                   |
| getGuiNode()    | [HUD](../../jme3/advanced/hud) images and text) |
|                 | to this orthogonal GUI node to make them appear on  |
|                 | the screen.                                         |
+-----------------+-----------------------------------------------------+
| flyCam\         | The default first-person fly-by camera control.     |
| g               | This default camera control lets you navigate the   |
| etFlyByCamera() | 3D scene using the preconfigured WASD and arrow     |
|                 | keys and the mouse.                                 |
+-----------------+-----------------------------------------------------+

+-----------------+-----------------------------------------------------+
| Si              | Purpose                                             |
| mpleApplication |                                                     |
| Method          |                                                     |
+=================+=====================================================+
| l               | Call this method to print live statistic            |
| oadStatsView(); | information to the screen, such as current          |
|                 | frames-per-second and triangles/vertices counts.    |
|                 | You use this info typically only during development |
|                 | or debugging.                                       |
+-----------------+-----------------------------------------------------+
| loadFPSText();  | Call this method to print the current framerate     |
|                 | (frames per second) to the screen.                  |
+-----------------+-----------------------------------------------------+
| setDis          | A default SimpleApplication displays the framerate  |
| playFps(false); | (frames per second) on the screen. You can choose   |
|                 | to deactivate the FPS display using this command.   |
+-----------------+-----------------------------------------------------+
| setDisplayS     | A default SimpleApplication displays mesh           |
| tatView(false); | statistics on the screen using the                  |
|                 | com.jme3.app.StatsView class. The information is    |
|                 | valuable during the development and debugging       |
|                 | phase, but for the release, you should hide the     |
|                 | statistics HUD.\                                    |
|                 | **\*Note:** There is a dark quad behind the stats.  |
|                 | Each letter displayed in the stats is a quad. Each  |
|                 | quad has 4 vertexes and 2 triangles.\               |
|                 |                                                     |
|                 | 456/2 = 228\                                        |
|                 | 912/4 = 228                                         |
|                 |                                                     |
|                 | This means if you display stats, there will be 456  |
|                 | triangles and 912 vertices showing in the stats     |
|                 | view in addition to anything you add yourself.      |
+-----------------+-----------------------------------------------------+

+---------------------------+------------------------------------------+
| SimpleApplication         | Purpose                                  |
| Interface                 |                                          |
+===========================+==========================================+
| public void               | Override this method to initialize the   |
| simpleInitApp()           | game scene. Here you load and create     |
|                           | objects, attach Spatials to the          |
|                           | rootNode, and bring everything in its    |
|                           | starts position. See also [Application   |
|                           | States](../                              |
|                           | ../jme3/advanced/application_states) |
|                           | for best practices.                      |
+---------------------------+------------------------------------------+
| public void               | Override this method to hook into the    |
| simpleUpdate(float tpf)   | [update                                  |
|                           | loo                                      |
|                           | p](../../jme3/advanced/update_loop), |
|                           | all code you put here is repeated in a   |
|                           | loop. Use this loop to poll the current  |
|                           | game state and respond to changes, or to |
|                           | let the game mechanics generate          |
|                           | encounters and initiate state changes.   |
|                           | Use the float `tpf` as a factor to time  |
|                           | actions relative to the *time per frame* |
|                           | in seconds: `tpf` is large on slow PCs,  |
|                           | and small on fast PCs.\                  |
|                           | For more info on how to hook into the    |
|                           | update loop, see [Application            |
|                           | States](../                              |
|                           | ../jme3/advanced/application_states) |
|                           | and [Custom                              |
|                           | Controls](.                              |
|                           | ./../jme3/advanced/custom_controls). |
+---------------------------+------------------------------------------+
| public void               | **Optional:** Advanced developers can    |
| s                         | override this method if the need to      |
| impleRender(RenderManager | modify the frameBuffer and scene graph   |
| rm)                       | directly.                                |
+---------------------------+------------------------------------------+

:::note
Use `app.setShowSettings(true);` to present the user with a splashscreen
and the built-in display settings dialog when starting the game; or use
`app.setShowSettings(false);` to hide the built-in screen (in this case,
you may want to provide a custom splashscreen and settings panel). Set
this boolean before calling `app.start()` in the `main()` method of the
SimpleApplication. See also
[AppSettings](../../jme3/intermediate/appsettings).
:::

Default Input Mappings
======================

The following default navigational input actions are mapped by the
default `flyCam` control in a SimpleApplication: You can use these
mappings for debugging and testing until you implement custom [input
handling](../../jme3/advanced/input_handling).

+-----------------------------------+-----------------------------------+
| Key                               | Action                            |
+===================================+===================================+
| KEY\_ESCAPE                       | Quits the game by calling         |
|                                   | `app.stop()`                      |
+-----------------------------------+-----------------------------------+
| KEY\_C                            | Debug key: Prints camera          |
|                                   | position, rotation, and direction |
|                                   | to the out stream.                |
+-----------------------------------+-----------------------------------+
| KEY\_M                            | Debug key: Prints memory usage    |
|                                   | stats the out stream.             |
+-----------------------------------+-----------------------------------+
| F5                                | Hides or shows the statistics the |
|                                   | bottom left.                      |
+-----------------------------------+-----------------------------------+

As long as the `flyCam` is enabled, the following so-called "WASD"
inputs, including MouseLook, are available:

+-----------------------------------+-----------------------------------+
| Camera Motion                     | Key or Mouse Input                |
+===================================+===================================+
| Move Forward                      | KEY\_W                            |
+-----------------------------------+-----------------------------------+
| Move Left (Strafe)                | KEY\_A                            |
+-----------------------------------+-----------------------------------+
| Move Backward                     | KEY\_S                            |
+-----------------------------------+-----------------------------------+
| Move Right (Strafe)               | KEY\_D                            |
+-----------------------------------+-----------------------------------+
| Move Vertical Upward              | KEY\_Q                            |
+-----------------------------------+-----------------------------------+
| Move Vertical Downward            | KEY\_Z                            |
+-----------------------------------+-----------------------------------+
| Rotate Left                       | KEY\_LEFT, or move mouse          |
|                                   | horizontally left (-x)            |
+-----------------------------------+-----------------------------------+
| Rotate Right                      | KEY\_RIGHT, or move mouse         |
|                                   | horizontally right (+x)           |
+-----------------------------------+-----------------------------------+
| Rotate Up                         | KEY\_UP, or move mouse vertically |
|                                   | forward (+y)                      |
+-----------------------------------+-----------------------------------+
| Rotate Down                       | KEY\_DOWN, or move mouse          |
|                                   | vertically backward (-y)          |
+-----------------------------------+-----------------------------------+
| Rotate                            | BUTTON\_LEFT, or hold left mouse  |
|                                   | button and drag to rotate         |
+-----------------------------------+-----------------------------------+
| Zoom In                           | AXIS\_WHEEL, or scroll mouse      |
|                                   | wheel backward                    |
+-----------------------------------+-----------------------------------+
| Zoom Out                          | AXIS\_WHEEL, or scroll mouse      |
|                                   | wheel forward                     |
+-----------------------------------+-----------------------------------+

Defaults and Customization
==========================

By default, a SimpleApplication displays Statistics
(`new StatsAppState()`), has debug output keys configured
(`new DebugKeysAppState()`), and enables the flyCam
(`new FlyCamAppState()`). You can customize which you want to reuse in
your SimpleApplication.

The following example shows how you can remove one of the default
AppStates, in this case, the FlyCamAppState:

-   Either, in your application's contructor, you create the
    SimpleApplication with only the AppStates you want to keep:

```{=html}
<!-- -->
```
    public MyAppliction() {
      super( new StatsAppState(), new DebugKeysAppState() );
    }

-   Or, in the `simpleInitApp()` method, you remove the ones you do not
    want to keep:

```{=html}
<!-- -->
```
      public void simpleInitApp() {
        stateManager.detach( stateManager.getState(FlyCamAppState.class));
        ...

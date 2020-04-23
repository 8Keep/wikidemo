Every class that extends jme3.app.SimpleApplication has properties that
can be configured by customizing a `com.jme3.system.AppSettings` object.

::: {.important}
Configure application settings in `main()`, before you call
`app.start()` on the application object. If you change display settings
during runtime, for example in `simpleInitApp()`, you must call
`app.restart()` to make them take effect.
:::

**Note:** Other runtime settings are covered in
[SimpleApplication](../../jme3/intermediate/simpleapplication).

Code Samples
============

Specify settings for a game (here called `MyGame`, or whatever you
called your SimpleApplication instance) in the `main()` method before
the game starts:

```java
public static void main(String[] args) {
  AppSettings settings = new AppSettings(true);
  settings.setResolution(640,480);
  // ... other properties, see below
  MyGame app = new MyGame();
  app.setSettings(settings);
  app.start();
}
```

Set the boolean in the AppSettings contructor to true if you want to
keep the default settings for values that you do not specify. Set this
parameter to false if you want the application to load user settings
from previous launches. In either case you can still customize
individual settings.

::: {.warning}
The settings are saved based on the title of your game (default =
"jMonkey Engine 3.x-stable"). This means that if you have not changed
the default title, then remove a setting method call, your settings
changes will remain in effect for all projects using the default title.
To prevent this, set the title for your game or remember to change the
settings back to their
[default](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-core/src/main/java/com/jme3/system/AppSettings.java#L213)
and run the project again.
:::

This example toggles the settings to fullscreen while the game is
already running. Then it restarts the game context (not the whole game)
which applies the changed settings.

```java
public void toggleToFullscreen() {
  GraphicsDevice device = GraphicsEnvironment.getLocalGraphicsEnvironment().getDefaultScreenDevice();
  DisplayMode[] modes = device.getDisplayModes();
  int i=0; // note: there are usually several, let's pick the first
  settings.setResolution(modes[i].getWidth(),modes[i].getHeight());
  settings.setFrequency(modes[i].getRefreshRate());
  settings.setBitsPerPixel(modes[i].getBitDepth());
  settings.setFullscreen(device.isFullScreenSupported());
  app.setSettings(settings);
  app.restart(); // restart the context to apply changes
}
```

To view your current settings, use the System class.

```java
AppSettings settings = new AppSettings(true);
System.out.println(settings);
```

Properties
==========

+--------------------+--------------------------------------+---------+
| Settings Property  | Description                          | Default |
+====================+======================================+=========+
| setR               | Switch Video Renderer to OpenGL 1.1, | OpenGL  |
| enderer(AppSetting | OpenGL 2, or OpenGL 3.3. If your     | 2       |
| s.LWJGL\_OPENGL1)\ | graphic card does not support all    |         |
| setR               | OpenGL2 features                     |         |
| enderer(AppSetting | (`UnsupportedOp                      |         |
| s.LWJGL\_OPENGL2)\ | erationException: GLSL and OpenGL2 i |         |
| set                | s required for the LWJGL renderer`), |         |
| Renderer(AppSettin | then you can force your              |         |
| gs.LWJGL\_OPENGL3) | SimpleApplication to use OpenGL1     |         |
|                    | compatibility. (Then you still can't |         |
|                    | use special OpenGL2 features, but at |         |
|                    | least the error goes away and you    |         |
|                    | can continue with the rest.)         |         |
+--------------------+--------------------------------------+---------+
| s                  | Set the color depth.\                | 24      |
| etBitsPerPixel(32) | 1 bpp = black and white, 2 bpp =     |         |
|                    | gray,\                               |         |
|                    | 4 bpp = 16 colors, 8 bpp = 256       |         |
|                    | colors, 24 or 32 bpp = "truecolor".  |         |
+--------------------+--------------------------------------+---------+
| setFramerate(60)   | How often per second the engine      | -1      |
|                    | should try to refresh the frame. For | (unl    |
|                    | the release, usually 60 fps. Can be  | imited) |
|                    | lower (30) if you need to free up    |         |
|                    | the CPU for other applications. No   |         |
|                    | use setting it to a higher value     |         |
|                    | than the screen frequency! If the    |         |
|                    | framerate goes below 30 fps, viewers |         |
|                    | start to notice choppiness or        |         |
|                    | flickering.                          |         |
+--------------------+--------------------------------------+---------+
| s                  | Set this to true to make the game    | False   |
| etFullscreen(true) | window fill the whole screen; you    | (wi     |
|                    | need to provide a key that calls     | ndowed) |
|                    | app.stop() to exit the fullscreen    |         |
|                    | view gracefully (default: escape).\  |         |
|                    | Set this to false to play the game   |         |
|                    | in a normal window of its own.       |         |
+--------------------+--------------------------------------+---------+
| setHeight(480),    | Two equivalent ways of setting the   | 640x480 |
| setWidth(640)\     | display resolution.                  | pixels  |
| setR               |                                      |         |
| esolution(640,480) |                                      |         |
+--------------------+--------------------------------------+---------+
| setSamples(4)      | Set multisampling to 0 to switch     | 0       |
|                    | antialiasing off (harder edges,      |         |
|                    | faster.)\                            |         |
|                    | Set multisampling to 2 or 4 to       |         |
|                    | activate antialising (softer edges,  |         |
|                    | may be slower.)\                     |         |
|                    | Depending on your graphic card, you  |         |
|                    | may be able to set multisampling to  |         |
|                    | higher values such as 8, 16, or 32   |         |
|                    | samples.                             |         |
+--------------------+--------------------------------------+---------+
| setVSync(true)\    | Set vertical syncing to true to time | false\  |
| setFrequency(60)   | the frame buffer to coincide with    | 60 fps  |
|                    | the refresh frequency of the screen. |         |
|                    | VSync prevents ugly page tearing     |         |
|                    | artefacts, but is a bit slower;      |         |
|                    | recommened for release build.\       |         |
|                    | Set VSync to false to deactivate     |         |
|                    | vertical syncing (faster, but        |         |
|                    | possible page tearing artifacts);    |         |
|                    | can remain deactivated during        |         |
|                    | development or for slower PCs.       |         |
+--------------------+--------------------------------------+---------+
| setStencilBits(8)  | Set the number of stencil bits.\     | 0       |
|                    | This value is only relevant when the | (di     |
|                    | stencil buffer is being used.        | sabled) |
|                    | Specify 8 to indicate an 8-bit       |         |
|                    | stencil buffer, specify 0 to disable |         |
|                    | the stencil buffer.                  |         |
+--------------------+--------------------------------------+---------+
| setDepthBits(16)   | Sets the number of depth bits to     | 24      |
|                    | use.\                                |         |
|                    | The number of depth bits specifies   |         |
|                    | the precision of the depth buffer.   |         |
|                    | To increase precision, specify 32    |         |
|                    | bits. To decrease precision, specify |         |
|                    | 16 bits. On some platforms 24 bits   |         |
|                    | might not be supported, in that      |         |
|                    | case, specify 16 bits.\              |         |
|                    | See [What Is a Depth                 |         |
|                    | Buffer?](https://msdn.micros         |         |
|                    | oft.com/en-us/library/bb976071.aspx) |         |
|                    | and                                  |         |
|                    | [Z-buffering](https:                 |         |
|                    | //en.wikipedia.org/wiki/Z-buffering) |         |
|                    | for a more in depth explanation.     |         |
+--------------------+--------------------------------------+---------+
| setGam             | Enables Gamma Correction.\           | false   |
| maCorrection(true) | If you're starting a new project,    |         |
|                    | use it, period. And don't allow the  |         |
|                    | player to turn it off.\              |         |
|                    | See [Gamma Correction or sRGB        |         |
|                    | pipeline](../../                     |         |
|                    | jme3/advanced/jme3_srgbpipeline) |         |
+--------------------+--------------------------------------+---------+

: Video

+--------------------+--------------------------------------+---------+
| Settings Property  | Description                          | Default |
+====================+======================================+=========+
| setUseInput(false) | Respond to user input by mouse and   | true    |
|                    | keyboard. Can be deactivated for use |         |
|                    | cases where you only display a 3D    |         |
|                    | scene on the canvas without any      |         |
|                    | interaction.                         |         |
+--------------------+--------------------------------------+---------+
| set                | Activate optional joystick support   | false   |
| UseJoysticks(true) |                                      |         |
+--------------------+--------------------------------------+---------+
| set                | Enable or disable mouse emulation    | false   |
| EmulateMouse(true) | for touchscreen-based devices.       |         |
|                    | Setting this to true converts taps   |         |
|                    | on the touchscreen to clicks, and    |         |
|                    | finger swiping gestures over the     |         |
|                    | touchscreen into mouse axis events.  |         |
+--------------------+--------------------------------------+---------+
| setEmulateMouseF   | Flips the X or Y (or both) axes for  | fals    |
| lipAxis(true,true) | the emulated mouse. Set the first    | e,false |
|                    | parameter to true to flip the x      |         |
|                    | axis, and the second to flip the y   |         |
|                    | axis.                                |         |
+--------------------+--------------------------------------+---------+

: Input

+--------------------+--------------------------------------+---------+
| Settings Property  | Description                          | Default |
+====================+======================================+=========+
| setAudi            | Switch Audio Renderer. Currently     | OpenAL  |
| oRenderer(AppSetti | there is only one option.            |         |
| ngs.LWJGL\_OPENAL) |                                      |         |
+--------------------+--------------------------------------+---------+
| setStereo3D(true)  | Enable 3D stereo. This feature       | false   |
|                    | requires hardware support from the   |         |
|                    | GPU driver. See [Quad                |         |
|                    | Buffering](http://en                 |         |
|                    | .wikipedia.org/wiki/Quad_buffering). |         |
|                    | Currently, your everday user's       |         |
|                    | hardware does not support this, so   |         |
|                    | you can ignore it for now.           |         |
+--------------------+--------------------------------------+---------+

: Audio

+--------------------+--------------------------------------+---------+
| Settings Property  | Description                          | Default |
+====================+======================================+=========+
| setTitle(\"My      | This string will be visible in the   | "       |
| Game\")            | titlebar, unless the window is       | jMonkey |
|                    | fullscreen.                          | Engine  |
|                    |                                      | 3.x-    |
|                    |                                      | stable" |
+--------------------+--------------------------------------+---------+
| setIcons(new       | This specifies the little            | null    |
| B                  | application icon in the titlebar of  |         |
| ufferedImage\[\]{\ | the application (unused in MacOS?).  |         |
| ImageIO.read(new   | You should specify the icon in       |         |
| File(\" \")),      | various sizes (256,128,32,16) to     |         |
| ...});             | look good on various operating       |         |
|                    | systems. Note: This is not the       |         |
|                    | application icon on the desktop.     |         |
+--------------------+--------------------------------------+---------+
| se                 | A custom splashscreen image in the   | \"/com/ |
| tSettingsDialogIma | `assets/Interface` directory which   | jme3/ap |
| ge(\"Interface/mys | is displayed when the settings       | p/Monke |
| plashscreen.png\") | dialog is shown.                     | y.png\" |
+--------------------+--------------------------------------+---------+

: Branding

:::note
You can use `app.setShowSettings(true);` and
`setSettingsDialogImage("Interface/mysplashscreen.png")` to present the
user with jme3's default display settings dialog when starting the game.
Use `app.setShowSettings(false);` to hide the default settings screen.
Set this boolean before calling `app.start()` on the SimpleApplication.
:::

Toggling and Activating Settings
================================

+-----------------+-----------------------------------------------------+
| Si              | Description                                         |
| mpleApplication |                                                     |
| method          |                                                     |
+=================+=====================================================+
| app.setShowSe   | Activate or deactivate the default settings screen  |
| ttings(boolean) | before start()ing the game. If you let users use    |
|                 | this screen, you do not need to modify the settings |
|                 | object. Note: Most developers implement their own   |
|                 | custom settings screen, but the default one is      |
|                 | useful during the alpha stages.                     |
+-----------------+-----------------------------------------------------+
| app.setSet      | After you have modified the properties on the       |
| tings(settings) | settings object, you apply it to your application.  |
|                 | Note that the settings are not automatically        |
|                 | reloaded while the game is running.                 |
+-----------------+-----------------------------------------------------+
| app.start()     | Every game calls start() in the beginning to        |
|                 | initialize the game and apply the settings. Modify  |
|                 | and set your settings before calling start().       |
+-----------------+-----------------------------------------------------+
| app.restart()   | Restart()ing a running game restarts the game       |
|                 | context and applies the updated settings object.    |
|                 | (This does not restart or reinitialize the whole    |
|                 | game.)                                              |
+-----------------+-----------------------------------------------------+

Saving and Loading Settings
===========================

::: {.caution}
Due to a current bug and inconsistent behavior observed related to the
preferences save location, to ensure correct behavior, save() and load()
should only use forward slashes / and must be all lowercase.

More information can be found
[here](https://github.com/jMonkeyEngine/jmonkeyengine/issues/1161).
:::

An AppSettings object also supports the following methods to save your
settings under a unique key (in this example "com/foo/mycoolgame3"):

-   Use `settings.save("com/foo/mycoolgame3")` to save your settings via
    standard java.io serialization.

-   Use `settings.load("com/foo/mycoolgame3")` to load your settings.

-   Use `settings2.copyFrom(settings)` to copy a settings object.

Usage:

Provide the unique name of your jME3 application as the String argument.
For example `com/foo/mycoolgame3`.

```java
    try { settings.save("com/foo/mycoolgame3"); }
    catch (BackingStoreException ex) { /** could not save settings */ }
```

-   On Windows, the preferences are saved under the following registry
    key:\
    `HKEY_CURRENT_USER\Software\JavaSoft\Prefs\com\foo\mycoolgame3`

-   On Linux, the preferences are saved in an XML file under:\
    `$HOME/.java/.userPrefs/com/foo/mycoolgame3`

-   On Mac OS X, the preferences are saved as XML file under:\
    `$HOME/Library/Preferences/com.foo.mycoolgame3.plist`

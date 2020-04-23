The com.jme3.app.state.ScreenshotAppState enables your users to take
screenshots of the running game.

You activate this feature as follows in your simpleInitApp() method:

```java
ScreenshotAppState screenShotState = new ScreenshotAppState();
this.stateManager.attach(screenShotState);
```

The default screenshot key is KeyInput.KEY\_SYSRQ, alos known as "System
Request / Print Screen key. On Mac keyboards, this key does not exist,
so on Mac OS you take screenshots using Command+Shift+3 (fullscreen) or
Command+Shift+4 (windowed: press space to select a window and then
click).

The screenshot is saved to the user directory.

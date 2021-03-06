When adding multiplayer to your game, you may find that your server
needs to know about game state (e.g. where are players, objects? Was
that a direct hit? etc.) You can code all this up yourself, but there's
an easier way.

It's very easy to change your current (client) game to function as a
server as well.

What Does Headless Mean?
========================

A headless server...

-   does not display any output -- no window opens, no audio plays, no
    graphics are rendered.

-   ignores all input -- no input handling.

-   keeps game state -- you can attach to, transform, and save the
    rootNode, although the scene is not displayed.

-   calls the `simpleUpdate()` loop -- you can run tests and trigger
    events as usual.

Client Code
===========

First, let's take a look at the default way of creating a new game (in
its simplest form):

```java
public static void main(String[] args) {
  Application app = new Main();
  app.start();
}
```

Headless Server Code
====================

Now, with a simple change you can start your game in Headless mode. This
means that all input and audio/visual output will be ignored. That's a
good thing for a server.

```java
import com.jme3.system.JmeContext;
import com.jme3.system.JmeContext.Type;

public static void main(String[] args) {
  Application app = new Main();
  app.start(JmeContext.Type.Headless);
}
```

Next steps
==========

Okay, so you can now start your game in a headless \'server mode\',
where to go from here?

-   Parse `String[] args` from the `main`-method to enable server mode
    on demand (e.g. start your server like
    `java -jar mygame.jar –server`.

-   Integrate [SpiderMonkey](../../jme3/advanced/networking), to
    provide game updates to the server over a network.

-   Only execute code that's needed. (E.g. place all rendering code
    inside an `if (servermode)`-block) (or `if (!servermode)` for the
    client).

-   Add decent [logging](../../jme3/advanced/logging) so your server
    actually makes sense.

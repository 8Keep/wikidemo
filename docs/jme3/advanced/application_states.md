The `com.jme3.app.state.AppState` class is a customizable jME3 interface
that allows you to control the global game logic, the overall game
mechanics. (To control the behaviour of a Spatial, see [Custom
Controls](../../jme3/advanced/custom_controls) instead. Controls and
AppStates can be used together.)

Overview
========

Use Case Examples
-----------------

There are situations during your game development where you think:

-   Mouse and key inputs are handled differently in-game versus in the
    main menu. Can I group a set of input handler settings, and activate
    and deactivate them all in one step?

-   I have the in-game scene, and a character editor, and a Captain's
    Quarters screen. Can I group a set of nodes and behaviours, and swap
    them in and out in one step?

-   When I pause the game, I want the character's "idle" animation to
    continue, but all other loops and game events should stop. How do I
    define what happens when the game is paused/unpaused?

-   I have a conditional block that takes up a lot of space in my
    simpleUpdate() loop. Can I wrap up this block of code, and switch it
    on and off in one step?

-   Can I package everything that belongs in-game, and everything that
    belongs to the menu screen, and switch between these two "big"
    states in one step?

You can! This is what AppStates are there for. An AppState class is
subset of (or an extension to) your application. Every AppState class
has access to all fields in your main application (AssetManager,
ViewPort, StateManager, InputManager, RootNode, GuiNode, etc) and hooks
into the main update loop. An AppState can contain:

-   a subset of class fields, functions, methods (game state data and
    accessors),

-   a subset of GUI elements and their listeners,

-   a subset of input handlers and mappings,

-   a subset of nodes that you load and attach to the rootNode,

-   a subset of conditional actions that you branch to in the
    simpleUpdate() loop,

-   a subset of other AppStates and Controls

-   ... or combinations thereof.

Supported Features
------------------

Each AppState lets you define what happens to it in the following
situations:

-   **The AppState is initialized:** You load and initialize game data,
    InputHandlers, AppStates and Controls and attach nodes.\
    The AppState executes its own simpleInitApp() method when it is
    attached, so to speak.

-   **The AppState has been enabled (unpaused):** This toggles a boolean
    isEnabled() to true. Here you attach nodes and listeners that should
    become active while it's running.

-   **While the AppState is running/paused:** You can poll isEnabled()
    to define paused and unpaused game behaviour in the update() loop.
    In update(), you poll and modify the game state, modify the scene
    graph, and trigger events. Test if `!isEnabled()`, and write code
    that skips the running sections of this AppState's `update()` loop.\
    Each AppState has its own update loop, which hooks into the main
    simpleUpdate() loop (callback).

-   **The AppState has been disabled (paused):** This toggles a boolean
    isEnabled() to false. Here you switch all objects to their specific
    "paused" behaviour.

-   **The AppState is cleaned up:** Here you decide what happens when
    the AppState is detached. Save this AppState's game state,
    unregister Controls and InputHandlers, detach related AppStates,
    detach nodes from the rootNode, etc.

:::note
AppStates are extremely handy to swap out, or pause/unpause whole sets
of other AppStates. For example, an InGameState (loads in-game GUI,
activates click-to-shoot input mappings, inits game content, starts game
loop) versus MainScreenState (stops game loop, saves and detaches game
content, switches to menu screen GUI, switches to click-to-select input
mappings).
:::

Usage
-----

To implement game logic:

1.  Create one AbstractAppState instance for each set of game mechanics.

2.  Implement game behaviour in the AppState's update() method.

    -   You can pass custom data as arguments in the constructor.

    -   The AppState has access to everything inside the app's scope via
        the Application `app` object.

3.  Create and attach the AppState to the AppStateManager
    (`stateManager.attach(myAppState);`) and initialize it.

4.  Enable and disable (unpause and pause) the AppStates that you need
    during the game.

5.  Detach the AppState from the AppStateManager
    (`stateManager.detach(myAppState);`) and clean it up.

When you add several AppStates to one Application and activate them,
their initialize() methods and update() loops are executed in the order
in which the AppStates were added to the AppStateManager.

Code Samples
------------

JME3 comes with a BulletAppState that implements Physical behaviour
(using the jBullet library). You, for example, could write an Artificial
Intelligence AppState to control all your enemy units. Existing examples
in the code base include:

-   [BulletAppState](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-bullet/src/common/java/com/jme3/bullet/BulletAppState.java)
    controls physical behaviour in PhysicsControl'ed Spatials.

-   [TestAppStates.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/app/state/TestAppStates.java)
    an example of a custom AppState

    -   [RootNodeState.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/app/state/RootNodeState.java)

AppState
========

The AppState interface lets you initialize sets of objects, and hook a
set of continuously executing code into the main loop.

+-----------------+-----------------------------------------------------+
| AppState Method | Usage                                               |
+=================+=====================================================+
| init            | When this AppState is added to the game, the        |
| ialize(asm,app) | RenderThread initializes the AppState and then      |
|                 | calls this method. You can modify the scene graph   |
|                 | from here (e.g. attach nodes). To get access to the |
|                 | main app, call:                                     |
|                 |                                                     |
|                 | ```java                                         |
|                 | super.initialize(stateManager, app);                |
|                 | this.app = (SimpleApplication) app;                 |
|                 | ```                                                 |
+-----------------+-----------------------------------------------------+
| cleanup()       | This method is executed after you remove the        |
|                 | AppState from the game. Here you implement clean-up |
|                 | code for when this state is detached. You can       |
|                 | modify the scene graph from here (e.g. detach       |
|                 | nodes).                                             |
+-----------------+-----------------------------------------------------+
| update(float    | Here you implement the behaviour that you want to   |
| tpf)            | hook into the simpleUpdate() loop while this state  |
|                 | is attached to the game. You can modify the scene   |
|                 | graph from here.                                    |
+-----------------+-----------------------------------------------------+
| isInitialized() | Your implementations of this interface should       |
|                 | return the correct respective boolean value. (See   |
|                 | AbstractAppState)                                   |
+-----------------+-----------------------------------------------------+
| se              | Temporarily enables or disables an AppState. (See   |
| tEnabled(true)\ | AbstractAppState)                                   |
| se              |                                                     |
| tEnabled(false) |                                                     |
+-----------------+-----------------------------------------------------+
| isEnabled()     | Test whether AppState is enabled or disabled. Your  |
|                 | implementation should consider the boolean. (See    |
|                 | AbstractAppState)                                   |
+-----------------+-----------------------------------------------------+
| stat            | The AppState knows when it is attached to, or       |
| eAttached(asm)\ | detached from, the AppStateManager, and triggers    |
| sta             | these two methods. Don't modify the scene graph     |
| teDetached(asm) | from here! (Typically not used.)                    |
+-----------------+-----------------------------------------------------+
| rende           | Renders the state, plus your optional               |
| r(RenderManager | customizations. (Typically not used.)               |
| rm)             |                                                     |
+-----------------+-----------------------------------------------------+
| postRender()    | Called after all rendering commands are flushed,    |
|                 | including your optional customizations. (Typically  |
|                 | not used.)                                          |
+-----------------+-----------------------------------------------------+

AbstractAppState
================

The
[AbstractAppState](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-core/src/main/java/com/jme3/app/state/AbstractAppState.java)
class already implements some common methods
(`isInitialized(), setEnabled(), isEnabled()`) and makes creation of
custom AppStates a bit easier. We recommend you extend AbstractAppState
and override the remaining AppState methods:
`initialize(), setEnabled(), cleanup()`.

Definition:

```java
public class MyAppState extends AbstractAppState {

    private SimpleApplication app;

    private Node x = new Node("x");  // some custom class fields...
    public Node getX(){ return x; }  // some custom methods...

    @Override
    public void initialize(AppStateManager stateManager, Application app) {
      super.initialize(stateManager, app);
      this.app = (SimpleApplication)app;          // cast to a more specific class

      // init stuff that is independent of whether state is PAUSED or RUNNING
      this.app.getRootNode().attachChild(getX()); // modify scene graph...
      this.app.doSomething();                     // call custom methods...
   }

   @Override
    public void cleanup() {
      super.cleanup();
      // unregister all my listeners, detach all my nodes, etc...
      this.app.getRootNode().detachChild(getX()); // modify scene graph...
      this.app.doSomethingElse();                 // call custom methods...
    }

    @Override
    public void setEnabled(boolean enabled) {
      // Pause and unpause
      super.setEnabled(enabled);
      if(enabled){
        // init stuff that is in use while this state is RUNNING
        this.app.getRootNode().attachChild(getX()); // modify scene graph...
        this.app.doSomethingElse();                 // call custom methods...
      } else {
        // take away everything not needed while this state is PAUSED
        ...
      }
    }

    // Note that update is only called while the state is both attached and enabled.
    @Override
    public void update(float tpf) {
      // do the following while game is RUNNING
      this.app.getRootNode().getChild("blah").scale(tpf); // modify scene graph...
      x.setUserData(...);                                 // call some methods...
    }

}
```

BaseAppState
============

A new
[BaseAppState]({link-javadoc}/com/jme3/app/state/BaseAppState.html)
class was introduced as part of the
[updates](https://hub.jmonkeyengine.org/t/jmonkeyengine-3-1-alpha-4-released/35478)
being made to the AppState interface. AbstractAppState is the most
minimal of the minimal implementations of the AppState interface. You
essentially still need to do everything yourself, including getting the
funky enable/disable/initialized/terminate logic right. Now you just
extend BaseAppState and you get onEnable() and onDisable() already
worked out for you.

Definition:

```java
public class MyBaseAppState extends BaseAppState {       
    @Override   
    protected void initialize(Application app) {       
        //It is technically safe to do all initialization and cleanup in the        
        //onEnable()/onDisable() methods. Choosing to use initialize() and        
        //cleanup() for this is a matter of performance specifics for the        
        //implementor.       
        //TODO: initialize your AppState, e.g. attach spatials to rootNode   
    }

    @Override   
    protected void cleanup(Application app) {       
        //TODO: clean up what you initialized in the initialize method,       
        //e.g. remove all spatials from rootNode   
    }

    //onEnable()/onDisable() can be used for managing things that should    
    //only exist while the state is enabled. Prime examples would be scene    
    //graph attachment or input listener attachment.   
    @Override   
    protected void onEnable() {       
        //Called when the state is fully enabled, ie: is attached and        
        //isEnabled() is true or when the setEnabled() status changes after the        
        //state is attached.   
    }
    
    @Override   
    protected void onDisable() {       
        //Called when the state was previously enabled but is now disabled        
        //either because setEnabled(false) was called or the state is being        
        //cleaned up.   
    }       

    @Override   
    public void update(float tpf) {       
        //TODO: implement behavior during runtime   
    }
    
}
```

Notable BaseAppState changes are as follows:

-   You no longer need to call super.initialize(stateManager, app)
    because it is now called by BaseAppState upon initialization for
    you.

-   You no longer have to cast SimpleApplication to have access to
    AssetManager, AppStateManager, and you can even get a State
    directly. The getters getApplication(), getAssetManager(),
    getState(type) and their methods are available to you immediately.
    However, you still have to cast SimpleApplication to get rootNode.

-   You no longer call super during cleanup, its done for you now.

-   It's now safe to do all initialization and cleanup in the
    onEnable()/onDisable() methods.

-   Cleanup and setEnabled now have logging built in.

You use BaseAppState as you would AbstractAppState, other than mentioned
above, and which one you use is entirely up to you. However,
BaseAppState makes your life easier and is the recommended one to use
now.

See [BaseAppState]({link-javadoc}/com/jme3/app/state/BaseAppState.html)
for more information.

Pausing and Unpausing
=====================

You define what an AppState does when Paused or Unpaused, in the
`setEnabled()` and `update()` methods. Call `myState.setEnabled(false)`
on all states that you want to pause. Call `myState.setEnabled(true)` on
all states that you want to unpause.

AppStateManager
===============

The com.jme3.app.state.AppStateManager holds the list of AppStates for
an application. AppStateManager ensures that active AppStates can modify
the scene graph, and that the update() loops of active AppStates is
executed. There is one AppStateManager per application. You typically
attach several AppStates to one AppStateManager, but the same state can
only be attached once.

+-----------------------------------+-----------------------------------+
| AppStateManager Method            | Usage                             |
+===================================+===================================+
| hasState(myState)                 | Is AppState object \'myState\'    |
|                                   | attached?                         |
+-----------------------------------+-----------------------------------+
| getState(MyAppState.class)        | Returns the first attached state  |
|                                   | that is an instance of a subclass |
|                                   | of `MyAppState.class`.            |
+-----------------------------------+-----------------------------------+

The AppStateManager's `render(), postRender(), cleanup()` methods are
internal, ignore them, users never call them directly.

-   If a detached AppState is attached then initialize() will be called
    on the following render pass.

-   If an attached AppState is detached then cleanup() will be called on
    the following render pass.

-   If you attach an already-attached AppState then the second attach is
    a no-op and will return false.

-   If you both attach and detach an AppState within one frame then
    neither initialize() or cleanup() will be called, although if either
    is called both will be.

-   If you both detach and then re-attach an AppState within one frame
    then on the next update pass its cleanup() and initialize() methods
    will be called in that order.

Best Practices
==============

Communication Among AppStates
-----------------------------

You can only access other AppStates (read from and write to them) from
certain places: From a Control's update() method, from an AppState's
update() method, and from the SimpleApplication's simpleUpdate() loop.
Don't mess with the AppState from other places, because from other
methods you have no control over the order of modifications; the game
can go out of sync because you can't know when (during which
half-finished step of another state change) your modification will be
performed.

You can use custom accessors to get data from AppStates, to set data in
AppStates, or to trigger methods in AppStates.

```java
this.app.getStateManager().getState(MyAppState.class).doSomeCustomStuffInThisState();
```

Initialize Familiar Class Fields
--------------------------------

To access class fields of the SimpleApplication the way you are used to,
initialize them to local variables, as shown in the following AppState
template:

```java
private SimpleApplication app;
private Node              rootNode;
private AssetManager      assetManager;
private AppStateManager   stateManager;
private InputManager      inputManager;
private ViewPort          viewPort;
private BulletAppState    physics;

public class MyAppState extends AbstractAppState {
  @Override
  public void initialize(AppStateManager stateManager, Application app) {
    super.initialize(stateManager, app);
    this.app = (SimpleApplication) app; // can cast Application to something more specific
    this.rootNode     = this.app.getRootNode();
    this.assetManager = this.app.getAssetManager();
    this.stateManager = this.app.getStateManager();
    this.inputManager = this.app.getInputManager();
    this.viewPort     = this.app.getViewPort();
    this.physics      = this.stateManager.getState(BulletAppState.class);
  }
}
```

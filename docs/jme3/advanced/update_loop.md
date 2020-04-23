Extending your application from
com.jme3.app.[SimpleApplication](../../jme3/intermediate/simpleapplication)
provides you with an update loop. This is where you implement your game
logic (game mechanics).

Some usage examples: Here you remote-control NPCs (computer controlled
characters), generate game events, and respond to user input.

To let you see the main update loop in context, understand that the
SimpleApplication does the following:

-   **Initialization** -- Execute `simpleInitApp()` method once.

-   **Main Update Loop**

    a.  Input listeners respond to mouse clicks and keyboard presses --
        [Input handling](../../jme3/advanced/input_handling)

    b.  Update game state:

        i.  Update overall game state -- Execute [Application
            States](../../jme3/advanced/application_states)

        ii. User code update -- Execute `simpleUpdate()` method

        iii. Logical update of entities -- Execute [Custom
             Controls](../../jme3/advanced/custom_controls)

    c.  Render audio and video

        i.  [Application
            States](../../jme3/advanced/application_states)
            rendering.

        ii. Scene rendering.

        iii. User code rendering -- Execute `simpleRender()` method.

    d.  Repeat loop.

-   **Quit** -- If user requests `exit()`, execute `cleanup()` and
    `destroy()`.\
    The jME window closes and the loop ends.

Usage
=====

In a trivial
[SimpleApplication](../../jme3/intermediate/simpleapplication) (such
as a [Hello World tutorial](../../jme3/beginner)), all code is
either in the `simpleInitApp()` (initialization) or `simpleUpdate()`
(behaviour) method -- or in a helper method/class that is called from
one of these two. This trivial approach will make your main class very
long, hard to read, and hard to maintain. You don't need to load the
whole scene at once, and you don't need to run all conditionals tests
all the time.

It's a best practice to modularize your game mechanics and spread out
initialization and update loop code over several Java objects:

-   Move modular code blocks from the `simpleInitApp()` method into
    [AppStates](../../jme3/advanced/application_states). Attach
    AppStates to initialize custom subsets of "one dungeon, and detach
    it when the player exits this "dungeon.\
    Examples: Weather/sky audio and visuals, physics collision shapes,
    sub-rootnodes of individual dungeons including dungeon NPCs, etc.

-   Move modular code blocks from the `simpleUpdate()` method into the
    update loops of [Custom
    Controls](../../jme3/advanced/custom_controls) to control
    individual entity behavior (NPCs), and into the update method of
    [AppStates](../../jme3/advanced/application_states) to control
    world events.\
    Examples: Weather behaviour, light behaviour, physics behaviour,
    individual NPC behaviour, trap behaviour, etc.

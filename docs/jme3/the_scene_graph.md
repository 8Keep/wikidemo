Before you start making games, make sure you understand general [3D
Gaming terminology](../jme3/terminology).

Second, if you are a beginner, we recommend our [Scene Graph for
Dummies](../jme3/scenegraph_for_dummies) presentation for a visual
introduction to the concept of a scene graph.

Then continue learning about jME3 concepts here.

Coordinate System
=================

![coordinate-system.png](../jme3/intermediate/coordinate-system.png)

The jMonkeyEngine uses a right-handed coordinate system, just as OpenGL
does.

The coordinate system consists of:

-   The *origin*, a single central point in space.

    -   The origin point is always at coordinate zero, in Java:
        `new Vector3f(0,0,0)`.

-   Three *coordinate axes* that are mutually perpendicular, and meet in
    the origin.

    -   The X axis starts left and goes right.

    -   The Y axis starts below and goes up.

    -   The Z axis starts away from you, and goes towards you.

Every point in 3D space is uniquely defined by its X,Y,Z coordinates.
The three numeric coordinates express how many "steps from each of the
three axes a point is. The data type for all vectors in jME3 is
`com.jme3.math.Vector3f`. All vectors are relative to the described
coordinate system.\
Example: The point `new Vector3f(3,-5,1)` is 3 steps to the right, 5
steps down, and 1 towards you.

::: {.note}
The unit of meassurement ("one step) in jME3 is the **world unit**,
short: wu. Typically, 1 wu is considered to be one meter. As long as you
are consistant throughout your game, 1 wu can be any distance you like.
:::

For your orientation:

-   The default camera's location is `Vector3f(0.0f, 0.0f, 10.0f)`.

-   The default camera is looking in the direction described by the (so
    called) negative Z unit vector `Vector3f(0.0f, 0.0f, -1.0f)`.

This means the player's point of view is on the positive side of the Z
axis, looking back, towards the origin, down the Z axis.

How to move yourself through the 3D scene
=========================================

When you play a 3D game, you typically want to navigate the 3D scene.
Note that by default, the mouse pointer is invisible, and the mouse is
set up to control the camera rotation!

By default, jME3 uses the following common navigation inputs

+----------------------+----------------------+-----------------------+
| Game Inputs          | Camera Motion        | Player POV            |
+======================+======================+=======================+
| Press the W and S    | move the camera      | you walk back and     |
| keys                 | forward, and         | forth                 |
|                      | backward             |                       |
+----------------------+----------------------+-----------------------+
| Press the A and D    | move the camera left | you step left or      |
| keys                 | and right            | right                 |
+----------------------+----------------------+-----------------------+
| Press the Q and Y    | move the camera up   | you fly up and down   |
| keys                 | and down             |                       |
+----------------------+----------------------+-----------------------+
| Move the mouse       | rotate the camera    | you look left or      |
| left-right           | left/right           | right                 |
+----------------------+----------------------+-----------------------+
| Move the mouse       | rotate up/down       | you look at the sky   |
| forwards-backwards   |                      | or your feet          |
+----------------------+----------------------+-----------------------+

These default settings are called "WASD keys and "Mouse Look. You can
customize [input handling](../jme3/advanced/input_handling) for your
game. Sorry, but these settings work best on a QWERTY/QWERTZ keyboard.

Scene Graph and RootNode
========================

The *scene graph* represents your 3D world. Objects in the jME3 scene
graph are called [Spatial](../jme3/advanced/spatial)s. Everything
attached to the parent *rootNode* is part of your scene. Your game
inherits the `rootNode` object from the `SimpleApplication` class.

![scene-graph.png](../jme3/intermediate/scene-graph.png)

-   *Attaching* a Spatial to the rootNode (or its child nodes) adds it
    to the scene;

-   *Detaching* a Spatial from the rootNode (or its child nodes) removes
    it from the scene.

All objects in the scene graph are in a parent-child relationship. When
you transform (move, rotate, scale) one parent, all its children follow.

::: {.note}
The scene graph only manages the parent-child relationship of spatials.
The actual location, rotation, or scale of an object is stored inside
each Spatial.
:::

Spatials: Node vs Geometry
==========================

A Spatial can be transformed (in other words, it has a location, a
rotation, and a scale). A Spatial can be loaded and saved as a .3jo
file. There are two types of Spatials, *Nodes* and *Geometries*:

+------+-------------------------------+-------------------------------+
|      | Spatial                       |                               |
+======+===============================+===============================+
| Purp | A Spatial is an abstract data |                               |
| ose: | structure that stores         |                               |
|      | transformations (translation, |                               |
|      | rotation, scale).             |                               |
+------+-------------------------------+-------------------------------+
|      | Geometry                      | Node                          |
+------+-------------------------------+-------------------------------+
| Vis  | A visible 3-D object.         | An invisible "handle for a    |
| ibil |                               | group of objects.             |
| ity: |                               |                               |
+------+-------------------------------+-------------------------------+
| Purp | A Geometry represents the     | A Node groups Geometries and  |
| ose: | "look of an object: Shape,    | other Nodes together: You     |
|      | color, texture,               | transform a Node to affect    |
|      | opacity/transparency.         | all attached Nodes            |
|      |                               | (parent-child relationship).  |
+------+-------------------------------+-------------------------------+
| Cont | Transformations, mesh,        | Transformations. No mesh, no  |
| ent: | material.                     | material.                     |
+------+-------------------------------+-------------------------------+
| E    | A box, a sphere, player, a    | The rootNode, the guiNode, an |
| xamp | building, a piece of terrain, | audioNode, a custom grouping  |
| les: | a vehicle, missiles, NPCs,    | node for a vehicle plus its   |
|      | etc...                        | passengers, etc.              |
+------+-------------------------------+-------------------------------+

How to Use This Knowledge?
==========================

Before you start creating your game, you should plan your scene graph:
Which Nodes and Geometries will you need? Complete the [Beginner
tutorials](../jme3/beginner) to learn how to load and create
Spatials, how to lay out a scene by attaching, detaching, and
transforming Spatials, and how to add interaction and effects to a game.

The [intermediate and advanced
documentation](../jme3.xml#documentation-for-intermediate-users#) gives
you more details on how to put all the parts together to create an
awesome 3D game in Java!

See also
========

-   [Spatial](../jme3/advanced/spatial) -- More details about
    working with Nodes and Geometries

-   [Traverse SceneGraph](../jme3/advanced/traverse_scenegraph) --
    Find any Node or Geometry in the scenegraph.

-   [Camera](../jme3/advanced/camera) -- Learn more about the Camera
    in the scene.

This is an introduction to the concept of Spatials, the elements of the
3D scene graph. The scene graph is a data structure that manages all
objects in your 3D world. For example, the scene graph keeps track of
the 3D models that you load and position. When you extend a Java class
from com.jme3.app.SimpleApplication, you automatically inherit the scene
graph and its rootNode.

The rootNode is the central element of the scene graph. Even if the
scene graph is empty, it always contains at least the rootNode. We
*attach* Spatials to the rootNode. Attached Spatials are always in a
*parent-child relationship*. Every time you attach a Spatial to
something, it is implicitly detached from its previous parent. A Spatial
can have only one parent. A Spatial can have several children.

If you think you need to understand the scene graph concept better,
please read [Scenegraph for
dummies](../../jme3/scenegraph_for_dummies) first.

Node versus Geometry
====================

In your Java code, a Spatial is either an instance of
`com.jme3.scene.Node` or a `com.jme3.scene.Geometry` instance. You use
the two types of Spatials for different purposes:

![scene-graph.png](/images/jme3/intermediate/scene-graph.png)

+------+-------------------------------+-------------------------------+
|      | com.jme3.scene.Spatial        |                               |
+======+===============================+===============================+
| Purp | A Spatial is an abstract data |                               |
| ose: | structure that stores user    |                               |
|      | data and transformations (=   |                               |
|      | translation, rotation, scale) |                               |
|      | of elements of the 3D scene   |                               |
|      | graph. Spatials can be saved  |                               |
|      | and loaded using the [Asset   |                               |
|      | Manager](../../jme3           |                               |
|      | /advanced/asset_manager). |                               |
+------+-------------------------------+-------------------------------+
|      | com.jme3.scene.Geometry       | com.jme3.scene.Node           |
+------+-------------------------------+-------------------------------+
| Vis  | A Geometry represents a       | A Node is an **invisible      |
| ibil | **visible** 3D object in the  | "handle** for a group of      |
| ity: | scene graph.                  | Spatials in the scene graph.  |
+------+-------------------------------+-------------------------------+
| Purp | Use Geometries to represent   | Use Nodes to **structure and  |
| ose: | an object's **look**: Every   | group** Geometries and other  |
|      | Geometry contains a polygon   | Nodes. Every Node is attached |
|      | mesh and a material,          | to one parent node, and each  |
|      | specifying its shape, color,  | node can have zero or more    |
|      | texture, and                  | children (Nodes or            |
|      | opacity/transparency.\        | Geometries) attached to       |
|      | You attach Geometries to      | itself.\                      |
|      | Nodes.                        | **When you transform (move,   |
|      |                               | rotate, etc) a parent node,   |
|      |                               | all its children are          |
|      |                               | transformed (moved, rotated,  |
|      |                               | etc).**                       |
+------+-------------------------------+-------------------------------+
| Cont | Transformations; custom user  | Transformations; custom user  |
| ent: | data;\                        | data;\                        |
|      | mesh and material;            | no mesh, no material.         |
+------+-------------------------------+-------------------------------+
| E    | Box, sphere, player,          | rootNode, guiNode, audioNode, |
| xamp | building, terrain, vehicle,   | a custom grouping node such   |
| les: | missiles, NPCs, etc...        | as vehicleNode or shipNode    |
|      |                               | with passengers attached,     |
|      |                               | etc.                          |
+------+-------------------------------+-------------------------------+

::: {.important}
You never create a Spatial with `Spatial s = new Spatial();`! A Spatial
is an abstract concept, like a mammal (there is no actual creature
called "mammal walking around here). You create either a
com.jme3.scene.Node or com.jme3.scene.Geometry instance. Some methods,
however, require a `Spatial` type as argument: This is because they are
able to accept both Nodes and Geometries as arguments. In this case, you
simply *cast* a Node or Geometry to Spatial.
:::

Mesh
----

The polygon [Mesh](../../jme3/advanced/mesh) inside a Geometry can
be one of three things:

-   **Shapes:** The simplest type of Meshes are jME's default
    [Shape](../../jme3/advanced/shape)s such as cubes and spheres.
    You can use several Shapes to build complex Geometries. Shapes are
    built-in and can be created without using the AssetManager.

-   **3D Models:** [3D models and
    scenes](../../jme3/advanced/3d_models) are also made up of
    meshes, but are more complex than Shapes. You create Models and
    Scenes in external 3D Mesh Editors and export them as Ogre XML or
    Wavefront OBJ. Use the [Asset
    Manager](../../jme3/advanced/asset_manager) to load models into
    a your jME3 game.

-   **Custom Meshes:** Advanced users can create [Custom
    Meshes](../../jme3/advanced/custom_meshes) programmatically.

What is a Clone?
================

Cloned spatials share the same mesh, while each cloned spatial can have
its own local transformation (translation, rotation, and scale) in the
scene. This means you only use `clone()` on spatials whose meshes never
change. The most common use case for cloning is when you use several
Spatials that are based on the same
[Shape](../../jme3/advanced/shape)s (e.g. trees, crates).

The second use case is: When you load a model using `loadModel()` from
the AssetManager, you may automatically get a \`clone()\`ed object. In
particular:

-   If the model is not animated (it has no `AnimControl`), jME loads a
    clone. All clones share one mesh object in order to use less memory.

-   If the model is animated (it has a `AnimControl`), then
    `loadModel()` duplicates the mesh for each loaded instance. (Uses
    more memory, but can animate.)

Usually there is no need to manually use any of the `clone()` methods on
models. Using the [Asset
Manager](../../jme3/advanced/asset_manager)\'s `loadModel()` method
will automatically do the right thing for your models.

:::note
"Box worlds are not made up of statically cloned `Box()` shapes, this
would still be too slow for large worlds. To learn how to make real fast
box worlds, search the web for *voxelization* techniques.
:::

How to Add Fields and Methods to a Spatial
==========================================

You can include custom user data --that is, custom Java objects and
methods-- in Nodes and Geometries. This is very useful for maintaining
information about a game element, such as health, budget, ammunition,
inventory, equipment, etc for players, or landmark locations for
terrains, and much more.

::: {.important}
You want to add custom accessor methods to a spatial? Do not extend
`Node` or `Geometry`, use [Custom
Controls](../../jme3/advanced/custom_controls) instead. You want to
add custom fields to a spatial? Do not extend `Node` or `Geometry`, use
the built-in `setUserData()` method instead. Where ever the Spatial is
accessible, you can easily access the object's class fields (user data)
and accessors (control methods) this way.
:::

This first example adds an integer field named `health` to the Spatial
`playerNode`, and initializes it to 100.

```java
playerNode.setUserData("health", 100);
```

The second example adds a set of custom accessor methods to the player
object. You create a [custom PlayerControl()
class](../../jme3/advanced/custom_controls) and you add this control
to the Spatial:

```java
playerNode.addControl(new PlayerControl());
```

In your PlayerControl() class, you define custom methods that set and
get your user data in the `spatial` object. For example, the control
could add accessors that set and get the player's health:

```java
public int getHealth() {
  return (Integer)spatial.getUserData("health");
}
public void setHealth(int h) {
  spatial.setUserData("health",h);
}
```

Elsewhere in your code, you can access this data wherever you have
access to the Spatial `playerNode`.

```java
health = playerNode.getControl(PlayerControl.class).getHealth();
...
playerNode.getControl(PlayerControl.class).setHealth(99);
```

-   You can add as many data objects (of String, Boolean, Integer,
    Float, Array types) to a Spatial as you want. Just make sure to
    label them with unique case-sensitive strings (`health`,
    `Inventory`, `equipment`, etc).

-   The saved data can even be a custom Java object if you make the
    custom Java class [implement the Savable
    interface](../../jme3/advanced/save_and_load.xml#custom_savable_class)!

-   When you save a Spatial as a .j3o file, the custom data is saved,
    too, and all Savables are restored the next time you load the .j3o!

This is how you list all data keys that are already defined for one
Spatial:

```java
for(String key : spatial.getUserDataKeys()){
    System.out.println(spatial.getName()+"'s keys: "+key);
}
```

How to Access a Named Sub-Mesh
==============================

Often after you load a scene or model, you need to access a part of it
as an individual Geometry in the scene graph. Maybe you want to swap a
character's weapon, or you want to play a door-opening animation. First
you need to know the unique name of the sub-mesh.

1.  Open the model in a 3D mesh editor, or in the jMonkeyEngine SDK's
    Scene Composer.

2.  Find out the existing names of sub-meshes in the model.

3.  Assign unique names to sub-meshes in the model if neccessary.

In the following example, the Node `house` is the loaded model. The
sub-meshes in the Node are called its children. The String, here
`door 12`, is the name of the mesh that you are searching.

```java
Geometry submesh = (Geometry) houseScene.getChild("door 12");
```

What is Culling?
================

There are two types of culling: Face culling, and view frustrum culling.

**Face culling** means not drawing certain polygons of a mesh. Face
culling behaviour is a property of the material.

Usage: The "inside of a mesh (the so called backface) is typically never
visible to the player, and as an optimization, the `Back` mode skips
calculating all backfaces by default. Activating the `Off` or `Front`
modes can be useful when you are debugging [custom
meshes](../../jme3/advanced/custom_meshes) and try to identify
accidental inside-out faces.

You can switch the com.jme3.material.RenderState.FaceCullMode to either:

-   `FaceCullMode.Back` (default) -- Only the frontsides of a mesh are
    drawn. Backface culling is the default behaviour.

-   `FaceCullMode.Front` -- Only the backsides of a mesh are drawn. A
    mesh with frontface culling will most likely be invisible. Used for
    debugging "inside-out custom meshes.

-   `FaceCullMode.FrontAndBack` -- Use this to make a mesh temporarily
    invisible.

-   `FaceCullMode.Off` -- Every side of the mesh is drawn. Looks normal,
    but slows down large scenes.

Example:

```java
material.getAdditionalRenderState().setFaceCullMode(FaceCullMode.FrontAndBack);
```

**View frustum culling** refers to not drawing (and not even
calculating) certain whole models in the scene. At any given moment,
half of the scene is behind the player and out of sight anyway. View
frustum culling is an optimization to not calculate scene elements that
are not visible -- elements that are "outside the view frustrum.

The decision what is visible and what not, is done automatically by the
engine (`CullHint.Dynamic`). Optionally, you can manually control
whether the engine culls individual spatials (and children) from the
scene graph:

-   `CullHint.Dynamic` -- Default, faster because it doesn't waste time
    with objects that are out of view.

-   `CullHint.Never` -- Calculate and draw everything always (even if it
    does not end up on the user's screen because it's out of sight).
    Slower, but can be used while debugging custom meshes.

-   `CullHint.Always` -- The whole spatial is culled and is not visible.
    A fast way to hide a Spatial temporarily. Culling a Spatial is
    faster then detaching it, but it uses more memory.

-   `CullHint.Inherit` -- Inherit culling behaviour from parent node.

Example:

```java
spatial.setCullHint(CullHint.Never); // always drawn
```

See also
========

-   [Optimization](../../jme3/intermediate/optimization) -- The
    GeometryBatchFactory class batches several Geometries into meshes
    with each their own texture.

-   [Traverse SceneGraph](../../jme3/advanced/traverse_scenegraph)
    -- Find any Node or Geometry in the scenegraph.

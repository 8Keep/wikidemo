A physics simulation is used in games and applications where objects are
exposed to physical forces: Think of games like pool billiard and car
racing simulators. Massive objects are pulled by gravity, forces cause
objects to gain momentum, friction slows them down, solid objects
collide and bounce off one another, etc. Action and Adventure games also
make use of physics to implement solid obstacles, falling, and jumping.

The jMonkeyEngine3 has built-in support for [jBullet
Physics](http://jbullet.advel.cz) (based on [Bullet
Physics](http://bulletphysics.org)) via the `com.jme3.bullet` package.
This article focuses mostly on the RigidBodyControl, but also introduces
you to others.

If you are looking for info on how to respond to physics events such as
collisions, read about [Physics
Listeners](../../jme3/advanced/physics_listeners).

Technical Overview
==================

jME3 has a complete, slightly adapted but fully wrapped Bullet API that
uses normal jME math objects (Vector3f, Quaternion etc) as input/output
data. All normal bullet objects like RigidBodies, Constraints (called
"Joints in jME3) and the various collision shapes are available, all
mesh formats can be converted from jME to bullet.

The PhysicsSpace object is the central object in bullet and all objects
have to be added to it so they are physics-enabled. You can create
multiple physics spaces as well to have multiple independent physics
simulations or to run simulations in the background that you step at a
different pace. You can also create a Bullet PhysicsSpace in jME3 with a
`com.jme3.bullet.BulletAppState` which runs a PhysicsSpace along the
update loop, which is the easiest way to instantiate a physics space. It
can be run in a mode where it runs in parallel to rendering, yet syncs
to the update loop so you can apply physics changes safely during the
update() calls of Controls and SimpleApplication.

The base bullet objects are also available as simple to use controls
that can be attached to spatials to directly control these by physics
forces and influences. The RigidBodyControl for example includes a
simple constructor that automatically creates a hull collision shape or
a mesh collision shape based on the given input mass and the mesh of the
spatial it is attached to. This makes enabling physics on a Geometry as
simple as "spatial.addControl(new RigidBodyControl(1));

Due to some differences in how bullet and jME handle the scene and other
objects relations there is some things to remember about the controls
implementation:

-   The collision shape is not automatically updated when the spatial
    mesh changes

    -   You can update it by reattaching the control or by using the
        CollisionShapeFactory yourself.

-   In bullet the scale parameter is on the collision shape (which
    equals the mesh in jME3) and not on the RigidBody so you cannot
    scale a collision shape without scaling any other RigidBody with
    reference of it

    -   Note that you should share collision shapes in general and that
        j3o files loaded from file do that as well when instantiated
        twice so this is something to consider.

-   **Physics objects remain in the physics space when their spatials
    are detached from the scene graph!**

    -   Use PhysicsSpace.remove(physicsObject) or simply
        physicsControl.setEnabled(false); to remove them from the
        PhysicsSpace

-   If you apply forces to the physics object in an update() call they
    might not get applied because internally bullet still runs at 60fps
    while your app might run at 120.

    -   You can use the PhysicsTickListener interface and register with
        the physics space and use the preTick() method to be sure that
        you actually apply the force in the right moment.

    -   Reading values from the physics objects in the update loop
        should always yield correct values but they might not change
        over several fames due to the same reason.

-   Reading or writing from the physics objects during the render phase
    is not recommended as this is when the physics space is stepped and
    would cause data corruption. This is why the debug display does not
    work properly in a threaded BulletAppState

-   Bullet always uses world coordinates, there is no such concept as
    nodes so the object will be moved into a world location with no
    regard to its parent spatial.

    -   You can configure this behavior using the setApplyPhysicsLocal()
        method on physics controls but remember the physics space still
        runs in world coordinates so you can visually detach things that
        will actually still collide in the physics space.

    -   To use the local applying to simulate e.g. the internal physics
        system of a train passing by, simply create another
        BulletAppState and add all models with physics controls in local
        mode to a node. When you move the node the physics will happen
        all the same but the objects will move along with the node.

When you use this physics simulation, values correspond to the following
units:

-   1 length unit (1.0f) equals 1 meter,

-   1 weight unit (1.0f) equals 1 kilogram,

-   most torque and rotation values are expressed in radians.

Bullet physics runs internally at 60fps by default. This rate is not
dependent on the actual framerate and it does not lock the framerate at
60fps. Instead, when the actual fps is higher than the physics framerate
the system will display interpolated positions for the physics objects.
When the framerate is lower than the physics framerate, the physics
space will be stepped multiple times per frame to make up for the
missing calculations.

Internally, the updating and syncing of the actual physics objects in
the BulletAppState happens in the following way:

1.  collision callbacks (`BulletAppState.update()`)

2.  user update (`simpleUpdate` in main loop, `update()` in Controls and
    AppStates)

3.  physics to scenegraph syncing and applying (`updateLogicalState()`)

4.  stepping physics (before or in parallel to `Application.render()`)

Sample Code
===========

Full code samples are here:

-   [TestBrickWall.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/bullet/TestBrickWall.java)

-   [TestQ3.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/bullet/TestQ3.java)

-   [TestSimplePhysics.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/bullet/TestSimplePhysics.java)

-   [TestWalkingChar.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/bullet/TestWalkingChar.java)

Physics Application
===================

A short overview of how to write a jME application with Physics
capabilities:

Do the following once per application to gain access to the
`physicsSpace` object:

1.  Make your application extend `com.jme3.app.SimpleApplication`.

2.  Create a BulletAppState field:

    ```java
    private BulletAppState bulletAppState;
    ```

3.  Initialize your bulletAppState and attach it to the state manager:

    ```java
    public void simpleInitApp() {
        bulletAppState = new BulletAppState();
        stateManager.attach(bulletAppState);
    ```

:::note
In your application, you can always access the `BulletAppState` via the
ApplicationStateManager:

```java
BulletAppState bas = app.getStateManager().getState(BulletAppState.class);
```
:::

For each Spatial that you want to be physical:

1.  Create a CollisionShape.

2.  Create the PhysicsControl from the CollisionShape and a mass value.

3.  Add the PhysicsControl to its Spatial.

4.  Add the PhysicsControl to the PhysicsSpace.

5.  Attach the Spatial to the rootNode (as usual).

6.  (Optional) Implement the `PhysicsCollisionListener` interface to
    respond to `PhysicsCollisionEvent`s.

Let's look at the details:

Create a CollisionShape
=======================

A CollisionShape is a simplified shape for which physics are easier to
calculate than for the true shape of the model. This simplication
approach speeds up the simulation greatly.

Before you can create a Physics Control, you must create a
CollisionShape from the `com.jme3.bullet.collision.shapes` package.
(Read the tip under "Physics Controls Code Samples" on how to use
default CollisionShapes for Boxes and Spheres.)

+-----------------+---------------------------+------------------------+
| Non-Mesh        | Usage                     | Examples               |
| CollisionShape  |                           |                        |
+=================+===========================+========================+
| BoxC            | Box-shaped behaviour,     | Oblong or cubic        |
| ollisionShape() | does not roll.            | objects like bricks,   |
|                 |                           | crates, furniture.     |
+-----------------+---------------------------+------------------------+
| SphereC         | Spherical behaviour, can  | Compact objects like   |
| ollisionShape() | roll.                     | apples, soccer balls,  |
|                 |                           | cannon balls, compact  |
|                 |                           | spaceships.            |
+-----------------+---------------------------+------------------------+
| CylinderC       | Tube-shaped and           | Oblong objects like    |
| ollisionShape() | disc-shaped behaviour,    | pillars.\              |
|                 | can roll on one side.     | Disc-shaped objects    |
|                 |                           | like wheels, plates.   |
+-----------------+---------------------------+------------------------+
| CompoundC       | A CompoundCollisionShape  | A car with wheels (1   |
| ollisionShape() | allows custom             | box + 4 cylinders),    |
|                 | combinations of shapes.   | etc.                   |
|                 | Use the `addChildShape()` |                        |
|                 | method on the compound    |                        |
|                 | object to add other       |                        |
|                 | shapes to it and position |                        |
|                 | them relative to one      |                        |
|                 | another.                  |                        |
+-----------------+---------------------------+------------------------+
| CapsuleC        | A built-in compound shape | Persons, animals.      |
| ollisionShape() | of a vertical cylinder    |                        |
|                 | with one sphere at the    |                        |
|                 | top and one sphere at the |                        |
|                 | bottom. Typically used    |                        |
|                 | with                      |                        |
|                 | [CharacterCon             |                        |
|                 | trols](../../jme3/advance |                        |
|                 | d/walking_character): |                        |
|                 | A cylinder-shaped body    |                        |
|                 | does not get stuck at     |                        |
|                 | corners and vertical      |                        |
|                 | obstacles; the rounded    |                        |
|                 | top and bottom do not get |                        |
|                 | stuck on stair steps and  |                        |
|                 | ground obstacles.         |                        |
+-----------------+---------------------------+------------------------+
| SimplexC        | A physical point, line,   | Guardrails             |
| ollisionShape() | triangle, or rectangle    |                        |
|                 | Shape, defined by one to  |                        |
|                 | four points.              |                        |
+-----------------+---------------------------+------------------------+
| PlaneC          | A 2D plane. Very fast.    | Flat solid floor or    |
| ollisionShape() |                           | wall.                  |
+-----------------+---------------------------+------------------------+

All non-mesh CollisionShapes can be used for dynamic, kinematic, as well
as static Spatials. (Code samples see below)

+-----------------+---------------------------+------------------------+
| Mesh            | Usage                     | Examples               |
| CollisionShapes |                           |                        |
+=================+===========================+========================+
| Mes             | A mesh-accurate shape for | A whole static game    |
| hCollisionShape | static or kinematic       | level model.           |
|                 | Spatials. Can have        |                        |
|                 | complex shapes with       |                        |
|                 | openings and appendages.\ |                        |
|                 | **Limitations:**          |                        |
|                 | Collisions between two    |                        |
|                 | mesh-accurate shapes      |                        |
|                 | cannot be detected, only  |                        |
|                 | non-mesh shapes can       |                        |
|                 | collide with this shape.  |                        |
|                 | This Shape does not work  |                        |
|                 | with dynamic Spatials.    |                        |
+-----------------+---------------------------+------------------------+
| Hul             | A less accurate shape for | A dynamic 3D model.    |
| lCollisionShape | dynamic Spatials that     |                        |
|                 | cannot easily be          |                        |
|                 | represented by a          |                        |
|                 | CompoundShape.\           |                        |
|                 | **Limitations:** The      |                        |
|                 | shape is convex (behaves  |                        |
|                 | as if you gift-wrapped    |                        |
|                 | the object), i.e.         |                        |
|                 | openings, appendages,     |                        |
|                 | etc, are not individually |                        |
|                 | represented.              |                        |
+-----------------+---------------------------+------------------------+
| GImpac          | A mesh-accurate shape for | Complex dynamic        |
| tCollisionShape | dynamic Spatials. It uses | objects (like spiders) |
|                 | <http://gi                | in Virtual Reality or  |
|                 | mpact.sourceforge.net/>.\ | scientific             |
|                 | **Limitations:** CPU      | simulations.           |
|                 | intensive, use sparingly! |                        |
|                 | We recommend using        |                        |
|                 | HullCollisionShape (or    |                        |
|                 | CompoundShape) instead to |                        |
|                 | improve performance.      |                        |
|                 | Collisions between two    |                        |
|                 | mesh-accurate shapes      |                        |
|                 | cannot be detected, only  |                        |
|                 | non-mesh shapes can       |                        |
|                 | collide with this shape.  |                        |
+-----------------+---------------------------+------------------------+
| Heightfiel      | A mesh-accurate shape     | Static terrains.       |
| dCollisionShape | optimized for static      |                        |
|                 | terrains. This shape is   |                        |
|                 | much faster than other    |                        |
|                 | mesh-accurate shapes.\    |                        |
|                 | **Limitations:** Requires |                        |
|                 | heightmap data.           |                        |
|                 | Collisions between two    |                        |
|                 | mesh-accurate shapes      |                        |
|                 | cannot be detected, only  |                        |
|                 | non-mesh shapes can       |                        |
|                 | collide with this shape.  |                        |
+-----------------+---------------------------+------------------------+

On a CollisionShape, you can apply a few properties

+--------------------+-------------------------------+-----------------+
| CollisionShape     | Property                      | Examples        |
| Method             |                               |                 |
+====================+===============================+=================+
| setScale(new       | You can change the scale of   | Scale a player  |
| V                  | collisionshapes (whether it   | in the Y axis   |
| ector3f(2f,2f,2f)) | be, Simple or Mesh). You      | by 2:\          |
|                    | cannot change the scale of a  | `new Vect       |
|                    | CompoundCollisionShape        | or3f(1f,2f,1f)` |
|                    | however. A sphere collision   |                 |
|                    | shape, will change its radius |                 |
|                    | based on the X component of   |                 |
|                    | the vector passed in. You     |                 |
|                    | must scale a collision shape  |                 |
|                    | before attaching it to the    |                 |
|                    | physicsSpace, or you must     |                 |
|                    | readd it to the physicsSpace  |                 |
|                    | each time the scale changes.  |                 |
+--------------------+-------------------------------+-----------------+

The mesh-accurate shapes can use a CollisionShapeFactory as constructor
(code samples see below).

::: {.important}
Pick the simplest and most applicable shape for the mesh for what you
want to do: If you give a box a sphere collision shape, it will roll; if
you give a ball a box collision shape, it will sit on a slope. If the
shape is too big, the object will seem to float; if the shape is too
small it will seem to sink into the ground. During development and
debugging, you can make collision shapes visible by adding the following
line after the bulletAppState initialization:

```java
// JME sdk 3.0.10  and earlier
bulletAppState.getPhysicsSpace().enableDebug(assetManager);
```

or

```java
// newer versions
bulletAppState.setDebugEnabled(true);
```
:::

CollisionShape Code Samples
---------------------------

-   One way of using a constructor and a Geometry's mesh for static
    Spatials:

```{=html}
<!-- -->
```
    MeshCollisionShape level_shape =
        new MeshCollisionShape(level_geo.getMesh());

-   One way of using a constructor and a Geometry's mesh for dynamic
    Spatials:

```{=html}
<!-- -->
```
    HullCollisionShape shape =
        new HullCollisionShape(katamari_geo.getMesh());

-   Creating a dynamic compound shape for a whole Node and subnodes:

```{=html}
<!-- -->
```
    CompoundCollisionShape myComplexShape =
        CollisionShapeFactory.createMeshShape((Node) myComplexGeometry );

-   Creating a dynamic HullCollisionShape shape (or
    CompoundCollisionShape with HullCollisionShapes as children) for a
    Geometry:

```{=html}
<!-- -->
```
    CollisionShape shape =
        CollisionShapeFactory.createDynamicMeshShape(spaceCraft);

-   An angular, non-mesh-accurate compound shape:

```{=html}
<!-- -->
```
    CompoundCollisionShape boxShape =
        CollisionShapeFactory.createBoxShape((Node) crate_geo);

-   A round, non-mesh-accurate compound shape:

```{=html}
<!-- -->
```
    SphereCollisionShape sphereShape =
        new SphereCollisionShape(1.0f);

Create PhysicsControl
=====================

BulletPhysics are available in jME3 through PhysicsControls classes from
the com.jme3.bullet.control package. jME3's PhysicsControl classes
directly extend BulletPhysics objects and are the recommended way to use
physics in a jME3 application. PhysicsControls are flexible and can be
added to any Spatial to make it act according to physical properties.

+-------------+---------------------------+---------------------------+
| Standard    | Usage                     | Examples                  |
| Phys        |                           |                           |
| icsControls |                           |                           |
+=============+===========================+===========================+
| Rigid       | The most commonly used    | Impacting projectiles,    |
| BodyControl | PhysicsControl. You can   | moving obstacles like     |
|             | use it for dynamic        | crates, rolling and       |
|             | objects (solid objects    | bouncing balls,           |
|             | that freely affected by   | elevators, flying aircaft |
|             | collisions, forces, or    | or space ships.\          |
|             | gravity), for static      | Solid immobile floors,    |
|             | objects (solid but not    | walls, static obstacles.  |
|             | affected by any forces),  |                           |
|             | or kinematic objects      |                           |
|             | (remote-controlled solid  |                           |
|             | objects).                 |                           |
+-------------+---------------------------+---------------------------+
| G           | Use for collision and     | A monster's "aggro        |
| hostControl | intersection detection    | radius, CharacterControl  |
|             | between physical objects. | collisions, motion        |
|             | A GhostControl itself is  | detectors, photo-electric |
|             | *non-solid* and           | alarm sensors, poisonous  |
|             | invisible. GhostControl   | or radioactive            |
|             | moves with the Spatial it | perimeters, life-draining |
|             | is attached to. Use       | ghosts, etc.              |
|             | GhostControls to          |                           |
|             | [implement custom game    |                           |
|             | intera                    |                           |
|             | ctions](../../jme3/advanc |                           |
|             | ed/physics_listeners) |                           |
|             | by adding it to a visible |                           |
|             | Geometry.                 |                           |
+-------------+---------------------------+---------------------------+

+-------------+---------------------------+---------------------------+
| Special     | Usage                     | Examples                  |
| Phys        |                           |                           |
| icsControls |                           |                           |
+=============+===========================+===========================+
| Vehi        | Special Control used for  | Cars, tanks, hover        |
| cleControl\ | [\"terrestrial\" vehicles | crafts, ships,            |
| PhysicsV    | with suspension and       | motorcycles...            |
| ehicleWheel | wheels](../../jme         |                           |
|             | 3/advanced/vehicles). |                           |
+-------------+---------------------------+---------------------------+
| Chara       | Special Control used for  | Upright walking persons,  |
| cterControl | [Walking                  | animals, robots...        |
|             | Chara                     |                           |
|             | cter](../../jme3/advanced |                           |
|             | /walking_character)s. |                           |
+-------------+---------------------------+---------------------------+
| BetterChara | Special Control used for  | Upright walking persons,  |
| cterControl | [Walking                  | animals, robots. Replaces |
|             | Chara                     | CharacterControl.         |
|             | cter](../../jme3/advanced |                           |
|             | /walking_character)s. |                           |
+-------------+---------------------------+---------------------------+
| Rag         | Special Control used for  | Falling persons, animals, |
| DollControl | [collapsing, flailing, or | robots, "Rag dolls        |
|             | falling                   |                           |
|             | characters](../../j       |                           |
|             | me3/advanced/ragdoll) |                           |
+-------------+---------------------------+---------------------------+

Click the links for details on the special PhysicsControls. This article
is about RigidBodyControl.

Physics Control Code Samples
----------------------------

The most commonly used physics control is RigidBodyControl. The
RigidBodyControl constructor takes up to two parameters: a collision
shape and a mass (a float in kilograms). The mass parameter also
determines whether the object is dynamic (movable) or static (fixed).
For a static object such as a floor or wall, specify zero mass.

```java
RigidBodyControl myThing_phys =
    new RigidBodyControl( myThing_shape , 123.0f ); // dynamic
```

```java
RigidBodyControl myDungeon_phys =
    new RigidBodyControl( myDungeon_shape , 0.0f ); // static
```

::: {.important}
If you give your floor a non-zero mass, it will fall out of the scene!
:::

The following creates a box Geometry with the correct default
BoxCollisionShape:

```java
Box b = new Box(1,1,1);
Geometry box_geo = new Geometry("Box", b);
box_geo.addControl(new RigidBodyControl( 1.0f )); // explicit non-zero mass, implicit BoxCollisionShape
```

The following creates a MeshCollisionShape for a whole loaded (static)
scene:

```java
...
gameLevel.addControl(new RigidBodyControl(0.0f)); // explicit zero mass, implicit MeshCollisionShape
```

:::note
Spheres and Boxes automatically fall back on the correct default
CollisionShape if you do not specify a CollisionShape in the
RigidBodyControl constructor. Complex static objects can fall back on
MeshCollisionShapes, unless it is a Node, in which case it will become a
CompoundCollisionShape containing a MeshCollisionShape.
:::

Add PhysicsControl to Spatial
=============================

For each physical Spatial in the scene:

1.  Add a PhysicsControl to a Spatial.

    ```java
    myThing_geo.addControl(myThing_phys);
    ```

2.  Remember to also attach the Spatial to the rootNode, as always!

Add PhysicsControl to PhysicsSpace
==================================

The PhysicsSpace is an object in BulletAppState that is like a rootNode
for Physics Controls.

-   Just like you add the Geometry to the rootNode, you add its
    PhysicsControl to the PhysicsSpace.

```{=html}
<!-- -->
```
    bulletAppState.getPhysicsSpace().add(myThing_phys);
    rootNode.attachChild(myThing_geo);

-   When you remove a Geometry from the scene and detach it from the
    rootNode, also remove the PhysicsControl from the PhysicsSpace:

```{=html}
<!-- -->
```
    bulletAppState.getPhysicsSpace().remove(myThing_phys);
    myThing_geo.removeFromParent();

:::note
You can either add the *PhysicsControl* to the PhysicsSpace, or add the
PhysicsControl to the Geometry and then add the *Geometry* to the
PhysicsSpace. jME3 understands both and the outcome is the same.
:::

Changing the Scale of a PhysicsControl
======================================

To change the scale of a PhysicsControl you must change the scale of the
collisionshape which belongs to it.

MeshCollisionShapes can have a scale correctly set, but it only works
when being constructed on a geometry (not a node).
CompoundCollisionShapes cannot be scaled at this time(the type obtained
when creating a CollisionShape from a Node i.e using imported models).

When you import a model from blender, it often comes as a Node (even if
it only contains 1 mesh), which is by de-facto automatically converted
to a CompoundCollisionShape. So when you try to scale this it won't
work! Below illustrates an example, of how to scale an imported model:

```java
// Doesn't scale
// This modified version contains Node -> Geometry (name = "MonkeyHeadGeom")
Spatial model = assetManager.loadModel("Models/MonkeyHead.j3o");
model.addControl(new RigidBodyControl(0));
// Won't work as this is now a CompoundCollisionShape containing a MeshCollisionShape
model.getControl(RigidBodyControl.class).getCollisionShape().setScale(new Vector3f(2, 2, 2));
bulletAppState.getPhysicsSpace().add(model);

// Works fine
Spatial model = assetManager.loadModel("Models/MonkeyHead.j3o"); // Same Model
 // IMPORTANT : You must navigate to the Geometry for this to work
Geometry geom = ((Geometry) ((Node) model).getChild("MonkeyHeadGeom"));
geom.addControl(new RigidBodyControl(0));
// Works great (scaling of a MeshCollisionShape)
geom.getControl(RigidBodyControl.class).getCollisionShape().setScale(new Vector3f(2, 2, 2));
bulletAppState.getPhysicsSpace().add(geom);
```

With the corresponding output below:

![<http://i.imgur.com/fAXlF.png>](http://i.imgur.com/Josua.png)
![<http://i.imgur.com/fAXlF.png>](http://i.imgur.com/fAXlF.png)

PhysicsSpace Code Samples
-------------------------

The PhysicsSpace also manages global physics settings. Typically, you
can leave the defaults, and you don't need to change the following
settings, but it's good to know what they are for:

+-----------------------------------+-----------------------------------+
| bulletAppState.getPhysicsSpace()  | Usage                             |
| Method                            |                                   |
+===================================+===================================+
| setGravity(new Vector3f(0,        | Specifies the global gravity.     |
| -9.81f, 0));                      |                                   |
+-----------------------------------+-----------------------------------+
| setAccuracy(1f/60f);              | Specifies physics accuracy. The   |
|                                   | higher the accuracy, the slower   |
|                                   | the game. Decrease value if       |
|                                   | objects are passing through one   |
|                                   | another, or bounce oddly. (e.g.   |
|                                   | Change value from 1f/60f to       |
|                                   | something like 1f/80f.)           |
+-----------------------------------+-----------------------------------+
| setMaxSubSteps(4);                | Compensates low FPS: Specifies    |
|                                   | the maximum amount of extra steps |
|                                   | that will be used to step the     |
|                                   | physics when the game fps is      |
|                                   | below the physics fps. This       |
|                                   | maintains determinism in physics  |
|                                   | in slow (low-fps) games. For      |
|                                   | example a maximum number of 2 can |
|                                   | compensate for framerates as low  |
|                                   | as 30 fps (physics has a default  |
|                                   | accuracy of 60 fps). Note that    |
|                                   | setting this value too high can   |
|                                   | make the physics drive down its   |
|                                   | own fps in case its overloaded.   |
+-----------------------------------+-----------------------------------+
| setWorldMax(new Vector3f(10000f,  | Specifies the size of the physics |
| 10000f, 10000f));\                | space as two opposite corners     |
| setWorldMin(new Vector3f(-10000f, | (only applies to AXIS\_SWEEP      |
| -10000f, -10000f));               | broadphase).                      |
+-----------------------------------+-----------------------------------+

Specify Physical Properties
===========================

After you have registered, attached, and added everything, you can
adjust physical properties or apply forces.

On a RigidBodyControl, you can set the following physical properties.

+----------------------+----------------------+-----------------------+
| RigidBodyControl     | Property             | Examples              |
| Method               |                      |                       |
+======================+======================+=======================+
| setGravity(new       | You can change the   | For planet earth:\    |
| Vec                  | gravity of           | `new Ve               |
| tor3f(0f,-9.81f,0f)) | individual physics   | ctor3f(0f,-9.81f,0f)` |
|                      | objects after they   |                       |
|                      | were added to the    |                       |
|                      | PhysicsSpace.        |                       |
|                      | Gravity is a vector  |                       |
|                      | pointing from this   |                       |
|                      | Spatial towards the  |                       |
|                      | source of gravity.   |                       |
|                      | The longer the       |                       |
|                      | vector, the stronger |                       |
|                      | is gravity.\         |                       |
|                      | If gravity is the    |                       |
|                      | same absolute        |                       |
|                      | direction for all    |                       |
|                      | objects (e.g. on a   |                       |
|                      | planet surface), set |                       |
|                      | this vector globally |                       |
|                      | on the PhysicsSpace  |                       |
|                      | object and not       |                       |
|                      | individually.\       |                       |
|                      | If the center of     |                       |
|                      | gravity is relative  |                       |
|                      | (e.g. towards a      |                       |
|                      | black hole) then     |                       |
|                      | setGravity() on each |                       |
|                      | Spatial to           |                       |
|                      | constantly adjust    |                       |
|                      | the gravity vectors  |                       |
|                      | at each tick of      |                       |
|                      | their update()       |                       |
|                      | loops.               |                       |
+----------------------+----------------------+-----------------------+
| setMass(1f)          | Sets the mass in     | Person: 60f, ball:    |
|                      | kilogram. Dynamic    | 1.0f\                 |
|                      | objects have masses  | Floor: 0.0f (!)       |
|                      | \> 0.0f. Heavy       |                       |
|                      | dynamic objects need |                       |
|                      | more force to be     |                       |
|                      | moved and light ones |                       |
|                      | move with small      |                       |
|                      | amounts of force.\   |                       |
|                      | Static immobile      |                       |
|                      | objects (walls,      |                       |
|                      | floors, including    |                       |
|                      | buildings and        |                       |
|                      | terrains) must have  |                       |
|                      | a mass of zero!      |                       |
+----------------------+----------------------+-----------------------+
| setFriction(1f)      | Friction.\           | Ice, slides: 0.0f\    |
|                      | Slippery objects     | Soil, concrete, rock: |
|                      | have low friction.   | 1.0f                  |
|                      | The ground has high  |                       |
|                      | friction.            |                       |
+----------------------+----------------------+-----------------------+
| setRestitution(0.0f) | Bounciness. By       | Brick: 0.0f\          |
|                      | default objects are  | Rubber ball: 1.0f     |
|                      | not bouncy (0.0f).   |                       |
|                      | For a bouncy rubber  |                       |
|                      | object set this \>   |                       |
|                      | 0.0f.\               |                       |
|                      | Both the object and  |                       |
|                      | the surface must     |                       |
|                      | have non-zero        |                       |
|                      | restitution for      |                       |
|                      | bouncing to occur.\  |                       |
|                      | This setting has an  |                       |
|                      | impact on            |                       |
|                      | performance, so use  |                       |
|                      | it sparingly.        |                       |
+----------------------+----------------------+-----------------------+
| set                  | The amount of motion | around 0.5 to 1 \*    |
| CcdMotionThreshold() | in 1 physics tick to | object diameter       |
|                      | trigger the          |                       |
|                      | continuous motion    |                       |
|                      | detection in moving  |                       |
|                      | objects that push    |                       |
|                      | one another. Rarely  |                       |
|                      | used, but necessary  |                       |
|                      | if your moving       |                       |
|                      | objects get stuck or |                       |
|                      | roll through one     |                       |
|                      | another.             |                       |
+----------------------+----------------------+-----------------------+

On a RigidBodyControl, you can apply the following physical forces:

+-----------------------------------+-----------------------------------+
| RigidBodyControl Method           | Motion                            |
+===================================+===================================+
| setPhysicsLocation()              | Positions the objects. Do not use |
|                                   | setLocalTranslation() for         |
|                                   | physical objects. Important: Make |
|                                   | certain not to make               |
|                                   | CollisionShapes overlap when      |
|                                   | positioning them.                 |
+-----------------------------------+-----------------------------------+
| setPhysicsRotation()              | Rotates the object. Do not use    |
|                                   | setLocalRotate() for physical     |
|                                   | objects.                          |
+-----------------------------------+-----------------------------------+
| setKinematic(true)                | By default, RigidBodyControls are |
|                                   | dynamic (kinematic=false) and are |
|                                   | affected by forces. If you set    |
|                                   | kinematic=true, the object is no  |
|                                   | longer affected by forces, but it |
|                                   | still affects others. A kinematic |
|                                   | is solid, and must have a mass.\  |
|                                   | (See detailed explanation below.) |
+-----------------------------------+-----------------------------------+

Kinematic vs Dynamic vs Static
------------------------------

All physical objects...

-   must not overlap.

-   can detect collisions and report several values about the impact.

-   can respond to collisions dynamically, or statically, or
    kinematically.

+-----------------+-----------------+-----------------+-----------------+
| Property        | Static          | Kinematic       | Dynamic         |
+=================+=================+=================+=================+
| Examples        | Immobile        | Re              | Interactive     |
|                 | obstacles:      | mote-controlled | objects:        |
|                 | Floors, walls,  | solid objects:  | Rolling balls,  |
|                 | buildings, ...  | Airships,       | movable crates, |
|                 |                 | meteorites,     | falling         |
|                 |                 | elevators,      | pillars, zero-g |
|                 |                 | doors;          | space ship...   |
|                 |                 | networked or    |                 |
|                 |                 | re              |                 |
|                 |                 | mote-controlled |                 |
|                 |                 | NPCs; invisible |                 |
|                 |                 | "airhooks for   |                 |
|                 |                 | hinges and      |                 |
|                 |                 | joints.         |                 |
+-----------------+-----------------+-----------------+-----------------+
| Does it have a  | no, 0.0f        | yes[^1], \>0.0f | yes, \>0.0f     |
| mass?           |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| How does it     | never           | setLoca         | setLi           |
| move?           |                 | lTranslation(); | nearVelocity(); |
|                 |                 |                 | applyForce();\  |
|                 |                 |                 | setW            |
|                 |                 |                 | alkDirection(); |
|                 |                 |                 | for             |
|                 |                 |                 | C               |
|                 |                 |                 | haracterControl |
+-----------------+-----------------+-----------------+-----------------+
| How to place in | setPhys         | setLocal        | setPhys         |
| scene?          | icsLocation();\ | Translation();\ | icsLocation();\ |
|                 | setPhy          | setL            | setPhy          |
|                 | sicsRotation(); | ocalRotation(); | sicsRotation(); |
+-----------------+-----------------+-----------------+-----------------+
| Can it move and | no              | yes             | yes             |
| push others?    |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Is is affected  | no              | no              | yes             |
| by forces?\     |                 |                 |                 |
| (Falls when it  |                 |                 |                 |
| mid-air? Can be |                 |                 |                 |
| pushed by       |                 |                 |                 |
| others?)        |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| How to activate | setMass(0f);\   | setMass(1f);\   | setMass(1f);\   |
| this behaviour? | setKi           | setK            | setKi           |
|                 | nematic(false); | inematic(true); | nematic(false); |
+-----------------+-----------------+-----------------+-----------------+

### When Do I Use Kinematic Objects?

-   Kinematics are solid and characters can "stand on them.

-   When they collide, Kinematics push dynamic objects, but a dynamic
    object never pushes a Kinematic.

-   You can hang kinematics up "in mid-air and attach other
    PhysicsControls to them using [hinges and
    joints](../../jme3/advanced/hinges_and_joints). Picture them as
    "air hooks for flying aircraft carriers, floating islands in the
    clouds, suspension bridges, swings, chains...

-   You can use Kinematics to create mobile remote-controlled physical
    objects, such as moving elevator platforms, flying blimps/airships.
    You have full control how Kinematics move, they never "fall or
    "topple over.

::: {.important}
The position of a kinematic RigidBodyControl is updated automatically
depending on its spatial's translation. You move Spatials with a
kinematic RigidBodyControl programmatically, that means you write
translation and rotation code in the update loop. You describe the
motion of kinematic objects either by using methods such as
`setLocalTranslation()` or `move()`, or by using a
[MotionPath](../../jme3/advanced/motionpath).
:::

Forces: Moving Dynamic Objects
==============================

Use the following methods to move dynamic physical objects.

+-----------------------------------+-----------------------------------+
| PhysicsControl Method             | Motion                            |
+===================================+===================================+
| setLinearVelocity(new             | Set the linear speed of this      |
| Vector3f(0f,0f,1f))               | object.                           |
+-----------------------------------+-----------------------------------+
| setAngularVelocity(new            | Set the rotational speed of the   |
| Vector3f(0f,0f,1f))               | object; the x, y and z component  |
|                                   | are the speed of rotation around  |
|                                   | that axis.                        |
+-----------------------------------+-----------------------------------+
| applyCentralForce(...)            | Move (push) the object once with  |
|                                   | a certain moment, expressed as a  |
|                                   | Vector3f.                         |
+-----------------------------------+-----------------------------------+
| applyForce(...)                   | Move (push) the object once with  |
|                                   | a certain moment, expressed as a  |
|                                   | Vector3f. Optionally, you can     |
|                                   | specify where on the object the   |
|                                   | pushing force hits.               |
+-----------------------------------+-----------------------------------+
| applyTorque(...)                  | Rotate (twist) the object once    |
|                                   | around its axes, expressed as a   |
|                                   | Vector3f.                         |
+-----------------------------------+-----------------------------------+
| applyImpulse(...)                 | An idealised change of momentum.  |
|                                   | This is the kind of push that you |
|                                   | would use on a pool billiard      |
|                                   | ball.                             |
+-----------------------------------+-----------------------------------+
| applyTorqueImpulse(...)           | An idealised change of momentum.  |
|                                   | This is the kind of push that you |
|                                   | would use on a pool billiard      |
|                                   | ball.                             |
+-----------------------------------+-----------------------------------+
| clearForces()                     | Cancels out all forces (force,    |
|                                   | torque) etc and stops the motion. |
+-----------------------------------+-----------------------------------+

::: {.important}
It is technically possible to position PhysicsControls using
setLocalTranslation(), e.g. to place them in their start position in the
scene. However you must be very careful not to cause an "impossible
state where one physical object overlaps with another! Within the game,
you typically use the setters shown here exclusively.
:::

PhysicsControls also support the following advanced features:

+-----------------------------------+-----------------------------------+
| PhysicsControl Method             | Property                          |
+===================================+===================================+
| setCollisionShape(collisionShape) | Changes the collision shape after |
|                                   | creation.                         |
+-----------------------------------+-----------------------------------+
| setCollideWithGroups()\           | Collision Groups are integer bit  |
| setCollisionGroup()\              | masks -- enums are available in   |
| addCollid                         | the CollisionObject. All physics  |
| eWithGroup(COLLISION\_GROUP\_01)\ | objects are by default in         |
| removeColli                       | COLLISION\_GROUP\_01. Two objects |
| deWithGroup(COLLISION\_GROUP\_01) | collide when the                  |
|                                   | collideWithGroups set of one      |
|                                   | contains the Collision Group of   |
|                                   | the other. Use this to improve    |
|                                   | performance by grouping objects   |
|                                   | that will never collide in        |
|                                   | different groups (the the engine  |
|                                   | saves times because it does not   |
|                                   | need to check on them).           |
+-----------------------------------+-----------------------------------+
| setDamping(float, float)          | The first value is the linear     |
|                                   | threshold and the second the      |
|                                   | angular. This simulates dampening |
|                                   | of forces, for example for        |
|                                   | underwater scenes.                |
+-----------------------------------+-----------------------------------+
| setAngularFactor(1f)              | Set the amount of rotation that   |
|                                   | will be applied. A value of zero  |
|                                   | will cancel all rotational force  |
|                                   | outcome. (?)                      |
+-----------------------------------+-----------------------------------+
| setSleepingThreshold(float,float) | Sets the sleeping thresholds      |
|                                   | which define when the object gets |
|                                   | deactivated to save resources.    |
|                                   | The first value is the linear     |
|                                   | threshold and the second the      |
|                                   | angular. Low values keep the      |
|                                   | object active when it barely      |
|                                   | moves (slow precise performance), |
|                                   | high values put the object to     |
|                                   | sleep immediately (imprecise fast |
|                                   | performance). (?)                 |
+-----------------------------------+-----------------------------------+
| setCcdMotionThreshold(0f)         | Sets the amount of motion that    |
|                                   | has to happen in one physics tick |
|                                   | to trigger the continuous motion  |
|                                   | detection in moving objects that  |
|                                   | push one another. This avoids the |
|                                   | problem of fast objects moving    |
|                                   | through other objects. Set to     |
|                                   | zero to disable (default).        |
+-----------------------------------+-----------------------------------+
| setCcdSweptSphereRadius(.5f)      | Bullet does not use the full      |
|                                   | collision shape for continuous    |
|                                   | collision detection, instead it   |
|                                   | uses a "swept sphere shape to     |
|                                   | approximate a motion, which can   |
|                                   | be imprecise and cause strange    |
|                                   | behaviors such as objects passing |
|                                   | through one another or getting    |
|                                   | stuck. Only relevant for fast     |
|                                   | moving dynamic bodies.            |
+-----------------------------------+-----------------------------------+

:::note
You can `setApplyPhysicsLocal(true)` for an object to make it move
relatively to its local physics space. You would do that if you need a
physics space that moves with a node (e.g. a spaceship with artificial
gravity surrounded by zero-g space). By default, it's set to false, and
all movement is relative to the world.
:::

Best Practices
==============

-   **Multiple Objects Too Slow?** Do not overuse PhysicsControls.
    Although PhysicsControls are put to "sleep" when they are not
    moving, creating a world solely out of dynamic physics objects will
    quickly bring you to the limits of your computer's capabilities.\
    **Solution:** Improve performance by replacing some physical
    Spatials with non-physical Spatials. Use the non-physical ones for
    non-solid things for which you do not need to detect collisions --
    foliage, plants, effects, ghosts, all remote or unreachable objects.

-   **Complex Shape Too Slow?** Breaking the level into manageable
    pieces helps the engine improve performance: The less CPU-intensive
    [broadphase](http://en.wikipedia.org/wiki/Sweep_and_prune) filters
    out parts of the scene that are out of reach. It only calculates the
    collisions for objects that are actually close to the action.\
    **Solution:** A huge static city or terrain model should never be
    loaded as one huge mesh. Divide the scene into multiple physics
    objects, with each its own CollisionShape. Choose the most simple
    CollisionShape possible; use mesh-accurate shapes only for the few
    cases where precision is more important than speed. For example, you
    can use the very fast `PlaneCollisionShape` for flat streets, floors
    and the outside edge of the scene, if you keep these pieces
    separate.

-   **Eject?** If you have physical nodes jittering wildy and being
    ejected "for no apparent reason, it means you have created an
    impossible state -- solid objects overlapping. This can happen when
    you position solid spatials too close to other solid spatials, e.g.
    when moving them with setLocalTranslation().\
    **Solution:** Use the debug mode to make CollisionShapes visible and
    verify that CollisionShapes do not overlap.

```{=html}
<!-- -->
```
    bulletAppState.getPhysicsSpace().enableDebug(assetManager);

-   **Buggy?** If you get weird behaviour, such as physical nodes
    passing through one another, or getting stuck for no reason.\
    **Solution:** Look at the physics space accessors and change the
    acuracy and other parameters.

-   **Need more interactivity?** You can actively *control* a physical
    game by triggering forces. You may also want to be able *respond* to
    collisions, e.g. by substracting health, awarding points, or by
    playing a sound.\
    **Solution:** To specify how the game responds to collisions, you
    use [Physics Listeners](../../jme3/advanced/physics_listeners).

[^1]: Inertia is calculated for kinematic objects, and you need mass to
    do that.

You can control physical objects (push them around) by applying physical
forces to them. Typically, you also want to respond to the resulting
collisions, e.g. by substracting health points or by playing a sound. To
specify how the game responds to such physics events, you use Physics
Listeners.

Sample Code
===========

-   [TestCollisionListener.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/bullet/TestCollisionListener.java)

-   [TestAttachGhostObject.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/bullet/TestAttachGhostObject.java)

-   [TestGhostObject.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/bullet/TestGhostObject.java)

PhysicsGhostObjects
===================

Attach a com.jme3.bullet.control.GhostControl to any Spatial to turn it
into a PhysicsGhostObject. Ghost objects automatically follow their
spatial and detect collisions. The attached ghost itself is invisible
and non-solid (!) and doesn't interfere with your game otherwise, it
only passively reports collisions.

You can leave the GhostControl non-solid and invisible and attach it to
an (invisible) Node in the scene to create something like a motion
detector. But a GhostControl also works fine when added to spatials that
are solid (with RigidBodyControl) and visible (with Geometry). One use
case for GhostControls is to check for collisions among
[CharacterControls](../../jme3/advanced/walking_character) when the
characters are walking.

The shape of the ghost depends on the CollisionShape that you gave the
GhostControl. This means that the GhostControl's shape can be different
from the RigidBodyControl's shape. For example, the non-solid ghost
shape can be bigger than the solid shape of the Spatial (so you can
"feel ahead).

```java
GhostControl ghost = new GhostControl(
  new BoxCollisionShape(new Vector3f(1,1,1)));  // a box-shaped ghost
Node node = new Node("a ghost-controlled thing");
node.addControl(ghost);                         // the ghost follows this node
// Optional: Add a Geometry, or other controls, to the node if you need to
...
// attach everything to activate it
rootNode.attachChild(node);
getPhysicsSpace().add(ghost);
```

+-----------------------------------+-----------------------------------+
| Ghost methods                     | Usage                             |
+===================================+===================================+
| getOverlappingObjects()           | Returns the List of objects that  |
|                                   | are currently colliding           |
|                                   | (overlapping) with the ghost.     |
+-----------------------------------+-----------------------------------+
| getOverlappingCount()             | Returns the number of currently   |
|                                   | colliding objects.                |
+-----------------------------------+-----------------------------------+
| getOverlapping(i)                 | Get PhysicsCollisionObject number |
|                                   | i.                                |
+-----------------------------------+-----------------------------------+

Physics Tick Listener
=====================

The jBullet Physics implementation is stepped at a constant 60 physics
ticks per second frame rate. Applying forces or checking for overlaps
only has an effect right at a physics update cycle, which is not every
frame. If you do physics interactions at arbitrary spots in the
simpleUpdate() loop, calls will be dropped at irregular intervals,
because they happen out of cycle.

When (Not) to Use Tick Listener?
--------------------------------

When you write game mechanics that apply forces, you must implement a
tick listener (com.jme3.bullet.PhysicsTickListener) for it. The tick
listener makes certain the forces are not dropped, but applied in time
for the next physics tick.

Also, when you check for overlaps of two physical objects using a
GhostControl, you cannot just go `ghost.getOverLappingObjects()`
somewhere outside the update loop. You have to make certain 1 physics
tick has passed before the overlapping objects list is filled with data.
Again, the PhysicsTickListener does the timing for you.

When your game mechanics however just poll the current state (e.g.
getPhysicsLocation()) of physical objects, or if you only use the
GhostControl like a sphere trigger inside an update loop, then you don't
need an extra PhysicsTickListener.

How to Listen to Physics Ticks
------------------------------

Here's is the declaration of an examplary Physics Control that listens
to ticks. (The example shows a RigidBodyControl, but it can also be
GhostControl.)

```java
public class MyCustomControl
    extends RigidBodyControl implements PhysicsTickListener { ... }
```

When you implement the interface, you have to implement `physicsTick()`
and `preTick()` methods.

-   `prePhysicsTick(PhysicsSpace space, float tpf)` is called before
    each step, here you apply forces (change the state).

-   `physicsTick(PhysicsSpace space, float tpf)` is called after each
    step, here you poll the results (get the current state).

The tpf value is time per frame in seconds. You can use it as a factor
to time actions so they run equally on slow and fast machines.

```java
@override
public void prePhysicsTick(PhysicsSpace space, float tpf){
  // apply state changes ...
}
@override
public void physicsTick(PhysicsSpace space, float tpf){
  // poll game state ...
}
```

Physics Collision Listener
==========================

When (Not) to Use Collision Listener
------------------------------------

If you do not implement the Collision Listener interface
(com.jme3.bullet.collision.PhysicsCollisionListener), a collisions will
just mean that physical forces between solid objects are applied
automatically. If you just want "Balls rolling, bricks falling you do
not need a listener.

If however you want to respond to a collision event
(com.jme3.bullet.collision.PhysicsCollisionEvent) with a custom action,
then you need to implement the PhysicsCollisionListener interface.
Typical actions triggered by collisions include:

-   Increasing a counter (e.g. score points)

-   Decreasing a counter (e.g. health points)

-   Triggering an effect (e.g. explosion)

-   Playing a sound (e.g. explosion, ouch)

-   ... and countless more, depending on your game

How to Listen to Collisions
---------------------------

You need to add the PhysicsCollisionListener to the physics space before
collisions will be listened for. Here's an example of a Physics Control
that uses a collision listener. (The example shows a RigidBodyControl,
but it can also be GhostControl.)

```java
public class MyCustomControl extends RigidBodyControl
    implements PhysicsCollisionListener {
    public MyCustomControl() {
        bulletAppState.getPhysicsSpace().addCollisionListener(this);
        ...
    }
```

To respond to the PhysicsCollisionEvent you now have to override the
`collision()` method in MyCustomControl. This gives you access to the
`event` object. Mostly you will be interested in the identity of any two
nodes that collided: `event.getNodeA()` and `event.getNodeB()`.

After you identify the colliding nodes, specify the action to trigger
when this pair collides. Note that you cannot know which one will be
Node A or Node B, you have to deal with either variant.

```java
    public void collision(PhysicsCollisionEvent event) {
        if ( event.getNodeA().getName().equals("player") ) {
            final Node node = event.getNodeA();
            /** ... do something with the node ... */
        } else if ( event.getNodeB().getName().equals("player") ) {
            final Node node = event.getNodeB();
            /** ... do something with the node ... */
        }
    }
```

::: {.important}
Note that after the collision() method ends, the PhysicsCollisionEvent
is cleared. You must get all objects and values you need within the
collision() method.
:::

Reading Details From a PhysicsCollisionEvent
--------------------------------------------

The PhysicsCollisionEvent `event` gives you access to detailed
information about the collision. You already know the event objects can
identify which nodes collided, but it even knows how hard they collided:

+-----------------------------------+-----------------------------------+
| Method                            | Purpose                           |
+===================================+===================================+
| getObjectA()\                     | The two participants in the       |
| getObjectB()                      | collision. You cannot know in     |
|                                   | advance whether some node will be |
|                                   | recorded as A or B, you always    |
|                                   | have to consider both cases.      |
+-----------------------------------+-----------------------------------+
| getAppliedImpulse()               | A float value representing the    |
|                                   | collision impulse                 |
+-----------------------------------+-----------------------------------+
| getAppliedImpulseLateral1()       | A float value representing the    |
|                                   | lateral collision impulse         |
+-----------------------------------+-----------------------------------+
| getAppliedImpulseLateral2()       | A float value representing the    |
|                                   | lateral collision impulse         |
+-----------------------------------+-----------------------------------+
| getCombinedFriction()             | A float value representing the    |
|                                   | collision friction                |
+-----------------------------------+-----------------------------------+
| getCombinedRestitution()          | A float value representing the    |
|                                   | collision restitution             |
|                                   | (bounciness)                      |
+-----------------------------------+-----------------------------------+

Note that after the collision method has been called the object is not
valid anymore so you should copy any data you want to keep into local
variables.

Collision Groups
----------------

You can improve performance by resricting the number of tests that
collision detection has to perform. If you have a case where you are
only interested in collisions between certain objects but not others,
you can assign sets of physical obejcts to different collision groups.

For example, for a click-to-select, you only care if the selection ray
collides with a few selectable objects such as dropped weapons or
powerups (one group), but not with non-selectables such as floors or
walls (different group).

```java
myNode.getControl(RigidBodyControl.class).setCollisionGroup(PhysicsCollisionObject.COLLISION_GROUP_02);
myNode.getControl(RigidBodyControl.class).setCollideWithGroups(PhysicsCollisionObject.COLLISION_GROUP_02);
```

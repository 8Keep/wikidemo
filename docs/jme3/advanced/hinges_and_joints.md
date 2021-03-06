The jMonkeyEngine3 has built-in support for [jBullet
physics](http://jbullet.advel.cz) via the `com.jme3.bullet` package.

Game Physics are not only employed to calculate collisions, but they can
also simulate hinges and joints. Think of pulley chains, shaky rope
bridges, swinging pendulums, or (trap)door and chest hinges. Physics are
a great addition to e.g. an action or puzzle game.

In this example, we will create a pendulum. The joint is the (invisible)
connection between the pendulum body and the hook. You will see that you
can use what you learn from the simple pendulum and apply it to other
joint/hinge objects (rope bridges, etc).

Sample Code
===========

-   [TestPhysicsHingeJoint.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/bullet/TestPhysicsHingeJoint.java)

Overview of this Physics Application
====================================

1.  Create a SimpleApplication with a
    [BulletAppState](../../jme3/advanced/physics)

    -   This gives us a PhysicsSpace for PhysicsControls

2.  For the pendulum, we use a Spatial with a PhysicsControl, and we
    apply physical forces to them.

    -   The parts of the "pendulum are Physics Control'ed Spatials with
        Collision Shapes.

    -   We create a fixed `hookNode` and a dynamic `pendulumNode`.

3.  We can "crank the handle and rotate the joint like a hinge, or we
    can let loose and expose the joints freely to gravity.

    -   For physical forces we will use the method
        `joint.enableMotor();`

Creating a Fixed Node
=====================

The hookNode is the fixed point from which the pendulum hangs. It has no
mass.

```java
Node hookNode=PhysicsTestHelper.createPhysicsTestNode(
    assetManager, new BoxCollisionShape(new Vector3f( .1f, .1f, .1f)),0);
hookNode.getControl(RigidBodyControl.class).setPhysicsLocation(new Vector3f(0f,0,0f));

rootNode.attachChild(hookNode);
getPhysicsSpace().add(hookNode);
```

For a rope bridge, there would be two fixed nodes where the bridge is
attached to the mountainside.

Creating a Dynamic Node
=======================

The pendulumNode is the dynamic part of the construction. It has a mass.

```java
Node pendulumNode=PhysicsTestHelper.createPhysicsTestNode(
    assetManager, new BoxCollisionShape(new Vector3f( .3f, .3f, .3f)),1);
pendulumNode.getControl(RigidBodyControl.class).setPhysicsLocation(new Vector3f(0f,-1,0f));
rootNode.attachChild(pendulumNode);
getPhysicsSpace().add(pendulumNode);
```

For a rope bridge, each set of planks would be one dynamic node.

Understanding DOF, Joints, and Hinges
=====================================

A PhysicsHingeJoint is an invisible connection between two nodes -- here
between the pendulum body and the hook. Why are hinges and joints
represented by the same class? Hinges and joints have something in
common: They constrain the *mechanical degree of freedom* (DOF) of
another object.

Consider a free falling, "unchained object in physical 3D space: It has
6 DOFs:

-   It translates along 3 axes

-   It rotates around 3 axes

Now consider some examples of objects with joints:

-   An individual chain link is free to spin and move around, but joined
    into a chain, the link's movement is restricted to stay with the
    surrounding links.

-   A person's arm can rotate around some axes, but not around others.
    The shoulder joint allows one and restricts the other.

-   A door hinge is one of the most restricted types of joint: It can
    only rotate around one axis.

You'll understand that, when creating any type of joint, it is important
to correctly specify the DOFs that the joint restricts, and the DOFs
that the joint allows. For the typical DOF of a
[ragDoll](../../jme3/advanced/ragdoll) character's limbs, jME even
offers a special joint, `ConeJoint`.

Creating the Joint
==================

You create the HingeJoint after you have created the nodes that are to
be chained together. In the code snippet you see that the HingeJoint
constructor requires the two node objects. You also have to specify axes
and pivots -- they are the degrees of freedom that you just heard about.

```java
private HingeJoint joint;
...
  public void simpleInitApp() {
    ...
    // hookNode and pendulumNode are created here...
    ...

    joint=new HingeJoint(hookNode.getControl(RigidBodyControl.class), // A
                     pendulumNode.getControl(RigidBodyControl.class), // B
                     new Vector3f(0f, 0f, 0f),  // pivot point local to A
                     new Vector3f(0f, 1f, 0f),  // pivot point local to B
                     Vector3f.UNIT_Z,           // DoF Axis of A (Z axis)
                     Vector3f.UNIT_Z  );        // DoF Axis of B (Z axis)
```

The pivot point's position will be at `(0,0,0)` in the global 3D space.
In A's local space that is at `(0,0,0)` and in B's local space (remember
B's position was set to `(0,-1,0)`) that is at `(0,1,0)`.

Specify the following parameters for each joint:

-   PhysicsControl A and B -- the two nodes that are to be joined

-   Vector3f pivot A and pivot B -- coordinates of the attachment point
    relative to A and B

    -   The points typically lie on the surface of the PhysicsControl's
        Spatials, rarely in the middle.

-   Vector3f axisA and axisB -- around which axes each node is allowed
    to spin.

    -   In our example, we constrain the pendulum to swing only along
        the Z axis.

Remember to add all joint objects to the physicsSpace, just like you
would do with any physical objects.

```java
bulletAppState.getPhysicsSpace().add(joint);
```

**Tip:** If you want the joint to be visible, attach a geometry to the
dynamic node, and translate it to its start position.

Apply Physical Forces
=====================

You can apply forces to dynamic nodes (the ones that have a mass), and
see how other joined ("chained) objects are dragged along.

Alternatively, you can also apply forces to the joint itself. In a game,
you may want to spin an automatic revolving door, or slam a door closed
in a spooky way, or dramatically open the lid of a treasure chest.

The method to call on the joint is `enableMotor()`.

```java
joint.enableMotor(true, 1, .1f);
joint.enableMotor(true, -1, .1f);
```

1.  Switch the motor on by supplying `true`

2.  Specify the velocity with which the joint should rotate around the
    specified axis.

    -   Use positive and negative numbers to change direction.

3.  Specify the impulse for this motor. Heavier masses need a bigger
    impulse to be moved.

When you disable the motor, the chained nodes are exposed to gravity
again:

```java
joint.enableMotor(false, 0, 0);
```

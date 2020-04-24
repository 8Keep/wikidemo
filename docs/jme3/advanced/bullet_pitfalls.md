Bullet physics is not without its problems. Unfortunately, many of those
are outside of the control of the jMonkeyEngine Core Team and thus
cannot be fixed.

Sweep Test Issues
=================

1.  When using
    link:http://jmonkeyengine.org/javadoc/com/jme3/bullet/PhysicsSpace.html\#sweepTest(com.jme3.bullet.collision.shapes.CollisionShape,
    com.jme3.math.Transform,
    com.jme3.math.Transform)\[PhysicsSpace.sweepTest()\], ensure that
    the distance between the transforms is at least 0.4wu or greater.

2.  Note that the sweep will not detect collisions if it done inside of
    a collision shape. It must be on the edge of a collision shape to
    detect any collisions.

Ghost Control AABB Collision only
=================================

As the javadoc for
[PhysicsObjectControl](http://jmonkeyengine.org/javadoc/com/jme3/bullet/objects/PhysicsGhostObject.html)
says, the ghost object collision detection uses AABB (Axis-aligned
bounding box) collision only, regardless of the collision shape it has
been assigned.

**Workaround:**+ Please use PhysicsSpace.sweepTest() instead, or
kinematic physics objects with [collision
listeners](http://jmonkeyengine.org/javadoc/com/jme3/bullet/PhysicsSpace.html#addCollisionListener(com.jme3.bullet.collision.PhysicsCollisionListener)).

Rigid bodies fall through ground
================================

This usually happens if the ground physics object has large triangles or
consists of a large BoxCollisionShape.

**Workaround:**+

-   For meshes with large triangles - Subdivide the mesh in a model
    editor such as Blender.

-   For large boxes - seperate into smaller boxes or use a
    MeshCollisionShape for terrain instead of BoxCollisionShape.
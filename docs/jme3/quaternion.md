Quaternion
==========

See [Javadoc]({link-javadoc}/com/jme3/math/Quaternion.html)

Definition
----------

Quaternions define a subset of a hypercomplex number system. Quaternions
are defined by (i^2^ = j^2^ = k^2^ = ijk = -1). jME makes use of
Quaternions because they allow for compact representations of rotations,
or correspondingly, orientations, in 3D space. With only four float
values, we can represent an object's orientation, where a rotation
matrix would require nine. They also require fewer arithmetic operations
for concatenation.

Additional benefits of the Quaternion is reducing the chance of [Gimbal
Lock](http://en.wikipedia.org/wiki/Gimbal_lock) and allowing for easily
interpolation between two rotations (spherical linear interpolation or
slerp).

While Quaternions are quite difficult to fully understand, there are an
exceeding number of convenience methods to allow you to use them without
having to understand the math behind it. Basically, these methods
involve nothing more than setting the Quaternion's x,y,z,w values using
other means of representing rotations. The Quaternion is then contained
in [Spatial](../jme3/advanced/spatial) as its local rotation
component.

Quaternion **q** has the form

**q** = \<\_w,x,y,z\_\> = *w + xi + yj + zk*

or alternatively, it can be written as:

**q** = **s** + **v**, where **s** represents the scalar part
corresponding to the w-component of **q**, and **v** represents the
vector part of the (x, y, z) components of **q**.

Multiplication of Quaternions uses the distributive law and adheres to
the following rules with multiplying the imaginary components (i, j, k):

`i2 = j2 = k2 = -1`+ `ij = -ji = k`+ `jk = -kj = i`+ `ki = -ik = j`

However, Quaternion multiplication is *not* commutative, so we have to
pay attention to order.

**q~1~q~2~** = s~1~s~2~ - **v~1~** dot **v~2~** + s~1~**v~2~** +
s~2~**v~1~** + **v~1~** X **v~2~**

Quaternions also have conjugates where the conjugate of **q** is (s -
**v**)

These basic operations allow us to convert various rotation
representations to Quaternions.

Angle Axis
----------

You might wish to represent your rotations as Angle Axis pairs. That is,
you define a axis of rotation and the angle with which to rotate about
this axis. Quaternion defines a method `fromAngleAxis` (and
`fromAngleNormalAxis`) to create a Quaternion from this pair. This is
acutally used quite a bit in jME demos to continually rotate objects.
You can also obtain a Angle Axis rotation from an existing Quaternion
using `toAngleAxis`.

### Example - Rotate a Spatial Using fromAngleAxis

```java
//rotate about the Y-Axis by approximately 1 pi
Vector3f axis = Vector3f.UNIT_Y; // this equals (0, 1, 0) and does not require to create a new object
float angle = 3.14f;
s.getLocalRotation().fromAngleAxis(angle, axis);
```

Three Angles
------------

You can also represent a rotation by defining three angles. The angles
represent the rotation about the individual axes. Passing in a
three-element array of floats defines the angles where the first element
is X, second Y and third is Z. The method provided by Quaternion is
`fromAngles` and can also fill an array using `toAngles`

### Example - Rotate a Spatial Using fromAngles

```java
//rotate 1 radian on the x, 3 on the y and 0 on z
float[] angles = {1, 3, 0};
s.getLocalRotation().fromAngles(angles);
```

Three Axes
----------

If you have three axes that define your rotation, where the axes define
the left axis, up axis and directional axis respectively) you can make
use of `fromAxes` to generate the Quaternion. It should be noted that
this will generate a new [Matrix](../jme3/matrix) object that is
then garbage collected, thus, this method should not be used if it will
be called many times. Again, `toAxes` will populate a
[Vector3f](../jme3/terminology.xml#vectors) array.

### Example - Rotate a Spatial Using fromAxes

```java
//rotate a spatial to face up ~45 degrees
Vector3f[] axes = new Vector3f[3];
axes[0] = new Vector3f(-1, 0, 0); //left
axes[1] = new Vector3f(0, 0.5f, 0.5f); //up
axes[2] = new Vector3f(0, 0.5f, 0.5f); //dir

s.getLocalRotation().fromAxes(axes);
```

Rotation Matrix
---------------

Commonly you might find yourself with a [Matrix](../jme3/matrix)
defining a [rotation](../jme3/rotate.xml#toolbar). In fact, it's very
common to contain a rotation in a Matrix, create a Quaternion, rotate
the Quaternion, and then get the Matrix back. Quaternion contains a
`fromRotationMatrix` method that will create the appropriate Quaternion
based on the given Matrix. The `toRotationMatrix` will populate a given
Matrix.

### Example - Rotate a Spatial Using a Rotation Matrix

```java
Matrix3f mat = new Matrix3f();
mat.setColumn(0, new Vector3f(1,0,0));
mat.setColumn(1, new Vector3f(0,-1,0));
mat.setColumn(2, new Vector3f(0,0,1));

s.getLocalRotation().fromRotationMatrix(mat);
```

As you can see there are many ways to build a Quaternion. This allows
you to work with rotations in a way that is conceptually easier to
picture, but still build Quaternions for internal representation.

Slerp
-----

One of the biggest advantages to using Quaternions is allowing
interpolation between two rotations. That is, if you have an initial
Quaternion representing the original orientation of an object, and you
have a final Quaternion representing the orientation you want the object
to face, you can do this very smoothly with slerp. Simply supply the
time, where time is \[0, 1\] and 0 is the initial rotation and 1 is the
final rotation.

### Example - Use Slerp to Rotate Between two Quaternions

```java
Quaternion q1;
Quaternion q2;

//the rotation half-way between these two
Quaternion q3 = q1.slerp(q2, 0.5f);
```

-   See [3D-Rotations](../jme3/rotate) for troubleshooting and extra
    information on using quaternions.

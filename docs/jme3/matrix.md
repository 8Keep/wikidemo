Matrix
======

See [Javadoc of Matrix3f]({link-javadoc}/com/jme3/math/Matrix3f.html)
and [Javadoc of Matrix4f]({link-javadoc}/com/jme3/math/Matrix4f.html)

Definition
----------

A Matrix is typically used as a *linear transformation* to map vectors
to vectors. That is: Y = MX where X is a Vector and M is a Matrix
applying any or all transformations (scale, rotate, translate).

There are a few special matrices:

*zero matrix* is the Matrix with all zero entries.

+----------------------+----------------------+-----------------------+
| 0                    | 0                    | 0                     |
+======================+======================+=======================+
| 0                    | 0                    | 0                     |
+----------------------+----------------------+-----------------------+
| 0                    | 0                    | 0                     |
+----------------------+----------------------+-----------------------+

The *Identity Matrix* is the matrix with 1 on the diagonal entries and 0
for all other entries.

+----------------------+----------------------+-----------------------+
| 1                    | 0                    | 0                     |
+======================+======================+=======================+
| 0                    | 1                    | 0                     |
+----------------------+----------------------+-----------------------+
| 0                    | 0                    | 1                     |
+----------------------+----------------------+-----------------------+

A Matrix is *invertible* if there is a matrix *M^-1^* where *MM^-1^ =
M^-1^ = I*.

The *transpose* of a matrix *M = \[m~ij~\]* is *M^T^ = \[m~ji~\]*. This
causes the rows of *M* to become the columns of *M^T^*.

+---------+---------+---------+---------+---------+---------+---------+
| 1       | 1       | 1       |         | 1       | 2       | 3       |
+=========+=========+=========+=========+=========+=========+=========+
| 2       | 2       | 2       | ⇒       | 1       | 2       | 3       |
+---------+---------+---------+---------+---------+---------+---------+
| 3       | 3       | 3       |         | 1       | 2       | 3       |
+---------+---------+---------+---------+---------+---------+---------+

A Matrix is symmetric if *M* = *M^T^*.

+----------------------+----------------------+-----------------------+
| X                    | A                    | B                     |
+======================+======================+=======================+
| A                    | X                    | C                     |
+----------------------+----------------------+-----------------------+
| B                    | C                    | X                     |
+----------------------+----------------------+-----------------------+

Where X, A, B, and C equal numbers

jME includes two types of Matrix classes: Matrix3f and Matrix4f.
Matrix3f is a 3x3 matrix and is the most commonly used (able to handle
scaling and rotating), while Matrix4f is a 4x4 matrix that can also
handle translation.

Transformations
---------------

Multiplying a [Vector](../jme3/terminology.xml#vectors) with a Matrix
allows the Vector to be transformed. Either rotating, scaling or
translating that Vector.

### Scaling

If a *diagonal Matrix*, defined by D = \[d~ij~\] and d~ij~ = 0 for i !=
j, has all positive entries it is a *scaling matrix*. If d~i~ is greater
than 1 then the resulting Vector will grow, while if d~i~ is less than 1
it will shrink.

### Rotation

A *rotation matrix* requires that the transpose and inverse are the same
matrix (R^-1^ = R^T^). The *rotation matrix* R can then be calculated
as: R = I + (sin(angle)) S + (1 - cos(angle)S^2^ where S is:

+----------------------+----------------------+-----------------------+
| 0                    | u~2~                 | -u~1~                 |
+======================+======================+=======================+
| -u~2~                | 0                    | u~0~                  |
+----------------------+----------------------+-----------------------+
| u~1~                 | -u~0~                | 0                     |
+----------------------+----------------------+-----------------------+

### Translation

Translation requires a 4x4 matrix, where the Vector (x,y,z) is mapped to
(x,y,z,1) for multiplication. The *Translation Matrix* is then defined
as:

+-----------------------------------+-----------------------------------+
| M                                 | T                                 |
+===================================+===================================+
| S^T^                              | 1                                 |
+-----------------------------------+-----------------------------------+

where M is the 3x3 matrix (containing any rotation/scale information), T
is the translation Vector and S^T^ is the transpose Vector of T. 1 is
just a constant.

jME Class
---------

Both Matrix3f and Matrix4f store their values as floats and are publicly
available as (m00, m01, m02, ..., mNN) where N is either 2 or 3.

Most methods are straight forward, and I will leave documentation to the
Javadoc.

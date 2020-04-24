Formulas
========

:::note
Typically you have to string these formulas together. Look in the table
for what you want, and what you have. If the two are not the same line,
than you need conversion steps inbetween. E.g. if you have an angle in
degrees, but the formula expects radians: 1) convert degrees to radians,
2) use the radians formula on the result.
:::

+----------------------+----------------------+-----------------------+
| I have...            | I want...            | Formula               |
+======================+======================+=======================+
| normalized direction | a vector that goes   | v0 = n1.mult(d1)      |
| and length\          | that far in that     |                       |
| n1,d1                | direction\           |                       |
|                      | new direction vector |                       |
|                      | v0                   |                       |
+----------------------+----------------------+-----------------------+
| point and direction  | to move the point\   | p0 = p1.add(v1)       |
| vector\              | new point p0         |                       |
| p1,v1                |                      |                       |
+----------------------+----------------------+-----------------------+
| direction, position  | Position at          | v1.normalzeLocal()\   |
| and distance\        | distance\            | scaledDir =           |
| v1,p1,dist           | p2                   | v1.mult(dist)\        |
|                      |                      | p2 =                  |
|                      |                      | p1.add(scaledDir)     |
+----------------------+----------------------+-----------------------+
| two direction        | to combine both      | v0 = v1.add(v2)       |
| vectors or normals\  | directions\          |                       |
| v1,v2                | new direction vector |                       |
|                      | v0                   |                       |
+----------------------+----------------------+-----------------------+
| two points\          | distance between two | d0 =                  |
| p1, p2               | points\              | p1.s                  |
|                      | new scalar d0        | ubtract(p2).length()\ |
|                      |                      | d0 = p1.distance(p2)  |
+----------------------+----------------------+-----------------------+
| two points\          | the direction from   | v0 = p1.substract(p2) |
| p1, p2               | p2 to p1\            |                       |
|                      | new direction vector |                       |
|                      | v0                   |                       |
+----------------------+----------------------+-----------------------+
| two points, a        | the point "halfway   | p0 =                  |
| fraction\            | (h=0.5f) between the | FastMath.inter        |
| p1, p2, h=0.5f       | two points\          | polateLinear(h,p1,p2) |
|                      | new interpolated     |                       |
|                      | point p0             |                       |
+----------------------+----------------------+-----------------------+
| a direction vector,  | A rotation around    | Quaternion q = new    |
| an up vector\        | this up axis towards | Quaternion();\        |
| v, up                | this direction\      | q.lookAt(v,up)        |
|                      | new Quaternion q     |                       |
+----------------------+----------------------+-----------------------+

+----------------------+----------------------+-----------------------+
| I have...            | I want...            | Formula               |
+======================+======================+=======================+
| angle in degrees\    | to convert angle a   | phi = a / 180 \*      |
| a                    | from degrees to      | FastMath.PI;\         |
|                      | radians\             | OR\                   |
|                      | new float angle phi  | phi=a.mult(Fa         |
|                      |                      | stMath.DEG\_TO\_RAD); |
+----------------------+----------------------+-----------------------+
| angle in radians\    | to convert angle phi | a = phi \* 180 /      |
| phi                  | from radians to      | FastMath.PI           |
|                      | degrees\             |                       |
|                      | new float angle a    |                       |
+----------------------+----------------------+-----------------------+
| radian angle and x   | to rotate around x   | q0.fromAngleAxis(     |
| axis\                | axis\                | phi, Vector3f.UNIT\_X |
| phi, x               | new quaternion q0    | )                     |
+----------------------+----------------------+-----------------------+
| radian angle and y   | to rotate around y   | q0.fromAngleAxis(     |
| axis\                | axis\                | phi, Vector3f.UNIT\_Y |
| phi, y               | new quaternion q0    | )                     |
+----------------------+----------------------+-----------------------+
| radian angle and z   | to rotate around z   | q0.fromAngleAxis(     |
| axis\                | axis\                | phi, Vector3f.UNIT\_Z |
| phi, z               | new quaternion q0    | )                     |
+----------------------+----------------------+-----------------------+
| several quaternions\ | to combine           | q0 =                  |
| q1, q2, q3           | rotations, in that   | q1.mult(q2).mult(q3)  |
|                      | order\               |                       |
|                      | new quaternion q0    |                       |
+----------------------+----------------------+-----------------------+
| point and            | to rotate the point  | p0 = q1.mult(p1)      |
| quaternion\          | around origin\       |                       |
| p1, q1               | new point p0         |                       |
+----------------------+----------------------+-----------------------+
| angle in radians and | to arrange or move   | float x =             |
| radius\              | objects horizontally | F                     |
| phi,r                | in a circle (with    | astMath.cos(phi)\*r;\ |
|                      | y=0)\                | float z =             |
|                      | x and z coordinates  | FastMath.sin(phi)\*r; |
+----------------------+----------------------+-----------------------+

Local vs Non-local methods?
===========================

-   Non-local method creates new object as return value, v remains
    unchanged.\
    `v2 = v.mult(); v2 = v.add(); v2 = v.subtract();` etc

-   Local method changes v directly!\
    `v.multLocal(); v.addLocal(); v.subtractLocal();` etc

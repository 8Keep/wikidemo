In the [Material
Definitions](../../jme3/advanced/material_definitions) article you
learned how to configure
[Materials](../../jme3/advanced/materials_overview) programmatically
in Java code. If you have certain commonly used Materials that never
change, you can clean up the amount of Java code that clutters your init
method, by moving material settings into .j3m files. Then later in your
code, you only need to call one setter instead of several to apply the
material.

If you want to colorize simple shapes (one texture all around), then
.j3m are the most easily customizable solution. J3m files can contain
texture mapped materials, but as usual you have to create the textures
in an external editor, especially if you use UV-mapped textures.

Writing the .j3m File
=====================

1.  For every Material, create a file and give it a name that describes
    it: e.g. `SimpleBump.j3m`

2.  Place the file in your project's `assets/Materials/` directory, e.g.
    `MyGame/src/assets/Materials/SimpleBump.j3m`

3.  Edit the file and add content using the following Syntax, e.g.:

```{=html}
<!-- -->
```
    Material shiny bumpy rock : Common/MatDefs/Light/Lighting.j3md {
         MaterialParameters {
             Shininess: 8.0
             NormalMap: Textures/bump_rock_normal.png
             UseMaterialColors : true
             Ambient  : 0.0 0.0 0.0 1.0
             Diffuse  : 1.0 1.0 1.0 1.0
             Specular : 0.0 0.0 0.0 1.0
         }
    }

How this file is structured:

1.  Header

    a.  `Material` is a fixed keyword, keep it.

    b.  `shiny bumpy rock` is a descriptive string that you can make up.
        Choose a name to help you remember for what you intend to use
        this material.

    c.  After the colon, specify on which
        [Material](../../jme3/advanced/materials_overview)
        definition you base this Material.

2.  Now look up the choosen Material Definition's parameters and their
    parameter types from the
    [Material](../../jme3/advanced/materials_overview) table. Add
    one line for each parameter.

    -   For example: The series of four numbers in the example above
        represent RGBA color values.

3.  Check the detailed syntax reference below if you are unsure.

:::note
In the jMonkeyEngine SDK, use [File \> New File \> Material \> Empty
Material File]{.menuchoice} to create .j3m files. You can edit .j3m
files directly in the SDK. On the other hand, they are plain text files,
so you can also create them in any plain text editor.
:::

How to Use .j3m Materials
=========================

This is how you use the prepared .j3m Material on a Spatial. Since you
have saved the .j3m file to your project's Assets directory, the .j3m
path is relative to `MyGame/src/assets/…`.

```java
myGeometry.setMaterial(assetManager.loadMaterial("Materials/SimpleBump.j3m"));
```

:::note
In the jMonkeyEngine SDK, open [Windows \> Palette]{.menuchoice} and
drag the `JME Material: Set J3M` snippet into your code.
:::

Syntax Reference for .j3m Files
===============================

Paths
-----

Make sure to get the paths to the textures (.png, .jpg) and material
definitions (.j3md) right.

-   The paths to the built-in .j3md files are relative to jME3's Core
    Data directory. Just copy the path stated in the
    [Material](../../jme3/advanced/materials_overview) table.\
    `Common/MatDefs/Misc/Unshaded.j3md` is resolved to
    `jme3/src/src/core-data/Common/MatDefs/Misc/Unshaded.j3md`.

-   The paths to your textures are relative to your project's assets
    directory.\
    `Textures/bump_rock_normal.png` is resolved to
    `MyGame/src/assets/Textures/bump_rock_normal.png`

Data Types
----------

All data types (except Color) are specified in com.jme3.shader.VarType.
"Color" is specified as Vector4 in J3MLoader.java.

+----------------------+----------------------+-----------------------+
| Name                 | jME Java class       | .j3m file syntax      |
+======================+======================+=======================+
| Float                | (basic Java type)    | a float (e.g. 0.72) , |
|                      |                      | no comma or           |
|                      |                      | parentheses           |
+----------------------+----------------------+-----------------------+
| Vector2              | `com                 | Two floats, no comma  |
|                      | .jme3.math.Vector2f` | or parentheses        |
+----------------------+----------------------+-----------------------+
| Vector3              | `com                 | Three floats, no      |
|                      | .jme3.math.Vector3f` | comma or parentheses  |
+----------------------+----------------------+-----------------------+
| Vector4              | `com                 | Four floats, no comma |
|                      | .jme3.math.Vector4f` | or parentheses        |
+----------------------+----------------------+-----------------------+
| Texture2D            | `com.jme             | Path to texture in    |
|                      | 3.texture.Texture2D` | `assets` directory,   |
|                      |                      | no quotation marks    |
+----------------------+----------------------+-----------------------+
| Texture3D            | `com.jme             | Same as texture 2D    |
|                      | 3.texture.Texture3D` | except it is          |
|                      |                      | interpreted as a 3D   |
|                      |                      | texture               |
+----------------------+----------------------+-----------------------+
| TextureCubeMap       | `com.jme3.tex        | Same as texture 2D    |
|                      | ture.TextureCubeMap` | except it is          |
|                      |                      | interpreted as a      |
|                      |                      | cubemap texture       |
+----------------------+----------------------+-----------------------+
| Boolean              | (basic Java type)    | `true` or `false`     |
+----------------------+----------------------+-----------------------+
| Int                  | (basic Java type)    | Integer number, no    |
|                      |                      | comma or parentheses  |
+----------------------+----------------------+-----------------------+
| Color                | `com.                | Four floats, no comma |
|                      | jme3.math.ColorRGBA` | or parentheses        |
+----------------------+----------------------+-----------------------+
| FloatArray           |                      | (Currently not        |
|                      |                      | supported in J3M)     |
+----------------------+----------------------+-----------------------+
| Vector2Array         |                      | (Currently not        |
|                      |                      | supported in J3M)     |
+----------------------+----------------------+-----------------------+
| Vector3Array         |                      | (Currently not        |
|                      |                      | supported in J3M)     |
+----------------------+----------------------+-----------------------+
| Vector4Array         |                      | (Currently not        |
|                      |                      | supported in J3M)     |
+----------------------+----------------------+-----------------------+
| Matrix3              |                      | (Currently not        |
|                      |                      | supported in J3M)     |
+----------------------+----------------------+-----------------------+
| Matrix4              |                      | (Currently not        |
|                      |                      | supported in J3M)     |
+----------------------+----------------------+-----------------------+
| Matrix3Array         |                      | (Currently not        |
|                      |                      | supported in J3M)     |
+----------------------+----------------------+-----------------------+
| Matrix4Array         |                      | (Currently not        |
|                      |                      | supported in J3M)     |
+----------------------+----------------------+-----------------------+
| TextureBuffer        |                      | (Currently not        |
|                      |                      | supported in J3M)     |
+----------------------+----------------------+-----------------------+
| TextureArray         |                      | (Currently not        |
|                      |                      | supported in J3M)     |
+----------------------+----------------------+-----------------------+

Flip and Repeat Syntax
----------------------

-   A texture can be flipped using the following syntax
    `NormalMap: Flip Textures/bump_rock_normal.png`

-   A texture can be set to repeat using the following syntax
    `NormalMap: Repeat Textures/bump_rock_normal.png`

-   If a texture is set to both being flipped and repeated, Flip must
    come before Repeat

Syntax for Additional Render States
-----------------------------------

-   A Boolean can be "On" or "Off"

-   Float is "123.0" etc

-   Enum - values depend on the enum

See the [RenderState]({link-javadoc}/com/jme3/material/RenderState.html)
javadoc for a detailed explanation of render states.

+----------------------+----------------------+-----------------------+
| Name                 | Type                 | Purpose               |
+======================+======================+=======================+
| [Wir                 | (Boolean)            | Enable wireframe      |
| eframe]({link-javado |                      | rendering mode        |
| c}/com/jme3/material |                      |                       |
| /RenderState.html#se |                      |                       |
| tWireframe-boolean-) |                      |                       |
+----------------------+----------------------+-----------------------+
| [                    | (Enum: FaceCullMode) | Set face culling mode |
| FaceCull]({link-java |                      | (Off, Front, Back,    |
| doc}/com/jme3/materi |                      | FrontAndBack)         |
| al/RenderState.html# |                      |                       |
| setFaceCullMode-com. |                      |                       |
| jme3.material.Render |                      |                       |
| State.FaceCullMode-) |                      |                       |
+----------------------+----------------------+-----------------------+
| [Depth               | (Boolean)            | Enable writing depth  |
| Write]({link-javadoc |                      | to the depth buffer   |
| }/com/jme3/material/ |                      |                       |
| RenderState.html#set |                      |                       |
| DepthWrite-boolean-) |                      |                       |
+----------------------+----------------------+-----------------------+
| [Dep                 | (Boolean)            | Enable depth testing  |
| thTest]({link-javado |                      |                       |
| c}/com/jme3/material |                      |                       |
| /RenderState.html#se |                      |                       |
| tDepthTest-boolean-) |                      |                       |
+----------------------+----------------------+-----------------------+
| [Blend]({lin         | (Enum: BlendMode)    | Set the blending mode |
| k-javadoc}/com/jme3/ |                      |                       |
| material/RenderState |                      |                       |
| .html#setBlendMode-c |                      |                       |
| om.jme3.material.Ren |                      |                       |
| derState.BlendMode-) |                      |                       |
+----------------------+----------------------+-----------------------+
| [Alp                 | (Float)              | Set the alpha testing |
| haDiscardThreshold]( |                      | alpha falloff value   |
| {link-javadoc}/com/j |                      | (if set, it will      |
| me3/material/Materia |                      | enable alpha          |
| l.html#setFloat-java |                      | testing)\             |
| .lang.String-float-) |                      | mat.setFloat(\"Alp    |
|                      |                      | haDiscardThreshold\", |
|                      |                      | 2f);                  |
+----------------------+----------------------+-----------------------+
| [PolyOffse           | (Float, Float)       | Set the polygon       |
| t]({link-javadoc}/co |                      | offset factor and     |
| m/jme3/material/Rend |                      | units                 |
| erState.html#setPoly |                      |                       |
| Offset-float-float-) |                      |                       |
+----------------------+----------------------+-----------------------+
| [Color               | (Boolean)            | Enable color writing  |
| Write]({link-javadoc |                      |                       |
| }/com/jme3/material/ |                      |                       |
| RenderState.html#set |                      |                       |
| ColorWrite-boolean-) |                      |                       |
+----------------------+----------------------+-----------------------+

Examples
========

Example 1: Shiny
----------------

```java
Spatial signpost = (Spatial) assetManager.loadAsset(
    new OgreMeshKey("Models/Sign Post/Sign Post.mesh.xml", null));
signpost.setMaterial( assetManager.loadMaterial(
    new AssetKey("Models/Sign Post/Sign Post.j3m")));
TangentBinormalGenerator.generate(signpost);
rootNode.attachChild(signpost);
```

The file `assets/Models/Sign Post/Sign Post.j3m` contains:

    Material Signpost : Common/MatDefs/Light/Lighting.j3md {
        MaterialParameters {
             Shininess: 4.0
             DiffuseMap:  Models/Sign Post/Sign Post.jpg
             NormalMap:   Models/Sign Post/Sign Post_normal.jpg
             SpecularMap: Models/Sign Post/Sign Post_specular.jpg
             UseMaterialColors : true
             Ambient  : 0.5 0.5 0.5 1.0
             Diffuse  : 1.0 1.0 1.0 1.0
             Specular : 1.0 1.0 1.0 1.0
        }
    }

The JPG files are in the same directory, `assets/Models/Sign Post/…`.

Example 2: Repeating Texture
----------------------------

```java
Material mat = assetManager.loadMaterial(
    "Textures/Terrain/Pond/Pond.j3m");
mat.setColor("Ambient", ColorRGBA.DarkGray);
mat.setColor("Diffuse", ColorRGBA.White);
mat.setBoolean("UseMaterialColors", true);
```

The file `assets/Textures/Terrain/Pond/Pond.j3m` contains:

    Material Pong Rock : Common/MatDefs/Light/Lighting.j3md {
         MaterialParameters {
             Shininess: 8.0
             DiffuseMap: Repeat Textures/Terrain/Pond/Pond.png
             NormalMap:  Repeat Textures/Terrain/Pond/Pond_normal.png
         }
    }

The PNG files are in the same directory, `assets/Textures/Terrain/Pond/`

Example 3: Transparent
----------------------

The file `assets/Models/Tree/Leaves.j3m` contains:

    Material Leaves : Common/MatDefs/Light/Lighting.j3md {

        Transparent On

        MaterialParameters {
            DiffuseMap : Models/Tree/Leaves.png
            UseAlpha : true
            AlphaDiscardThreshold : 0.5
            UseMaterialColors : true
            Ambient : .5 .5 .5 .5
            Diffuse : 0.7 0.7 0.7 1
            Specular : 0 0 0 1
            Shininess : 16
        }
        AdditionalRenderState {
            Blend Alpha
            AlphaTestFalloff 0.50
            FaceCull Off
        }
    }

The PNG file is in the same directory, `assets/Models/Tree/…`

Related Links
=============

-   [Developer specification of the jME3 material system
    (.j3md,.j3m)](../../jme3/advanced/material_specification)

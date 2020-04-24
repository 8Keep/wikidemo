A Geometry (mesh) is just the shape of the object. jMonkeyEngine cannot
render a shape without knowing anything about its surface properties.
You need to apply a color or texture to the surface of your Geometries
to make them visible. In jMonkeyEngine, colors and textures are
represented as Material objects. (An alternative would also be to load a
model that includes materials generated by a mesh editor, such as
Blender.)

-   All Geometries must have Materials that defines color or texture.

-   Each Material is based on a Material Definition file.\
    Examples of included Material Definitions: Lighting.j3md,
    Unshaded.j3md

You want to make the most of your 3D models by specifying good looking
material parameters. The developers must be in contact with the graphic
designers regarding which of the [Material
properties](../../jme3/advanced/materials_overview) they intend to
use in their 3D models. You must have an understanding what [texture
maps](../../jme3/terminology.xml#materialstextures) are, to be able to
use texture-mapped materials.

::: {.important}
Don't forget to add a [Light
Source](../../jme3/advanced/light_and_shadow) to the scene! All
Materials (except "Unshaded ones) are **invisible** without a light
source.
:::

If you want more advanced background info: You can learn more about
[Material Definitions](../../jme3/advanced/material_definitions) in
general here. You can find the full list of Material Parameters in the
[Material Definitions
Properties](../../jme3/advanced/materials_overview) overview. The
following sections introduce you to the most commonly used cases. You
typically initialize Material objects in the `simpleInitApp()` method,
and configure them using the setters described here. Then load the
Materials using `myGeometry.setMaterial(mat)`.

Code Sample
===========

The following samples assume that you loaded a Geometry called
myGeometry, and want to assign a material to it.

This example creates a simple unshaded blue material: Use it for
abstract objects that need no illumination/shading, e.g. sky, GUI and
billboard nodes, tiles/cards, or toons.

```java
Spatial myGeometry = assetManager.loadModel("Models/Teapot/Teapot.j3o");
Material mat = new Material(assetManager,  // Create new material and...
    "Common/MatDefs/Misc/Unshaded.j3md");  // ... specify .j3md file to use (unshaded).
mat.setColor("Color", ColorRGBA.Blue);     // Set some parameters, e.g. blue.
myGeometry.setMaterial(mat);               // Use new material on this Geometry.
```

This example creates a
[Phong](http://en.wikipedia.org/wiki/Phong_reflection_model)-illuminated
blue material. Use it for illuminated, naturalistic objects, such as
characters, buildings, terrains, vehicles. Needs a light source,
otherwise it will be invisible.

```java
Spatial myGeometry = assetManager.loadModel("Models/Teapot/Teapot.j3o");
Material mat = new Material(assetManager,  // Create new material and...
    "Common/MatDefs/Light/Lighting.j3md"); // ... specify .j3md file to use (illuminated).
mat.setBoolean("UseMaterialColors",true);  // Set some parameters, e.g. blue.
mat.setColor("Ambient", ColorRGBA.Blue);   // ... color of this object
mat.setColor("Diffuse", ColorRGBA.Blue);   // ... color of light being reflected
myGeometry.setMaterial(mat);               // Use new material on this Geometry.
```

:::note
Do you reuse Materials? You can [store Material properties in a .j3m
file](../../sdk/material_editing) and load all properties in one
line using

```java
myGeometry.setMaterial( assetManager.loadMaterial("Materials/myMaterial.j3m"));
```
:::

Colored or Textured
===================

Every Material must have at least Material Colors or Textures. Some
optional material features also require a combination of both.

Colored
-------

To give an unshaded material a color:

-   Specify the color property

    ```java
    mat.setColor("Color", ColorRGBA.Blue); // with Unshaded.j3md
    ```

To give an Phong-illuminated material a color:

1.  Activate material colors:

    ```java
    mat.setBoolean("UseMaterialColors",true); // with Lighting.j3md
    ```

2.  Specify at least Diffuse and Ambient colors. Set both to the same
    color in the standard case.

    ```java
    mat.setColor("Diffuse", ColorRGBA.Blue ); // with Lighting.j3md
    mat.setColor("Ambient", ColorRGBA.Blue ); // with Lighting.j3md
    ```

Textured
--------

To give an unshaded material a texture:

-   Specify at least a ColorMap:

    ```java
    mat.setTexture("ColorMap", assetManager.loadTexture("Textures/monkey.png")); // with Unshaded.j3md
    ```

To give a Phong-illuminated material a texture:

-   Specify at least the DiffuseMap texture:

    ```java
    mat.setTexture("DiffuseMap", assetManager.loadTexture("Textures/wood_diffuse.png")); // with Lighting.j3md
    ```

:::note
It can happen that you load textures at different scales, for example,
your blades of grass may look as big as twigs, or your spaceship's heat
tiles may look like small bathroom tiles. Then you need to adjust the
texture scale, either bigger (\> 1.0f) or smaller (\< 1.0f).

```java
geometry.scaleTextureCoordinates(new Vector2f(0.5f, 0.5f));
```
:::

All other Texture Maps or Material settings are optional. If used
skillfully, they make your model look really spiffy.

(Optional) Bumpy
================

A NormalMap (also called BumpMap) is an extra colored texture that
describes the fine bumpy details of the Material surface. E.g. fine
cracks, pores, creases, notches. Using a BumpMap is more efficient than
trying to shape the mesh to be bumpy.

To add a BumpMap (this only makes sense for illuminated Materials):

1.  Generate normal vectors information for the Mesh (not for the
    Geometry!) using `com.jme3.util.TangentBinormalGenerator`.

    ```java
    TangentBinormalGenerator.generate(mesh);
    ```

2.  Specify the `NormalMap` texture for the Material.

    ```java
    mat.setTexture("NormalMap", assetManager.loadTexture("Textures/wood_normal.png")); // with Lighting.j3md
    ```

[Learn more about creating and using NormalMaps and BumpMaps
here.](http://en.wikipedia.org/wiki/Bump_mapping)

(Optional) Shiny
================

To activate Shininess (this only makes sense for illuminated Materials):

1.  Specify the `Shininess` intensity the Material.\
    Shininess is a float value between 1 (rough surface with blurry
    shininess) and 128 (very smooth surface with focused shininess)

    ```java
    mat.setFloat("Shininess", 5f);
    ```

2.  Activate material colors:

    ```java
    mat.setBoolean("UseMaterialColors",true);
    ```

3.  Specify the `Specular` and `Diffuse` colors of the shiny spot.\
    Typically you set Specular to the ColorRGBA value of the light
    source, often RGBA.White.

    ```java
    mat.setColor("Specular",ColorRGBA.White);
    mat.setColor("Diffuse",ColorRGBA.White);
    ```

4.  (Optional) Specify a `SpecularMap` texture.\
    You optionally hand-draw this grayscale texture to outline in detail
    where the surface should be more shiny (whiter grays) and where less
    (blacker grays). If you don't supply a SpecularMap, the whole
    material is shiny everywhere.

    ```java
    mat.setTexture("SpecularMap", assetManager.loadTexture("Textures/metal_spec.png")); // with Lighting.j3md
    ```

To deactivate shininess

-   Set the `Specular` color to `ColorRGBA.Black`. Do not just set
    `Shininess` to 0.

    ```java
    mat.setColor("Specular",ColorRGBA.Black);
    ```

(Optional) Glow
===============

To activate glow:

1.  Add one [BloomFilter
    PostProcessor](../../jme3/advanced/bloom_and_glow) in your
    simpleInitApp() method (only once, it is used by all glowing
    objects).

    ```java
    FilterPostProcessor fpp=new FilterPostProcessor(assetManager);
    BloomFilter bloom = new BloomFilter(BloomFilter.GlowMode.Objects);
    fpp.addFilter(bloom);
    viewPort.addProcessor(fpp);
    ```

2.  Specify a `Glow` color.\
    A ColorRGBA value of your choice, e.g. choose a warm or cold color
    for different effects, or white for a neutral glow.

    ```java
    mat.setColor("GlowColor",ColorRGBA.White);
    ```

3.  (Optional) Specify a `GlowMap` texture.\
    This texture outlines in detail where the DiffuseMap texture glows.
    If you don't supply a GlowMap, the whole material glows everwhere.

    ```java
    mat.setTexture("GlowMap", assetManager.loadTexture("Textures/alien_glow.png"));
    ```

To deactivate glow:

-   Set the `Glow` color to `ColorRGBA.Black`.

    ```java
    mat.setColor("GlowColor", ColorRGBA.Black);
    ```

Learn more about [Bloom and
Glow](../../jme3/advanced/bloom_and_glow).

(Optional) Transparent
======================

Most Material Definitions support an alpha channel to make a model
opaque, translucent, or transparent.

-   Alpha=1.0f makes the color opaque (default),

-   Alpha=0.0f make the color fully transparent

-   Alpha between 0f and 1f makes the color more or less translucent.

To make a Geometry transparent or translucent:

1.  Specify which areas you want to be transparent or translucent by
    specifying the alpha channel:

    -   (For colored Materials) In any RGBA color, the first three are
        Red-Green-Blue, and the last float is the Alpha channel. For
        example, to replace ColorRGBA.Red with a translucent red:

        ```java
        mat.setColor("Color", new ColorRGBA(1,0,0,0.5f));
        ```

    -   (For textured Materials) Supply an AlphaMap that outlines which
        areas are transparent.

        ```java
        mat.setTexture("AlphaMap", assetManager.loadTexture("Textures/window_alpha.png"));
        ```

    -   (For textured Materials) If the DiffuseMap has an alpha channel,
        use:

        ```java
        mat.setBoolean("UseAlpha",true);
        ```

2.  Specify BlendMode Alpha for the Material.

    ```java
    mat.getAdditionalRenderState().setBlendMode(BlendMode.Alpha);
    ```

3.  Put the Geometry (not the Material!) in the appropriate render queue
    bucket.\

    -   Objects in the translucent bucket (e.g. particles) are not
        affected by SceneProcessors (e.g. shadows).

        ```java
        geo.setQueueBucket(Bucket.Translucent);
        ```

    -   Objects in the transparent bucket (e.g. foliage) are affected by
        SceneProcessors (e.g. shadows).

        ```java
        geo.setQueueBucket(Bucket.Transparent);
        ```

4.  (Optional) Specify other material settings.

+----------------------+----------------------+-----------------------+
| Standard Material    | Description          | Example               |
| Transparency         |                      |                       |
+======================+======================+=======================+
| getAdditionalRe      | This is the default, | Use for all opaque    |
| nderState().setBlend | no transparency.     | objects like walls,   |
| Mode(BlendMode.Off); |                      | floors, people...     |
+----------------------+----------------------+-----------------------+
| getAdditionalRend    | Interpolates the     | This is the most      |
| erState().setBlendMo | background pixel     | commonly used         |
| de(BlendMode.Alpha); | with the current     | BlendMode for         |
|                      | pixel by using the   | transparency and      |
|                      | current pixel's      | translucency: Frosted |
|                      | alpha.               | window panes, ice,    |
|                      |                      | glass, alpha-blended  |
|                      |                      | vegetation            |
|                      |                      | textures...           |
+----------------------+----------------------+-----------------------+
| getAddit             | Disables writing of  | Deactivate this on    |
| ionalRenderState().s | the pixel's depth    | Materials if you      |
| etDepthWrite(false); | value to the depth   | expect two or more    |
|                      | buffer.              | tr                    |
|                      |                      | ansparent/translucent |
|                      |                      | objects to be         |
|                      |                      | obscuring one         |
|                      |                      | another, but you want |
|                      |                      | to see through both.  |
+----------------------+----------------------+-----------------------+
| getAdd               | Enables Alpha        | Activate Alpha        |
| itionalRenderState() | Testing and uses an  | Testing for           |
| .setAlphaTest(true)\ | A                    | (partially)           |
| getAdditi            | lphaDiscardThreshold | **transparent**       |
| onalRenderState().se | as alpha fall-off    | objects such as       |
| tAlphaFallOff(0.5f); | value. This means    | foliage, hair, etc.\  |
|                      | that gradients in    | Deactivate Alpha      |
|                      | the AlphaMap are no  | Testing for gradually |
|                      | longer interpreted   | **translucent**       |
|                      | as soft              | objects, such as      |
|                      | translucency, but    | colored glass, smoked |
|                      | parts of the texture | glass, ghosts.        |
|                      | become either fully  |                       |
|                      | opaque or fully      |                       |
|                      | transparent. Only    |                       |
|                      | pixels above the     |                       |
|                      | alpha threshold      |                       |
|                      | (e.g. 0.5f) are      |                       |
|                      | rendered.            |                       |
+----------------------+----------------------+-----------------------+

:::note
It is possible to load a DiffuseMap texture that has an Alpha channel,
and combine it with an underlying Material Color.

```java
mat.setBoolean("UseAlpha",true);
```

The Material Color bleeds through the transparent areas of the top-layer
DiffuseMap texture. In this case you do not need BlendMode Alpha --
because it's not the whole Material that is transparent, but only one of
the texture layers. You use this bleed-through effect, for example, to
generate differently colored uniforms, animals, or plants, where each
Material uses the same "template DiffuseMap texture but combines it with
a different color.
:::

(Optional) Wireframe
====================

Additionally to the above settings, you can switch off and on a
wireframe rendering of the mesh. Since a wireframe has no faces, this
temporarily disables the other Texture Maps.

+----------------------+----------------------+-----------------------+
| Material Property    | Description          | Example               |
+======================+======================+=======================+
| getAdd               | Switch to showing    | Use wireframes to     |
| itionalRenderState() | the (textured)       | debug meshes, or for  |
| .setWireframe(true); | Material in          | a "matrix or          |
|                      | wireframe mode. The  | "holodeck effect.     |
|                      | wireframe optionally |                       |
|                      | uses the Material's  |                       |
|                      | `Color` value.       |                       |
+----------------------+----------------------+-----------------------+
| getA                 | When in wireframe    |                       |
| dditionalRenderState | mode, sets the line  |                       |
| ().setLineWidth(2f); | width of the mesh.   |                       |
+----------------------+----------------------+-----------------------+
In jMonkeyEngine 3, colors and textures are represented as Material
objects.

-   All Geometries must have Materials. To improve performance, reuse
    Materials for similar models, don't create a new Material object for
    every Geometry. (E.g. use one bark Material for several tree
    models.)

-   Each Material is based on one of jme3's default Material Definitions
    (.j3md files) that are included in the engine. Advanced users can
    create additional custom Material Definitions (see how it's done in
    the [jme3 sources](../../jme3/build_from_sources)).

:::note
Find out quickly [How to Use
Materials](../../jme3/intermediate/how_to_use_materials), including
the most commonly used code samples and RenderStates.\
Or find more background info on [How to use Material
Definitions](../../jme3/advanced/material_definitions).
:::

All Materials Definition Properties
===================================

The following Materials table shows the Material Definitions that
jMonkeyEngine 3 supports.

:::note
Looks confusing?\
1) Start learning about `Unshaded.j3md` and `Lighting.j3md`, they cover
90% of the cases.\
2) Use [the SDK's visual material
editor](../../sdk/material_editing) to try out and save material
settings easily.\
3) The [SDK's Palette](../../sdk/code_editor) contains drag&drop
code snippets for loading materials.
:::

Most Material parameters are optional. For example, it is okay to
specify solely the `DiffuseMap` and `NormalMap` when using
`Lighting.j3md`, and leave the other texture maps empty. In this case,
you are only using a subset of the possible features, but that's fine if
it already makes in the material look the way that you want. You can
always add more texture maps later.

Unshaded Coloring and Textures
------------------------------

jMonkeyEngine supports illuminated and unshaded Material Definitions.

-   Phong Illuminated materials look more naturalistic.

-   Unshaded materials look more abstract.

"Unshaded" materials look somewhat abstract because they ignore lighting
and shading. Unshaded Materials work even if the scene does not include
a light source. These Materials can be single-colored or textured. For
example, they are used for cards and tiles, for the sky, billboards and
UI elements, for toon-style games, or for testing.

+-------------+--------------------+-----------------------------------+
| Material    | Usage              | Material Parameters               |
| Definition  |                    |                                   |
+=============+====================+===================================+
| Common/Mat  | Standard,          | **Texture Maps**\                 |
| Defs/Misc/\ | non-illuminated    | setTexture("ColorMap",            |
| Un          | Materials.         | as                                |
| shaded.j3md |                    | setManager.loadTexture("name"));\ |
|             | Use this for       | setB                              |
|             | simple coloring,   | oolean("SeparateTexCoord",true);\ |
|             | texturing, glow,   | setTexture("LightMap",            |
|             | and transparency.  | as                                |
|             |                    | setManager.loadTexture("name"));\ |
|             | See also: [Hello   | **Colors**\                       |
|             | Material](../      | setColor("Color",                 |
|             | ../jme3/beginner/h | ColorRGBA.White);\                |
|             | ello_material) | setBoolean("VertexColor",true);\  |
|             |                    | **Glow**\                         |
|             |                    | setTexture("GlowMap",             |
|             |                    | as                                |
|             |                    | setManager.loadTexture("name"));\ |
|             |                    | setColor("GlowColor",             |
|             |                    | ColorRGBA.White);                 |
+-------------+--------------------+-----------------------------------+

: Standard Unshaded

Other useful, but less commonly used material definitions:

+-------------+-----------------+--------------------------------------+
| Material    | Usage           | Material Parameters                  |
| Definition  |                 |                                      |
+=============+=================+======================================+
| Common/Mat  | A solid sky     | setTexture("Texture",                |
| Defs/Misc/\ | blue, or use    | assetManager.loadTexture("name"));\  |
| Sky.j3md    | with a custom   | setBoolean("SphereMap",true);\       |
|             | SkyDome         | setVector3("NormalScale", new        |
|             | texture.        | Vector3f(0,0,0));                    |
|             |                 |                                      |
|             | See also:       |                                      |
|             | [Sky            |                                      |
|             | ](../../jme3/ad |                                      |
|             | vanced/sky) |                                      |
+-------------+-----------------+--------------------------------------+
| Co          | Splat textures  | setTexture("Tex1",                   |
| mmon/MatDef | for, e.g.       | assetManager.loadTexture("name"));\  |
| s/Terrain/\ | terrains.       | (red)\                               |
| T           |                 | setFloat("Tex1Scale",1f);\           |
| errain.j3md | See also:       | setTexture("Tex2",                   |
|             | [Hello          | assetManager.loadTexture("name"));\  |
|             | Te              | (green)\                             |
|             | rrain](../../jm | setFloat("Tex2Scale",1f);\           |
|             | e3/beginner/hel | setTexture("Tex3",                   |
|             | lo_terrain) | assetManager.loadTexture("name"));\  |
|             |                 | (blue)\                              |
|             |                 | setFloat("Tex3Scale",1f);\           |
|             |                 | setTexture("Alpha",                  |
|             |                 | assetManager.loadTexture("name"));   |
+-------------+-----------------+--------------------------------------+
| Co          | A multi-layered | setFloat("terrainSize",512f);\       |
| mmon/MatDef | texture for     | setTexture("region1ColorMap",        |
| s/Terrain/\ | terrains.       | assetManager.loadTexture("name"));\  |
| H           |                 | setTexture("region2ColorMap",        |
| eightBasedT | Specify four    | assetManager.loadTexture("name"));\  |
| errain.j3md | textures and a  | setTexture("region3ColorMap",        |
|             | Vector3f        | assetManager.loadTexture("name"));\  |
|             | describing the  | setTexture("region4ColorMap",        |
|             | region in which | assetManager.loadTexture("name"));\  |
|             | each texture    | setVector3("region1", new            |
|             | should appear:  | Vector3f(0,0,0));\                   |
|             |                 | setVector3("region2", new            |
|             | X = start       | Vector3f(0,0,0));\                   |
|             | height,\        | setVector3("region3", new            |
|             | Y = end         | Vector3f(0,0,0));\                   |
|             | height,\        | setVector3("region4", new            |
|             | Z = texture     | Vector3f(0,0,0));\                   |
|             | scale.          | **Settings for steep areas:**\       |
|             |                 | setTexture("slopeColorMap",          |
|             | Texture regions | assetManager.loadTexture("name"));\  |
|             | can overlap.    | setFloat("slopeTileFactor",1f);      |
|             |                 |                                      |
|             | For example:    |                                      |
|             |                 |                                      |
|             | Specify a       |                                      |
|             | seafloor        |                                      |
|             | texture for the |                                      |
|             | lowest areas.   |                                      |
|             |                 |                                      |
|             | A sandy texture |                                      |
|             | for the         |                                      |
|             | beaches.        |                                      |
|             |                 |                                      |
|             | A grassy        |                                      |
|             | texture for     |                                      |
|             | inland areas.   |                                      |
|             |                 |                                      |
|             | A rocky texture |                                      |
|             | for mountain    |                                      |
|             | tops.           |                                      |
+-------------+-----------------+--------------------------------------+
| Common/Mat  | Used with       | setTexture("Texture",                |
| Defs/Misc/\ | texture masks   | assetManager.loadTexture("name"));\  |
| Pa          | for particle    | setTexture("GlowMap",                |
| rticle.j3md | effects, or for | assetManager.loadTexture("name"));\  |
|             | point sprites.  | setColor("GlowColor",                |
|             |                 | ColorRGBA.White);\                   |
|             | The Quadratic   | setFloat("Quadratic",1f);\           |
|             | value scales    | setBoolean("PointSprite",true);      |
|             | the particle    |                                      |
|             | for perspective |                                      |
|             | view.           |                                      |
|             | ([formula](h    |                                      |
|             | ttps://github.c |                                      |
|             | om/jMonkeyEngin |                                      |
|             | e/jmonkeyengine |                                      |
|             | /blob/master/jm |                                      |
|             | e3-core/src/mai |                                      |
|             | n/java/com/jme3 |                                      |
|             | /effect/Particl |                                      |
|             | eEmitter.java)) |                                      |
|             |                 |                                      |
|             | Does support an |                                      |
|             | optional        |                                      |
|             | colored glow    |                                      |
|             | effect.         |                                      |
|             |                 |                                      |
|             | See also:       |                                      |
|             | [Hello          |                                      |
|             | Ef              |                                      |
|             | fects](../../jm |                                      |
|             | e3/beginner/hel |                                      |
|             | lo_effects) |                                      |
+-------------+-----------------+--------------------------------------+

: Special Unshaded

Phong Illuminated
-----------------

jMonkeyEngine supports illuminated and unshaded Material Definitions.

-   Phong Illuminated materials look more naturalistic.

-   Unshaded materials look more abstract.

Illuminated materials require a [light
source](../../jme3/advanced/light_and_shadow) added to at least one
of their parent nodes! (e.g. rootNode.) Illuminated materials are darker
on the sides facing away from light sources. They use Phong illumination
model (default), or the Ward isotropic gaussian specular shader
(WardIso) which looks more like plastic. They do not cast [drop
shadows](../../jme3/advanced/light_and_shadow) unless you use a
FilterPostProcessor.

+-------------+--------------------+-----------------------------------+
| Material    | Usage              | Material Parameters               |
| Definition  |                    |                                   |
+=============+====================+===================================+
| Common/MatD | Commonly used      | **Texture Maps**\                 |
| efs/Light/\ | Material with      | setTexture("DiffuseMap",          |
| Li          | Phong              | as                                |
| ghting.j3md | illumination.      | setManager.loadTexture("name"));\ |
|             |                    | setBoolean("UseAlpha",true);      |
|             | Use this material  | [^1]\                             |
|             | together with      | setTexture("NormalMap",           |
|             | DiffuseMap,        | as                                |
|             | SpecularMap,       | setManager.loadTexture("name"));\ |
|             | BumpMap            | setBoolean("LATC",true); [^2]\    |
|             | (NormalMaps,       | setTexture("SpecularMap",         |
|             | ParalaxMap)        | as                                |
|             | textures.          | setManager.loadTexture("name"));\ |
|             |                    | setFloat("Shininess",64f);\       |
|             | Supports           | setTexture("ParallaxMap",         |
|             | shininess,         | as                                |
|             | transparency, and  | setManager.loadTexture("name"));\ |
|             | plain material     | setTexture("AlphaMap",            |
|             | colors (Diffuse,   | as                                |
|             | Ambient,           | setManager.loadTexture("name"));\ |
|             | Specular).         | setFl                             |
|             |                    | oat("AlphaDiscardThreshold",1f);\ |
|             | See also: [Hello   | setTexture("ColorRamp",           |
|             | Material](../      | as                                |
|             | ../jme3/beginner/h | setManager.loadTexture("name"));\ |
|             | ello_material) | **Glow**\                         |
|             |                    | setTexture("GlowMap",             |
|             |                    | as                                |
|             |                    | setManager.loadTexture("name"));\ |
|             |                    | setColor("GlowColor",             |
|             |                    | ColorRGBA.White);\                |
|             |                    | **Performance and quality**\      |
|             |                    | se                                |
|             |                    | tBoolean("VertexLighting",true);\ |
|             |                    | se                                |
|             |                    | tBoolean("UseVertexColor",true);\ |
|             |                    | setBoolean("LowQuality",true);\   |
|             |                    | setBoolean("HighQuality",true);\  |
|             |                    | **Material Colors**\              |
|             |                    | setBo                             |
|             |                    | olean("UseMaterialColors",true);\ |
|             |                    | setColor("Diffuse",               |
|             |                    | ColorRGBA.White);\                |
|             |                    | setColor("Ambient",               |
|             |                    | ColorRGBA.White);\                |
|             |                    | setColor("Specular",              |
|             |                    | ColorRGBA.White);\                |
|             |                    | **Tangent shading:**\             |
|             |                    | setBoolean("VTangent",true);\     |
|             |                    | setBoolean("Minnaert",true);      |
|             |                    | [^3]\                             |
|             |                    | setBoolean("WardIso",true); [^4]  |
+-------------+--------------------+-----------------------------------+

: Standard Illuminated

+-------------+--------------------+-----------------------------------+
| Material    | Usage              | Material Parameters               |
| Definitions |                    |                                   |
+=============+====================+===================================+
| Co          | Same kind of       | **Texture Splat Maps**\           |
| mmon/MatDef | multi-layered      | setTexture("DiffuseMap",          |
| s/Terrain/\ | splat texture as   | as                                |
| TerrainLi   | Terrain.j3md, but  | setManager.loadTexture("name"));\ |
| ghting.j3md | with illumination  | setF                              |
|             | and shading.       | loat("DiffuseMap\_0\_scale",1f);\ |
|             |                    | setTexture("NormalMap",           |
|             | Typically used for | as                                |
|             | terrains, but      | setManager.loadTexture("name"));\ |
|             | works on any mesh. | setTexture("DiffuseMap\_1",       |
|             |                    | as                                |
|             | For every three    | setManager.loadTexture("name"));\ |
|             | splat textures,    | setF                              |
|             | you need one alpha | loat("DiffuseMap\_1\_scale",1f);\ |
|             | map.               | setTexture("NormalMap\_1",        |
|             |                    | as                                |
|             | You can use a      | setManager.loadTexture("name"));\ |
|             | total of 11        | setTexture("DiffuseMap\_2",       |
|             | texture maps in    | as                                |
|             | the terrain's      | setManager.loadTexture("name"));\ |
|             | splat texture:     | setF                              |
|             |                    | loat("DiffuseMap\_2\_scale",1f);\ |
|             | Note that diffuse  | setTexture("NormalMap\_2",        |
|             | and normal maps    | as                                |
|             | all count against  | setManager.loadTexture("name"));\ |
|             | that.              | setTexture("DiffuseMap\_3",       |
|             |                    | as                                |
|             | For example:       | setManager.loadTexture("name"));\ |
|             |                    | setF                              |
|             | You can use a      | loat("DiffuseMap\_3\_scale",1f);\ |
|             | maximum of nine    | setTexture("NormalMap\_3",        |
|             | diffuse textures,  | as                                |
|             | two of which can   | setManager.loadTexture("name"));\ |
|             | have normal maps;  | etc, up to 11.\                   |
|             | or, five textures  | **Alpha Maps**\                   |
|             | with both diffuse  | setTexture("AlphaMap",            |
|             | and normal maps.   | asse                              |
|             |                    | tManager.loadTexture(\"name\"));\ |
|             |                    | setTexture("AlphaMap\_1",         |
|             |                    | as                                |
|             |                    | setManager.loadTexture("name"));\ |
|             |                    | setTexture("AlphaMap\_2",         |
|             |                    | as                                |
|             |                    | setManager.loadTexture("name"));\ |
|             |                    | **Glowing**\                      |
|             |                    | setTexture("GlowMap",             |
|             |                    | as                                |
|             |                    | setManager.loadTexture("name"));\ |
|             |                    | setColor("GlowColor",             |
|             |                    | ColorRGBA.White);\                |
|             |                    | **Miscellaneous**\                |
|             |                    | setColor("Diffuse",               |
|             |                    | ColorRGBA.White);\                |
|             |                    | setColor("Ambient",               |
|             |                    | ColorRGBA.White);\                |
|             |                    | setFloat("Shininess",64f);\       |
|             |                    | setColor("Specular",              |
|             |                    | ColorRGBA.White);\                |
|             |                    | setTexture("SpecularMap",         |
|             |                    | as                                |
|             |                    | setManager.loadTexture("name"));\ |
|             |                    | setBoolean("WardIso",true);\      |
|             |                    | setBool                           |
|             |                    | ean("useTriPlanarMapping",true);\ |
|             |                    | setBoolean("isTerrainGrid",true); |
+-------------+--------------------+-----------------------------------+
| Common/MatD | Reflective glass   | setTexture("Texture",             |
| efs/Light/\ | material with      | as                                |
| r           | environment map    | setManager.loadTexture("name"));\ |
| eflect.j3md | (C                 | setBoolean("SphereMap",true);     |
|             | ubeMap/SphereMap). |                                   |
+-------------+--------------------+-----------------------------------+

: Special Illuminated

Other: Test and Debug
---------------------

+-------------+--------------------------------------------------------+
| Material    | Usage                                                  |
| Definition  |                                                        |
+=============+========================================================+
| Common/Mat  | A color gradient calculated from the model's surface   |
| Defs/Misc/\ | normal's. You can use this built-in material to debug  |
| ShowN       | the generation of normal's in meshes, to preview       |
| ormals.j3md | models that have no material and no lights, or as      |
|             | fall-back default material. This built-in material has |
|             | no parameters.                                         |
+-------------+--------------------------------------------------------+

: Testing

RenderStates
============

+----------------------+----------------------+-----------------------+
| Material Option      | Description          | Example               |
+======================+======================+=======================+
| getAddit             | This is the default, | Use for all opaque    |
| ionalRenderState().\ | no transparency.     | objects like walls,   |
| setBlend             |                      | floors, people...     |
| Mode(BlendMode.Off); |                      |                       |
+----------------------+----------------------+-----------------------+
| getAddi              | Interpolates the     | Use this for normal   |
| tionalRenderState()\ | background pixel     | every-day             |
| .setBlendMo          | with the current     | translucency: Frosted |
| de(BlendMode.Alpha); | pixel by using the   | window panes, ice,    |
|                      | current pixel's      | glass, alpha-blended  |
|                      | alpha.               | vegetation            |
|                      |                      | textures...           |
+----------------------+----------------------+-----------------------+
| getAddi              | Disables writing of  | Use this on Materials |
| tionalRenderState()\ | the pixel's depth    | if you have several   |
| .s                   | value to the depth   | tr                    |
| etDepthWrite(false); | buffer.              | ansparent/translucent |
|                      |                      | objects obscuring one |
|                      |                      | another, but you want |
|                      |                      | to see through both.  |
+----------------------+----------------------+-----------------------+
| getAddi              | Enables Alpha        | Activate Alpha        |
| tionalRenderState()\ | Testing with a       | Testing for           |
| .se                  | "Al                  | (partially)           |
| tAlphaFallOff(0.5f); | phaDiscardThreshold" | **transparent**       |
|                      | in the AlphaMap.     | objects such as       |
| getAddi              |                      | foliage, hair, etc.   |
| tionalRenderState()\ |                      |                       |
| .setAlphaTest(true)  |                      | Deactivate Alpha      |
|                      |                      | Testing for gradually |
|                      |                      | **translucent**       |
|                      |                      | objects, such as      |
|                      |                      | colored glass, smoked |
|                      |                      | glass, ghosts.        |
+----------------------+----------------------+-----------------------+
| getAddi              | Additive alpha       | This is the default   |
| tionalRenderState()\ | blending adds colors | for                   |
| .setBlendMode(       | in a commutative     | Particle.j3md-based   |
| BlendMode.Additive); | way, i.e. the result | textures that have a  |
|                      | does not depend on   | black color           |
|                      | the order of         | background.           |
|                      | transparent layers   |                       |
|                      | since it adds the    |                       |
|                      | scene's background   |                       |
|                      | pixel color to the   |                       |
|                      | current pixel color. |                       |
|                      | This is useful if    |                       |
|                      | you have many        |                       |
|                      | transparent textures |                       |
|                      | overlapping and      |                       |
|                      | don't care about the |                       |
|                      | order.               |                       |
|                      |                      |                       |
|                      | **Note:** Viewed in  |                       |
|                      | front of a white     |                       |
|                      | background, Additive |                       |
|                      | textures become      |                       |
|                      | fully transparent!   |                       |
+----------------------+----------------------+-----------------------+
| getAddi              | Same as "Additive",  | This can be used for  |
| tionalRenderState()\ | except first it      | particle effects that |
| .setBlendMode(Blend  | multiplies the       | have alpha as         |
| Mode.AlphaAdditive); | current pixel color  | background.           |
|                      | by the pixel alpha.  |                       |
+----------------------+----------------------+-----------------------+
| getAddi              | Blends by color.     | Generally useless.    |
| tionalRenderState()\ |                      |                       |
| .setBlendMo          |                      |                       |
| de(BlendMode.Color); |                      |                       |
+----------------------+----------------------+-----------------------+
| getAddi              | Multiplies the       | ?                     |
| tionalRenderState()\ | background pixel by  |                       |
| .setBlendMode(       | the current pixel.   |                       |
| BlendMode.Modulate); |                      |                       |
+----------------------+----------------------+-----------------------+
| getAddi              | Same as "Modulate",  | ?                     |
| tionalRenderState()\ | except the result is |                       |
| .setBlendMode(Bl     | doubled.             |                       |
| endMode.ModulateX2); |                      |                       |
+----------------------+----------------------+-----------------------+
| getAddi              | Pre-multiplied alpha | For use with Premult  |
| tionalRenderState()\ | blending. E.g. if    | Alpha textures.       |
| .setBlendMode(Blen   | the color of the     |                       |
| dMode.PremultAlpha); | object has already   |                       |
|                      | been multiplied by   |                       |
|                      | its alpha, this is   |                       |
|                      | used instead of      |                       |
|                      | "Alpha" blend mode.  |                       |
+----------------------+----------------------+-----------------------+

: Transparancy

If the DiffuseMap has an alpha channel, use:

```java
mat.setBoolean("UseAlpha",true);
```

Later, put the Geometry (not the Material!) in the appropriate render
queue.

```java
geo.setQueueBucket(Bucket.Translucent);
```

or

```java
geo.setQueueBucket(Bucket.Transparent);
```

+----------------------+----------------------+-----------------------+
| Material Option      | Usage                | Example               |
+======================+======================+=======================+
| getAddi              | Activates back-face  | The invisible         |
| tionalRenderState()\ | culling. Mesh faces  | backsides and insides |
| .setFaceCullMode     | that are facing away | of models are not     |
| (FaceCullMode.Back); | from the camera are  | calculated.           |
|                      | not rendered, which  |                       |
|                      | saves time.          |                       |
|                      |                      |                       |
|                      | **Backface culling   |                       |
|                      | is activated by      |                       |
|                      | default as a major   |                       |
|                      | optimization.**      |                       |
+----------------------+----------------------+-----------------------+
| getAddi              | No meshes are        | Sometimes used to     |
| tionalRenderState()\ | culled. Both mesh    | debug custom meshes   |
| .setFaceCullMod      | faces are rendered,  | if you messed up some |
| e(FaceCullMode.Off); | even if they face    | of the polygon sides, |
|                      | away from the        | or for special shadow |
|                      | camera. Slow.        | effects.              |
+----------------------+----------------------+-----------------------+
| getAddi              | Activates front-face | No example --         |
| tionalRenderState()\ | culling. Mesh faces  | Typically not used    |
| .setFaceCullMode(    | facing the camera    | because you wouldn't  |
| FaceCullMode.Front); | are not rendered.    | see anything          |
|                      |                      | meaningful.           |
+----------------------+----------------------+-----------------------+
| getAddi              | Culls both backfaces | Use this as an        |
| tionalRenderState()\ | and frontfaces.      | efficient way to make |
| .se                  |                      | an object temporarily |
| tFaceCullMode(FaceCu |                      | invisible, while      |
| llMode.FrontAndBack) |                      | keeping all its other |
|                      |                      | in-game properties    |
|                      |                      | (such as node         |
|                      |                      | attachment, collision |
|                      |                      | shapes, interactions, |
|                      |                      | etc.) active.         |
+----------------------+----------------------+-----------------------+

: Culling

+----------------------+----------------------+-----------------------+
| Material Option      | Useage               | Example               |
+======================+======================+=======================+
| getAddi              | Disable writing the  | Use this together     |
| tionalRenderState()\ | color of pixels.     | with                  |
| .s                   |                      | setDepthWrite(true)   |
| etColorWrite(false); |                      | to write pixels only  |
|                      |                      | to the depth buffer,  |
|                      |                      | for example.          |
+----------------------+----------------------+-----------------------+
| getAddi              | Enables point-sprite | Point sprites are     |
| tionalRenderState()\ | mode, e.g. meshes    | used internally for   |
| .s                   | with "Mode".Points   | hardware accelerated  |
| etPointSprite(true); | will be rendered as  | particle effects.     |
|                      | textured sprites.    |                       |
|                      |                      |                       |
|                      | Note that            |                       |
|                      | gl\_PointCoord must  |                       |
|                      | be set in the        |                       |
|                      | shader.              |                       |
+----------------------+----------------------+-----------------------+
| getAddi              | Enable polygon       | Use this when you     |
| tionalRenderState()\ | offset.              | have meshes that have |
| .setPolyOffset();    |                      | triangles really      |
|                      |                      | close to each over    |
|                      |                      | (e.g.                 |
|                      |                      | [Coplanar](h          |
|                      |                      | ttp://en.wikipedia.or |
|                      |                      | g/wiki/Coplanarity)), |
|                      |                      | it will shift the     |
|                      |                      | depth values to       |
|                      |                      | prevent               |
|                      |                      | [Z-fighting]          |
|                      |                      | (http://en.wikipedia. |
|                      |                      | org/wiki/Z-fighting). |
+----------------------+----------------------+-----------------------+

: Miscellaneous

**Related Links**

-   [Developer specification of the jME3 material system
    (.j3md,.j3m)](../../jme3/advanced/material_specification)

[^1]: UseAlpha specifies whether DiffuseMap uses the alpha channel

[^2]: LATC Specifies whether NormalMap is BC5/ATI2n/LATC/3Dc-compressed

[^3]: Minnaert is a shader type.

[^4]: WardIso is a shader type.

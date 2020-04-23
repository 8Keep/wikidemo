The `jme3tools.optimize.TextureAtlas` allows combining multiple textures
into one texture atlas. Loading one geometry with one material is much
more efficient than handling several geometries and materials.
Optimally, you already export your textures as texture atlas from e.g.
Blender.

`jme3tools.optimize.GeometryBatchFactory`, in contrast, only works if
the geometries have only one material with textures.

1.  Create a TextureAtlas.

2.  Add textures to texture atlas, each texture goes onto one map (e.g.
    `DiffuseMap`).\
    The image data is stored in a byte array for each named texture map.

3.  Later, you retrieve each map by name as a Texture, and use it in
    materials.

Sample Code
===========

-   [TestTextureAtlas.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/tools/TestTextureAtlas.java)

API
===

+------------------------+---------------------------------------------+
| TextureAtlas method    | Usage                                       |
+========================+=============================================+
| addGeometry(g)         | Add this geometry's DiffuseMap (or          |
|                        | ColorMap), NormalMap, and SpecularMap to    |
|                        | the atlas (if they exist). The DiffuseMap   |
|                        | will automatically be the master map.       |
+------------------------+---------------------------------------------+
| addTexture(t, mapname) | Add a texture to the named master map.      |
+------------------------+---------------------------------------------+
| add                    | Add a texture t1 to the named secondary     |
| Texture(t1,mapName,t2) | map, and make the location of texture t1    |
|                        | correspond to texture t2 on the master map. |
|                        | t2 can be Texture object or the String name |
|                        | of the texture.                             |
+------------------------+---------------------------------------------+
| applyCoords(g)         | Applies the texture coordinates to the      |
|                        | geometries mesh. Short for the default,     |
|                        | `applyCoords(geom, 0, geom.getMesh()`.      |
+------------------------+---------------------------------------------+
| appl                   | Applies the texture coordinates at the      |
| yCoords(g,offset,mesh) | given texture coord buffer offset to the    |
|                        | mesh, if the DiffuseMap or ColorMap of the  |
|                        | input geometry g exist in the atlas. The    |
|                        | mesh can be `g.getMesh()`. Target buffer    |
|                        | offset is between 0 and buffer.size().      |
+------------------------+---------------------------------------------+
| getAtlasTile(texture)  | Get the `TextureAtlasTile` for the given    |
|                        | Texture. The TextureAtlasTile objects       |
|                        | contains info about this texture. such as   |
|                        | size and location in the atlas.             |
+------------------------+---------------------------------------------+
| ge                     | Creates a new atlas texture from the added  |
| tAtlasTexture(mapName) | textures for the given map name.            |
+------------------------+---------------------------------------------+

+------------------------+---------------------------------------------+
| TextureAtlasTile       | Usage                                       |
| method                 |                                             |
+========================+=============================================+
| getHeight(),           | Gets the size of the texture.               |
| getWidth()             |                                             |
+------------------------+---------------------------------------------+
| getX(), getY()         | Gets the x and y coordinate inside the      |
|                        | texture atlas where this texture can be     |
|                        | found                                       |
+------------------------+---------------------------------------------+
| transformTextureCoord  | Transforms the texture coordinates in a     |
| s(inBuf,offset,outBuf) | buffer from their original 0-1 values to    |
|                        | the new values fitting to the location of   |
|                        | the tile on the atlas texture.              |
+------------------------+---------------------------------------------+
| getLocation(l)         | Get the transformed texture coordinate for  |
|                        | a given input location.                     |
+------------------------+---------------------------------------------+

Primary and Secondary Maps
==========================

The helper methods that work with Geometry objects automatically
consider the `DiffuseMap` (for Lighting.j3md-based Materials) or
ColorMap (for Unshaded.j3md-based Materials) the **master map**, and
additionally treat the `NormalMap` and `SpecularMap` as secondary maps,
if they exist in the Geometry.

-   The first map name that you supply becomes the **master map**. The
    master map defines locations on the atlas. Typically, you name the
    master map `DiffuseMap` (for Lighting.j3md) or `ColorMap` (for
    Unshaded.j3md). +In general, if you want to use the texture with a
    certain shader, you should supply the map names that are specified
    in this shader's .j3md for clarity.

-   Secondary textures (other map names, for example `SpecularMap` and
    `NormalMap` for Lighting.j3md) have to reference a existing texture
    on the master map, so the Atlas knows where to position the added
    texture on the secondary map. This is necessary because the maps
    share texture coordinates and thus need to be placed at the same
    location on both maps. If you do not share texture coordinates in
    your maps, use separate TextureAtlas classes.

You reference textures by their **asset key name**, this is what their
"id" is. For each texture, the atlas stores its location. A texture with
an existing key name is never added more than once to the atlas. You can
access the information for each texture or geometry texture via helper
methods.

-   Textures are not scaled automatically, and your atlas needs to be
    created large enough to hold all textures. All methods that allow
    adding textures return false if the texture could not be added due
    to the atlas being full.

-   Secondary textures (normal maps, specular maps etc.) have to be the
    same size as the main (e.g. DiffuseMap) texture.

-   The TextureAtlas lets you change the texture coordinates of a mesh
    or geometry to point at the new locations of its texture inside the
    atlas (if the texture exists inside the atlas).

::: {.important}
Note that models that use texture coordinates outside the 0-1 range
(that is, they use repeating/wrapping textures) do not work correctly as
their new coordinates leak into other parts of the atlas and thus
display other textures instead of repeating the texture!
:::

Usage examples: Combine Geometries
==================================

Use `makeAtlasBatch` to turn several geometries that are loaded from a
j3o file into one geometry:

```java
 // scene contains many geometries ared attached to one node:
 Node scene = assetManager.loadModel("Scenes/MyScene.j3o");
 // geom is one geometry containing all of these geometries together
 Geometry geom = TextureAtlas.makeAtlasBatch(scene);
 rootNode.attachChild(geom);
```

Create a texture atlas and change the texture coordinates of one
geometry:

```java
 Node scene = assetManager.loadModel("Scenes/MyScene.j3o");

 // Either auto-create texture Atlas from an existing node that has geometries...
 TextureAtlas atlas = TextureAtlas.createAtlas(scene);

 //... or create Atlas manually by adding textures (e.g. myDiffuseTexture) to the atlas,
 TextureAtlas atlas = new TextureAtlas(1024,1024);
 atlas.addTexture(myDiffuseTexture, "DiffuseMap");

 // ... or create Atlas manually by adding textured geometries (e.g. myGeometry) to the atlas:
 TextureAtlas atlas = new TextureAtlas(1024,1024);
 atlas.addGeometry(MyGeometry);

 // Create material, load texture from Atlas, apply texture to material map.
 Material mat = new Material(mgr, "Common/MatDefs/Light/Lighting.j3md");
 mat.setTexture("DiffuseMap", atlas.getAtlasTexture("DiffuseMap"));

 // Get one sub-geometry on which you want to use the Atlas, apply texture coordinates
 // of this geometry to the atlas, and replace the material.
 Geometry geom = scene.getChild("MyGeometry");
 atlas.applyCoords(geom);
 geom.setMaterial(mat);
```

Like [Shape](../../jme3/advanced/shape)s, 3D models are also made up
of [Mesh](../../jme3/advanced/mesh)es, but models are more complex
than Shapes. While Shapes are built into jME3, you typically create
models in external 3D Mesh Editors.

Using Models and Scenes with jME3
=================================

To use 3D models in a jME3 application:

1.  Export the 3D model using a [Supported External File
    Type](../../jme3/features.html.xml#supported-external-file-types#).

2.  Save the files into a sub-directory of your jME3 `Assets` directory.

3.  In your code, you use the [Asset
    Manager](../../jme3/advanced/asset_manager) to load models as
    [Spatial](../../jme3/advanced/spatial)s into a jME application.

    ```java
    Spatial model = assetManager.loadModel(
        "Models/MonkeyHead/MonkeyHead.mesh.xml" );
    ```

::: {.note}
(For the release build:) Use one of methods recommended for your 3D
model [Supported External File
Type](../../jme3/features.html.xml#supported-external-file-types#) to
convert the model to .j3o format. You don't need this step until you
deploy your application if you are making frequent changes to your
models, however, you should get into the habit of always converting your
models.
:::

Creating Models and Scenes
==========================

To create 3D models and scenes, you need a 3D Mesh Editor such as
[Blender](http://www.blender.org/).

:::note
Learn how to create [UV
textures](http://en.wikibooks.org/wiki/Blender_3D:_Noob_to_Pro/UV_Map_Basics)
for more complex models, it looks more professional.
:::

3D model editors are third-party products, so please consult their
documentation for instructions how to use them. Here is an example
workflow for Blender users:

-   [Creating assets in Blender3D](../../jme3/external/blender)

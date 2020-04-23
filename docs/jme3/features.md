See also: [requirements](../jme3/requirements).

Software Development Kit: jMonkeyEngine SDK
===========================================

-   [Creates jME3-ready Java projects](../sdk/project_creation)

    -   Preconfigured classpath

    -   Bundled with compatible JDK

    -   [Asset Manager](../jme3/advanced/asset_manager) for loading
        multi-media files and 3D models including asset name code
        completion

    -   [Non-proprietary Ant build
        scripts](../sdk/default_build_script)

    -   jME3-ready Javadoc popups, [sample code
        projects](../sdk/sample_code), and code snippet palette

-   [Full-featured Java and XML code editor](../sdk/code_editor)

-   [Plugins](../sdk/update_center)

    -   [File Version Control](../sdk/version_control)

    -   [Debugger and Profiler
        (optional)](../sdk/debugging_profiling_testing)

    -   [Converters and Importers for game assets (3D models
        etc)](../sdk/model_loader_and_viewer)

    -   [3D Scene Viewer and Scene Composer](../sdk/scene_composer)

    -   [Material editor](../sdk/material_editing)

    -   Shader Node editor

    -   [Terrain generation, painting, and
        editing](../sdk/terrain_editor)

    -   [Custom font creator](../jme3/external/fonts)

    -   [Procedural texture creator (NeoTexture)](../sdk/neotexture)

    -   [Level of Detail (LOD)
        generator](../jme3/advanced/level_of_detail)

    -   [...​ and much more...​](../sdk)

-   [Deployment](../sdk/application_deployment)

    -   Generates desktop executables for Win, Mac, Linux

    -   Generates mobile executables for [Android](../jme3/android),
        iOS support is in the works.

    -   Generates JNLP WebStart and Java Browser Applets

-   [Based on the NetBeans Platform](../sdk/whynoteclipse)

    -   Supports all NetBeans IDE plugins

Physics
=======

-   [JBullet physics binding](../jme3/advanced/physics)

    -   [Physical characters](../jme3/advanced/walking_character)

    -   [Physical joints and
        hinges](../jme3/advanced/hinges_and_joints)

    -   [Ray-cast vehicle](../jme3/advanced/vehicles)

    -   [Ragdoll physics](../jme3/advanced/ragdoll)

-   [Multi-threaded physics](../jme3/advanced/bullet_multithreading)

-   [Mesh-accurate collision
    shapes](../jme3/advanced/physics.xml#create_a_collisionshape)

Supported Formats
=================

jMonkeyEngine3 File Formats
---------------------------

+------+---------------------------------------------+-----------------+
| Su   | Usage                                       | Learn more      |
| ffix |                                             |                 |
+======+=============================================+=================+
| .j3o | Binary 3D model or scene. At the latest     | [Model Loader   |
|      | from the Beta release of your game on, you  | and             |
|      | should convert all models to .j3o format.\  | Viewer](../sd   |
|      | During alpha and earlier development phases | k/model_loader_ |
|      | (when models still change a lot) you can    | and_viewer) |
|      | alternatively load GLTF/OBJ models          |                 |
|      | directly.                                   |                 |
+------+---------------------------------------------+-----------------+
| .j3m | A custom Material. You can create a .j3m    | [Materials      |
|      | file to store a Material configuration for  | Overvi          |
|      | a Geometry (e.g. 3D model).                 | ew](../jme3/adv |
|      |                                             | anced/materials |
|      |                                             | _overview)\ |
|      |                                             | [Material       |
|      |                                             | Editing         |
|      |                                             | ](../sdk/materi |
|      |                                             | al_editing) |
+------+---------------------------------------------+-----------------+
| .    | A Material definition. These are            | [Materials      |
| j3md | pre-defined templates for shader-based      | Overv           |
|      | Materials.\                                 | iew](../jme3/ad |
|      | Each custom .j3m Material is based on a     | vanced/material |
|      | material definition. Advanced users can     | s_overview) |
|      | create their own material definitions.      |                 |
+------+---------------------------------------------+-----------------+
| .j3f | A custom post-processor filter              | [Filters](../sd |
|      | configuration. You can create a .j3f file   | k/filters)\ |
|      | to store a FilterPostProcessor with a set   | [Effects        |
|      | of preconfigured filters.                   | Ove             |
|      |                                             | rview](../jme3/ |
|      |                                             | advanced/effect |
|      |                                             | s_overview) |
+------+---------------------------------------------+-----------------+

Supported External File Types
-----------------------------

+---------------------------+---------+-------------------------------+
| File Suffix               | Type    | Description                   |
+===========================+=========+===============================+
| .mesh.xml, .meshxml,      | 3D      | Ogre Mesh XML **(soon to be   |
| .scene                    | model   | discontinued)**\              |
|                           |         | see:                          |
|                           |         |                               |
|                           |         | -   [Exporting Models as Ogre |
|                           |         |     XML meshes from           |
|                           |         |                               |
|                           |         | Blender](../jme3/external/ble |
|                           |         | nder/blender_ogre_export) |
|                           |         |                               |
|                           |         | -   [Ogre                     |
|                           |         |     Compatibility             |
|                           |         | ](../jme3/external/blender/bl |
|                           |         | ender_ogre_compatibility) |
|                           |         |                               |
|                           |         | Converting to j3o:            |
|                           |         |                               |
|                           |         | -   [SDK                      |
|                           |         |     convert](../sdk           |
|                           |         | /model_loader_and_viewer) |
|                           |         |                               |
|                           |         | -   [BinaryExporter](         |
|                           |         | {link-javadoc}/com/jme3/expor |
|                           |         | t/binary/BinaryExporter.html) |
+---------------------------+---------+-------------------------------+
| .obj, .mtl                | 3D      | Wavefront\                    |
|                           | model   | Converting to j3o:            |
|                           |         |                               |
|                           |         | -   [SDK                      |
|                           |         |     convert](../sdk           |
|                           |         | /model_loader_and_viewer) |
|                           |         |                               |
|                           |         | -   [BinaryExporter](         |
|                           |         | {link-javadoc}/com/jme3/expor |
|                           |         | t/binary/BinaryExporter.html) |
+---------------------------+---------+-------------------------------+
| .xbuf                     | 3D      | Blender version 2.74\         |
|                           | model   | See:                          |
|                           |         |                               |
|                           |         | -   [.xbuf](https://hub.jmonk |
|                           |         | eyengine.org/t/xbuf-format-a- |
|                           |         | developer-friendly-game-excha |
|                           |         | nge-format-for-3d-data/31130) |
|                           |         |     forum post.               |
|                           |         |                               |
|                           |         | Converting to j3o:            |
|                           |         |                               |
|                           |         | -   [SDK                      |
|                           |         |     convert](../sdk           |
|                           |         | /model_loader_and_viewer) |
|                           |         |                               |
|                           |         | -   [BinaryExporter](         |
|                           |         | {link-javadoc}/com/jme3/expor |
|                           |         | t/binary/BinaryExporter.html) |
+---------------------------+---------+-------------------------------+
| .fbx                      | 3D      | Filmbox\                      |
|                           | model   | See:                          |
|                           |         |                               |
|                           |         | -   [Fbx                      |
|                           |         |     imp                       |
|                           |         | orter](https://hub.jmonkeyeng |
|                           |         | ine.org/t/fbx-importer/30309) |
|                           |         |     forum post.               |
|                           |         |                               |
|                           |         | Converting to j3o:            |
|                           |         |                               |
|                           |         | -   [SDK                      |
|                           |         |     convert](../sdk           |
|                           |         | /model_loader_and_viewer) |
|                           |         |                               |
|                           |         | -   [BinaryExporter](         |
|                           |         | {link-javadoc}/com/jme3/expor |
|                           |         | t/binary/BinaryExporter.html) |
+---------------------------+---------+-------------------------------+
| .gltf, .bin, .glb, custom | 3D      | Blender version 2.78c         |
| extensions                | model   | onwards,\                     |
|                           |         | See:                          |
|                           |         |                               |
|                           |         | -   [glt                      |
|                           |         | f](https://hub.jmonkeyengine. |
|                           |         | org/t/jme-gltf-support/39174) |
|                           |         |     forum post                |
|                           |         |                               |
|                           |         | -   [Exporting Models as GlTF |
|                           |         |     meshes from               |
|                           |         |     Blender](../jme3/exter    |
|                           |         | nal/blender/blender_gltf) |
|                           |         |                               |
|                           |         | Converting to j3o:            |
|                           |         |                               |
|                           |         | -   [JmeConvert               |
|                           |         |     to                        |
|                           |         | ol](https://hub.jmonkeyengine |
|                           |         | .org/t/jmeconvert-tool/41831) |
|                           |         |                               |
|                           |         | -   [SDK                      |
|                           |         |     convert](../sdk           |
|                           |         | /model_loader_and_viewer) |
|                           |         |                               |
|                           |         | -   [BinaryExporter](         |
|                           |         | {link-javadoc}/com/jme3/expor |
|                           |         | t/binary/BinaryExporter.html) |
+---------------------------+---------+-------------------------------+
| .jpg, .png, .gif          | image   | Textures, icons               |
+---------------------------+---------+-------------------------------+
| .dds                      | image   | Direct Draw Surface texture   |
+---------------------------+---------+-------------------------------+
| .hdr                      | image   | High Dynamic Range texture    |
+---------------------------+---------+-------------------------------+
| .tga                      | image   | Targa Image File texture      |
+---------------------------+---------+-------------------------------+
| .pfm                      | image   | Portable Float Map texture    |
+---------------------------+---------+-------------------------------+
| .bmp                      | image   | Bitmap texture                |
+---------------------------+---------+-------------------------------+
| .ani, .cur, .ico          | image   | Windows Cursor, static or     |
|                           |         | animated.                     |
+---------------------------+---------+-------------------------------+
| .fnt                      | bitmap  | AngelCode font for GUI and    |
|                           | font    | HUD                           |
+---------------------------+---------+-------------------------------+
| .wav                      | audio   | Wave music and sounds         |
+---------------------------+---------+-------------------------------+
| .ogg                      | audio   | OGG Vorbis music and sounds   |
+---------------------------+---------+-------------------------------+

Shaders
=======

-   GLSL support

-   Shader libraries

-   Shader permutations

-   [Shader Nodes](../jme3/advanced/jme3_shadernodes)

Material Lighting
=================

-   Per-pixel lighting

-   Multi-pass lighting

-   Phong Lighting

    -   Diffuse Map

    -   Alpha Map

    -   Glow Map

    -   Specular Map

    -   Normal Map, Parallax Map (a.k.a. bump mapping)

-   Tangent shading

-   Reflection

Material Textures
=================

-   Texturing

    -   material colors (ambient, diffuse, specular/shininess, glow),

    -   color map, light map,

    -   transparency, translucency, alpha map, alpha testing with
        falloff threshold,

    -   sphere map, cube map,

    -   texture scale,

    -   wireframe

    -   color ramp texture

-   Multi-texturing through shaders

-   UV textures

-   Splat textures, Phong lit or unshaded, supports diffuse and normal
    maps

-   [Texture Atlas, handling of packed
    Textures](http://hub.jmonkeyengine.org/forum/topic/textureatlas-creation-and-packed-texture-handling-in-sdk/)

Asset System
============

-   Asset importing

    -   Animation

    -   Meshes

    -   Textures

    -   Scenes

    -   Materials

    -   Shaders

-   Multi-threaded asset loading via HTTP

-   Loading scenes from .ZIP files

-   Sharable AssetPacks

Special Effects
===============

-   [Particles: Smoke, fire, explosions,
    etc](../jme3/advanced/particle_emitters)

-   [Post processing / 2D Filter
    Effects](../jme3/advanced/effects_overview)

    -   Reflective Water

    -   Shadow mapping

    -   High Dynamic Range rendering

    -   Screen Space Ambient Occlusion

    -   Light Scattering

    -   Cartoon Effect

    -   Fog

    -   Bloom

    -   Depth of Field Blur

Terrain
=======

-   [Geomipmapped hightmap terrain](../jme3/advanced/terrain)

-   [Ogre
    Compatibility](../jme3/external/blender/blender_ogre_compatibility)

-   [SkyBox and SkyDome](../jme3/advanced/sky)

-   Terrain lighting

GUI / HUD
=========

-   [Orthogonal (Billboard) node](../jme3/advanced/hud)

-   [Nifty GUI integration](../jme3/advanced/nifty_gui)

Miscellaneous
=============

-   [Application States](../jme3/advanced/application_states) and
    [Controls](../jme3/advanced/custom_controls) to implement [game
    logic](../jme3/advanced/update_loop)

-   [Cinematics and motion paths](../jme3/advanced/cinematics)

-   [Camera System](../jme3/advanced/camera)

    -   Normal or parallel view

    -   Multiple views

-   Swing canvas (e.g. for Applets)

-   [Input handling](../jme3/advanced/input_handling)

    -   Mouse, keyboard, joystick

    -   [Combo moves](../jme3/advanced/combo_moves)

Networking
==========

-   [SpiderMonkey API](../jme3/advanced/networking)

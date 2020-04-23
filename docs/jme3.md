---
id: jme3
title: jME3
---
```note
This is an Admonition. You will see many of these scattered throughout
the Wiki. See the [Admonition Definitions](wiki/admonitions) for the
meaning of this and all the other Admonitions.
```

# Installation

  - [Use jMonkeyEngine 3 for free under the BSD
    License](bsd_license)

  - [Software and hardware requirements](jme3/requirements)

  - [All Supported Features](jme3/features)

  - [Download jMonkeyEngine 3
    SDK](https://github.com/jMonkeyEngine/sdk#jmonkeyengine-software-development-kit-sdk-)

# SDK Documentation

![jmonkeyplatform-docu-2.png](sdk/jmonkeyplatform-docu-2.png)

The [jMonkeyEngine SDK](sdk) is our recommended game development
environment.

  - [jMonkeyEngine SDK - the Comic](sdk/comic)

  - [SDK Documentation (All editors, plugins, etc)](sdk)

Here are some videos of how the jMonkeyEngine SDK makes your development
team’s life easier:

  - [Video: Importing
    Models](http://www.youtube.com/watch?v=nL7woH40i5c)

  - [Video: Scene Composing](http://www.youtube.com/watch?v=ntPAmtsQ6eM)

  - [Video: Dragging\&Dropping
    Nodes](http://www.youtube.com/watch?v=DUmgAjiNzhY)

  - [Video: Working with
    Materials](http://www.youtube.com/watch?v=Feu3-mrpolc)

  - [Video: Custom Controls](http://www.youtube.com/watch?v=MNDiZ9YHIpM)

  - Read the [SDK documentation](sdk) for details.

# Tutorials for Beginners

The beginner tutorials demonstrate the most common use cases and explain
basic concepts. We encourage you to run the sample codes and experiment
with them. [All example
code](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test)
is included in the jMonkeyEngine SDK: Simply create a new project from
the `JmeTests` template. You can find detailed instructions on setting
up the tests under the [Sample Projects](#sample-projects#) topic found
at the bottom of this page.

To start writing your own projects, create a new file from the
`BasicGame` template. Note that Test apps in this example project are
not necessarily the recommended way to build an app with JME, they are
just simple one class test case that showcase a feature.

![beginner-physics.png](jme3/beginner/beginner-physics.png)

  - Make sure you are familiar with basic [3D game development
    concepts](jme3/terminology) such as [the scene
    graph](jme3/the_scene_graph).
    
    1.  [Hello
        SimpleApplication](jme3/beginner/hello_simpleapplication) –
        Initializing a SimpleApplication
    
    2.  [Hello Node](jme3/beginner/hello_node) – Transforming
        Geometries and Nodes in the Scenegraph
    
    3.  [Hello Assets](jme3/beginner/hello_asset) – Loading 3-D
        models, scenes, and other assets.
    
    4.  [Hello Loop](jme3/beginner/hello_main_event_loop) –
        Triggering actions in the update loop
    
    5.  [Hello Input](jme3/beginner/hello_input_system) – Responding
        to keyboard and mouse input
    
    6.  [Hello Material](jme3/beginner/hello_material) – Setting
        Materials, Textures, Transparency
    
    7.  [Hello Animation](jme3/beginner/hello_animation) –
        Controlling animated models
    
    8.  [Hello Picking](jme3/beginner/hello_picking) – Shooting,
        pressing buttons, selecting, picking up items
    
    9.  [Hello Collision](jme3/beginner/hello_collision) – Making
        walls and floors solid
    
    10. [Hello Terrain](jme3/beginner/hello_terrain) – Creating
        hilly landscapes with textures
    
    11. [Hello Audio](jme3/beginner/hello_audio) – Accompanying
        places and actions with 3D sound
    
    12. [Hello Effects](jme3/beginner/hello_effects) – Creating
        particle effects such as fire, explosions, spells.
    
    13. [Hello Physics](jme3/beginner/hello_physics) – Bouncing ball
        and falling bricks

  - See [Trouble running the samples](sdk/sample_code) if you need
    help or try searching the wiki (search box is at the top of every
    wiki page) or using the [forum
    search](https://hub.jmonkeyengine.org/search?expanded=true). If that
    doesn’t work try asking on the
    [forum](https://hub.jmonkeyengine.org/search?expanded=true) itself,
    make sure you learn [how to use code
    blocks](https://hub.jmonkeyengine.org/) before doing so.

# Documentation for Intermediate Users

Now that you understood the basics, let’s put it all together. The
following intermediate articles help you to understand how to use these
concepts in context.

## jMonkeyEngine3 Concepts

  - [Best Practices](jme3/intermediate/best_practices)

  - [SimpleApplication](jme3/intermediate/simpleapplication)

  - [AppSettings](jme3/intermediate/appsettings)

  - [Supported Formats](jme3/features.xml#supported-formats)

  - [Optimization](jme3/intermediate/optimization)

  - [Frequently Asked Questions (FAQ)](jme3/faq)

## Maths Concepts

  - [jME3 Math for Dummies](jme3/math_for_dummies)

  - [Short 3D math "cheat sheet"](jme3/intermediate/math)

  - [jME3 math overview](jme3/math)

  - [3-D Rotation](jme3/rotate)

  - [Videos: jME3 math video tutorial
    series](jme3/math_video_tutorials)

## 3D Graphics Concepts

  - [Multi-Media Asset
    Pipeline](jme3/intermediate/multi-media_asset_pipeline)

  - [3D Scene Graph for Dummies](jme3/scenegraph_for_dummies)
    
      - [Vector visualization & vector
        operations](jme3/beginner/hellovector) –

  - [3D Graphics Terminology](jme3/terminology)

  - [How to Use Materials](jme3/intermediate/how_to_use_materials)

  - [Transparency Sorting](jme3/intermediate/transparency_sorting)

  - [Creating compatible models in blender](jme3/external/blender)

  - [Creating compatible models in 3dsmax](jme3/external/3dsmax)

## Game Tutorials

  - [Neon Vector Shooter tutorial on
    Tuts+](https://gamedevelopment.tutsplus.com/tutorials/make-a-neon-vector-shooter-in-jmonkeyengine-the-basics--gamedev-11616)

## Video Use Case Tutorials

<div class="note">

These videos use alpha features only available in the next release.

</div>

  - [Video: jMonkeyEngine SDK Use Case Demo 1
    (Quixote)](http://www.youtube.com/watch?v=-OzRZscLlHY) \*\*  [Source
    Code](jme3/advanced/sourcecode)    

  - [Video: jMonkeyEngine SDK Use Case Demo 2 (Models and
    Materials)](http://www.youtube.com/watch?v=6-YWxD3JByE)

Learn from sample code in
[src/main/java/jme3test](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test)
(also available in the sdk by `File New Project JME3 Tests`) and the
example games provided by the community\!

# Documentation for Advanced Users

Now that you understand the concepts, it’s time to make the most of the
jMonkeyEngine. Deep-dive into the API and learn about all options,
including less commonly used advanced methods. Don’t over-extend
yourself, developing a good game requires time and dedication. One step
at a time, champ\! :)

## Controlling Game Logic

  - [Update Loop](jme3/advanced/update_loop)

  - [Application States](jme3/advanced/application_states)

  - [Custom Controls](jme3/advanced/custom_controls)
    
      - [Video: How to control any scene
        node](http://www.youtube.com/watch?v=MNDiZ9YHIpM)
        
          - [Source Code](jme3/advanced/sourcecode)    
    
      - [Video: How to remote control a character in a
        scene](http://www.youtube.com/watch?v=-OzRZscLlHY) **\*** 
        [Source
        Code](jme3/advanced/sourcecode.xml#how-to-control-a-character-in-a-scene-source-code#)    

  - [Multithreading](jme3/advanced/multithreading)

## Managing Objects in the 3D Scene Graph

  - [Traverse SceneGraph](jme3/advanced/traverse_scenegraph)

  - [Spatial: Node versus Geometry](jme3/advanced/spatial)

  - [Mesh](jme3/advanced/mesh)
    
      - [Shape](jme3/advanced/shape)
    
      - [3D Models](jme3/advanced/3d_models)
    
      - [Custom Meshes](jme3/advanced/custom_meshes)

  - [Asset Manager](jme3/advanced/asset_manager)

  - [Saving and Loading Nodes (.J3O
    Files)](jme3/advanced/save_and_load)

  - [Collision and
    Intersection](jme3/advanced/collision_and_intersection)

  - [Level of Detail](jme3/advanced/level_of_detail)

## Animations and Scenes

  - [Animation](jme3/advanced/animation)

  - [Cinematics (cutscenes, fake destruction
    physics)](jme3/advanced/cinematics)

  - [MotionPaths and waypoints](jme3/advanced/motionpath)

  - [Creating jME3 compatible 3D models in
    Blender](jme3/external/blender)

  - [Exporting Models as GlTF meshes from
    Blender](jme3/external/blender/blender_gltf)

  - [Exporting Models as Ogre XML meshes from
    Blender](jme3/external/blender/blender_ogre_export)
    
      - [OgreCompatibility](jme3/external/blender/blender_ogre_compatibility)

  - [MakeHuman Blender OgreXML toolchain for creating and importing
    animated human
    characters](jme3/advanced/makehuman_blender_ogrexml_toolchain)
    
      - [Scene
        Workflow:](https://docs.google.com/fileview?id=0B9hhZie2D-fENDBlZDU5MzgtNzlkYi00YmQzLTliNTQtNzZhYTJhYjEzNWNk&hl=en)

  - [Video: Create jme3 compatible models in
    blender](http://www.youtube.com/watch?v=3481ueuDJwQ&feature=youtu.be)

  - CadNav ![long arrow right](./images/icons/long-arrow-right.png)
    Mixamo ![long arrow right](./images/icons/long-arrow-right.png) JME
    Workflow \[Video\]
    
      - [Part1- Download Free Human 3D Model From
        CadNav.com](https://youtu.be/jHgAgTWIers?list=PLv6qR9TGkz8RcUr-fOHI2SksWA4BAU9TS)
    
      - [Part 2- Rig and Animate Model in
        Mixamo](https://youtu.be/GQJSrOpNQwI?list=PLv6qR9TGkz8RcUr-fOHI2SksWA4BAU9TS)
    
      - [Part 3- Import Model to
        JME](https://youtu.be/JzRe2Dxbcmc?list=PLv6qR9TGkz8RcUr-fOHI2SksWA4BAU9TS)
    
      - [Part 4- Play Animation (Final
        Result)](https://youtu.be/8wwDRDJop7k?list=PLv6qR9TGkz8RcUr-fOHI2SksWA4BAU9TS)

  - [Animating Blender Models With Mixamo](jme3/advanced/mixamo)

## Materials, Light, Shadow

  - [How to Use Materials](jme3/intermediate/how_to_use_materials)

  - [Creating .j3m Materials](jme3/advanced/j3m_material_files)

  - [How to Use Material Definitions
    (.j3md)](jme3/advanced/material_definitions)

  - [All Material Definition
    Properties](jme3/advanced/materials_overview)

  - [Anisotropic Filtering for
    Textures](jme3/advanced/anisotropic_filtering)

  - [Light and Shadow](jme3/advanced/light_and_shadow)

  - [About JME3 and Shaders](jme3/advanced/jme3_shaders)

  - [Shader Node System](jme3/advanced/jme3_shadernodes)

  - [Gamma correction or sRGB
    pipeline](jme3/advanced/jme3_srgbpipeline)

  - [Videos: jME3 introduction to shaders video tutorial
    series](jme3/shader_video_tutorials)

  - [Video: jME3 Material with Alpha
    Channel](http://www.youtube.com/watch?v=IuEMUFwdheE)

  - Article: Physically Based Rendering (PBR)
    
      - [Physically Based Rendering – Part
        one](jme3/advanced/pbr_part1)
    
      - [Physically Based Rendering – Part
        two](jme3/advanced/pbr_part2)
    
      - [Physically Based Rendering – Part
        three](jme3/advanced/pbr_part3)

## Physics Integration

  - [Physics: Gravity, Collisions, Forces](jme3/advanced/physics)

  - [Multi-Threaded Physics](jme3/advanced/bullet_multithreading)

  - [Physics Listeners and Collision
    Detection](jme3/advanced/physics_listeners)

  - [Hinges and Joints](jme3/advanced/hinges_and_joints)

  - [Walking Character](jme3/advanced/walking_character)

  - [Ragdoll](jme3/advanced/ragdoll)

  - [Vehicles](jme3/advanced/vehicles)

  - [SoftBody](jme3/advanced/softbody)

  - [Bullet Physics Pitfalls](jme3/advanced/bullet_pitfalls)

  - [Video: Mesh Tool & Physics
    Editor](http://www.youtube.com/watch?v=yS9a9o4WzL8)

## Audio and Video

  - [Audio: Playing Sounds](jme3/advanced/audio)

  - [Audio Environment
    Presets](jme3/advanced/audio_environment_presets)

  - [Video: Playing Clips](jme3/advanced/video)

  - [Capture Screenshots](jme3/advanced/screenshots)

  - [Capture Audio/Video to a
    File](jme3/advanced/capture_audio_video_to_a_file)

## Post-Processor Filters and Effects

  - [Effects and Filters Overview](jme3/advanced/effects_overview)

  - [Bloom and Glow](jme3/advanced/bloom_and_glow)

  - [Particle Emitters](jme3/advanced/particle_emitters)

## Landscapes

  - [Sky](jme3/advanced/sky)

  - [Terrain (TerraMonkey)](jme3/advanced/terrain)

  - [Endless Terrain
    (TerrainGrid)](jme3/advanced/endless_terraingrid)

  - [Terrain Collision](jme3/advanced/terrain_collision)

  - [Cubes - A Block World Framework](jme3/contributions/cubes)

  - [Simple Water](jme3/advanced/water)

  - [Post-Processor Water
    (SeaMonkey)](jme3/advanced/post-processor_water)

  - [Vegetation System](jme3/contributions/vegetationsystem)

## Artificial Intelligence (AI)

  - [Recast Navigation](jme3/advanced/recast)

  - [Updating and building Recast Native
    Bindings](jme3/advanced/building_recast)

  - [Monkey Brains](jme3/advanced/monkey_brains)

  - [Steer Behaviours](jme3/advanced/steer_behaviours)

  - [jME3 Artificial Intelligence](jme3/advanced/jme3_ai)

## Multiplayer Networking

  - [Multiplayer Networking
    (SpiderMonkey)](jme3/advanced/networking)

  - [Headless Server](jme3/advanced/headless_server)

  - [Monkey Zone: Multi-Player Demo Code](jme3/advanced/monkey_zone)

  - [Open Game Finder](jme3/advanced/open_game_finder)

  - [Videos: jME3 networking video tutorial
    series](jme3/advanced/networking_video_tutorials)

## Entity Systems

  - [The Zay-ES Entity System](jme3/contributions/entitysystem)

## Camera

  - [Camera](jme3/advanced/camera)

  - [Making the Camera Follow a
    Character](jme3/advanced/making_the_camera_follow_a_character)

  - [Remote-Controlling the
    Camera](jme3/advanced/remote-controlling_the_camera)

  - [Multiple Camera Views](jme3/advanced/multiple_camera_views)

## User Interaction

  - [Input Handling](jme3/advanced/input_handling)
    
      - [Lemur Scene Graph
        Tools](https://github.com/jMonkeyEngine-Contributions/Lemur/wiki/Modules)
        
          - [Lemur Gems \#1 - Input mapper based camera
            movement.](http://hub.jmonkeyengine.org/t/lemur-gems-1-inputmapper-based-camera-movement/28703)
        
          - [Lemur Gems \#2 - Input mapper
            delegates](http://hub.jmonkeyengine.org/t/lemur-gems-2-inputmapper-delegates/28710)
        
          - [Lemur Gems \#3 - Scene
            picking](http://hub.jmonkeyengine.org/t/lemur-gems-3-scene-picking/28713)

  - [Combo Moves](jme3/advanced/combo_moves)

  - [Mouse Picking: Click to Select](jme3/advanced/mouse_picking)

## Graphical User Interface

  - [Lemur - a native jME3 GUI library with scene graph
    tools](https://github.com/jMonkeyEngine-Contributions/Lemur)

  - [tonegodGUI - a native jME3 GUI
    library](jme3/contributions/tonegodgui)

  - [Nifty GUI - JME3 Integration Tutorial](jme3/advanced/nifty_gui)

  - [Nifty GUI - Best
    Practices](jme3/advanced/nifty_gui_best_practices)

  - [Nifty GUI Scenarios (Load Screen
    etc)](jme3/advanced/nifty_gui_scenarios)

  - [Head-Up Display (HUD)](jme3/advanced/hud)

  - [Localization](jme3/advanced/localization)

  - [Swing Canvas](jme3/advanced/swing_canvas)

## Custom Rendering

  - [Render Buckets](jme3/advanced/jme3_renderbuckets)

## Custom Tools

  - [Mercator Projection Tool (Marine
    Navigation)](jme3/tools/navigation)

  - [Visualizing Maps in JME3 (Marine Charts)](jme3/tools/charts)

## Logging and Debugging

  - [Logging](jme3/advanced/logging)

  - [Log Files](sdk/log_files)

  - [Read Graphic Card
    Capabilites](jme3/advanced/read_graphic_card_capabilites)

  - [Debugging with Wireframes](jme3/advanced/debugging)

## Android specific development

  - [Android Project Cheat Sheet](jme3/advanced/android)

## Deployment

  - [Android](jme3/android)

  - [Application Deployment (using jMonkeyEngine
    SDK)](sdk/application_deployment)

  - [WebStart Deployment (without jMonkeyEngine SDK)](jme3/webstart)

  - [How to build for iOS and publish to Apple App Store](jme3/ios)

## Virtual Reality & Simulation

  - [Virtual Reality. OpenCV & JavaCV](jme3/virtualreality)

## jMonkey User Contributions

  - [Contributions - User made utilities to add functionality to the
    engine.](jme3/contributions)

## Sample Projects

  - [JmeTests](sdk/sample_code) – The “official” sample project
    JmeTests.

  - [BookSamples](http://code.google.com/p/jmonkeyengine/source/browse/BookSamples/#BookSamples%2Fsrc)
    – Some more jME3 code samples

These code examples are not supported by the core team and we cannot
guarantee their correctness:

  - [ShaderBlow Project](jme3/shaderblow_project) – The jME3 users
    shaders project.

  - [Rise of Mutants Project](jme3/rise_of_mutants_project) – Rise
    of Mutants Project by BigBoots Team.

# Feedback

jME3 is in development; if a tutorial doesn’t work as expected, try
using the latest daily build. If that doesn’t “fix” it then:

  - [Report bugs or issues](report_bugs)

  - [Ask (and Answer\!) Questions on the
    Forum](https://hub.jmonkeyengine.org/)

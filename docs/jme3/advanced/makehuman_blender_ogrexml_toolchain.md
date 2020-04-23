This guide describes how to use MakeHuman Blender OgreXML toolchain.

Tools
=====

The latest versions at time of writing are:

-   MakeHuman: 1.0.2

-   Blender: 2.72

-   OgreXML exporter for Blender: 0.6.0

The tools can be downloaded from the following URLs:

-   MakeHuman:
    \[[<http://www.makehuman.org/>](http://www.makehuman.org/])\]

-   Blender: \[[<http://www.blender.org/>](http://www.blender.org/])\]

-   OgreXML exporter for Blender: [Working Blender and OgreXML
    Versions](../../jme3/external/blender/blender_ogre_compatibility)

Seed Project
============

Public domain seed project with some preset characters and animations:

-   JME3 Open Asset Pack:
    \[[<https://github.com/bubblecloud/jme3-open-asset-pack>](https://github.com/bubblecloud/jme3-open-asset-pack])\]

Preparation
===========

1.  Install MakeHuman and Blender.

2.  Install MakeHuman Blender importer from MakeHuman installation to
    Blender scripts folder and enable the script from Blender
    `File User Preferences Addons`.

3.  Install OgreXML exporter to Blender scripts folder and enable the
    script from Blender `File User Preferences Addons`.

4.  Clone the seed project or create your own project.

5.  Locate or create character model folder
    (src/main/resources/character/human/female)

Creating Character Model with MakeHuman
=======================================

1.  Create character model with MakeHuman.
    (\[[<http://www.makehuman.org/documentation>](http://www.makehuman.org/documentation])\])

    -   NOTE: If you want to use JME3 Open Asset Pack animations without
        tweaking then use either male.mhm or female.mhm as preset and do
        not change the body proportions.

2.  Choose basic skeleton from Pose/Animate tab if you are not already
    using either of the presets.

3.  Export to blender exchange format from `Files Export` tab.

    -   Choose `Mesh Format Blender exchange`\

        -   ✓ Options

        -   ✓ Feet on Ground

        -   ✓ Scale Units

        -   ✓ Meter

Animating Character Model with Blender
======================================

1.  Import the character model in blender exchange format (MHX) to
    Blender or open preset blender file female.blend.

2.  If you use your own character you can append animations from
    male.blend or female.blend preset files with Blender `File Append`
    function. Animations are in the animation folder.

3.  Tune the character model / materials and animate the character.
    (\[[<http://www.blender.org/support/tutorials/>](http://www.blender.org/support/tutorials/])\])

Exporting Character Model from Blender to Ogre XML
==================================================

1.  Make sure that your scene objects in Blender do not have any spaces
    or special characters in their names. Rename them if they do.

2.  Arrange all your animations in single NLA track after each other
    without overlaps or touching in the timeline.

3.  Unlink any animations linked directly to your character armature or
    mesh.

4.  Export using `Blender File Export Ogre3D` (scene and mesh) and tick
    the following options:\

    -   ✓ copy shader programs

    -   ✓ Export Scen

    -   ✓ Export Meshes

    -   ✓ Export Meshes (overwrite)

    -   ✓ Armature Animation

    -   ✓ Optimize Arrays

    -   ✓ Export Materials

    -   ✓ Tangents

    -   ✓ Reorganize Buffers

    -   ✓ Optimize Animations

Importing Ogre XML to JME3
==========================

You can load the ogre XML with asset manager or import them to SDK and
hence convert them to JME3 asset format.

You can test the animations by making your own version of
AnimationPreviewer:

<https://github.com/bubblecloud/jme3-open-asset-pack/blob/master/src/main/java/com/jme3/asset/AnimationPreview.java>

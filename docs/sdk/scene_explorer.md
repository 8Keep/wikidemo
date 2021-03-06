![jmonkeyplatform-sceneexplorer-add.jpg](../sdk/jmonkeyplatform-sceneexplorer-add.jpg)

About the SceneExplorer window
==============================

The SceneExplorer gives you a structural overview of the currently
edited scene and is active among all plugins

Most plugins will deliver their own UI elements to modify the scene so
the SceneExplorer is more of a global tool. The simple SceneComposer
however heavily relies on its functions as other plugins might too in
the future.

Using the SceneExplorer
=======================

The SceneExplorer displays Nodes in a tree that represents the tree of
Spatials in your scene. Spatial controls, lights and geometry meshes are
also displayed in the tree.

SceneExplorer works in conjunction with SceneComposer, the default
editor for J3O files in the jMonkeyEngine IDE. If SceneExplorer doesn't
appear when you select "Edit in SceneComposer, choose Window →
SceneExplorer from the menu bar to reveal the window.

Editing Objects in the scene
----------------------------

1.  Select a node in the SceneExplorer window (Open via
    Window→SceneExplorer if not open)

2.  Edit the node in the Properties window (Open via Window→Properties
    if not open)

3.  You can rename a Spatial by right clicking it or by slowly
    double-clicking the node

Reorganizing Objects in the scene
---------------------------------

1.  You can cut, copy and paste Nodes in the SceneExplorer with the
    normal keyboard commands or the right-click menu of the Nodes

2.  You can move single object within the SceneExplorer tree by
    dragging&dropping them

Adding Objects to the scene
---------------------------

Right-click a Spatial or Node in the SceneExplorer to add other Spatials
like ParticleEmitters or Lights, you can also add UserData to a Spatial
that can be read during runtime.

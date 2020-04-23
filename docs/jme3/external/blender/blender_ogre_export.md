:::note
[Blender Buffer
Clearing](../../../jme3/external/blender/blender_buffer_clearing)
should be performed prior to exporting any model from Blender.
:::

To export your models as Ogre XML meshes with materials:

1.  jMonkeyEngine requires a material file to be named the same name as
    the model so prior to opening the export dialog make it so. The
    model will export files named `ModelName.mesh.xml` with a
    `ModelName.material`, plus (optionally) `ModelName.skeleton.xml`,
    and some JPG files.

2.  Open the menu `File Export Ogre3D` to open the exporter dialog.

3.  In the `File Path` field: Select a target sub-directory of your
    `Project Assets/Textures/` directory. E.g.
    `Project Assets/Textures/ModelName/`. See [Best
    Practices](../../../jme3/intermediate/best_practices).

4.  In the panel at the bottom left of the export window toggle the
    following export settings: -  Swap Axis: xz-y

    -   ✓ Separate materials

    -   ❏ Only Deformable Bones [^1]

    -   ❏ Export Scene [^2]

    -   ❏ Export Selected Only [^3]

    -   ✓ Export Meshes

    -   ❏ Export Meshes Overwrite [^4]

    -   ❏ Armature Animation [^5]

    -   Trim Weights [^6]

    -   ✓ Export Materials

5.  Click Export Ogre.

You can now use the [jMonkeyEngine SDK](../../../sdk) to [load and
view models](../../../sdk/model_loader_and_viewer). You can [create
scenes](../../../sdk/scene_composer) from them and write code that
loads them into your application.

[^1]: Optional: If selected, and you have an Armature with the model,
    only the deform bones are exported.

[^2]: Toggle this to export your model in DotScene format

[^3]: Optional: If selected, you manually choose each object you want
    exported prior to opening the export dialog.

[^4]: Optional: If selected, it will overwrite the existing files in the
    target directory

[^5]: Optional: Only used if the model contains an armature.

[^6]: Occasionally when exporting you may get a warning complaining
    about vertices weighted to too many bones. You are then asked to try
    increasing the trim weights option. Slightly increase this spinner
    and try exporting again. Repeat the process until the warning goes
    away.

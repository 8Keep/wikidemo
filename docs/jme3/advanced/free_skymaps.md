There are a plethora of ways to create skymaps with varying levels of
difficulty and expense. The [Terragen](http://planetside.co.uk/) program
has been mentioned as one way to do so but it is now limited in its use
and for commercial purposes is not free. Another program,
[Bryce](https://www.daz3d.com/bryce-7-pro), is also not free and seems
to of stalled in development based off there only being a 32bit version
available. Maybe they are doing things behind the scenes but its still
not a free program. This articles intent is to give the JME3 user other
options for the creation of skymaps using the free programs Blender and
Gimp. It is not the be all, end all of skymap creation. If you know of
better methods or tools please feel free to share your wisdom on the
[forums](https://hub.jmonkeyengine.org/).

Blender
=======

Using Blender you can create your skymaps for free. Once
[Blender](https://www.blender.org/) is setup, your skymaps creation can
be done easily. For this article I will go into detail on how to setup
Blender to create Angular maps based off a video produced by jMonkey
contributor glaucomardano and mentioned in this [forum
post](https://hub.jmonkeyengine.org/t/jmonkeyengine-tutorial-how-to-create-skymaps-using-blender/19313).
Contributor glaucomardano did a good job on the video but it requires
previous knowledge of Blender to be able to easily follow along. As
such, I will translate it to paper for you. You can view his video by
following this link: [jMonkeyEngine Tutorial - How to create skymaps
using blender](https://youtu.be/z38Aikz5nE8).

:::note
This tutorial is an adaptation of contributor glaucomardanos production,
not an exact duplicate.\
These steps assume you're using the default blender setup and apply to
vers 2.78c+.\
The tutorial is in checklist format so you can mark items as you go to
keep your place.
:::

-   ❏ Start with a new file in blender.

-   ❏ Select the lamp and the default cube in the 3d view or in the
    Outliner panel (top-right panel) and delete them: X. They are not
    needed for this procedure.

-   ❏ Select the camera object in the 3d view or in the Outliner panel
    then clear its location and rotation by using keyboard shortcuts
    Alt+G and Alt+R.

-   ❏ In the properties panel (lower-right panel) select the Object tab
    (orange box). This will give you a visual perspective of the camera
    changes you are about to make.

-   ❏ Rename the Camera to Camera-north.

-   ❏ With your cursor inside the 3d view, change to top-ortho view by
    pressing NumPad 7 followed by NumPad 5.

-   ❏ With the camera still selected, press R immediately followed by X
    immediately followed by 90 immediately followed by Enter to rotate
    the camera 90 degrees around the X axis.

-   ❏ With the camera still selected, press Shift+D. This will duplicate
    the camera. Next press Enter to set the selection.

-   ❏ Press R immediately followed by 180 immediately followed by Enter.
    This will rotate the camera 180 degrees around the Z axis. Rename
    this camera to Camera-south. - \[ \] With the camera still selected,
    press Shift+D. This will duplicate the camera. Next press Enter to
    set the selection.

-   ❏ With the camera still selected, press R immediately followed by 90
    immediately followed by Enter. This will rotate the camera another
    90 degrees around the Z axis. Rename this camera to Camera-west.

-   ❏ With the camera still selected, press Shift+D. This will duplicate
    the camera. Next press Enter to set the selection.  

-   ❏ With the camera still selected, press R immediately followed by
    -180 immediately followed by Enter. This will rotate the camera -180
    degrees around the Z axis. Rename this camera to Camera-east.

-   ❏ With your mouse inside the 3d view change your view to right-ortho
    by entering NumPad 3.

-   ❏ Select Camera-south in 3d view or in the Outliner panel (top-right
    panel) and press Shift+D. This will duplicate the camera. Next press
    Enter to set the selection.

-   ❏ With the camera still selected, press R immediately followed by 90
    immediately followed by Enter. This will rotate the camera 90
    degrees around the X axis. The camera should now be pointing up.
    Rename this camera to Camera-up.

-   ❏ With the camera still selected, press Shift+D. This will duplicate
    the camera. Next press Enter to set the selection.

-   ❏ With the camera still selected, press R immediately followed by
    180 immediately followed by Enter. This will rotate the camera 180
    degrees along the X axis. The camera should now be facing down.
    Rename this camera to Camera-down.

-   ❏ Save your file.

```{=html}
<!-- -->
```
-   ❏ Open up a web browser and search for \"free high res skymap\" and
    select a Angular map of your choice or you can find some here at
    <https://blenderartists.org/forum/showthread.php?24038-Free-high-res-skymaps-%2528Massive-07-update!%2529>
    instead. Remember to select an **ANGULAR** map.

-   ❏ Save a map to your pc in a place you can easily locate it from
    later in blender.

```{=html}
<!-- -->
```
-   ❏ From the properties panel (bottom-right panel) select the Textures
    tab (red-white checkerboard) then press the new button to create a
    new texture. Rename this texture to AngMap.

-   ❏ Under the Image panel select open and navigate to the file you
    saved earlier.

-   ❏ In the Mapping panel select AngMap from the drop down box.

-   ❏ In the Influence panel de-select blend (ble) and select horizon
    (hor).

```{=html}
<!-- -->
```
-   ❏ From the properties panel select the Data tab (reel to reel
    camera).

-   ❏ In the lens panel change the Focal Lens value from 35 to 16. Do
    this for every camera.

```{=html}
<!-- -->
```
-   ❏ From the properties panel select the Render tab (normal looking
    camera).

-   ❏ In the Dimensions panel set the resolution to any number that is a
    power of 2. For this example 1024 x 1024.

-   ❏ Slide the resolution scale to 100%.

-   ❏ In the Output panel change the image type to JPEG. I have found
    out by trial and error that using a JPEG file has the same image
    quality as a PNG or DDS file but with a huge difference in image
    size. A single PNG image will clock in at over 8mb to the JPEG size
    of 325kb. Even converting to a DDS file comes in at over 3mb for
    comparison (using RGB888 as is recommended by Momoko\_Fan/Core
    Developer in this [forum
    post](https://hub.jmonkeyengine.org/t/best-dds-format-for-skyfactory/17668/2))
    with no gain in image quality that I could see. Your welcome to
    experiment on your own if you wish.

-   ❏ Set the image format to RGB.

-   ❏ Setting the quality slider has the effect of reducing the image
    size where 0 is maximum compression and 100 is no compression. In
    this example, setting it to 0 reduced the image sizes to less than
    125kb, once again with no discernable image degradation that I could
    see.

```{=html}
<!-- -->
```
-   ❏ In the properties panel select the World tab.

-   ❏ Check the Real Sky toggle.

```{=html}
<!-- -->
```
-   ❏ From the header at the top of the 3d view click the Choose Screen
    Layout button next to the word `Default` and select
    `Split Verticle F/R`.

-   ❏ Click the `+` sign to create a new layout.

-   ❏ Rename this new layout Angular Map Generator or a name of your
    choosing.

-   ❏ In the left side 3d view, at the bottom, next to the word view, is
    the Current Editor Type button. Click it and change it to
    `UV/Image Editor`.

-   ❏ Place your mouse inside the right side 3d view and press NumPad 5
    to toggle ortho view. You're now setup to render your Angular map.

-   ❏ Save your file.

```{=html}
<!-- -->
```
-   ❏ With your first camera selected (in this case Camera-down) and
    your mouse inside the right side 3d view, press Ctrl+NumPad 0 to set
    your selected camera to be the active camera. 

-   ❏ Press F12 to render the scene. A image will appear in the left
    side UV/Image Editor.

-   ❏ With your mouse inside the left side UV/Image Editor you can
    scroll in or out to center the view.

-   ❏ With your mouse inside the left side UV/Image Editor press F3 to
    save your image. Rename the image (down.jpg in this case).

Follow this same procedure for the remaining cameras. Rendering,
renaming and saving each. After you have rendered all your images you
can copy and paste them into your asset folder for JME3. Usually under
the `Assets/Texture` directory.

To use your images in your code, in simpleInitApp(), load the Textures
and use the SkyFactory to create your sky.

```java
Texture west = getAssetManager().loadTexture("Textures/Sky/west.jpg");
Texture east = getAssetManager().loadTexture("Textures/Sky/east.jpg");
Texture north = getAssetManager().loadTexture("Textures/Sky/north.jpg");
Texture south = getAssetManager().loadTexture("Textures/Sky/south.jpg");
Texture up = getAssetManager().loadTexture("Textures/Sky/up.jpg");
Texture down = getAssetManager().loadTexture("Textures/Sky/down.jpg");
getRootNode().attachChild(SkyFactory.createSky(getAssetManager(), west, east, north, south, up, down));
```

Many thanks go out to contributor glaucomardano for his video. He has
excellent taste in music.

Listed below are other Blender tutorials JME3 users may find valuable.

-   [Render a Skybox using
    Cycles](https://www.katsbits.com/tutorials/blender/cycles-skybox.php)

-   [Render a Skybox Environment
    Map](https://www.katsbits.com/tutorials/blender/render-skybox.php)

Gimp
====

You can use [Gimp](https://www.gimp.org/) to create SkyMaps from a
single image with the addition of 2 scripts.

-   [Gimp-dds](https://code.google.com/archive/p/gimp-dds/)

-   [Cubemap Layers Generator](http://registry.gimp.org/node/25532)

After installing the scripts you open a image in gimp. This script works
by slicing up the image into 6 layers of equal size, each by the power
of 2.

1.  After you open the image you select
    `Filters Generic Cubemap Layers Generator`.

2.  Fill in the details as follows.

    -   Source: navigate to the image you are slicing. \*\*  Cubemap
        layout: `Cross Horizontal`

    -   2 to the power of: `10` (for 1024 sized Layers)

3.  Press OK to slice up the image.

4.  Select `File Export As` and change the `Name` and `File Type` to
    `.dds`. Choose your save location, typically `Assets/Textures`.

5.  Press Export.

6.  A DDS panel will open. Apply the following settings:

    -   Compression: `None`

    -   Format: `RGB8`

    -   Save: `As cube map`

    -   MipMaps: `No mipmaps`

7.  Press OK to export.

You attach the exported image to your scene as is explained in the [How
to add a Sky to your Scene](../../jme3/advanced/sky) tutorial.

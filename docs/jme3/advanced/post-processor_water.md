The awesome SeaMonkey WaterFilter is highly configurable. It can render
any type of water and also simulates the underwater part of the effect,
including light effects called caustics. The effect is based on
[Wojciech Toman's Rendering Water as a Post-process
Effect](https://www.gamedev.net/articles/programming/graphics/rendering-water-as-a-post-process-effect-r2642/)
published on gamedev.net. Here's a video:

![water-post.png](/images/jme3/advanced/water-post.png)

:::note
The SeaMonkey WaterFilter is ideal for oceans and lakes, and especially
for under-water scenes. If you only need a small simple water surface,
such as a water trough or a shallow fountain, the
[SimpleWaterProcessor](../../jme3/advanced/water) may already be all
you need.
:::

The Theory
==========

The effect is part of a deferred rendering process, taking advantage of
the pre-computed position buffer and back buffer (a texture representing
the screen's pixels position in view space, and a texture of the
rendered scene).

After some calculation, this allows to reconstruct the position in world
space for each pixel on the screen. "If a pixel is under a given water
height, let's render it as a blue pixel! Blue pixel? Not exactly, we
want waves, we want ripples, we want foam, we want reflection and
refraction.

The GameDev.net article describes how those effects are achieved, but
the main idea is to generate waves from a height map, create ripples
from a normal map, blend in the foam texture when the water depth is
below a certain height, compute the refraction color with a clever color
extinction algorithm, and then, display the reflection and specular
effect by computing a Fresnel term (like in the simple water effect). In
addition, this effect allows to blend the water shore with the ground to
avoid the hard edges of classic water effects based on grids or quads.

How Did We Implement it in jME3?
================================

jME3 default behavior is to use a forward rendering process, so there is
no position buffer rendered that we can take advantage of. But while
rendering the main scene to a frame buffer in the FilterPostPorcessor,
we can write the hardware depth buffer to a texture, with nearly no
additional cost.

There are several ways of reconstructing the world space position of a
pixel from the depth buffer. The computational cost is higher than just
fetching the position from a position buffer, but the bandwidth and the
memory required is a lot lower.

Now we have the rendered scene in a texture, and we can reconstruct the
position in world space of each pixel. We're good to go!

-- Nehon

Sample Code
===========

These are test cases in the jME3 repository:

-   [TestPostWater.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/water/TestPostWater.java)
    (ocean island)

-   [TestPostWaterLake.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/water/TestPostWaterLake.java)
    (calm and muddy water pond)

-   [TestMultiPostWater.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/water/TestMultiPostWater.java)
    (several ponds of different sizes at different heights etc)

Using the Water Filter
----------------------

In the `simpleInitApp()` method, you attach your scene to the rootNode,
typically a terrain with a sky. Remember to add a directional light,
since the water relies on the light direction vector. The WaterFilter
constructor expects a node with the scene attached that should be
reflected in the water, and vector information from the light source's
direction.

This is how you use the water filter post-processor code in your code:

```java
private FilterPostProcessor fpp;
private WaterFilter water;
private Vector3f lightDir = new Vector3f(-4.9f, -1.3f, 5.9f); // same as light source
private float initialWaterHeight = 0.8f; // choose a value for your scene
...

public void simpleInitApp() {
  ...
  fpp = new FilterPostProcessor(assetManager);
  water = new WaterFilter(rootNode, lightDir);
  water.setWaterHeight(initialWaterHeight);
  fpp.addFilter(water);
  viewPort.addProcessor(fpp);
  ...
}
```

Usually you make the water reflect everything attached to the rootNode.
But you can also give a custom node (a subnode of the rootNode) to the
WaterFilter constructor that has only a subset of scene nodes attached.
This would be a relevant optimization if you have lots of nodes that are
far away from the water, or covered, and will never be reflected.

Optional: Waves
---------------

If you want waves, set the water height in the update loop. We reuse the
initialWaterHeight variable, and repeatedly reset the waterHeight value
according to time. This causes the waves.

```java
private float time = 0.0f;
private float waterHeight = 0.0f;

@Override
public void simpleUpdate(float tpf) {
  super.simpleUpdate(tpf);
  time += tpf;
  waterHeight = (float) Math.cos(((time * 0.6f) % FastMath.TWO_PI)) * 1.5f;
  water.setWaterHeight(initialWaterHeight + waterHeight);
}
```

Optional: Water Wave and Color Effects
--------------------------------------

![water-post-muddy.png](/images/jme3/advanced/water-post-muddy.png)

All these effects are optional. Every setter also has a getter.

+----------------------+----------------------+-----------------------+
| Water method example | Effects: Waves       | Default               |
+======================+======================+=======================+
| water                | Use this waterheight | 0.0f                  |
| .setWaterHeight(-6); | method for causing   |                       |
|                      | waves.               |                       |
+----------------------+----------------------+-----------------------+
| water.se             | How high the highest | 1.0f                  |
| tMaxAmplitude(0.3f); | waves are.           |                       |
+----------------------+----------------------+-----------------------+
| water.s              | Sets the scale       | 0.005f                |
| etWaveScale(0.008f); | factor of the waves  |                       |
|                      | height map. The      |                       |
|                      | smaller the value,   |                       |
|                      | the bigger the       |                       |
|                      | waves!               |                       |
+----------------------+----------------------+-----------------------+
| water.               | Sets the wind        | Vector2f(0.0f, -1.0f) |
| setWindDirection(new | direction, which is  |                       |
| Vector2f(0,1))       | the direction where  |                       |
|                      | the waves move       |                       |
+----------------------+----------------------+-----------------------+
| w                    | How fast the waves   | 1.0f                  |
| ater.setSpeed(0.7f); | move. Set it to 0.0f |                       |
|                      | for still water.     |                       |
+----------------------+----------------------+-----------------------+
| wat                  | This height map      | "C                    |
| er.setHeightTexture( | describes the shape  | ommon/MatDefs/Water/T |
| (Texture2D)\         | of the waves         | extures/heightmap.jpg |
| manag                |                      |                       |
| er.loadTexture("Text |                      |                       |
| ures/waveheight.png) |                      |                       |
| )                    |                      |                       |
+----------------------+----------------------+-----------------------+
| wat                  | This normal map      | "Commo                |
| er.setNormalTexture( | describes the shape  | n/MatDefs/Water/Textu |
| (Texture2D)\         | of the waves         | res/gradient\_map.jpg |
| manage               |                      |                       |
| r.loadTexture("Textu |                      |                       |
| res/wavenormals.png) |                      |                       |
| )                    |                      |                       |
+----------------------+----------------------+-----------------------+
| water.s              | Switches the ripples | true                  |
| etUseRipples(false); | effect on or off.    |                       |
+----------------------+----------------------+-----------------------+
| water.               | Sets the normal      | 1.0f                  |
| setNormalScale(0.5f) | scaling factors to   |                       |
|                      | apply to the normal  |                       |
|                      | map. The higher the  |                       |
|                      | value, the more      |                       |
|                      | small ripples will   |                       |
|                      | be visible on the    |                       |
|                      | waves.               |                       |
+----------------------+----------------------+-----------------------+

+----------------------+----------------------+-----------------------+
| Water method example | Effects: Color       | Default               |
+======================+======================+=======================+
| water.s              | Usually you set this | Value given to        |
| etLightDirection(new | to the same as the   | WaterFilter()         |
| Vector3f(-0          | light source's       | constructor.          |
| .37f,-0.50f,-0.78f)) | direction. Use this  |                       |
|                      | to set the light     |                       |
|                      | direction if the sun |                       |
|                      | is moving.           |                       |
+----------------------+----------------------+-----------------------+
| water.setLightCo     | Usually you set this | RGBA.White            |
| lor(ColorRGBA.White) | to the same as the   |                       |
|                      | light source's       |                       |
|                      | color.               |                       |
+----------------------+----------------------+-----------------------+
| water.se             | Sets the main water  | greenish blue\        |
| tWaterColor(ColorRGB | color.               | ColorRGBA             |
| A.Brown.mult(2.0f)); |                      | (0.0f,0.5f,0.5f,1.0f) |
+----------------------+----------------------+-----------------------+
| w                    | Sets the deep water  | dark blue\            |
| ater.setDeepWaterCol | color.               | ColorRGBA(0.0f,       |
| or(ColorRGBA.Brown); |                      | 0.0f,0.2f,1.0f)       |
+----------------------+----------------------+-----------------------+
| water.setWate        | Sets how fast colors | 0.1f                  |
| rTransparency(0.2f); | fade out. use this   |                       |
|                      | to control how clear |                       |
|                      | (e.g. 0.05f) or      |                       |
|                      | muddy (0.2f) water   |                       |
|                      | is.                  |                       |
+----------------------+----------------------+-----------------------+
| water.se             | Sets At what depth   | Vector3f(5f,20f,30f)  |
| tColorExtinction(new | the refraction color |                       |
| Vec                  | extincts. The three  |                       |
| tor3f(10f,20f,30f)); | values are RGB (red, |                       |
|                      | green, blue) in this |                       |
|                      | order. Play with     |                       |
|                      | these parameters to  |                       |
|                      | "muddy the water.    |                       |
+----------------------+----------------------+-----------------------+

+----------------------+----------------------+-----------------------+
| Water method example | Effects: Shore       | Default               |
+======================+======================+=======================+
| water.setCen         | Limit the water      | unused                |
| ter(Vector3f.ZERO);\ | filter to a          |                       |
| w                    | semisphere with the  |                       |
| ater.setRadius(260); | given center and     |                       |
|                      | radius. Use this for |                       |
|                      | lakes and smaller    |                       |
|                      | bodies of water.     |                       |
|                      | Skip this for        |                       |
|                      | oceans.              |                       |
+----------------------+----------------------+-----------------------+
| water.set            | Sets how soft the    | 0.1f                  |
| ShoreHardness(1.0f); | transition between   |                       |
|                      | shore and water      |                       |
|                      | should be. High      |                       |
|                      | values mean a harder |                       |
|                      | transition between   |                       |
|                      | shore and water.     |                       |
+----------------------+----------------------+-----------------------+
| water.setUs          | Renders shoreline    | true                  |
| eHQShoreline(false); | with better quality  |                       |
|                      | ?                    |                       |
+----------------------+----------------------+-----------------------+

+----------------------+----------------------+-----------------------+
| Water method example | Effects: Foam        | Default               |
+======================+======================+=======================+
| wate                 | Switches the white   | true                  |
| r.setUseFoam(false); | foam on or off       |                       |
+----------------------+----------------------+-----------------------+
| water.s              | Sets how much the    | 1.0f                  |
| etFoamHardness(0.5f) | foam will blend with |                       |
|                      | the shore to avoid a |                       |
|                      | hard edged water     |                       |
|                      | plane.               |                       |
+----------------------+----------------------+-----------------------+
| water.               | The three values     | Vecto                 |
| setFoamExistence(new | describe what depth  | r3f(0.45f,4.35f,1.0f) |
| Vec                  | foam starts to fade  |                       |
| tor3f(0.5f,5f,1.0f)) | out, at what depth   |                       |
|                      | it is completely     |                       |
|                      | invisible, at what   |                       |
|                      | height foam for      |                       |
|                      | waves appears (+     |                       |
|                      | waterHeight).        |                       |
+----------------------+----------------------+-----------------------+
| w                    | This foam texture    | "Common/MatDefs/Wa    |
| ater.setFoamTexture( | will be used with    | ter/Textures/foam.jpg |
| (Texture2D)\         | WrapMode.Repeat      |                       |
| manager.loadTexture  |                      |                       |
| ("Textures/foam.png) |                      |                       |
| )                    |                      |                       |
+----------------------+----------------------+-----------------------+

+----------------------+----------------------+-----------------------+
| Water method example | Effects: Light       | Default               |
+======================+======================+=======================+
| wa                   | Sets how big the sun | 3.0f                  |
| ter.setSunScale(1f); | should appear in the |                       |
|                      | light's specular     |                       |
|                      | effect on the water. |                       |
+----------------------+----------------------+-----------------------+
| water.s              | Switches specular    | true                  |
| etUseSpecular(false) | effect on or off     |                       |
+----------------------+----------------------+-----------------------+
| wate                 | Sets the shininess   | 0.7f                  |
| r.setShininess(0.8f) | of the water         |                       |
|                      | reflections          |                       |
+----------------------+----------------------+-----------------------+
| water.se             | Switches the         | true                  |
| tUseRefraction(true) | refraction effect on |                       |
|                      | or off.              |                       |
+----------------------+----------------------+-----------------------+
| water.setRefra       | The lower the value, | 0.3f                  |
| ctionConstant(0.2f); | the less reflection  |                       |
|                      | can be seen on       |                       |
|                      | water. This is a     |                       |
|                      | constant related to  |                       |
|                      | the index of         |                       |
|                      | refraction (IOR)     |                       |
|                      | used to compute the  |                       |
|                      | fresnel term.        |                       |
+----------------------+----------------------+-----------------------+
| water.setRefr        | This value modifies  | 0.0f                  |
| actionStrength(-0.1) | the current Fresnel  |                       |
|                      | term. If you want to |                       |
|                      | weaken reflections   |                       |
|                      | use bigger value. If |                       |
|                      | you want to empasize |                       |
|                      | them, use a value    |                       |
|                      | smaller than 0.      |                       |
+----------------------+----------------------+-----------------------+
| water.setRe          | Sets the size of the | 512                   |
| flectionMapSize(256) | reflection map. The  |                       |
|                      | higher, the better   |                       |
|                      | the quality, but the |                       |
|                      | slower the effect.   |                       |
+----------------------+----------------------+-----------------------+

Sound Effects
-------------

You should also add audio nodes with water sounds to complete the
effect.

```java
AudioNode waves = new AudioNode(assetManager, "Sounds/Environment/Ocean Waves.ogg", false);
waves.setLooping(true);
audioRenderer.playSource(waves);
```

See also: [audio](../../jme3/advanced/audio).

See also:

-   [JME3's Water Post-Process
    Effect](https://hub.jmonkeyengine.org/t/monkeys-at-the-beach/15000)
    by Nehon

-   [Simple water](../../jme3/advanced/water)

jME3 supports several types of special effects: Post-Processor Filters,
SceneProcessors, and Particle Emitters (also known as particle systems).
This list contains screenshots and links to sample code that
demonstrates how to add the effect to a scene.

Sample Code
===========

-   There is one `com.jme3.effect.ParticleEmitter` class for all
    Particle Systems.

-   There is one `com.jme3.post.FilterPostProcessor` class and several
    `com.jme3.post.filters.` (all Filters have `Filter` in their names).

-   There are several `SceneProcessor` classes in various packages,
    including e.g. `com.jme3.shadow.` and `com.jme3.water.`
    (SceneProcessor have `Processor` or `Renderer` in their names).

Particle Emitter
----------------

```java
public class MyGame extends SimpleApplication {
  public void simpleInitApp() {
    ParticleEmitter pm = new ParticleEmitter("my particle effect", Type.Triangle, 60);
    Material pmMat = new Material(assetManager, "Common/MatDefs/Misc/Particle.j3md");
    pmMat.setTexture("Texture", assetManager.loadTexture("Effects/spark.png"));
    pm.setMaterial(pmMat);
    pm.setImagesX(1);
    pm.setImagesY(1);
    rootNode.attachChild(pm); // attach one or more emitters to any node
  }
}
```

Scene Processor
---------------

```java
public class MyGame extends SimpleApplication {
    private BasicShadowRenderer bsr;

    public void simpleInitApp() {
        bsr = new BasicShadowRenderer(assetManager, 1024);
        bsr.setDirection(new Vector3f(.3f, -0.5f, -0.5f));
        viewPort.addProcessor(bsr); // add one or more sceneprocessor to viewport
    }
```

Post-Processor Filter
---------------------

```java
public class MyGame extends SimpleApplication {
    private FilterPostProcessor fpp; // one FilterPostProcessor per app
    private SomeFilter sf;           // one or more Filters per app

    public void simpleInitApp() {
        fpp = new FilterPostProcessor(assetManager);
        viewPort.addProcessor(fpp); // add one FilterPostProcessor to viewPort

        sf = new SomeFilter();
        fpp.addFilter(sf);  // add one or more Filters to FilterPostProcessor
    }
```

Water
=====

![water-post.png](/images/jme3/advanced/water-post.png)\
![water.png](/images/jme3/advanced/water.png)

The jMonkeyEngine's ["SeaMonkey
WaterFilter"](../../jme3/advanced/water) simulates ocean waves,
foam, including cool underwater caustics.\
Use the SimpleWaterProcessor (SceneProcessor) for small, limited bodies
of water, such as puddles, drinking troughs, pools, fountains.

See also:

-   [Rendering Water as Post-Process
    Effect](https://hub.jmonkeyengine.org/t/monkeys-at-the-beach/15000)
    announcement with video.

-   [TestSceneWater.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/water/TestSceneWater.java)
    -- SimpleWaterProcessor. (SceneProcessor)

-   [TestSimpleWater.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/water/TestSimpleWater.java)
    -- SimpleWaterProcessor. (SceneProcessor)

![water-reflection-muddy.png](/images/jme3/advanced/water-reflection-muddy.png)\
![underwater2.jpg](/images/jme3/advanced/underwater2.jpg)

-   [TestPostWater.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/water/TestPostWater.java)
    -- WaterFilter.

-   [TestPostWaterLake.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/water/TestPostWaterLake.java)
    -- WaterFilter.

Environment Effects
===================

Depth of Field Blur
-------------------

![dof-blur.png](/images/jme3/advanced/dof-blur.png)\
![light-scattering-filter.png](/images/jme3/advanced/light-scattering-filter.png)

-   [TestDepthOfField.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/post/TestDepthOfField.java)
    -- DepthOfFieldFilter.

Fog
---

-   [TestFog.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/post/TestFog.java)
    -- FogFilter.

Light Scattering
----------------

-   [TestLightScattering.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/post/TestLightScattering.java)
    -- LightScatteringFilter.

Vegetation
----------

-   Contribution: [Grass
    System](../../jme3/contributions/vegetationsystem/grass)

-   Contribution: [Trees
    (WIP)](https://hub.jmonkeyengine.org/t/generating-vegetation-paged-geometry-style/18928)

Light and Shadows
=================

Bloom and Glow
--------------

![tanlglow1.png](/images/jme3/advanced/tanlglow1.png)\
![shadow-sponza-ssao.png](/images/jme3/advanced/shadow-sponza-ssao.png)

-   [TestBloom.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/post/TestBloom.java)

-   More details: [Bloom and
    Glow](../../jme3/advanced/bloom_and_glow) -- BloomFilter.

Light
-----

-   [TestSimpleLighting.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/light/TestSimpleLighting.java)
    -- DirectionalLight, PointLight.

-   [TestLightRadius.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/light/TestLightRadius.java)
    -- DirectionalLight, PointLight.

-   [TestManyLights.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/light/TestManyLights.java)
    -- .j3o scene.

-   More details: [Light and
    Shadow](../../jme3/advanced/light_and_shadow)

Shadow
------

![shadow.png](/images/jme3/advanced/shadow.png)\
![light-sources.png](/images/jme3/advanced/light-sources.png)

-   [TestShadow.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/light/TestShadow.java)
    -- BasicShadowRenderer. (SceneProcessor)

-   [TestPssmShadow.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/light/TestPssmShadow.java)
    -- PssmShadowRenderer (SceneProcessor), also known as Parallel-Split
    Shadow Mapping (PSSM).

-   [TestSSAO.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/post/TestSSAO.java)\
    [TestSSAO2.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/post/TestSSAO2.java)
    -- SSAOFilter, also known as Screen-Space Ambient Occlusion shadows
    (SSOA). \* 
    [TestTransparentSSAO.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/post/TestTransparentSSAO.java)
    -- SSAOFilter, also known as Screen-Space Ambient Occlusion shadows
    (SSOA), plus transparancy.

-   More details: [Light and
    Shadow](../../jme3/advanced/light_and_shadow)

Special: Glass, Metal, Dissolve, Toon
=====================================

Toon Effect
-----------

![toon-dino.png](/images/jme3/advanced/toon-dino.png)

-   [TestCartoonEdge.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/post/TestCartoonEdge.java)
    -- CartoonEdgeFilter.

-   [TestTransparentCartoonEdge.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/post/TestTransparentCartoonEdge.java)
    -- CartoonEdgeFilter.

Fade in / Fade out
------------------

-   [Fade](../../jme3/advanced/fade) -- FadeFilter

User Contributed
----------------

![shaderblow\_light1.jpg](/images/jme3/advanced/shaderblow_light1.jpg)\
![shaderblow\_glass.jpg](/images/jme3/advanced/shaderblow_glass.jpg)\
![shaderblow\_matcap.jpg](/images/jme3/advanced/shaderblow_matcap.jpg)\
![shaderblow\_light2.jpg](/images/jme3/advanced/shaderblow_light2.jpg)

[ShaderBlow - GLSL Shader Library](../../sdk/plugin/shaderblow)

-   LightBlow Shader -- blend material texture maps.

-   FakeParticleBlow Shader -- jet, fire effect.

-   ToonBlow Shader -- Toon Shading, toon edges.

-   Dissolve Shader -- Scifi teleportation/dissolve effect.

-   MatCap Shader -- Gold, metals, glass, toons...!

-   Glass Shader -- Glass.

-   Force Shield Shader -- Scifi impact-on-force-field effect.

-   SimpleSprite Shader -- Animated textures.

-   SimpleSpriteParticle Shader -- Sprite library.

-   MovingTexture Shader -- Animated cloud/mist texture.

-   SoftParticles Shader -- Fire, clouds, smoke etc.

-   Displace Shader -- Deformation effect: Ripple, wave, pulse, swell!

Thanks for your awesome contributions! Keep them coming!

Particle Emitters: Explosions, Fire, Smoke
==========================================

![explosion-5.png](/images/jme3/advanced/explosion-5.png)\
![particle.png](/images/jme3/advanced/particle.png)

[Particle emitter effects](../../jme3/advanced/particle_emitters)
are highly configurable and can have any texture. They can simulate
smoke, dust, leaves, meteors, snowflakes, mosquitos, fire, explosions,
clusters, embers, sparks...

-   [TestExplosionEffect.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/effect/TestExplosionEffect.java)
    -- debris, flame, flash, shockwave, smoke, sparks.

-   [TestPointSprite.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/effect/TestPointSprite.java)
    -- cluster of points.

-   [TestMovingParticle.java](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/effect/TestMovingParticle.java)
    -- dust, smoke.

Creating your own Filters
-------------------------

Here is an extract taken from \@nehon in the forum thread
([http://hub.jmonkeyengine.org/forum/topic/how-exactly-do-filters-work/](https://hub.jmonkeyengine.org/t/how-exactly-do-filters-work/26871))

The methods are called in this order (pretty much the same flow as
processors): - initFilter() is called once when the FilterPostPorcessor
is initialized or when the filter is added to the processor and this one
as already been initialized.

for each frame the methods are called in that sequence : - preFrame()
occurs before anything happens - postQueue() occcurs once the queues
have been populated (there is one queue per bucket and 2 additional
queues for the shadows, casters and recievers). Note that geometries in
the queues are the one in the view frustum. - postFrame occurs once the
main frame has been rendered (the back buffer)

Those methods are optional in a filter, they are only there if you want
to hook in the rendering process.

The material variable is here for convenience. You have a getMaterial
method that returns the material that's gonna be used to render the full
screen quad. It just happened that in every implementation I had a
material attribute in all my sub-classes, so I just put it back in the
abstract class. Most of the time getMaterial returns this attribute.

Forced-technique can be any technique really, they are more related with
the material system than to the filters but anyway. When you use a
forced technique the renderer tries to select it on the material of each
geometry, if the technique does not exists for the material the geometry
is not rendered. You assume well about the SSAO filer, the normal of the
scene are rendered to a texture in a pre pass.

Passes : these are filters in filters in a way. First they are a
convenient way to initialize a FrameBuffer and the associated textures
it needs, then you can use them for what ever you want. For example, a
Pass can be (as in the SSAO filter) an extra render of the scene with a
forced technique, and you have to handle the render yourself in the
postQueue method. It can be a post pass to do after the main filter has
been rendered to screen (for example an additional blur pass used in
SSAO again). You have a list of passes called postRenderPass in the
Filter abstract class. If you add a pass to this list, it'll be
automatically rendered by the FilterPostProcessor during the filter
chain.

The bloom Filter does an intensive use of passes.

Filters in a nutshell.

See also:

-   [Particle Emitters](../../jme3/advanced/particle_emitters)

-   [Bloom and Glow](../../jme3/advanced/bloom_and_glow)

-   [Photoshop Tutorial for Sky and space effects
    (article)](http://www.smashingmagazine.com/2008/08/07/50-photoshop-tutorials-for-sky-and-space-effects/)

(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{395:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),i=(a(0),a(441)),s={},o={id:"jme3/advanced/effects_overview",title:"effects_overview",description:"jME3 supports several types of special effects: Post-Processor Filters,",source:"@site/docs/jme3/advanced/effects_overview.md",permalink:"/wikidemo/docs/jme3/advanced/effects_overview",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/advanced/effects_overview.md"},c=[{value:"Particle Emitter",id:"particle-emitter",children:[]},{value:"Scene Processor",id:"scene-processor",children:[]},{value:"Post-Processor Filter",id:"post-processor-filter",children:[]},{value:"Depth of Field Blur",id:"depth-of-field-blur",children:[]},{value:"Fog",id:"fog",children:[]},{value:"Light Scattering",id:"light-scattering",children:[]},{value:"Vegetation",id:"vegetation",children:[]},{value:"Bloom and Glow",id:"bloom-and-glow",children:[]},{value:"Light",id:"light",children:[]},{value:"Shadow",id:"shadow",children:[]},{value:"Toon Effect",id:"toon-effect",children:[]},{value:"Fade in / Fade out",id:"fade-in--fade-out",children:[]},{value:"User Contributed",id:"user-contributed",children:[]},{value:"Creating your own Filters",id:"creating-your-own-filters",children:[]}],l={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"jME3 supports several types of special effects: Post-Processor Filters,\nSceneProcessors, and Particle Emitters (also known as particle systems).\nThis list contains screenshots and links to sample code that\ndemonstrates how to add the effect to a scene."),Object(i.b)("h1",{id:"sample-code"},"Sample Code"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"There is one ",Object(i.b)("inlineCode",{parentName:"p"},"com.jme3.effect.ParticleEmitter")," class for all\nParticle Systems.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"There is one ",Object(i.b)("inlineCode",{parentName:"p"},"com.jme3.post.FilterPostProcessor")," class and several\n",Object(i.b)("inlineCode",{parentName:"p"},"com.jme3.post.filters.")," (all Filters have ",Object(i.b)("inlineCode",{parentName:"p"},"Filter")," in their names).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"There are several ",Object(i.b)("inlineCode",{parentName:"p"},"SceneProcessor")," classes in various packages,\nincluding e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"com.jme3.shadow.")," and ",Object(i.b)("inlineCode",{parentName:"p"},"com.jme3.water."),"\n(SceneProcessor have ",Object(i.b)("inlineCode",{parentName:"p"},"Processor")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Renderer")," in their names)."))),Object(i.b)("h2",{id:"particle-emitter"},"Particle Emitter"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'public class MyGame extends SimpleApplication {\n  public void simpleInitApp() {\n    ParticleEmitter pm = new ParticleEmitter("my particle effect", Type.Triangle, 60);\n    Material pmMat = new Material(assetManager, "Common/MatDefs/Misc/Particle.j3md");\n    pmMat.setTexture("Texture", assetManager.loadTexture("Effects/spark.png"));\n    pm.setMaterial(pmMat);\n    pm.setImagesX(1);\n    pm.setImagesY(1);\n    rootNode.attachChild(pm); // attach one or more emitters to any node\n  }\n}\n')),Object(i.b)("h2",{id:"scene-processor"},"Scene Processor"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"public class MyGame extends SimpleApplication {\n    private BasicShadowRenderer bsr;\n\n    public void simpleInitApp() {\n        bsr = new BasicShadowRenderer(assetManager, 1024);\n        bsr.setDirection(new Vector3f(.3f, -0.5f, -0.5f));\n        viewPort.addProcessor(bsr); // add one or more sceneprocessor to viewport\n    }\n")),Object(i.b)("h2",{id:"post-processor-filter"},"Post-Processor Filter"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"public class MyGame extends SimpleApplication {\n    private FilterPostProcessor fpp; // one FilterPostProcessor per app\n    private SomeFilter sf;           // one or more Filters per app\n\n    public void simpleInitApp() {\n        fpp = new FilterPostProcessor(assetManager);\n        viewPort.addProcessor(fpp); // add one FilterPostProcessor to viewPort\n\n        sf = new SomeFilter();\n        fpp.addFilter(sf);  // add one or more Filters to FilterPostProcessor\n    }\n")),Object(i.b)("h1",{id:"water"},"Water"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/jme3/advanced/water-post.png",alt:"water-post.png"})),"\\\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/jme3/advanced/water.png",alt:"water.png"}))),Object(i.b)("p",null,"The jMonkeyEngine's ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/water"}),'"SeaMonkey\nWaterFilter"')," simulates ocean waves,\nfoam, including cool underwater caustics.\\\nUse the SimpleWaterProcessor (SceneProcessor) for small, limited bodies\nof water, such as puddles, drinking troughs, pools, fountains."),Object(i.b)("p",null,"See also:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.jmonkeyengine.org/t/monkeys-at-the-beach/15000"}),"Rendering Water as Post-Process\nEffect"),"\nannouncement with video.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/water/TestSceneWater.java"}),"TestSceneWater.java"),"\n-- SimpleWaterProcessor. (SceneProcessor)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/water/TestSimpleWater.java"}),"TestSimpleWater.java"),"\n-- SimpleWaterProcessor. (SceneProcessor)"))),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/jme3/advanced/water-reflection-muddy.png",alt:"water-reflection-muddy.png"})),"\\\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/jme3/advanced/underwater2.jpg",alt:"underwater2.jpg"}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/water/TestPostWater.java"}),"TestPostWater.java"),"\n-- WaterFilter.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/water/TestPostWaterLake.java"}),"TestPostWaterLake.java"),"\n-- WaterFilter."))),Object(i.b)("h1",{id:"environment-effects"},"Environment Effects"),Object(i.b)("h2",{id:"depth-of-field-blur"},"Depth of Field Blur"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/jme3/advanced/dof-blur.png",alt:"dof-blur.png"})),"\\\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/jme3/advanced/light-scattering-filter.png",alt:"light-scattering-filter.png"}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/post/TestDepthOfField.java"}),"TestDepthOfField.java"),"\n-- DepthOfFieldFilter.")),Object(i.b)("h2",{id:"fog"},"Fog"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/post/TestFog.java"}),"TestFog.java"),"\n-- FogFilter.")),Object(i.b)("h2",{id:"light-scattering"},"Light Scattering"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/post/TestLightScattering.java"}),"TestLightScattering.java"),"\n-- LightScatteringFilter.")),Object(i.b)("h2",{id:"vegetation"},"Vegetation"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Contribution: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/contributions/vegetationsystem/grass"}),"Grass\nSystem"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Contribution: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.jmonkeyengine.org/t/generating-vegetation-paged-geometry-style/18928"}),"Trees\n(WIP)")))),Object(i.b)("h1",{id:"light-and-shadows"},"Light and Shadows"),Object(i.b)("h2",{id:"bloom-and-glow"},"Bloom and Glow"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/jme3/advanced/tanlglow1.png",alt:"tanlglow1.png"})),"\\\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/jme3/advanced/shadow-sponza-ssao.png",alt:"shadow-sponza-ssao.png"}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/post/TestBloom.java"}),"TestBloom.java"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"More details: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/bloom_and_glow"}),"Bloom and\nGlow")," -- BloomFilter."))),Object(i.b)("h2",{id:"light"},"Light"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/light/TestSimpleLighting.java"}),"TestSimpleLighting.java"),"\n-- DirectionalLight, PointLight.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/light/TestLightRadius.java"}),"TestLightRadius.java"),"\n-- DirectionalLight, PointLight.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/light/TestManyLights.java"}),"TestManyLights.java"),"\n-- .j3o scene.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"More details: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/light_and_shadow"}),"Light and\nShadow")))),Object(i.b)("h2",{id:"shadow"},"Shadow"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/jme3/advanced/shadow.png",alt:"shadow.png"})),"\\\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/jme3/advanced/light-sources.png",alt:"light-sources.png"}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/light/TestShadow.java"}),"TestShadow.java"),"\n-- BasicShadowRenderer. (SceneProcessor)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/light/TestPssmShadow.java"}),"TestPssmShadow.java"),"\n-- PssmShadowRenderer (SceneProcessor), also known as Parallel-Split\nShadow Mapping (PSSM).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/post/TestSSAO.java"}),"TestSSAO.java"),"\\\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/post/TestSSAO2.java"}),"TestSSAO2.java"),"\n-- SSAOFilter, also known as Screen-Space Ambient Occlusion shadows\n(SSOA). ","*","\xa0\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/post/TestTransparentSSAO.java"}),"TestTransparentSSAO.java"),"\n-- SSAOFilter, also known as Screen-Space Ambient Occlusion shadows\n(SSOA), plus transparancy.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"More details: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/light_and_shadow"}),"Light and\nShadow")))),Object(i.b)("h1",{id:"special-glass-metal-dissolve-toon"},"Special: Glass, Metal, Dissolve, Toon"),Object(i.b)("h2",{id:"toon-effect"},"Toon Effect"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/jme3/advanced/toon-dino.png",alt:"toon-dino.png"}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/post/TestCartoonEdge.java"}),"TestCartoonEdge.java"),"\n-- CartoonEdgeFilter.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/post/TestTransparentCartoonEdge.java"}),"TestTransparentCartoonEdge.java"),"\n-- CartoonEdgeFilter."))),Object(i.b)("h2",{id:"fade-in--fade-out"},"Fade in / Fade out"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"../../jme3/advanced/fade"}),"Fade")," -- FadeFilter")),Object(i.b)("h2",{id:"user-contributed"},"User Contributed"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/jme3/advanced/shaderblow_light1.jpg",alt:"shaderblow_light1.jpg"})),"\\\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/jme3/advanced/shaderblow_glass.jpg",alt:"shaderblow_glass.jpg"})),"\\\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/jme3/advanced/shaderblow_matcap.jpg",alt:"shaderblow_matcap.jpg"})),"\\\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/jme3/advanced/shaderblow_light2.jpg",alt:"shaderblow_light2.jpg"}))),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../sdk/plugin/shaderblow"}),"ShaderBlow - GLSL Shader Library")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"LightBlow Shader -- blend material texture maps.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"FakeParticleBlow Shader -- jet, fire effect.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"ToonBlow Shader -- Toon Shading, toon edges.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Dissolve Shader -- Scifi teleportation/dissolve effect.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"MatCap Shader -- Gold, metals, glass, toons...!")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Glass Shader -- Glass.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Force Shield Shader -- Scifi impact-on-force-field effect.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"SimpleSprite Shader -- Animated textures.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"SimpleSpriteParticle Shader -- Sprite library.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"MovingTexture Shader -- Animated cloud/mist texture.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"SoftParticles Shader -- Fire, clouds, smoke etc.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Displace Shader -- Deformation effect: Ripple, wave, pulse, swell!"))),Object(i.b)("p",null,"Thanks for your awesome contributions! Keep them coming!"),Object(i.b)("h1",{id:"particle-emitters-explosions-fire-smoke"},"Particle Emitters: Explosions, Fire, Smoke"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/jme3/advanced/explosion-5.png",alt:"explosion-5.png"})),"\\\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/images/jme3/advanced/particle.png",alt:"particle.png"}))),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/particle_emitters"}),"Particle emitter effects"),"\nare highly configurable and can have any texture. They can simulate\nsmoke, dust, leaves, meteors, snowflakes, mosquitos, fire, explosions,\nclusters, embers, sparks..."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/effect/TestExplosionEffect.java"}),"TestExplosionEffect.java"),"\n-- debris, flame, flash, shockwave, smoke, sparks.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/effect/TestPointSprite.java"}),"TestPointSprite.java"),"\n-- cluster of points.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/effect/TestMovingParticle.java"}),"TestMovingParticle.java"),"\n-- dust, smoke."))),Object(i.b)("h2",{id:"creating-your-own-filters"},"Creating your own Filters"),Object(i.b)("p",null,"Here is an extract taken from \\@nehon in the forum thread\n(",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.jmonkeyengine.org/t/how-exactly-do-filters-work/26871"}),"http://hub.jmonkeyengine.org/forum/topic/how-exactly-do-filters-work/"),")"),Object(i.b)("p",null,"The methods are called in this order (pretty much the same flow as\nprocessors): - initFilter() is called once when the FilterPostPorcessor\nis initialized or when the filter is added to the processor and this one\nas already been initialized."),Object(i.b)("p",null,"for each frame the methods are called in that sequence : - preFrame()\noccurs before anything happens - postQueue() occcurs once the queues\nhave been populated (there is one queue per bucket and 2 additional\nqueues for the shadows, casters and recievers). Note that geometries in\nthe queues are the one in the view frustum. - postFrame occurs once the\nmain frame has been rendered (the back buffer)"),Object(i.b)("p",null,"Those methods are optional in a filter, they are only there if you want\nto hook in the rendering process."),Object(i.b)("p",null,"The material variable is here for convenience. You have a getMaterial\nmethod that returns the material that's gonna be used to render the full\nscreen quad. It just happened that in every implementation I had a\nmaterial attribute in all my sub-classes, so I just put it back in the\nabstract class. Most of the time getMaterial returns this attribute."),Object(i.b)("p",null,"Forced-technique can be any technique really, they are more related with\nthe material system than to the filters but anyway. When you use a\nforced technique the renderer tries to select it on the material of each\ngeometry, if the technique does not exists for the material the geometry\nis not rendered. You assume well about the SSAO filer, the normal of the\nscene are rendered to a texture in a pre pass."),Object(i.b)("p",null,"Passes : these are filters in filters in a way. First they are a\nconvenient way to initialize a FrameBuffer and the associated textures\nit needs, then you can use them for what ever you want. For example, a\nPass can be (as in the SSAO filter) an extra render of the scene with a\nforced technique, and you have to handle the render yourself in the\npostQueue method. It can be a post pass to do after the main filter has\nbeen rendered to screen (for example an additional blur pass used in\nSSAO again). You have a list of passes called postRenderPass in the\nFilter abstract class. If you add a pass to this list, it'll be\nautomatically rendered by the FilterPostProcessor during the filter\nchain."),Object(i.b)("p",null,"The bloom Filter does an intensive use of passes."),Object(i.b)("p",null,"Filters in a nutshell."),Object(i.b)("p",null,"See also:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/particle_emitters"}),"Particle Emitters"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/bloom_and_glow"}),"Bloom and Glow"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.smashingmagazine.com/2008/08/07/50-photoshop-tutorials-for-sky-and-space-effects/"}),"Photoshop Tutorial for Sky and space effects\n(article)")))))}p.isMDXComponent=!0},441:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(a),j=n,d=b["".concat(s,".").concat(j)]||b[j]||m[j]||i;return a?r.a.createElement(d,o({ref:t},l,{components:a})):r.a.createElement(d,o({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=j;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);
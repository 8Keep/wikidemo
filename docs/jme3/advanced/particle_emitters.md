You cannot create a 3D model for delicate things like fire, smoke, or
explosions. Particle Emitters are quite an efficient solution to create
these kinds of effects: The emitter renders a series of flat orthogonal
images and manipulates them in a way that creates the illusion of a
anything from a delicate smoke cloud to individual flames, etc. Creating
an effect involves some trial and error to get the settings *just
right*, and it's worth exploring the expressiveness of the options
described below.

:::note
Use the [Scene Explorer](../../sdk/scene_explorer) in the
[SDK](../../sdk) to design and preview effects.
:::

![explosion-5.png](/images/jme3/advanced/explosion-5.png)
![particle.png](/images/jme3/advanced/particle.png)
![beginner-effect-fire.png](/images/jme3/beginner/beginner-effect-fire.png)
![butterfly-particle-emitter.png](/images/jme3/advanced/butterfly-particle-emitter.png)

Create an Emitter
=================

1.  Create one emitter for each effect:

    ```java
    ParticleEmitter explosion = new ParticleEmitter(
    "My explosion effect", Type.Triangle, 30);
    ```

2.  Attach the emitter to the rootNode and position it in the scene:

    ```java
    rootNode.attachChild(explosion);
    explosion.setLocalTranslation(bomb.getLocalTranslation());
    ```

3.  Trigger the effect by calling

    ```java
    explosion.emitAllParticles()
    ```

4.  End the effect by calling

    ```java
    explosion.killAllParticles()
    ```

Choose one of the following mesh shapes

-   Type.Triangle

-   Type.Point

Configure Parameters
====================

Not all of these parameters are required for all kinds of effects. If
you don't specify one of them, a default value will be used.

+---------+-----------------+-------------+---------------------------+
| Pa      | Method          | Default     | Description               |
| rameter |                 |             |                           |
+=========+=================+=============+===========================+
| number  | `set            |             | The maximum number of     |
|         | NumParticles()` |             | particles visible at the  |
|         |                 |             | same time. Specified by   |
|         |                 |             | user in constructor.      |
+---------+-----------------+-------------+---------------------------+
| e       | `setPar         | 20          | Density of the effect,    |
| mission | ticlesPerSec()` |             | how many new particles    |
| rate    |                 |             | are emitted per second.\  |
|         |                 |             | Set to zero to control    |
|         |                 |             | the start/end of the      |
|         |                 |             | effect.\                  |
|         |                 |             | Set to a number for a     |
|         |                 |             | constantly running        |
|         |                 |             | effect.                   |
+---------+-----------------+-------------+---------------------------+
| size    | `s              | 0.2f, 2f    | The radius of the scaled  |
|         | etStartSize()`, |             | sprite image. Set both to |
|         | `setEndSize()`  |             | same value for constant   |
|         |                 |             | size effect.\             |
|         |                 |             | Set to different values   |
|         |                 |             | for shrink/grow effect.   |
+---------+-----------------+-------------+---------------------------+
| color   | `se             | gray        | Controls how the opaque   |
|         | tStartColor()`, |             | (non-black) parts of the  |
|         | `setEndColor()` |             | texture are colorized.\   |
|         |                 |             | Set both to the same      |
|         |                 |             | color for single-colored  |
|         |                 |             | effects (e.g. fog,        |
|         |                 |             | debris).\                 |
|         |                 |             | Set both to different     |
|         |                 |             | colors for a gradient     |
|         |                 |             | effect (e.g. fire).       |
+---------+-----------------+-------------+---------------------------+
| dire    | `g              | Vect        | A vector specifying the   |
| ction/v | etParticleInflu | or3f(0,0,0) | initial direction and     |
| elocity | encer(). setIni |             | speed of particles. The   |
|         | tialVelocity(in |             | longer the vector, the    |
|         | itialVelocity)` |             | faster.                   |
+---------+-----------------+-------------+---------------------------+
| fanning | `getParticle    | 0.2f        | How much the direction    |
| out     | Influencer().se |             | (`setInitialVelocity()`)  |
|         | tVelocityVariat |             | can vary among particles. |
|         | ion(variation)` |             | Use a value between 1 and |
|         |                 |             | 0 to create a directed    |
|         |                 |             | swarm-like cloud of       |
|         |                 |             | particles.\               |
|         |                 |             | 1 = Maximum variation,    |
|         |                 |             | particles emit in random  |
|         |                 |             | 360° directions (e.g.     |
|         |                 |             | explosion, butterflies).\ |
|         |                 |             | 0.5f = particles are      |
|         |                 |             | emitted within 180° of    |
|         |                 |             | the initial direction.\   |
|         |                 |             | 0 = No variation,         |
|         |                 |             | particles fly in a        |
|         |                 |             | straight line in          |
|         |                 |             | direction of start        |
|         |                 |             | velocity (e.g. lasergun   |
|         |                 |             | blasts).                  |
+---------+-----------------+-------------+---------------------------+
| dir     | `setFa          | false       | true = Flying particles   |
| ection\ | cingVelocity()` |             | pitch in the direction    |
| (pick   |                 |             | they're flying (e.g.      |
| one)    |                 |             | missiles).\               |
|         |                 |             | false = Particles keep    |
|         |                 |             | flying rotated the way    |
|         |                 |             | they started (e.g.        |
|         |                 |             | debris).                  |
+---------+-----------------+-------------+---------------------------+
| dir     | `s              | V           | Vector3f = Flying         |
| ection\ | etFaceNormal()` | ector3f.NAN | particles face in the     |
| (pick   |                 |             | given direction (e.g.     |
| one)    |                 |             | horizontal shockwave      |
|         |                 |             | faces up =                |
|         |                 |             | Vector3f.UNIT\_Y).\       |
|         |                 |             | Vector3f.NAN = Flying     |
|         |                 |             | particles face the        |
|         |                 |             | camera.                   |
+---------+-----------------+-------------+---------------------------+
| l       | `setLowLife()`, | 3f, 7f      | The time period before a  |
| ifetime | `setHighLife()` |             | particle fades is set to  |
|         |                 |             | a random value between    |
|         |                 |             | minimum and maximum;      |
|         |                 |             | minimum must be smaller   |
|         |                 |             | than maximum. A minimum   |
|         |                 |             | \< 1f makes the effect    |
|         |                 |             | more busy, a higher       |
|         |                 |             | minimum looks more        |
|         |                 |             | steady. Use a maximum \<  |
|         |                 |             | 1f for short bursts, and  |
|         |                 |             | higher maxima for long    |
|         |                 |             | lasting swarms or smoke.  |
|         |                 |             | Set maximum and minimum   |
|         |                 |             | to similar values to      |
|         |                 |             | create an evenly spaced   |
|         |                 |             | effect (e.g. fountain),   |
|         |                 |             | set the to very different |
|         |                 |             | values to create a        |
|         |                 |             | distorted effect (e.g.    |
|         |                 |             | fire with individual long |
|         |                 |             | flames).                  |
+---------+-----------------+-------------+---------------------------+
| s       | `se             | 0f          | 0 = Flying particles      |
| pinning | tRotateSpeed()` |             | don't spin while flying   |
|         |                 |             | (e.g. smoke, insects,     |
|         |                 |             | controlled projectiles).\ |
|         |                 |             | \> 0 = How fast particle  |
|         |                 |             | spins while flying (e.g.  |
|         |                 |             | debris, shuriken,         |
|         |                 |             | missiles out of control). |
+---------+-----------------+-------------+---------------------------+
| r       | `se             | false       | true = The particle       |
| otation | tRandomAngle()` |             | sprite is rotated at a    |
|         |                 |             | random angle when it is   |
|         |                 |             | emitted (e.g. explosion,  |
|         |                 |             | debris).\                 |
|         |                 |             | false = Particles fly     |
|         |                 |             | straight like you drew    |
|         |                 |             | them in the sprite        |
|         |                 |             | texture (e.g. insects).   |
+---------+-----------------+-------------+---------------------------+
| gravity | `setGravity()`  | Ve          | Particles fall in the     |
|         |                 | ctor3f(0.0f | direction of the vector   |
|         |                 | ,0.1f,0.0f) | (e.g. debris, sparks).\   |
|         |                 |             | (0,0,0) = Particles keep  |
|         |                 |             | flying in start direction |
|         |                 |             | (e.g. flames,             |
|         |                 |             | zero-gravity explosion.)  |
+---------+-----------------+-------------+---------------------------+
| start   | `setShape(      | EmitterP    | By default, particles are |
| area    | new EmitterSphe | ointShape() | emitted from the emitters |
|         | reShape( Vector |             | location (a point). You   |
|         | 3f.ZERO, 2f));` |             | can increase the emitter  |
|         |                 |             | shape to occupy a sphere, |
|         |                 |             | so that the start point   |
|         |                 |             | of new particles can be   |
|         |                 |             | anywhere inside the       |
|         |                 |             | sphere, which makes the   |
|         |                 |             | effect a bit more         |
|         |                 |             | irregular.                |
+---------+-----------------+-------------+---------------------------+

Build up your effect by specifying one parameter after the other. If you
change several parameters at the same time, it's difficult to tell which
of the values caused which outcome.

Create an Effect Material
=========================

![flash.png](/images/jme3/beginner/flash.png)

Use the common Particle.j3md Material Definition and a texture to
specify the shape of the particles. The shape is defined by the texture
you provide and can be anything -- debris, flames, smoke, mosquitoes,
leaves, butterflies... be creative.

```java
    Material flash_mat = new Material(
        assetManager, "Common/MatDefs/Misc/Particle.j3md");
    flash_mat.setTexture("Texture",
        assetManager.loadTexture("Effects/Explosion/flash.png"));
    flash.setMaterial(flash_mat);
    flash.setImagesX(2); // columns
    flash.setImagesY(2); // rows
    flash.setSelectRandomImage(true);
```

The effect texture can be one image, or contain a sprite animation -- a
series of slightly different pictures in equally spaced rows and
columns. If you choose the sprite animation:

-   Specify the number of rows and columns using setImagesX(2) and
    setImagesY().

-   Specify whether you want to play the sprite series in order
    (animation), or at random (explosion, flame), by setting
    setSelectRandomImage() true or false.

**Examples:** Have a look at the following default textures and you will
see how you can create your own sprite textures after the same fashion.

Default Particle Textures
-------------------------

The Material is used together with grayscale texture: The black parts
will be transparent and the white parts will be opaque (colored). The
following effect textures are available by default from `test-data.jar`.
You can also load your own textures from your assets directory.

+----------------------+----------------------+-----------------------+
| Texture Path         | Dimension            | Preview               |
+======================+======================+=======================+
| Effects/             | 3\*3                 | ![D                   |
| Explosion/Debris.png |                      | ebris.png](../../jme3 |
|                      |                      | /beginner/Debris.png) |
+----------------------+----------------------+-----------------------+
| Effects              | 2\*2                 | !                     |
| /Explosion/flame.png |                      | [flame.png](../../jme |
|                      |                      | 3/beginner/flame.png) |
+----------------------+----------------------+-----------------------+
| Effects              | 2\*2                 | !                     |
| /Explosion/flash.png |                      | [flash.png](../../jme |
|                      |                      | 3/beginner/flash.png) |
+----------------------+----------------------+-----------------------+
| Effects/Expl         | 1\*1                 | ![roundspar           |
| osion/roundspark.png |                      | k.png](../../jme3/beg |
|                      |                      | inner/roundspark.png) |
+----------------------+----------------------+-----------------------+
| Effects/Exp          | 1\*1                 | ![shockwa             |
| losion/shockwave.png |                      | ve.png](../../jme3/be |
|                      |                      | ginner/shockwave.png) |
+----------------------+----------------------+-----------------------+
| Effects/Expl         | 1\*3                 | ![smoketrai           |
| osion/smoketrail.png |                      | l.png](../../jme3/beg |
|                      |                      | inner/smoketrail.png) |
+----------------------+----------------------+-----------------------+
| Effects              | 1\*1                 | !                     |
| /Explosion/spark.png |                      | [spark.png](../../jme |
|                      |                      | 3/beginner/spark.png) |
+----------------------+----------------------+-----------------------+
| Eff                  | 1\*15                | !                     |
| ects/Smoke/Smoke.png |                      | [Smoke.png](../../jme |
|                      |                      | 3/beginner/Smoke.png) |
+----------------------+----------------------+-----------------------+

:::note
Use the `setStartColor()`/`setEndColor()` settings described above to
colorize the white and gray parts of textures.
:::

Usage Example
=============

```java
    ParticleEmitter fire = new ParticleEmitter("Emitter", Type.Triangle, 30);
    Material mat_red = new Material(assetManager, "Common/MatDefs/Misc/Particle.j3md");
    mat_red.setTexture("Texture", assetManager.loadTexture("Effects/Explosion/flame.png"));
    fire.setMaterial(mat_red);
    fire.setImagesX(2); fire.setImagesY(2); // 2x2 texture animation
    fire.setEndColor(  new ColorRGBA(1f, 0f, 0f, 1f));   // red
    fire.setStartColor(new ColorRGBA(1f, 1f, 0f, 0.5f)); // yellow
    fire.getParticleInfluencer().setInitialVelocity(new Vector3f(0,2,0));
    fire.setStartSize(1.5f);
    fire.setEndSize(0.1f);
    fire.setGravity(0,0,0);
    fire.setLowLife(0.5f);
    fire.setHighLife(3f);
    fire.getParticleInfluencer().setVelocityVariation(0.3f);
    rootNode.attachChild(fire);
```

Browse the full source code of all [effect
examples](https://github.com/jMonkeyEngine/jmonkeyengine/tree/master/jme3-examples/src/main/java/jme3test/effect)
here.

See also: [Effects Overview](../../jme3/advanced/effects_overview)

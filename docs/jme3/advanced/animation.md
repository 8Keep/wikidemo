In 3D games, you do not only load static 3D models, you also want to be
able to trigger animations in the model from the Java code.

Requirements
============

JME3 only loads and plays animated models, it does not create them.

What is required for an animated model? ([See also: Animation
terminology](../../jme3/terminology.xml#Animation))

1.  For each model, you have to segment the model into a skeleton
    (**bone rigging**).

2.  For each motion, you have to specify how the animation distorts
    parts of the model (**skinning**).

3.  For each animation, you have to specify a series of snapshots of how
    the bones are positioned (**keyframes**).

4.  One model can contain several animations. You give every animation a
    name when you save it in the mesh editor.

Unless you download free models, or buy them from a 3D artist, you must
create your animated models in an **external mesh editor** (for example,
Blender) yourself.

-   [Supported External File
    Types](../../jme3/features.xml#supported-external-file-types)

-   [Creating assets in Blender3D](../../jme3/external/blender)

-   [Video: Creating Worlds with Instances in
    Blender](http://www.youtube.com/watch?v=IDHMWsu_PqA)

What is required in your JME3-based Java class?

-   One Animation Control per animated model.

-   As many Animation Channels per Control as you need to play your
    animations. In simple cases one channel is enough, sometimes you
    need two or more Channels per model to play gestures and motions in
    parallel.

Code Samples
============

-   [TestSpatialAnim.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/model/anim/TestSpatialAnim.java)

-   [TestBlenderAnim.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/model/anim/TestBlenderAnim.java)

-   [TestBlenderObjectAnim.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/model/anim/TestBlenderObjectAnim.java)

-   [TestOgreAnim.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/model/anim/TestOgreAnim.java)

-   [TestOgreComplexAnim.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/model/anim/TestOgreComplexAnim.java)

-   [TestCustomAnim.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/model/anim/TestCustomAnim.java)

Controlling Animations
======================

The Animation Control
---------------------

Create one `com.jme3.animation.AnimControl` object in your JME3
application for each animated model that you want to control. You have
to register each animated model to one of these Animation Controls. The
control object gives you access to the available animation sequences in
the model.

```java
  AnimControl playerControl; // you need one Control per model
  Node player = (Node) assetManager.loadModel("Models/Oto/Oto.mesh.xml"); // load a model
  playerControl = player.getControl(AnimControl.class); // get control over this model
  playerControl.addListener(this); // add listener
```

Animation Channels
------------------

An Animation Control has several Animation Channels
(`com.jme3.animation.AnimChannel`). Each channel can play one animation
sequence at a time.

There often are situations where you want to run several animation
sequences at the same time, e.g. "shooting" while walking or "boxing"
while jumping. In this case, you create several channels, assign an
animation to each, and play them in parallel.

```java
  AnimChannel channel_walk = playerControl.createChannel();
  AnimChannel channel_jump = playerControl.createChannel();
  ...
```

To reset a Control, call `control.clearChannels()`.

Skeleton Control
----------------

The Skeleton control deforms a model according to a skeleton. Use it to
attach other geometries to your model such as clothing, weapons,
accessories or a particle emitter effect. You access the control the
same way as you would the AnimControl.

**Control resides in the main node of your model.**

```java
SkeletonControl skeletonControl;

skeletonControl = player.getControl(SkeletonControl.class);
```

**Control rsides somewhere other than main node.**

```java
player.depthFirstTraversal(new SceneGraphVisitorAdapter() {
    @Override
    public void visit(Node node) {
        if (node.getControl(SkeletonControl.class) != null) {
            skeletonControl = node.getControl(SkeletonControl.class);
        }
    }
});
```

Animation Control Properties
============================

The following information is available for an AnimControl.

+-----------------------------------+-----------------------------------+
| AnimControl Property              | Usage                             |
+===================================+===================================+
| createChannel()                   | Returns a new channel,            |
|                                   | controlling all bones by default. |
+-----------------------------------+-----------------------------------+
| getNumChannels()                  | The number of channels registered |
|                                   | to this Control.                  |
+-----------------------------------+-----------------------------------+
| getChannel(0)                     | Gets individual channels by index |
|                                   | number. At most                   |
|                                   | `getNumChannels()`.               |
+-----------------------------------+-----------------------------------+
| clearChannels()                   | Clear all channels in this        |
|                                   | control.                          |
+-----------------------------------+-----------------------------------+
| addListener(animEventListener)\   | Adds or removes listeners to      |
| r                                 | receive animation related events. |
| emoveListener(animEventListener)\ |                                   |
| clearListeners()                  |                                   |
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| AnimControl Property              | Usage                             |
+===================================+===================================+
| setAnimations(aniHashMap)         | Sets the animations that this     |
|                                   | AnimControl is capable of         |
|                                   | playing. The animations must be   |
|                                   | compatible with the skeleton      |
|                                   | given in the constructor.         |
+-----------------------------------+-----------------------------------+
| addAnim(boneAnim)\                | Adds or removes an animation from |
| removeAnim(boneAnim)              | this Control.                     |
+-----------------------------------+-----------------------------------+
| getAnimationNames()               | A String Collection of names of   |
|                                   | all animations that this Control  |
|                                   | can play for this model.          |
+-----------------------------------+-----------------------------------+
| getAnim("anim")                   | Retrieve an animation from the    |
|                                   | list of animations.               |
+-----------------------------------+-----------------------------------+
| getAnimationLength("anim")        | Returns the length of the given   |
|                                   | named animation in seconds        |
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| AnimControl Property              | Usage                             |
+===================================+===================================+
| getSkeleton()                     | The Skeleton object controlled by |
|                                   | this Control.                     |
+-----------------------------------+-----------------------------------+

Skeleton Control Properties
===========================

The following information is available for an SkeletonControl.

+-----------------------------------+-----------------------------------+
| SkeletonControl Property          | Usage                             |
+===================================+===================================+
| getSkeleton()                     | The Skeleton object controlled by |
|                                   | this Control.                     |
+-----------------------------------+-----------------------------------+
| getTargets()                      | The Skin objects controlled by    |
|                                   | this Control, as Mesh array.      |
+-----------------------------------+-----------------------------------+
| getAttachmentsNode("bone")        | Returns the attachment node of a  |
|                                   | bone. Attach models and effects   |
|                                   | to this node to make them follow  |
|                                   | this bone's motions.              |
+-----------------------------------+-----------------------------------+

Animation Channel Properties
============================

The following properties are set per AnimChannel.

+-----------------------------------+-----------------------------------+
| AnimChannel Property              | Usage                             |
+===================================+===================================+
| setLoopMode(LoopMode.Loop);       | From now on, the animation on     |
|                                   | this channel will repeat from the |
|                                   | beginning when it ends.           |
+-----------------------------------+-----------------------------------+
| setLoopMode(LoopMode.DontLoop);   | From now on, the animation on     |
|                                   | this channel will play once, and  |
|                                   | the freeze at the last keyframe.  |
+-----------------------------------+-----------------------------------+
| setLoopMode(LoopMode.Cycle);      | From now on, the animation on     |
|                                   | this channel will play forward,   |
|                                   | then backward, then again         |
|                                   | forward, and so on.               |
+-----------------------------------+-----------------------------------+
| setSpeed(1f);                     | From now on, play this animation  |
|                                   | slower (\<1f) or faster (\>1f),   |
|                                   | or with default speed (1f).       |
+-----------------------------------+-----------------------------------+
| setTime(1.3f);                    | Fast-forward or rewind to a       |
|                                   | certain moment in time of this    |
|                                   | animation.                        |
+-----------------------------------+-----------------------------------+

The following information is available for a channel.

+-----------------------------------+-----------------------------------+
| AnimChannel Property              | Usage                             |
+===================================+===================================+
| getAnimationName()                | The name of the animation playing |
|                                   | on this channel. Returns `null`   |
|                                   | when no animation is playing.     |
+-----------------------------------+-----------------------------------+
| getLoopMode()                     | The current loop mode on this     |
|                                   | channel. The returned             |
|                                   | com.jme3.animation enum can be    |
|                                   | LoopMode.Loop, LoopMode.DontLoop, |
|                                   | or LoopMode.Cycle.                |
+-----------------------------------+-----------------------------------+
| getAnimMaxTime()                  | The total length of the animation |
|                                   | on this channel. Or `0f` if       |
|                                   | nothing is playing.               |
+-----------------------------------+-----------------------------------+
| getTime()                         | How long the animation on this    |
|                                   | channel has been playing. It      |
|                                   | returns `0f` if the channel has   |
|                                   | not started playing yet, or a     |
|                                   | value up to getAnimMaxTime().     |
+-----------------------------------+-----------------------------------+
| getControl()                      | The AnimControl that belongs to   |
|                                   | this AnimChannel.                 |
+-----------------------------------+-----------------------------------+

Use the following methods to add or remove individual bones to an
AnimChannel. This is useful when you play two animations in parallel on
two channels, and each controls a subset of the bones (e.g. one the
arms, and the other the legs).

+-----------------------------------+-----------------------------------+
| AnimChannel Methods               | Usage                             |
+===================================+===================================+
| addAllBones()                     | Add all the bones of the model's  |
|                                   | skeleton to be influenced by this |
|                                   | animation channel. (default)      |
+-----------------------------------+-----------------------------------+
| addBone("bone1")\                 | Add a single bone to be           |
| addBone(bone1)                    | influenced by this animation      |
|                                   | channel.                          |
+-----------------------------------+-----------------------------------+
| addToRootBone("bone1")\           | Add a series of bones to be       |
| addToRootBone(bone1)              | influenced by this animation      |
|                                   | channel: Add all bones, starting  |
|                                   | from the given bone, to the root  |
|                                   | bone.                             |
+-----------------------------------+-----------------------------------+
| addFromRootBone("bone1")\         | Add a series of bones to be       |
| addFromRootBone(bone1)            | influenced by this animation      |
|                                   | channel: Add all bones, starting  |
|                                   | from the given root bone, going   |
|                                   | towards the children bones.       |
+-----------------------------------+-----------------------------------+

Playing Animations
==================

Animations are played by channel.

::: {.note}
Whether the animation channel plays continuously or only once, depends
on the Loop properties you have set.
:::

+-----------------------------------+-----------------------------------+
| Channel Method                    | Usage                             |
+===================================+===================================+
| cha                               | Start the animation named "Walk"  |
| nnel\_walk.setAnim("Walk",0.50f); | on channel channel\_walk.\        |
|                                   | The float value specifies the     |
|                                   | time how long the animation       |
|                                   | should overlap with the previous  |
|                                   | one on this channel. If set to    |
|                                   | 0f, then no blending will occur   |
|                                   | and the new animation will be     |
|                                   | applied instantly.                |
+-----------------------------------+-----------------------------------+

:::note
Use the AnimEventLister below to react at the end or start of an
animation cycle.
:::

Usage Example
-------------

In this short example, we define the space key to trigger playing the
"Walk" animation on channel2.

```java
  public void simpleInitApp() {
    ...
    inputManager.addMapping("Walk", new KeyTrigger(KeyInput.KEY_SPACE));
    inputManager.addListener(actionListener, "Walk");
    ...
  }

  private ActionListener actionListener = new ActionListener() {
    public void onAction(String name, boolean keyPressed, float tpf) {
      if (name.equals("Walk") && !keyPressed) {
        if (!channel2.getAnimationName().equals("Walk")) {
          channel2.setLoopMode(LoopMode.Loop);
          channel2.setAnim("Walk", 0.50f);
        }
      }
    }
  };
```

Animation Event Listener
========================

A jME3 application that contains animations can implement the
`com.jme3.animation.AnimEventListener` interface.

```java
public class HelloAnimation extends SimpleApplication
                     implements AnimEventListener { ... }
```

This optional Listener enables you to respond to animation start and end
events, `onAnimChange()` and `onAnimCycleDone()`.

Responding to Animation End
---------------------------

The `onAnimCycleDone()` event is invoked when an animation cycle has
ended. For non-looping animations, this event is invoked when the
animation is finished playing. For looping animations, this event is
invoked each time the animation loop is restarted.

You have access to the following objects:

-   The Control to which the listener is assigned.

-   The animation channel being played.

-   The name of the animation that has just finished playing.

```java
  public void onAnimCycleDone(AnimControl control, AnimChannel channel, String animName) {
    // test for a condition you are interested in, e.g. ...
    if (animName.equals("Walk")) {
      // respond to the event here, e.g. ...
      channel.setAnim("Stand", 0.50f);
    }
  }
```

Responding to Animation Start
-----------------------------

The `onAnimChange()` event is invoked every time before an animation is
set by the user to be played on a given channel (`channel.setAnim()`).

You have access to the following objects:

-   The Control to which the listener is assigned.

-   The animation channel being played.

-   The name of the animation that will start playing.

```java
  public void onAnimChange(AnimControl control, AnimChannel channel, String animName) {
    // test for a condition you are interested in, e.g. ...
    if (animName.equals("Walk")) {
      // respond to the event here, e.g. ...
      channel.setAnim("Reset", 0.50f);
    }
  }
```

JME3 cinematics (com.jme.cinematic) allow you to remote control nodes
and cameras in a 3D game: You can script and and play cinematic scenes.
You can use cinematics to create
[cutscenes](http://en.wikipedia.org/wiki/Cutscene) and movies/trailers
for your game. Another good use case is efficient "destruction physics:
Playing back prerecorded flying pieces of debris for demolitions is much
faster than calculating them with live physics.

Internally, Cinematics are implemented as
[AppStates](../../jme3/advanced/application_states).

Short overview of the cinematic process:

1.  Plan the script of your movie.\
    Write down a timeline (e.g. on paper) of which character should be
    at which spot at which time.

2.  Attach the scene objects that you want to remote-control to one
    Node.\
    This Node can be the rootNode, or a Node that is attached to the
    rootNode.

3.  Create a Cinematic object for this movie scene. The Cinematic will
    contain and manage the movie script.

4.  For each line in your script (for each keyframe in your timeline),
    add a CinematicEvent to the Cinematic.

Sample Code
===========

-   [TestCinematic.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/animation/TestCinematic.java)

How to Use a Cinematic
======================

A Cinematic is like a movie script for a node.

```java
Cinematic cinematic = new Cinematic(sceneNode, duration);
cinematic.addCinematicEvent(starttime1, event1);
cinematic.addCinematicEvent(starttime2, event2);
cinematic.addCinematicEvent(starttime2, event3);
...
stateManager.attach(cinematic);
```

1.  Create one Cinematic per scripted scene.

    -   `sceneNode` is the node containing the scene (can be the
        rootNode).

    -   `duration` is the duration of the whole scene in seconds.

    -   Each Cinematic is a set of CinematicEvents, that are triggered
        at a given moment on the timeline.

2.  Create one CinematicEvent for each line of your movie script.

    -   `event` is one motion of a moving object. You can add several
        events. More details below.

    -   `starttime` is the time when this particular cinematic event
        starts on the timeline. Specify the start time in seconds since
        the beginning of the cinematic.

3.  Attach the Cinematic to the SimpleApplication's stateManager.

4.  Play, stop and pause the Cinematic from your code.

+-----------------------------------+-----------------------------------+
| Method                            | Usage                             |
+===================================+===================================+
| cinematic.play()                  | Starts playing the cinematic from |
|                                   | the start, or from where it was   |
|                                   | paused.                           |
+-----------------------------------+-----------------------------------+
| cinematic.stop()                  | Stops playing the cinematic and   |
|                                   | rewinds it.                       |
+-----------------------------------+-----------------------------------+
| cinematic.pause()                 | Pauses the cinematic.             |
+-----------------------------------+-----------------------------------+

Events(CinematicEvents)
=======================

Just like a movie script consists of lines with instructions to the
actors, each Cinematic consists of a series of events.

Here is the list of available CinematicEvents that you use as events.
Each track remote-controls scene objects in a different way:

+-------------+--------------------------------------------------------+
| E           | Description                                            |
| vents(Cinem |                                                        |
| aticEvents) |                                                        |
+=============+========================================================+
| MotionEvent | Use a MotionEvent to move a Spatial non-linearly over  |
|             | time. A MotionEvent is based on a list of waypoints in |
|             | a MotionPath. The curve goes through each waypoint,    |
|             | and you can adjust the tension of the curve to modify  |
|             | the roundedness of the path. This is the motion        |
|             | interpolation you are going to use in most cases.      |
+-------------+--------------------------------------------------------+
| SoundEvent  | Use a SoundEvent to play a                             |
|             | [sound](../../jme3/advanced/audio) at a given time |
|             | for the given duration.                                |
+-------------+--------------------------------------------------------+
| GuiEvent    | Displays a [Nifty                                      |
|             | GUI](../../jme3/advanced/nifty_gui) at a given     |
|             | time for the given duration. Use it to display         |
|             | subtitles or HUD elements. Bind the Nifty GUI XML to   |
|             | the cinematic using                                    |
|             | `cinematic.bindUi(“path/to/nifty/file);`           |
+-------------+--------------------------------------------------------+
| Ani         | Use this to start playing a model                      |
| mationEvent | [animation](../../jme3/advanced/animation) at a    |
|             | given time (a character walking animation for example) |
+-------------+--------------------------------------------------------+

You can add custom events by extending AbstractCinematicEvent.

MotionEvent
-----------

A MotionEvent moves a Spatial along a complex path.

```java
MotionEvent events= new MotionEvent (thingNode, path);
```

Details of the constructor:

-   `thingNode` is the Spatial to be moved.

-   `path` is a complex
    [MotionPath](../../jme3/advanced/motionpath).

To create a MotionEvent, do the following:

1.  Create a MotinPath.

2.  Create a MotionEvent based on the MotionPath.

3.  Configure your MotionEvent (see below).

4.  Add the MotionEvent to a Cinematic.

+-----------------------------------+-----------------------------------+
| MotionEvent configuration method  | Usage                             |
+===================================+===================================+
| event.setLoopMode(LoopMode.Loop)  | Sets whether the animation along  |
|                                   | this path should loop             |
|                                   | (LoopMode.Loop) or play only once |
|                                   | (LoopMode.DontLoop).              |
+-----------------------------------+-----------------------------------+
| event.setDirectio                 | Sets the direction behavior type  |
| nType(MotionEvent.Direction.None) | of the controlled node.           |
|                                   | Direction.None deactivates this   |
|                                   | feature. You can choose from the  |
|                                   | following options: LookAt, Path,  |
|                                   | PathAndRotation, Rotation.        |
+-----------------------------------+-----------------------------------+
| event.setDirectionT               | The spatial turns (rotates) to    |
| ype(MotionEvent.Direction.LookAt) | keep facing a certain point while |
|                                   | moving. Specify the point with    |
|                                   | the `setLookAt()` method.         |
+-----------------------------------+-----------------------------------+
| event.setDirectio                 | The spatial always faces in the   |
| nType(MotionEvent.Direction.Path) | direction of the path while       |
|                                   | moving.                           |
+-----------------------------------+-----------------------------------+
| event.setDirectionType(Motio      | The spatial faces the direction   |
| nEvent.Direction.PathAndRotation) | of the path, plus an added        |
|                                   | rotation. Use together with the   |
|                                   | `setRotation()` method.           |
+-----------------------------------+-----------------------------------+
| event.setDirectionTyp             | The spatial spins (rotates) while |
| e(MotionEvent.Direction.Rotation) | moving. You describe the spin by  |
|                                   | a custom quaternion. Use together |
|                                   | with the `setRotation()` method.  |
+-----------------------------------+-----------------------------------+
| event.setLoo                      | The spatial always faces towards  |
| kAt(teapot.getWorldTranslation(), | this location. Use together with  |
| Vector3f.UNIT\_Y)                 | `MotionEvent.Direction.LookAt`.   |
+-----------------------------------+-----------------------------------+
| event.setRotation(quaternion)     | Sets the rotation. Use together   |
|                                   | with                              |
|                                   | `MotionEvent.Direction.Rotation`  |
|                                   | or                                |
|                                   | `Motion                           |
|                                   | Event.Direction.PathAndRotation`. |
+-----------------------------------+-----------------------------------+

:::note
Most likely you remote-control more than one object in your scene. Give
the events and paths useful names such as `dragonEvent`, `dragonPath`,
`heroEvent`, `heroPath`, etc.
:::

SoundEvent
----------

A SoundEventplays a sound as part of the cinematic.

```java
SoundEvent( audioPath, isStream, duration, loopMode )
```

Details of the constructor:

-   `audioPath` is the path to an audio file as String, e.g.
    "Sounds/mySound.wav.

-   `isStream` toggles between streaming and buffering. Set to true to
    stream long audio file, set to false to play short buffered sounds.

-   `duration` is the time that it should take to play.

-   `loopMode` can be LoopMode.Loop, LoopMode.DontLoop, LoopMode.Cycle.

GuiEvent
--------

A GuiEventshows or hide a NiftyGUI as part of a cinematic.

```java
GuiEvent( screen, duration, loopMode )
```

You must use this together with bindUI() to specify the Nifty GUI XML
file that you want to load:

```java
cinematic.bindUi("Interface/subtitle.xml");
```

Details of the constructor:

-   `screen` is the name of the Nifty GUI screen to load, as String.

-   `duration` is the time that it should take to play.

-   `loopMode` can be LoopMode.Loop, LoopMode.DontLoop, LoopMode.Cycle.

AnimationEvent
--------------

An AnimationEvent triggers an animation as part of a cinematic.

```java
AnimationEvent( thingNode, animationName, duration, loopMode )
```

Details of the constructor:

-   `thingNode` is the Spatial whose animation you want to play.

-   `animationName` the name of the animation stored in the animated
    model that you want to trigger, as a String.

-   `duration` is the time that it should take to play.

-   `loopMode` can be LoopMode.Loop, LoopMode.DontLoop, LoopMode.Cycle.

Camera Management
-----------------

There is a built in system for camera switching in Cinematics. It based
on CameraNode, and the cinematic just enable the given CameraNode
control at a given time.

First you have to bind a camera to the cinematic with a unique name.
You'll be provided with a CameraNode

```java
 CameraNode camNode = cinematic.bindCamera("topView", cam);
```

then you can do whatever you want with this camera node : place it so
that you have a the camera angle you'd like, attach it to a motion event
to have some camera scrolling, attach control of your own that give it
whatever behavior you'd like. In the above example, I want it to be a
top view of the scene looking at the world origin.

```java
 //set its position
 camNode.setLocalTranslation(new Vector3f(0, 50, 0));
 // set it to look at the world origin
 camNode.lookAt(Vector3F.ZERO, Vector3f.UNIT_Y);
```

Then i just have to schedule its activation in the cinematic. I want it
to get activated 3 seconds after the start of the cinematic so I just
have to do

```java
 cinematic.activateCamera(3,”topView”);
```

Customizations
--------------

You can extend individual CinematicEvents. The [SubtitleTrack.java
example](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/animation/SubtitleTrack.java)
shows how to extend a GuiTrack to script subtitles. See how the
subtitles are used in the [TestCinematic.java
example](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/animation/TestCinematic.java).

You can also create new CinematicEvent by extending
[AbstractCinematicEvent](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-core/src/main/java/com/jme3/cinematic/events/AbstractCinematicEvent.java).
An AbstractCinematicEvent implements the CinematicEvent interface and
provides duration, time, speed, etc... management. Look at the
[TestCinematic.java
example](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/animation/TestCinematic.java)
is to use this for a custom fadeIn/fadeOut effect in combination with a
com.jme3.post.filters.FadeFilter.

Interacting with Cinematics
===========================

CinematicEventListener
----------------------

```java
CinematicEventListener cel = new CinematicEventListener() {
  public void onPlay(CinematicEvent cinematic) {
    chaseCam.setEnabled(false);
    System.out.println("play");
  }

  public void onPause(CinematicEvent cinematic) {
    chaseCam.setEnabled(true);
    System.out.println("pause");
  }

  public void onStop(CinematicEvent cinematic) {
    chaseCam.setEnabled(true);
    System.out.println("stop");
  }
}
cinematic.addListener(cel);
```

Physics Interaction
-------------------

Upcoming.

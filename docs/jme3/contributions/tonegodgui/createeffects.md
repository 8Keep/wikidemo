Effect
======

Effects are used to graphically enhance your UI with transitions,
movement, image manipulation & audio.

Creating an Effect
------------------

```java
Effect effect = new Effect(
    Effect.EffectType.FadeIn, // The type of effect to use
    Effect.EffectEvent.Show, // The event that the effect is associated with
    2.2f // The duration of time over which the effect executes (2.2 seconds)
);
effect.setEffectElement(someElement); // The Element to fade into the screen

screen.getEffectManager().applyEffect(effect); // Tell the effect manager to execute
```

Creating Automated Effects
--------------------------

Some components have effects associated with them by default, for
instance buttons hover and pressed states. You can create effects for
these states (or replace the existing effects defined in the style XMLs)
like so:

```java
Effect effect = new Effect(
    Effect.EffectType.Pulse, // The type of effect to use
    Effect.EffectEvent.Hover, // The event that the effect is associated with
    2.2f // The duration of time over which the effect executes (2.2 seconds)
);
someButton.addEffect(effect);
```

At this point, the button will use the following effect anytime the user
mouseovers the button, as well as manage any setting required to execute
the effect properly.

:::note
Some effects require a blend image (to pulse to and from in the above
case)\
Some require a blend color\
Others require a direction

See below for details
:::

Methods Specific to Setting Up Effects
--------------------------------------

```java
effect.setElement(Element element);

// Used with Pulse, ImageSwap
effect.setBlendImage(Texture blendImage);

// Used with PulseColor, ColorSwap
effect.setColor(ColorRGBA blendColor);

// Used with SlideIn, SlideOut
effect.setEffectDirection(Effect.EffectDirection direction);

// Used with SlideTo
effect.setEffectDestination(Vector2f destination);

// Used with any effect
effect.setAudioFile(String styleTagID);
effect.setAudioVolume(float volume);
```

Other Methods Specific to Effect
--------------------------------

```java
effect.getElement();
effect.getDuration();
effect.getIsActive();
effect.getEffectType();
effect.getEffectEvent();
effect.getEffectDirection();
effect.getAudioFile();
effect.getAudioVolume();

// Use with hide effects.  **only use if you want the element associated
// with the effect to be destroy & garbage collected
effect.setDestroyOnHide(boolean destroyOnHide);
```

Enums
-----

Effect.EffectType

-   FadeIn

-   FadeOut

-   ZoomIn

-   ZoomOut

-   SlideIn

-   SlideOut

-   SpinIn

-   SpinOut

-   Pulse

-   ColorSwap

-   PulseColor

-   ImageSwap

-   Saturate

-   Desaturate

Effect.EffectEvent

-   GetFocus

-   LoseFocus

-   Show

-   Hide

-   Hover

-   Press

-   Release

-   TabFocus

-   LoseTabFocus

Effect.EffectDirection

-   Top

-   Bottom

-   Left

-   Right

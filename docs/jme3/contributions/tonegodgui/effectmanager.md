EffectManager
=============

The EffectManager can be used to execute Effects, BatchEffects and
EffectQueues against a single Element or a group of nested or separate
Elements. Effects include shader-based effects, geometry-based effects
and can include an audio event if UIAudio has been enabled.

The EffectManager is accessed through the Screen class, like so:

```java
screen.getEffectManager();
```

Methods specific to the EffectMAnager
-------------------------------------

```java
screen.getEffectManager().applyEffect(Effect effect);
screen.getEffectManager().applyEffectQueue(EffectQueue queue);
screen.getEffectManager().applyBatchEffect(BatchEffect batch);
```

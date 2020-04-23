DragElement Class
=================

Contrary to hearsay, the DragElement is \<strong\>NOT\</strong\> a male
Element dressed in women's clothing. It simply provides an easy-to-use
Element pre-configured for managing Drag & Drop interaction, with a few
extra features.

The DragElement class uses the single constructor of the Element class
and configures the Element to:

```java
Element.setIsDragDropDragElement(true);
Element.setIsMovable(true);
```

It also provides a way of managing multiple drop elements and reacting
to the appropriately.

Enable/Disable the DragElement
------------------------------

```java
dragEl.setIsEnabled(boolean isEnabled);
dragEl.getIsEnabled();
```

Managing Drop Elements
----------------------

```java
// Add an element as a valid drop Element
dragEl.addDropElement(Element element);

// Retrieve an element(s)
dragEl.getDropElements(); // Return all drop elements
dragEl.getDropElement(int index); // Returns a single drop element by index

// Remove drop elements
dragEl.removeDropElement(int index);
dragEl.removeDropElement(Element element);
```

Responding to Incorrect Drops
-----------------------------

```java
// Enable/disable springback (returns drag element to original position)
dragEl.setUseSpringBack(boolean useSpringBack);
dragEl.getUseSpringBack();

// Use SlideTo effect when springback is called
dragEl.setUseSpringBackEffect(boolean useSpringBackEffect);
dragEl.getUseSpringBackEffect();
```

Responding to Correct Drops
---------------------------

```java
//Position the DragElement in the center of drop element
dragEl.setUseLockToDropElementCenter(boolean lockToDropElementCenter);
dragEl.getUseLockToDropElementCenter();

// Use SlideTo effect when centering
dragEl.setUseLockToDropElementEffect(boolean useLockToDropElementEffect);
dragEl.getUseLockToDropElementEffect();
```

Abstract Event Methods
----------------------

```java
public abstract void onDragStart(MouseButtonEvent evt);
public abstract void onDragEnd(MouseButtonEvent evt, int index, Element dropElement);
```

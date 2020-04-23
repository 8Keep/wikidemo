ScrollArea class
================

Utilizes the standard 3 constructors as shown in the with the addition
of a single boolean:

-   isTextOnly -- appended to the end of the param list for each
    constructor

**NOTE:**+ The scrollArea implement Vertical Scrolling only. Why?
Because I was lazy. Eventually I will add Horizontal scrolling as well.+

\+ ScrollArea s can be implemented in two ways: Text Only, or an inner
element that can contain nested Elements.

1.  The text only version uses the Element setText() method for adding
    to the scrollable content.

2.  The inner Element method uses addScrollableChild() as well as
    setText() to add scrollable content

When using a scroll area for building Custom Controls, consider the
potential uses of the ScrollArea to alleviate unnecessary overhead. If
the text only version will suffice... USE IT! No reason to create the
extra Element if it will not be used.+

Methods specific to the ScrollArea class:
-----------------------------------------

```java
// Config methods
getIsTextOnly();
setPadding(float padding);
getPadding();
getScrollableHeight();

// Pointer to VScrollBar
getVScrollBar();

//Scrolling methods
scrollYTo(float y);
scrollYBy(float yInc);
scrollToTop();
scrollToBottom();
```

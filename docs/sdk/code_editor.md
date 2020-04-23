The Source Code Editor is the central part of the jMonkeyEngine SDK.
This documentation shows you how to make the most of the jMonkeyEngine
SDK's assistive features.

Note: Since the jMonkeyEngine SDK is based on the NetBeans Platform
framework, you can learn about certain jMonkeyEngine SDK features by
reading the corresponding NetBeans IDE tutorials (in the "see also
links).

Code Completion and Code Generation
===================================

While typing Java code in the source code editor, you will see popups
that help you to write more quickly by completing keywords, and
generating code snippets. Additionally, they will let you see the
javadoc for the classes you are working with.

![netbeans\_code\_completion.png](../sdk/netbeans_code_completion.png)

**Code Completion**

-   Complete keyword / method / variable: **Ctrl-Space**\
    Alternatively you can also use **Ctrl-\\**.

    -   Customize Code Completion options: Tools \> Options \> Editor \>
        Code Completion

-   Show expected parameters of this method in a tooltip: **Ctrl-P**

-   Complete any string (even non-Java) that has been used before:
    **(Shift-)Ctrl-K**

**Code Generation**

-   Auto-fix import statements: **Ctrl-Shift-I**

-   Auto-generate getters/setters, try/catch, equals/hashCode:
    **Alt-Insert**

    -   Customize code completion: Choose Tools \> Options \> Editor \>
        Code Completion

-   Auto-generate common code snippets such as loops, declarations,
    println, by typing the **template name + TabKey**

    -   Customize code templates: Choose Tools \> Options \> Editor \>
        Code Templates

-   Rename, move, or introduce methods, fields, and variables, without
    breaking the project: **Refactoring menu**

Semantic and Syntactic Coloring
===============================

![jmonkeyplatform-docu-5.png](../sdk/jmonkeyplatform-docu-5.png)

The text color in the editor gives you important hints how the compiler
will interpret what you typed, even before you compiled it.

Examples:

-   Java keywords are **blue**, variables and fields are **green**,
    parameters are **orange**.

-   Strikethrough means deprecated method or field.

-   Gray underline means unused variable or method.

-   Place the caret in a method or variable and all its ocurrences are
    marked **tan**.

-   Place the caret in a method's return type to highlight all exit
    points

-   and many more...

To customize Colors and indentation:

-   Tools \> Options \> Editor \> Formatting.

-   Tools \> Options \> Fonts and Colors.

Editor Hints and Quick Fixes (a.k.a. Lightbulbs)
================================================

Editor hints and quick fixes show as lightbulbs along the left edge of
the editor. They point out warnings and errors, and often propose useful
solutions!

-   Execute a quick fix: Place the caret in the line next to the
    lightbulb and press **Alt-Enter** (or click the lightbulb)

    -   Customize hints: Choose Tools \> Options \> Editor \> Hints.

Javadoc
=======

-   Place the caret above a method or a class that has no Javadoc, type

    ``` {.html}
    /**
    ```

    and press Enter: The editor generates skeleton code for a Javadoc
    comment.

-   Right-click the project in the Projects window and choose Generate
    Javadoc.

-   Right-click a file and choose Tools \> Analyze Javadoc

To display a javadoc popup in the editor, place the caret in a line and
press **Ctrl-Space** (Alternatively use **Ctrl-\\**).

-   If the javadoc popup doesn't work, make certain that

    -   You have the Java JDK documentation installed and set up:
        Tools \> Java Platforms

    -   You downloaded and set up javadoc for third-party libraries:
        Project properties \> Libraries \> Edit

Navigating the jME3 Source
==========================

When the JavaDoc does not deliver enough information, you can have a
look at the source of every method or object of jME3 that you use. Just
right-click the variable or method, select "Navigate \> Go to source..
and an editor will open showing you the source file of jME3.

Palette
=======

jmonkeyplatform-docu-4.png

Choose Windows \> Palette to open the context-sensitive Palette. The
jMonkeyEngine SDK provides you with jme3 code snippets here that you can
drag and drop into your source files.

-   Examples: Node and Model creation code snippets.

:::note
Choose Tools \> Add to Palette... from the menu to add your own code
snippets to the Palette. (not available yet in beta build)
:::

Keyboard Shortcuts
==================

Keyboard Shortcuts save you time when when you need to repeat common
actions such as Build&Run or navigation to files.

-   Go to File: **Alt-Shift-O**

-   Go to Type: **Ctrl-O**

-   Open in Projects / Files / Favorites window: **Ctrl-Shift-1 / 2 /
    3**

-   Build&Run the main class of the Project: **F6**

-   Run the open file: **Shift-F6**

-   Switch to Editor / Projects / Files / Navigator: **Ctrl-0 / 1 / 3 /
    7**

-   Indent code: **Ctrl-Shift-F**

By default, jMonkeyEngine uses the same [Editor
Shortcuts](http://netbeans.org/project_downloads/www/shortcuts-6.5.pdf)
as the NetBeans IDE, but you can also switch to an Eclipse Keymap, or
create your own set.

-   Customize keyboard shortcuts: Tools \> Options \> Keymap

Tips and Tricks
===============

-   To browse the physical file structure of your project, use the Files
    window: **Ctrl-2**

-   To open a file that is not part of a Java project, add it to the
    Favorites window: **Ctrl-3**

-   If you cannot find a particular menu item or option panel, use the
    IDE Search box in the top right! **Ctrl-i**

-   If a code block, class, or javadoc is quite long and you don't want
    to scroll over it, click the **+/-** signs to collapse (fold) the
    code block temporarily.

-   Press **F1** for Help

See also

-   [Code
    Assistance](http://netbeans.org/kb/docs/java/editor-codereference.html)

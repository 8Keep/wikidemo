Scope
=====

Localizing an application can mean several things:

-   At minimum you translate all messages and dialogs in the user
    interface to your target languages.

-   You should also translate the "read me, help, and other
    documentation.

-   Also translating web content related to the application makes sure
    international users find out about your localized game.

-   If you go the whole way of internationalization, you also "translate
    metaphors in icons or symbols used.\
    E.g. For localizations to right-to-left languages, you must also
    adjust the whole flow of the UI (order of menus and buttons).

There are tools that assist you with localizing Java Swing GUIs. jME3
applications do not typically have a Swing GUI, so those tools are not
of much help. Just stick to the normal Java rules about using Bundle
Properties:

Preparing the Localization
==========================

:::note
The jMonkeyEngine SDK supports opening and editing Bundle.properties
files. Also note the Tools \> Localization menu.
:::

To prepare the application for localization, you have to first identify
all hard-coded messages.

1.  Find every line in your jME3 game where you hard-coded message
    strings, e.g.

    ```java
    System.out.print("Hello World!");
    UiText.setText("Score: " + score);
    ```

2.  Create one file named `Bundle.properties` in each directory where
    there are Java file that contain messages.

3.  For every hard-coded message, you add one line to the
    `Bundle.properties` file: First specify a unique key that identifies
    this string; then an equal sign; and the literal string itself.

        greeting=Hello World!
        score.display=Score:

4.  In the source code, replace every occurence of a hard-coded message
    with the appropriate Resource Bundle call to its unique key:

    ```java
    System.out.print(ResourceBundle.getBundle("Bundle").getString("greeting"));
    UiText.setText(ResourceBundle.getBundle("Bundle").getString("score.display") + score);
    ```

The language used in the Bundle.properties files will be the default
language for your game.

Translating the Messages
========================

Each additional language comes in a set of files that is marked with a
(usually) two-letter suffix. Common locales are de for German, en for
English, fr for French, ja for Japanese, pt for Portuguese, etc.

To translate the messages to another language, for example, German:

1.  Make a copy of the `Bundle.properties` files.

2.  Name the copy `Bundle_de.properties` for German. Note the added
    suffix \_de.

3.  Translate all strings (text on the right side of the equal sign) in
    the `Bundle_de.properties` to German.

        greeting=Hallo Welt!
        score.display=Spielstand:

    ::: {.important}
    Do not modify any of the keys (text to the left of the equal sign)!
    :::

4.  To test the German localization, start the application from the
    command line with `-Duser.language=de`. Note the parameter `de`.

    :::note
    In the jMonkeyEngine SDK, you set this VM Option in the Project
    properties under Run. Here you can also save individual run
    configuraions for each language you want to test.
    :::

To get the full list of language suffixes use

```java
System.out.println(Arrays.toString(Locale.getISOLanguages()));
```

Which Strings Not to Translate
==============================

::: {.important}
In the Bundle.properties file, do not include any strings that are asset
paths, node or geometry names, input mappings, or material layers.
:::

-   Keep material layers:

    ```java
    mat.setTexture("ColorMap", tex);
    ```

-   Keep paths:

    ```java
    teapot = assetManager.loadModel("Models/Teapot/Teapot.obj");
    ```

-   Keep geometry and node names:

    ```java
    Geometry thing=new Geometry("A thing", mesh);
    Node vehicle = new Node("Vehicle");
    ```

-   Keep mappings:

    ```java
    inputManager.addMapping("Shoot", trigger);
    inputManager.addListener(actionListener, "Shoot");
    ```

Only localize messages and UI text!

Common Localization Problems
============================

Typical problems include:

-   Localized strings will be of vastly different lengths and will
    totally break your UI layout. ⇒ Test every localization.

-   Strings with variable text or numbers don't work the same in
    different languages. ⇒ Either work in grammatical
    cases/numbers/gender for each language, or use
    [gettext](http://www.gnu.org/software/gettext/manual/gettext.html#Plural-forms)
    or [ICU4J](http://userguide.icu-project.org/formatparse/messages).

-   The localizer only sees the strings, without any context. E.g. does
    "Search History mean "display the history of searches, or "search
    through the history? ⇒ Use clear key labels. Work closely with the
    localizers if they require extra info, and add that info as comments
    to the translation file.

-   Broken international characters ⇒ Make sure the files are saved with
    the same character encoding as the font file(s) you're using.
    Nowadays, that usually means UTF-8 since font files tend to come for
    Unicode.

-   Missing international characters ⇒ Make sure that there's a glyph
    for every needed character in your font, either by using more
    complete font files or by having the translation changed.

More Documentation
==================

<http://java.sun.com/developer/technicalArticles/Intl/ResourceBundles/>

<http://sourceforge.net/apps/mediawiki/nifty-gui/index.php?title=Localisation>

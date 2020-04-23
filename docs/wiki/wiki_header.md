All wiki documents use these header attributes. Optional attributes can
be left blank following the : colon symbol.

    = Enter Document Title Here
    :author:
    :revnumber:
    :revdate:
    :relfileprefix: ../../
    :imagesdir: ../..
    :experimental:
    :link-javadoc: https://javadoc.jmonkeyengine.org
    :stylesheet: twemoji-awesome.css
    ifdef::env-github,env-browser[:outfilesuffix: .adoc]

=
=

Mandatory. Title of your document.

:author:
========

Optional. Document author.

::: {.important}
Optional Author and Revision information immediately follows the header
title.
:::

:revnumber:
===========

Optional. Revision number.

:revdate:
=========

Optional. Revision Date

:relfileprefix:
===============

Optional. Enter a path to the "asciidoc" folder if using cross reference
links.

:::note
Use `Tree View` (ctrl+\\ or `View Toggle Tree View`) to locate the
"asciidoc" folder if using the [Atom editor](https://atom.io/).
:::

In the example below, "asciidoc" is two folders above the folder this
file is located in.

    :relfileprefix: ../../

:imagesdir:
===========

Optional. Enter a path to the \"images\" folder if using image links.

:::note
Use `Tree View` (ctrl+\\ or `View Toggle Tree View`) to locate the
"images" folder if using the [Atom editor](https://atom.io/).
:::

In the example below, "images" is two folders above the folder this file
is located in. Note the missing / forward slash.

    :imagesdir: ../..

:::note
A simple way to determine the location of the \"asciidoc\" and
\"images\" folder in the Atom editor is first save the file to its new
location, then in `Tree View` (ctrl+\\ or `View Toggle Tree View`), RMB
select the saved file and select Copy Project Path.

Temporarily paste this into your document to see where the "asciidoc"
folder is located.

For example: `src\docs\asciidoc\jme3\advanced\3d_models.adoc`

In this example, \"asciidoc\" is located two folders above the
\"advanced\" folder `3d_models.adoc` resides in.

You can find this same folder information using
[GitHub](https://github.com/jMonkeyEngine/wiki/blob/master/src/docs/asciidoc/jme3/advanced/3d_models.adoc).
:::

The "images" folder resides in the same folder as the "asciidoc" folder
so it has the same setting minus the / forward slash.

:experimental:
==============

Optional. Leave this blank, i.e do not set a value for this attribute if
using it. This is the experimental attribute that allows the use of
[User Interface
Macros](http://asciidoctor.org/docs/user-manual/#user-interface-macros).
You use these macros for creating keyboard shortcuts, displaying menu
selections and UI buttons.

:link-javadoc:
==============

Optional. This is the global attribute for the jME javadocs. You set
this if you are **overriding** the default setting from the
[build.gradle](https://github.com/jMonkeyEngine/wiki/blob/9d0e4fd07d019c3d41c6b9e64b2a1a5b7e0ed774/build.gradle#L39)
file. You can use the default `{link-javadoc}` attribute directly in any
document you write, as is shown in the following example, without adding
anything to the header.

    link:{link-javadoc}/com/jme3/app/state/BaseAppState.html[BaseAppState]

If you override the variable in the header of the document, that value
will be used instead.

:stylesheet: twemoji-awesome.css
================================

Optional. Adding this attribute will allow the use of emoji in the
document.

See: [Emoji Cheat Sheet](../wiki/emoji)

ifdef::env-github,env-browser\[:outfilesuffix: .adoc\]
======================================================

Mandatory. See [Navigating Between Source
Files](http://asciidoctor.org/docs/user-manual/#navigating-between-source-files)
in the AsciiDoctor user manual. Leave this as written.

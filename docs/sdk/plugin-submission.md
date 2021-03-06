::: {.important}
**IMPORTANT - (6th May 2014):** This page is for information purposes
only. This system is still being developed.
:::

If you wish to share your code with the jMonkey community, you can do so
easily by [submitting your project to
us](http://hub.jmonkeyengine.org/plugins/submit.php)! Once your
submission has been approved, your plugin will be listed on [the
submissions page](http://hub.jmonkeyengine.org/plugins/submissions.php)
and will be added to the plugin list within the next 24 hours (plugins
are compiled once a day on our build server). Your submission may be
refused if it is of bad taste, is empty, or is unrelated to jMonkey.

-   Create a `jmeplugin.properties` file in your project. The contents
    of this file is outlined below and **must** be present.

-   Upload your project to [GitHub](http://github.com) (See [GitHub's
    Hello World
    guide](https://guides.github.com/activities/hello-world/) if you
    need a quick introduction)

-   Submit your project to us at
    <http://hub.jmonkeyengine.org/plugins/submit.php>.

Configuring The Plugin Properties File
======================================

The plugin properties file `jmeplugin.properties` can be located
anywhere in your project, and contains the descriptive data that will be
displayed in the plugin list. You can modify the contents and location
of this file at any point in the future should you wish to do so. The
changes will be reflected the next time the plugin is compiled. Below is
an example of the contents of the `jmeplugin.properties` file. The
`DisplayName` and `Category` fields cannot be blank.

    DisplayName: TerrainPager
    Category: jme-plugin
    ShortDescription: A TerrainQuad based world generator and pager.
    LongDescription: A really awesome TerrainQuad based world generator.

Version Control
===============

When you submit your github repository to us you also have the
opportunity to choose a branch. This allows you to have multiple
versions of your code, which can be of great use. You can for example
have "experimental, nightly, testing and "stable branches. You can then
submit one of these branches to us. Our server will then only pull
changes from the given branch. This allows you to modify and push your
code to git, and only push changes to the branch you submitted when you
want that code to go live.

Foreword
========

Please understand that this tutorial gives you access to the latest
development release of the engine. Whilst many developers use this
release to work with, it is by definition still being developed. Expect
bleeding edge implementations to need work. If you don't want that kind
of hassle, please use the [stable releases](../jme3/maven).

Build jMonkeyEngine from Github source.
=======================================

Here is the basic outline of our goal:

1.  Install git client.

2.  Download jMonkeyEngine using git-client.

3.  Update jMonkeyEngine using git-client.

4.  Build jMonkeyEngine locally using gradle.

Repeat steps 3 and 4 whenever any changes have been committed to the
master branch.

1.  Install Git Client:\
    website: <https://git-scm.com/downloads>

Now we need to get the engine source using the git client and build it
locally. There are 3 batch files below provided for convenience
(download, update, build) and can all be placed in the same directory
and run without administrator privileges. For example, you can put all
of these files into `D:\programming\` - and the scripts will create,
download and update files in the `./jmonkeyengine/` sub-directory.

1.  Download the Engine: `download.bat`\
    This file downloads the engine into a dir called "jmonkey" using the
    git client.

2.  Update the Engine: `update.bat`\
    This file downloads any changed files from github using the git
    client.

3.  Build the Engine: `build.bat`\
    This file builds the engine using the gradle wrapper and places them
    in your local repository.

    ::: {.note}
    This is USER-SPECIFIC. My files are stored in
    `C:\Users\James\.m2\repository`
    :::

    <https://gist.github.com/jayfella/12af46c2fc4650640652b69b84b3dd01>

    **download.bat.**

        @echo off
        echo "downloading engine..."
        git clone -b master --single-branch --depth 10 https://github.com/jMonkeyEngine/jMonkeyEngine/ jmonkeyengine

    **build.bat.**

        @echo off

        echo "Building JME engine to your local maven repo...."
        cd jmonkeyengine
        gradlew.bat -PbuildJavaDoc=true install
        cd ..

        cmd /k

    **update.bat.**

        @echo off
        cd jmonkeyengine
        git pull
        cd ..
        cmd /k

Using the built engine in your game
===================================

Add the maven plugin to your build script, and put the mavenLocal()
repository in your list of repositories. Then just reference the
dependencies as you would normally. Note that we are now using version
3.2.+ of the engine.

    apply plugin: 'maven'

    ext.jmeVersion = "[3.2,)"

    repositories {
        mavenLocal()
        jcenter()
    }

    dependencies {
        compile "org.jmonkeyengine:jme3-core:$jmeVersion"
        compile "org.jmonkeyengine:jme3-desktop:$jmeVersion"
        compile "org.jmonkeyengine:jme3-lwjgl:$jmeVersion"
    }

Learn more about:

-   [Setting up JME3 on the commandline
    (generic)](../jme3/simpleapplication_from_the_commandline).

-   [Building JME3 from the sources with
    NetBeans](../jme3/build_jme3_sources_with_netbeans)

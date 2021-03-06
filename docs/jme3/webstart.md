When you [use the jMonkeyEngine SDK to deploy your
application](../sdk/application_deployment), you can configure the
project to build files required for WebStart automatically. If you use
another IDE, or work on the command line, use the following tips to set
up WebStart correctly:

Problem Statement
=================

**Problem:**

When running under WebStart, jMonkeyEngine may not have permission to
extract the native libraries to the current directory.

\*Solution: \*

You can instruct WebStart to load the native libraries itself using the
JNLP file, and then instruct jME3 not to try to do so itself.

Simple way
==========

You can import the LWJGL JNLP extension directly into your extension,
however be aware that your application will break whenever they update
their jars. Simply add this line to your JNLP:

``` {.xml}
<extension name="lwjgl" href="http://lwjgl.org/webstart/2.7.1/extension.jnlp" />
```

Reliable way
============

Native jars
-----------

You can download the LWJGL native jars from their site, or to ensure
you're using the exact same version as bundled with your jME3 release,
make your own:

    mkdir tmp
    cd tmp
    jar xfv ../jME3-lwjgl-natives.jar
    cd native
    for i in *; do
      cd $i
      jar cfv ../../native_$i.jar .
      cd ..
    done

For Windows:

    @echo off
    md tmp
    cd tmp
    "%JDK_HOME%\bin\jar" -xfv ..\jME3-lwjgl-natives.jar
    cd native
    for /D %%i in ("*") do (
      cd %%i
      "%JDK_HOME%\bin\jar" -cfv ..\..\native_%%i%.jar .
      cd ..
    )
    cd ..

Remember to sign all the jar files and move them into the right place
from the tmp directory.

JNLP file
---------

Add the following to your JNLP file:

``` {.xml}
  <resources os="Windows">
    <j2se version="1.4+"/>
    <nativelib href="native_windows.jar"/>
  </resources>
  <resources os="Linux">
    <j2se version="1.4+"/>
    <nativelib href="native_linux.jar"/>
  </resources>
  <resources os="Mac OS X">
    <j2se version="1.4+"/>
    <nativelib href="native_macosx.jar"/>
  </resources>
```

Set low-permissions mode
------------------------

In your main() method, if running under WebStart, tell jME3 it is
running in a low-permission environment so that it doesn't try to load
the natives itself:

```java
  public static void main(String[] args)
  {
      if (System.getProperty("javawebstart.version") != null) {
        JmeSystem.setLowPermissions(true);
      }
```

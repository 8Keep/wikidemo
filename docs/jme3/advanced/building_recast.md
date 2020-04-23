jNavigation is Java jME port for Recast Navigation written in C++. The
project has two parts:

1.  [jNavigationNative](https://github.com/QuietOne/jNavigation-native)
    contains Recast Navigation library and C++ wrapper for java

2.  [jNavigation](https://github.com/QuietOne/jNavigation) is Java
    project that uses jNavigationNative and is the project that the end
    user will use

If there is need for updating Recast Navigation from native side, there
are two kinds of updating bindings:

1.  only updating methods as the Recast made more efficient or more
    precise

2.  adding new methods for Recast use

Updating methods
================

Only updating methods are easy. The requirements needed:

-   C++ compiler

The jNavigationNative that has following folders and files (it has more,
but these are the most important for now):

-   Recast

    -   Include

    -   Source

-   README.md

-   Recast\_wrap.cxx - Java - C++ wrapper

Updating the methods is only the matter of putting all headers from
Recast Navigation to Include folder, source to Source folders, and then
building the project.

As author of this project used the NetBeans 7.4 for building the
project, the following instruction is included, if the building from
terminal doesn't work.

1.  Setting [parameters for NetBeans
    compiler](https://netbeans.org/kb/docs/cnd/beginning-jni-linux.html)

2.  Remove all headers from Header Files

3.  Remove all source files **EXCEPT Recast\_wrap.cxx** from Source
    Files

4.  Right click on Header files, select `Add Existing Item…` or
    `Add Existing Items from Folders…` and select needed headers

5.  Right click on Source files, select `Add Existing Item…` or
    `Add Existing Items from Folders…` and select needed source files

6.  Build

7.  Add built project to jNavigation project

8.  Build jNavigation project

Adding new methods from native side
-----------------------------------

This is more complicated process and it includes the all work done in
NetBeans mentioned in previous section. After that, there are two ways
to add new function:

-   manually adding code to wrapper

-   creating new wrapper with [SWIG](http://swig.org/)

### Manually adding code to wrapper

Example of method in wrapper:

```java
SWIGEXPORT jint JNICALL Java_com_jme3_ai_navigation_utils_RecastJNI_rcIntArray_1size(JNIEnv *jenv, jclass jcls, jlong jarg1, jobject jarg1_) {
 ...
}
```

The Recast\_wrap.cxx uses SWIG wrapper so for declaring method in
wrapper you must first use the keyword `SWIGEXPORT` then returning type
(for more information on returning types see
[link](http://docs.oracle.com/javase/1.5.0/docs/guide/jni/spec/types.html)),
then again keyword `JNICALL` and then as the name of method
`Java_com_jme3_ai_navigation_utils_RecastJNI_` + `name of class` +
`name of method`, after that, there goes list of parameters needed for
the function (for more information see
[link](http://docs.oracle.com/javase/7/docs/technotes/guides/jni/spec/functions.html)).
In body of method write how the function should be used.

After adding method to wrapper, compile project and add it to
jNavigation. In jNavigation project in class
`com.jme3.ai.navigation.utils.RecastJNI.java` add native method, and
after that add in class from which you would like to use this method to
call this native method. It seems a little bit more complicated than it
should be, but this also for support for updating native side with SWIG.

### Creating new wrapper with SWIG

In some temporary folder add all headers. It shouldn't contain any
subfolders.

The following script was used for generating wrapper:

    %module Recast
    %include "carrays.i"
    %array_class(double, DoubleArray);
    %array_class(float, FloatArray);
    %array_class(int, IntArray);
    %array_class(unsigned char, UCharArray);
    %array_class(unsigned short, UShortArray);
    %array_class(unsigned int, UIntArray);
    %array_class(long, LongArray);
    %array_class(bool, BooleanArray)

    %{
    #include "DetourAlloc.h"
    #include "DetourAssert.h"
    #include "DetourCommon.h"
    #include "DetourCrowd.h"
    #include "DetourLocalBoundary.h"
    #include "DetourMath.h"
    #include "DetourNavMesh.h"
    #include "DetourNavMeshBuilder.h"
    #include "DetourNavMeshQuery.h"
    #include "DetourNode.h"
    #include "DetourObstacleAvoidance.h"
    #include "DetourPathCorridor.h"
    #include "DetourPathQueue.h"
    #include "DetourProximityGrid.h"
    #include "DetourStatus.h"
    #include "DetourTileCache.h"
    #include "DetourTileCacheBuilder.h"
    #include "Recast.h"
    #include "RecastAlloc.h"
    #include "RecastAssert.h"
    %}

    /* Let's just grab the original header file here */
    %include "DetourAlloc.h"
    %include "DetourAssert.h"
    %include "DetourCommon.h"
    %include "DetourCrowd.h"
    %include "DetourLocalBoundary.h"
    %include "DetourMath.h"
    %include "DetourNavMesh.h"
    %include "DetourNavMeshBuilder.h"
    %include "DetourNavMeshQuery.h"
    %include "DetourNode.h"
    %include "DetourObstacleAvoidance.h"
    %include "DetourPathCorridor.h"
    %include "DetourPathQueue.h"
    %include "DetourProximityGrid.h"
    %include "DetourStatus.h"
    %include "DetourTileCache.h"
    %include "DetourTileCacheBuilder.h"
    %include "Recast.h"
    %include "RecastAlloc.h"
    %include "RecastAssert.h"

    %pragma(java) jniclasscode=%{
      static {
        System.load("Recast");
      }
    %}

If there are more headers at some moment, include them in both places.

1.  Save script as Recast.i into temp folder with rest of the headers

2.  Install SWIG if not already

3.  Open terminal and go to folder where the script is

4.  Execute command `swig -c++ -java Recast.i`

5.  Now SWIG will generate Java classes and new Recast\_wrap.cxx

6.  Recast\_wrap.cxx put in jNavigationNative with new headers and
    source files, as previously mentioned

7.  Build that project

8.  For jNavigation side, put only new methods in RecastJNI, and use
    where they are being used. For that you can see in Java class that
    are build with SWIG.

9.  If method uses some explicit SWIG type, try to use some method for
    converting it into jME type, or similar. You can probably find
    something in package `com.jme3.ai.navigation.utils`

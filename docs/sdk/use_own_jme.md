How to integrate your own jME3 compile in jMonkeyEngine SDK projects
====================================================================

1.  [Download jme3
    project](../jme3/build_jme3_sources_with_netbeans)

2.  Make your changes

3.  Compile jme3 project

4.  Go to `Tools Libraries`

5.  Press New Library

6.  Name it "jme3-modified"

7.  Press Add Jar/Folder

8.  Select all JAR files from the `dist` dir of the compiled jme3
    version

9.  Add the `src` folder of the jme3 project in the "sources" tab

10. Optionally javadoc in the "javadoc" tab

11. Press OK

12. RMB select your project and choose "Properties"

13. Select "Libraries" to the left

14. Remove the "jme3" library

15. Press Add Library and select the "jme3-modified" library

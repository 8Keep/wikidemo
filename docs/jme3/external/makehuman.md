Here's the procedure:

1.  If you haven't already, install the jMonkeyEngine3 SDK, launch the
    IDE, and create a JME3 project.

2.  Install the MakeHuman application, the Blender application, and the
    MakeHuman Blender tools.

    -   Download the latest stable version of the MakeHuman application
        from <http://www.makehuman.org/>

    -   Download the latest stable MakeHuman Blender tools from
        <http://www.makehuman.org/>

    -   Download the corresponding (not necessarily the latest) version
        of the Blender application from <http://www.blender.org/>

    -   Install the MakeHuman application as directed by
        <http://www.makehuman.org/doc/node/install_makehuman.html>

    -   Install the Blender application.

    -   Install the MakeHuman tool scripts to Blender's scripts
        directory. On Windows 7 machines, this involves unzipping the
        archive to
        `C:\Users\username\AppData\Roaming\Blender Foundation\Blender\version\scripts\addons`

    -   Launch the Blender application, open a `User Preferences`
        editor, activate the `Addons` tab, and check the box labelled
        `Import-Export:Import:MakeHuman(.mhx)`.

    -   Click the `Save User Preferences` button.

3.  Generate an .mhx file containing a human figure.

    -   Launch the MakeHuman application.

    -   Configure a human figure using the `Modelling`, `Geometries`,
        and `Materials` tabs.

    -   On the `Pose/Animate` tab, select a rig for animation if
        desired.

    -   Under the `Files` tab, select the `Save` sub-tab.

    -   Save to a file (in case you need to make changes later). Note
        that there are two `Save` buttons: one in the `Save As` window
        which merely sets a pathname and another in the main window. The
        .mhm file isn't written until you click the second `Save`
        button.

    -   Under the `Files` tab, select the `Export` sub-tab.

    -   Select `Blender exchange (mhx)` as the export format.

    -   Export to a file. Again, there's a `Save` button in the Save As
        window which merely sets a pathname. The .mhx file isn't written
        until you click the `Export` button in the main window.

    -   You may now close the MakeHuman application.

4.  Convert the .mhx file to a .blend file:

    -   Launch the Blender application and delete the initial cube.

    -   From the `Info` editor's toolbar, select
        `File Import MakeHuman(.mhx)`.

    -   In the `File Browser`, select your .mhx file and click the
        `Import MHX` button.

    -   After the import completes, you can view and edit the model
        using a `3D View` editor.

    -   From the `Info` editor's toolbar, select `File Save As`.

    -   Select a pathname in the assets/Models folder of your JME3
        project.

    -   Clicking the `Save As Blender File` button in the `File Browser`
        writes the file.

    -   You may now close the Blender application.

5.  Convert the .blend file to a .j3o file no longer works, instead,
    export the file using a [Supported External File
    Type](../../jme3/features.xml#supported-external-file-types):

    -   Launch the jMonkeyEngine3 IDE.

    -   Open your JME3 project.

    -   Under the `Project Assets` node of your project, open the
        `Models` folder.

    -   Right-click on your exported file type and select
        `Convert to j3o binary`.

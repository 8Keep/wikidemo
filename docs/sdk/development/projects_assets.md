The SDK heavily uses the systems provided by the base platform for the
handling of assets and projects and extends the system with jME3
specific features.

ProjectAssetManager
===================

All AssetDataObjects and SceneExplorerNodes allow access to the
ProjectAssetManager of the project they were loaded from.

```java
ProjectAssetManager pm = node.getLookup().lookup(ProjectAssetManager.class)
```

The ProjectAssetManager is basically a normal DesktopAssetManager for
each project with some added functionality:

-   Access to the FileObject of the assets folder of the project to load
    and save data

-   Convert absolute file paths to relative asset paths and vice versa

-   Get lists of all textures, materials etc. in the project

-   more convenient stuff.. :)

AssetDataObject
===============

Most "files that you encounter in the SDK come in the form of
AssetDataObjects. All Nodes that you encounter contain the
AssetDataObject they were loaded from. It provides not just access to
the FileObject of the specific file but also an AssetData object that
allows access to jME specific properties and data. The AssetData object
also allows loading the object via the jME3 assetManager. It is
accessible via the lookup of the Node or AssetDataObject:

```java
assetDataObject.getLookup().lookup(AssetData.class)
```

New Asset File Types
====================

When you add a new file type for a model format or other asset file that
can be loaded in jME3 you can start by using new file type template
(`menu:New File[Module Development>File Type`\]). Change the DataObject
to extend AssetDataObject (general), SpatialAssetDataObject (some type
of model) or BinaryModelDataObject (basically a j3o savable file). And
possibly override the loadAsset and saveAsset methods which are used by
the AssetData object to return the correct AssetKey type (needed for
import properties to work).

```java
public class BlenderDataObject extends SpatialAssetDataObject {
    public BlenderDataObject(FileObject pf, MultiFileLoader loader) throws DataObjectExistsException, IOException {
        super(pf, loader);
    }
}
```

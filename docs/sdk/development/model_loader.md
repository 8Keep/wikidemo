You can create custom model importers for the jMonkeyEngine SDK. The SDK
supports NBM plugins.

1.  [Create an NBM
    plugin](http://platform.netbeans.org/tutorials/nbm-filetype.html)

2.  Add importer jar file (wrap jar file)

3.  Add filetype (Template)

4.  Change DataObject to extend SpatialAssetDataObject

5.  Implement getAssetKey(): if(!assetKey instanceof MyKeyType){assetKey
    = new MyKeyType(oldKey);} return key;

6.  Maybe implement loadAsset method in DataObject (if necessary, most
    model formats should load normally via the loader)

7.  Create AssetManagerConfigurator

See also:

-   [Projects and Assets](../../sdk/development/projects_assets)

-   <http://platform.netbeans.org/tutorials/nbm-filetype.html>

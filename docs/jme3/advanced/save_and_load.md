Spatials (that is Nodes and Geometries) can contain audio and light
nodes, particle emitters, controls, and user data (player score, health,
inventory, etc). For your game distribution, you must convert all
original models to a faster binary format. You save individual Spatials
as well as scenes using `com.jme3.export.binary.BinaryExporter`.

The jMonkeyEngine's binary file format is called `.j3o`. You can
convert, view and edit .j3o files and their materials in the
jMonkeyEngine [SDK](../../sdk) and compose scenes (this does not
include editing meshes). For the conversion, you can either use the
BinaryExporters, or a context menu in the SDK.

::: {.important}
The jMonkeyEngine's serialization system is the
`com.jme3.export.Savable` interface. JME3's BinaryExporter can write
standard Java objects, JME3 objects, and primitive data types that are
included in a [spatial's user data](../../jme3/advanced/spatial). If
you use custom game data classes, see below how to make them "Savable.
:::

There is also a com.jme3.export.xml.XMLExporter and
com.jme3.export.xml.XMLImporter that similarly converts jme3 spatials to
an XML format. But you wouldn't use that to load models at runtime
(quite slow).

Sample Code
===========

-   [TestSaveGame.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/tools/TestSaveGame.java)

Saving a Node
=============

The following example overrides `stop()` in SimpleApplication to save
the rootNode to a file when the user quits the application. The saved
rootNode is a normal .j3o binary file that you can open in the
[SDK](../../sdk).

::: {.warning}
Note that when you save a model that has textures, the references to
those textures are stored as absolute paths, so when loading the j3o
file again, the textures have to be accessible at the exact location
(relative to the assetmanager root, by default the `assets` directory)
they were loaded from. This is why the SDK manages the conversion on the
project level.
:::

```java
  /* This is called when the user quits the app. */
  @Override
  public void stop() {
    String userHome = System.getProperty("user.home");
    BinaryExporter exporter = BinaryExporter.getInstance();
    File file = new File(userHome+"/Models/"+"MyModel.j3o");
    try {
      exporter.save(rootNode, file);
    } catch (IOException ex) {
      Logger.getLogger(Main.class.getName()).log(Level.SEVERE, "Error: Failed to save game!", ex);
    }
    super.stop(); // continue quitting the game
  }
```

Loading a Node
==============

The following example overrides `simpleInitApp()` in SimpleApplication
to load `Models/MyModel.j3o` when the game is initialized.

```java
  @Override
  public void simpleInitApp() {
     String userHome = System.getProperty("user.home");
     assetManager.registerLocator(userHome, FileLocator.class);
     Node loadedNode = (Node)assetManager.loadModel("Models/MyModel.j3o");
     loadedNode.setName("loaded node");
     rootNode.attachChild(loadedNode);
  }
```

:::note
Here you see why we save user data inside spatials -- so it can be saved
and loaded together with the .j3o file. If you have game data outside
Spatials, you have to remember to save() and load(), and get() and set()
it yourself.
:::

Custom Savable Class
====================

JME's BinaryExporter can write standard Java objects (String, ArrayList,
buffers, etc), JME objects (Savables, such as Material), and primitive
data types (int, float, etc). If you are using any custom class together
with a Spatial, then the custom class must implement the
`com.jme3.export.Savable` interface. There are two common cases where
this is relevant:

-   The Spatial is carrying any [Custom
    Controls](../../jme3/advanced/custom_controls).\
    Example: You used something like `mySpatial.addControl(myControl);`

-   The Spatial's user data can contain a custom Java object.\
    Example: You used something like
    `mySpatial.setUserData("inventory", myInventory);`

If your custom classes (the user data or the Controls) do not implement
Savable, then the BinaryImporter/BinaryExporter cannot save the Spatial!

So every time you create a custom Control or custom user data class,
remember to implement Savable:

```java
import com.jme3.export.InputCapsule;
import com.jme3.export.JmeExporter;
import com.jme3.export.JmeImporter;
import com.jme3.export.OutputCapsule;
import com.jme3.export.Savable;
import com.jme3.material.Material;
import java.io.IOException;

public class MyCustomClass implements Savable {
    private int      someIntValue;   // some custom user data
    private float    someFloatValue; // some custom user data
    private Material someJmeObject;  // some custom user data

    ...
    // your other code...
    ...

    public void write(JmeExporter ex) throws IOException {
        OutputCapsule capsule = ex.getCapsule(this);
        capsule.write(someIntValue,   "someIntValue",   1);
        capsule.write(someFloatValue, "someFloatValue", 0f);
        capsule.write(someJmeObject,  "someJmeObject",  new Material());
    }

    public void read(JmeImporter im) throws IOException {
        InputCapsule capsule = im.getCapsule(this);
        someIntValue   = capsule.readInt(    "someIntValue",   1);
        someFloatValue = capsule.readFloat(  "someFloatValue", 0f);
        someJmeObject  = capsule.readSavable("someJmeObject",  new Material());
    }
}
```

To make a custom class savable:

1.  Implement `Savable` and add the `write()` and `read()` methods as
    shown in the example above.

2.  Do the following for each non-temporary class field:

    -   Add one line that `write()`s the data to the JmeExport output
        capsule.

        -   Specify the variable to save, give it a String name (can be
            the same as the variable name), and specify a default value.

    -   Add one line that `read…()`s the data to the JmeImport input
        capsule.

        -   On the left side of the assignment, specify the class field
            that you are restoring

        -   On the right side, use the appropriate `capsule.read…()`
            method for the data type. Specify the String name of the
            variable (must be the same as you used in the `write()`
            method), and again specify a default value.

::: {.important}
As with all serialization, remember that if you ever change data types
in custom classes, the updated read() methods will no longer be able to
read your old files. Also there has to be a constructor that takes no
Parameters.
:::

Default Value
=============

The default value plays an important role in what data is saved to file.

**write().**

```java
public void write(int value, String name, int defVal) throws IOException {
    if (value == defVal)
        return;
    writeAlias(name, BinaryClassField.INT);
    write(value);
}
```

The write methods of the
[BinaryOutputCapsule.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/445f7ed010199d30c484fe75bacef4b87f2eb38e/jme3-core/src/plugins/java/com/jme3/export/binary/BinaryOutputCapsule.java)
class do not write the `defVal` to file. Instead, they check to see if
`value` is equal to `defVal`, and if so, will not write anything at all.

There are very good reasons to do this.

1.  It takes less space if everything is a default value.

2.  You may decide on new defaults later and your objects will
    automatically upgrade if they didn't have specifically overridden
    values.

**read().**

```java
public int readInt(String name, int defVal) throws IOException {
    BinaryClassField field = cObj.nameFields.get(name);
    if (field == null || !fieldData.containsKey(field.alias))
        return defVal;
    return ((Integer) fieldData.get(field.alias)).intValue();
}
```

When reading your saved file, the
[BinaryInputCapsule.java](https://github.com/jMonkeyEngine/jmonkeyengine/blob/445f7ed010199d30c484fe75bacef4b87f2eb38e/jme3-core/src/plugins/java/com/jme3/export/binary/BinaryInputCapsule.java)
class will see that the `name` field is `null` and this is when the
defVal is set.

:::note
If you rely on the compiler to initialize class or instance variables
for you, this can lead too unintended consequences.

For example:

```java
capsule.write(someIntValue,   "someIntValue",   1);
```

If you let the compiler initialize `someIntValue`, it will initialize to
zero and if it's not changed after initialization, zero will be written
to file.

```java
someIntValue   = capsule.readInt(    "someIntValue",   1);
```

Now when `read` is called, it will see the "someIntValue" name and set
the `someIntValue` variable to zero. Not one, as you were expecting.
Keep this in mind when using Savable.
:::

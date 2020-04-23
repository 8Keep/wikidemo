This framework is intended to run every kind of block world the user
wants - This includes different chunk sizes, block sizes, materials and
a lot more.

Those attributes are handled by an instance of the class
**CubesSettings**. You will have to specify such an object when creating
your block world:

```java
//You have to specify a valid application, the framework will use e.g. its assetManager
CubesSettings settings = new CubesSettings(application);
```

Now, you can set all needed options via `get`/`set`-methods:

+-------------+---------+---------------------------------------------+
| Setting     | Default | Usage                                       |
|             | Value   |                                             |
+=============+=========+=============================================+
| `           | 3       | The side length of a block in world units.  |
| Block Size` |         |                                             |
+-------------+---------+---------------------------------------------+
| `Chunk      | 16      | The amount of blocks, that are contained in |
| Size X/Y/Z` | /256/15 | one chunk in the given direction.           |
+-------------+---------+---------------------------------------------+
| `Bloc       | null    | The material that will be used by the       |
| k Material` |         | chunks\' geometries. You can load also load |
|             |         | a default blockworld-fitting material by    |
|             |         | calling                                     |
|             |         | `setDef                                     |
|             |         | aultBlockMaterial(String textureFilePath)`. |
+-------------+---------+---------------------------------------------+
| `Textures   | 16      | The amount of textures in your image file,  |
|  Count X/Y` |         | on the given axis.                          |
+-------------+---------+---------------------------------------------+

:::note
You can generate valid test settings by calling
`CubesTestAssets.getSettings(application)`.
:::

::: {.warning}
At the moment, changes to the settings won't affect the block world at
"runtime", i.e. **after** it's created.
:::

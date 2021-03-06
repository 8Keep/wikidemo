Whenever things have to be saved and loaded again (e.g. sending a map
from the server to the clients), people talk about "serialization -
Basically, this means breaking a complex structure (like our block
world) down to a simple row of data.

"Cubes supports bit-serializing - You can export your block terrain at
any time to a row of bits, most of the time handled as **byte\[\]**
array. Later, the complete terrain can be reconstructed by those raw
bytes.

Serializing
===========

So, how do we convert a complete block world to bytes?

```java
byte[] serializedTerrainData = CubesSerializer.writeToBytes(blockTerrain);
```

Well... That was pretty easy, or? You don't have to worry, *how* your
terrain is magically pressed in the data, the framework directly offers
you the bytes, that you need to reconstruct the whole thing.

Data Transport
==============

Actually, this part is on your own - There are many ways how to get data
from one place to another and they all depend on your application.
You'll have to find out how to get those bytes to the place where you
want to rebuild the terrain - Make sure, you read the possible scenarios
listed below.

Unserializing
=============

At this point, you have successfully received the bytes and want to
recreate your awesome block world - This is how you do it:

```java
//The old blockTerrain will be completely replaced!
//(Even the chunks count will be adjusted)
BlockTerrainControl blockTerrainClone = new BlockTerrainControl(new Vector3Int());
CubesSerializer.readFromBytes(blockTerrain, serializedTerrainData);
```

This screenshot shows a terrain and it's unserialized clone - Note, that
the blocks have to be registered in the **same order** on both sides in
order to reproduce the same terrain!

![test\_serialize.png](http://destroflyer.mania-community.de/other/imagehost/cubes/test_serialize.png)

Possible scenarios
==================

The most typical examples for serializing are the following:

+----------------------+----------------------+-----------------------+
| Application          | Data Transport       | Resources             |
+======================+======================+=======================+
| Networking           | The bytes are sent   | [Spidermonkey]        |
|                      | in a message over    | (../../../../jme3/adv |
|                      | the network - The    | anced/networking) |
|                      | client receives them |                       |
|                      | and can rebuild the  |                       |
|                      | block world.         |                       |
+----------------------+----------------------+-----------------------+
| Files                | The bytes are saved  | [java.io.File](h      |
|                      | in a file, which can | ttp://docs.oracle.com |
|                      | be loaded again next | /javase/tutorial/esse |
|                      | time.                | ntial/io/fileio.html) |
+----------------------+----------------------+-----------------------+

Advanced: BitSerializing
========================

*This part of the article will handle a more advanced way of how to
access the bit serializer of the framework. As long as it's not written
yet, please take a look at the classes `cubes.network.BitInputStream`,
`cubes.network.BitOutputStream` and the interface
`cubes.network.BitSerializable` that's implemented by the
`cubes.BlockTerrainControl` class.*

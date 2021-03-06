Now you've set up your different block types and we're ready to build
some cool stuff in our world. :)

Usage example
=============

Instead of explaining every different method of the framework, here's a
descriptive example, that should explain the usage:

```java
//This is your terrain, it contains the whole
//block world and offers methods to modify it
BlockTerrainControl blockTerrain = new BlockTerrainControl(CubesTestAssets.getSettings(this), new Vector3Int(1, 1, 1));

//To set a block, just specify the location and the block object
//(Existing blocks will be replaced)
blockTerrain.setBlock(new Vector3Int(0, 0, 0), CubesTestAssets.BLOCK_WOOD);
blockTerrain.setBlock(new Vector3Int(0, 0, 1), CubesTestAssets.BLOCK_WOOD);
blockTerrain.setBlock(new Vector3Int(1, 0, 0), CubesTestAssets.BLOCK_WOOD);
blockTerrain.setBlock(new Vector3Int(1, 0, 1), CubesTestAssets.BLOCK_STONE);
blockTerrain.setBlock(0, 0, 0, CubesTestAssets.BLOCK_GRASS); //For the lazy users :P

//You can place whole areas of blocks too: setBlockArea(location, size, block)
//(The specified block will be cloned each time)
//The following line will set 3 blocks on top of each other
//({1,1,1}, {1,2,3} and {1,3,1})
blockTerrain.setBlockArea(new Vector3Int(1, 1, 1), new Vector3Int(1, 3, 1), CubesTestAssets.BLOCK_STONE);

//Removing a block works in a similar way
blockTerrain.removeBlock(new Vector3Int(1, 2, 1));
blockTerrain.removeBlock(new Vector3Int(1, 3, 1));

//The terrain is a jME-Control, you can add it
//to a node of the scenegraph to display it
Node terrainNode = new Node();
terrainNode.addControl(blockTerrain);
rootNode.attachChild(terrainNode);
```

After running those few lines, you should see this:

![test\_tutorial.png](http://destroflyer.mania-community.de/other/imagehost/cubes/test_tutorial.png)

As you see, creating and managing your own block world will just take a
few lines of code and doesn't require any special knowledge. :)

Me wantz spezzial phyziczzz and shadowzzz
=========================================

The BlockTerrainControl attaches the world to the assigned jME-Node -
This way you can specify behaviors like shadows or even physics just
like you do with each other object:

```java
terrainNode.setShadowMode(ShadowMode.CastAndReceive);
```

```java
terrainNode.addControl(new RigidBodyControl(0));
physicsSpace.addAll(terrainNode);
```

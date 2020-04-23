To add blocks to the framework, you just have to add them to the
BlockManager - This happens by specifying a block object (has to extend
**cubes.Block**, by overriding methods you can specify own behaviours).
Each block needs at least one "skin", which you have to pass in the
constructor of the **cubes.Block** class). A "skin" contains all
information to display the block - Texture-Index in the Atlas,
Transparency and so on.

After initialising your object, you have to register it in the
BlockManager:

```java
BlockManager.register(myBlockObject);
```

:::note
Using own blocks *should* work at the moment, if you encounter problems
you can test your code using the default blocks (e.g.
**CubesTestAssets.BLOCK\_GRASS**).

You can register them by calling `CubesTestAssets.registerBlocks();`.
:::

Single Texture Block
====================

![block\_stone.png](http://destroflyer.mania-community.de/other/imagehost/cubes/block_stone.png)

Let's say, you want to add a simple block, which uses the same texture
on every face. The framework recognizes, when only one texture is
specified and therefore uses this for each face:

```java
//The stone texture is in the 10th column and 1st row in the texture atlas
Block blockStone = new Block(new BlockSkin(new BlockSkin_TextureLocation(9, 0), false));
BlockManager.register(blockStone);
```

Face-Dependant Textures Block
=============================

![block\_wood.png](http://destroflyer.mania-community.de/other/imagehost/cubes/block_wood.png)

Now it's time to get prettier blocks - The wood block as known in
Minecraft has two textures: Top/Bottom (cross-section) and
Left/Right/Front/Back (bark). A simple way to set the texture for each
face is to just give 6 textures to the skin (in the right order :P):

```java
Block blockWood = new Block(new BlockSkin[]{
    new BlockSkin(new BlockSkin_TextureLocation(4, 0), false),
    new BlockSkin(new BlockSkin_TextureLocation(4, 0), false),
    new BlockSkin(new BlockSkin_TextureLocation(3, 0), false),
    new BlockSkin(new BlockSkin_TextureLocation(3, 0), false),
    new BlockSkin(new BlockSkin_TextureLocation(3, 0), false),
    new BlockSkin(new BlockSkin_TextureLocation(3, 0), false)
});
BlockManager.register(blockWood);
```

Dynamic Textures Block
======================

Last but not least: What if a block wants to change its texture
according to its environment?

![block\_grass.png](http://destroflyer.mania-community.de/other/imagehost/cubes/block_grass.png)

A nice example would be a grass block - If it's on the surface, it
contains a nice grass texture at the top face and a little
earth-grass-transition at the sides. Otherwise, all 6 sides should
display an earth texture. Special behaviours like this can be achieved
by overwriting the **getSkinIndex** method:

```java
Block blockGrass = new Block(new BlockSkin[]{
        //We specify the 3 skins we need:
        //Grass, Earth-Grass-Transition and Earth
        new BlockSkin(new BlockSkin_TextureLocation(0, 0), false),
        new BlockSkin(new BlockSkin_TextureLocation(1, 0), false),
        new BlockSkin(new BlockSkin_TextureLocation(2, 0), false)
    }){

    @Override
    //The number that's being returned specified the index
    //of the skin in the previous declared BlockSkin array
    protected int getSkinIndex(BlockChunkControl chunk, Vector3Int location, Block.Face face){
        if(chunk.isBlockOnSurface(location)){
            switch(face){
                case Top:
                    return 0;

                case Bottom:
                    return 2;
            }
            return 1;
        }
        return 2;
    }
};
BlockManager.register(blockGrass);
```

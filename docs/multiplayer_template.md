---
id: multiplayer_template
title: Multiplayer Template
---
This page is to make your own multiplayer game, mainly by using a
template and understanding how it works.

The template for a multiplayer project can be found here:
<http://hub.jmonkeyengine.org/forum/topic/multiplayer-game-template/>

Additional information e.g. links to jars can be found here:
<http://hub.jmonkeyengine.org/forum/topic/need-help-need-jar-files-for-a-project/#post-292081>

Class diagram (template only): <http://puu.sh/a4azI/8c37cd8cf4.png>

A lot of work has to be done, but the best thing to start with, is
summing up the classes, with the variables and explaining what the use
is of those.

Classes (by package):

NetworkRpg:

1.  GameClient (Interface)

2.  GameConstants

3.  GameGuiController

4.  Main

<!-- end list -->

``` 
  private AppSettings settings;  sets the resolution
  private boolean isFullScreen = false;  obvious: fullscreen
```

1.  MenuInputMapping (No variables)

2.  RemoteGameClient

3.  ServerMain

4.  ThirdPersonCamera

5.  TimeProvider (Interface)

NetworkRpg.AppStates:

1.  BaseAppState

2.  ConnectionState

3.  EntityDataState

4.  ErrorState

5.  GamePlayState

6.  MainMenuState

7.  ModelState

8.  WorldState

NetworkRpg.Components:

1.  ModelType

2.  Position

3.  walkDirection (No variables)

NetworkRpg.Factories:

1.  EntityFactories

2.  GameModelFactory

3.  ModelFactory

NetworkRpgt.Handlers:

1.  GameMessageHandler

NetworkRpg.Networking:

1.  Util

<!-- end list -->

``` 
  public static final int tcpPort = 1337;   portnumber used for tcp connections
  public static final int udpPort = 1337;   portnumber used for udp connections (http://www.diffen.com/difference/TCP_vs_UDP)
  public static final String GAME_NAME ="Network RPG"; name of the game
  public static final int PROTOCOL_VERSION = 1; version of the udp/tcp protocol being used
```

NetworkRpg.Networking.Msg:

1.  ChatMessage

2.  CommandSet

3.  GameTimeMessage

4.  PlayerInfoMessage

5.  ViewDirection

NetworkRpg.Objects:

1.  Avatar

<!-- end list -->

``` 
  public Spatial avatarSpatial;      holds information about the character
  private Node avatarNode;     a node which contains the modelnode
  private Node model;          a node which contains your character (the green thing on the map)
  public BetterCharacterControl avatarControl;  this is used to set the gravity
  private SimpleApplication App;  we need this to get the rootnode
  private BulletAppState bulletAppState; allows using bullet physics in an Application.
  private Node rootNode;   the node which gets all the nodes (add to this one, and it'll be visible)
  private AnimChannel animChannel; used to change the current anitmation
  private AnimControl animControl;   this is needed to create an animchannel
  private BitmapText label;     label where we add a the textnode to
  private Node textNode;           name above the head of the player
  private String idleAnim = "IdleBase";   name of the animation (not 100% sure)
  private String walkAnim = "RunBase";
  private String attackAnim = "SliceHorizontal";
  private String jumpAnim = "JumpLoop";
  private BitmapFont guiFont;    the font
  private String playerName;     name above the avatar
```

NetworkRpg.Services:

1.  EntityDataService

2.  GameSystems

3.  MovementService

4.  Service (Interface)

This is a total of 35 classes.

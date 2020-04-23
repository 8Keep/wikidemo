::: {.warning}
This article covers how to move away from an older, deprecated API! If
you just start with JME3 networking, see
[networking](../jme3/advanced/networking) for current documentation.
:::

This document provides an overview of the new versus the old
SpiderMonkey API, and a path for migrating from the old, now deprecated,
API to the newer version. Much has changed. The [original
SpiderMonkey](../spidermonkey) implementation was a good concept and
a clever implementation but suffered under the weight of rapid patches
and some creeping design deficit. In the end, there were enough small
problems, long-term maintenance issues, and limitations that a newer
design was warranted. Some things will be very similar but others have
changed very much. Hopefully for the better.

Overview
========

Most of the new SpiderMonkey API now exists as a set of interfaces and
helper classes in the \'com.jme3.network\' package. For most users, this
package and the \'message\' package will be all they need to worry
about. The \'base\' and \'kernel\' packages only come into play when
implementing custom network transports or alternate client/server
protocols (*which are now possible*). Clients and Servers can be created
from the factory methods on the Network helper class. Once a Server
instance is created and started, it can accept remote connections from
Clients. The Client objects represent the client-side of a client→server
connection. Within the Server, these are HostedConnections. This is a
distinct change from the old API.

+----------------------+----------------------+-----------------------+
| Client               |                      | Server                |
+======================+======================+=======================+
| com                  | ←→                   | com.jme3.net          |
| .jme3.network.Client |                      | work.HostedConnection |
+----------------------+----------------------+-----------------------+

HostedConnections can hold application defined client-specific session
attributes that the server-side listeners and services can use to track
player information, etc.. MessageListeners can be registered with either
the Client or the Server to be notified when new messages arrive. As
before, these listeners can be registered to be notified about only
specific types of messages. ClientStateListeners can be registered with
a Client to detect changes in connection state. ConnectionListeners can
be registered with a Server to be notified about HostedConnection
arrivals and removals.

What's Gone?
============

All of \'connection\', \'events\', \'queue\', \'service\',
\'streaming\', and \'sync\' are now deprecated. The \'service\',
\'streaming\', and \'sync\' packages were too difficult to easily port
to the new API and would have required additional code review for
thread-related issues. Since the service manager model has *not* been
ported and will likely live on in a different way, it was better to let
these go until better solutions evolve. For example, streaming is
probably better done more tightly integrated with the core API and as
actual java.io streams.

Migration
=========

Package/Class Imports
---------------------

As a first pass, use the following table for conversion and then see
specific class notes.

+-----------------------------------+-----------------------------------+
| Old Class                         | New Class                         |
+===================================+===================================+
| c                                 | com.jme3.network.Client or        |
| om.jme3.network.connection.Client | com.jme3.network.HostedConnection |
+-----------------------------------+-----------------------------------+
| c                                 | com.jme3.network.Server           |
| om.jme3.network.connection.Server |                                   |
+-----------------------------------+-----------------------------------+
| com.j                             | com.jme3.network.MessageListener  |
| me3.network.event.MessageListener |                                   |
+-----------------------------------+-----------------------------------+
| com.jme3                          | com                               |
| .network.event.ConnectionListener | .jme3.network.ClientStateListener |
|                                   | or                                |
|                                   | co                                |
|                                   | m.jme3.network.ConnectionListener |
+-----------------------------------+-----------------------------------+
| com.                              | no equivalent class, implement    |
| jme3.network.event.MessageAdapter | MessageListener directly          |
+-----------------------------------+-----------------------------------+
| com.jme                           | no equivalent class, implement    |
| 3.network.event.ConnectionAdapter | ClientStateListener or            |
|                                   | ConnectionListener directly       |
+-----------------------------------+-----------------------------------+
| com.jme3.network.message.Message  | if used as a reference and not a  |
|                                   | superclass,                       |
|                                   | com.jme3.network.Message. The     |
|                                   | base class stays the same for     |
|                                   | message subclasses.               |
+-----------------------------------+-----------------------------------+

Doing all of those changes will certainly break your build... so now
let's fix it.

Client and MessageListener
--------------------------

This class is the hardest migration to perform. Do not get discouraged.
The old version used com.jme3.network.connection.Client for both client
side and server side. So, depending on context, these references will
either change to com.jme3.network.Client or
com.jme3.network.HostedConnection. In the case where calling code is not
client or server specific, then there is also the common
com.jme3.network.MessageConnection interface. In general, the actual
client changes are of one of the following to types:

```java
  Client client = new Client( host, port );
  ...becomes...
  Client client = Network.connectToServer( host, port );
```

In the delayed connection case:

```java
  Client client = new Client();
  ...
  client.connect( host, port );
  ...becomes...
  NetworkClient client = Network.createClient();
  ...
  client.connectToServer( host, port );
```

NetworkClient is a Client. The rest of your code can just refer to
Client. Those are the easy changes. The trickier ones are related to the
MessageListeners.

### MessageListener

By now you've figured out that all of your MessageListeners are broken
because the new method signature is different. The source of a message
is no longer stored with the message and is instead provided to the
MessageListener. Depending on whether your MessageListener is being
added to the Client or the Server, it will need to refer to either
com.jme3.network.Client or com.jme3.network.HostedConnection in its
messageReceived(), respectively. The MessageListener interface is
generically typed to help make sure the right listener goes where it's
supposed to and so the listener implementations don't have to cast all
the time.

```java
// An example client-specific listener
public class MyClientListener implements MessageListener<Client> {
    public void messageReceived( Client source, Message m ) {
       ...do stuff...
    }
}
// And example server-specific listener
public class MyServerListener implements MessageListener<HostedConnection> {
    public void messageReceived( HostedConnection source, Message m ) {
        ...do stuff...
    }
}
// A client or server listener
public class MyGenericListener implements MessageListener<MessageConnection> {
    public void messageReceived( MessageConnection source, Message m ) {
        ... do limited stuff....
    }
}
```

Your listeners will fall into one of those three categories.

::: {.note}
Several of the old MessageListener's methods have gone away. The
object-based methods didn't fit with the new API and messageSent()
seemed of little utility. It could be resurrected if there is demand.
:::

### Client method changes

Some of the methods on the old Client class have changed or been
removed. Here is a basic summary:

+-----------------------------------+-----------------------------------+
| Old Method                        | New Method                        |
+===================================+===================================+
| Client.disconnect()               | Client.close() or                 |
|                                   | HostedConnection.close(reason)    |
+-----------------------------------+-----------------------------------+
| Client.kick(reason)               | HostedConnection.close(reason)    |
+-----------------------------------+-----------------------------------+
| Client.getClientID()              | Client.getId() or                 |
|                                   | HostedConnection.getId()          |
+-----------------------------------+-----------------------------------+
| Client.get/setPlayerID()          | no equivalent                     |
+-----------------------------------+-----------------------------------+
| Client.get/setLabel()             | no equivalent                     |
+-----------------------------------+-----------------------------------+

### No IOExceptions

After you've done all of that, the compiler will be complaining about
the fact that send(), broadcast(), etc. no longer throw IOException. So
remove all of those try/catch blocks.

::: {.note}
The truth is that even in the old API, expecting a real IOException from
these methods was unreasonable because often times the message was
queued and actually sent later by a separate thread. The new API assumes
that all underlying transports will operate this way and so forgoes the
artificial annoyance or sense of security provided by these \'throws\'
clauses. It also simplifies the calling code a great deal.
:::

Only API methods that actually perform direct IO (such as the
Network.connectToServer() and NetworkClient.connectToServer() methods)
will ever be declared to throw IOException.

Message.getClient() and Message.getConnection()
-----------------------------------------------

This is important enough to deserve its own sub-heading because your
code **will** break if you use these as they now return null. Any reason
for calling them is now provided directly to the MessageListener in the
form of the source Client or source HostedConnection.

Client ID and Player ID
-----------------------

The ID of the Client and HostedConnection are now the same at both ends
of a connection and the ID is given out authoritatively by the hosting
Server. This removes some of the inconsistency on when to use the old
player ID and when to use the old client ID as the new client ID serves
both purposes. This leaves the game to be able to define its own player
ID based on whatever user criteria it wants.

::: {.note}
Many of the reasons for accessing the client ID on the server can now be
taken care of using the session attributes on HostedConnection. It seems
like a common use-case for these IDs was to look-up
player/client-specific information in a java.util.Map. This information
can now be set directly on the HostedConnection.
:::

com.jme3.network.event.ConnectionListener
-----------------------------------------

Along with the shift from not using the same object at both ends of the
client connection was a shift in the interfaces that are notified about
those ends. On the client, there is now
com.jme3.network.ClientStateListener which is notified when the client
fully connects to the server (including any internal handshaking) and
when the client is disconnected. On the server,
com.jme3.network.ConnectionListener will be notified whenever new
HostedConnections are added or removed. This listener isn't notified
until the connection is fully setup (including any internal
handshaking).

+-----------------------------------+-----------------------------------+
| Old Method                        | New Method                        |
+===================================+===================================+
| clientConnected(Client)           | connect                           |
|                                   | ionAdded(Server,HostedConnection) |
+-----------------------------------+-----------------------------------+
| clientDisconnected(Client)        | connectio                         |
|                                   | nRemoved(Server,HostedConnection) |
+-----------------------------------+-----------------------------------+

Why am I doing this again?
==========================

As you've seen above, there are quite a few changes necessary to migrate
to the new API. You might be asking yourself if it's worth the trouble.
The bottom line is that the old architecture had threading and stability
issues that just couldn't be fixed in any reasonable way. Some were
minor, others kind of severe... and they combined to make trouble. If
you've ever wondered why sometimes your clients connect and then the
network connection hangs or stops sending data. Or if you've ever
wondered why UDP/unreliable messages get corrupted or somehow won't
deserialize properly then you've run into some of these issues.
Moreover, the lack of thread safety meant that user code sometimes had
to do some strange and/or complicated work-arounds. The goal should be
that the API should just work like it looks like it will with a minimum
of hassle. The new architecture is built from the ground up for
threading stability and for a clean separation between the public API,
the message passing layer, and the underlying network transport
implementations. You should be able to throw all kinds of stuff at it
that would make the old system fall over and it should just hum along.
There will certainly be some growing pains as we work the kinks out of
the new system but it is already much more stable in even the most basic
of stress tests.

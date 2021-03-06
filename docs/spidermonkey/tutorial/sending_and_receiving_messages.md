::: {.warning}
This article covers a deprecated API! See
[networking](../../jme3/advanced/networking) for current
documentation.
:::

In this tutorial I'm going to cover sending and receiving messages. I'll
also explain how to write your own messages. This tutorial assumes you
already have a working server-client connection.

Let's start by creating our own message. Later on we'll send this across
the network.

```java
@Serializable()
public class HelloMessage extends Message {
   public String hello = "Hello!";
}
```

This is probably the smallest and simplest message you'll find. This is
simply the process of creating a class, extending Message, and adding
your fields to it. Also you need the \@Serializable annotation, but
we'll get to that later. Even though you don't **have to** extend
Message, you generally should since then SpiderMonkey can add client and
connection information on receiving. You can also send separate data,
but we'll not go into that here - you should just send Messages.

Now let's send this message across the network. We'll send it from the
client to the server.

```java
Serializer.registerClass(HelloMessage.class);
server.addMessageListener(this, HelloMessage.class);
client.addMessageListener(this, HelloMessage.class);
client.send(new HelloMessage());
```

First we've registered the class to the Serializer. This needs to happen
on both the client and server, I'll explain why in the next tutorial.
Then we add the message listeners for both the server and client, this
makes sure we're notified when messages are received. Then we send the
message. The message is by default reliable, and so it will be sent over
TCP. Now we'll handle it on the server:

```java
public void messageReceived(Message message) {
   // This message is of type HelloMessage, so we don't have to check.
   HelloMessage helloMessage = (HelloMessage)message;
   System.out.println(helloMessage.hello);
   helloMessage.hello = "Hi!";
   message.getClient().send(helloMessage);
}
```

This simply receives the message, and changes the Hello! to Hi! and
sends it back to the client. The client, can of course handle this
message however it wants to.

Serializable annotation
=======================

The Serializable annotation is used to determine which serializer you
want to use for your message, and which ID you want to register to it.
If you specify no ID and no serializer, a ID will be assigned, and the
default serializer will be used. The problem with specifying no ID is
that you have to have the same order of registration on both the client
and server, otherwise serializing will go wrong. It's therefore
advisable that you use the id field, if you want to register classes in
a different order.

The default serializer is, of course, FieldSerializer, which'll do just
fine for just about any message you can throw at it. However, if you
wish to serialize your message yourself, all you must do is write your
own serializer, and then pass the class to the serializer field in the
annotation. For example, this Serializable annotation sets ID to four,
and serializer to CustomSerializer (which doesn't exist, mind you).

```java
@Serializable(id=4, serializer=CustomSerializer.class)
```

That was it! The next tutorial explains how the Serializer system works,
and how you can register your own serializers!

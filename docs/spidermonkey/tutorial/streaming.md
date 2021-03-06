::: {.warning}
This article covers a deprecated API! See
[networking](../../jme3/advanced/networking) for current
documentation.
:::

The streaming service is meant for situations where you want to transfer
files, or other types of data to clients. In this tutorial we'll discuss
how it works, and how to use it.

Let's start off with how it works; streaming service uses messages to
transfer data. This is done so it doesn't block other messages from
being sent, while transferring. First a message is sent the describes
the stream. The peer can now choose whether to accept or reject the
stream. When the peer accepts, the data will be sent. You have to handle
this data yourself. At the end of the stream you get the same message as
when the stream was offered, to indicate the end of the stream.

Let's transfer a file to a client:

```java
StreamingService sService = client.getService(StreamingService.class);
sService.addStreamListener(this);

sService = server.getService(StreamingService.class);
Client receiver = server.getConnectors().get(0); // Note that you can't use 'client' here, since it's not a connector.
sService.offerStream(receiver, new StreamMessage(), new FileInputStream("test.txt")); // StreamMessage used here as start and end message, but can be anything to describe the stream on the other end.
```

As you can see, this system uses the Service system. First, we get the
client's StreamingService, and register ourselves as a listener. Then we
get the server's version of the StreamingService, from which you can
stream things. Then we get a connector client (the first one), and send
the file via an InputStream.

Now to receive this stuff is simple;

```java
public boolean streamOffered(StreamMessage message) {
   // Here you'd normally check the message what this stream is all about, and
   // base your acception criteria on that.
   fileStream = new FileOutputStream("test.txt");
   return true; // Sure, we'll just accept this message.
}

public void streamDataReceived(StreamDataMessage message) {
   fileStream.write(message.getData());
}

public void streamCompleted(StreamMessage message) {
   fileStream.flush();
   fileStream.close();
}
```

That was all; simple right?

::: {.warning}
This article covers a deprecated API! See
[networking](../../jme3/advanced/networking) for current
documentation.
:::

Now this is going to be a real simply tutorial but still I wanted this
in a separate article. Why you may ask? Simply because it's a feature
that requires some explanation, since it has some caveats that I'll
discuss. Also, I'll cover writing your own compression message.

First off - there are two compression types in SpiderMonkey, they are
GZip and Zip. Could've added more, but didn't want to have a dependency
for just a compression method. Both are used by wrapping your message in
the appropriate compression message:

```java
MyMessage msg = new MyMessage();
client.send(new GZIPCompressedMessage(msg));
// or
client.send(new ZIPCompressedMessage(msg));
```

Really simple, but ZIP requires some explanation. The
ZIPCompressedMessage class also has two extra methods; setLevel(int) and
getLevel(). These methods are for setting the compression level, where 1
is best compression but slowest, and where 9 is weakest compression but
fastest. Please note that 9 is **not** the so called \'store\' ZIP
method, which simply stores file in the ZIP, instead of compressing it.
This \'store\' feature is not in SpiderMonkey since otherwise it would
not have been called compression.

Writing your own
================

Now of course I'd love to see more compression methods in SpiderMonkey,
so I'll discuss how to write your own. Let's just take
GZIPCompressedMessage as example, since that one is the most
straightforward. What I've done, is I've just created a
GZIPCompressedMessage which extends CompressedMessage. It does not
contain any extra messages, so the GZIPCompressedMessage class is
practically \'empty\'. The magic happens at the serializer, which is
called the GZIPSerializer (you can read about writing your own
serializer [here](../../spidermonkey/tutorial/serializing)). Then I
just registered the GZIPSerializer to GZIPCompressedMessage and presto -
you're done. Don't forget that in the Serializer you need to use
writeClassAndObject first and then compress that data, and for read
you'd need to use readClassAndObject after you've uncompressed
(inflated) the message. For this to be clear, it may be useful to read
[the GZIPSerializer
class](http://code.google.com/p/jmonkeyengine/source/browse/trunk/engine/src/networking/com/jme3/network/serializing/serializers/GZIPSerializer.java).

That's that! Next tutorial we're going to discuss how to use the Service
system.

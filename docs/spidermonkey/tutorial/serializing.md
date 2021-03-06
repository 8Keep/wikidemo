::: {.warning}
This article covers a deprecated API! See
[networking](../../jme3/advanced/networking) for current
documentation.
:::

In this lesson you'll learn about a pretty advanced system of
SpiderMonkey. Why so early, you may ask; it's because it is an important
aspect of SpiderMonkey, that you need to understand to effectively
network your games.

Let's start with a general explanation of how the serialization system
works. SpiderMonkey's Serializer class is the entry point for everything
serializing. Serializing is the act of translating an object into bytes,
so it can be transferred over the network. SpiderMonkey does this by
having Serializer classes (they extend Serializer itself), and having
some static methods available in the Serializer class. A serializer does
not exist without a class it can serialize - this means that Serializers
need to be registered with a class. For example, the String type is
registered to the StringSerializer class. Without the String type being
registered, there'd be no instance of StringSerializer. So! Let's get
down to business!

Writing your own serializer
===========================

There is going to be a situation where you need to serialize something
yourself, whether you like it or not. We're going through how you're
going to do, by writing a entirely new Serializer - please note that
this Serializer is not necessary in SpiderMonkey, since SpiderMonkey can
serialize Serializable, and InetAddress4 implements Serializable (though
it does save a LOT of bytes by doing it yourself). The field that makes
an InetAddress4 an InetAddress4 is the IP address, so that's what we're
going to serialize. Let's start by going through the basics of extending
the Serializer class:

```java
public class Inet4AddressSerializer extends Serializer {
   public InetAddress readObject(ByteBuffer data, Class c) throws IOException
      return null;
   }

   public void writeObject(ByteBuffer buffer, Object object) throws IOException {
      InetAddress address = (InetAddress)object;
   }
}
```

As you can see, you have to extend Serializer and implement the methods
T readObject(ByteBuffer, Class) and writeObject(ByteBuffer, Object).
These are the methods that actually do the job. Obviously, writeObject
is used when sending, and readObject is used when reading. The next part
is just Java coding - you just kind of have to know the API of those
objects you're serializing to convert into bytes. This one's really
simple though ;)

```java
public class Inet4AddressSerializer extends Serializer {
   @Override
   public <T> T readObject(ByteBuffer data, Class<T> c) throws IOException {
       byte[] address = new byte[4];
       data.get(address);
       return (T)Inet4Address.getByAddress(address);
   }

   @Override
   public void writeObject(ByteBuffer buffer, Object object) throws IOException {
       Inet4Address address = (Inet4Address)object;
       buffer.put(address.getAddress());
   }
}
```

So now you've got this serializer, and you don't know what to do with
it. Well, you need to register it to a class, and what other class would
you want to register it to, than Inet4Address?

    Serializer.registerClass(Inet4Address.class, new Inet4AddressSerializer());

And now you can use the Inet4Address anywhere in a Message! Now we'll
test this Serializer, and see if we can get the IP on the other side:

```java
public class AddressMessage extends Message {
  public Inet4Address addr;
  public AddressMessage(Inet4Address addr) { this.addr = addr; }
}
...
client.send(new AddressMessage(Inet4Address.getByName("google.com")));
```

Results in a message being received, which prints out as:

    /66.102.13.106

And there you go, that's the end of this tutorial!

Next tutorial you'll learn about a simple, but powerful feature -
compression.

::: {.warning}
This article covers a deprecated API! See
[networking](../../jme3/advanced/networking) for current
documentation.
:::

The service system is meant to create a common way of using plugins. It
is a tiny system, on Server and Client level. In this tutorial I'll tell
you how to use services, and how to create your own.

Creating services
=================

Creating services is really easy - you just have to implement the
Service interface. **Make sure you don't do anything time consuming**
since the developer may not be expecting it. Services can choose to
support Server, Client, or both. To implement this, use the appropriate
constructors:

```java
public class MyExampleService implements Service {
   public MyExampleService(Server server) {
      // By adding the constructor with the Server as argument, this service
      //  now supports servers.
   }

   public MyExampleService(Client client) {
      // Same goes for client. I could just leave this constructor out, and
      //  SpiderMonkey would determine this service does not support client mode.
   }
}
```

Using services
==============

The Server and Client class both have a method called getService(). It
retrieves a service based on class name, and instantiates it if
necessary. From there you can use the service.

The Service system is not a terribly powerful system, neither does it do
safety checks and service management - it just provides a way to
commonly manage extensions.

That's it! Next tutorial we're going to have a look at how to use the
streaming API.

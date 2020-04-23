If you've been working on a large scene in the SDK, there is a good
chance that you will need to increase the size of Java's heap space
(which is quite small by default). [What is heap
space?](http://www.javaworld.com/javaworld/jw-08-1996/jw-08-gc.html)

To increase the amount of heap space allocated to the SDK, we must
navigate to the SDK's installation directory and edit the
etc/jmonkeyplatform.conf file.

The installation directory for Mac and Windows is:

**OS X:**
Applications/jmonkeyplatform.app/Contents/Resources/jmonkeyplatform/jmonkeyplatform

**Windows:** C:\\Program Files\\jmonkeyplatform

Tweaking the parameters to be right is quite a task because sometimes
when specifing a too large value, the JRE might fall back to it's
default value of (for example) 32 MB. Also there are different values to
increase. Take a look at your Error Message, it will show you whether
you ran out of "Heap Space or "Direct Memory.

In the config file you look for default\_options=". If you ran out of
Heap Space increase the Value of -Xmx=512m to like 1024m or even
further. If you ran out of Direct Memory, increase
-XX:MaxDirectMemorySize=256M

Note that Increasing the Heap Space might also fix problems where you
ran out of DirectMemory.

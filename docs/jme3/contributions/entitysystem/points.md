ES Design goals explained
=========================

This page revive and explain more about points of design goals and
implementations for an ES and its usefulness (means features) to
corporate with other Java and game software techs and layers.

Theoricaly an Java ES done right should be:

1.  Pure data : very debatable

    a.  Mutable : as bean with setter and getter

    b.  Immutate : as bean with getter, should be replace if changed.

2.  Multi-threading, concurency enable : very debatable

    a.  As my experience, pure data or not is not clear contract to
        multi-threading success. Consider other things happen outside of
        ES scope, so it not an solid waranty that those component will
        not be touched by any other thread.

    b.  Also if there is a contract that no other thread touching those
        data, in Java style via synchonization or other paradigm like
        actor... multi-threading also consider success but just more
        complicated!

3.  Communication: very debatable

    a.  Event messaging enable

    b.  No event or messaging : update beat, no need of inter-com or
        events. How can we do network messaging?

4.  Is database (and other kind of persistent) friendly

    a.  Save to XML (file, serialized)?

    b.  Send over network?

    c.  Change sets are resembling Databse concept, what about
        tranactions?

5.  Is enterprise friendly (expanable/ extensible/ modulizable)

    a.  Spring, as lazy loaded, injected?

6.  Script possibilities

    a.  Can be script, non trivial work in pure data!

    b.  Can be use with other JVM language than java like groovy, or
        scala, jython?

7.  Restrictions and limitation

    a.  No dynamic Java object methods in Component ? What about
        Entities and Systems ( Processors)

    b.  An overal way to manage and config Systems, freely chose? How to
        hook to its routine?

8.  Depedencies

    a.  The separation of components are clear, as no dependencies at
        all. Hard cored, scripted or injected will break the overal
        contract!

    b.  The separation of Entities. What about depedencies of entities?
        Ex: parent/ child relationship in JME spatial. How the framework
        handle that?

    c.  The separation of Systems. Ex: any contract about that?

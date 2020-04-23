ES Approaches
=============

Entity System implementations are various!

As said, we are talking about Component oriented programming Entity
System, implemented in Object oriented programming language and
enviroment like Java!

So,we are

-   **not talking** about Groovy, Scala, Closure.. or any Java
    extension!

-   **not talking** about Entity system in any scope other than in a
    real-time application!

-   **focusing** in \'core\' features, which exclude many specific
    usecases

-   **trying** to be unprejudiced , impersonal to make equitable judge.

Outline
-------

1.  Initial philosophy

2.  Pure data or not?

3.  Multi-threading, concurency enable or not?

4.  Communication: Event messaging enable or not?

5.  Is database (and other kind of persistent) friendly or not?

6.  Is enterprise friendly (expanable/ extensible/ modulizable) or not?

7.  Script possibilities?

8.  Restrictions and limitation

9.  Dependencies

10. Current status: Long term, stable, community?

The comparasions will focus in these below points, follow with the
scope, status of each projects Detail explanation of abbove points
[points](../../../jme3/contributions/entitysystem/points)

ES projects interviews
======================

These interviews are short but focus dicussion to help you get a clear
view of underlying implementation of each project.

Artemis: General
----------------

GoogleCode: <https://code.google.com/p/artemis-framework/>

Website: <http://gamadu.com/artemis/index.html>

Wiki:
<http://entity-systems.wikidot.com/artemis-entity-system-framework>

::: {.important}
Review: HERE!
[artemis](../../../jme3/contributions/entitysystem/interviews/artemis)
because I can not contact with author of Artemis at the moment so I will
have a short review of it with some of my experience working on it and
base on its source code!
:::

### Short conclusion

Artemis approach

1.  Initial philosophy : Lightweight, small footprint and 1.5+

2.  Pure data: No

3.  Multi-threading, concurency: with care

4.  Communication: Event messaging enable or not? No implementation yet

5.  Is database (and other kind of persistent) friendly or not? No
    implementation yet

6.  Is enterprise friendly (expanable/ extensible/ modulizable) or not?
    Not clear but because not pure data, consider Yes

7.  Script possibilities? Yes

8.  Restrictions and limitation: Custom System has to be extends base
    System; Processor base; Aspect base, Has documented about
    Dependencies between System

9.  External library dependencies : No

10. Current status: Long term, stable, community? The most early Java
    ES, more than 3 years, kind of unactive, has a forum.

Read the full review for details

Zay-ES : \@pspeed
-----------------

Forum : <https://hub.jmonkeyengine.org/c/user-code-projects/zay-es>

Wiki:
[jme3:contributions:entitysystem](../../../jme3/contributions/entitysystem)

Links:
<https://hub.jmonkeyengine.org/t/zay-es-links-more-chars-because-forum-is-dumb/27135>

Interview:
[zay-es](../../../jme3/contributions/entitysystem/interviews/zay-es)

::: {.important}
In my POV, Zay-ES has the most active development status and also the
maintainer is a core JME3 dev, that's why all its functions and wisdoms
are close to JME3!
:::

### Short conclusion

Zay-ES approach

1.  Initial philosophy : Lightweight, small footprint and 1.5+

2.  Pure data: Yes

3.  Multi-threading, concurency: free, by design, but still *need better
    design contract*

4.  Communication: Event messaging enable or not? No implementation yet

5.  Is database (and other kind of persistent) friendly or not? No
    implementation yet

6.  Is enterprise friendly (expanable/ extensible/ modulizable) or not?
    Not clear, *lack of design contract*

7.  Script possibilities? Yes

8.  Restrictions and limitation: Free of System implementation, but
    *lack of design contract*

9.  External library dependencies : No

10. Current status: Long term, stable, community? more than 2 years,
    open source recently, active, has a forum in Jmonkey's hub.

Read the full review for details

EntityMonkey : \@zzuegg
-----------------------

Post:
<https://hub.jmonkeyengine.org/t/entitymonkey-a-simple-entity-system-for-jme/23235>

Interview:
[em-es](../../../jme3/contributions/entitysystem/interviews/em-es)

Private : \@Empire phoenix
--------------------------

Interview:
[emp-es](../../../jme3/contributions/entitysystem/interviews/emp-es)

Others
======

Java & Java extension
---------------------

### Spartan: \[used for Slick. abandoned\]

GoogleCode: <http://code.google.com/p/spartanframework/>

Not Java
--------

### C++

### JavaScript

### C\#

### ActionScript

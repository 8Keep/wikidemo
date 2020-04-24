Entity System Details
=====================

Hello ES
--------

This wiki is dedicated to who want to do research about Entity System.

You should \'ve read a brief introduction here:
[jme3:contributions:entitysystem:introduction](../../../jme3/contributions/entitysystem/introduction)

And if you still have some concerning you are in the right place!

::: {.important}
This wiki is a collection of known sources, authors from internet and
our forum. Corrections are welcome! The main source is the discussion in
this topic:
<https://hub.jmonkeyengine.org/t/entity-system-topic-united/27193>
:::

Why you here?
-------------

\'Cause:

1.  You may read famous T-machine article about entity systems in
    mmorpg.

2.  You may come from Unity, UDK, or other engine used it

3.  You may come from Database and web world

4.  You read a lot of articles, forums and try few projects with
    dramatic debates

But:

1.  You still un sure/ clear about OOP ,COP, data driven...

2.  You doubt ES concept, find its impossible to do ES right

3.  You want to learn more

I hope this page will help you 30% the way to reach the destination.
It's the place where we concern about the design wisdoms of ES, and
consider its detailed implementation in Java, eventually integrate in
JME3 for a real-time game.

::: {.important}
Before you start, I also want to mention that there are fews
implementation of ES in JME3, after read this page, you can judge the
design of each one arcodingly and choose one. Also read the interviews
with each authors about their approaches!
:::

Scope & Structure of this page
------------------------------

1\) Introduction:

1.  Basic idea of ES : Entity, Processor(System), other terms.

2.  Core elements and its alternative

3.  What is NOT an ES...

2\) Why, when, where ES matter.

1.  Pros -- cons?

2.  Know issues

3.  OOP to COP, or else

4.  Change of mindset

### COP's Entity System in OOP java

Entity System in turn is the Core and fundamental and most obvious
implementation design of COP (Component oriented programming) in
real-time application scale!!!

In fact the implementation detail of Entity system is various, some may
resembling database core, some may have troubles with OOP
incompatibility, some may appear to get all the good of Functional
language...

but note that Entity System really stand on its own terminology on this
single page:

::: {.warning}
We are talking about the ES within COP, but implemented by an pure OOP
like Java.
:::

Ideas & Concepts
================

Idea
----

Concept
-------

Slides

Pictures

Core elements and its alternative
---------------------------------

:::note
Definition notations:
:::

-   Normal is clearly/no doubt in the definition.

-   **Bold** is keywork.

-   *Italic* is example

-   Underling is doubt

-   Strike-though is implementation detail, not in the definition

### Entity

An Entity is simply **an unique Id**. *Every Unit, Item, Bullet, etc. in
your game will be represented by one of there entity Ids*.

### Component

A Component is a class which only contains data. This means it has a
constructor and only getter methods. *Examples for Components can be: \*
PositionComponent \* MovementComponent \* CollsisionComponent*

Components are **added** to the Entities.

There can **only exists one component** of the same class for one entity
at the same time.

As you can see **Entities are made flexible up of different
Components**. *You need your Armored Robot?* No Problem, you only need
to combine the right components. Besides you are able to
remove/change/add components during the game which is a huge benefit of
Entity Systems.

### Systems

Simply all other classes **except the components and the entities** can
we consider as systems. You need to pay attention when you read about
other Entity Systems because they can have different ideas of what a
system is.

In the systems you can request all Entities which have special
components. *For example you can say that you want all entities who have
a position and a movement component and now calculate the new position
for these Entities by overwriting the old position component with a new
one.*

Ideas similarity:
-----------------

from Component oriented architecture:

1.  Decoupling

2.  Reusable

3.  Primitive Unit

from Data driven architecture:

1.  Data who decide

from Data oriented architecture:

1.  Everything is data

2.  Repository existence

3.  Homogeneous data

4.  Regular workload

5.  Simple dataflow

Short explanation

1.  Decoupling : each piece can work together without aware of each
    other.

2.  Resuable : can be easily bring to use again somewhere else

3.  Primitive unit : each piece from a simplest form which contain,
    fullfil it self.

4.  Data who decide: data decide each and every result, activities of
    the software

5.  Everything is Data: all piece in the software system is Data

6.  Repository existence: exist a place to keep all the data, the one
    door to reach them

7.  Homogeneous data : data is treat the same

8.  Regular workload : software that run at regular rate, kind of
    ballance trade off between performance and complexity

9.  Simple dataflow: the flow of the data is easy to watch, inspect,
    start stop, manipulate. As the root reason for regular workload!

```{=html}
<!-- -->
```
    Ideas similarities here actually is resulted from with decades of history of revolving of the paradigm. That's why you will see the same concepts of Entity system appear every where from a database to a repository. Of course because it have the same root.Check Pros and Cons chapter for full, detailed idea and design goals and successes.

Terms
=====

::: {.important}
Here is some terms will be mentioned below but ussually have
misunderstaned or misplaced because of their confusioness. Try to do
another research to make sure you understand clearly all the terms
first!
:::

-   Object Oriented Programming

-   Data Oriented Programming

-   Component Oriented Programming

-   Data driven programming

-   Data driven solution (architecture)

Here is a short one to help you get start quickly :
[terms](../../../jme3/contributions/entitysystem/terms)

What is NOT an ES ?
===================

From more \'open\' perspective the core elements can be viewed as, but
remember the name as a noun can be mislead: *This resulted as a
dicussion of \@pspeed and toolforger, eventually is form a skeptical
question, it's really interesting by how we all see this problem
confused at first!!*

      Entity -> ID. It just binds the components together, in the sense that there is one function that creates a bunch of components with the same ID, and one function to destroy all components for an ID. An entity is the set of objects that have the same ID, entities don’t exist as coherent objects inside the code.

      Component -> Facet. A position is a facet of an entity, as its velocity, its health, its armor, its whatever. If entities were Java objects, facets would be groups of interrelated properties.

      System -> Processor. A function that operates on a slice of components.

This often result in mislead skepticism about the design. So get back to
read it carefully one more time and some gotchas and practical wisdom
below.

Gotchas & Practical wisdoms
===========================

:::note
This area contain some best gotchas and practical wisdom when working
with ES. I change this to upper position in the page be cause I think
practical works save us more than theories. This page can be called a
"Design course after all without this section!!!
:::

System \~ Processor?
--------------------

      In a pure ES, this is not a thing, really. Some implementations force this on you because they couldn’t think how to do the ES job efficiently… but it’s still not a thing. All of your code that isn’t an ES is a “system”, technically.

System = everything that isn't an Entity or a Component but uses
Entities and Components.

Entity \~ GameObject?
---------------------

Entity should just be interpreted as a bunch of its Component.
GameObject or anything else represented by an Entity is by accident. So
no force to represent "all-every" gameobject as Entity; and no force
that "all-every" Entity is gameobject.

Has \~ Is?
----------

From software designer POV, Relationship in COP is a sensitive topic; by
nature, Component is against (or overide) Relation.

The deception 'Has' relationship between Entity and its Component
actually represent everything in various meaning from the literature
'Is' , or literature 'Has'.. to 'related to'. BUT keep in mind, this is
blury and its almost always implemented as indirect acess, not like a
property in an object but envolve processing-lookup under the curtain!
So you may find this difficult to extract and detect these different
from your tranditional OOP software design!

Some insights
-------------

This is the place to share the "real world difficuties when working with
ES, here in JME3 or in other engines. In Practical wisdoms will raise
some known solutions for them. This section may revive some part of the
Cons or known issues sections but practically.

Practical wisdoms
-----------------

ES done right
=============

Because this topic is so debatable, there is no solid candidate for ES
done right now in my POV, but Zay-ES and Artemis are closest one, Zay-ES
a little bit better as its the later born.

Why debatable \[Short\]?
------------------------

Because apply to each game, the scenarios and usecases are vary
difference. Situation changes, a design which should be right can be a
failure! You may see the point.

This topic start flame in almost every dicussions I've come through,
someone should be like OOP versus COP, ES is not for all,..etc. At
first, the debate should focus into a specific scope, specific genre.
Here (this page) we still arrange the statements like general scope. But
later in the interviews you can see some "real applications and
implementations.

### Should be?

Theoricaly an Java ES done right should be:

1.  Pure data : very debatable

    a.  -- Mutable : as bean with setter and getter

    b.  -- Immutate : as bean with getter, should be replace if changed.

2.  Multi-threading, concurency enable : very debatable

    a.  -- As my experience, pure data or not is not clear contract to
        multi-threading success. Consider other things happen outside of
        ES scope, so it not an solid waranty that those component will
        not be touched by any other thread.

    b.  -- Also if there is a contract that no other thread touching
        those data, in Java style via synchonization or other paradigm
        like actor... multi-threading also consider success but just
        more complicated!

3.  Communication: very debatable

    a.  -- Event messaging enable

    b.  -- No event or messaging : update beat, no need of inter-com or
        events. How can we do network messaging?

4.  Is database (and other kind of persistent) friendly

    a.  -- Save to XML?

    b.  -- Send over network?

    c.  -- Change sets are resembling Databse concept, what about
        tranactions?

5.  Is enterprise friendly (expanable/ extensible/ modulizable)

    a.  -- Spring, as lazy loaded, injected?

6.  Script possibilities

    a.  -- Can be script, non trivial work in pure data!

    b.  -- Can be use with other JVM language than java like groovy, or
        scala, jython?

7.  Restrictions and limitation

    a.  -- No dynamic Java object methods in Component ? What about
        Entities and Systems ( Processors)

    b.  -- An overal way to manage and config Systems, freely chose? How
        to hook to its routine?

8.  Depedencies

    a.  -- The separation of components are clear, as no dependencies at
        all. Hard cored, scripted or injected will break the overal
        contract!

    b.  -- The separation of Entities. What about depedencies of
        entities? Ex: parent/ child relationship in JME spatial. How the
        framework handle that?

    c.  -- The separation of Systems. Ex: any contract about that?

Detailed explaination :
[points](../../../jme3/contributions/entitysystem/points)

Design
======

::: {.important}
In Design phase, even don't know any of implementation detail, we judge
upon the design concepts and its Infrastructure!!!. Detailed
implementation judge will be considered later!
:::

::: {.important}
This is a short checklist that help you open your mind before going to
design an ES. It's short and trusted; the Pos and cons section needed
previewing and under heavy concerning!
:::

Why, when, where ES matter.
---------------------------

### Why?

1.  BLOB aka The fall of inheritance: Complex type can not be represent
    as class in java OOP!

2.  Tired of OOP. Compose over old-skool programming . Like artists.

3.  Reusable via prefab (well, this is very debatable as compare OOP!!)

4.  ...

### When?

1.  Trade off between complexity and performance is carefully
    considered.

2.  Input and output are well setup. Assets are all in good format,
    output are well defined, workflow and routines are fixed. Seen in
    commercial 3D game engine.

### Where?

1.  Mainly to handles/ manage your data and entities.

2.  Usually in MMO where BLOB happen.

3.  Batch/ cache processing enviroment, device. GPU, others.

Why not?
--------

1.  It's easy to get it wrong as you often come from OOP world (of
    course, because you are Java developer).

2.  Can result in done wrong too much time, that un affordable!!

3.  It's **not** an certainly proved technology (that why we here)

4.  Its have bad issues

5.  Only suite for cases (not every)

6.  No good IDE, GUI support in Java or JME3 world currently

### When not?

1.  Limited time and first try! ( can be good if in limited time but ES
    is production mode ready)

2.  Small game, simple gameplay ...

Pros -- cons?
-------------

Here, I listed the pros -- cons of the COP and Pure data ES.

::: {.warning}
needed previewing and under heavy concerning!
:::

::: {.important}
You can see I try as the one who repeat sentences that speak out by
others in various sources as a short manner! So this list and
information need clarification of correction afterward!
:::

Pros:
-----

1.  No BLOB anti-pattern, no deep inheritance consider bad effects

Read: <http://gamearchitect.net/Articles/GameObjects1.html>

A lot of good things come if done "right"!

1.  Simple, intuitive

2.  Communication made simple

3.  What you see is what you have → composing

4.  Reusable with prefab

5.  Batch / Concurent processing/caching as in modern CPU, GPU

6.  ... ten more

<http://piemaster.net/2011/07/entity-component-primer/>

Cons:
-----

::: {.important}
\'Problem\' here means the \'problem\' to solve not a bad situation!
:::

1.  No OOP: COP Done "right" means forget about almost all OOP things:
    Pure data, Class become Type, no inheritance, encapsulation...etc ,
    no best of both world!

2.  Spliting dilemma: Same with OOP Classify problem: How to split, how
    to change the data when you change the splits?

3.  Duplicated component: Same root as confusion in component spliting
    but, this problem about how can we made a more than one component of
    a kind per object entity... Ex: Car with 4 wheels, the component
    will be a 1stWheel, 2ndWheel, or a single list of WheelComponent...
    ?

4.  Data resampling problem in game, data such as textures, text, 3d
    models everything ... should be crafted: made, converted again to
    suite with existing data model -- that's the component in the ES.

5.  Mindset change problem: One will have to re-code a fews time to
    implement an ES, in initial, half ass and full level.

6.  Flat table problem: Because ES is a big table by nature, with
    component set is a row. It's as efficient even less than a big
    table, which form the flat table problem as seen in many indexed
    base database. Tree, Graph and other data structure will almost
    immediately break the ES contract!!

7.  Observation problem: As update beat over listening method, ES
    restrict the observation methods a lot.

8.  Sercurity problem : No encapsulation, kind of no private POJO mean
    no java power in protecting data, a lot of security holes! ES
    implementations and COP forget all about sercurity danger as
    Component contracted to be processed by Processor but not hiding its
    content.

9.  Scale : In theory, ES should scale well..!!! But read this carefully
    or mislead it, enterprise system need much more than just a way to
    orginize your data!!!

:::note
Because a lot of people find interests about the down side of ES, I've
listed them carefully here
[cons](../../../jme3/contributions/entitysystem/detailed/cons).
After knowing the acceptable solutions from the authors, I will remove
or marked the solved problem! \[Peace! :p\]
:::

ES consider good design in real-time app?
-----------------------------------------

::: {.warning}
Of course, ES has its mising features!!!!
:::

But for some reason its design 's consider good for real=time
application like a "common" video Game, or "common" simmulation;
especially common in MMO world.

Here is a short of 'why' answers from a software architecture designer
view, explain based on its borrowed ideas: \[This is very different from
various source you've read, because it's not embeded any implementation
details!!!\]

1.  Decoupling : each piece can work together without aware of each
    other.

2.  Resuable : can be easily bring to use again somewhere else.

3.  Composable : each piece can work together

have fundamental relationship with decoupling.

1.  Primitive unit : each piece from a simplest form which contain,
    fullfil it self.

have fundamental relationship with decoupling.

(\*) These lead to advantages in development:

1.  do it in one place only when doing implementation (coding,
    configs...), .

2.  intuitive and ease of development jobs (compose entity with
    component drag and drop)

3.  distributed jobs, assets

4.  reuse data, code which in existed component

5.  unit test

6.  \[more\]

------------------------------------------------------------------------------------------

1.  Data who decide: data decide each and every result, activities of
    the software

2.  Everything is Data: all piece in the software system is Data

3.  Repository existence: exist a place to keep all the data, the one
    door to reach them

(\*) These open the world of complex gameplay and distributed persistent
like seen in MMO. A single data change can result in change in the
gameplay; a
------------------------------------------------------------------------------------------

1.  Homogeneous data : data is treat the same

2.  Regular workload : software that run at regular rate, kind of
    ballance trade off between performance and complexity

3.  Simple dataflow: the flow of the data is easy to watch, inspect,
    start stop, manipulate. As the root reason for regular workload!

(\*) These lead to a lot of simple but efficient algorithm to get high
performance in runtime for a software such like a "common" video game,
which run in console, GPU, CPU which envolve and share the same model
with cache and batch intructions, an a certain hearbeat...Notice the
bottleneck of CPU-GPU and between different processing unit, platform is
the most headache of Game designer for decade is ease with the regular
workload; let the game run smoothly and stable, result into nice visual
representation..

ES consider bad design in ...?
------------------------------

From \@pspeed:

      It is a bad design choice where:
      - there aren’t many entities and/or the behavior is so clearly defined that you’d just implement it one or two classes. Thing card games, a lot of puzzle games, etc..
      - the game is so simple that it’s just implemented as JME controls and a few app states. You could use an ES here but it would be wasted.
      - the game logic cuts across all objects nearly all the time. (I think of card games and puzzle games again.) This usually implies that there are few entities, though.
      - the team doing the work will have trouble understanding an ES. To me this is a huge one. Sometimes our choice of technologies is not dictated by what might be technically best… but what is technically best for the skills of the team. For example, if your artist only knows Sketchup then Blender is probably not the right tool even if it is superior in many ways.

Known issues:
-------------

Even if done right, the ES also have it underlying issues which noticed
by its authors, (that means annoying things)!

**Why this section havs things from the Cons section but consider
differrently?**

    In Cons section descible problem should be concerned, likely to be done wrong, or the limit of the design they can be solve in implementations or not is not important!

    Known issue is the problem persist in even the well designed; or persist due to the underlying infrastructure, application, programming language, etc!!

### Communication:

Happen in non pure data solution, when Components don't function
independently of each other. Some means of communication is necessary •
Two approaches (both viable):

    – Direct communication using dynamic cast and function calls
    – Indirect communication using message passing

In pure data solution, by not query or just loop through interested
component at one update cycle, the Processor eases out the need of other
communication, but in complex scenario, such as combine with outter
event handling such as Network, where message passing is nature, the
problem still persist!

as decribled in reference \[6\] Read:
<http://acmantwerp.acm.org/wp-content/uploads/2010/10/componentbasedprogramming.pdf>
-----------------------------------------------------------

### Script

The "script problem" happen by the same reason with the "communication
problem" mixed with "pure data or not" problem. When an component is
hard to inspect, its outter relationship hard to define and its property
is rejected to change, how can you script it?

Read: <http://blog.gemserk.com/2011/11/13/scripting-with-artemis/>

Nearly one end up back to half ass solution, not a pure data ES if their
really need scripting in.
-----------------------------------------------------------

### Arbitrary Routine and Query

<https://hub.jmonkeyengine.org/t/in-range-detection-with-lots-of-entities/26910>

Implementation Approaches
=========================

OOP to COP . or else?
=====================

\@atomix POV:

As said, as a long term java developer and also an artist. I can not see
a strong, confident reason why we should switch over to COP at the
moment.

BLOB is not a problem with a carefully designed software, same as hard
as split your components... Deep inheritance even multi inheritance
problem can not be reached in an indie project, and even it reached,
maintain it always easier than redesign a 3D model to change the export
pipeline!!!

Also the tangled wires between inheritance form the nature of
programming and matter in the universal. :p

**BUT** They have IDE support, profiler, proved technologies, lot
more... We talking about a no IDE support paradigm with plain text
editor, table and some black magic, tell me more about the company will
approve your plan?

Some alternate solution may solve almost your design goal when you
likely to use an ES:

1.  Smart bean framework : try Spring, EJB. For Enterprise, if you've
    known EJB and Spring, you will not bet in home grown ES, dont you?

2.  Actor framework: try AKKA

3.  If you see java as a failure, try Scala's trail ...

::: {.warning}
So, my last advice is: If you are not doing MMO **Take a look in other
alternative technologies.** !!!!
:::

1.  Take a look at reference \[7\] and <http://lambdor.net/?p=171> , the
    guy suggest you to switch to Functional reactive programming :p

2.  Try Scala and AKKA and read more about concurrency , don't use flat
    table!!!

Change of mindset
=================

::: {.important}
I think this should be in another page or even in a book! :p
:::

This chapter dedicated to people still who really want to **switch to
this new paradigm** after all the warning and awarenesses. So this
chapter will mainly answer the BIG question:

**What should be change to adapt to this new paradigm?**

What will we face
-----------------

What should be change
---------------------

OOP Object Modeling vs COP Object Modeling
------------------------------------------

Team management
---------------

Java Entity System projects
===========================

Some open source Entity System implementation projects:

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

### Spartan: \[used for Slick. abandoned\]

GoogleCode: <http://code.google.com/p/spartanframework/>
-------------------------------------------------------------

JME integrated
--------------

### Zay-ES : \@pspeed

Post: <https://hub.jmonkeyengine.org/t/my-es-in-contrib-zay-es/25702>

Forum : <https://hub.jmonkeyengine.org/c/user-code-projects/zay-es>

Wiki:
[jme3:contributions:entitysystem](../../../jme3/contributions/entitysystem)

Links:
<https://hub.jmonkeyengine.org/t/zay-es-links-more-chars-because-forum-is-dumb/27135>

Interview:

### EntityMonkey : \@zzuegg

Post:
<https://hub.jmonkeyengine.org/t/entitymonkey-a-simple-entity-system-for-jme/23235>

### Private : \@Empire phoenix

Interview:

Implementation, and scope of each projects:
-------------------------------------------

The comparasions will focus in these below points, follow with the
scope, status of each projects

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

::: {.important}
The Comparasion table is in Google doc: Help me fill it!!!!
:::

<https://docs.google.com/document/d/1pRTZPFtHz7pUzYcoFiSTm-mUCA-BVYvFpUp6diIsuEo/edit?usp=sharing>

Researches & Articles
=====================

Link to articles, researches and papers you should read:

**Start of the wave**

\[1\]
<http://t-machine.org/index.php/2007/09/03/entity-systems-are-the-future-of-mmog-development-part-1/>

**Sploreg ES in JME introduction in indiedb**

\[2\]
<http://www.indiedb.com/games/attack-of-the-gelatinous-blob/news/the-entity-system>

**Worth to read, pspeed conversation with Michael Leahy, also lead
another ES project TyphonRT**

\[3\]
<http://t-machine.org/index.php/2011/06/24/using-an-entity-system-with-jmonkeyengine-mythruna/>

**Our wiki link**

\[4\]
[jme3:contributions:entitysystem:introduction](../../../jme3/contributions/entitysystem/introduction)

**Beside of BLOB anti pattern, explain why ES suite as data in modern
GPU, CPU!**

\[5\] <http://gamesfromwithin.com/data-oriented-design>

**Worth to read, paper of another C++ ES leader of cistron project
<http://code.google.com/p/cistron>**

\[6\]
<http://acmantwerp.acm.org/wp-content/uploads/2010/10/componentbasedprogramming.pdf>

**Stack over flow topic, links, texts and especially interesting
recommendation to switch form CBSE , COP to functional programming!**

\[7\]
<http://stackoverflow.com/questions/1901251/component-based-game-engine-design>

**Link to other entitiy system approaches in its own wikidot!**

\[8\] <http://entity-systems.wikidot.com/es-approaches>

\[9\] An interesting write up in GDD about ES and Events in a game
engine. And some production,workflow concerns

<http://stefan.boxbox.org/2012/11/14/game-development-design-1-the-component-system/>

**\[More?\]**

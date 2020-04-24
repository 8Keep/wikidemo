Steer behaviors allows you to control the locomotion of "characters",
this can reduce drastically the time needed to develop a game since for
almost every game we need to set how these "characters" will be moving
around the scene.

+-----------------------------------+-----------------------------------+
| **Steer behaviors in action.**    |                                   |
|                                   |                                   |
| ![youtu.be/yyzTntsGV00](.         |                                   |
| ./../jme3/advanced/hqdefault.jpg) |                                   |
+-----------------------------------+-----------------------------------+

: YouTube

Be sure that you have checked the demos: They can be downloaded here:
[jmesteer.bdevel.org](http://jmesteer.bdevel.org)

First steps
===========

The steer behaviors AI is integrated with MonkeyBrains so before start
coding be sure that you have checked the [monkey brains
documentation](../../jme3/advanced/monkey_brains).

Be sure to create a reference to MonkeyBrains from your project.

Finally, do not forget to import the
`com.jme3.ai.agents.behaviors.npc.steering` package.

Overview
========

**Avaliable behaviours:**

-   Move

-   Seek

-   Arrive

-   Flee

-   Pursuit

-   Leader follow

-   Evade

-   Cohesion

-   Alignment

-   Obstacle Avoidance

-   Unaligned obstacle avoidance

-   Hide

-   Slow

-   Queuing

-   Containment

-   Path follow

-   Wall approach

-   Wander Area

-   Simple Wander

-   Relative wander

-   Sphere wander

-   Box explore

-   Separation

All the behaviours extend from the `AbstractSteeringBehavior` class.

Adding a steer behavior
=======================

Create instances from the steer behavior classes, They are located in
the `com.jme3.ai.agents.behaviors.npc.steering` package.

If we want to add more than one steer behavior, we need to create a
container:

::: {.warning}
If you add more than one steer behavior to a `SimpleMainBehavior` it
will cause problems in the rotation of the agents.
:::

+-----------------------------------+-----------------------------------+
| Container                         | Purpose                           |
+===================================+===================================+
| CompoundSteeringBehavior          | Contains and merges several       |
|                                   | `AbstractSteeringBehavior`        |
|                                   | instances                         |
+-----------------------------------+-----------------------------------+
| BalancedCompoundSteeringBehavior  | Each force generated inside this  |
|                                   | container is reduced in relation  |
|                                   | with a proportion factor:         |
|                                   | "Partial Force / "Total container |
|                                   | force                             |
+-----------------------------------+-----------------------------------+

Once we know which container fits better for our agent, We create a new
instance and add all the behaviors that we need:

```java
SimpleMainBehaviour mainBehavior = new SimpleMainBehavior(myAgent);
    CompoundSteeringBehavior steer = new CompoundSteeringBehavior(myAgent);
    //BalancedCompoundSteeringBehavior steer = new BalancedCompoundSteeringBehavior(myAgent);
    steer.addSteerBehavior(steerBehavior1);
    steer.addSteerBehavior(steerBehavior2);
mainBehaviour.addBehavior(steer);
myAgent.setMainBehavior(mainBehavior);
```

:::note
Note that you can have nested containers, like is shown in the following
example:
:::

```java
SimpleMainBehaviour mainBehavior = new SimpleMainBehavior(myAgent);
    CompoundSteeringBehavior steer = new CompoundSteeringBehavior(myAgent);
        BalancedCompoundSteeringBehavior nestedSteer = new BalancedCompoundSteeringBehavior(myAgent);
        nestedSteer.addSteerBehavior(steerBehavior1);
    steer.addSteerBehavior(nestedSteer);
    steer.addSteerBehavior(steerBehavior2);
mainBehavior.addBehavior(steer);
myAgent.setMainBehavior(mainBehavior);
```

Prioritizing behaviors
======================

You can assign priority layers: The steering controller first checks the
higher layer to see if all the behaviors returns a value higher than
`minLengthToInvalidSteer`, if so it uses that layer. Otherwise, it moves
on to the second layer, and so on.

To assign priority layers add behaviors with the following function:

      addSteerBehavior (AbstractSteeringBehavior behavior, int priority, float minLengthToInvalidSteer)

:::note
To optimize the process speed add the behaviors with the lowest priority
first.
:::

:::note
The layer and the min length to consider the behavior invalid are 0 by
default.
:::

Setting up forces
=================

If a behavior extends from the `AbstractStrengthSteeringBehavior` class,
you can manage how the produced forces will work.

Use `setupStrengthControl(float scalar)` to increase/decrease the steer
force produced by a behavior or `setupStrengthControl(Plane plane)` If
you want to work with 2D behaviors.

Example:

```java
    Plane horizontalPlane = new Plane(new Vector3f(0,1,0), 0);

    steerBehavior1.setupStrengthControl(0.5f); //Force reduced a 50%
    steerBehavior2.setupStrengthControl(horizontalPlane); //Force contained in the XZ plane
    steerContainer.setupStrengthControl(horizontalPlane, 2f); //Contained in the XZ plane and increased a 100%
```

Implementing your own steer behavior
====================================

To benefit from all the features, you have to create a new class that
extends from `AbstractStrengthSteeringBehavior`.

The responsible for the agent's acceleration is the vector returned in
the `calculateRawSteering()` method:

```java
    @Override
    protected Vector3f calculateRawSteering() {
        Vector3f steerForce = Vector3f.ZERO;

        //calculations

        return steerForce;
    }
```

In addition, you can change a brake factor which will reduce the
resultant velocity for the agent:

```java
    @Override
    protected Vector3f calculateRawSteering(){
        this.setBrakingFactor(0.5f); //The agent's velocity will be reduced a 50%
        return Vector3f.ZERO;
    }
```

::: {.warning}
The braking force must be a float contained in the \[0,1\] interval
:::

:::note
0 means the maximum braking force and 1 No braking force
:::

Strict arguments
----------------

To ensure that the behavior will work as you had planned it to work It's
recommended to create your own
[IllegalArgumentException](http://docs.oracle.com/javase/7/docs/api/java/lang/IllegalArgumentException.html)
class. To do this, create your own container class extending from
`com.jme3.ai.agents.behaviors.npc.steering.SteeringExceptions`; Each
exception inside the container class extends from
`SteeringBehaviorException`. Furthermore, It will help users to
recognize better which is the origin of any problem.

Example:

```java
    public class CustomSteeringExceptions extends SteeringExceptions  {

        public static class CustomRuntimeException extends SteeringBehaviorException {
            public CustomRuntimeException(String msg) { super(msg); }
        }

        // ... other exceptions ...
    }
```

```java
    public SteerBehaviorConstructor(Agent agent, int value, Spatial spatial) {
        super(agent, spatial);
        if(value > 5) throw new CustomSteeringExceptions.customRuntimeException ("Value must be lower than 5");
        this.value = value;
    }
```

Useful links
============

java steer behaviors project:
[jmesteer.bdevel.org](http://jmesteer.bdevel.org/)

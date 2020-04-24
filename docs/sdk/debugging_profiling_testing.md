Debugging, testing and profiling are important parts of the development
cycle. This documentation shows you how to make the most of the
jMonkeyEngine SDK's assistive features.

:::note
Since the jMonkeyEngine SDK is based on the NetBeans IDE and the
NetBeans Platform, you can learn about certain jMonkeyEngine SDK
features by reading the corresponding NetBeans IDE tutorials (in the
"see also links).
:::

Testing
=======

The jMonkeyEngine SDK supports the JUnit testing framework. It is a good
practice to write tests (assertions) for each of your classes. Each test
makes certain this "unit (e.g. method) meets its design and behaves as
intended. Run your tests after each major change and you immediately see
if you broke something.

Creating Tests
--------------

1.  Right-click a Java file in the Projects window and choose Tools \>
    Create JUnit Tests.

2.  Click OK. The jMonkeyEngine SDK creates a JUnit test skeleton in the
    Test Package directory.

3.  The body of each generated test method is provided solely as a
    guide. In their place, you need to write your actual test cases!

4.  You can use tests such as
    `assertTrue(), assertFalse(), assertEquals()`, or `assert()`.

    -   The following example assertions test an addition method:
        `assert( add(1, 1) == 2); assertTrue( add(7,-5) == add(-5,7) )…`

5.  "Ideally, you write a test case for every method (100% coverage).

:::note
Use the Navigate menu to jump from a test to its tested class, and back!
:::

Running Tests
-------------

1.  Run one or all tests:

    -   Right-click the class in the Projects window and Choose Test
        File, or

    -   Right-click the project and select Test to run all tests.

2.  Check the Test window to see successful tests (green) and failures
    (red).

3.  If a test fails that has succeeded before, you know that your latest
    changes broke something!

Using unit tests regularly allows you to detect side-effects on classes
that you thought were unaffected by a code change.

See also:

-   [Writing JUnit
    Tests](http://netbeans.org/kb/docs/java/junit-intro.html)

-   <http://www.junit.org>

-   [Java
    Assertions](https://docs.oracle.com/javase/7/docs/technotes/guides/language/assert.html)

Debugging
=========

In the jMonkeyEngine SDK, you have access to a debugger to examine your
application for errors such as deadlocks and NullPointerExeptions. You
can set breakpoints, watch variables, and execute your code line-by-line
to identify the source of a problem.

1.  First, you set breakpoints and/or watches before the problematic
    lines of code where you suspect the bug.

    -   If you want to watch a variable's value: Right-click on a
        variable and select New Watch from the context menu.

    -   If you want to step through the execution line by line:
        Right-click on a line and choose Toggle Line Breakpoint; a pink
        box appears as a mark.

2.  Choose "Debug \> Debug Main Project to start a debugger session for
    the whole project. Or, right-click a file and select Debug File to
    debug only one file.

3.  The application starts running normally. If you have set a
    breakpoint, the execution stops in this line. Debugger windows open
    and print debugger output.

4.  You can do many things now to track down a bug:

    -   Inspect the values of local variables.

    -   Use the Step buttons in the top to step into, out of, and over
        expressions while you watch the execution.

    -   Navigate through your application's call stack. Right-click on
        threads to suspend or resume them.

    -   Choose Debug \> Evaluate Expression from the menu to evaluate an
        expression.

    -   Move the mouse pointer over a variable to inspect its value in a
        tooltip.

    -   Inspect the classes loaded on the heap and the percentage and
        number of object instances. Right-click a class in the Loaded
        Classes window and choose Show in Instances view (JDK 6 only).

    -   And more...

5.  To stop debugging, choose Debug \> End Debugger Session from the
    menu.

Profiling
=========

The profiler tool is used to monitor thread states, CPU performance, and
memory usage of your jme3 application. It helps you detect memory leaks
and bottlenecks in your game while it's running.

Installing the Profiler
-----------------------

If you do not see a Profiler menu in the jMonkeyEngine SDK, you need to
download the Profiler plugin first.

1.  Open the Tools \> Plugins menu, and got to the "Available plugins
    tab

2.  Find the "Java Profiler plugin ("Java SE category) and check the
    Install box.

3.  Click the install button and follow the instructions.

4.  When you start the profiler for the first time, you are prompted to
    run a calibration once. Click OK in the "Profiler integration dialog
    to complete the installation process.

Monitoring and Analyzing
------------------------

1.  Choose Profile Project from the Profile menu.

2.  Select one of three tasks:

    -   **Monitor Application** -- Collect high-level information about
        properties of the target JVM, including thread activity and
        memory allocations.

    -   **Analyze CPU Performance** -- Collect detailed data on
        application performance, including the time to execute methods
        and the number of times the method is invoked.

    -   **Analyze Memory Usage** -- Collect detailed data on object
        allocation and garbage collection.

3.  Click Run. Your application starts and runs normally.

4.  Use the Profiling window to track and collect live profiling results
    while you application is running.

Comparing Snapshots
-------------------

Click the Take Snapshot button to capture the profiling data for later!

-   You can store and view snapshots in the Profiling window.

-   Choose Compare Snapshots from the profiler window to compare two
    selected snapshots

Using Profiling Points
----------------------

Profiling points are similar to debugger breakpoints: You place them
directly in the source code and they can trigger profiling behaviour
when hit.

-   Open a class in the browser, right-click in a line, and select
    Profiling \> Insert Profiling Point to add a profiling point here.

-   Use Profiling points if you need a trigger to reset profiling
    results, take a snapshot or heap dump, record the timestamp or
    execution time of a code fragment, stop and start a load generator
    script (requires the load generator plugin).

-   Open the Profiling Points window to view, modify and delete the
    Profiling Points in your projects.

See also:

-   [Introduction to Profiling Java Applications
    (netbeans.org)](http://netbeans.org/kb/docs/java/profiler-intro.html)

-   [Using Profiling Points
    (netbeans.org)](http://netbeans.org/kb/docs/java/profiler-profilingpoints.html)
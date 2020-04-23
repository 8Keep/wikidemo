Whether you work in a development team or alone: File versioning is a
handy method to keep your code consistent, compare files line-by-line,
and even roll back unwanted changes. This documentation shows you how to
make the most of the SDK's integrated version control features for
Subversion, Mercurial, and Git.

For every team member, the file versioning workflow is as follows:

1.  Once: Download a working copy of the project from the repository
    ("checkout).

2.  Regularly: Upload your own changes to the repository ("commit).

3.  Regularly: Download updates by others from the repository ("update).

Note: Since the jMonkeyEngine SDK is based on the NetBeans Platform
framework, you can learn about certain jMonkeyEngine SDK features by
reading the corresponding NetBeans IDE tutorials (in the "see also
links).

Version Control Systems
=======================

The jMonkeyEngine SDK supports various Version Control Systems such as
Subversion, Mercurial, and Git. No matter which of them you use, they
all share a common user interface.

You can use file versioning alone or in a team. The advantages are that
you can keep track of changes (who did it, when, and why), you can
compare versions line-by-line, you can revert changes to files and
lines, merge multiple changes to one file, and you can even undelete
files.

Creating a Repository (Upload)
==============================

Requirements:

-   You must have a project that you want to version.

-   You must have version control software installed (Subversion,
    Mercurial, or Git) and have initialized a repository.

    -   Tip: For Subversion, for example, the init command looks like
        this example: `svnadmin create /home/joe/jMonkeyProjects/MyGame`

-   The computer where the repository is to be hosted must be available
    in your team's network, or you will only be able to use your repo
    locally.

    -   Tip: Hosts such as SourceForge, GoogleCode, dev.java.net offer
        free version control services for open-source projects.

Now you create a repository to store your project's files.

1.  In the jMonkeyEngine SDK, right-click the project in the Projects
    window and choose Versioning \> Import Into Subversion Repository
    (or initialize Mercurial Project, etc, respectively).

    -   Tip: If you haven't evaluated yet which system to choose, start
        with Subversion for now.

2.  Go through the wizard and fill in the fields to set up the
    repository.

Checking Out a Repository (Download)
====================================

You and your team mates check out (download) the repository to their
individual workstations.

1.  Go to the Team menu and choose Subversion \> Checkout (or Git or
    Mercurial respectively)

2.  Fill in your repo data into the wizard and click Finish.

    -   A typical repository URL looks like this example:
        `http://jmonkeyengine.googlecode.com/svn/trunk/engine`

    -   If you want to be able to submit changes, you must have a
        username and password to this repository. Otherwise leave these
        fields blank.

3.  The repository is downloaded and stored in the location you chose.

4.  Use the File \> Open Project menu to open the checkout as project
    and start working.

    -   If the checkout is not recognized you need to choose File \> New
        Project from Existing Sources

Of course you can also check out existing repositories and access code
from other open-source projects (e.g. SourceForge, GoogleCode,
dev.java.net).

Updating and Committing Changes (Send and Receive)
==================================================

Receiving the latest changes from the team's repository is referred to
as `updating`. Sending your changes to the team's repository is refered
to as `commiting`.

1.  Before making changes, right-click the project and select
    Subversion \> Update to make sure you have the latest revision.

    -   Get in the habit of updating regularly, always before you edit a
        version controlled file. It will spare you much grief.

2.  After making changes to the project, make certain your change did
    not break anything.

    a.  Update, build, run, test.

    b.  Look at the red/green/blue marks in the editor to review what
        you have deleted/added/changed. Click the marks to review all
        differences in a file.

    c.  Choose Subversion \> Show Changes to see all files that were
        recently changed -- by you and other team members.

    d.  *Update again* in case your team mates made changes while you
        were reviewing.

3.  If there are no conflicts and you want to commit your changes,
    choose Subversion \> Commit from the menu.

4.  Write a commit message describing what you changed.

    -   Remember, you are writing "a message to your future self. Never
        write redundant stuff like "I changed something.

Comparing and Reverting Changes
===============================

-   If you and another committer edited the same line, there is a
    conflict, and the jMonkeyEngine SDK will show an error message.

    -   Right-click a file Choose Subversion \> Resolve Conflict

        i.  Compare the conflicting versions. Press the buttons to
            accept or reject each change individually.

        ii. After the resolver shows green, save the resolution.

        iii. Build and test the resolution, update, and commit.

-   Right-click a file and choose Subversion \> Search History.

    -   You can inspect a file's history and see who changed what, why,
        and when.

    -   You can roll back a file to a historic version if necessary.

-   In general, you can choose Subversion \> Diff for any file to see
    two versions of a file next to each other.

No Version Control? Local History!
==================================

If you do not use any version control, you can still track changes in
projects to a certain degree.

-   Right-click a file or directory and choose Local History to show or
    revert changes, or undelete files.

-   You can also select any two files in the Project window and choose
    Tools \> Diff to compare them.

-   Local History only works for files edited in jMonkeyEngine SDK
    Projects (It does not work for other files, e.g. in the Favorites
    window.)

See also:

-   [Source Code Management with
    Subversion](http://netbeans.org/kb/docs/ide/subversion.html)

Official translations of the wiki are not practical due to varying
dialects, dodgy translator programs, and the increased workload needed
to officially support the translations. A different approach is to have
monkeys, who wish to contribute to the community, run their own
translation of the wiki.

This tutorial will go into the details of how to setup a copy of the
wiki on [GitHub](https://github.com/) that looks and feels like the
official wiki, including
[Travis-CI](https://github.com/marketplace/travis-ci) automatically
converting your AsciiDoc content to HTML, then publishing those files on
each commit.

You are not required to translate every page or even mirror changes to
the official wiki. What is required is a linked wiki be robust enough to
actually help other monkeys and that the content is kept current. If
it's deemed worthy, a link to your repository, whether its stored on
your own domain or not, will be added to the main page of the wiki under
the [Languages](../documentation.xml#languages#) topic.

::: {.warning}
Although this is a tutorial on setting up and configuring your own copy
of the official wiki, you still must adhere to the [jMonkeyEngine
licensing](../bsd_license).

This includes the use of a domain name that includes the jMonkeyEngine
name.
:::

Prerequisites
=============

For this tutorial you can either setup with Git, or the Atom Editor,
which uses basic GitHub commands by default. You will be **loosely**
implementing the instructions from [Steve
Klabnik](https://github.com/steveklabnik/automatically_update_github_pages_with_travis_example).

You will need to meet these requirements to continue:

-   A [GitHub](https://github.com/) account.

-   Either [Git](https://help.github.com/articles/set-up-git/) or the
    [Atom Editor](../wiki/atom_editor) installed on your system.

::: {.note}
The Atom editor also has a [Git Plus](https://atom.io/packages/git-plus)
package that uses Git if it's already on your system. Open
`File Settings` and enter "git" into the search box to locate and
install.
:::

:::note
For a list of git commands, use one of these:

-   [Git Cheat
    Sheets](https://services.github.com/on-demand/resources/cheatsheets/)

-   [git - the simple guide](http://rogerdudler.github.io/git-guide/)

See also Travis-CI:

-   [Getting Started](https://docs.travis-ci.com/user/getting-started/)
:::

GitHub/Travis CI Setup
======================

This topic applies to both Git and the Atom Editor. You must do this
before you do anything else.

1.  Create a [new
    repository](https://help.github.com/articles/creating-a-new-repository/)
    on [github.com](https://github.com/) for your wiki. (NOT a fork)

    a.  Enter a unique name for your repository.

2.  After your repository has been created, you will need to add a new
    "gh-pages"
    [branch](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/).

    a.  This will automatically setup your repository for compiling
        "gh-pages".

    b.  After creating the "gh-pages" branch, from your repositories
        main page, click the ![cog](./images/icons/cog.png) Settings
        link and scroll down to the "GitHub Pages" panel for more
        configuration options and to see your sites new URL.

        ::: {.note}
        There are two URLs you will need for configuration.

        -   Your `gh-pages` URL: https://username.github.io/repo-name/

        -   Your `repository` URL: https://github.com/username/repo-name

        This is how they will be referred to in this tutorial.
        :::

3.  Setup GH\_TOKEN variable:

    a.  You need to generate a
        [GH\_TOKEN](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)
        in github.com, and set up Environment Variables in travis-ci.org
        or travis-ci.com, depending on whether your repository is public
        or not. This variable will be used in the deploy\_ghpages.sh
        file.

    b.  Describe it however you wish and then you will need to check
        some boxes. Check these ones:

        -   ✓ public\_repo

            If your repository is private, you can set repo instead.

            GitHub will create the token and show a page with the value.

            ::: {.warning}
            **THIS IS THE ONLY TIME YOU GET TO SEE THIS SO DON'T CLICK
            AWAY IMMEDIATELY!**
            :::

            You will need to copy this token into someplace you trust.
            It'll never be shown to you after this time, so it's
            important to double-check your work. You can always
            regenerate a new token, but then you will have to change any
            script or apps that use it.

```{=html}
<!-- -->
```
1.  Click your name icon and select `Settings Billing Marketplace` or
    the "Marketplace" link at the top of the page header.

2.  Click the "Travis-CI" link. If you don't see one listed, find it
    using the search box.

3.  Scroll to the bottom of the page and under "Pricing and setup"
    select the "Open Source" option if this is a public\_repo or the
    payment plan of your choice.

    a.  When ready, select the Install button.

    b.  Click through until you are redirected to the Travis-Ci website.

4.  On Travis-CI, flick the repository switch on for your gh-pages
    project.

    :::note
    You can't see your project on the list? Click on the Sync account
    button (top right) and it should be OK.
    :::

5.  Click the ![cog](./images/icons/cog.png) cog to go to the settings
    tab and configure it.

    a.  Check some options on General:

        i.  check the Build only if .travis.yml is present option.

        ii. Check the Build pushed options.

    b.  Create some Environment Variables that will be used in
        .travis.yml file:

        i.  GH\_TOKEN: the token created on previous step.

            ::: {.warning}
            Uncheck the Display value in build log option. This is the
            default action.
            :::

Using Git Command Line to finish
--------------------------------

1.  Clone the [wiki](https://github.com/jMonkeyEngine/wiki) or your fork
    of the wiki and your new repository. Cloning and pushing takes some
    time due to the size of the wiki. Be patient.

        $ git clone https://github.com/jMonkeyEngine/wiki.git
        $ git clone https://github.com/user/repository.git
        $ cd repository
        $ git checkout master

2.  Copy everything from the localized wiki repository to the localized
    new repository, especially these files:

    a.  .travis.yml

    b.  build.gradle

    c.  deploy\_ghpages.sh

    d.  gradlew

        `Travis CI` will execute `./gradlew asciidoctor` and
        `./deploy_ghpages.sh` after you push your commits.

        ::: {.important}
        If you have ever forked the official wiki, I suggest you rename
        it to origin\_wiki or official\_wiki. Then, you can still
        contribute to the official wiki with that fork.
        :::

3.  Give gradlew, deploy\_ghpages.sh permission to be executed. If you
    don't do this, travis-ci.org will fail, due to no permission.

        git update-index --chmod=+x deploy_ghpages.sh
        git update-index --chmod=+x gradlew
        git push

4.  At this point you need to change the wiki specific attributes to
    complete the setup.

    -   See [Changing Wiki Specific
        Attributes](../wiki/wiki_translation.xml#Changing-Wiki-Specific-Attributes#)

Using Atom Editor to finish
---------------------------

This topic assumes you have already downloaded, installed and configured
the [Atom Editor](../wiki\atom_editor) as well as cloned the
[wiki](https://github.com/jMonkeyEngine/wiki) or your fork of the wiki
and it's open in the Atom Editor.

1.  In the Atom Editor, select `File New Window` or Ctrl + Shift + N.

    a.  Delete the new page that opens by default.

2.  In the new window, select `Packages Command Palette Toggle` or
    Ctrl + Shift + P.

    a.  Enter "github" into the search box.

    b.  Select the GitHub Clone button.

    c.  Enter the URL to your `repository`.

    d.  When ready, click the Clone button.

3.  Copy everything from the localized wiki repository to the localized
    new repository, especially these files:

    a.  .travis.yml

    b.  build.gradle

    c.  deploy\_ghpages.sh

    d.  gradlew

4.  Give gradlew, deploy\_ghpages.sh permission to be executed. If you
    don't do this, travis-ci.org will fail, due to no permission.

    a.  If you use Git Plus, select `Packages Git Plus Run` and enter
        these arguments.

        **Using Git Plus.**

            git update-index --chmod=+x deploy_ghpages.sh
            git update-index --chmod=+x gradlew
            git push

    b.  If you dont have Git, then edit the `travis.yml` file and add
        this after the `branches:` command.

        **No Git Installed.**

            branches:
              except:
                - gh-pages
            # No git, change permissions here.
            before_install:
             - chmod +x deploy_ghpages.sh
             - chmod +x gradlew

5.  At this point you need to change the wiki specific attributes to
    complete the setup.

    -   See [Changing Wiki Specific
        Attributes](../wiki/wiki_translation.xml#Changing-Wiki-Specific-Attributes#)

Changing Wiki Specific Attributes
---------------------------------

::: {.important}
These changes will make your copy of the wiki, including all links, 100%
dependent on your `gh-pages` branch. You're on your own after this point
so if you want selective links to still point to the official wiki, it's
up to you to determine which.

At minimum, you still have to change the attributes "endpoint-url",
"wiki\_link\_edit\_prefix", and "wiki\_link\_create\_prefix" in the
"**build.gradle**" file.
:::

1.  Using [Git Grep](https://git-scm.com/docs/git-grep) or the command
    line editor of your choice, find and replace the following:

    a.  Find the official wiki `gh-pages` address of
        `https://wiki.jmonkeyengine.org`.

    b.  Replace it with your `gh-pages` address
        `https://username.github.io/repo-name`.

    c.  Find the official wiki `repository` address of
        `https://github.com/jMonkeyEngine/wiki`.

    d.  Replace it with your `repository` address of
        `https://github.com/username/repo-name`.

2.  Change the [build status
    link](https://docs.travis-ci.com/user/status-images/) for your
    repository in the README.adoc page.

        image:https://travis-ci.org/jMonkeyEngine/wiki.svg?branch=master["Build Status", link="https://travis-ci.org/jMonkeyEngine/wiki"]

3.  After you have done all the above, commit and push to your wiki
    repository.

```{=html}
<!-- -->
```
1.  Select `Find Find in Project` or Ctrl + Shift + F.

    a.  Enter the official wiki `gh-pages` address of
        `https://wiki.jmonkeyengine.org` into the search box and then
        select the Find All button.

    b.  Enter your `gh-pages` address
        `https://username.github.io/repo-name` in the "Replace All" box
        and when ready, select the Replace All button.

    c.  Enter the official wiki `repository` address of
        `https://github.com/jMonkeyEngine/wiki` into the search box and
        then select the Find All button.

    d.  Enter your `repository` address of
        `https://github.com/username/repo-name` in the "Replace All" box
        and when ready, select the Replace All button.

2.  Change the [build status
    link](https://docs.travis-ci.com/user/status-images/) for your
    repository in the README.adoc page.

        image:https://travis-ci.org/jMonkeyEngine/wiki.svg?branch=master["Build Status", link="https://travis-ci.org/jMonkeyEngine/wiki"]

3.  After you have done all the above, `File Save All`.

4.  Open the Git panel, `Packages GitHub Toggle Git Tab` or Ctrl + 9.

    a.  Stage All.

    b.  Enter a "initial commit" message.

    c.  Commit and push to your wiki repository. You can see the result
        after a few minutes.

Conclusion
==========

Travis should have built your copy of the wiki and moved all the .html
to your "gh-pages" branch. If this didn't happen, then something is
wrong with your setup. Examine the logs of your repository from your
Travis-CI account to help you troubleshoot where you went wrong. You can
expand any of the command tags by clicking on them to get a more
in-depth reveal of the logged info.

When you feel your repository is ready, create a thread on the
[forum](https://hub.jmonkeyengine.org/) requesting it be added to the
official wiki. If approved, create a pull request of the wiki [main
page](https://github.com/jMonkeyEngine/wiki/blob/master/src/docs/asciidoc/documentation.adoc)
adding your repository link under the "Languages" topic.

Thanks for your interest in removing the language barrier that may
prevent other monkeys from learning more about the jMonkeyEngine.

Contributing to the Wiki is now easier than it ever has been. Using the
Atom editor will give you an easy to use interface that is
cross-platform, has code completion, syntax highlighting, instant
AsciiDoctor page previewing, with an integrated GitHub client. The only
thing it doesn't do is write the page for you.

Prerequisites
=============

1.  Have a [GitHub account](https://github.com/).

2.  Are a Wiki project member.

If you are not a member, you fork the repository into your GitHub
account and issue "Pull" requests to the Wiki repository from there.

To fork the Wiki repository into your GitHub Account:

1.  Navigate to <https://github.com/jMonkeyEngine/wiki>.

2.  In the menu at the top of the page, select the **Fork** button.

Downloading the Sources
=======================

1.  Download and install the Atom editor - <https://atom.io/>

2.  After installation is complete, you can customize the editor by
    selecting the `Choose A Theme` panel followed by the Theme Picker
    button.

3.  Once you are satisfied with the customization of the editor, you
    will need to add several packages to make Atom AsciiDoctor
    compatible. Package installation is painless.

    a.  From the `Install A Package` panel, select the Open Installer
        button, or select
        `Packages Settings View Install Packages/Themes` from the file
        header.

    b.  Enter "asciidoc" in the search box and press the Packages
        button.

        -   **language-asciidoc**\

        -   **asciidoc-preview**\

        -   **autocomplete-asciidoc**

            :::note
            You can add more GitHub controls to the editor by adding the
            package `git-plus`.
            :::

4.  To edit the Wiki you will need to clone the wiki repository.

    a.  From the `Command Palette` (ctrl+shift +P or
        `Packages Command Palette Toggle`), enter "git" into the search
        box.

    b.  Select GitHub: Clone.

    c.  Paste the wiki the URL into the `Clone from` box.

            https://github.com/jMonkeyEngine/wiki

        The `To directory` will automatically update when you do.

        ::: {.important}
        Use the URL to your repository fork and clone your fork if a
        non-member.
        :::

    d.  When you're ready, press the Clone button.

        The clone will take some time due to the size of the Wiki. Once
        cloned, a new `Project` tab will open on the left, and the `Git`
        and `GitHub Preview` tabs will open to the right. If they don't,
        you can open the Git tab using ctrl+shift+9 and the GitHub
        Preview tab using ctrl+shift+8. Alternatively, you can navigate
        the `Packages GitHub` menu. You will also notice in the lower
        right corner, on the `Status Bar`, you now have your GitHub
        control.

5.  Before you can commit any changes to the Wiki, you must configure at
    least the user.email and user.name variables for Git. You can do
    this via Git Bash, or manually, by following these instructions.

    -   Git Bash: [Setting your commit email address in
        Git](https://help.github.com/articles/setting-your-commit-email-address-in-git/)

    -   Manually: [Set your commit email address on
        GitHub](https://help.github.com/articles/setting-your-commit-email-address-on-github/)

        a.  Open your `.gitconfig` file (located in USER\_HOME) and add:

                [user]
                        name = yourname
                        email = youremail

        b.  To maintain your privacy, setup your email settings in your
            GitHub account and use the `users.noreply.github.com` email
            address.

6.  Lastly, you will need to create a GitHub token. Follow the
    directions in the popup to enter the token.

All Wiki documents live in the `asciidoc` folder, images in the `images`
folder, and resources for your documents in the `resources` folder.
Select an appropriate folder under each to store your new document,
image or resource.

When you edit a Wiki page, the Git tab will show any unstaged changes.
When you're done making changes, you stage any or all changes, write
your commit message, commit, and then push the changes.

You can preview your documents by selecting the document and using the
keyboard shortcut ctrl+shift+A or by using the File header menu
[Packages \> AsciiDoc Preview \> Toggle Preview]{.menuchoice}.

Updating Local Wiki Copies
==========================

It's a good idea to update your local copy of the Wiki prior to
commiting any changes.

**Members.**

Update your local copy of the Wiki from the Atom Editor by issuing a
Pull command prior to Commit/Push.

As a member, you issue Git commands from the Atom Editor.

**Non-Members.**

Update your local copy of the Wiki by issuing a pull request from your
forked repository to the Wiki repository prior to pushing your commit to
your fork.

1.  Go to your version of the repository on GitHub.

2.  Click the New Pull Request button at the top.

    :::note
    The Wiki repository will be on the left and your repository will be
    on the right.
    :::

3.  Click the Base button on the left and from the drop down list select
    your forked repository.

4.  Click the "compare across forks" link.

5.  Click the Head Fork button and from the drop down list select the
    Wiki repository.

6.  If the repositories are not identical, there will be green button
    Create pull request. Click it to update your repository.

7.  Update your local copy by doing a Pull request in Atom.

::: {.important}
As a non-member, when there is interaction between the Wiki repository
and your fork, you issue commands online. When the interaction is
between your forked repository and your local copy, you issue commands
from Atom.
:::

Pushing Changes
===============

**Members.**

As a member, you issue all Git commands from the Atom Editor.

**Non-Members.**

To submit changes to the Wiki repository after pushing them to your
fork:

1.  Go to your version of the Wiki repository on GitHub.

2.  Click the New Pull Request button at the top.

3.  Note that the jMonkeyEngine repository will be on the left and your
    repository will be on the right.

4.  Click the green button Create pull request. Give a succinct and
    informative title, in the comment field give a short explanation of
    the changes and click the green button Create pull request again.

::: {.important}
As a non-member, when there is interaction between the Wiki repository
and your fork, you issue commands online. When the interaction is
between your forked repository and your local copy, you issue commands
from Atom.
:::

Wiki Template
=============

To make things even easier, you can create your own Wiki template for
page creation. You must first have the `file-templates` package
installed. You can find this package by selecting
`File Settings Install` and typing "template" into the search box.

1.  Once installed, from the `Command Palette` (ctrl+shift +P or
    `Packages Command Palette Toggle`) enter "file" into the search box.

2.  Select File Templates: New Template.

3.  For `Template Name`, use `Jme3 Wiki Template`, and when ready select
    Create.

4.  From the `Command Palette`, enter "file" and select File Templates:
    Update Template.

5.  If this is the first template it will open automatically. If not,
    then select the `Jme3 Wiki Template` you just created and press the
    Edit Template button.

6.  Copy and paste the text below into the head of the document.

        = Enter Document Title Here
        :author: @author@
        :revnumber:
        :revdate: @timestamp@
        :relfileprefix: Enter path to asciidoc folder ../../
        :imagesdir: Enter path to images folder ../..
        :experimental:
        ifdef::env-github,env-browser[:outfilesuffix: .adoc]

7.  When done, close the document and when it asks you if you want to
    save it select Yes .

You can now use your template when creating new Wiki documents by
opening the `Command Palette`, entering "file" into the search box, and
selecting File Templates: New File.

:::note
To edit the template, from the `Command Palette` (ctrl+shift +P) type
"file" into the search box and select:\
`File Templates: Update Template Jme3 Wiki Page Edit Template`

Save the edit when finished.
:::

See also:

[Anatomy of a Wiki Header](../wiki/wiki_header)

Atom Snippets
=============

> Snippets are an incredibly powerful way to quickly generate commonly
> needed code syntax from a shortcut.
>
> ---  Atom Flight Manual: Snippets

One advantage of using Atom as an editor for the Wiki comes from the use
of
[Snippets](http://flight-manual.atom.io/using-atom/sections/snippets/).
You can see a list of available snippets for your document by using the
`Command Palette` (ctrl+shift +P or `Packages Command Palette Toggle`).
Enter "snippets" into the search box and select Snippets: Available.

The Atom AsciiDoc packages add great functionality to the editor, but
they do not cover everything that's possible when using AsciiDoctor
syntax. You can customize the editor even further by adding your own
snippets. I will get you started with your first snippet. Simply copy
and paste the code below into your "snippets.cson" file and save. You
can locate the file under [File \> Snippets]{.menuchoice}.

    '.source.asciidoc':
      'Inter-Doc Cross Reference':
        'prefix': 'xref'
        'body': '<<${1:path/to/wiki/page}#,${2:custom label text}>>'

Thereafter just type xref and hit Tab to insert an Inter-Document Cross
Reference link. You can then use the Tab key to cycle through each tab
stop when your ready.

You can help the jMonkey community by adding new snippets. Use your
editor and edit the [Atom Snippets](../wiki/atom_snippets) document.
Make sure to announce any proposed changes on the [jMonkeyEngine
Forum](https://hub.jmonkeyengine.org/) under the topic "Documentation"
first so others are aware and can test out your proposed change.

Next steps,

-   Read the Wiki [README](https://github.com/jMonkeyEngine/wiki) page.

-   Add [Introduction to
    Asciidoctor](http://asciidoctor.org/docs/user-manual/#introduction-to-asciidoctor)
    to your favorites, you will refer to it often.

-   Add the [Atom Docs](https://atom.io/docs) to your favorites.

-   Add the [Atom Flight Manual](http://flight-manual.atom.io/) to your
    favorites.

-   Add the [git - the simple
    guide](http://rogerdudler.github.io/git-guide/) to your favorites.

-   Start contributing.

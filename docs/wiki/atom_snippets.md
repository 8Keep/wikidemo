Edit this file to add snippets to the snippets.cson file for the [Atom
editor](https://atom.io/). To use these snippets just copy and paste the
text below into your snippets.cson file.

    # Your snippets
    #
    # Atom snippets allow you to enter a simple prefix in the editor and hit tab to
    # expand the prefix into a larger code block with templated values.
    #
    # You can create a new snippet in this file by typing "snip" and then hitting
    # tab.
    #
    # An example CoffeeScript snippet to expand log to console.log:
    #
    # '.source.coffee':
    #   'Console log':
    #     'prefix': 'log'
    #     'body': 'console.log $1'
    #
    # Each scope (e.g. '.source.coffee' above) can only be declared once.
    #
    # This file uses CoffeeScript Object Notation (CSON).
    # If you are unfamiliar with CSON, you can read more about it in the
    # Atom Flight Manual:
    # http://flight-manual.atom.io/using-atom/sections/basic-customization/#_cson
    '.source.asciidoc':
      'Inter-Doc Cross Reference':
        'prefix': 'xref'
        'body': '<<${1:path/to/wiki/page}#,${2:custom label text}>>'
      'Admonition Block':
        'prefix': 'admonB'
        'body': """
        [${1:NOTE}${2:TIP}${3:IMPORTANT}${4:CAUTION}${5:WARNING}]
        ====
        $6
        ====
        $7
        """
      'Admonition Block with Title':
        'prefix': 'admonBwT'
        'body': """
        [${1:NOTE}${2:TIP}${3:IMPORTANT}${4:CAUTION}${5:WARNING}]
        .${6:Optional Title}
        ====
        $7
        ====
        $8
        """
      'Admonition Paragraph':
        'prefix': 'admonP'
        'body': """
        ${1:NOTE}${2:TIP}${3:IMPORTANT}${4:CAUTION}${5:WARNING}: $6
        """
      'Admonition Paragraph with Title':
        'prefix': 'admonPwT'
        'body': """
        .${1:Optional Title}
        ${2:NOTE}${3:TIP}${4:IMPORTANT}${5:CAUTION}${6:WARNING}: $7
        """

Snippets Explained
==================

+------+-------------------------------+-------------------------------+
| Pr   | Inserted Syntax               | Description                   |
| efix |                               |                               |
+======+===============================+===============================+
| xref | `<<path/to/wi                 | Inserts an                    |
|      | ki/page#,custom label text>>` | `Int                          |
|      |                               | er-Document Cross Reference`. |
+------+-------------------------------+-------------------------------+
| ad   | \[NOTE                        | Inserts an `Admonition Block` |
| monB | TIPIMPORTANTCAUTIONWARNING\]\ | with the *NOTE* style         |
|      | ====\                         | highlighted. Use the Tab key  |
|      | ====                          | to cycle to the next style    |
|      |                               | and Backspace off any         |
|      |                               | unwanted style as you go. The |
|      |                               | final Tab will take you into  |
|      |                               | the block.                    |
+------+-------------------------------+-------------------------------+
| admo | \[NOTE                        | Inserts an `Admonition Block` |
| nBwT | TIPIMPORTANTCAUTIONWARNING\]\ | with title.                   |
|      | .Optional Title\              |                               |
|      | ====\                         |                               |
|      | ====                          |                               |
+------+-------------------------------+-------------------------------+
| ad   | NO                            | Inserts an                    |
| monP | TETIPIMPORTANTCAUTIONWARNING: | `Admonition Paragraph` with   |
|      |                               | the *NOTE* style highlighted. |
|      |                               | Use the Tab key to cycle to   |
|      |                               | the next style and Backspace  |
|      |                               | off any unwanted style as you |
|      |                               | go. The final Tab will take   |
|      |                               | you to the beginning of the   |
|      |                               | paragraph.                    |
+------+-------------------------------+-------------------------------+
| admo | .Optional Title\              | Inserts an                    |
| nPwT | NO                            | `Admonition Paragraph` with   |
|      | TETIPIMPORTANTCAUTIONWARNING: | title.                        |
+------+-------------------------------+-------------------------------+

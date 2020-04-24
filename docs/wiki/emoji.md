How to use icons in the wiki
============================

You can use any font awesome icon listed at
<https://fontawesome.com/v4.7.0/icons/> in your wiki documents by use of
the icon macro.

**Syntax for inserting icons.**

    icon:thumbs-up []
    icon:database[role=green] // change color by use of the role syntax
    icon:heart[2x] // icons can be sized
    icon:shield[rotate=90, flip=vertical] // rotate and flip

:::note
When setting the icons name, you do not have to preface it with `fa-`,
asciidoctor will accept the font name.
:::

The icon macro has three attributes you can set, they are size, rotate,
and flip.

-   size\

    -   The first positional attribute found, scales the icon; values
        are: `1x` (default), `2x`, `3x`, `4x`, `5x`, `lg`, `fw`

    -   You can fix the width of the icon by use of the `fw` attribute.
        This helps when trying to align with other elements by giving
        the icon a fixed width.

-   rotate

    -   Rotates the icon; values are: `90`, `180`, `270`

-   flip

    -   Flips the icon; values are: `horizontal`, `vertical`

The first unnamed attribute is assumed to be the size. For instance, to
make the icon twice the size as the default, simply add 2x inside the
square brackets.

    icon:heart[2x]

Results:

![heart](./images/icons/heart.png) 2x ![heart](./images/icons/heart.png)

To rotate and flip the icon:

    icon:shield[rotate=270, flip=vertical]

Results:

![shield](./images/icons/shield.png) rotated 90, and flipped vertical
![shield](./images/icons/shield.png)

You can also link to icons.

    icon:download[link="https://rubygems.org/downloads/asciidoctor-1.5.2.gem"]

Results:

![download](./images/icons/download.png)

Lastly, you can color your icons using the role syntax.

    icon:database[role=green]

Results:

![database](./images/icons/database.png) colored green
![database](./images/icons/database.png)

How to use emoji in the wiki
============================

Using emoji in wiki docs currently requires the setting of the
`:stylesheet:` attribute in the header of the wiki document.

    :stylesheet: twemoji-awesome.css

The [Anatomy of a Wiki Header](wiki/wiki_header) document explains
setting of this and other header attributes.

Once the header attribute is set, you can add the emoji using the
following syntax.

    emoji:heart[2x] // the "[2x]" is a size modifier
    emoji:rage[]

:::note
You can change the icon size with the size modifier `[2x]`.

`emoji:heart[]` emoji:heart\[\] `emoji:heart[2x]` emoji:heart\[2x\]
:::

Emoji and Name Cheet Sheet
==========================

People
------

+----------------------+----------------------+-----------------------+
| emoji:smile\[2x\]    | emoji:laughing\[2x\] | emoji:blush\[2x\]     |
| `smile`\             | `laughing`\          | `blush`\              |
| emoji:smiley\[2x\]   | emoji:relaxed\[2x\]  | emoji:smirk\[2x\]     |
| `smiley`\            | `relaxed`\           | `smirk`\              |
| em                   | emoji                | emoji:kiss            |
| oji:heart-eyes\[2x\] | :kissing-heart\[2x\] | ing-closed-eyes\[2x\] |
| `heart-eyes`\        | `kissing-heart`\     | `                     |
| emoji:flushed\[2x\]  | emoji:relieved\[2x\] | kissing-closed-eyes`\ |
| `flushed`\           | `relieved`\          | emoji:satisfied\[2x\] |
| emoji:grin\[2x\]     | emoji:wink\[2x\]     | `satisfied`\          |
| `grin`\              | `wink`\              | emoji:stuck-out-ton   |
| emoji:stuck-out-tong | emoji:grinning\[2x\] | gue-winking-eye\[2x\] |
| ue-closed-eyes\[2x\] | `grinning`\          | `stuck-out            |
| `stuck-out-          | emoji:st             | -tongue-winking-eye`\ |
| tongue-closed-eyes`\ | uck-out-tongue\[2x\] | emoji:kissing\[2x\]   |
| emoji:kissin         | `stuck-out-tongue`\  | `kissing`\            |
| g-smiling-eyes\[2x\] | emoji:frowning\[2x\] | emoji:sleeping\[2x\]  |
| `ki                  | `frowning`\          | `sleeping`\           |
| ssing-smiling-eyes`\ | e                    | emoji:anguished\[2x\] |
| emoji:worried\[2x\]  | moji:grimacing\[2x\] | `anguished`\          |
| `worried`\           | `grimacing`\         | emoji:confused\[2x\]  |
| em                   | emoji:               | `confused`\           |
| oji:open-mouth\[2x\] | expressionless\[2x\] | emoji:unamused\[2x\]  |
| `open-mouth`\        | `expressionless`\    | `unamused`\           |
| emoji:hushed\[2x\]   | emoji:sweat\[2x\]    | emoji:weary\[2x\]     |
| `hushed`\            | `sweat`\             | `weary`\              |
| emo                  | emoj                 | e                     |
| ji:sweat-smile\[2x\] | i:disappointed\[2x\] | moji:confounded\[2x\] |
| `sweat-smile`\       | `disappointed`\      | `confounded`\         |
| emoji:pensive\[2x\]  | em                   | emoji:persevere\[2x\] |
| `pensive`\           | oji:cold-sweat\[2x\] | `persevere`\          |
| emoji:fearful\[2x\]  | `cold-sweat`\        | emoji:joy\[2x\]       |
| `fearful`\           | emoji:sob\[2x\]      | `joy`\                |
| emoji:cry\[2x\]      | `sob`\               | e                     |
| `cry`\               | emoji:scream\[2x\]   | moji:tired-face\[2x\] |
| em                   | `scream`\            | `tired-face`\         |
| oji:astonished\[2x\] | emoji:rage\[2x\]     | emoji:triumph\[2x\]   |
| `astonished`\        | `rage`\              | `triumph`\            |
| emoji:angry\[2x\]    | emoji:yum\[2x\]      | emoji:mask\[2x\]      |
| `angry`\             | `yum`\               | `mask`\               |
| emoji:sleepy\[2x\]   | em                   | emoji:imp\[2x\]       |
| `sleepy`\            | oji:dizzy-face\[2x\] | `imp`\                |
| em                   | `dizzy-face`\        | emoji:no-mouth\[2x\]  |
| oji:sunglasses\[2x\] | emoj                 | `no-mouth`\           |
| `sunglasses`\        | i:neutral-face\[2x\] | emo                   |
| emo                  | `neutral-face`\      | ji:yellow-heart\[2x\] |
| ji:smiling-imp\[2x\] | emoji:alien\[2x\]    | `yellow-heart`\       |
| `smiling-imp`\       | `alien`\             | emoji:heart\[2x\]     |
| emoji:innocent\[2x\] | emoj                 | `heart`\              |
| `innocent`\          | i:purple-heart\[2x\] | emoji:heartbeat\[2x\] |
| em                   | `purple-heart`\      | `heartbeat`\          |
| oji:blue-heart\[2x\] | emoj                 | emoji:r               |
| `blue-heart`\        | i:broken-heart\[2x\] | evolving-hearts\[2x\] |
| emo                  | `broken-heart`\      | `revolving-hearts`\   |
| ji:green-heart\[2x\] | em                   | emoji:sparkles\[2x\]  |
| `green-heart`\       | oji:two-hearts\[2x\] | `sparkles`\           |
| em                   | `two-hearts`\        | emoji:dizzy\[2x\]     |
| oji:heartpulse\[2x\] | emoji:s              | `dizzy`\              |
| `heartpulse`\        | parkling-heart\[2x\] | em                    |
| emoji:cupid\[2x\]    | `sparkling-heart`\   | oji:exclamation\[2x\] |
| `cupid`\             | emoji:star2\[2x\]    | `exclamation`\        |
| emoji:star\[2x\]     | `star2`\             | emoj                  |
| `star`\              | emoji:anger\[2x\]    | i:grey-question\[2x\] |
| emoji:boom\[2x\]     | `anger`\             | `grey-question`\      |
| `boom`\              | emoji:gr             | em                    |
| emoji:question\[2x\] | ey-exclamation\[2x\] | oji:sweat-drops\[2x\] |
| `question`\          | `grey-exclamation`\  | `sweat-drops`\        |
| emoji:zzz\[2x\]      | emoji:dash\[2x\]     | emoji:fire\[2x\]      |
| `zzz`\               | `dash`\              | `fire`\               |
| emoji:notes\[2x\]    | emoj                 | e                     |
| `notes`\             | i:musical-note\[2x\] | moji:thumbsdown\[2x\] |
| emoji:poop\[2x\]     | `musical-note`\      | `thumbsdown`\         |
| `poop`\              | emoji:thumbsup\[2x\] | emoji:fist\[2x\]      |
| emoji:ok-hand\[2x\]  | `thumbsup`\          | `fist`\               |
| `ok-hand`\           | emoji:punch\[2x\]    | emoji:hand\[2x\]      |
| emoji:v\[2x\] `v`\   | `punch`\             | `hand`\               |
| em                   | emoji:wave\[2x\]     | e                     |
| oji:open-hands\[2x\] | `wave`\              | moji:point-down\[2x\] |
| `open-hands`\        | emoji:point-up\[2x\] | `point-down`\         |
| em                   | `point-up`\          | emo                   |
| oji:point-left\[2x\] | emo                  | ji:raised-hands\[2x\] |
| `point-left`\        | ji:point-right\[2x\] | `raised-hands`\       |
| emoji:pray\[2x\]     | `point-right`\       | emoji:clap\[2x\]      |
| `pray`\              | em                   | `clap`\               |
| emoji:muscle\[2x\]   | oji:point-up-2\[2x\] | emoji:runner\[2x\]    |
| `muscle`\            | `point-up-2`\        | `runner`\             |
| emoji:couple\[2x\]   | emoji:walking\[2x\]  | emoji:dancer\[2x\]    |
| `couple`\            | `walking`\           | `dancer`\             |
| emoji:dancers\[2x\]  | emoji:family\[2x\]   | emoji:no-good\[2x\]   |
| `dancers`\           | `family`\            | `no-good`\            |
| emoji:informati      | emoji:ok-woman\[2x\] | emoji:                |
| on-desk-person\[2x\] | `ok-woman`\          | bride-with-veil\[2x\] |
| `infor               | emo                  | `bride-with-veil`\    |
| mation-desk-person`\ | ji:raised-hand\[2x\] | emoji:bow\[2x\]       |
| emoji:person-wit     | `raised-hand`\       | `bow`\                |
| h-pouting-face\[2x\] | emoji:p              | emoji:massage\[2x\]   |
| `person              | erson-frowning\[2x\] | `massage`\            |
| -with-pouting-face`\ | `person-frowning`\   | emoji:boy\[2x\]       |
| em                   | emoji:cou            | `boy`\                |
| oji:couplekiss\[2x\] | ple-with-heart\[2x\] | emoji:man\[2x\]       |
| `couplekiss`\        | `couple-with-heart`\ | `man`\                |
| emoji:haircut\[2x\]  | e                    | emoji:older-man\[2x\] |
| `haircut`\           | moji:nail-care\[2x\] | `older-man`\          |
| emoji:girl\[2x\]     | `nail-care`\         | emoji:                |
| `girl`\              | emoji:woman\[2x\]    | man-with-turban\[2x\] |
| emoji:baby\[2x\]     | `woman`\             | `man-with-turban`\    |
| `baby`\              | emo                  | emoji:angel\[2x\]     |
| emoji:person-w       | ji:older-woman\[2x\] | `angel`\              |
| ith-blond-hair\[2x\] | `older-woman`\       | emoji:smile-cat\[2x\] |
| `pers                | emoji:man-w          | `smile-cat`\          |
| on-with-blond-hair`\ | ith-gua-pi-mao\[2x\] | emoji:smirk-cat\[2x\] |
| emoji:const          | `m                   | `smirk-cat`\          |
| ruction-worker\[2x\] | an-with-gua-pi-mao`\ | emoji:joy-cat\[2x\]   |
| `c                   | emoji:cop\[2x\]      | `joy-cat`\            |
| onstruction-worker`\ | `cop`\               | emoji:                |
| emoji:princess\[2x\] | em                   | japanese-goblin\[2x\] |
| `princess`\          | oji:smiley-cat\[2x\] | `japanese-goblin`\    |
| emoji:               | `smiley-cat`\        | emoj                  |
| heart-eyes-cat\[2x\] | emo                  | i:speak-no-evil\[2x\] |
| `heart-eyes-cat`\    | ji:kissing-cat\[2x\] | `speak-no-evil`\      |
| em                   | `kissing-cat`\       | emoji:feet\[2x\]      |
| oji:scream-cat\[2x\] | emoji:c              | `feet`\               |
| `scream-cat`\        | rying-cat-face\[2x\] | emoji:droplet\[2x\]   |
| emo                  | `crying-cat-face`\   | `droplet`\            |
| ji:pouting-cat\[2x\] | emoji                | emoji:nose\[2x\]      |
| `pouting-cat`\       | :japanese-ogre\[2x\] | `nose`\               |
| emo                  | `japanese-ogre`\     | emoji:bus             |
| ji:see-no-evil\[2x\] | emoj                 | t-in-silhouette\[2x\] |
| `see-no-evil`\       | i:hear-no-evil\[2x\] | `bust-in-silhouette`\ |
| e                    | `hear-no-evil`\      | emoji:                |
| moji:guardsman\[2x\] | emoji:skull\[2x\]    | thought-balloon\[2x\] |
| `guardsman`\         | `skull`\             | `thought-balloon`\    |
| emoji:lips\[2x\]     | emoji:kiss\[2x\]     |                       |
| `lips`\              | `kiss`\              |                       |
| emoji:ear\[2x\]      | emoji:eyes\[2x\]     |                       |
| `ear`\               | `eyes`\              |                       |
| emoji:tongue\[2x\]   | emo                  |                       |
| `tongue`\            | ji:love-letter\[2x\] |                       |
| emoji:busts          | `love-letter`\       |                       |
| -in-silhouette\[2x\] | emoji:               |                       |
| `b                   | speech-balloon\[2x\] |                       |
| usts-in-silhouette`\ | `speech-balloon`\    |                       |
+----------------------+----------------------+-----------------------+

Nature
------

+----------------------+----------------------+-----------------------+
| emoji:sunny\[2x\]    | emoji:umbrella\[2x\] | emoji:cloud\[2x\]     |
| `sunny`\             | `umbrella`\          | `cloud`\              |
| e                    | emoji:snowman\[2x\]  | emoji:zap\[2x\]       |
| moji:snowflake\[2x\] | `snowman`\           | `zap`\                |
| `snowflake`\         | emoji:foggy\[2x\]    | emoji:ocean\[2x\]     |
| emoji:cyclone\[2x\]  | `foggy`\             | `ocean`\              |
| `cyclone`\           | emoji:dog\[2x\]      | emoji:mouse\[2x\]     |
| emoji:cat\[2x\]      | `dog`\               | `mouse`\              |
| `cat`\               | emoji:rabbit\[2x\]   | emoji:wolf\[2x\]      |
| emoji:hamster\[2x\]  | `rabbit`\            | `wolf`\               |
| `hamster`\           | emoji:tiger\[2x\]    | emoji:koala\[2x\]     |
| emoji:frog\[2x\]     | `tiger`\             | `koala`\              |
| `frog`\              | emoji:pig\[2x\]      | emoji:pig-nose\[2x\]  |
| emoji:bear\[2x\]     | `pig`\               | `pig-nose`\           |
| `bear`\              | emoji:boar\[2x\]     | em                    |
| emoji:cow\[2x\]      | `boar`\              | oji:monkey-face\[2x\] |
| `cow`\               | emoji:horse\[2x\]    | `monkey-face`\        |
| emoji:monkey\[2x\]   | `horse`\             | emoji:racehorse\[2x\] |
| `monkey`\            | emoji:sheep\[2x\]    | `racehorse`\          |
| emoji:camel\[2x\]    | `sheep`\             | emoji:elephant\[2x\]  |
| `camel`\             | emoji:snake\[2x\]    | `elephant`\           |
| em                   | `snake`\             | emoji:bird\[2x\]      |
| oji:panda-face\[2x\] | emoji                | `bird`\               |
| `panda-face`\        | :hatched-chick\[2x\] | emoji                 |
| em                   | `hatched-chick`\     | :hatching-chick\[2x\] |
| oji:baby-chick\[2x\] | emoji:penguin\[2x\]  | `hatching-chick`\     |
| `baby-chick`\        | `penguin`\           | emoji:turtle\[2x\]    |
| emoji:chicken\[2x\]  | emoji:honeybee\[2x\] | `turtle`\             |
| `chicken`\           | `honeybee`\          | emoji:ant\[2x\]       |
| emoji:bug\[2x\]      | emoji:snail\[2x\]    | `ant`\                |
| `bug`\               | `snail`\             | emoji:octopus\[2x\]   |
| emoji:beetle\[2x\]   | emoji:fish\[2x\]     | `octopus`\            |
| `beetle`\            | `fish`\              | emoji:whale\[2x\]     |
| emoji                | emoji:dolphin\[2x\]  | `whale`\              |
| :tropical-fish\[2x\] | `dolphin`\           | emoji:cow2\[2x\]      |
| `tropical-fish`\     | emoji:rat\[2x\]      | `cow2`\               |
| emoji:whale2\[2x\]   | `rat`\               | emoj                  |
| `whale2`\            | emoji:rabbit2\[2x\]  | i:water-buffalo\[2x\] |
| emoji:ram\[2x\]      | `rabbit2`\           | `water-buffalo`\      |
| `ram`\               | emoji:rooster\[2x\]  | emoji:dragon\[2x\]    |
| emoji:tiger2\[2x\]   | `rooster`\           | `dragon`\             |
| `tiger2`\            | emoji:mouse2\[2x\]   | emoji:dog2\[2x\]      |
| emoji:goat\[2x\]     | `mouse2`\            | `dog2`\               |
| `goat`\              | emoji:blowfish\[2x\] | emoji:ox\[2x\] `ox`\  |
| emoji:pig2\[2x\]     | `blowfish`\          | emoji:crocodile\[2x\] |
| `pig2`\              | emoji:leopard\[2x\]  | `crocodile`\          |
| emo                  | `leopard`\           | emoji:cat2\[2x\]      |
| ji:dragon-face\[2x\] | em                   | `cat2`\               |
| `dragon-face`\       | oji:paw-prints\[2x\] | emoji:bouquet\[2x\]   |
| emoji:d              | `paw-prints`\        | `bouquet`\            |
| romedary-camel\[2x\] | emoji:tulip\[2x\]    | emoji:f               |
| `dromedary-camel`\   | `tulip`\             | our-leaf-clover\[2x\] |
| emoji:poodle\[2x\]   | e                    | `four-leaf-clover`\   |
| `poodle`\            | moji:sunflower\[2x\] | emoji:hibiscus\[2x\]  |
| emoji:               | `sunflower`\         | `hibiscus`\           |
| cherry-blossom\[2x\] | emoji:leaves\[2x\]   | em                    |
| `cherry-blossom`\    | `leaves`\            | oji:fallen-leaf\[2x\] |
| emoji:rose\[2x\]     | emoji:mushroom\[2x\] | `fallen-leaf`\        |
| `rose`\              | `mushroom`\          | emoji:cactus\[2x\]    |
| em                   | emoji:               | `cactus`\             |
| oji:maple-leaf\[2x\] | evergreen-tree\[2x\] | emoji                 |
| `maple-leaf`\        | `evergreen-tree`\    | :deciduous-tree\[2x\] |
| emoji:herb\[2x\]     | emoji:seedling\[2x\] | `deciduous-tree`\     |
| `herb`\              | `seedling`\          | emoji:blossom\[2x\]   |
| e                    | emoji:shell\[2x\]    | `blossom`\            |
| moji:palm-tree\[2x\] | `shell`\             | emoji:globe           |
| `palm-tree`\         | emoji:full-          | -with-meridians\[2x\] |
| emoji:chestnut\[2x\] | moon-with-face\[2x\] | `g                    |
| `chestnut`\          | `f                   | lobe-with-meridians`\ |
| emo                  | ull-moon-with-face`\ | emoji:new             |
| ji:ear-of-rice\[2x\] | emoji:waxing         | -moon-with-face\[2x\] |
| `ear-of-rice`\       | -crescent-moon\[2x\] | `new-moon-with-face`\ |
| emoji                | `wa                  | emoji:fir             |
| :sun-with-face\[2x\] | xing-crescent-moon`\ | st-quarter-moon\[2x\] |
| `sun-with-face`\     | e                    | `first-quarter-moon`\ |
| emoji:new-moon\[2x\] | moji:full-moon\[2x\] | emoji:wani            |
| `new-moon`\          | `full-moon`\         | ng-gibbous-moon\[2x\] |
| emoji:waxin          | emoji:waning         | `                     |
| g-gibbous-moon\[2x\] | -crescent-moon\[2x\] | waning-gibbous-moon`\ |
| `w                   | `wa                  | emoji:last-quarter    |
| axing-gibbous-moon`\ | ning-crescent-moon`\ | -moon-with-face\[2x\] |
| emoji:las            | emoji:moon\[2x\]     | `last-qua             |
| t-quarter-moon\[2x\] | `moon`\              | rter-moon-with-face`\ |
| `last-quarter-moon`\ | em                   | emo                   |
| emoji:first-quarter- | oji:earth-asia\[2x\] | ji:earth-africa\[2x\] |
| moon-with-face\[2x\] | `earth-asia`\        | `earth-africa`\       |
| `first-quar          | emoj                 | emoji:volcano\[2x\]   |
| ter-moon-with-face`\ | i:partly-sunny\[2x\] | `volcano`\            |
| emoji:               | `partly-sunny`\      |                       |
| earth-americas\[2x\] |                      |                       |
| `earth-americas`\    |                      |                       |
| e                    |                      |                       |
| moji:milky-way\[2x\] |                      |                       |
| `milky-way`\         |                      |                       |
+----------------------+----------------------+-----------------------+

Objects
-------

+----------------------+----------------------+-----------------------+
| emoji:bamboo\[2x\]   | em                   | emoji:dolls\[2x\]     |
| `bamboo`\            | oji:gift-heart\[2x\] | `dolls`\              |
| emoji:               | `gift-heart`\        | emoji:flags\[2x\]     |
| school-satchel\[2x\] | emoj                 | `flags`\              |
| `school-satchel`\    | i:mortar-board\[2x\] | e                     |
| e                    | `mortar-board`\      | moji:wind-chime\[2x\] |
| moji:fireworks\[2x\] | emoji:sparkler\[2x\] | `wind-chime`\         |
| `fireworks`\         | `sparkler`\          | emoji:ghost\[2x\]     |
| em                   | emoji:               | `ghost`\              |
| oji:rice-scene\[2x\] | jack-o-lantern\[2x\] | em                    |
| `rice-scene`\        | `jack-o-lantern`\    | oji:alarm-clock\[2x\] |
| emoji:santa\[2x\]    | emoji:8ball\[2x\]    | `alarm-clock`\        |
| `santa`\             | `8ball`\             | em                    |
| emoji:apple\[2x\]    | emoji:art\[2x\]      | oji:baby-bottle\[2x\] |
| `apple`\             | `art`\               | `baby-bottle`\        |
| emoji:balloon\[2x\]  | emoji:banana\[2x\]   | emoji:bar-chart\[2x\] |
| `balloon`\           | `banana`\            | `bar-chart`\          |
| emoji:baseball\[2x\] | em                   | emoji:bath\[2x\]      |
| `baseball`\          | oji:basketball\[2x\] | `bath`\               |
| emoji:bathtub\[2x\]  | `basketball`\        | emoji:beer\[2x\]      |
| `bathtub`\           | emoji:battery\[2x\]  | `beer`\               |
| emoji:beers\[2x\]    | `battery`\           | emoji:bento\[2x\]     |
| `beers`\             | emoji:bell\[2x\]     | `bento`\              |
| e                    | `bell`\              | emoji:birthday\[2x\]  |
| moji:bicyclist\[2x\] | emoji:bikini\[2x\]   | `birthday`\           |
| `bicyclist`\         | `bikini`\            | emoji:blue-book\[2x\] |
| emo                  | e                    | `blue-book`\          |
| ji:black-joker\[2x\] | moji:black-nib\[2x\] | emoj                  |
| `black-joker`\       | `black-nib`\         | i:bookmark-tabs\[2x\] |
| emoji:bomb\[2x\]     | emoji:bookmark\[2x\] | `bookmark-tabs`\      |
| `bomb`\              | `bookmark`\          | emoji:bowling\[2x\]   |
| emoji:books\[2x\]    | emoji:boot\[2x\]     | `bowling`\            |
| `books`\             | `boot`\              | emoji:bulb\[2x\]      |
| emoji:bread\[2x\]    | e                    | `bulb`\               |
| `bread`\             | moji:briefcase\[2x\] | emoji:calling\[2x\]   |
| emoji:cake\[2x\]     | `briefcase`\         | `calling`\            |
| `cake`\              | emoji:calendar\[2x\] | e                     |
| emoji:camera\[2x\]   | `calendar`\          | moji:card-index\[2x\] |
| `camera`\            | emoji:candy\[2x\]    | `card-index`\         |
| emoji:cd\[2x\] `cd`\ | `candy`\             | emoji:chart-wit       |
| emoji:cherries\[2x\] | emoji:chart-with-d   | h-upwards-trend\[2x\] |
| `cherries`\          | ownwards-trend\[2x\] | `chart                |
| emoji:clapper\[2x\]  | `chart-wi            | -with-upwards-trend`\ |
| `clapper`\           | th-downwards-trend`\ | emoji                 |
| emoji:closed         | emoji                | :christmas-tree\[2x\] |
| -lock-with-key\[2x\] | :chocolate-bar\[2x\] | `christmas-tree`\     |
| `cl                  | `chocolate-bar`\     | em                    |
| osed-lock-with-key`\ | e                    | oji:closed-book\[2x\] |
| emoji:cocktail\[2x\] | moji:clipboard\[2x\] | `closed-book`\        |
| `cocktail`\          | `clipboard`\         | emoji:clubs\[2x\]     |
| emoji                | emoji:c              | `clubs`\              |
| :confetti-ball\[2x\] | losed-umbrella\[2x\] | emoji:computer\[2x\]  |
| `confetti-ball`\     | `closed-umbrella`\   | `computer`\           |
| emo                  | emoji:coffee\[2x\]   | emoji:corn\[2x\]      |
| ji:credit-card\[2x\] | `coffee`\            | `corn`\               |
| `credit-card`\       | emoji:cookie\[2x\]   | emo                   |
| emoji:curry\[2x\]    | `cookie`\            | ji:crystal-ball\[2x\] |
| `curry`\             | emoji:crown\[2x\]    | `crystal-ball`\       |
| emoji:dart\[2x\]     | `crown`\             | emoji:dango\[2x\]     |
| `dart`\              | emoji:custard\[2x\]  | `dango`\              |
| emoji:dollar\[2x\]   | `custard`\           | emoji:diamonds\[2x\]  |
| `dollar`\            | emoji:date\[2x\]     | `diamonds`\           |
| emoji:dress\[2x\]    | `date`\              | emoji:doughnut\[2x\]  |
| `dress`\             | emoji:door\[2x\]     | `doughnut`\           |
| emoji:egg\[2x\]      | `door`\              | emoji:e-mail\[2x\]    |
| `egg`\               | emoji:dvd\[2x\]      | `e-mail`\             |
| emoji:email\[2x\]    | `dvd`\               | emoj                  |
| `email`\             | emoji:eggplant\[2x\] | i:electric-plug\[2x\] |
| emoji:fax\[2x\]      | `eggplant`\          | `electric-plug`\      |
| `fax`\               | emoji:euro\[2x\]     | e                     |
| emoji:fishing        | `euro`\              | moji:eyeglasses\[2x\] |
| -pole-and-fish\[2x\] | emo                  | `eyeglasses`\         |
| `fis                 | ji:file-folder\[2x\] | emoji:fish-cake\[2x\] |
| hing-pole-and-fish`\ | `file-folder`\       | `fish-cake`\          |
| emoji:flower         | em                   | em                    |
| -playing-cards\[2x\] | oji:flashlight\[2x\] | oji:floppy-disk\[2x\] |
| `fl                  | `flashlight`\        | `floppy-disk`\        |
| ower-playing-cards`\ | emoji:football\[2x\] | emoji                 |
| emoj                 | `football`\          | :fork-and-knife\[2x\] |
| i:fried-shrimp\[2x\] | emoji:fries\[2x\]    | `fork-and-knife`\     |
| `fried-shrimp`\      | `fries`\             | emoji:game-die\[2x\]  |
| emoji:gem\[2x\]      | emoji:gift\[2x\]     | `game-die`\           |
| `gem`\               | `gift`\              | emoji:golf\[2x\]      |
| emoji:grapes\[2x\]   | emo                  | `golf`\               |
| `grapes`\            | ji:green-apple\[2x\] | e                     |
| emoji:guitar\[2x\]   | `green-apple`\       | moji:green-book\[2x\] |
| `guitar`\            | emoji:gun\[2x\]      | `green-book`\         |
| emoji:hammer\[2x\]   | `gun`\               | emoji:hamburger\[2x\] |
| `hammer`\            | emoji:handbag\[2x\]  | `hamburger`\          |
| emoji:hearts\[2x\]   | `handbag`\           | e                     |
| `hearts`\            | emoji:h              | moji:headphones\[2x\] |
| emoji:hocho\[2x\]    | igh-brightness\[2x\] | `headphones`\         |
| `hocho`\             | `high-brightness`\   | emoji:high-heel\[2x\] |
| e                    | e                    | `high-heel`\          |
| moji:hourglass\[2x\] | moji:honey-pot\[2x\] | emo                   |
| `hourglass`\         | `honey-pot`\         | ji:horse-racing\[2x\] |
| emoji:icecream\[2x\] | emoji:hourglas       | `horse-racing`\       |
| `icecream`\          | s-flowing-sand\[2x\] | emoji:ice-cream\[2x\] |
| emoji:iphone\[2x\]   | `hour                | `ice-cream`\          |
| `iphone`\            | glass-flowing-sand`\ | emoji:in              |
| emoji:kimono\[2x\]   | em                   | coming-envelope\[2x\] |
| `kimono`\            | oji:inbox-tray\[2x\] | `incoming-envelope`\  |
| emoji:lipstick\[2x\] | `inbox-tray`\        | emoji:key\[2x\]       |
| `lipstick`\          | emoji:jeans\[2x\]    | `key`\                |
| emoji:lollipop\[2x\] | `jeans`\             | emoji:lemon\[2x\]     |
| `lollipop`\          | emoji:ledger\[2x\]   | `lemon`\              |
| emoji:               | `ledger`\            | emoji:lo              |
| low-brightness\[2x\] | emoji:lock\[2x\]     | ck-with-ink-pen\[2x\] |
| `low-brightness`\    | `lock`\              | `lock-with-ink-pen`\  |
| emoji:mahjong\[2x\]  | emoji:loop\[2x\]     | em                    |
| `mahjong`\           | `loop`\              | oji:loudspeaker\[2x\] |
| emoji:mai            | emoji:mag\[2x\]      | `loudspeaker`\        |
| lbox-with-mail\[2x\] | `mag`\               | emoji:mag-right\[2x\] |
| `mailbox-with-mail`\ | emoji:mailbox\[2x\]  | `mag-right`\          |
| emoj                 | `mailbox`\           | emoji                 |
| i:meat-on-bone\[2x\] | emoji:mailbo         | :mailbox-closed\[2x\] |
| `meat-on-bone`\      | x-with-no-mail\[2x\] | `mailbox-closed`\     |
| emoji:memo\[2x\]     | `ma                  | emoji:mans-shoe\[2x\] |
| `memo`\              | ilbox-with-no-mail`\ | `mans-shoe`\          |
| emoji:minidisc\[2x\] | emoji:mega\[2x\]     | emoji:melon\[2x\]     |
| `minidisc`\          | `mega`\              | `melon`\              |
| emoji:moun           | em                   | e                     |
| tain-bicyclist\[2x\] | oji:microphone\[2x\] | moji:microscope\[2x\] |
| `                    | `microphone`\        | `microscope`\         |
| mountain-bicyclist`\ | emoji:mo             | emoji:moneybag\[2x\]  |
| emoji                | ney-with-wings\[2x\] | `moneybag`\           |
| :musical-score\[2x\] | `money-with-wings`\  | emoji:m               |
| `musical-score`\     | emoj                 | usical-keyboard\[2x\] |
| emoji:necktie\[2x\]  | i:movie-camera\[2x\] | `musical-keyboard`\   |
| `necktie`\           | `movie-camera`\      | e                     |
| emoji:notebook\[2x\] | emoji:mute\[2x\]     | moji:name-badge\[2x\] |
| `notebook`\          | `mute`\              | `name-badge`\         |
| emoji:oden\[2x\]     | e                    | emoji:no-bell\[2x\]   |
| `oden`\              | moji:newspaper\[2x\] | `no-bell`\            |
| emo                  | `newspaper`\         | emo                   |
| ji:outbox-tray\[2x\] | em                   | ji:nut-and-bolt\[2x\] |
| `outbox-tray`\       | oji:notebook-with-de | `nut-and-bolt`\       |
| emoji:pager\[2x\]    | corative-cover\[2x\] | em                    |
| `pager`\             | `notebook-wit        | oji:orange-book\[2x\] |
| emoji:pear\[2x\]     | h-decorative-cover`\ | `orange-book`\        |
| `pear`\              | emoji:op             | emoji                 |
| emoji:pill\[2x\]     | en-file-folder\[2x\] | :page-with-curl\[2x\] |
| `pill`\              | `open-file-folder`\  | `page-with-curl`\     |
| emo                  | emoji:               | emoji:peach\[2x\]     |
| ji:postal-horn\[2x\] | page-facing-up\[2x\] | `peach`\              |
| `postal-horn`\       | `page-facing-up`\    | emoji:phone\[2x\]     |
| emo                  | e                    | `phone`\              |
| ji:poultry-leg\[2x\] | moji:paperclip\[2x\] | emoji:pizza\[2x\]     |
| `poultry-leg`\       | `paperclip`\         | `pizza`\              |
| emoji:pushpin\[2x\]  | emoji:pencil2\[2x\]  | emoji:pouch\[2x\]     |
| `pushpin`\           | `pencil2`\           | `pouch`\              |
| emoji:ribbon\[2x\]   | e                    | emoji:purse\[2x\]     |
| `ribbon`\            | moji:pineapple\[2x\] | `purse`\              |
| emoj                 | `pineapple`\         | emoji:ramen\[2x\]     |
| i:rice-cracker\[2x\] | emoji:postbox\[2x\]  | `ramen`\              |
| `rice-cracker`\      | `postbox`\           | emoji:rice-ball\[2x\] |
| emoji:running-s      | emoji:pound\[2x\]    | `rice-ball`\          |
| hirt-with-sash\[2x\] | `pound`\             | emoji                 |
| `runni               | emoji:radio\[2x\]    | :rugby-football\[2x\] |
| ng-shirt-with-sash`\ | `radio`\             | `rugby-football`\     |
| e                    | emoji:rice\[2x\]     | emoji:sandal\[2x\]    |
| moji:satellite\[2x\] | `rice`\              | `sandal`\             |
| `satellite`\         | emoji:ring\[2x\]     | emoji:scissors\[2x\]  |
| emoji:scroll\[2x\]   | `ring`\              | `scissors`\           |
| `scroll`\            | emoji:sake\[2x\]     | e                     |
| emoji:shirt\[2x\]    | `sake`\              | moji:shaved-ice\[2x\] |
| `shirt`\             | e                    | `shaved-ice`\         |
| emoji:smoking\[2x\]  | moji:saxophone\[2x\] | emoji:ski\[2x\]       |
| `smoking`\           | `saxophone`\         | `ski`\                |
| emoji:sound\[2x\]    | emoji:seat\[2x\]     | emoji:soccer\[2x\]    |
| `sound`\             | `seat`\              | `soccer`\             |
| e                    | emoji:shower\[2x\]   | emoji:spades\[2x\]    |
| moji:spaghetti\[2x\] | `shower`\            | `spades`\             |
| `spaghetti`\         | emo                  | emoji:stew\[2x\]      |
| emoji:               | ji:snowboarder\[2x\] | `stew`\               |
| straight-ruler\[2x\] | `snowboarder`\       | emoji:surfer\[2x\]    |
| `straight-ruler`\    | emoji                | `surfer`\             |
| emoji:sushi\[2x\]    | :space-invader\[2x\] | emoji:swimmer\[2x\]   |
| `sushi`\             | `space-invader`\     | `swimmer`\            |
| emoji:syringe\[2x\]  | emoji:speaker\[2x\]  | emoj                  |
| `syringe`\           | `speaker`\           | i:tanabata-tree\[2x\] |
| e                    | em                   | `tanabata-tree`\      |
| moji:tangerine\[2x\] | oji:strawberry\[2x\] | emoji:tel             |
| `tangerine`\         | `strawberry`\        | ephone-receiver\[2x\] |
| e                    | emoj                 | `telephone-receiver`\ |
| moji:telescope\[2x\] | i:sweet-potato\[2x\] | emoji:toilet\[2x\]    |
| `telescope`\         | `sweet-potato`\      | `toilet`\             |
| emoji:tomato\[2x\]   | emoji:tada\[2x\]     | emoji:t               |
| `tomato`\            | `tada`\              | riangular-ruler\[2x\] |
| emoji:trophy\[2x\]   | emoji:tea\[2x\]      | `triangular-ruler`\   |
| `trophy`\            | `tea`\               | emoji:trumpet\[2x\]   |
| emoji:tv\[2x\] `tv`\ | emoji:tennis\[2x\]   | `trumpet`\            |
| emoj                 | `tennis`\            | emoji:vhs\[2x\]       |
| i:video-camera\[2x\] | emoji:tophat\[2x\]   | `vhs`\                |
| `video-camera`\      | `tophat`\            | emoji:violin\[2x\]    |
| emoji:watch\[2x\]    | emoji:               | `violin`\             |
| `watch`\             | tropical-drink\[2x\] | e                     |
| emoji:               | `tropical-drink`\    | moji:wine-glass\[2x\] |
| womans-clothes\[2x\] | emoji:unlock\[2x\]   | `wine-glass`\         |
| `womans-clothes`\    | `unlock`\            | emoji:wrench\[2x\]    |
| emoji:yen\[2x\]      | em                   | `wrench`\             |
| `yen`\               | oji:video-game\[2x\] |                       |
|                      | `video-game`\        |                       |
|                      | em                   |                       |
|                      | oji:watermelon\[2x\] |                       |
|                      | `watermelon`\        |                       |
|                      | em                   |                       |
|                      | oji:womans-hat\[2x\] |                       |
|                      | `womans-hat`\        |                       |
+----------------------+----------------------+-----------------------+

Places
------

+----------------------+----------------------+-----------------------+
| emoji:               | emoji:airplane\[2x\] | emoji:ambulance\[2x\] |
| aerial-tramway\[2x\] | `airplane`\          | `ambulance`\          |
| `aerial-tramway`\    | emoji:art            | emoji:atm\[2x\]       |
| emoji:anchor\[2x\]   | iculated-lorry\[2x\] | `atm`\                |
| `anchor`\            | `articulated-lorry`\ | emoji:beginner\[2x\]  |
| emoji:bank\[2x\]     | emoji:barber\[2x\]   | `beginner`\           |
| `bank`\              | `barber`\            | emoji:boat\[2x\]      |
| emoji:bike\[2x\]     | emoji:blue-car\[2x\] | `boat`\               |
| `bike`\              | `blue-car`\          | emoji:b               |
| emoji:b              | emoji:bul            | ullettrain-side\[2x\] |
| ridge-at-night\[2x\] | lettrain-front\[2x\] | `bullettrain-side`\   |
| `bridge-at-night`\   | `bullettrain-front`\ | emoji:car\[2x\]       |
| emoji:bus\[2x\]      | emoji:busstop\[2x\]  | `car`\                |
| `bus`\               | `busstop`\           | emoji:church\[2x\]    |
| emoji:               | emoji:               | `church`\             |
| carousel-horse\[2x\] | checkered-flag\[2x\] | em                    |
| `carousel-horse`\    | `checkered-flag`\    | oji:city-sunset\[2x\] |
| emo                  | emoj                 | `city-sunset`\        |
| ji:circus-tent\[2x\] | i:city-sunrise\[2x\] | emoj                  |
| `circus-tent`\       | `city-sunrise`\      | i:crossed-flags\[2x\] |
| emoj                 | emoji:con            | `crossed-flags`\      |
| i:construction\[2x\] | venience-store\[2x\] | emoji:europ           |
| `construction`\      | `convenience-store`\ | ean-post-office\[2x\] |
| emoji:de             | emoji:e              | `e                    |
| partment-store\[2x\] | uropean-castle\[2x\] | uropean-post-office`\ |
| `department-store`\  | `european-castle`\   | em                    |
| emoji:factory\[2x\]  | emoj                 | oji:fire-engine\[2x\] |
| `factory`\           | i:ferris-wheel\[2x\] | `fire-engine`\        |
| emoji:fountain\[2x\] | `ferris-wheel`\      | e                     |
| `fountain`\          | emoji:fuelpump\[2x\] | moji:helicopter\[2x\] |
| emoji:hospital\[2x\] | `fuelpump`\          | `helicopter`\         |
| `hospital`\          | emoji:hotel\[2x\]    | e                     |
| emoji:house\[2x\]    | `hotel`\             | moji:hotsprings\[2x\] |
| `house`\             | emoji:hou            | `hotsprings`\         |
| emoji:j              | se-with-garden\[2x\] | emoji:japan\[2x\]     |
| apanese-castle\[2x\] | `house-with-garden`\ | `japan`\              |
| `japanese-castle`\   | em                   | e                     |
| emoji:minibus\[2x\]  | oji:light-rail\[2x\] | moji:love-hotel\[2x\] |
| `minibus`\           | `light-rail`\        | `love-hotel`\         |
| emoji:mou            | emoji:monorail\[2x\] | e                     |
| ntain-cableway\[2x\] | `monorail`\          | moji:mount-fuji\[2x\] |
| `mountain-cableway`\ | emoji:mo             | `mount-fuji`\         |
| emoji:office\[2x\]   | untain-railway\[2x\] | emoji:moyai\[2x\]     |
| `office`\            | `mountain-railway`\  | `moyai`\              |
| emoji:oncom          | emoji:oncom          | emo                   |
| ing-police-car\[2x\] | ing-automobile\[2x\] | ji:oncoming-bus\[2x\] |
| `o                   | `o                   | `oncoming-bus`\       |
| ncoming-police-car`\ | ncoming-automobile`\ | emoji:                |
| em                   | emoji                | performing-arts\[2x\] |
| oji:police-car\[2x\] | :oncoming-taxi\[2x\] | `performing-arts`\    |
| `police-car`\        | `oncoming-taxi`\     | em                    |
| emoji:rainbow\[2x\]  | emo                  | oji:railway-car\[2x\] |
| `rainbow`\           | ji:post-office\[2x\] | `railway-car`\        |
| emoji:               | `post-office`\       | emoji                 |
| rotating-light\[2x\] | emoji:rocket\[2x\]   | :roller-coaster\[2x\] |
| `rotating-light`\    | `rocket`\            | `roller-coaster`\     |
| emoji:school\[2x\]   | emoji                | emoji:rowboat\[2x\]   |
| `school`\            | :round-pushpin\[2x\] | `rowboat`\            |
| e                    | `round-pushpin`\     | emo                   |
| moji:speedboat\[2x\] | emoji:ship\[2x\]     | ji:slot-machine\[2x\] |
| `speedboat`\         | `ship`\              | `slot-machine`\       |
| emoji:sta            | emoji:stars\[2x\]    | emoji:station\[2x\]   |
| tue-of-liberty\[2x\] | `stars`\             | `station`\            |
| `statue-of-liberty`\ | emoji:st             | emoji:sunrise\[2x\]   |
| emoji:sunrise-       | eam-locomotive\[2x\] | `sunrise`\            |
| over-mountains\[2x\] | `steam-locomotive`\  | emoji:taxi\[2x\]      |
| `sunr                | emoji:susp           | `taxi`\               |
| ise-over-mountains`\ | ension-railway\[2x\] | em                    |
| emoji:tent\[2x\]     | `                    | oji:tokyo-tower\[2x\] |
| `tent`\              | suspension-railway`\ | `tokyo-tower`\        |
| emoji:tractor\[2x\]  | emoji:ticket\[2x\]   | emoji:train2\[2x\]    |
| `tractor`\           | `ticket`\            | `train2`\             |
| emoji:tram\[2x\]     | emoji                | e                     |
| `tram`\              | :traffic-light\[2x\] | moji:trolleybus\[2x\] |
| emoji:truck\[2x\]    | `traffic-light`\     | `trolleybus`\         |
| `truck`\             | emoji:triangula      | emoji:warning\[2x\]   |
| emoji:wedding\[2x\]  | r-flag-on-post\[2x\] | `warning`\            |
| `wedding`\           | `trian               | emoji:kr\[2x\] `kr`\  |
| emoji:cn\[2x\] `cn`\ | gular-flag-on-post`\ | emoji:fr\[2x\] `fr`\  |
| emoji:es\[2x\] `es`\ | emoji:vertical       | emoji:ru\[2x\] `ru`\  |
| emoji:gb\[2x\] `gb`\ | -traffic-light\[2x\] |                       |
|                      | `vert                |                       |
|                      | ical-traffic-light`\ |                       |
|                      | emoji:jp\[2x\] `jp`\ |                       |
|                      | emoji:us\[2x\] `us`\ |                       |
|                      | emoji:it\[2x\] `it`\ |                       |
|                      | emoji:de\[2x\] `de`\ |                       |
+----------------------+----------------------+-----------------------+

Symbols
-------

+----------------------+----------------------+-----------------------+
| emoji:100\[2x\]      | emoji:1234\[2x\]     | emoji:a\[2x\] `a`\    |
| `100`\               | `1234`\              | emoji:abcd\[2x\]      |
| emoji:ab\[2x\] `ab`\ | emoji:abc\[2x\]      | `abcd`\               |
| emoji:accept\[2x\]   | `abc`\               | emoji:aries\[2x\]     |
| `accept`\            | emoji:aquarius\[2x\] | `aries`\              |
| emoji:               | `aquarius`\          | emoji:                |
| arrow-backward\[2x\] | emoji:arr            | arrow-double-up\[2x\] |
| `arrow-backward`\    | ow-double-down\[2x\] | `arrow-double-up`\    |
| em                   | `arrow-double-down`\ | emoj                  |
| oji:arrow-down\[2x\] | emoji:ar             | i:arrow-forward\[2x\] |
| `arrow-down`\        | row-down-small\[2x\] | `arrow-forward`\      |
| emoji:arro           | `arrow-down-small`\  | e                     |
| w-heading-down\[2x\] | emoji:ar             | moji:arrow-left\[2x\] |
| `                    | row-heading-up\[2x\] | `arrow-left`\         |
| arrow-heading-down`\ | `arrow-heading-up`\  | em                    |
| emoji:ar             | emoji:arr            | oji:arrow-right\[2x\] |
| row-lower-left\[2x\] | ow-lower-right\[2x\] | `arrow-right`\        |
| `arrow-lower-left`\  | `arrow-lower-right`\ | emoj                  |
| emoji:ar             | emoji:arrow-up\[2x\] | i:arrow-up-down\[2x\] |
| row-right-hook\[2x\] | `arrow-up`\          | `arrow-up-down`\      |
| `arrow-right-hook`\  | emoji:ar             | emoji:ar              |
| emoji:               | row-upper-left\[2x\] | row-upper-right\[2x\] |
| arrow-up-small\[2x\] | `arrow-upper-left`\  | `arrow-upper-right`\  |
| `arrow-up-small`\    | emoji:arrows-co      | emoji:b\[2x\] `b`\    |
| emoji:ar             | unterclockwise\[2x\] | emoji:ballot          |
| rows-clockwise\[2x\] | `arrow               | -box-with-check\[2x\] |
| `arrows-clockwise`\  | s-counterclockwise`\ | `ba                   |
| emo                  | emoji                | llot-box-with-check`\ |
| ji:baby-symbol\[2x\] | :baggage-claim\[2x\] | emoji:blac            |
| `baby-symbol`\       | `baggage-claim`\     | k-square-button\[2x\] |
| emoji:bangbang\[2x\] | emoj                 | `                     |
| `bangbang`\          | i:black-circle\[2x\] | black-square-button`\ |
| emoji:cancer\[2x\]   | `black-circle`\      | emoji:capricorn\[2x\] |
| `cancer`\            | emoj                 | `capricorn`\          |
| emoji:chart\[2x\]    | i:capital-abcd\[2x\] | emoji:cinema\[2x\]    |
| `chart`\             | `capital-abcd`\      | `cinema`\             |
| emoji:cl\[2x\] `cl`\ | emoji:chi            | emoji:clock10\[2x\]   |
| e                    | ldren-crossing\[2x\] | `clock10`\            |
| moji:clock1030\[2x\] | `children-crossing`\ | emoji:clock1130\[2x\] |
| `clock1030`\         | emoji:clock1\[2x\]   | `clock1130`\          |
| emoji:clock12\[2x\]  | `clock1`\            | emoji:clock130\[2x\]  |
| `clock12`\           | emoji:clock11\[2x\]  | `clock130`\           |
| emoji:clock2\[2x\]   | `clock11`\           | emoji:clock3\[2x\]    |
| `clock2`\            | e                    | `clock3`\             |
| emoji:clock330\[2x\] | moji:clock1230\[2x\] | emoji:clock430\[2x\]  |
| `clock330`\          | `clock1230`\         | `clock430`\           |
| emoji:clock5\[2x\]   | emoji:clock230\[2x\] | emoji:clock6\[2x\]    |
| `clock5`\            | `clock230`\          | `clock6`\             |
| emoji:clock630\[2x\] | emoji:clock4\[2x\]   | emoji:clock730\[2x\]  |
| `clock630`\          | `clock4`\            | `clock730`\           |
| emoji:clock8\[2x\]   | emoji:clock530\[2x\] | emoji:clock9\[2x\]    |
| `clock8`\            | `clock530`\          | `clock9`\             |
| emoji:clock930\[2x\] | emoji:clock7\[2x\]   | emoji:cool\[2x\]      |
| `clock930`\          | `clock7`\            | `cool`\               |
| e                    | emoji:clock830\[2x\] | emoji:cu              |
| moji:copyright\[2x\] | `clock830`\          | rrency-exchange\[2x\] |
| `copyright`\         | emoji:c              | `currency-exchange`\  |
| emoji:customs\[2x\]  | ongratulations\[2x\] | emoj                  |
| `customs`\           | `congratulations`\   | i:do-not-litter\[2x\] |
| emoji:eight\[2x\]    | em                   | `do-not-litter`\      |
| `eight`\             | oji:curly-loop\[2x\] | emoji:eight-          |
| emoji:end\[2x\]      | `curly-loop`\        | spoked-asterisk\[2x\] |
| `end`\               | emo                  | `ei                   |
| emoji:four\[2x\]     | ji:diamond-shape-wit | ght-spoked-asterisk`\ |
| `four`\              | h-a-dot-inside\[2x\] | emoji:five\[2x\]      |
| emoji:hash\[2x\]     | `diamond-shape       | `five`\               |
| `hash`\              | -with-a-dot-inside`\ | emoji:gemini\[2x\]    |
| emoji:heavy          | emoji:eight-poin     | `gemini`\             |
| -division-sign\[2x\] | ted-black-star\[2x\] | emoji:h               |
| `h                   | `eight-              | eavy-check-mark\[2x\] |
| eavy-division-sign`\ | pointed-black-star`\ | `heavy-check-mark`\   |
| emoji:heavy-mu       | emoj                 | emoji:h               |
| ltiplication-x\[2x\] | i:fast-forward\[2x\] | eavy-minus-sign\[2x\] |
| `heav                | `fast-forward`\      | `heavy-minus-sign`\   |
| y-multiplication-x`\ | emoji:free\[2x\]     | emoji:id\[2x\] `id`\  |
| emoji:ideog          | `free`\              | em                    |
| raph-advantage\[2x\] | emoji:he             | oji:interrobang\[2x\] |
| `i                   | art-decoration\[2x\] | `interrobang`\        |
| deograph-advantage`\ | `heart-decoration`\  | emoji:la              |
| em                   | emoji:hea            | rge-blue-circle\[2x\] |
| oji:keycap-ten\[2x\] | vy-dollar-sign\[2x\] | `large-blue-circle`\  |
| `keycap-ten`\        | `heavy-dollar-sign`\ | emo                   |
| emoji:larg           | emoji:h              | ji:left-luggage\[2x\] |
| e-blue-diamond\[2x\] | eavy-plus-sign\[2x\] | `left-luggage`\       |
| `                    | `heavy-plus-sign`\   | emoji:leo\[2x\]       |
| large-blue-diamond`\ | emoji:info           | `leo`\                |
| emoji:le             | rmation-source\[2x\] | emoji:m\[2x\] `m`\    |
| ft-right-arrow\[2x\] | `                    | emoji:m               |
| `left-right-arrow`\  | information-source`\ | obile-phone-off\[2x\] |
| emoji:libra\[2x\]    | emoji:koko\[2x\]     | `mobile-phone-off`\   |
| `libra`\             | `koko`\              | emoji:ng\[2x\] `ng`\  |
| emoji:mens\[2x\]     | emoji:large-         | emoji:no-entry\[2x\]  |
| `mens`\              | orange-diamond\[2x\] | `no-entry`\           |
| emoji:negative-squa  | `la                  | emoji                 |
| red-cross-mark\[2x\] | rge-orange-diamond`\ | :no-pedestrians\[2x\] |
| `negative-           | emoji:leftwards-a    | `no-pedestrians`\     |
| squared-cross-mark`\ | rrow-with-hook\[2x\] | emoji:o\[2x\] `o`\    |
| emoji:nine\[2x\]     | `leftwar             | emoji:on\[2x\] `on`\  |
| `nine`\              | ds-arrow-with-hook`\ | emoji:parking\[2x\]   |
| emoji                | emoji:link\[2x\]     | `parking`\            |
| :no-entry-sign\[2x\] | `link`\              | emoji:pisces\[2x\]    |
| `no-entry-sign`\     | emoji:metro\[2x\]    | `pisces`\             |
| em                   | `metro`\             | emo                   |
| oji:no-smoking\[2x\] | emoji:new\[2x\]      | ji:radio-button\[2x\] |
| `no-smoking`\        | `new`\               | `radio-button`\       |
| emoji:o2\[2x\] `o2`\ | emo                  | e                     |
| emoji:one\[2x\]      | ji:no-bicycles\[2x\] | moji:registered\[2x\] |
| `one`\               | `no-bicycles`\       | `registered`\         |
| emoji:part-al        | emoji:no             | emoji:restroom\[2x\]  |
| ternation-mark\[2x\] | -mobile-phones\[2x\] | `restroom`\           |
| `par                 | `no-mobile-phones`\  | em                    |
| t-alternation-mark`\ | emoji:non            | oji:sagittarius\[2x\] |
| emoji                | -potable-water\[2x\] | `sagittarius`\        |
| :potable-water\[2x\] | `non-potable-water`\ | emoji:seven\[2x\]     |
| `potable-water`\     | emoji:ok\[2x\] `ok`\ | `seven`\              |
| emoji:recycle\[2x\]  | e                    | emoji:s               |
| `recycle`\           | moji:ophiuchus\[2x\] | ix-pointed-star\[2x\] |
| emoji:repeat\[2x\]   | `ophiuchus`\         | `six-pointed-star`\   |
| `repeat`\            | emoji:pa             | emoji:sma             |
| emoji:rewind\[2x\]   | ssport-control\[2x\] | ll-red-triangle\[2x\] |
| `rewind`\            | `passport-control`\  | `small-red-triangle`\ |
| emoji:scorpius\[2x\] | emoji:put-litte      | emoji:sos\[2x\]       |
| `scorpius`\          | r-in-its-place\[2x\] | `sos`\                |
| emoji:s              | `put-l               | emoji:three\[2x\]     |
| ignal-strength\[2x\] | itter-in-its-place`\ | `three`\              |
| `signal-strength`\   | em                   | emoji:trident\[2x\]   |
| emoji:smal           | oji:red-circle\[2x\] | `trident`\            |
| l-blue-diamond\[2x\] | `red-circle`\        | emoji:u5272\[2x\]     |
| `                    | em                   | `u5272`\              |
| small-blue-diamond`\ | oji:repeat-one\[2x\] | emoji:u6307\[2x\]     |
| emoji:small-red      | `repeat-one`\        | `u6307`\              |
| -triangle-down\[2x\] | emoji:sa\[2x\] `sa`\ | emoji:u6e80\[2x\]     |
| `small               | emoji:secret\[2x\]   | `u6e80`\              |
| -red-triangle-down`\ | `secret`\            | emoji:u7981\[2x\]     |
| emoji:symbols\[2x\]  | emoji:six\[2x\]      | `u7981`\              |
| `symbols`\           | `six`\               | emoji:up\[2x\] `up`\  |
| emoji:tm\[2x\] `tm`\ | emoji:small-         | emoji:vs\[2x\] `vs`\  |
| emoji:twisted-rig    | orange-diamond\[2x\] | e                     |
| htwards-arrows\[2x\] | `sm                  | moji:wheelchair\[2x\] |
| `twisted             | all-orange-diamond`\ | `wheelchair`\         |
| -rightwards-arrows`\ | emoji:soon\[2x\]     | emo                   |
| emoji:u5408\[2x\]    | `soon`\              | ji:white-flower\[2x\] |
| `u5408`\             | emoji:taurus\[2x\]   | `white-flower`\       |
| emoji:u6708\[2x\]    | `taurus`\            | emoji:x\[2x\] `x`\    |
| `u6708`\             | emoji:top\[2x\]      |                       |
| emoji:u7121\[2x\]    | `top`\               |                       |
| `u7121`\             | emoji:two\[2x\]      |                       |
| emoji:u7a7a\[2x\]    | `two`\               |                       |
| `u7a7a`\             | emoji:u55b6\[2x\]    |                       |
| emoji:               | `u55b6`\             |                       |
| vibration-mode\[2x\] | emoji:u6709\[2x\]    |                       |
| `vibration-mode`\    | `u6709`\             |                       |
| e                    | emoji:u7533\[2x\]    |                       |
| moji:wavy-dash\[2x\] | `u7533`\             |                       |
| `wavy-dash`\         | emoji:underage\[2x\] |                       |
| emoji:wh             | `underage`\          |                       |
| ite-check-mark\[2x\] | emoji:virgo\[2x\]    |                       |
| `white-check-mark`\  | `virgo`\             |                       |
| emoji:white          | emoji:wc\[2x\] `wc`\ |                       |
| -square-button\[2x\] | emoj                 |                       |
| `w                   | i:white-circle\[2x\] |                       |
| hite-square-button`\ | `white-circle`\      |                       |
| emoji:zero\[2x\]     | emoji:womens\[2x\]   |                       |
| `zero`\              | `womens`\            |                       |
+----------------------+----------------------+-----------------------+

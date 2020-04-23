Here you can find working combinations of Blender and the OgreXML
exporter, with any tips or bugs associated with each.

::: {.warning}
As of Blender version 2.8+, OgreXML is no longer compatible for
exporting. See [Supported External File
Types](../../../jme3/features.xml#supported-external-file-types) for
other options.
:::

+----------------------+----------------------+-----------------------+
| Blender Version      | OgreXML Exporter     | Notes                 |
|                      | Version              |                       |
+======================+======================+=======================+
| 2.78-2.79            | [                    | Root bone, no         |
|                      | 0.6.0](http://code.g | transforms on object, |
|                      | oogle.com/p/blender2 | no envelopes          |
|                      | ogre/downloads/list) |                       |
+----------------------+----------------------+-----------------------+
| 2.6.3                | [                    | Root bone, no         |
|                      | 0.5.8](http://code.g | transforms on object, |
|                      | oogle.com/p/blender2 | no envelopes          |
|                      | ogre/downloads/list) |                       |
+----------------------+----------------------+-----------------------+
| 2.6.2                | [                    | Root bone, no         |
|                      | 0.5.5](http://code.g | transforms on object, |
|                      | oogle.com/p/blender2 | no envelopes          |
|                      | ogre/downloads/list) |                       |
+----------------------+----------------------+-----------------------+
| 2.6.1                | ?                    |                       |
+----------------------+----------------------+-----------------------+
| 2.6.0                | ?                    |                       |
+----------------------+----------------------+-----------------------+

Tips
====

Tips for exporting animations through OgreXML correctly:

-   apply all transformations

-   armature should have 0,0,0 transformation (loc,rot,scale)

-   model object should have 0,0,0 transformation (loc,rot,scale)

-   root bone should have 0,0,0 transformation (loc,rot,scale)

-   no envelopes

Test Character -
<http://dl.dropbox.com/u/26887202/123/jme_blender/characterOgre26.zip>

![ogre\_solved.jpg](/images/../jme3/advanced/ogre_solved.jpg)
![ogre\_solved2.png](/images/../jme3/advanced/ogre_solved2.png)

Troubleshooting
===============

**Q:** *My animation is stretched.*

**A:** Use the exporting tips provided above

(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{247:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(1),o=t(9),r=(t(0),t(441)),i={},l={id:"jme3/external/blender/blender_gltf",title:"blender_gltf",description:"This section discusses how to export scenes from Blender (2.8+) in glTF",source:"@site/docs/jme3/external/blender/blender_gltf.md",permalink:"/wikidemo/docs/jme3/external/blender/blender_gltf",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/external/blender/blender_gltf.md"},s=[],c={rightToc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section discusses how to export scenes from Blender (2.8+) in glTF\nformat appropriate for use by ",Object(r.b)("inlineCode",{parentName:"p"},"AssetManager.loadModel"),"."),Object(r.b)("h1",{id:"background"},"Background"),Object(r.b)("p",null,"glTF (GL Transmission Format) is a specification for transmitting 3D\nscenes between applications. The specification is owned by Khronos Group\nbut is publicly available and can be used royalty free. It is growing in\npopularity as a robust and efficient transmission mechanism."),Object(r.b)("p",null,"jME3 introduced a loader for glTF in 2017 (written by nehon) and it has\nsince been included as a standard part of the ",Object(r.b)("inlineCode",{parentName:"p"},"jme3-plugins")," target.\nThere are some limitations of the importer which can be avoided by\nfollowing the guidelines below."),Object(r.b)("p",null,"Ultimately all jME projects should use the ",Object(r.b)("inlineCode",{parentName:"p"},".j3o")," format for storing\nassets. However during development, it's required to export scenes from\nBlender in a format suitable for conversion (either through the SDK or\ndirectly through code)."),Object(r.b)("p",null,"Use of glTF (or another standard format) has a significant advantage as\nnew versions of Blender with significant enhancements are released\nfairly regularly."),Object(r.b)("p",null,"::: {.note}\nBlender 2.7 had a number of problems in exporting glTF; these notes\nrefer exclusively to Blender 2.8+\n:::"),Object(r.b)("h1",{id:"creating-models"},"Creating Models"),Object(r.b)("p",null,"Details of how to create models in Blender that are compatible with jME\nare given at ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../../../jme3/external/blender"}),"Creating assets in\nBlender3D"),". Follow all details on\nthat page for creating models before attempting an export."),Object(r.b)("p",null,"Before exporting a model all transforms need to be applied. This\nperforms the required transforms on the vertices in a mesh to reset the\ntransforms on the object. To apply all transforms in Blender 2.8, select\neach object (in object mode, not edit mode) then choose from the\n",Object(r.b)("inlineCode",{parentName:"p"},"Object")," menu ",Object(r.b)("inlineCode",{parentName:"p"},"Apply/All Transforms"),"."),Object(r.b)("p",null,"As always, see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../../../jme3/intermediate/best_practices"}),"Best\nPractices")," for additional\ninformation."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../../../jme3/external/blender/blender_buffer_clearing"}),"Blender Buffer\nClearing"),"\nshould be performed prior to exporting any model from Blender."))),Object(r.b)("h1",{id:"animations"},"Animations"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Blender supports non-linear transitions using F-Curves. However the\nglTF importer only supports linear transitions. There are 2 ways to\nensure all transitions are linear:"),Object(r.b)("p",{parentName:"li"},"a.  In Blender 2.8, go to the graph editor, select all keys (menu\nselect/all) and then change to linear interpolation (menu\nkey/interpolation mode/linear)."),Object(r.b)("p",{parentName:"li"},"b.  At export time, force the export to create interpolated\nkeyframes using sampling. This can be done in Python using\n",Object(r.b)("inlineCode",{parentName:"p"},"export_force_sampling=True")," or selecting\n",Object(r.b)("inlineCode",{parentName:"p"},"Always Sample Animations")," in the ",Object(r.b)("inlineCode",{parentName:"p"},"Animation")," tab of the export\nfunction. By default a sample is created from each frame of the\nanimation. This can be changed in Python using\n",Object(r.b)("inlineCode",{parentName:"p"},"export_frame_step=n")," where n is number of frames between\nsamples or changing the sampling rate in the ",Object(r.b)("inlineCode",{parentName:"p"},"Animation")," tab of\nthe export function.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Blender has a powerful tool to allow bones to be posed by just\nspecifying the position of the final bone in a chain and allowing\nBlender to work out where to position attached bones. This tool is a\nbone constraint called IK (Inverse Kinematics) and it can save a lot\nof time in building animations. However jME does not support IK\nconstraints so any use of IK needs to be \\"baked\\" before the\nexport. To do this, select the appropriate bone, go to the bone\ncontraints tab and apply the IK constraint. A useful workflow is to\nsave the file, bake the constrain, export to glTF then revert to the\nsaved file to restore the IK constraint.')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"All actions in Blender will be added as animations to the ",Object(r.b)("inlineCode",{parentName:"p"},"Node"),"\ncorresponding to the armature. In addition, the action last tweaked\nwithin Blender will also be added as an animation to the object's\nnode. This is just an artifact of the organisation of actions within\nBlender and should be ignored within jME.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"glTF models loaded using jME 3.3 will create animations that use the\nnew animation system introduced in jME 3.3."),Object(r.b)("p",{parentName:"li"},"See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.jmonkeyengine.org/t/monkanim-v2/39877"}),"https://hub.jmonkeyengine.org/t/monkanim-v2/39877")," for more\ninfo about the new animation system."))),Object(r.b)("h1",{id:"materials"},"Materials"),Object(r.b)("p",null,"All of the rules associated with defining materials in Blender suitable\nfor use in jME apply when glTF is used as the import/export format."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Blender supports lots of different types of shaders and complex\nmaterials with several different renderers. glTF supports a\nrelatively basic set of PBR attributes. If the primary purpose of\nthe materials is to produce glTF exported models use a simple\n",Object(r.b)("inlineCode",{parentName:"p"},"Principled BSDF")," node in your materials with the following\nsettings:"),Object(r.b)("p",{parentName:"li"},"a.  Metalling and roughness values"),Object(r.b)("p",{parentName:"li"},"b.  Base color"),Object(r.b)("p",{parentName:"li"},"c.  Diffuse and Normal (bump) textures"))),Object(r.b)("h1",{id:"shape-keys"},"Shape Keys"),Object(r.b)("p",null,"Shape keys in Blender are used to apply a deformation to a mesh without\nchanging the underlying vertices. The glTF exporter ignores shape keys\nunless they are part of an animation. To include shape keys in the\nexport, select the ",Object(r.b)("inlineCode",{parentName:"p"},"Shape Keys")," option in the ",Object(r.b)("inlineCode",{parentName:"p"},"Animation")," tab of the\nglTF export options."),Object(r.b)("p",null,"::: {.note}\nShape keys are supported as of jME version 3.3.0-beta2+. Use the\nPBRLighting.j3md material definition when doing so.\n:::"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/images/../jme3/external/DZQ6HJgUheY.png",alt:"youtube"}))),Object(r.b)("h1",{id:"export-options"},"Export options"),Object(r.b)("p",null,"Blender 2.8 supports many options when exporting in glTF format. Most of\nthe default options work fine."),Object(r.b)("p",null,"You have 3 options of the format to export, . ",Object(r.b)("inlineCode",{parentName:"p"},"GLB"),": a single file in\nbinary format (the default) . ",Object(r.b)("inlineCode",{parentName:"p"},"GLTF_EMBEDDED"),": a single file in JSON\nformat . ",Object(r.b)("inlineCode",{parentName:"p"},"GLTF_SEPERATE"),": multiple files for separate objects, textures\netc."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"GLB")," format is the most efficient so use it unless you need to\ndebug the output or edit it prior to import for any reason."),Object(r.b)("p",null,"The export can be performed manually (File/Export/GLTF 2.0) or via a\nPython script. If using a script to export, the following command will\nexport the entire scene to the current directory in ",Object(r.b)("inlineCode",{parentName:"p"},".glb")," format with\nrecommended options."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bpy.ops.export_scene.gltf(filepath=filename, export_materials=False, export_force_sampling=True, check_existing=False)")),Object(r.b)("h1",{id:"import-structure"},"Import structure"),Object(r.b)("p",null,"The structure of the nodes following import will roughly match their\nstructure in Blender. Note the following exceptions: . There is no\nequivalent in glTF to Blender collections. These will not be represented\nin the imported structure. . If an object has no material, a default\nmaterial will be created for it. . If an object has a single material,\nthe corresponding node in the imported structure will have type\n",Object(r.b)("inlineCode",{parentName:"p"},"Geometry")," with the object's mesh and the associated material. . If an\nobject has more than one material, the corresponding node will have type\n",Object(r.b)("inlineCode",{parentName:"p"},"Node")," with 1 child per material. Each of these children will be a\n",Object(r.b)("inlineCode",{parentName:"p"},"Geometry")," with the associated material and a mesh containing the\nvertices assigned to the material."),Object(r.b)("p",null,"For example, if a blender scene has the following structure"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Scene collection\n    Collection A\n        Tree (Object)\n            Tree_Mesh (Mesh)\n        Car (Object)\n            Car_Mesh (Mesh)\n                Body (Material)\n        House (Object)\n            House_Mesh (Mesh)\n                Walls (Material)\n                Roof (Material)\n    Collection B\n        Person_Armature (Armature)\n            Root (Bone)\n                Head (Bone)\n            Animations\n                Walk (Action)\n                NLA Tracks\n                    NLA Track\n                        Run (Action)\n            Person (Object)\n                Animation\n                    Walk (Action link)\n                Person_Mesh\n")),Object(r.b)("p",null,"Then after export to glTF format and import to jME it will look like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Scene (Node)\n    Tree (Geometry)\n        Default (Material)\n    Car (Geometry)\n        Body (Material)\n    House (Node)\n        House_1 (Geometry)\n            Walls (Material)\n        House_1 (Geometry)\n            Roof (Material)\n    Person_Armature (Node)\n        Animations (AnimControl)\n            Walk (Animation)\n            Run (Animation)\n        Person (Geometry)\n            Animations (AnimControl)\n                Walk (Animation)\n")),Object(r.b)("p",null,"For example, the animated person could be loaded with a custom material\nassigned as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'ModelKey key = new ModelKey("Models/model.glb");\nNode scene = (Node)assetManager.loadModel(key);\nNode person = scene.getChild("Person_Armature");\nGeometry geometry = (Geometry)person.getChild("Person");\ngeometry.setMaterial(customMaterial);\nroot.attachChild(person);\n')),Object(r.b)("p",null,"And an animation for the model could be run as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'AnimControl animControl = person.getControl(AnimControl.class);\nAnimChannel animChannel = animControl.createChannel();\nanimChannel.setAnim("Run");\n')),Object(r.b)("p",null,"If you use the jME3 SDK, you can explore the scene graph using the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../../../sdk/scene_explorer"}),"Scene Explorer"),"."),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../../../jme3/advanced/traverse_scenegraph"}),"Traverse the\nSceneGraph")," for\nassistance in finding the AnimControl of your models."),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../../../jme3/advanced/animation"}),"Animation in jME3")," for\nfurther details on using animations in your code."),Object(r.b)("h1",{id:"additional-reading"},"Additional Reading"),Object(r.b)("p",null,"Thread announcing glTF support:\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.jmonkeyengine.org/t/jme-gltf-support/39174"}),"https://hub.jmonkeyengine.org/t/jme-gltf-support/39174")),Object(r.b)("p",null,"Documentation for the python export functions:\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.blender.org/api/current/bpy.ops.export_scene.html"}),"https://docs.blender.org/api/current/bpy.ops.export_scene.html")),Object(r.b)("p",null,"glTF specification:\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/KhronosGroup/glTF/tree/master/specification/2.0"}),"https://github.com/KhronosGroup/glTF/tree/master/specification/2.0")))}p.isMDXComponent=!0},441:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return h}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),p=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},b=function(e){var n=p(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(t),d=a,h=b["".concat(i,".").concat(d)]||b[d]||m[d]||r;return t?o.a.createElement(h,l({ref:n},c,{components:t})):o.a.createElement(h,l({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
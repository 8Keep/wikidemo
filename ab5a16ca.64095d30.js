(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{339:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),o=(a(0),a(441)),s={},i={id:"jme3/intermediate/multi-media_asset_pipeline",title:"multi-media_asset_pipeline",description:"Assets are files that are not code. Your multi-media assets includes,",source:"@site/docs/jme3/intermediate/multi-media_asset_pipeline.md",permalink:"/wikidemo/docs/jme3/intermediate/multi-media_asset_pipeline",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/intermediate/multi-media_asset_pipeline.md",sidebar:"main",previous:{title:"math_video_tutorials",permalink:"/wikidemo/docs/jme3/math_video_tutorials"},next:{title:"scenegraph_for_dummies",permalink:"/wikidemo/docs/jme3/scenegraph_for_dummies"}},l=[{value:"Must I convert to .j3o? Yes!",id:"must-i-convert-to-j3o-yes",children:[]}],c={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Assets are files that are not code. Your multi-media assets includes,\nfor example, your textures (image files), models (mesh files), and\nsounds (audio files)."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You create textures in a graphic editor, for example\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://gimp.org"}),"Gimp"),", and export them as PNG or JPG.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/external/blender"}),"create models")," in a 3D mesh\neditor, for example ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://blender.org"}),"Blender"),", and export them\nin GLTF, Wavefront OBJ, or any ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/features.xml#supported-external-file-types"}),"Supported External File\nType"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You create sounds in an audio editor, for example\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://audacity.sourceforge.net"}),"Audacity"),", and export them as WAVE\nor OGG."))),Object(o.b)("h1",{id:"asset-pipeline"},"Asset Pipeline"),Object(o.b)("p",null,"+-----------------------------------+-----------------------------------+\n| DO                                | DON'T                             |\n+===================================+===================================+\n| Import original models plus       | Don't leave textures or models in |\n| textures into ",Object(o.b)("inlineCode",{parentName:"p"},"assets/Textures"),".  | a folder outside your JME         |\n|                                   | project: The game cannot load or  |\n|                                   | reference them from there.        |\n+-----------------------------------+-----------------------------------+\n| Save sounds into ",Object(o.b)("inlineCode",{parentName:"p"},"assets/Sounds"),". | Don't leave audio files in a      |\n|                                   | folder outside your JME project:  |\n|                                   | The game cannot load or reference |\n|                                   | them from there.                  |\n+-----------------------------------+-----------------------------------+\n| Create low-polygon models.        | Don't create high-polygon models, |\n|                                   | they render too slow to be useful |\n|                                   | in games.                         |\n+-----------------------------------+-----------------------------------+\n| Only use Diffuse Map, Normal Map, | Don't use unsupported material    |\n| Glow Map, Specular Map in your    | properties that are not listed in |\n| models\\' materials.               | the ","[Materials                    |\n|                                   | Overview]","(../../jme3/             |\n|                                   | advanced/materials_overview). |\n+-----------------------------------+-----------------------------------+\n| Use UV texture / texture atlases  | Don't create models based on      |\n| / baking for each texture map.    | multiple separate textures, it    |\n|                                   | will break the model into         |\n|                                   | separate meshes.                  |\n+-----------------------------------+-----------------------------------+\n| Convert original models to JME3's | Don't reference original GLTF/OBJ |\n| .j3o format. Move .j3o files into | files in your load() code,        |\n| ",Object(o.b)("inlineCode",{parentName:"p"},"assets/Models"),".                  | because these unoptimized files   |\n|                                   | are not automatically packaged    |\n|                                   | into the final JAR when using the |\n|                                   | SDK.                              |\n+-----------------------------------+-----------------------------------+\n| Agree on naming schemes and       | Don't mindlessly import           |\n| folder schemes with your artists  | downloaded models and other       |\n| early on to avoid confusion. E.g. | assets into your project without  |\n| keep naming schemes for bones and | keeping a structure and knowing   |\n| certain model parts. Try to keep  | the files work. You can reimport, |\n| your assets folder clean, its     | delete junk.                      |\n| like your codes class structure.  |                                   |\n+-----------------------------------+-----------------------------------+"),Object(o.b)("p",null,"Read on for details."),Object(o.b)("h1",{id:"use-the-assets-folder"},"Use The Assets Folder"),Object(o.b)("p",null,"Store your assets in subfolders of your project's ",Object(o.b)("inlineCode",{parentName:"p"},"assets")," directory.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"assets")," directory is the default path where a JME game's ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/asset_manager"}),"Asset\nManager")," looks for files to load."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"jMonkeyProjects/MyGame/assets/Interface/ # .font, .jpg, .png, .xml\njMonkeyProjects/MyGame/assets/MatDefs/   # .j3md\njMonkeyProjects/MyGame/assets/Materials/ # .j3m\njMonkeyProjects/MyGame/assets/Models/    # .j3o\njMonkeyProjects/MyGame/assets/Scenes/    # .j3o\njMonkeyProjects/MyGame/assets/Shaders/   # .j3f, .vert, .frag\njMonkeyProjects/MyGame/assets/Sounds/    # .ogg, .wav\njMonkeyProjects/MyGame/assets/Textures/  # .jpg, .png; also .mesh.xml+.material, .mtl+.obj,\n")),Object(o.b)("p",null,"Prepare the ",Object(o.b)("inlineCode",{parentName:"p"},"asset")," folder structure for your individual project:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Agree on a directory structure with the graphic designers.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create subfolders of ",Object(o.b)("inlineCode",{parentName:"p"},"assets")," in any way that suits your project\n(see example above). Stick with one system."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If different assets belong together, create a parallel\nsubdirectory structure for them.\\\nExample: For car models, create ",Object(o.b)("inlineCode",{parentName:"li"},"Textures/vehicles/car1/"),",\n",Object(o.b)("inlineCode",{parentName:"li"},"Materials/vehicles/car1/"),", ",Object(o.b)("inlineCode",{parentName:"li"},"Models/vehicles/car1/"),", ,\n",Object(o.b)("inlineCode",{parentName:"li"},"Sounds/vehicles/car1/")," (etc) directories now."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Agree on a file naming and numbering scheme with the graphic\ndesigners."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Are some assets used interchangeably? Systematic naming and\nnumbering lets developers easily swap out assets by swapping out\nparts of the path String.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Decide on naming standards for naming interactive parts\n(arms/legs) of animated models."))))),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.youtube.com/watch?v=HFR4socSv_E"}),"Video: Horrible things happen if you mess up labeling your assets.\nSeriously. ;-)")),Object(o.b)("p",null,"See also:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"More details on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/asset_manager"}),"Asset\nManager"),", including tips how\nto work with assets when using other IDEs.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../sdk/asset_packs"}),"Asset Packs")," to bundle, share, and\nmanage assets!"))),Object(o.b)("h1",{id:"create-textures-and-materials"},"Create Textures and Materials"),Object(o.b)("p",null,"Install a graphic editor such as Gimp or Photoshop. ",Object(o.b)("strong",{parentName:"p"},"Consult the\ngraphic editor's documentation for specific details how to do the\nfollowing tasks.")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create textures in a graphic editor."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Save all textures to your prepared subfolders in the\n",Object(o.b)("inlineCode",{parentName:"li"},"assets/Textures")," directory."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"(Optional) If you plan to use JME materials that you set\nprogrammatically from the code, create .j3m materials in the SDK."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Save these .j3m files into the ",Object(o.b)("inlineCode",{parentName:"li"},"assets/Materials")," directory.")))),Object(o.b)("p",null,"Storing the textures inside your project directory is necessary for the\npaths in JME's binary model files (.j3o) to work. Treat the paths of\nyour assets like class names of java classes, they define a specific\nasset. When you later generate .j3o files, and compile class files, and\ndistribute the application, all paths and files need to be available in\ntheir final, absolute form."),Object(o.b)("p",null,"::: {.important}\nIt is imperative to keep the same directory structure from beginning to\nend. If you ever change the assets directory structure, you have to do\nmanual refactoring (just as for Java package name changes): Re-export\nall affected models, regenerate all affected .j3o files, and manually\nupdate all affected path Strings in your code.\n:::"),Object(o.b)("h1",{id:"create-3d-models"},"Create 3D Models"),Object(o.b)("p",null,"Install a mesh editor such as ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/external/blender"}),"Blender"),"\nor 3D Studio MAX. Reuse textures and materials as much as possible.\n",Object(o.b)("strong",{parentName:"p"},"Consult the mesh editor's documentation for specific details how to do\nthe following tasks.")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Note that UV coords are part of the mesh and not part of the material,\nso if you import your mesh successfully, you can later apply the texture\nagain and it will map correctly."))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create 3D models in a mesh editor."),Object(o.b)("p",{parentName:"li"},"a.  Create efficient ",Object(o.b)("strong",{parentName:"p"},"low-polygon models"),". High-polygon models may\nlook pretty in static 3D art contests, but they slow down\ndynamic games!"),Object(o.b)("p",{parentName:"li"},"b.  ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/j3m_material_files"}),"Create materials"),"\nfor your models either in the 3D editor, or in the jME3 SDK.\nOnly use the following material features: ",Object(o.b)("strong",{parentName:"p"},"Diffuse Map or\nDiffuse Color (minimum); plus optionally Normal Map, Glow Map,\nSpecular Map."),"\\\nEvery material feature not listed in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/materials_overview"}),"Materials\nOverview")," is\nunsupported and ignored by JME3's renderer."),Object(o.b)("p",{parentName:"li"},"c.  Unwrap the model in the 3D editor and generate a ",Object(o.b)("strong",{parentName:"p"},"UV texture"),"\n(i.e. one texture file that contains all the pieces of one model\nfrom different angles).\\\nDon't use multiple separate texture files with one model, it\nwill break the model into several meshes.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Export the model mesh in one of the supported ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/features.xml#supported-external-file-types"}),"Supported External\nFile Types"),"."),Object(o.b)("p",{parentName:"li"},"a.  ",Object(o.b)("strong",{parentName:"p"},"Bake")," each texture into one file when exporting. Create a\nTexture Atlas."),Object(o.b)("p",{parentName:"li"},"b.  ",Object(o.b)("strong",{parentName:"p"},"Save exported models to subfolders of the ",Object(o.b)("inlineCode",{parentName:"strong"},"assets/Textures"),"\n(sic) directory, so they are together with their textures"),"!"))),Object(o.b)("p",null,"See also: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.gamasutra.com/view/feature/2530/practical_texture_atlases.php"}),"Texture Atlases on\ngamasutra")),Object(o.b)("p",null,"::: {.important}\n",Object(o.b)("strong",{parentName:"p"},"When I load the model in JME3, why does it look different than in the\n3D editor?"),"\\\n3D models will never look identical in a game engine and in a mesh\neditor. Mesh editors are optimized for high-quality offline rendering,\nand many of the material and texture options simply do not work in a\nlive rendering context such as games. Also, the shaders that render the\nmaterials in JME3 are different implementations than in your mesh\neditor's renderer. Remind your graphic designers to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/materials_overview"}),"focus on features\nthat game engines support"),".\n:::"),Object(o.b)("h1",{id:"convert-3d-models-to-j3o-format"},"Convert 3D Models to .j3o Format"),Object(o.b)("p",null,"Convert all models and scenes to jME3's binary .j3o format to load()\nthem. Use one of the conversion methods listed for the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/features.xml#supported-external-file-types"}),"Supported\nExternal File\nType")," you have\nchosen."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Confirm that you exported the model into the ",Object(o.b)("inlineCode",{parentName:"p"},"assets/Textures"),"\ndirectory (or subdirectories) together with all its textures.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'In the SDK, right-click the model and choose "Convert to j3o\nBinary".\\\nThe paths in the j3o now reference files with an absolute\n',Object(o.b)("inlineCode",{parentName:"p"},"assets/Textures/\u2026")," path.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Now, move the .j3o into the corresponding ",Object(o.b)("inlineCode",{parentName:"p"},"assets/Models/")," or\n",Object(o.b)("inlineCode",{parentName:"p"},"assets/Scenes/")," directory.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Use the AssetManager to load() the .j3o files."))),Object(o.b)("p",null,"This process ensures that the texture paths are correct, and it also\nkeeps your ",Object(o.b)("inlineCode",{parentName:"p"},"assets/Models")," folder free from textures. You can reuse your\nset of textures for many models."),Object(o.b)("h2",{id:"must-i-convert-to-j3o-yes"},"Must I convert to .j3o? Yes!"),Object(o.b)("p",null,"The .j3o file format is an optimized format to store parts of a jME3\nscene graph for 3-D games."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"A .j3o file can contain one shape, one model, or a whole scene.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Only .j3o files can store all of jme3's material options and other\nfeatures. Other formats can only be considered meshes with UV\nmapping data and always need extra work.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},".j3o files work seamlessly across platforms and can also be\nautomatically adapted for certain platforms on distribution.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"(Optional) You can store the model's physical properties, materials,\nlights, particle emitters, and audio nodes, in the .j3o file.\\\nUse Java commands, or use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../sdk/scene_composer"}),"jMonkeyEngine SDK\nSceneComposer")," as a user-friendly\ninterface to add these properties.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The default Ant build script of the SDK copies .j3o files, .j3m\nfiles, sounds, and textures, into the distributable JAR\nautomatically."))),Object(o.b)("p",null,"::: {.important}\nImportant: Unoptimized external model files (.mesh.xml, .material, .obj,\n.mat, .gltf, etc) are not bundled by the default SDK build script into\nthe final game builds in the ",Object(o.b)("inlineCode",{parentName:"p"},"dist")," directory! If you or your customers\ntry to run games containing code that loads non-.j3o models, you get a\nAssetNotFoundException ",Object(o.b)("strong",{parentName:"p"},"Runtime Error")," (resource not found). Your\nfinal application code should only reference .j3o files. -- Note that\nyour developers will not get this runtime error when running development\nbuilds straight from the SDK.\n:::"),Object(o.b)("h1",{id:"see-also"},"See Also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/save_and_load"}),"Save and Load"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../sdk/model_loader_and_viewer"}),"Model Loader and Viewer")))))}p.isMDXComponent=!0},441:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},m=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,u=m["".concat(s,".").concat(d)]||m[d]||b[d]||o;return a?r.a.createElement(u,i({ref:t},c,{components:a})):r.a.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{372:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),i=(a(0),a(441)),l={},o={id:"sdk/material_editing",title:"material_editing",description:"If you are looking for background information, read about [Material",source:"@site/docs/sdk/material_editing.md",permalink:"/wikidemo/docs/sdk/material_editing",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/sdk/material_editing.md"},c=[],b={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If you are looking for background information, read about ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../jme3/advanced/material_definitions"}),"Material\nDefinitions")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../jme3/advanced/j3m_material_files"}),"j3M\nMaterial Files"),". You can ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../jme3/advanced/j3m_material_files"}),"write\n.j3m files in a text editor"),",\nor use the jMonkeyEngine SDK to generate them for you as described in\nthis article."),Object(i.b)("h1",{id:"materials"},"Materials"),Object(i.b)("p",null,"The jMonkeyEngine uses a special Material format, which comes in .j3m\nfiles. You use .j3m files to store sets of material properties that you\nuse repeatedly. This enables you write one short line of code that\nsimply loads the presets from a custom .j3m file. Without a .j3m file\nyou need to write several lines of material property setters every time\nwhen you want to use a non-default material."),Object(i.b)("h1",{id:"creating-j3m-materials"},"Creating .j3m Materials"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"../sdk/material-editor.png",alt:"material-editor.png"}))),Object(i.b)("p",null,"To create new .j3m files in the jMonkeyEngine SDK:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"RMB select the ",Object(i.b)("inlineCode",{parentName:"p"},"assets/Materials")," directory and choose ",Object(i.b)("inlineCode",{parentName:"p"},"New Other"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the New File Wizard, choose ",Object(i.b)("inlineCode",{parentName:"p"},"Material Empty Material File"),", and\nclick Next.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Give the file a name, for example ",Object(i.b)("inlineCode",{parentName:"p"},"mat_wall")," for a wall material.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"A new file ",Object(i.b)("inlineCode",{parentName:"p"},"mat_wall.j3m")," is created in the Materials directory and\nopens in the Material Editor."))),Object(i.b)("p",null,"You can edit the source of the material, or use the user-friendly visual\neditor to set the properties of the material. Set the properties to the\nsame values as you would otherwise specify with setters on a Material\nobject in Java code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'Material mat_wall = new Material(\n    assetManager, "Common/MatDefs/Light/Lighting.j3md");\nmat_wall.setTexture("DiffuseMap",\n    assetManager.loadTexture("Textures/wall_diffuse.png"));\nmat_wall.setTexture("NormalMap",\n    assetManager.loadTexture("Textures/wall_normals.png"));\nmat_wall.setFloat("Shininess", 5f);\n')),Object(i.b)("p",null,"This Java code corresponds to the following .j3m file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-{.xml}"}),"Material my brick wall : Common/MatDefs/Light/Lighting.j3md {\n  MaterialParameters {\n    DiffuseMap: Repeat Textures/wall_diffuse.png\n    NormalMap:  Repeat Textures/wall_normals.png\n    Shininess: 5.0\n  }\n}\n")),Object(i.b)("p",null,'You can modify the source code of the j3m file in the "source" tab of\nthe Material Editor.'),Object(i.b)("h1",{id:"using-j3m-materials"},"Using .j3m Materials"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"../sdk/applymaterial.jpg",alt:"applymaterial.jpg"}))),Object(i.b)("p",null,"When the material is ready and saved into your projects assets\ndirectory, you can assign the .j3m to a Geometry."),Object(i.b)("p",null,"In the jMonkeyEngine SDK"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"RMB select the j3o file and choose ",Object(i.b)("inlineCode",{parentName:"p"},"Edit in SceneComposer"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You can open the SceneExplorer window by selecting\n",Object(i.b)("inlineCode",{parentName:"p"},"Window SceneExplorer")," from the menu bar, if it's not already open.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the SceneExplorer, click the geometry to which you want to assign\nthe material.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open the Properties window.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Assign the .j3m material to the .j3o in the\n",Object(i.b)("inlineCode",{parentName:"p"},"Properties Geometry Material")," section."),Object(i.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},'If the .j3o file already has a material assigned to it from\nexporting/importing, you can generate the material by selecting\n"create j3m file" instead. This will place a .j3m under\n',Object(i.b)("inlineCode",{parentName:"p"},"assets/Materials/Generated")," and assign it to your .j3o.")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Save the j3o and load it into you game."))),Object(i.b)("p",null,"Or in your Java code"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use a loader and a setter to assign the material to a Geometry.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'mywall.setMaterial(assetManager.loadMaterial( "Materials/mat_wall.j3m"));\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"See also:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../jme3/advanced/material_specification"}),"Developer specification of the jME3 material system\n(.j3md,.j3m)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../jme3/beginner/hello_material"}),"Hello Material"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../jme3/advanced/materials_overview"}),"Materials Overview"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../jme3/advanced/material_definitions"}),"Material Definitions"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../jme3/advanced/j3m_material_files"}),"j3M Material Files"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../sdk/neotexture"}),"Neotexture")," (Procedural textures)"))))}p.isMDXComponent=!0},441:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},m=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),m=p(a),j=n,d=m["".concat(l,".").concat(j)]||m[j]||s[j]||i;return a?r.a.createElement(d,o({ref:t},b,{components:a})):r.a.createElement(d,o({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=j;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var b=2;b<i;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);
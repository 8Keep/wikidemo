(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{232:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),o=(a(0),a(441)),i={},l={id:"jme3/advanced/pbr_part1",title:"pbr_part1",description:"I've been looking at Physically Based Rendering (PBR from now on) since",source:"@site/docs/jme3/advanced/pbr_part1.md",permalink:"/wikidemo/docs/jme3/advanced/pbr_part1",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/advanced/pbr_part1.md"},s=[],c={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"I've been looking at Physically Based Rendering (PBR from now on) since\na few weeks, because that's what all the cool kids are talking about\nthese days. I read almost all the interweb about it and finally somehow\nwrapped my head around the mechanics behind the concept."),Object(o.b)("p",null,"None of the papers I read gave me the epiphany though, the understanding\ncame little by little, literally reading some of the papers 10 times."),Object(o.b)("p",null,"The intent of this series of posts is first to brush up the concept of\nPBR from the artist point of view (the easy part :D), and then to\nexplain the physical concepts behind it and what you have to understand\nas a developer."),Object(o.b)("p",null,"This paper aims to present PBR as I would explain it to my mother. You\nshouldn't need a degree in image rendering theories, neither should you\nneed to be a genius to understand what's coming."),Object(o.b)("p",null,"There are a lot of papers out there, with a lot of complicated words and\nequations, that assume a solid background knowledge of image rendering,\nlighting, shading etc..."),Object(o.b)("p",null,"I won't assume this here."),Object(o.b)("p",null,"Of course, I'd like this to be as accurate as possible, so if you have\nmore information, or if explanations are not clear, feel free to chime\nin."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"I'm an artist, I want to know what PBR is :")),Object(o.b)("p",null,"So you're an artist, and have some experience in making assets for\ngames. The most commonly used model for describing a material is the\nPhong reflection model (from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Bui_Tuong_Phong"}),"Bui Tuong\nPhong"),", a clever guy that\ndied very young)."),Object(o.b)("p",null,"This model describes how light reflects on a material by splitting it in\n3 factors: Ambient color, Diffuse color, Specular color. This should\nsound familiar to 3D game artists."),Object(o.b)("p",null,"This model is a very rough approximation of what's really going on when\nlight hit a surface of a real life material, but until then it was\npretty much enough for a video game. Of course there are dozens of other\nmodels and even modification of Phong model, but this one is the most\nused, and that's the one we use in jMonkeyEngine."),Object(o.b)("p",null,"The issue with this model is that it's complicated to have a material\nthat looks consistent under different lighting environment."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Ambient is supposed to represent Ambient lighting, being some sort\nof omnipresent dim light, that tries to fake indirect lighting\ncoming from reflection of light on the surrounding objects.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Diffuse is more straightforward: it's the actual color of the object\nwhen it's under a white light.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Specular represent the color of the reflected highlights, and the\nintensity is driven by a "shininess" parameter (at least in jME but\nthat\'s pretty common). The issue is that the specular color also\ndrives the intensity because the brighter the color the more intense\nthe specular will be.'))),Object(o.b)("p",null,"All of this leads to a lot of tweaking to look correct, and may not look\nas good as it should under a different lighting environment. It also\nrelies heavily on an artist's best guesses about the material."),Object(o.b)("p",null,"So here comes Physically Based Rendering. Not that the previous one was\nnot physically based...but whatever, that sounds pretty cool."),Object(o.b)("p",null,"Everybody has their own way to implement PBR, but every implementation\nshare common goals and concepts."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Goals :")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Ease the artist's material workflow.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'More "photo realistic" rendering.'))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Concepts :")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Every surface has a reflection (specular); even the rougher ones at\ngrazing angles.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Energy conservation: a surface cannot reflect more light that it has\nreceived."))),Object(o.b)("p",null,"This wraps up the entire concept but how does it translate in practice?"),Object(o.b)("p",null,"A material can now be described with 3 parameters :"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Base color :")," Base color is the raw color of the material, it's also\noften referred as the Albedo. It's similar to the Diffuse color you know\nfrom Phong model, but with some crucial differences :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"It should not contain any shading information. Very often with phong\nmodel, Ambient Occlusion (AO) is baked into the diffuse map. Here\nBase color must be the raw color of the material")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"It does not only influence the diffuse color, but also the specular\ncolor of the material."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Metalness :"),' The degree of metallicity of the material. What does\nthat mean? is your material rather metallic or rather not (non metallic\nmaterials are called dielectric materials in the literature). Some\nimplementation calls that parameter "specular", but I found it pretty\nmisleading as it\'s completely different as the specular we know today.\nIn practice, just start out with extreme values to get the feel for it:\n1 for metallic, 0 for dielectric.'),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/images/jme3/advanced/metalness.png",alt:"metalness"}))),Object(o.b)("p",null,"Here is the same material with metalness of 0 (dielectric) on the left\nand 1 (metallic) on the right."),Object(o.b)("p",null,"Of course there are intermediary values, but from my reading, most\ndielectric material should vary from 0.04 and 0.1, and metallic are\nusually 1. Those values are based on real life measures and you can find\nsome references about them\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://seblagarde.wordpress.com/2012/04/30/dontnod-specular-and-glossiness-chart/"}),"here"),"\nand\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://seblagarde.wordpress.com/2014/04/14/dontnod-physically-based-rendering-chart-for-unreal-engine-4/"}),"here"),'.\nNote that those values are not subject to interpretation, and are\n"known" factors and artist may follow them if they want to keep\nrealistic look.'),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Roughness :")," The degree of roughness of the material : Is your\nmaterial smooth or rough. 0 means smooth, 1 means rough. Some\nimplementations refer to this as Smoothness or Glossiness. That's\nessentially the same except it's the other way around. 1 is smooth and 0\nis rough. I find the term \"Roughness\" pretty much self explanatory and\ndoesn't leave room for misinterpretation."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/images/jme3/advanced/Roughness.png",alt:"Roughness"}))),Object(o.b)("p",null,"Here is the same material with different level of roughness from 0\n(left) to 1 (right). As opposed to metalness, this parameter is very\nartist driven. The roughness of a material does not really depend on\nphysics, it's more related to micro scratches, wearing, etc... So that's\nwhere artists should be creative!"),Object(o.b)("p",null,"These parameters are the basics of PBR. Of course, each of them can be\nstored in a texture, and more common additional parameters can be used."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"For example :")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Normal map : the same as with phong model.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"AO map : since we can't bake AO in diffuse anymore, it's now an\nextra channel."))),Object(o.b)("p",null,"The nice thing is that Metalness, Roughness and AO are grey scaled\ntextures, so basically they only use one channel of a texture. So you\ncan pack those 3 maps in one texture."),Object(o.b)("p",null,"You can find an example asset that should work in a typical PBR\nimplementation ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://artisaverb.info/PBT.html"}),"here"),". This page\nshowcases pretty well what the textures should look like."),Object(o.b)("p",null,"That's it for PBR from the artist point of view. Next week I'll explain\nwhat's under the hood for you fellow developers \ud83d\ude09"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Updates (01/01/2015)")),Object(o.b)("p",null,"Since this post I had some discussions about it and it appears, it lacks\nsome informations about the different art pipeline you may come across,\nthe differences and what to expect from them."),Object(o.b)("p",null,"The post above is about the ",Object(o.b)("strong",{parentName:"p"},"Metalness Workflow"),"."),Object(o.b)("p",null,'The question I had frequently about it is "how one specify the specular\ncolor if you just have a black and white metalness texture?".'),Object(o.b)("p",null,"The answer is you do in the albedo map."),Object(o.b)("p",null,"In the metalness workflow the albedo map is used for both diffuse color\nand specular color. When the metalness is zero (dielectric material) the\nbase color is the diffuse color of the material. When the metalness is\none (metallic material), the base color is the specular color."),Object(o.b)("p",null,"So if you wonder what this base color should be, just look at it in the\nmost naive way. \"What color is that thing?\" and don't care if that's\ndiffuse or specular."),Object(o.b)("p",null,"The other common workflow is called the ",Object(o.b)("strong",{parentName:"p"},"Specular workflow")," as it uses\na specular color map instead of the metalness map. In this workflow, the\nalbedo map is the diffuse color, the specular map is the specular color,\nand you have a gray scale gloss map that is the same as the roughness\nmap but inverted (1 is smooth and 0 is rough)."),Object(o.b)("p",null,"Now there are pro and cons on using one or the other. Here are the main\npoints :"),Object(o.b)("h1",{id:"metalness-workflow-"},"Metalness workflow :"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Pros")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Use less texture space. Albedo map is an rgba map, metal and\nroughness can be packed in another rgba map and you have 2\nadditional channels for whatever you want (AO, cavity, ...w/e)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Harder to make implausible materials (some may see this as a con\nthought). it's not more physically accurate, but you're sure to\nfollow the energy conservation paradigm.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Easier color concept : base color is the color of the material."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Cons")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"May produce some white artifacts at the junction between metal and\nnon metal")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Harder to make implausible materials, not impossible though."))),Object(o.b)("h1",{id:"specular-workflow"},"Specular workflow"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Pros")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Closer to the current phong workflow : diffuse map, specular map.\nMust be easier for seasoned artists to transition to PBR.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Cons")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You're in charge of the energy conservation paradigm (may be seen as\na + for some).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"More memory used : 2 rgba textures for diffuse and specular, you may\nbe able to pack glossiness in the alpha channel of specular map, but\nyou have no room left for anything and you may have to use a third\ntexture."))),Object(o.b)("p",null,"IMO, the metalness workflow is more suited to real time 3D engine. And\nas an artist I find it more intuitive."),Object(o.b)("p",null,"That said, as a developer making his PBR pipeline; especially for an\nengine mainly used by Indie devs; whatever pipeline you choose, you\ncan't ignore the other. Free or charged PBR ready model you can find are\ndone with whatever workflow suited the artist. Some conversion are\npossible, but that's easier for user to be able to use the model as is.\nThat's why I decided to support both in my implementation."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/pbr_part2"}),"Physically Based Rendering -- Part\nTwo"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/pbr_part3.xml#image-based-lighting-in-pbr#"}),"Physically Based Rendering -- Part\nThree")))))}p.isMDXComponent=!0},441:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(i,".").concat(u)]||b[u]||h[u]||o;return a?r.a.createElement(m,l({ref:t},c,{components:a})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);
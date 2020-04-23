(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{257:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(9),i=(n(0),n(441)),o={},s={id:"jme3/advanced/pbr_part2",title:"pbr_part2",description:"[In Part one](../../jme3\\advanced\\pbr_part1), I explained what you",source:"@site/docs/jme3/advanced/pbr_part2.md",permalink:"/wikidemo/docs/jme3/advanced/pbr_part2",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/advanced/pbr_part2.md"},c=[{value:"Direct light source",id:"direct-light-source",children:[]},{value:"Indirect light source",id:"indirect-light-source",children:[]},{value:"Diffuse BRDF : Lambert",id:"diffuse-brdf--lambert",children:[]},{value:"Specular BRDF : Cook-Torrance",id:"specular-brdf--cook-torrance",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../jme3%5Cadvanced%5Cpbr_part1"}),"In Part one"),", I explained what you\nhad to know about Physically Based Rendering if you were an artist. If\nyou're a developer, and reading this article, you may have tried, or are\nplanning to implement your own PBR system. If you started to read some\nof the available literature, you've probably been struck by the math\ncomplexity of it, and by the lack of explanation of the big picture. You\nusually see articles that focus on specifics parts of the process, and\ndon't talk much about other parts as they are assumed easier. At some\npoint you have to assemble all these parts, and I had a hard time\nfiguring out how to do it in my readings. I guess it's considered basic\nstuff for other authors, but I think it deserves its proper explanation."),Object(i.b)("p",null,"I don't pretend these articles will enlighten you to the point you are\nready to implement your own system, but I hope they will give you solid\nbasis and understanding to start reading the literature without saying\n\"WTF?? on every line as I did."),Object(i.b)("p",null,"You can find a lexical, at the end, with all the strange words you'll\ncome across and their explanations."),Object(i.b)("p",null,"So here is what I figured out about using PBR and lighting in general in\na 3D rendering pipeline."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Ligthing")),Object(i.b)("p",null,"So first, lets talk about lighting in games. It all boils down to 2\nthings :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Computing ",Object(i.b)("strong",{parentName:"p"},"Diffuse")," reflection: This represent the light that\nreflects off a surface in all directions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Computing ",Object(i.b)("strong",{parentName:"p"},"Specular")," reflection : This represent the light that\nreflects off a surface directly to your eye."))),Object(i.b)("p",null,"This image from wikipedia is the most simple and yet the most helpful to\nunderstand this"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/images/jme3/advanced/Lambert2.png",alt:"Lambert2"}))),Object(i.b)("p",null,"By GianniG46 (Own work) ","[","CC-BY-SA-3.0\n(",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://creativecommons.org/licenses/by-sa/3.0"}),"http://creativecommons.org/licenses/by-sa/3.0"),") or GFDL\n(",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.gnu.org/copyleft/fdl.html"}),"http://www.gnu.org/copyleft/fdl.html"),")","]",", via Wikimedia Commons"),Object(i.b)("p",null,"To compute each of these factors, we're going to use a function. This\nfunction answers to the delicate name of ",Object(i.b)("strong",{parentName:"p"},"Bidirectional Reflectance\nDistribution Function or BRDF"),"."),Object(i.b)("p",null,"Don't be scared by this, it's a big name for just a function really.\nUsually, it will be a shader function."),Object(i.b)("p",null,"Of course there are different BRDFs depending on what you want to\ncompute, and on the lighting model you use. The BRDFs are usually called\nby the name of the guys that discovered/elaborated them."),Object(i.b)("p",null,"Also, most of the time, in implementations for real time rendering,\nthose BRDFs are approximated for the sake of performance. And\nincidentally, those approximations also have names, that can be people\nnames or technique names..."),Object(i.b)("h1",{id:"lighting-in-pbr"},"Lighting in PBR"),Object(i.b)("p",null,"Computing lighting for PBR is exactly the same as with the current\nrendering ( the system we use today with ambient, diffuse, specular,\nsometimes called ad-hoc system in the literature) :"),Object(i.b)("p",null,"For each light source, compute the diffuse factor and the specular\nfactor. The main difference is that the BRDFs used are different, more\nphysically accurate, and works predictably under different light sources\nwith few parameter entries."),Object(i.b)("p",null,"So what is a light source?"),Object(i.b)("h2",{id:"direct-light-source"},"Direct light source"),Object(i.b)("p",null,"Something that emits light. In games the most common light sources are\nDirectional lights (think of the sun), Spot lights (think of a torch\nlight), Point lights (think of a light bulb)."),Object(i.b)("p",null,"That's what is commonly used in the ad-hoc system, and PBR also handle\nthose types of lights."),Object(i.b)("h2",{id:"indirect-light-source"},"Indirect light source"),Object(i.b)("p",null,"Something that reflects light and indirectly lights its surroundings.\nThink for example of a red wall next to a car at daytime, the sunlight\nhits the wall and the wall reflects red light that, in turn, lights up\nthe car."),Object(i.b)("p",null,"This is not handled by the ad-hoc system, or very poorly faked with\nambient lighting."),Object(i.b)("p",null,"This part is optional for PBR, but that's actually the part you really\nwant. because that's what make things pretty!"),Object(i.b)("p",null,"In games, indirect lighting is done by using an environment map as a\nlight source. This technique is called ",Object(i.b)("strong",{parentName:"p"},"Image Based Lighting (IBL)"),"."),Object(i.b)("p",null,"So let's say we're looking for the full package. we need to compute\ndiffuse and specular contribution for each light source be it direct or\nindirect."),Object(i.b)("p",null,"To do so we need a BRDF for diffuse and a BRDF for specular, and stick\nto them for each light source for consistency. Also those BRDF should\naccept as entry the parameters we want to expose for the artists (base\ncolor, metalness, roughness), or derived parameters with minimal\ntransformation."),Object(i.b)("p",null,"So the pseudo code for a complete lighting is this :"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"//direct lighting\nfor each directLightSource {\n    directDiffuseFactor = DiffuseBRDF(directlightSource)\n    directSpecularFactor = SpecularBRDF(directLightSource)\n    directLighting += Albedo * directDiffuseFactor + SpecColor * directSpecularFactor\n}\n\n//Indirect Lighting, done through Image Based Rendering with an environment map\nindirectDiffuseFactor = DiffuseBRDF(EnvMap)\nindirectSpecularFactor = SpecularBRDF(EnvMap)\n\nindirectLighting = Albedo * indirectDiffuseFactor + SpecColor * indirectSpecularFactor\n\nLighting = directLighting + indirectLighting\n")),Object(i.b)("p",null,"I'll go into more details, in the posts serie, on how to compute each\nfactors, but that's pretty much it."),Object(i.b)("h1",{id:"choosing-your-brdfs"},"Choosing your BRDFs"),Object(i.b)("p",null,"There is a vast choice of BRDF, and I'm not going to talk about all of\nthem but focus on the ones that I use in my implementation. I'll just\nguide you to alternatives and provide links to relevant articles for\nmore details."),Object(i.b)("p",null,"I chose to use the same BRDF as the ones used in Unreal Engine 4 from\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://blog.selfshadow.com/publications/s2013-shading-course/karis/s2013_pbs_epic_notes_v2.pdf"}),"this\narticle"),"\nby Brian Karis, as I completely trust his judgement. The provided code\nhelped a great deal, but it was far from straight forward to integrate.\nIn the end I had to fully research, and understand all the whereabouts\nof BRDFs."),Object(i.b)("h2",{id:"diffuse-brdf--lambert"},"Diffuse BRDF : Lambert"),Object(i.b)("p",null,"The most used diffuse BRDF in games. It's very popular because it's very\ncheap to compute and gives good results. This is the most simple way of\ncomputing diffuse. ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Lambertian_reflectance"}),"here are the\ndetails")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/images/jme3/advanced/DiffuseLambert.jpg",alt:"DiffuseLambert"}))),Object(i.b)("p",null,"Diffuse Lambert factor for a direct light source (directional light)\nwith a yellow surface color."),Object(i.b)("p",null,"Some Alternatives :"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Oren-Nayar")," : Gives better visual results than classic Lambert, and\nhas the advantage of using an entry parameter called roughness...rings a\nbell? Unfortunately, the additional computation cost is not really worth\nit,IMO. ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Oren%E2%80%93Nayar_reflectance_model"}),"Details\nhere")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Harahan-Krueger")," : Takes into consideration sub-surface scattering\nfor diffuse lighting (every material surface has layers and light\nscatters into those different layers before going out of the material in\na random direction). A lot of computations compared to Lambert, but may\nbe important if you want to have a good sub surface scattering look for\nskin for example. ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://cseweb.ucsd.edu/~ravir/6998/papers/p165-hanrahan.pdf"}),"more details in this\npaper")),Object(i.b)("h2",{id:"specular-brdf--cook-torrance"},"Specular BRDF : Cook-Torrance"),Object(i.b)("p",null,"This is a bit more complicated for specular. We need a physically\nplausible BRDF. We use what is called a ",Object(i.b)("strong",{parentName:"p"},"Microfacet BRDF"),". So what is\nit?"),Object(i.b)("p",null,"It states that at a micro level a surface is not plane, but formed of a\nmultitude of little randomly aligned surfaces, the microfacets. Those\nsurfaces acts as small mirrors that reflects incoming light. The idea\nbehind this BRDF is that only some of those facets may be oriented so\nthat the incoming light reflects to your eye. The smoother the surface,\nthe more all facets are aligned, and the most neat is the light\nreflection. In the contrary, if a surface is rough, the facets are more\nrandomly oriented so the light reflection is scattered on the surface,\nand the reflection looks more blurry."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/images/jme3/advanced/DiffuseLambert.jpg",alt:"Specular"}))),Object(i.b)("p",null,"Microfacet specular factor for a direct light source. On the left a\nsmooth surface, on the right a rough one. Note how the reflection is\nscattered on the surface when it's rough."),Object(i.b)("p",null,"The microfacet BRDF we use is called Cook-Torrance. From my readings, I\ncouldn't find any implementation that use another specular BRDF. It\nseems like this is the global form of any microfacet BRDF."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"f = D * F * G / (4 * (N.L) * (N.V));\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"N.L")," is the dot product between the normal of the shaded surface and\nthe light direction."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"N.V")," is the dot product between the normal of the shaded surface and\nthe view direction."),Object(i.b)("p",null,"The other terms are :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Normal Distribution Function called D")," (for distribution). You\nmay also find some references to it as NDF. It computes the\ndistribution of the microfacets for the shaded surface")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Fresnel factor called F"),". Discovered by Augustin Fresnel\n(frenchies are sooo clever), it describes how light reflects and\nrefracts at the intersection of two different media (most often in\ncomputer graphics : Air and the shaded surface)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Geometry shadowing term G"),". Defines the shadowing from the\nmicrofacets"))),Object(i.b)("p",null,"That's where it gets complicated. For each of these terms, there are\nseveral models or approximations to computed them."),Object(i.b)("p",null,"I've settled to use those models and approximations :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"D : Trowbridge-Reitz/GGX")," normal Distribution function.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"F : Fresnel term Schlick"),"'s\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.cs.virginia.edu/~jdl/bib/appearance/analytic%20models/schlick94b.pdf"}),"approximation"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"G : Schlick-GGX")," approximation"))),Object(i.b)("p",null,"I won't go into the details of all the alternatives I just want to\nexpose an overview of the whole process first. But I'll dive into more\ntechnical details on the terms I use, in following posts. To have a neat\noverview of all alternatives you can see this\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://graphicrants.blogspot.fr/2013/08/specular-brdf-reference.html"}),"post"),"\non Brian Karis's blog."),Object(i.b)("p",null,"That sums up the whole process, but there is still much to explain. In\nnext post I'll make a focus on indirect lighting, as it's the part that\ngave me the hardest time to wrap my head around. I'll explain the Image\nBased Lighting technique used, and how you can compute diffuse and\nspecular from an Environment Map."),Object(i.b)("h1",{id:"lexical-"},"Lexical :"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Diffuse reflection :")," light that reflects from a surface in every\ndirection."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Specular reflection :")," light that reflects from a surface toward the\nviewer."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Bidirectional Reflectance Distribution Function or BRDF :")," a function\nto compute Diffuse or Specular reflection."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Image Based Rendering or IBL :")," a technique that uses an image as a\nlight source"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Microfacet Specular BRDF :")," A specular BRDF that assumes a surface is\nmade of a multitude of very small randomly aligned surfaces: the\nmicrofacets. it depends on 3 factors called D, F and G."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Normal Distribution Function called D")," (for distribution). You may\nalso find some references to it as NDF. It computes the distribution of\nthe microfacets for the shaded surface"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Fresnel factor called F"),". Discovered by Augustin Fresnel (frenchies\nare sooo clever), it describes how light reflects and refracts at the\nintersection of two different media (most often in computer graphics :\nAir and the shaded surface)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Geometry shadowing term G"),". Defines the shadowing from the micro\nfacets"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../jme3%5Cadvanced%5Cpbr_part1"}),"Physically Based Rendering -- Part\none"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../jme3%5Cadvanced%5Cpbr_part3"}),"Physically Based Rendering -- Part\nThree")))))}u.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,d=p["".concat(o,".").concat(b)]||p[b]||h[b]||i;return n?r.a.createElement(d,s({ref:t},l,{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
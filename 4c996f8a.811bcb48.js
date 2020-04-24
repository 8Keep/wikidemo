(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{233:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(1),o=n(9),r=(n(0),n(441)),i={},c={id:"jme3/rotate",title:"rotate",description:"*Bad news: 3D rotation is done using matrix calculus.\\",source:"@site/docs/jme3/rotate.md",permalink:"/wikidemo/docs/jme3/rotate",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/rotate.md",sidebar:"main",previous:{title:"math",permalink:"/wikidemo/docs/jme3/math"},next:{title:"math_video_tutorials",permalink:"/wikidemo/docs/jme3/math_video_tutorials"}},l=[],s={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Bad news: 3D rotation is done using matrix calculus.\\\nGood news: If you do not understand calculus, there are two simple rules\nhow you get it right.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"3D rotation")," is a crazy mathematical operation where you need to\nmultiply all vertices in your object by four floating point numbers; the\nmultiplication is referred to as concatenation, the array of four\nnumbers {x,y,z,w} is referred to as\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../jme3/quaternion"}),"quaternion"),". Don't worry, the 3D engine does\nthe tough work for you. All you need to know is:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"The Quaternion")," is an object capable of deep-freezing and storing a\nrotation that you can apply to a 3D object."),Object(r.b)("h1",{id:"using-quaternions-for-rotation"},"Using Quaternions for Rotation"),Object(r.b)("p",null,"To store a rotation in a Quaternion, you must specify two things: The\nangle and the axis of the rotation."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The rotation angle is defined as a multiple of the number PI.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'The rotation axis is defined by a vector: Think of them in terms of\n"pitch", "yaw", and "roll".'))),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"/* This quaternion stores a 180 degree rolling rotation */\nQuaternion roll180 = new Quaternion();\nroll180.fromAngleAxis( FastMath.PI , new Vector3f(0,0,1) );\n/* The rotation is applied: The object rolls by 180 degrees. */\nthingamajig.setLocalRotation( roll180 );\n")),Object(r.b)("p",null,"So how to choose the right numbers for the Quaternion parameters? I'll\ngive you my cheat-sheet:"),Object(r.b)("p",null,"+----------------------+----------------------+-----------------------+\n| ",Object(r.b)("strong",{parentName:"p"},"Rotation around    | "),"Use this Axis      | ",Object(r.b)("strong",{parentName:"p"},"Examples for this   |\n| Axis?"),"              | Vector!",Object(r.b)("strong",{parentName:"p"},"            | kind of rotation"),"    |\n+======================+======================+=======================+\n| X axis               | (1,0,0)              | A plane pitches.      |\n|                      |                      | Nodding your head.    |\n+----------------------+----------------------+-----------------------+\n| Y axis               | (0,1,0)              | A plane yaws. A       |\n|                      |                      | vehicle turns.        |\n|                      |                      | Shaking your head.    |\n+----------------------+----------------------+-----------------------+\n| Z axis               | (0,0,1)              | A plane rolls or      |\n|                      |                      | banks. Cocking your   |\n|                      |                      | head.                 |\n+----------------------+----------------------+-----------------------+"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"These are the three most common examples -- technically you can rotate\naround any axis expressed by a vector."))),Object(r.b)("p",null,"+----------------------+----------------------+-----------------------+\n| ",Object(r.b)("strong",{parentName:"p"},"Angle?"),"           | ",Object(r.b)("strong",{parentName:"p"},"Use Radians!"),"     | ",Object(r.b)("strong",{parentName:"p"},"Examples"),"          |\n+======================+======================+=======================+\n| 45 degrees           | FastMath.PI / 4      | eighth of a circle    |\n+----------------------+----------------------+-----------------------+\n| 90 degrees           | FastMath.PI / 2      | quarter circle, 3     |\n|                      |                      | o'clock               |\n+----------------------+----------------------+-----------------------+\n| 180 degrees          | FastMath.PI          | half circle, 6        |\n|                      |                      | o'clock               |\n+----------------------+----------------------+-----------------------+\n| 270 degrees          | FastMath.PI ","*"," 3 / 2 | three quarter circle, |\n|                      |                      | 9 o'clock             |\n+----------------------+----------------------+-----------------------+\n| 360 degrees          | FastMath.PI ","*"," 2     | full circle, 12       |\n|                      |                      | o'clock               |\n|                      |                      | emoji:wink","[","]","        |\n+----------------------+----------------------+-----------------------+\n| ",Object(r.b)("inlineCode",{parentName:"p"},"g")," degrees          | FastMath.PI ","*"," g /   | any angle ",Object(r.b)("inlineCode",{parentName:"p"},"g"),"         |\n|                      | 180                  |                       |\n+----------------------+----------------------+-----------------------+"),Object(r.b)("p",null,"::: {.important}\nYou must specify angles in\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Radian"}),"Radian"),"s (multiples or fractions\nof PI). If you use degrees, you will just get useless results.\n:::"),Object(r.b)("p",null,"How to use these tables to speficy a certain rotation:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Pick the appropriate vector from the axis table.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Pick the appropriate radians value from the angle table.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a Quaternion to store this rotation.\n",Object(r.b)("inlineCode",{parentName:"p"},"\u2026 fromAngleAxis( radians , vector )"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Apply the Quaternion to a node to rotate it. ",Object(r.b)("inlineCode",{parentName:"p"},"\u2026 setLocalRotation(\u2026)")))),Object(r.b)("p",null,"Quaternion objects can be used as often as you want, so give them\nmeaningfull names, like ",Object(r.b)("inlineCode",{parentName:"p"},"roll90, pitch45, yaw180"),"."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://moddb.wikia.com/wiki/OpenGL:Tutorials:Using_Quaternions_to_represent_rotation"}),"More about\nQuaternions"),"..."),Object(r.b)("h1",{id:"code-sample"},"Code Sample"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'/* We start out with a horizontal object */\nCylinder cylinder = new Cylinder("post", 10, 10, 1, 10);\ncylinder.setModelBound(new BoundingBox());\n/* Create a 90-degree-pitch Quaternion. */\nQuaternion pitch90 = new Quaternion();\npitch90.fromAngleAxis(FastMath.PI/2, new Vector3f(1,0,0));\n/* Apply the rotation to the object */\ncylinder.setLocalRotation(pitch90);\n/* Update the model. Now it\'s vertical. */\ncylinder.updateModelBound();\ncylinder.updateGeometry();\n')),Object(r.b)("h1",{id:"interpolating-rotations"},"Interpolating Rotations"),Object(r.b)("p",null,"You can specify two rotations, and then have jme calculate (interpolate)\nthe steps between two rotations:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"com.jme3.math.Quaternion, slerp() -- store an interpolated step\nbetween two rotations"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"%7Blink-javadoc%7D/com/jme3/math/Quaternion.html"}),"com.jme3.math.Quaternion"))))),Object(r.b)("h1",{id:"adding-rotations"},"Adding Rotations"),Object(r.b)("p",null,"You can concatenate (add) rotations: This means you turn the object\nfirst around one axis, then around the other, in one step.\\\n",Object(r.b)("inlineCode",{parentName:"p"},"Quaternion myRotation =  pitch90.mult(roll45); /* pitch and roll */")),Object(r.b)("h1",{id:"troubleshooting-rotations"},"Troubleshooting Rotations"),Object(r.b)("p",null,"Does the object end up in an unexpected location, or at an unexpected\nangle? If you are getting weird results, check the following:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"3-D transformations are non-commutative! This means it often makes a\nhuge difference whether you first move a node and then rotate it\naround an axis, or first rotate the node around an axis and then\nmove it. Make sure you code does what you mean to do.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Are you intending to rotate around the object's origin along an\naxis, or around another pivot point outside the object? If you are\ntrying to ",Object(r.b)("em",{parentName:"p"},"rotate an object around a pivot point"),", you have to\ncreate an (invisible) pivot node first, and attach the object to it.\nThen apply the rotation to the ",Object(r.b)("em",{parentName:"p"},"parental pivot node"),", not to the\nchild object itself!")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Did you enter the angle in degrees (0 - 360\xb0) or radians (0 -\n2","*","PI)? A 3D engine expects radians, so make sure to convert your\nvalues! Formula: ",Object(r.b)("inlineCode",{parentName:"p"},"g\xb0 = FastMath.PI * g / 180"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Did you modify one of the pre-made constants like this?"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"//Never do things like this!!!\nQuaternion.IDENTITY.fromAngleAxis(-FastMath.HALF_PI, Vector3f.UNIT_X);\n")),Object(r.b)("p",{parentName:"li"},"This looks normal enough, after-all, this is a constant right?\nSorta, what you are really doing is setting a value to the static\nfinal constant ",Object(r.b)("inlineCode",{parentName:"p"},"Quaternion.IDENTITY"),"."),Object(r.b)("p",{parentName:"li"},"To quote one of the core team members."),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"You gain NOTHING by doing this, either. Just use new\nQuaternion().fromAngles() like a sane person."),Object(r.b)("p",{parentName:"blockquote"},"---  pspeed Core Team Member")),Object(r.b)("p",{parentName:"li"},"For a deeper explaination, see this forum thread: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.jmonkeyengine.org/t/quaternion-bug/39060"}),"Quaternion\nbug?")))),Object(r.b)("h1",{id:"tip-matrix"},"Tip: Matrix"),Object(r.b)("p",null,"This here is just about rotation, but there are three types of 3-D\ntransformation: rotate, scale, and translate."),Object(r.b)("p",null,"You can do all transformations in individual steps (and then update the\nobjects geometry and bounds), or you can combine them and transform the\nobject in one step. If you have a lot of repetitive movement going on in\nyour game it's worth learning more about ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../jme3/matrix"}),"Matrix4f"),"\nfor optimization. JME can also help you interpolate the steps between\ntwo fixed transformations."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"com.jme3.math.Transform, interpolateTransforms() -- interpolate a\nstep between two transformations"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"%7Blink-javadoc%7D/com/jme3/math/Transform.html"}),"com.jme.math.Transform")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In case you missed it, see also\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../jme3/quaternion"}),"Quaternion"),"."))))}b.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||r;return n?o.a.createElement(d,c({ref:t},s,{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
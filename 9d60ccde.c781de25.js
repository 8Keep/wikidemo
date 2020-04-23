(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{318:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),i=(n(0),n(441)),o={},c={id:"jme3/matrix",title:"matrix",description:"Matrix",source:"@site/docs/jme3/matrix.md",permalink:"/wikidemo/docs/jme3/matrix",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/matrix.md"},l=[{value:"Definition",id:"definition",children:[]},{value:"Transformations",id:"transformations",children:[{value:"Scaling",id:"scaling",children:[]},{value:"Rotation",id:"rotation",children:[]},{value:"Translation",id:"translation",children:[]}]},{value:"jME Class",id:"jme-class",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"matrix"},"Matrix"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"%7Blink-javadoc%7D/com/jme3/math/Matrix3f.html"}),"Javadoc of Matrix3f"),"\nand ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"%7Blink-javadoc%7D/com/jme3/math/Matrix4f.html"}),"Javadoc of Matrix4f")),Object(i.b)("h2",{id:"definition"},"Definition"),Object(i.b)("p",null,"A Matrix is typically used as a ",Object(i.b)("em",{parentName:"p"},"linear transformation")," to map vectors\nto vectors. That is: Y = MX where X is a Vector and M is a Matrix\napplying any or all transformations (scale, rotate, translate)."),Object(i.b)("p",null,"There are a few special matrices:"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"zero matrix")," is the Matrix with all zero entries."),Object(i.b)("p",null,"+----------------------+----------------------+-----------------------+\n| 0                    | 0                    | 0                     |\n+======================+======================+=======================+\n| 0                    | 0                    | 0                     |\n+----------------------+----------------------+-----------------------+\n| 0                    | 0                    | 0                     |\n+----------------------+----------------------+-----------------------+"),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"Identity Matrix")," is the matrix with 1 on the diagonal entries and 0\nfor all other entries."),Object(i.b)("p",null,"+----------------------+----------------------+-----------------------+\n| 1                    | 0                    | 0                     |\n+======================+======================+=======================+\n| 0                    | 1                    | 0                     |\n+----------------------+----------------------+-----------------------+\n| 0                    | 0                    | 1                     |\n+----------------------+----------------------+-----------------------+"),Object(i.b)("p",null,"A Matrix is ",Object(i.b)("em",{parentName:"p"},"invertible")," if there is a matrix ",Object(i.b)("em",{parentName:"p"},"M^-1^")," where ",Object(i.b)("em",{parentName:"p"},"MM^-1^ =\nM^-1^ = I"),"."),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"transpose")," of a matrix ",Object(i.b)("em",{parentName:"p"},"M = ","[","m~ij~","]")," is ",Object(i.b)("em",{parentName:"p"},"M^T^ = ","[","m~ji~","]"),". This\ncauses the rows of ",Object(i.b)("em",{parentName:"p"},"M")," to become the columns of ",Object(i.b)("em",{parentName:"p"},"M^T^"),"."),Object(i.b)("p",null,"+---------+---------+---------+---------+---------+---------+---------+\n| 1       | 1       | 1       |         | 1       | 2       | 3       |\n+=========+=========+=========+=========+=========+=========+=========+\n| 2       | 2       | 2       | \u21d2       | 1       | 2       | 3       |\n+---------+---------+---------+---------+---------+---------+---------+\n| 3       | 3       | 3       |         | 1       | 2       | 3       |\n+---------+---------+---------+---------+---------+---------+---------+"),Object(i.b)("p",null,"A Matrix is symmetric if ",Object(i.b)("em",{parentName:"p"},"M")," = ",Object(i.b)("em",{parentName:"p"},"M^T^"),"."),Object(i.b)("p",null,"+----------------------+----------------------+-----------------------+\n| X                    | A                    | B                     |\n+======================+======================+=======================+\n| A                    | X                    | C                     |\n+----------------------+----------------------+-----------------------+\n| B                    | C                    | X                     |\n+----------------------+----------------------+-----------------------+"),Object(i.b)("p",null,"Where X, A, B, and C equal numbers"),Object(i.b)("p",null,"jME includes two types of Matrix classes: Matrix3f and Matrix4f.\nMatrix3f is a 3x3 matrix and is the most commonly used (able to handle\nscaling and rotating), while Matrix4f is a 4x4 matrix that can also\nhandle translation."),Object(i.b)("h2",{id:"transformations"},"Transformations"),Object(i.b)("p",null,"Multiplying a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../jme3/terminology.xml#vectors"}),"Vector")," with a Matrix\nallows the Vector to be transformed. Either rotating, scaling or\ntranslating that Vector."),Object(i.b)("h3",{id:"scaling"},"Scaling"),Object(i.b)("p",null,"If a ",Object(i.b)("em",{parentName:"p"},"diagonal Matrix"),", defined by D = ","[","d~ij~","]"," and d~ij~ = 0 for i !=\nj, has all positive entries it is a ",Object(i.b)("em",{parentName:"p"},"scaling matrix"),". If d~i~ is greater\nthan 1 then the resulting Vector will grow, while if d~i~ is less than 1\nit will shrink."),Object(i.b)("h3",{id:"rotation"},"Rotation"),Object(i.b)("p",null,"A ",Object(i.b)("em",{parentName:"p"},"rotation matrix")," requires that the transpose and inverse are the same\nmatrix (R^-1^ = R^T^). The ",Object(i.b)("em",{parentName:"p"},"rotation matrix")," R can then be calculated\nas: R = I + (sin(angle)) S + (1 - cos(angle)S^2^ where S is:"),Object(i.b)("p",null,"+----------------------+----------------------+-----------------------+\n| 0                    | u~2~                 | -u~1~                 |\n+======================+======================+=======================+\n| -u~2~                | 0                    | u~0~                  |\n+----------------------+----------------------+-----------------------+\n| u~1~                 | -u~0~                | 0                     |\n+----------------------+----------------------+-----------------------+"),Object(i.b)("h3",{id:"translation"},"Translation"),Object(i.b)("p",null,"Translation requires a 4x4 matrix, where the Vector (x,y,z) is mapped to\n(x,y,z,1) for multiplication. The ",Object(i.b)("em",{parentName:"p"},"Translation Matrix")," is then defined\nas:"),Object(i.b)("p",null,"+-----------------------------------+-----------------------------------+\n| M                                 | T                                 |\n+===================================+===================================+\n| S^T^                              | 1                                 |\n+-----------------------------------+-----------------------------------+"),Object(i.b)("p",null,"where M is the 3x3 matrix (containing any rotation/scale information), T\nis the translation Vector and S^T^ is the transpose Vector of T. 1 is\njust a constant."),Object(i.b)("h2",{id:"jme-class"},"jME Class"),Object(i.b)("p",null,"Both Matrix3f and Matrix4f store their values as floats and are publicly\navailable as (m00, m01, m02, ..., mNN) where N is either 2 or 3."),Object(i.b)("p",null,"Most methods are straight forward, and I will leave documentation to the\nJavadoc."))}b.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},m=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=b(n),u=a,d=m["".concat(o,".").concat(u)]||m[u]||p[u]||i;return n?r.a.createElement(d,c({ref:t},s,{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
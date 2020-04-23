(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{284:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),o=(a(0),a(441)),c={},i={id:"jme3/advanced/remote-controlling_the_camera",title:"remote-controlling_the_camera",description:"Positioning the Camera",source:"@site/docs/jme3/advanced/remote-controlling_the_camera.md",permalink:"/wikidemo/docs/jme3/advanced/remote-controlling_the_camera",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/advanced/remote-controlling_the_camera.md"},m=[{value:"Code Sample",id:"code-sample",children:[]}],l={rightToc:m};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"positioning-the-camera"},"Positioning the Camera"),Object(o.b)("p",null,"You can steer the camera using\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../jme3/advanced/cinematics"}),"Cinematics"),":"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a Cinematic.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a CameraNode and bind the camera object to the Cinematic.\nNote that we also give the camera node a name in this step."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'CameraNode camNode = cinematic.bindCamera("topView", cam);\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Position the camera node in its start location.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Use activateCamera() to give the control of the camera to this node.\nYou now see the scene from this camera's point of view. For example\nto see through the camera node named \"topView, 6 seconds after the\nstart of the cinematic, you'd write"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'cinematic.activateCamera(6, "topView");\n')))),Object(o.b)("h2",{id:"code-sample"},"Code Sample"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'flyCam.setEnabled(false);\nCinematic cinematic = new Cinematic(rootNode, 20);\n\nCameraNode camNodeTop = cinematic.bindCamera("topView", cam);\ncamNodeTop.setControlDir(ControlDirection.SpatialToCamera);\ncamNodeTop.getControl(0).setEnabled(false);\n\nCameraNode camNodeSide = cinematic.bindCamera("sideView", cam);\ncamNodeSide.setControlDir(ControlDirection.CameraToSpatial);\ncamNodeSide.getControl(0).setEnabled(false);\n')),Object(o.b)("h1",{id:"moving-the-camera"},"Moving the Camera"),Object(o.b)("p",null,"If desired, attach the camNode to a MotionEvent to let it travel along\nwaypoints. This is demonstrated in the\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-examples/src/main/java/jme3test/animation/TestCameraMotionPath.java"}),"TestCameraMotionPath.java"),"\nexample."))}p.isMDXComponent=!0},441:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),d=p(a),b=n,u=d["".concat(c,".").concat(b)]||d[b]||s[b]||o;return a?r.a.createElement(u,i({ref:t},l,{components:a})):r.a.createElement(u,i({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=b;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);
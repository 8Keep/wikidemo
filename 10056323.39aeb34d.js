(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),o=(n(0),n(441)),l={},i={id:"jme3/advanced/logging",title:"logging",description:"Logging Like a Newbie",source:"@site/docs/jme3/advanced/logging.md",permalink:"/wikidemo/docs/jme3/advanced/logging",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/advanced/logging.md"},c=[],p={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"logging-like-a-newbie"},"Logging Like a Newbie"),Object(o.b)("p",null,"Many developers just use ",Object(o.b)("inlineCode",{parentName:"p"},"System.out.println()")," to print diagnostic\nstrings to the terminal. The problem with that is that before the\nrelease, you have to go through all your code and make certain you\nremoved all these ",Object(o.b)("inlineCode",{parentName:"p"},"println()")," calls. You do not want your customers to\nsee them, and needlessly worry about ominous outdated debugging\ndiagnostics."),Object(o.b)("h1",{id:"logging-like-a-pro"},"Logging Like a Pro"),Object(o.b)("p",null,"Instead of ",Object(o.b)("inlineCode",{parentName:"p"},"println()"),", use the standard Java logger from\n",Object(o.b)("inlineCode",{parentName:"p"},"java.util.logging"),". It has many advantages for professional game\ndevelopment:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You tag each message with its ",Object(o.b)("strong",{parentName:"p"},"log level"),": Severe error,\ninformative warning, etc.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You can ",Object(o.b)("strong",{parentName:"p"},"switch off or on printing of log messages")," up to certain\nlog level with just one line of code."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"During development, you would set the log level to ",Object(o.b)("inlineCode",{parentName:"p"},"fine"),",\nbecause you want all warnings printed.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For the release, you set the log level to only report ",Object(o.b)("inlineCode",{parentName:"p"},"severe"),"\nerrors, and never print informative diagnostics.")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The logger message string is ",Object(o.b)("strong",{parentName:"p"},"localizable")," and can use variables.\nOptimally, you localize all error messages."))),Object(o.b)("p",null,"To print comments like a pro, you use the following logger syntax."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Declare the logger object once per file. In the following code,\nreplace ",Object(o.b)("inlineCode",{parentName:"p"},"HelloWorld")," by the name of the class where you are using\nthis line."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"private static final Logger LOGGER = Logger.getLogger(HelloWorld.class.getName());\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Declare the info that you want to include in the message. The\nvariables (here ",Object(o.b)("inlineCode",{parentName:"p"},"a, b, c"),") can be any printable Java object.\\\nExample: ",Object(o.b)("inlineCode",{parentName:"p"},"Vector3f a = cam.getLocation();"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Put the variables in a new ",Object(o.b)("inlineCode",{parentName:"p"},"Object")," array. Refer to the variables as\n",Object(o.b)("inlineCode",{parentName:"p"},"{0},{1},{2}")," etc in the message string. Variables are numbered in\nthe order you put them into the ",Object(o.b)("inlineCode",{parentName:"p"},"Object")," array.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add the logger line and specify the log level:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Usecase 1: During debugging, a developer uses a warning to\nremind himself of a bug:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'LOGGER.log(Level.WARNING, "why is {0} set to {1} again?!",\n                      new Object[]{a , b});\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Usecase 2: For the release, you inform the customer of a problem\nand how to solve it."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'LOGGER.log(Level.SEVERE, "MyGame error: {0} must not be {1} after {2}! Adjust flux generator settings.",\n                      new Object[]{a , b , c});\n')))))),Object(o.b)("p",null,'::: {.important}\nAs you see in the examples, you should phrase potentially "customer\nfacing errors in a neutral way and offer ',Object(o.b)("em",{parentName:"p"},"a reason and a solution")," for\nthe error (if you don't, it has no value to your customer). If your\ndeveopment team uses WARNINGs as replacement for casual printlns, make\nsure you deactivate them for the release.\n:::"),Object(o.b)("p",null,"More details about ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://docs.oracle.com/javase/8/docs/api/java/util/logging/Level.html"}),"Java log\nlevels"),"\nhere."),Object(o.b)("h1",{id:"switching-the-logger-on-and-off"},"Switching the Logger on and off"),Object(o.b)("p",null,"In the release version you will deactivate the logging output to the\nterminal."),Object(o.b)("p",null,"To deactivate the default logger for a release, you set the log level to\nonly report ",Object(o.b)("inlineCode",{parentName:"p"},"severe")," messages:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"Logger.getLogger(\u201d\u201d).setLevel(Level.SEVERE);\n")),Object(o.b)("p",null,"During development or a beta test, you can tune down the default logger,\nand set the log level to only report ",Object(o.b)("inlineCode",{parentName:"p"},"warning"),"s:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"Logger.getLogger(\u201d\u201d).setLevel(Level.WARNING);\n")),Object(o.b)("p",null,"To activate full logging, e.g. for debugging and testing, use the ",Object(o.b)("inlineCode",{parentName:"p"},"fine"),"\nlevel:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"Logger.getLogger(\u201d\u201d).setLevel(Level.FINE);\n")),Object(o.b)("h1",{id:"advanced-error-handling"},"Advanced Error Handling"),Object(o.b)("p",null,"When an uncaught exception reaches certain parts of the jME3 system then\nthe default response is to log the error and then exit the application.\nThis is because an error happening every frame will rapidly fill logs\nwith repeated failings and potentially mask or over-write the original\ncause of the problem or even the application may continue for a while\nand then suffer other errors caused by the first and make the root cause\nhard to determine."),Object(o.b)("p",null,"This behaviour can be partially modified by overriding the method\nhandleError in SimpleApplication, for example to display a custom\nmessage to users, or to provide users with information on how to report\na bug or even to change the way that the error is logged."))}b.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,m=s["".concat(l,".").concat(u)]||s[u]||g[u]||o;return n?r.a.createElement(m,i({ref:t},p,{components:n})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),o=(a(0),a(441)),i={},l={id:"jme3/advanced/localization",title:"localization",description:"Scope",source:"@site/docs/jme3/advanced/localization.md",permalink:"/wikidemo/docs/jme3/advanced/localization",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/advanced/localization.md"},c=[],s={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"scope"},"Scope"),Object(o.b)("p",null,"Localizing an application can mean several things:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"At minimum you translate all messages and dialogs in the user\ninterface to your target languages.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'You should also translate the "read me, help, and other\ndocumentation.')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Also translating web content related to the application makes sure\ninternational users find out about your localized game.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'If you go the whole way of internationalization, you also "translate\nmetaphors in icons or symbols used.\\\nE.g. For localizations to right-to-left languages, you must also\nadjust the whole flow of the UI (order of menus and buttons).'))),Object(o.b)("p",null,"There are tools that assist you with localizing Java Swing GUIs. jME3\napplications do not typically have a Swing GUI, so those tools are not\nof much help. Just stick to the normal Java rules about using Bundle\nProperties:"),Object(o.b)("h1",{id:"preparing-the-localization"},"Preparing the Localization"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The jMonkeyEngine SDK supports opening and editing Bundle.properties\nfiles. Also note the Tools ",">"," Localization menu."))),Object(o.b)("p",null,"To prepare the application for localization, you have to first identify\nall hard-coded messages."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Find every line in your jME3 game where you hard-coded message\nstrings, e.g."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'System.out.print("Hello World!");\nUiText.setText("Score: " + score);\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create one file named ",Object(o.b)("inlineCode",{parentName:"p"},"Bundle.properties")," in each directory where\nthere are Java file that contain messages.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"For every hard-coded message, you add one line to the\n",Object(o.b)("inlineCode",{parentName:"p"},"Bundle.properties")," file: First specify a unique key that identifies\nthis string; then an equal sign; and the literal string itself."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"greeting=Hello World!\nscore.display=Score:\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the source code, replace every occurence of a hard-coded message\nwith the appropriate Resource Bundle call to its unique key:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'System.out.print(ResourceBundle.getBundle("Bundle").getString("greeting"));\nUiText.setText(ResourceBundle.getBundle("Bundle").getString("score.display") + score);\n')))),Object(o.b)("p",null,"The language used in the Bundle.properties files will be the default\nlanguage for your game."),Object(o.b)("h1",{id:"translating-the-messages"},"Translating the Messages"),Object(o.b)("p",null,"Each additional language comes in a set of files that is marked with a\n(usually) two-letter suffix. Common locales are de for German, en for\nEnglish, fr for French, ja for Japanese, pt for Portuguese, etc."),Object(o.b)("p",null,"To translate the messages to another language, for example, German:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Make a copy of the ",Object(o.b)("inlineCode",{parentName:"p"},"Bundle.properties")," files.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Name the copy ",Object(o.b)("inlineCode",{parentName:"p"},"Bundle_de.properties")," for German. Note the added\nsuffix ","_","de.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Translate all strings (text on the right side of the equal sign) in\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"Bundle_de.properties")," to German."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"greeting=Hallo Welt!\nscore.display=Spielstand:\n")),Object(o.b)("p",{parentName:"li"},"::: {.important}\nDo not modify any of the keys (text to the left of the equal sign)!\n:::")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To test the German localization, start the application from the\ncommand line with ",Object(o.b)("inlineCode",{parentName:"p"},"-Duser.language=de"),". Note the parameter ",Object(o.b)("inlineCode",{parentName:"p"},"de"),"."),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"In the jMonkeyEngine SDK, you set this VM Option in the Project\nproperties under Run. Here you can also save individual run\nconfiguraions for each language you want to test."))))),Object(o.b)("p",null,"To get the full list of language suffixes use"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"System.out.println(Arrays.toString(Locale.getISOLanguages()));\n")),Object(o.b)("h1",{id:"which-strings-not-to-translate"},"Which Strings Not to Translate"),Object(o.b)("p",null,"::: {.important}\nIn the Bundle.properties file, do not include any strings that are asset\npaths, node or geometry names, input mappings, or material layers.\n:::"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Keep material layers:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'mat.setTexture("ColorMap", tex);\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Keep paths:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'teapot = assetManager.loadModel("Models/Teapot/Teapot.obj");\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Keep geometry and node names:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'Geometry thing=new Geometry("A thing", mesh);\nNode vehicle = new Node("Vehicle");\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Keep mappings:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'inputManager.addMapping("Shoot", trigger);\ninputManager.addListener(actionListener, "Shoot");\n')))),Object(o.b)("p",null,"Only localize messages and UI text!"),Object(o.b)("h1",{id:"common-localization-problems"},"Common Localization Problems"),Object(o.b)("p",null,"Typical problems include:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Localized strings will be of vastly different lengths and will\ntotally break your UI layout. \u21d2 Test every localization.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Strings with variable text or numbers don't work the same in\ndifferent languages. \u21d2 Either work in grammatical\ncases/numbers/gender for each language, or use\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.gnu.org/software/gettext/manual/gettext.html#Plural-forms"}),"gettext"),"\nor ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://userguide.icu-project.org/formatparse/messages"}),"ICU4J"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'The localizer only sees the strings, without any context. E.g. does\n"Search History mean "display the history of searches, or "search\nthrough the history? \u21d2 Use clear key labels. Work closely with the\nlocalizers if they require extra info, and add that info as comments\nto the translation file.')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Broken international characters \u21d2 Make sure the files are saved with\nthe same character encoding as the font file(s) you're using.\nNowadays, that usually means UTF-8 since font files tend to come for\nUnicode.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Missing international characters \u21d2 Make sure that there's a glyph\nfor every needed character in your font, either by using more\ncomplete font files or by having the translation changed."))),Object(o.b)("h1",{id:"more-documentation"},"More Documentation"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://java.sun.com/developer/technicalArticles/Intl/ResourceBundles/"}),"http://java.sun.com/developer/technicalArticles/Intl/ResourceBundles/")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://sourceforge.net/apps/mediawiki/nifty-gui/index.php?title=Localisation"}),"http://sourceforge.net/apps/mediawiki/nifty-gui/index.php?title=Localisation")))}p.isMDXComponent=!0},441:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||o;return a?r.a.createElement(d,l({ref:t},s,{components:a})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);
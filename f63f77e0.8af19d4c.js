(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{426:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(1),u=t(9),o=(t(0),t(441)),a={},i={id:"jme3/contributions/tonegodgui/menu",title:"menu",description:"Menu Class",source:"@site/docs/jme3/contributions/tonegodgui/menu.md",permalink:"/wikidemo/docs/jme3/contributions/tonegodgui/menu",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/contributions/tonegodgui/menu.md"},l=[{value:"Abstract Event Methods:",id:"abstract-event-methods",children:[]},{value:"Methods specific to the Menu Class:",id:"methods-specific-to-the-menu-class",children:[]},{value:"Hooks",id:"hooks",children:[]}],c={rightToc:l};function s(e){var n=e.components,t=Object(u.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"menu-class"},"Menu Class"),Object(o.b)("p",null,"The Menu class extends ScrollArea as Menu's can be resizable and\nscrollable if the behaviors are enabled."),Object(o.b)("p",null,"Menus contain a list of MenuItems, which provide mapping for sub-menus.\nThis implementation of menu's negates the need for any form of Menu\nManager as the Screen, by default, handles delegating Mouse Events and\ntherefore is (in a sense) a Menu Manager. Menus utilize a single text\nelement with separate highlight element, to keep the rendered meshes to\ncount of 3 for any length menu."),Object(o.b)("p",null,"Features:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Unlimited menu item list")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Unlimited sub-menu mapping")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"MenuItem toggle states (semi-work-in-progress here)"))),Object(o.b)("p",null,"Menu utilizes the standard 3 constructors as shown in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../../jme3/contributions/tonegodgui/quickstart"}),"Quick Start\nGuide")," with the\naddition of a single boolean:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"isScrollable -- appended to the end of the parameter list in each\nconstructor")),Object(o.b)("h2",{id:"abstract-event-methods"},"Abstract Event Methods:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public void onMenuItemClicked(int index, Object value);\n")),Object(o.b)("h2",{id:"methods-specific-to-the-menu-class"},"Methods specific to the Menu Class:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Menu manipulation\nmenu.addMenuItem(String caption, Object value, Menu subMenu); // null if no sub-menu\nmenu.addMenuItem(String caption, Object value, Menu subMenu, boolean isToggleItem);\nmenu.addMenuItem(String caption, Object value, Menu subMenu, boolean isToggleItem, boolean isToggled);\nmenu.insertMenuItem(int index, String caption, Object value, Menu subMenu); // null if no sub-menu\nmenu.insertMenuItem(int index, String caption, Object value, Menu subMenu, boolean isToggleItem)\nmenu.insertMenuItem(int index, String caption, Object value, Menu subMenu, boolean isToggleItem, boolean isToggled)\nmenu.removeMenuItem(int index);\nmenu.removeMenuItem(String caption);\nmenu.removeMenuItem(Object value);\nmenu.removeFirstMenuItem();\nmenu.removeLastMenuItem();\n\n// Configuration related methods\nmenu.setMenuOverhang(float menuOverhang);\nmenu.getMenuOverhang();\nmenu.getMenuItemHeight();\nmenu.getMenuPadding();\nmenu.setPreferredSize(Vector2f preferredSize)\n\n//Menu item related methods\nmenu.getMenuItems(); // point to menu item list\nmenu.getMenuItem(int index);\n\n// Hide/show methods\nmenu.showMenu(Menu caller, float x, float y); // Caller is null if not show by another menu\nmenu.hideMenu();\n\n// Setting & retrieving an external caller element\nmenu.setCallerElement(Element el);\nmenu.getCallerElement();\n")),Object(o.b)("h2",{id:"hooks"},"Hooks"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public void controlHideHook() {  }\n")),Object(o.b)("h1",{id:"menu-examples"},"Menu Examples:"),Object(o.b)("p",null,"Cut & Paste the code below into the simpleInitApp() method of a new JME\nproject to try it out."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'flyCam.setDragToRotate(true);\ninputManager.setCursorVisible(true);\n\nscreen = new Screen(this);\nguiNode.addControl(screen);\n\nMenu subMenu = new Menu(\n    screen,\n    new Vector2f(0,0),\n    false\n) {\n    @Override\n    public void onMenuItemClicked(int index, Object value, boolean isToggled) {  }\n};\n// Add a menu item\nsubMenu.addMenuItem("Some string caption 1", null, null);\n// Add a toggle-able menu item (checkbox)\nsubMenu.addMenuItem("Some string caption 2", null, null, true);\n// Add a toggle-able menu item and set the default state of the checkbox to checked\nsubMenu.addMenuItem("Some string caption 3", null, null, true, true);\nscreen.addElement(subMenu);\n\nfinal Menu menu = new Menu(\n    screen,\n    new Vector2f(0,0),\n    false\n) {\n    @Override\n    public void onMenuItemClicked(int index, Object value, boolean isToggled) {  }\n};\n// Add subMenu as a sub-menu to this menu item\nmenu.addMenuItem("Some caption", null, subMenu);\nscreen.addElement(menu);\n\nButtonAdapter b = new ButtonAdapter(screen, new Vector2f(50,50)) {\n    @Override\n    public void onButtonMouseLeftUp(MouseButtonEvent evt, boolean isToggled) {\n        menu.showMenu(null, getAbsoluteX(), getAbsoluteY()-menu.getHeight());\n    }\n};\nb.setText("Show Menu");\nscreen.addElement(b);\n')))}s.isMDXComponent=!0},441:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return p}));var r=t(0),u=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,u=function(e,n){if(null==e)return{};var t,r,u={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(u[t]=e[t]);return u}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var c=u.a.createContext({}),s=function(e){var n=u.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},m=function(e){var n=s(e.components);return u.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return u.a.createElement(u.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,p=m["".concat(a,".").concat(d)]||m[d]||b[d]||o;return t?u.a.createElement(p,i({ref:n},c,{components:t})):u.a.createElement(p,i({ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<o;c++)a[c]=t[c];return u.a.createElement.apply(null,a)}return u.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
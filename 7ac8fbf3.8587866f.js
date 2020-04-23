(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{286:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(1),o=n(9),r=(n(0),n(441)),m={},i={id:"jme3/contributions/tonegodgui/xmllayouts",title:"xmllayouts",description:"Using XML to Define Layouts",source:"@site/docs/jme3/contributions/tonegodgui/xmllayouts.md",permalink:"/wikidemo/docs/jme3/contributions/tonegodgui/xmllayouts",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/contributions/tonegodgui/xmllayouts.md"},p=[{value:"A Look at the XML Layout",id:"a-look-at-the-xml-layout",children:[]}],d={rightToc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"using-xml-to-define-layouts"},"Using XML to Define Layouts"),Object(r.b)("p",null,"XML Screens leverage the AbstractAppState class for managing your\ngrouped UI components."),Object(r.b)("p",null,"AppState example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class XMLScreenSample extends AbstractAppState {\n    Screen screen;\n    Window inventory;\n\n    public XMLScreenSample(Screen screen) {\n        // Store a pointer to the screen\n        this.screen = screen;\n        // Call the xml parser to load your new components\n        screen.parseLayout("Interface/Inventory.xml", this);\n\n        // Here we can grab pointers to the loaded elements\n        inventory = (Window)screen.getElementById("InventoryWindowID");\n        // We\'ll hide the window initially so we can use an\n        // effect to show it from the initialize method\n        inventory.hide();\n        // grab more pointers to other elements / child elements\n    }\n\n    @Override\n    public void initialize(AppStateManager stateManager, Application app) {\n        super.initialize(stateManager, app);\n\n        // Useful place for running load effects\n        inventory.showWithEffect();\n    }\n\n    @Override\n    public void update(float tpf) {\n        //TODO: implement behavior during runtime\n    }\n\n    @Override\n    public void cleanup() {\n        super.cleanup();\n\n        // We can alter the effect to destroy our inventory window\n        // when we unload the AppState\n        Effect hide = new Effect(Effect.EffectType.FadeOut, Effect.EffectEvent.Hide, 0.25f);\n        hide.setDestroyOnHide(true);\n\n        if (inventory.getIsVisible()) {\n            inventory.setEffect(hide);\n            inventory.hideWithEffect();\n        } else {\n            screen.removeElement(inventory);\n        }\n\n        // Now our UI component scene fades out when the AppState in unloaded.\n    }\n}\n')),Object(r.b)("h2",{id:"a-look-at-the-xml-layout"},"A Look at the XML Layout"),Object(r.b)("p",null,"Below is a rather large XML layout with a bunch of different components,\nmethod calls, event methods, etc. It is relative nonsense and just there\nto show the basic structure."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-{.xml}"}),'<root>\n    <screen>\n        <component type="Window" id="InventoryWindowID" position="15%,15%" dimensions="70%,70%">\n            <method name="setWindowTitle" param0="Inventory" />\n            <component type="Label" position="10,40" dimensions="20%,20" >\n                <method name="setText" param0="First Name:" />\n                <method name="setTextAlign" param0="Right" />\n                <method name="setTextVAlign" param0="Center" />\n            </component>\n            <component type="Label" position="10,65" dimensions="20%,20" >\n                <method name="setText" param0="Last Name:" />\n                <method name="setTextAlign" param0="Right" />\n                <method name="setTextVAlign" param0="Center" />\n            </component>\n            <component type="Label" position="10,90" dimensions="20%,20" >\n                <method name="setText" param0="Address:" />\n                <method name="setTextAlign" param0="Right" />\n                <method name="setTextVAlign" param0="Center" />\n            </component>\n            <component type="Label" position="10,140" dimensions="20%,20" >\n            <method name="setText" param0="City:" />\n                <method name="setTextAlign" param0="Right" />\n                <method name="setTextVAlign" param0="Center" />\n            </component>\n            <component type="Label" position="10,165" dimensions="20%,20" >\n                <method name="setText" param0="State:" />\n                <method name="setTextAlign" param0="Right" />\n                <method name="setTextVAlign" param0="Center" />\n            </component>\n            <component type="Label" position="10,190" dimensions="20%,20" >\n                <method name="setText" param0="Postal Code:" />\n                <method name="setTextAlign" param0="Right" />\n                <method name="setTextVAlign" param0="Center" />\n            </component>\n            <component type="TextField" id="FirstName" position="25%,40" >\n                <method name="setType" param0="EXCLUDE_CUSTOM" />\n                <method name="setCustomValidation" param0="!@#$%^*()" />\n            </component>\n            <component type="TextField" id="LastName" position="25%,65" />\n            <component type="TextField" id="Address1" position="25%,90" />\n            <component type="TextField" id="Address2" position="25%,115" />\n            <component type="TextField" id="City" position="25%,140" />\n            <component type="Indicator" id="Indicator1" position="25%,225" orientation="HORIZONTAL" >\n                <method name="setAlphaMap" param0="tonegod/gui/style/def/Common/Extras/indicator_am_x.png" />\n                <method name="setIndicatorColor" param0="0,0.65f,0,1" />\n                <method name="setMaxValue" param0="100" />\n                <method name="setCurrentValue" param0="50" />\n                <method name="setDisplayValues" />\n            </component>\n            <component type="ComboBox" id="State" position="25%,165" >\n                <method name="addListItem" param0="Alaska" param1="Alaska" />\n                <method name="addListItem" param0="Alabama" param1="Alabama" />\n                <method name="addListItem" param0="Arkansas" param1="Arkansas" />\n                <method name="addListItem" param0="Connecticut" param1="Connecticut" />\n                <method name="addListItem" param0="Deleware" param1="Deleware" />\n                <method name="addListItem" param0="Dakota, North" param1="North Dakota" />\n                <method name="addListItem" param0="Dakota, South" param1="South Dakota" />\n                <method name="addListItem" param0="Georgia" param1="Georgia" />\n                <method name="addListItem" param0="Kentucky" param1="Kentucky" />\n                <method name="addListItem" param0="Maine" param1="Maine" />\n                <method name="addListItem" param0="New Jersey" param1="New Jersey" />\n                <method name="addListItem" param0="New York" param1="New York" />\n                <method name="addListItem" param0="Nevada" param1="Nevada" />\n            </component>\n            <component type="TextField" id="PostalCode" position="25%,190" >\n                <method name="setType" param0="INCLUDE_CUSTOM" />\n                <method name="setCustomValidation" param0="1234567890-" />\n                <method name="setMaxLength" param0="10" />\n            </component>\n            <component type="Button" id="SubmitButton" position="75%,87%" dimensions="23%,10%" >\n                <method name="setText" param0="Submit" />\n                <eventMethod name="onButtonMouseLeftUp" stateMethodName="invSubmitButtonClick" />\n            </component>\n        </component>\n        <component type="Menu" id="SubMenu1" position="0,0">\n            <method name="addMenuItem" param0="Menu Item 1" param1="1" param2="null" />\n            <method name="addMenuItem" param0="Menu Item 2" param1="2" param2="null" param3="true" />\n            <method name="addMenuItem" param0="Menu Item 3" param1="3" param2="null" param3="true" param4="true" />\n            <method name="addMenuItem" param0="Menu Item 4" param1="4" param2="null" param3="true" param4="true" />\n            <eventMethod name="onMenuItemClicked" stateMethodName="menu1click" />\n        </component>\n        <component type="Menu" id="Menu1" position="0,0">\n            <method name="addMenuItem" param0="Item 1" param1="1" param2="SubMenu1" />\n            <method name="addMenuItem" param0="Item 2" param1="2" param2="null" param3="true" />\n            <eventMethod name="onMenuItemClicked" stateMethodName="menu1click" />\n        </component>\n        <component type="AlertBox" id="Alert1" position="0,0">\n            <method name="setWindowTitle" param0="Hey you!" />\n            <method name="centerToParent" />\n            <eventMethod name="onButtonOkPressed" stateMethodName="alertOkClick" />\n            <effect type="SlideIn" event="Show" duration=".25f" direction="Left" audioFile="fade" volume="1" />\n            <effect type="SlideOut" event="Hide" duration=".25f" direction="Left" audioFile="fade" />\n        </component>\n    </screen>\n</root>\n')),Object(r.b)("p",null,"In the above example, you'll see that many components have defined an\neventMethod tag. The eventMethod tag defines the AppState method that\nwill be used as a passthrough from the defined control event method.\nThere is no need to define parameters for these methods, as they simply\nforward the event methods parameters directly to the defined app state\nmethod. Like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-{.xml}"}),'<eventMethod name="onButtonMouseLeftUp" stateMethodName="invSubmitButtonClick" />\n')),Object(r.b)("p",null,"Now we'll need to add the invSubmitButtonClick method to the\nAbstractAppState that called the parseLayout method, like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public void invSubmitButtonClick(MouseButtonEvent evt, boolean isToggled) {\n    // We\'ll show the AlertBox we defined in the layout when this button is clicked\n    ((AlertBox)screen.getElementById("Alert1")).showWithEffect();\n}\n')),Object(r.b)("p",null,"The quickest way of getting the definition of the event method you are\ncreating, is to create a new instance of the class the event is being\npassed from, implementing it's abstract methods & cutt/paste the needed\nmethod. Then you simply rename it."))}s.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),s=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},c=function(e){var t=s(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,h=c["".concat(m,".").concat(u)]||c[u]||l[u]||r;return n?o.a.createElement(h,i({ref:t},d,{components:n})):o.a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,m=new Array(r);m[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,m[1]=i;for(var d=2;d<r;d++)m[d]=n[d];return o.a.createElement.apply(null,m)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
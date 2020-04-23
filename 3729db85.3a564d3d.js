(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{208:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(9),i=(n(0),n(441)),r={},s={id:"jme3/contributions/entitysystem/beginner",title:"beginner",description:"In this article we explain the first steps how to work with Zay-ES and",source:"@site/docs/jme3/contributions/entitysystem/beginner.md",permalink:"/wikidemo/docs/jme3/contributions/entitysystem/beginner",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/contributions/entitysystem/beginner.md"},c=[{value:"Description of the sample",id:"description-of-the-sample",children:[]},{value:"Entity Sets",id:"entity-sets",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this article we explain the first steps how to work with Zay-ES and\nwhat you should know about the background."),Object(i.b)("p",null,"If you are new Entity Systems please read the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../../jme3/contributions/entitysystem/introduction"}),"Entity System\nIntroduction"),"\nfirst."),Object(i.b)("h1",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'import com.simsilica.es.Entity;\nimport com.simsilica.es.EntityData;\nimport com.simsilica.es.EntityId;\nimport com.simsilica.es.base.DefaultEntityData;\n\npublic class Main {\n\n    public static void main(String[] args) {\n\n        //Creating the EntityData\n        EntityData entityData = new DefaultEntityData();\n\n        //Creates a new EntityId, the id is handled as an object to prevent botching\n        EntityId entityId = entityData.createEntity();\n        //A new TestComponent is added to the Entity\n        entityData.setComponent(entityId, new TestComponent("Hello World"));\n\n        //Get a new Entity Object with TestComponents\n        Entity entity = entityData.getEntity(entityId, TestComponent.class);\n        //Get the Component and display the value\n        TestComponent testComponent = entity.get(TestComponent.class);\n        System.out.println(testComponent.getValue());\n\n        //Overwrite the existing component\n        entity.set(new TestComponent("New Value"));\n        System.out.println(testComponent.getValue());\n\n        //Remove the Entity from the data\n        entityData.removeEntity(entity.getId());\n    }\n}\n')),Object(i.b)("h2",{id:"description-of-the-sample"},"Description of the sample"),Object(i.b)("h1",{id:"create-a-component-class"},"Create a Component Class"),Object(i.b)("p",null,"You simply create a component by implementing the EntityComponent\ninterface:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public class TestComponent implements EntityComponent {\n\n    private String value;\n\n    public TestComponent(String value)\n    {\n        this.value=value;\n    }\n\n    public String getValue()\n    {\n        return value;\n    }\n}\n")),Object(i.b)("p",null,"But there are some rules you must consider: Components only have a\nconstructor and getter. It is important that you only store pure data in\nthe components because otherwise you would no longer know where you can\nfind the logic and the approach of a clear software design would get\nlost. Besides an entity can only have one component of the same class."),Object(i.b)("p",null,"::: {.important}\nBeginners tend to add large objects like spatials and geometries to a\ncomponent. This is a big mistake because such objects contain logic and\nin our approach components are data only. Abstract it to a general level\nor store it completely in the systems.\n:::"),Object(i.b)("p",null,"::: {.important}\nNever subclass Component classes.\n:::"),Object(i.b)("h1",{id:"initialize-the-entity-system"},"Initialize the Entity System"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"})," EntityData entityData = new DefaultEntityData();\n")),Object(i.b)("p",null,"The EntityData is the main class of the entity system. All the data are\nstored here."),Object(i.b)("p",null,"How the entityData works:"),Object(i.b)("p",null,"For every component class a new Hashmap is created which contains the\nentityId as a key and the component as a value. Therefore, if you need\nto know all entities which own a component of a certain type, the system\nwill search in these Hashmaps for the required entityIds."),Object(i.b)("h1",{id:"creating-entitys-and-adding-components"},"Creating Entitys and adding Components"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'//Creates a new EntityId, the id is handled as an object to prevent botching\nEntityId entityId = entityData.createEntity();\n//A new TestComponent is added to the Entity\nentityData.setComponent(entityId, new TestComponent("Hello World"));\n')),Object(i.b)("p",null,"EntityIds are a objects which contain a long value. Zay-ES uses this\nobjects to prevent users from writing dirty code."),Object(i.b)("p",null,"Every entity has a unique id which is a long. Ids are not reused\nbecause, if they were, they would not be unique anymore, which would\ncause a huge penalty."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Often people are scared that they will run out of ids: If you create a\nnew entity every nano second, you would need roughly 585 years before it\nwraps."))),Object(i.b)("h1",{id:"the-entity-class"},"The Entity Class"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"//Get a new Entity Object with TestComponents\nEntity entity = entityData.getEntity(entityId, TestComponent.class);\n//Get the Component and display the value\nTestComponent testComponent = entity.get(TestComponent.class);\nSystem.out.println(testComponent.getValue());\n")),Object(i.b)("p",null,"If you want to work with entities, the EntityData is able to create\nEntity objects. This objects contains all the Components of the classes\nyou are interested in. In this example it is only the\nTestComponent.class. You can have multiple Entity objects for the same\nentity."),Object(i.b)("p",null,"::: {.important}\nThe data of this Entity objects will not be updated if other classes\nchange the components for this entity\n:::"),Object(i.b)("h1",{id:"replacing-a-component"},"Replacing a component"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'//Overwrite the existing component\nentity.set(new TestComponent("New Value"));\nSystem.out.println(testComponent.getValue());\n')),Object(i.b)("h1",{id:"delete-an-entity"},"Delete an entity"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"//Remove the Entity from the data\nentityData.removeEntity(entity.getId());\n")),Object(i.b)("h2",{id:"entity-sets"},"Entity Sets"),Object(i.b)("p",null,"The most important feature of Zay-ES are the Entity Sets. It is strongly\nrecommended that you read the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../../jme3/contributions/entitysystem/entityset"}),"Entity Set\ntutorial")," after\nreading this article."),Object(i.b)("p",null,"::: {.important}\nRead the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../../jme3/contributions/entitysystem/entityset"}),"tutorial")," about\nentity sets\n:::"))}p.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},m=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),y=a,u=m["".concat(r,".").concat(y)]||m[y]||b[y]||i;return n?o.a.createElement(u,s({ref:t},l,{components:n})):o.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var o=n(1),r=n(9),a=(n(0),n(441)),i={},l={id:"sdk/version_control",title:"version_control",description:"Whether you work in a development team or alone: File versioning is a",source:"@site/docs/sdk/version_control.md",permalink:"/wikidemo/docs/sdk/version_control",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/sdk/version_control.md"},c=[],s={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Whether you work in a development team or alone: File versioning is a\nhandy method to keep your code consistent, compare files line-by-line,\nand even roll back unwanted changes. This documentation shows you how to\nmake the most of the SDK's integrated version control features for\nSubversion, Mercurial, and Git."),Object(a.b)("p",null,"For every team member, the file versioning workflow is as follows:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Once: Download a working copy of the project from the repository\n("checkout).')),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Regularly: Upload your own changes to the repository ("commit).')),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Regularly: Download updates by others from the repository ("update).'))),Object(a.b)("p",null,'Note: Since the jMonkeyEngine SDK is based on the NetBeans Platform\nframework, you can learn about certain jMonkeyEngine SDK features by\nreading the corresponding NetBeans IDE tutorials (in the "see also\nlinks).'),Object(a.b)("h1",{id:"version-control-systems"},"Version Control Systems"),Object(a.b)("p",null,"The jMonkeyEngine SDK supports various Version Control Systems such as\nSubversion, Mercurial, and Git. No matter which of them you use, they\nall share a common user interface."),Object(a.b)("p",null,"You can use file versioning alone or in a team. The advantages are that\nyou can keep track of changes (who did it, when, and why), you can\ncompare versions line-by-line, you can revert changes to files and\nlines, merge multiple changes to one file, and you can even undelete\nfiles."),Object(a.b)("h1",{id:"creating-a-repository-upload"},"Creating a Repository (Upload)"),Object(a.b)("p",null,"Requirements:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"You must have a project that you want to version.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"You must have version control software installed (Subversion,\nMercurial, or Git) and have initialized a repository."),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Tip: For Subversion, for example, the init command looks like\nthis example: ",Object(a.b)("inlineCode",{parentName:"li"},"svnadmin create /home/joe/jMonkeyProjects/MyGame")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The computer where the repository is to be hosted must be available\nin your team's network, or you will only be able to use your repo\nlocally."),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Tip: Hosts such as SourceForge, GoogleCode, dev.java.net offer\nfree version control services for open-source projects.")))),Object(a.b)("p",null,"Now you create a repository to store your project's files."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In the jMonkeyEngine SDK, right-click the project in the Projects\nwindow and choose Versioning ",">"," Import Into Subversion Repository\n(or initialize Mercurial Project, etc, respectively)."),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Tip: If you haven't evaluated yet which system to choose, start\nwith Subversion for now."))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Go through the wizard and fill in the fields to set up the\nrepository."))),Object(a.b)("h1",{id:"checking-out-a-repository-download"},"Checking Out a Repository (Download)"),Object(a.b)("p",null,"You and your team mates check out (download) the repository to their\nindividual workstations."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Go to the Team menu and choose Subversion ",">"," Checkout (or Git or\nMercurial respectively)")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Fill in your repo data into the wizard and click Finish."),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"A typical repository URL looks like this example:\n",Object(a.b)("inlineCode",{parentName:"p"},"http://jmonkeyengine.googlecode.com/svn/trunk/engine"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"If you want to be able to submit changes, you must have a\nusername and password to this repository. Otherwise leave these\nfields blank.")))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"The repository is downloaded and stored in the location you chose.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Use the File ",">"," Open Project menu to open the checkout as project\nand start working."),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"If the checkout is not recognized you need to choose File ",">"," New\nProject from Existing Sources")))),Object(a.b)("p",null,"Of course you can also check out existing repositories and access code\nfrom other open-source projects (e.g. SourceForge, GoogleCode,\ndev.java.net)."),Object(a.b)("h1",{id:"updating-and-committing-changes-send-and-receive"},"Updating and Committing Changes (Send and Receive)"),Object(a.b)("p",null,"Receiving the latest changes from the team's repository is referred to\nas ",Object(a.b)("inlineCode",{parentName:"p"},"updating"),". Sending your changes to the team's repository is refered\nto as ",Object(a.b)("inlineCode",{parentName:"p"},"commiting"),"."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Before making changes, right-click the project and select\nSubversion ",">"," Update to make sure you have the latest revision."),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Get in the habit of updating regularly, always before you edit a\nversion controlled file. It will spare you much grief."))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"After making changes to the project, make certain your change did\nnot break anything."),Object(a.b)("p",{parentName:"li"},"a.  Update, build, run, test."),Object(a.b)("p",{parentName:"li"},"b.  Look at the red/green/blue marks in the editor to review what\nyou have deleted/added/changed. Click the marks to review all\ndifferences in a file."),Object(a.b)("p",{parentName:"li"},"c.  Choose Subversion ",">"," Show Changes to see all files that were\nrecently changed -- by you and other team members."),Object(a.b)("p",{parentName:"li"},"d.  ",Object(a.b)("em",{parentName:"p"},"Update again")," in case your team mates made changes while you\nwere reviewing.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"If there are no conflicts and you want to commit your changes,\nchoose Subversion ",">"," Commit from the menu.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Write a commit message describing what you changed."),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},'Remember, you are writing "a message to your future self. Never\nwrite redundant stuff like "I changed something.')))),Object(a.b)("h1",{id:"comparing-and-reverting-changes"},"Comparing and Reverting Changes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"If you and another committer edited the same line, there is a\nconflict, and the jMonkeyEngine SDK will show an error message."),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Right-click a file Choose Subversion ",">"," Resolve Conflict"),Object(a.b)("p",{parentName:"li"},"i.  Compare the conflicting versions. Press the buttons to\naccept or reject each change individually."),Object(a.b)("p",{parentName:"li"},"ii. After the resolver shows green, save the resolution."),Object(a.b)("p",{parentName:"li"},"iii. Build and test the resolution, update, and commit.")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Right-click a file and choose Subversion ",">"," Search History."),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"You can inspect a file's history and see who changed what, why,\nand when.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"You can roll back a file to a historic version if necessary.")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"In general, you can choose Subversion ",">"," Diff for any file to see\ntwo versions of a file next to each other."))),Object(a.b)("h1",{id:"no-version-control-local-history"},"No Version Control? Local History!"),Object(a.b)("p",null,"If you do not use any version control, you can still track changes in\nprojects to a certain degree."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Right-click a file or directory and choose Local History to show or\nrevert changes, or undelete files.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"You can also select any two files in the Project window and choose\nTools ",">"," Diff to compare them.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Local History only works for files edited in jMonkeyEngine SDK\nProjects (It does not work for other files, e.g. in the Favorites\nwindow.)"))),Object(a.b)("p",null,"See also:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"http://netbeans.org/kb/docs/ide/subversion.html"}),"Source Code Management with\nSubversion"))))}b.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=o,h=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return n?r.a.createElement(h,l({ref:t},s,{components:n})):r.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
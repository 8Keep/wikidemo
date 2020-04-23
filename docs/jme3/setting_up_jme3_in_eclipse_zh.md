我们建议你使用jMonkeyEngine SDK来开发jMonkeyEngine3项目。

或者，你可以使用你喜好的IDE：本教程将介绍如何下载并安装最新版的jMonkeyEngine
3，并与Eclipse IDE集成。jMonkeyEngine 3与[NetBeans
IDE](../jme3/setting_up_netbeans_and_jme3)同样可以集成。

下载jME3
========

下载最新的jMonkeyEngine3稳定版JAR包。

1.  从 <http://updates.jmonkeyengine.org/stable/3.0/engine>
    下载最新的压缩包(不出意外应该是jME3\_2014-06-12.zip)。

2.  将其解压到你的工作目录(\$HOME)下，保存到\`jME3\_2014-xx-xx\`文件夹中，你将会看到下列文件及文件夹：

    -   `lib/` --
        编译好的jMonkeyEngine运行库。(重要！不要移动这个文件夹！)

    -   `opt/` --
        可选运行库，包含android、ios、jogl、gluegen、OpenAL、bullet等JAR包和DLL文件，用户自选使用。(可选)

    -   `javadoc/` -- jME3 API文档。(可选)

    -   `source/` -- jME3源代码。(可选)

    -   `TestChooser.exe` -- 运行这个程序，可以预览大量的DEMO。(可选)

![1\_jme3\_2014\_06\_12\_zip.png](../jme3/1_jme3_2014_06_12_zip.png)

新建游戏项目
============

-   在Eclipse的菜单中，选择 File \> New \> Java Project

-   项目名：HelloJME3

-   点击Finish

![2\_create\_hellojme3\_project.png](../jme3/2_create_hellojme3_project.png)

项目创建完毕，即可在Package视图中看到这个项目。

添加jME3依赖
============

你的项目依赖于jMonkeyEngine库文件，需要知道JME3的JAR包都在什么位置。

-   右键单击项目名，在弹出菜单中选择\`Build Path \> Configure Build
    Path..\`

![3\_configure\_build\_path.png](../jme3/3_configure_build_path.png)

-   打开项目配置窗口后，选择\`Java Build Path \> Libraries \> Add
    External JARs..\`

![4\_add\_external\_jars.png](../jme3/4_add_external_jars.png)

-   在"JAR selection对话框中，打开\`\$HOME/jME3\_2012-xx-xx\`文件夹

-   选中\`lib\`文件夹中所有的JAR文件，然后点击"Open

![5\_jar\_selection.png](../jme3/5_jar_selection.png)

现在所有必要的JAR包都已经添加到了项目的classpath，并显示在在Referenced
Libraries中。至于每个JAR文件的详细介绍，请查阅[jME3
JAR文件说明](../jme3/jme3_source_structure.xml#structure_of_jmonkeyengine3_jars)。

添加资源
========

在classpath中创建一个assets文件夹，确保jME3的资源管理器可以正确访问项目资源。

1.  打开项目配置(Project Properties)窗口

2.  选择Java Build Path

3.  在Source标签页下点击"Add folder

4.  添加Assets文件夹

![6\_new\_source\_folder.png](../jme3/6_new_source_folder.png)

编写一个简单的应用程序
======================

1.  在项目中新建一个package，例如"hello

2.  在hello包中新建一个类，命名为"MyGame，继承于\`com.jme3.app.SimpleApplication\`

![7\_create\_mygame.png](../jme3/7_create_mygame.png)

然后你可以接着开发[你的第一个jme3应用程序](../jme3/beginner/hello_simpleapplication_zh)了！

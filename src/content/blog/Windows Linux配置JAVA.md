---
title: "Windows 以及 Linux 配置JAVA环境"
description: "以下是在我的电脑上配置JDK 1.8的示例。" # Slightly rephrased description
pubDate: 2025 6 25 # 请确认此日期是否为期望的发布日期
image: /image/java.jpeg
categories:
  - tech
tags:
  - Java
  - jdk
  - Windows
  - Linux
  - Environment Configuration
badge: Pin
---

# 1. 下载 JDK 1.8

在开始配置之前，您需要下载 JDK 1.8。以下是一些下载选项：

-   官网下载地址 (可能需要 Oracle 账户登录):
    [**Java SE Development Kit 8 Downloads**](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)
-   华为镜像下载地址:
    [**华为云 JDK 镜像**](https://repo.huaweicloud.com/java/jdk/) (在此页面查找 `jdk-8uXXX-linux-x64.tar.gz` 或 `jdk-8uXXX-windows-x64.exe`)
-   我的网盘下载地址 (提供 JDK 8u202 版本):
    -   Windows (x64): [**jdk-8u202-windows-x64.exe**](https://pan.viken.top/d/A2-%E5%AE%9E%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7/Java-1.8/jdk-8u202-windows-x64.exe?sign=N6-c70MLcFjDQXG9AqvRfRjJtBMjb2XYNulBj47Tflo=:0)
    -   Linux (x64): [**jdk-8u202-linux-x64.tar.gz**](https://pan.viken.top/d/A2-%E5%AE%9E%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7/Java-1.8/jdk-8u202-linux-x64.tar.gz?sign=tYP8msKVfW2zLmD-gSGbnVJ5uW2Q7h3J7U69oSUW0uw=:0)

---

# 2. Windows 环境配置

## 2.1. 安装 JDK 1.8

1.  运行下载的 `.exe` 安装程序。
2.  选择安装目录：安装过程中会出现两次安装提示。第一次是安装 JDK，第二次是安装 JRE。
3.  **建议**：将 JDK 和 JRE 安装在同一个主文件夹 (如 `C:\Program Files\Java`) 下的不同子文件夹中。
    *   例如：
        *   JDK 安装路径: `C:\Program Files\Java\jdk1.8.0_202`
        *   JRE 安装路径: `C:\Program Files\Java\jre1.8.0_202`
    *   **注意**：避免将 JDK 和 JRE 直接安装到同一个目录下，这可能导致冲突。
4.  以下是示例安装路径截图：
    *   安装 JDK (示例路径 `C:\Program Files\Java\jdk`):
      ![JDK 安装路径选择](../../../public/image/Windows%20以及%20Linux%20配置JAVA环境/01.png)
    *   安装 JRE (示例路径 `C:\Program Files\Java\jre`):
      ![JRE 安装路径选择](../../../public/image/Windows%20以及%20Linux%20配置JAVA环境/02.png)
5.  安装完成后，点击关闭。

## 2.2. 配置环境变量

1.  打开环境变量设置：
    *   右键点击 “此电脑” (或 “我的电脑”) -> 选择 “属性”。
    *   点击 “高级系统设置”。
    *   在 “高级” 选项卡下，点击 “环境变量” 按钮。
2.  在 “系统变量” (推荐) 或 “用户变量” 中进行如下配置：

    *   **添加 `JAVA_HOME` 变量**：
        *   点击 “新建...”。
        *   变量名：`JAVA_HOME`
        *   变量值：`C:\Program Files\Java\jdk1.8.0_202` (替换为你的 JDK 安装路径)
          ![添加 JAVA_HOME](../../../public/image/Windows%20以及%20Linux%20配置JAVA环境/03.png)

    *   **添加 `CLASSPATH` 变量 (可选，但某些旧应用可能需要)**：
        *   点击 “新建...”。
        *   变量名：`CLASSPATH`
        *   变量值：`.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar`
          ![添加 CLASSPATH](../../../public/image/Windows%20以及%20Linux%20配置JAVA环境/04.png)

    *   **编辑 `Path` 变量**：
        *   在 “系统变量” 列表中找到 `Path` (或 `PATH`)，选中它，然后点击 “编辑...”。
        *   在弹出的对话框中，点击 “新建”，然后添加：`%JAVA_HOME%\bin`
        *   将此条目上移到列表较靠前的位置，以确保优先使用此 Java 版本。
          ![编辑 Path 变量](../../../public/image/Windows%20以及%20Linux%20配置JAVA环境/05.png)

3.  点击 “确定” 保存所有更改。

## 2.3. 测试 JDK 配置

1.  打开新的命令提示符 (CMD) 或 PowerShell 窗口。
2.  输入 `java -version` 命令，应显示 Java 版本信息：
    ```
    java version "1.8.0_202"
    Java(TM) SE Runtime Environment (build 1.8.0_202-b08)
    Java HotSpot(TM) 64-Bit Server VM (build 25.202-b08, mixed mode)
    ```
    ![java -version 测试](../../../public/image/Windows%20以及%20Linux%20配置JAVA环境/07.png)
3.  输入 `javac -version` 或 `javac` 命令
    ```
    javac 
    ```
    ![javac 命令](../../../public/image/Windows%20以及%20Linux%20配置JAVA环境/08.png)
4.  输入 `echo %JAVA_HOME%` 命令，应显示你配置的 JDK路径。
5. 配置成功!
---

# 3. Linux 环境配置 (以 .tar.gz 文件为例)

本教程以从网盘下载的 `jdk-8u202-linux-x64.tar.gz` 为例，适用于大多数 Linux 发行版 (如 Ubuntu, CentOS, Fedora 等)。

## 3.1. 上传并解压 JDK

1.  将下载的 `jdk-8u202-linux-x64.tar.gz` 文件上传到你的 Linux 服务器或虚拟机。
2.  选择一个安装目录。推荐的目录有 `/usr/lib/jvm` 或 `/opt`。这里我们使用 `/usr/lib/jvm`。
    ```bash
    sudo mkdir -p /usr/lib/jvm
    ```
3.  解压 JDK压缩包到该目录：
    ```bash
    # 假设文件在当前用户的主目录下 ~/downloads/
    sudo tar -zxvf ~/downloads/jdk-8u202-linux-x64.tar.gz -C /usr/lib/jvm
    ```
    解压后，你应该在 `/usr/lib/jvm` 目录下看到一个类似 `jdk1.8.0_202` 的文件夹。

4.  (可选但推荐) 创建一个更通用的符号链接或重命名文件夹，方便版本管理：
    ```bash
    # 重命名
    sudo mv /usr/lib/jvm/jdk1.8.0_202 /usr/lib/jvm/java-8-oracle
    # 或者创建符号链接 (如果保留原名)
    # sudo ln -s /usr/lib/jvm/jdk1.8.0_202 /usr/lib/jvm/java-8-oracle
    ```
    后续我们将使用 `/usr/lib/jvm/java-8-oracle` 作为 `JAVA_HOME`。

## 3.2. 配置环境变量

环境变量可以在多个地方配置：
*   `~/.bashrc` 或 `~/.zshrc`: 仅对当前用户生效，每次打开新的 shell 时加载。
*   `/etc/profile`: 对所有用户生效，用户登录时加载。
*   `/etc/environment`: 对所有用户生效，系统启动时加载，格式略有不同 (不是脚本)。
*   在 `/etc/profile.d/` 目录下创建 `.sh` 脚本 (如 `my-java.sh`): 对所有用户生效，推荐方式，便于管理。

这里我们以修改 `/etc/profile.d/my-java.sh` (推荐，系统级) 和 `~/.bashrc` (用户级) 为例。选择一种即可。

### **方法一：系统级配置 (推荐)**

1.  创建并编辑 `my-java.sh` 文件：
    ```bash
    sudo nano /etc/profile.d/my-java.sh
    ```
2.  在文件中添加以下内容 (将 `/usr/lib/jvm/java-8-oracle` 替换为你的实际 JDK 路径):
    ```sh
    export JAVA_HOME=/usr/lib/jvm/java-8-oracle
    export JRE_HOME=${JAVA_HOME}/jre  # JRE_HOME 可选，但有些应用会用到
    export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib # CLASSPATH 可选
    export PATH=${JAVA_HOME}/bin:${PATH}
    ```
3.  保存文件并退出 (Nano 中是 `Ctrl+X`, 然后 `Y`, 然后 `Enter`)。
4.  赋予脚本执行权限：
    ```bash
    sudo chmod +x /etc/profile.d/my-java.sh
    ```
5.  使配置立即生效 (当前会话) 或重新登录/重启系统：
    ```bash
    source /etc/profile.d/my-java.sh
    ```

### **方法二：用户级配置 (`~/.bashrc`)**

1.  编辑 `~/.bashrc` 文件：
    ```bash
    nano ~/.bashrc
    ```
2.  在文件末尾添加以下内容 (将 `/usr/lib/jvm/java-8-oracle` 替换为你的实际 JDK 路径):
    ```sh
    export JAVA_HOME=/usr/lib/jvm/java-8-oracle
    export JRE_HOME=${JAVA_HOME}/jre
    export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib
    export PATH=${JAVA_HOME}/bin:${PATH}
    ```
3.  保存文件并退出。
4.  使配置立即生效 (当前 shell 会话):
    ```bash
    source ~/.bashrc
    ```

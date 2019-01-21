---
title: centos安装docker
date: 2017-06-21 11:14:51
tags: docker
permalink: 5e9fb620725e9c4b79e7cfb04aa397ab
---
### 系统环境

 + centos 7.3

### docker简介
Docker是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口。

### 安装docker
centos 7.x版本才支持docker，低于centos 7的版本不正常docker，所以要使用centos 7版本。

另外centos官方yum仓库的docker太老，推荐使用docker-ce仓库。即docker的社区版。

配置yum仓库。
```
[dockerrepo]
name=Docker Repository
baseurl=https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/centos/7/x86_64/stable/
enabled=1
gpgcheck=1
gpgkey=https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/centos/gpg
```
缓存索引
```
# yum mackecache
```
最后安装docker
```
# yum install docker-ce
```

启动docker
```
# systemctl start docker
```
输入命令，查看docker版本

```
$ docker version
Client:
 Version:           18.06.1-ce
 API version:       1.38
 Go version:        go1.10.3
 Git commit:        e68fc7a
 Built:             Tue Aug 21 17:23:03 2018
 OS/Arch:           linux/amd64
 Experimental:      false

Server:
 Engine:
  Version:          18.06.1-ce
  API version:      1.38 (minimum version 1.12)
  Go version:       go1.10.3
  Git commit:       e68fc7a
  Built:            Tue Aug 21 17:25:29 2018
  OS/Arch:          linux/amd64
  Experimental:     false
```
### 最后工作

把新用户添加进docker组
```
# usermod -aG docker hy
```

### docekr加速

因为某些原因，在国内直接调用docker官方源，下载速度很慢。不过可以使用国内的docker加速器。

注册阿里云，可以在阿里云的容器镜像服务，使用镜像加速器。

新建或者修改`/etc/docker/daemon.json`文件，

```
{"registry-mirrors": ["https://******.mirror.aliyuncs.com"]}
```
### 输出hello world

启动docker成功，就用docker输出hello world吧！
```
$docker run hello-world
```

![输出hello world](https://img.hysg.top/img/2018/10/08/01af868c.jpg)

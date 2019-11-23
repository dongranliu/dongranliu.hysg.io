---
title: 安装docker
date: 2019-11-24 02:00
sidebar: 'auto'
categories:
 - linux
tags:
 - docker
publish: true
---

## docker简介

Docker是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口。

## docker安装

**以下命令需要使用root用户执行**

+ centos

entos 7.x版本才支持docker，低于centos 7的版本不正常docker，所以要使用centos 7版本。

另外centos官方yum仓库的docker太老，推荐使用docker-ce的yum仓库。

配置yum仓库。

```bash
[dockerrepo]
name=Docker Repository
baseurl=https://mirrors.tuna.tsinghua.edu.cn/docker/yum/repo/centos7
enabled=1
gpgcheck=1
gpgkey=https://mirrors.tuna.tsinghua.edu.cn/docker/yum/gpg
```

缓存索引

```bash
yum mackecache
```

最后安装docker

```bash
yum install docker-ce
```

这样docker就安装成功了

+ deepin

写这篇文章的时候，deepin的版本是15.11

首先安装依赖

```bash
apt install install apt-transport-https ca-certificates curl gnupg2 software-properties-common
```

信任 Docker 的 GPG 公钥:

```bash
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
```

添加软件仓库

```bash
add-apt-repository \
  "deb [arch=amd64] https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/debian \
  stretch \
  stable"
```

最后安装docker

```bash
apt update
apt install docker-ce
```

这样docker就安装成功了

## 添加自己到docker用户组

如果你不是 root 组的用户，你可以把自己加入到 docker 用户组。下面的命令可以让没有 root 权限的用户使用 Docker：

```bash
$ sudo usermod -a -G docker $USER
```

执行完命令，需要重启终端

## 配置docekr加速器

有时候拉取镜像速度太慢，可以配置docker镜像加速器

创建或修改`/etc/docker/daemon.json`：

```bash
mkdir -p /etc/docker
tee /etc/docker/daemon.json <<-'EOF'
{
    "registry-mirrors": [
        "https://registry.docker-cn.com"
    ]
}
EOF
```

重启docker服务

```
systemctl restart docker
```

也可以注册一个阿里云账号，使用阿里云的镜像加速器


## 输出HelloWorld

使用命令`docker run hello-world`，输出一个HelloWorld

![docker hello-world](https://img.array.fun/img/2019/11/24/cfb755cec866857.webp)

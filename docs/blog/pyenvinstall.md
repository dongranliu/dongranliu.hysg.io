---
title: 安装pyenv
date: 2019-12-16
sidebar: 'auto'
categories:
 - linux
tags:
 - python
publish: true
---

## pyenv简介

pyenv使您可以轻松地在多个版本的Python之间切换。 它简单，简单，遵循UNIX的一站式工具传统，可以很好地完成一件事。

该项目是从rbenv和ruby-build派生的，并针对Python进行了修改。

## 解决依赖

+ redhat/centos系统

```bash
yum groupinstall Development Tools -y
yum install gcc zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel tk-devel libffi-devel git
```

+ ubuntu/debian系统

```bash
apt install make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev git
```

## 安装pyenv

pyenv可以使用普通用户就能安装，下面步骤都是普通用户

执行安装脚本

```bash
curl https://pyenv.run | bash
```

添加到环境变量`.bashrc`

```bash
PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
```

让环境变量生效

```
source ~/.bashrc
```

这样`pyenv`就安装成功了

## 用pyenv-virtualenv安装Anaconda3-5.2.0

Anaconda指的是一个开源的Python发行版本，其包含了conda、Python等180多个科学包及其依赖项。

为了加快安装速度，可以提前把Anaconda3-5.2.0-Linux-x86_64.sh下载到`~/,pyenv/cache`

```bash
mkdir ~/.pyenv/cache
cd ~/.pyenv/cache
wget https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/Anaconda3-5.2.0-Linux-x86_64.sh
```

开始安装anaconda3

```bash
pyenv install anaconda3-5.2.0
```

安装成功以后，激活pyenv-virtualenv环境

```bash
pyenv activate anaconda3-5.2.0
```

使用完毕，退出pyenv-virtualenv环境

```bash
pyenv deactivate
```

## 提高pip下载速度

+ 创建下面文件

```bash
touch ~/.pip/pip.conf
```

+ 在上述文件中添加:

```bash
[list]
format=columns

[global]
index-url = https://mirrors.aliyun.com/pypi/simple/

[install]
trusted-host=mirrors.aliyun.com
```

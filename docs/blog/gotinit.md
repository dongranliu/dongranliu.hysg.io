---
title: Go环境配置
date: 2019-11-24
sidebar: 'auto'
categories:
 - linux
tags:
 - Go
publish: true
---

## Go语言简介

Go富有表现力，简洁，整洁且高效。 它的并发机制使编写程序可以轻松地从多核和联网机器中获得最大收益，而其新颖的类型系统则可以实现灵活的模块化程序构建。 Go可以快速编译为机器代码，但具有垃圾回收的便利性和运行时反射的功能。 它是一种快速的，静态类型的编译语言，感觉就像是一种动态类型的解释语言。

## Go特点

+ 开发快

+ 运行快

+ 原生支持高并发

## Go版本

Go从1.13就开始支持go mod，不用设置GOAPTH。

## 配置Go环境

我的是deepin 15.11，属于Linux amd64系统。去[Golang官网](https://golang.org/dl/)下载对应的二进制包。

打开终端，输入命令，可以不用root用户

```bash
wget https://dl.google.com/go/go1.13.4.linux-amd64.tar.gz
```

解压压缩包

```bash
tar -xzf go1.13.4.linux-amd64.tar.gz
```

添加环境变量到`~/.bashrc`文件

```bash
PATH=$PATH:$HOME/go/bin
```

## 添加GOPROXY

为了提高Go包下载速度，可以使用GOPARXY

把下面配置添加到`~/.bashrc`

```bash
GOPROXY=https://goproxy.cn
```

## 查看Go配置

在终端输入命令，查看Go配置

```bash
go env
```
可以看下图

![go配置](https://img.array.fun/img/2019/11/24/1126a0d4e7cccdb.webp)

## Go mod命令

go 从1.13开始支持go mod命令，

|参数|含义|
|---|----|
|download|下载依赖包|
|init|初始化项目目录|
|tidy|整理项目包|

---
title: centos 安装 elasticsearch
date: 2018-12-23 20:32:35
tags: elasticsearch
permalink: 8859814820de51340
---

# 简介
Elasticsearch 是一个基于 Lucene 的搜索引擎。它提供了 REST API 交互方式。原生支持分布式，可以轻松扩展。

+ 安装 jdk

Elasticsearch 是用 JAVA 编写的。因此需要先配置 jdk。

这里是有 openjdk，

使用 yum 命令安装 openjdk

```
yum install java-1.8.0-openjdk java-1.8.0-openjdk-devel java-1.8.0-openjdk-headless -y
```
yum 安装成功以后，检查一下 jdk 版本

```
# java -version

openjdk version "1.8.0_191"

OpenJDK Runtime Environment (build 1.8.0_191-b12)
OpenJDK 64-Bit Server VM (build 25.191-b12, mixed mode)
```
这样，说明安装 jdk 成功了。

+ 安装 Elasticsearch

为了加快下载速度，推荐使用清华大学源下载。这是用的是Elasticsearch 6.4.0。
把安装包，下载到本地以后，使用 yum 命令安装 Elasticsearch

```
yum install elasticsearch-6.4.0.rpm -y
```

*后续配置

安装 Elasticsearch 以后，不能直接运行。因为 root 用户不能运行 Elasticsearch，需要普通用户才能运行。

编辑/etc/sudoers，找到
```
root    ALL=(ALL)       ALL
```
添加

```
$USER    ALL=(ALL)       ALL
```
然后再su User到普通用户。启动 Elasticsearch

```
systemctl start Elasticsearch
```

# hello world
最后来一个 hello world 吧！

```
curl http://127.0.0.1:9200/
```
返回

![elasticsearch-hello-world](https://tebak.oss-cn-hangzhou.aliyuncs.com/img/2018/10/18/9b8c4d8b.jpg)

---
title: docker安装mongodb
date: 2019-11-28
sidebar: 'auto'
categories:
 - linux
tags:
 - mongodb
publish: true
---
## mongodb介绍

MongoDB是一个文档数据库，它是为方便开发和扩展而设计的。

## mongodb特点

+ 支持丰富的json文档

+ 支持强大的查询语言

+ 支持ACID事务

+ 支持高可用，可以方便地扩展

## 借助docker使用mongodb

首先拉取镜像

```bash
docker pull mongodb
```

运行容器，把容器端口映射到宿主机上，并且把容器数据持久化到宿主机硬盘上

```bash
docker run --name mongodb -p27017:27017 -v /data/db:/data/db -d mongo
```

这样mongodb容器，就运行起来了，查看已经运行的容器

```bash
docker ps
```

![容器启动](https://img.array.fun/img/2019/12/14/xdh3shh6bf3ld8g.webp)

通过命令，也可以在宿主机上面看到端口已经监听了

![监听端口](https://img.array.fun/img/2019/12/14/duvd0pwo71b9x74.webp)


输入容器ID，进入容器内部，与mongodb数据库进行交互

```bash
docker exec -it $containerid bash
```

![进入docker容器内部](https://img.array.fun/img/2019/12/14/kk5iz5mkg29sqeo.webp)

如果容器无法启动，可以查看容器日志，获取更多帮助信息

```bash
docker logs $containerid
```

---
title: deepin安装rabbitmq
date: 2019-12-15
sidebar: 'auto'
categories:
 - linux
tags:
 - rabbitmq
publish: true
---

## rabbitmq简介

rabbitmq是一个开源的消息代理和队列服务器，用来通过普通协议在完全不同的应用之间共享数据，rabbitmq是使用Erlang语言来编写的，并且rabbitmq是基于AMQP协议的。

## deepin安装rabbitmq

安装rabbitmq，需要注意Erlang和rabbit之间版本对应关系。因为我是开发使用，所以就直接使用最新版的rabbitmq(3.8.0)。

+ 配置签名秘钥

```bash
curl -fsSL https://github.com/rabbitmq/signing-keys/releases/download/2.0/rabbitmq-release-signing-key.asc | sudo apt-key add -
```

得到“OK”,就说明配置成功了

+ 配置包管理器

创建空文件

```bash
sudo touch /etc/apt/sources.list.d/rabbitmq.list
```

配资镜像源

```bash
deb https://dl.bintray.com/rabbitmq-erlang/debian stretch erlang-22.x
deb https://dl.bintray.com/rabbitmq/debian stretch main
```

更新本地缓存

```bash
sudo apt update
```

安装rabbitmq服务

```bash
sudo apt install -y erlang-base \
                        erlang-asn1 erlang-crypto erlang-eldap erlang-ftp erlang-inets \
                        erlang-mnesia erlang-os-mon erlang-parsetools erlang-public-key \
                        erlang-runtime-tools erlang-snmp erlang-ssl \
                        erlang-syntax-tools erlang-tftp erlang-tools erlang-xmerl
```

## 启动rabbitmq服务

因为直接使用了apt包管理器安装的，所以rabbitmq自带启动脚本，

```bash
sudo systemctl start rabbitmq-server
```

查看端口是否监听

![查看端口是否监听](https://img.array.fun/img/2019/12/15/v068lvtpmj50fy2.webp)

*rabbitmq_management插件没有启动的之前，15672端口不会监听*

## 启动插件

为了能更直观地观察到rabbitmq参数，可以启用rabbitmq_management插件

```bash
sudo rabbitmq-plugins enable rabbitmq_management
```

插件启动成功以后，在浏览器输入127.0.0.1:15672，用户名和密码都是`guests`

就可以看到rabbitmq监控web界面

![rabbitmq监控画面](https://img.array.fun/img/2019/12/15/fx7otpz1qqfn7rc.webp)

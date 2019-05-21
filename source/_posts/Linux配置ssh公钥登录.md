---
title: centos配置ssh公钥登录
date: 2017-06-15 14:04:11
tags: centos
permalink: 9b75e2b8516968af12514590bd5928b2
---
远程登录centos服务器，如果使用用户名和密码登录，是不安全的。纯密码容易被爆破。推荐使用ssh公钥登录服务器。


为了 centos 服务器安全，需要设置

+ 禁止 root 用户登陆

修改/etc/ssh/sshd配置文件中的
```
PermitRootLogin yes
```
把 yes 改成 no，然后重启 sshd 服务

+ 修改 ssh 端口

修改 / etc/ssh/sshd 配置文件中的
```
Port 22
```
把数值 22 修改成其他数值。端口号最好大于 1024。然后重启 sshd 服务

+ 禁止使用密码登陆

禁止使用密码登陆，需要先建立一对秘钥。

### 使用 ssh-keygen 生成私钥

在服务器上，使用命令，建立公钥
```
ssh-keygen -trsa -b4096
```
秘钥建立步骤：

![建立ssh公钥](https://tebak.oss-cn-hangzhou.aliyuncs.com/img/2018/09/29/b842dcc6.jpg)

其中
```
-trsa 指明使用rsa公钥
-b2048 指明私钥长度为2048
```
把私钥下载到本地，导入到 xshell。

使用 xshell 生成私钥

也可以使用 xshell 生成私钥，把公钥导入到服务器里面

在 xshell，工具–> 新建用户秘钥生成向导

![生成秘钥](https://tebak.oss-cn-hangzhou.aliyuncs.com/img/2018/09/29/9702f5f1.jpg)

最后把公钥导入到服务器.ssh/authorized_keys文件中

![建立公钥](https://tebak.oss-cn-hangzhou.aliyuncs.com/img/2018/09/29/b4b87ef2.jpg)

需要注意的是
```
.ssh 目录权限必须是600
authorized_keys 文件权限必须是700
```

---
title: centos安装nginx并支持http2
date: 2019-12-15
sidebar: 'auto'
categories:
 - linux
tags:
 - nginx
publish: true
---
## nginx简介

Nginx是一个高性能的HTTP和HTTP/TCP/UDP反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务。

## 准备工作

+ 安装开发工具包

```bash
yum groupinstall Development Tools -y
```

+ 安装依赖库

```bash
yum install GeoIP-devel pcre pcre-devel zlib zlib-devel gd gd-devel -y
```

+ 安装jemalloc

```bash
mkdir /uar/local/jemalloc
cd /usr/local/src/
wget https://github.com/jemalloc/jemalloc/releases/download/5.2.1/jemalloc-5.2.1.tar.bz2
tar -xjf jemalloc-5.2.1.tar.bz2
cd jemalloc-5.2.1
./configure --prefix=/uar/local/jemalloc
make
make install
```

+ 准备openssl源码包

```bash
cd /usr/local/src/
wget https://www.openssl.org/source/openssl-1.0.2t.tar.gz
```

ngixn安装过程中，需要的是openssl源码目录，openssl不需要编译安装

## 安装nginx

+ 准备nginx工作所需的目录

```bash
mkdir /etc/nginx
mkdir /usr/local/nginx
```

+ 准备nginx编译参数

编译参数仅供参考，可以自定义

```bash
--prefix=/usr/local/nginx \
--conf-path=/etc/nginx/nginx.conf \
--modules-path=/usr/local/nginx \
--with-http_ssl_module \
--with-http_v2_module \
--with-http_realip_module \
--with-http_image_filter_module \
--with-http_geoip_module \
--with-http_sub_module \
--with-http_gzip_static_module \
--with-http_flv_module \
--with-http_mp4_module \
--with-http_auth_request_module \
--with-http_random_index_module \
--with-http_secure_link_module \
--with-http_degradation_module \
--with-http_slice_module \
--with-http_stub_status_module \
--with-stream \
--with-stream_ssl_module \
--with-stream_realip_module \
--with-stream_geoip_module \
--with-openssl=/usr/local/src/openssl-1.0.2t \
--with-pcre \
--with-zlib= \
--with-ld-opt='-L /usr/local/jemalloc/lib'
```

编译参数检查成功的话，就有下面的提示

![编译参数检查](https://img.array.fun/img/2019/12/15/ar2oqkn0plpf94i.webp)

+ 编译并安装

```bash
make
make install
```

这样nginx就安装成功了

+ 添加环境变量

把nginx的二进制执行文件，添加到环境变量

```bash
echo "PATH=$PATH:/usr/local/nginx/sbin" > /etc/profile.d/nginx.sh
```

这样输入`nginx -V`，可以查看nginx版本信息和编译参数

![查看nignx版本信息](https://img.array.fun/img/2019/12/15/bpgya9nc24ta6ss.webp)

## 美化nginx配置文件

把nginx源码目录的vim配置文件，复制到系统vim目录下

```bash
cp /usr/local/src/nginx-1.16.1/contrib/vim* /etc/vim/
```

## 更新nignx

在前边`make`成功以后，只需要把`objs/nginx`复制到`/usr/local/nginx/sbin`下面就行了，替换以前的nignx二进制文件

```bash
cp objs/nginx /usr/local/nginx/sbin
```

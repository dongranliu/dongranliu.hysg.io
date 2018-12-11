---
title: git status中文乱码
date: 2017-06-22 11:15:20
tags: git
permalink: 67f6feda6b2616888986268f97d926b9
---
有时使用命令`git status`时候会乱码。这只是把中文转换成了Unicode编码了。
<!--more-->

解决也很简单，只需要一条命令。
```
git config --global core.quotepath false
```
这样中文就不会乱码了。

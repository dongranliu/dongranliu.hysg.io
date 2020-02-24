---
title: Go make和new初始化
date: 2020-02-20
sidebar: 'auto'
categories:
- linux
tags:
- Go
publish: true
---
## make

make方法可以初始化slice，map，chan。返回的是引用类型。

+ 初始化slice

```go
package main

import "fmt"

mSlice := make([]int, 3)

for i := 0; i < len(mSlice); i++ {
  mSlice[i] = i
}

fmt.Println(mSlice)
```

输出的是

```go
[0 1 2]
```

+ 初始化map

```go
package main

import "fmt"

mMap := make(map[string]int)

mMap["age"] := 10

fmt.Println(mMap)
```

输出的是

```go
map[age:10]
```


+ 初始化chan

```go
package main

import "fmt"

mChan := make(chan int ,5)
	for i := 0; i < 5; i++ {
		mChan <-i
	}

	close(mChan)
	for ch:=range mChan {
		fmt.Printf("chann is %v, len is %v \n", ch, len(mChan))
	}
```

输出的是

```go
chann is 0, len is 4
chann is 1, len is 3
chann is 2, len is 2
chann is 3, len is 1
chann is 4, len is 0
```

## new

new方法可以初始化array，map，struct。返回的是返回传入类型的指针地址。并且new会把内存置零。

+ 初始化数组

+ 初始化map

+ 初始化struct

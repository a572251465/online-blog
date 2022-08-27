---
title: Java之String 类型
date: 2022-08-27
tags:
  - Java
categories:
  - Java
sidebar: 'auto'
---

<div align = "center"><h1>String 类型</h1></div>
<div align = "center"><h2><u>越努力，越幸运</u></h2></div>

## String 本质是什么？？？

- String 类型 在`java.lang` 导出的。在`java.lang`语言包中的变量以及方法 无需显式导入
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/bebb6cbd8bf64c1f83ba0a6560027a33.png)
- 字符串就是由多个字符拼接而成的。所以可以理解为字符串
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/e284ad4a78c6418ea92c1da58b3cdd33.png)
- 以及任何字符串 都是 String 类型的实例
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/d07cbf324ab44aa2b040fa89d8087f07.png)
- 字符串是不可变的，他们的值被创建后是无法再次修改的。就是因为字符串对象不可变的，所以在常量池中是可以共享的
- 字符串本质上就是一个字符数组，就是由多个字符组成的
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/b1805b85723c4ede89dd6a5c678512f4.png)
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/1640606314ca43f6a7e828de0515599d.png)

## 刨析`equals`方法

![在这里插入图片描述](https://img-blog.csdnimg.cn/b450d5e10f9d478d8dda5b70f957c14e.png#pic_center)

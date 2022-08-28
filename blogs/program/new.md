---
title: JavaScript内功之new 过程
date: 2022-08-21
tags:
  - 手写系列
categories:
  - 手写系列
sidebar: 'auto'
---

<div align = "center"><h1>new 过程</h1></div>


> 作为 js 的基础，充分了解 new 的实现过程非常重要，今天的目的就是重写 new 的过程，带大家来了解下

```js
/**
 * @description 实现类 new的过程 主要是模拟 new 过程
 * @return {*}
 */
function createNew() {
  // 1. 普通的函数传递过来的参数是arguments, 可以通过shift函数的特性来提取参数中的原函数
  const _fn = [].shift.call(arguments)
  // 2. 定义一个空对象 将来是要返回的对象
  const obj = {}

  // 3. 调用原函数，但是函数的this指向新对象
  const res = _fn.apply(obj, arguments)
  // 4. 将对象的__proto__ 指向函数的原型
  Object.setPrototypeOf(obj, _fn.prototype)
  // obj.__proto__ = Object.create(_fn.prototype)

  // 5. 如果原函数的返回值是对象 直接返回，如果是基本数据类型 返回自己定义的对象
  return res && typeof res === 'object' ? res : obj
}
```

- 1. 普通的函数传递过来的参数是 arguments, 可以通过 shift 函数的特性来提取参数中的原函数
- 2. 定义一个空对象 将来是要返回的对象
- 3. 调用原函数，但是函数的 this 指向新对象
- 4. 将对象的**proto** 指向函数的原型
- 5. 如果原函数的返回值是对象 直接返回，如果是基本数据类型 返回自己定义的对象

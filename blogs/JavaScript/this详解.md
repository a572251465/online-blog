---
title: JavaScript基础之this详解
date: 2022-08-05
tags:
  - JavaScript
categories:
  - JavaScript
sidebar: 'auto'
---

<div align = "center"><h1>this详解</h1></div>

## 什么是this

> 1. `this`从寓意上来说就是指代事物本身，可以理解是一种简写
> 2. `this`可以指代当前的运行环境。例如：window/ 函数执行上下文等
> 3. 更加高深的可以理解为：存在规范中的抽象类型，为了更好的描述语言底层行为逻辑才存在的
> 4. `this`的精髓在于：谁调用`this`就会指向谁
> 5. 具体的this写法，如下列代码中：

```javascript
console.log(this) // window

const obj = {
  name: 'xxx',
  getName() {
    console.log(this.name) // 对象的name属性的值
  }
}
console.log(obj.getName())
```

### 注意点：

> this具体的内容跟执行位置有关，跟定义位置无关(跟作用域正好相反)。之后会举例进行说明。

> this在不同的场合，代表的内容不同，接下来一一看下：

## 规范下的this

<hr />

[规范解析this 原文地址](https://github.com/mqyqingfeng/Blog/issues/7)

```javascript
var value = 1;

var foo = {
  value: 2,
  bar: function () {
    return this.value;
  }
}

//示例1
console.log(foo.bar()); // 2
//示例2
console.log((foo.bar)()); // 2
//示例3
console.log((foo.bar = foo.bar)()); // 1
//示例4 
console.log((false || foo.bar)()); // 1
//示例5
console.log((foo.bar, foo.bar)()); // 1
```

> 重点在于括号左侧的内容，是否会产生运算，如果产生运算的话，就是undefined，反之就是原来的值

- 上述实例1 以及实例2中 因为最左侧括号的右侧内容，并没有进行运算，所以是原来的值
- 实例3/ 实例4/ 实例5 通过赋值运算后 当前的this是undefined，但是在全局环境下通过隐式类型转换变换为window

## 全局下的this

<hr />

> 1. 在无显示的调用情况下，this指向全局/ 其实就是所谓的window
> 2. 严格模式下 this会是undefined
> 3. 任意函数(XXX)调用时，可以理解为window.XXX

- 情况1：

```javascript
console.log(this) // window
```

- 情况2：

```javascript
setTimeout(function () {
  console.log(this) // window
}, 0)
```

- 情况3：

```javascript
const obj = {
  getName: function () {
    console.log(this)
  }
}
const getName = obj.getName
getName() // window
```

## 函数下的this

<hr />

> - 谁调用函数，那么this就执行谁
> - 但是箭头函数是一个例外，箭头函数的this指向定义当前调用者的上下文(就是所谓上级上下文的this)
> - 如果是多层调用的话，this指向最右侧调用者本身

- 函数中调用：

```javascript
var name = 'lihh1'

const user = {
  name: 'lihh2',
  getName: function () {
    return this.name
  },

  getName1: () => {
    return this.name
  }
}

console.log(user.getName()) // lihh2
```

- 箭头函数中调用：

```javascript
var name = 'lihh1'

const user = {
  name: 'lihh2',
  getName: function () {
    return this.name
  },

  getName1: () => {
    return this.name
  }
}

console.log(user.getName1()) // lihh1
```

- 多层对象嵌套调用：

```javascript
const user = {
  name: 'lihh1',
  user: {
    name: 'lihh2',
    user: {
      name: 'lihh3',
      getName: function () {
        return this.name
      }
    }
  }
}

console.log(user.user.user.getName()) // lihh3
```

## DOM事件下this

<hr />

> - 如果是通过点击事件触发的话，this指向DOM对象

```html

<body>
<button id="btn">点击</button>
<script>
  const btn = document.getElementById('btn')
  btn.onclick = function () {
    console.log(this) // <button id="btn">点击</button>
  }

  btn.click()
</script>
```

## 实例对象中的this

<hr />

> 1. 通过关键字`new`生成一个实例对象后，如果构造函数的返回值是非引用对象类型，那么此时的this就是实例本身
> 2. 通过关键字`new`生成一个实例对象后，如果构造函数返回的是一个引用对象，那么此时的this就是返回的引用对象

- 情况1：无返回引用对象

```javascript
function User() {
  this.name = 'lihh'
}

const u = new User()
console.log(u.name) // lihh
```

- 情况2：返回引用对象

```javascript
function Person() {
  this.name = 'lihh1'
  return {
    name: 'lihh2'
  }
}

const p = new Person()
console.log(p.name) // lihh2
```

## class中的this

<hr />

> 1. 通过class生成一个实例对象后，此时的this就是实例本身

```javascript
class Person {
  constructor() {
    this.name = 'lihh'
  }
}

const p = new Person()
console.log(p.name) // lihh

```

## 如何绑定this

<hr />

> - 如果我们在实际的业务中就是想让this指向一个特定的值，我们应该用什么办法呢。请看下列三种办法

### call

- 使用关键字`call`进行函数调用，第一个参数是将要改变的this，之后参数必须一一进行传递
- 关键字`call`调用函数后，函数会立即执行

```javascript
function getName(a, b) {
  return [this.name, a, b]
}

const user = {
  name: 'lihh'
}

// call
console.log(getName.call(user, 1, 2)) // [lihh, 1, 2]
```

### apply

- 使用关键字`apply`进行函数调用，第一个参数是将要改变的this，之后的参数是数组的形式赋值给第二个参数
- 关键字`apply`调用函数后，函数会立即执行

```javascript
function getName(a, b) {
  return [this.name, a, b]
}

const user = {
  name: 'lihh'
}

// apply
console.log(getName.apply(user, [1, 2])) // [lihh,1, 2]
```

### bind

- 使用关键字`bind`进行函数调用，第一个参数是将要改变的this，之后参数进行一一赋值
- 关键字`bind`调用函数后，会生成一个新的函数，调用此函数才会执行。而且此时也是可以传递函数

```javascript
function getName(a, b) {
  return [this.name, a, b]
}

const user = {
  name: 'lihh'
}

const fn = getName.bind(user, 1)
console.log(fn(2)) // ['lihh', 1, 2]
```

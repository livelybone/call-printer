# call-printer
[![NPM Version](http://img.shields.io/npm/v/call-printer.svg?style=flat-square)](https://www.npmjs.com/package/call-printer)
[![Download Month](http://img.shields.io/npm/dm/call-printer.svg?style=flat-square)](https://www.npmjs.com/package/call-printer)
![typescript](https://img.shields.io/badge/typescript-supported-blue.svg "typescript")
![pkg.module](https://img.shields.io/badge/pkg.module-supported-blue.svg "pkg.module")

> `pkg.module supported`, 天然支持 tree-shaking, 使用 es module 引用即可

[English Document](./README.md)

A tool for easily customize you content to call printer in browser

## repository
https://github.com/livelybone/call-printer.git

## Demo
https://github.com/livelybone/call-printer#readme

## Run Example
你可以通过运行项目的 example 来了解这个组件的使用，以下是启动步骤：

1. 克隆项目到本地 `git clone https://github.com/livelybone/call-printer.git`
2. 进入本地克隆目录 `cd your-module-directory`
3. 安装项目依赖 `npm i`(使用 taobao 源: `npm i --registry=http://registry.npm.taobao.org`)
4. 启动服务 `npm run dev`
5. 在你的浏览器看 example (地址通常是 `http://127.0.0.1:3000/examples/test.html`)

## Installation
```bash
npm i -S call-printer
```

## Global name - The variable the module exported in `umd` bundle
`CallPrinter`

## Interface
去 [index.d.ts](./index.d.ts) 查看可用方法和参数

## Usage
```js
import { callPrinter } from 'call-printer'

// print the html string
callPrinter('<img src="./sample.jpeg" style="width: 100%;">')

// print the dom element
const content = document.getElementById('content')
callPrinter(content)
```

在 HTML 文件中直接引用，你可以在 [CDN: unpkg](https://unpkg.com/call-printer/lib/umd/) 看到你能用到的所有 js 脚本
```html
<-- 然后使用你需要的 -->
<script src="https://unpkg.com/call-printer/lib/umd/<--module-->.js"></script>
```

或者，你也可以使用 [CDN: jsdelivr](https://cdn.jsdelivr.net/npm/call-printer/lib/umd/) 看到你能用到的所有 js 脚本
```html
<script src="https://cdn.jsdelivr.net/npm/call-printer/lib/umd/<--module-->.js"></script>
```

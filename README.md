# call-printer
[![NPM Version](http://img.shields.io/npm/v/call-printer.svg?style=flat-square)](https://www.npmjs.com/package/call-printer)
[![Download Month](http://img.shields.io/npm/dm/call-printer.svg?style=flat-square)](https://www.npmjs.com/package/call-printer)
![typescript](https://img.shields.io/badge/typescript-supported-blue.svg "typescript")
![pkg.module](https://img.shields.io/badge/pkg.module-supported-blue.svg "pkg.module")

> `pkg.module supported`, which means that you can apply tree-shaking in you project

[中文文档](./README-CN.md)

A tool for easily customize you content to call printer in browser

## repository
https://github.com/livelybone/call-printer.git

## Demo
https://github.com/livelybone/call-printer#readme

## Run Example
you can see the usage by run the example of the module, here is the step:

1. Clone the library `git clone https://github.com/livelybone/call-printer.git`
2. Go to the directory `cd your-module-directory`
3. Install npm dependencies `npm i`(use taobao registry: `npm i --registry=http://registry.npm.taobao.org`)
4. Open service `npm run dev`
5. See the example(usually is `http://127.0.0.1:3000/examples/test.html`) in your browser

## Installation
```bash
npm i -S call-printer
```

## Global name - The variable the module exported in `umd` bundle
`CallPrinter`

## Interface
See what method or params you can use in [index.d.ts](./index.d.ts)

## Usage
```js
import { callPrinter } from 'call-printer'

// print the html string
callPrinter('<img src="./sample.jpeg" style="width: 100%;">')

// print the dom element
const content = document.getElementById('content')
callPrinter(content)
```

Use in html, see what you can use in [CDN: unpkg](https://unpkg.com/call-printer/lib/umd/)
```html
<-- use what you want -->
<script src="https://unpkg.com/call-printer/lib/umd/<--module-->.js"></script>
```

Or，see what you can use in [CDN: jsdelivr](https://cdn.jsdelivr.net/npm/call-printer/lib/umd/)
```html
<script src="https://cdn.jsdelivr.net/npm/call-printer/lib/umd/<--module-->.js"></script>
```

declare function getStyleObj(dom?: Element): CSSStyleDeclaration

declare function toHyphenCase(name: string): string

declare function stringifyStyle(styleObj: CSSStyleDeclaration): string

declare function stringifyAttrs(
  el: Element,
  extraAttrs?: {
    [key: string]: string
  },
): string

declare function stringifyNode(el: ChildNode): string

interface CallPrinterOptions {
  /**
   * Delay time to waiting the content loaded
   *
   * Default: 100
   * */
  delay: number
}

/**
 * @param { string | Element} [content]     the content you want print.
 *
 *                                          如果值类型为元素节点，将打印对应节点
 *                                          if content is an Element, it will print this element;
 *
 *                                          如果值类型为字符串，将打印解析得到的 html
 *                                          else if content is a string, it will print this string as a html file.
 *
 * @param { CallPrinterOptions } [options]
 * */
declare function callPrinter(
  content?: string | Element,
  options?: CallPrinterOptions,
): void

export {
  CallPrinterOptions,
  callPrinter,
  getStyleObj,
  stringifyAttrs,
  stringifyNode,
  stringifyStyle,
  toHyphenCase,
}

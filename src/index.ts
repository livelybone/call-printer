export function getStyleObj(dom?: Element) {
  return dom ? window.getComputedStyle(dom) : ({} as CSSStyleDeclaration)
}

export function toHyphenCase(name: string) {
  return name.replace(/[A-Z]/g, char => `-${char.toLowerCase()}`)
}

export function stringifyStyle(styleObj: CSSStyleDeclaration) {
  return Object.keys(styleObj)
    .reduce((pre, styleName) => {
      const style = styleObj[styleName as any]
      return style && !/^\d+$/.test(styleName)
        ? `${pre}${toHyphenCase(styleName)}:${style};`
        : pre
    }, '')
    .replace(/"/g, "'")
}

export function stringifyAttrs(
  el: Element,
  extraAttrs?: { [key: string]: string },
) {
  type O = { name: string; value: string }[]
  const attrsMap = Array.prototype.map
    .call(el.attributes, (at: any) => ({
      name: at.nodeName,
      value: at.nodeValue,
    }))
    .filter((it: any) => it.value && (!extraAttrs || !extraAttrs[it.name])) as O
  const extraNames = (extraAttrs
    ? Object.keys(extraAttrs).map(name => ({ name, value: extraAttrs[name] }))
    : []) as O
  return attrsMap.concat(extraNames).reduce((pre, { name, value }) => {
    return value ? `${pre}${name}="${value}" ` : pre
  }, '')
}

export function stringifyNode(el: ChildNode) {
  if (el.nodeName === '#text') return el.nodeValue || ''

  const styleStr = stringifyStyle(getStyleObj(el as Element))
  const attrs = stringifyAttrs(el as Element, { style: styleStr })
  const tagName = el.nodeName.toLowerCase()
  if (['br', 'hr', 'input', 'img'].includes(tagName)) {
    return `<${tagName} ${attrs}/>`
  }
  const children = Array.prototype.reduce.call(
    el.childNodes,
    (pre: any, node: any) => pre + stringifyNode(node),
    '',
  ) as string
  return `<${tagName} ${attrs}>${children}</${tagName}>`
}

export interface CallPrinterOptions {
  /**
   * Delay time to waiting the content loaded
   *
   * Default: 100
   * */
  delay: number
}

/**
 * @param { string | Element} [content]     打印的内容。
 *                                          如果值类型为元素节点，将打印对应节点
 *                                          如果值类型为字符串，将打印解析得到的 html
 *
 * @param { CallPrinterOptions } [options]
 * */
export function callPrinter(
  content?: string | Element,
  options?: CallPrinterOptions,
) {
  if (!content) window.print()
  else {
    const iframe = document.createElement('iframe')
    iframe.setAttribute('style', 'display: none')
    document.body.appendChild(iframe)

    const subWindow = iframe.contentWindow!
    let $content: string
    if (typeof content === 'string') $content = content
    else $content = stringifyNode(content)
    subWindow.document.body.innerHTML = $content
    setTimeout(() => {
      subWindow.print()
      document.body.removeChild(iframe)
    }, (options && options.delay) || 100)
  }
}

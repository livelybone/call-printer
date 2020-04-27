import fs from 'fs'
import path from 'path'
import dts from 'rollup-plugin-dts'
import license from 'rollup-plugin-license'
import { uglify } from 'rollup-plugin-uglify'
import packageConf from './package.json'
import baseConf from './rollup.config.base'

const isWatch = process.env.BUILD_ENV === 'watch'
const isDts = process.env.BUILD_ENV === 'dts'

const formats = ['es', 'umd']

function getEntries() {
  const reg = /\.ts$/
  return fs
    .readdirSync(path.resolve(__dirname, './src'))
    .filter(
      filename =>
        reg.test(filename) &&
        !fs.statSync(path.resolve(__dirname, './src', filename)).isDirectory(),
    )
    .map(filename => ({
      name: filename.replace(reg, ''),
      filename: path.resolve(__dirname, './src', filename),
      formats: formats.filter(f => f !== 'es'),
    }))
}

const conf = entry => ({
  input: entry.filename,
  output: entry.formats.map(format => ({
    file: `./lib/${format}/${entry.name}.js`,
    format,
    name: entry.name === 'index' ? 'CallPrinter' : `${entry.name}CallPrinter`,
  })),
  external: entry.external ? Object.keys(packageConf.dependencies || {}) : [],
  plugins: [
    ...baseConf.plugins,
    entry.needUglify !== false && uglify(),
    license({
      banner: `Bundle of <%= pkg.name %>
               Generated: <%= moment().format('YYYY-MM-DD') %>
               Version: <%= pkg.version %>
               License: <%= pkg.license %>
               Author: <%= pkg.author %>`,
    }),
  ],
})

// eslint-disable-next-line no-nested-ternary
export default isWatch
  ? [
      {
        name: 'index',
        filename: './src/index.ts',
        formats: ['umd'],
        needUglify: false,
      },
    ].map(conf)
  : isDts
  ? [
      {
        input: './src/index.ts',
        output: [{ file: './index.d.ts', format: 'es' }],
        plugins: [dts()],
      },
    ]
  : [
      {
        name: 'index',
        filename: './src/index.ts',
        formats: ['es'],
        needUglify: false,
        external: true,
      },
      {
        name: 'index',
        filename: './src/index.ts',
        formats: ['umd'],
        needUglify: true,
        external: false,
      },
      ...getEntries(),
    ].map(conf)

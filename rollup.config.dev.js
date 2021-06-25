const path = require('path');
const { nodeResolve } = require('@rollup/plugin-node-resolve'); //解决安装依赖的问题
const commonjs = require('@rollup/plugin-commonjs');
const { babel } = require('@rollup/plugin-babel');
const json = require('@rollup/plugin-json');
const vuePlugin = require('rollup-plugin-vue');
const postcss = require('rollup-plugin-postcss'); //CSS文件导入JS文件中

const inputPath = path.resolve(__dirname, './src/index.js');
const outputUmdPath = path.resolve(__dirname, './dist/thunderUmd.js');
const outputEsPath = path.resolve(__dirname, './dist/thunderEs.js');

module.exports = {
  input: inputPath,
  output: [
    {
      file: outputUmdPath,
      format: 'umd',
      name: 'thunderDataV',
      globals: {
        vue: 'Vue',
        echarts:'Echarts'
      },
    },
    {
      file: outputEsPath,
      format: 'es',
      name: 'thunderDataV',
      globals: {
        vue: 'Vue',
      },
    },
  ],
  plugins: [
    vuePlugin(),
    nodeResolve(),
    commonjs(),
    babel({
      exclude: 'node-modules/**'
    }),
    json(),

    postcss({
      plugins: [],
    }),
  ],
  external: ['vue','echarts'],
};

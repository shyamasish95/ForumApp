const { override, fixBabelImports, addWebpackPlugin } = require('customize-cra');
//const { override, addWebpackPlugin } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

module.exports = override(addWebpackPlugin(new AntdDayjsWebpackPlugin()));

module.exports = override(
       fixBabelImports('import', {
         libraryName: 'antd',
         libraryDirectory: 'es',
         style: 'css',
       }),
     );
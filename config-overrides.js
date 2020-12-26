const { override, fixBabelImports, addWebpackResolve, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
const path = require("path")

module.exports = override(
  //antd-mobile  按需加载  ，  按需加载antd的组件
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  //导入文件省略后缀
  addWebpackResolve({
    extensions: [".js", ".json", ".jsx"]
  }),

  //文件路径配置 别名
  addWebpackAlias({
    "@a": path.resolve(__dirname, "src/assets"),
    "@v": path.resolve(__dirname, "src/views"),
    "@u": path.resolve(__dirname, "src/utils"),
    "@c": path.resolve(__dirname, "src/components"),
    "@h": path.resolve(__dirname, "src/hoc"),
  }),
  //可以使用修饰器  需要安装插件  @babel/plugin-propsal-decorators
  addDecoratorsLegacy()

);

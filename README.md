# vue-webpack 的使用

## 项目结构介绍

- public 静态资源文件，里面存放着 index.html 这个页面的模板。还可以存放一些不需要通过 webpack 去打包处理的静态资源
  - index.html 页面模板文件
  - favicon.ico 项目小图标
- src 源代码文件夹，里面存放的东西都需要被 webpack 处理
  - assets 静态资源文件 需要被 webpack 处理的
  - App.vue vue 的单文件组件，一般使用它作为万年老二组件，这种类型的文件需要通过转换器进行转换，vue-loader
  - index.js 项目入口 js 文件
- .gitignore git 忽略文件
- README.md 读我文件
- webpack.config.js webpack 配置文件

## 项目依赖包

1. webpack
2. webpack-cli
3. css-loader
4. style-loader
5. sass-loader
6. node-sass
7. file-loader
8. html-webpack-plugin
9. copy-webpack-plugin
10. vue
11. vue-loader

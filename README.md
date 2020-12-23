# webpack
webpack 4.0

webpack是什么？

    加载文件数据变慢
    便于查找文件之间的位置关系
    很难查找错误

  语法：es module —- import export 这种写法 
  这种语法浏览器不会识别，要借助于webpack

  Common.js 模块引入规范 require module.exports = xxx
  Es module 模块引入方式   import  exports default = xxx
  webpack 模块打包工具 识别 import语句
  
 在private：true 不会发到npm包里
webpack 全局安装可能会出现不同项目webpack配置不一样的问题 所以要卸载

npm uninstall webpack

项目里安装webpack

npm install webpack webpack-cli -D ==—save-dev
 
node 会去全局安装  node找不到

要用npx webpack -v

npx 在nodemodule里找webpack  就可以在目录里找到webpack安装包

好处：

webpack 配置文件
模块打包工具

npx webpack —config 自定义JavaScript 文件.js
不然默认是 webpack.config.js

npm scripts 

在scripts中配置 选项
“bundle”：“webpack”

npm run bundle = npm run webpack

在scripts 中配置的选项会先在nodemodules中寻找 ，那么不用用npx 

全局安装 webpack index.js
局部安装 npx run webpack.js
scripts npx run bundle  需要配置

webpack cli 的作用是 可以在命令行中使用webpack

工程打包的时候，需要根据工程来配置webpack

入口的文件 
entry:’’,
output:{
 	filename:’’
     path: 绝对路径
}

npm run bundle
执行后输出的意义

webpack
Hash值 对应唯一值
version  webpack版本
time 打包耗时
asset bundle.js 打包出了bundle.Js
文件

mode 的作用
mode: production  作用是开发是生产环境 压缩代码
mode:development 作用是 不压缩代码 development
 开发环境

entry:{
   main:’./src/index.js’  等价于 ：./src/index.js
}

## 12.23 日记录
问题为什么 
push
不到
不到main
不到main上

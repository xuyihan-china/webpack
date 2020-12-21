const path = require('path')

module.exports ={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'dist.js'
    },
    module:{
        //打包图片 打包首先会把图片移到dist文件 然后取名字 返回给 require的对象
        rules:[{
            test:/\.(jpeg|png|gif)$/, //以jpeg结尾的文件
            use:{
                //loader:'file-loader', // npm install file-loader -D
                loader:'url-loader',//url loader 做的 file-loader都可以做
                options:{
                    name:'[name].[ext]', //打包出来的文件名字 placeholder 占位符 原来名字一样
                    outputPath:'images/' //打包到images文件夹里
                }
            }
        }]
    }
}

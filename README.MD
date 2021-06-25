rollup: 的配置文件需要采用ES模块标准编写


input: 表示入口文件的路径（老版本为entry，已经废弃）


output: 表示输出文件的内容，它允许传入一个对象或一个数组，当为数组时，依次输出多个文件，它包含以下内容：


output.file：输出文件的路径（老版本为dest，已经废弃）


output.format：输出文件的格式


output.banner：文件头部添加的内容


output.footer：文件末尾添加的内容


vue3 兼容 vue2 需要变化
安装的roLlup-plugin-vue:6.0 改为 5.0版本
删除@vue/compiler-sfc 插件
安装 vue-template-compiler 
将vue3中的vue文件修改为vue2模板的代码


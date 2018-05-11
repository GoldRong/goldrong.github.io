"# Hello VuePress" 


npm i -g vuepress 全局安装 vuepress

npm init 初始化

创建docs目录

docs 中编写  README.md（最终会编译成index.html)

执行vuepress dev docs，会生成 docs\.vuepress 目录。修改配置文件 `docs\.vuepress\config.js (没有则新增)。指定目标目录dest为`./dist` 。由于是首页，base需要设置为 /。
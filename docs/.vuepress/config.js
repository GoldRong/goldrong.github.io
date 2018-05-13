module.exports = {
    title: '聚散流沙',
    description: '把代码写复杂很容易，把代码写简单很难，这里讲的是如何编写简单易读的代码',
    dest: './dist',    // 设置输出目录
    base: '/', // 设置站点根路径
    themeConfig: {
        repo: 'https://github.com/xurong/xurong.github.io' ,
        nav: [
            { text: '首页', link: '/' },
            { text: '编程规范', link: '/foo/' },
            { text: '数据结构', link: '/bar/' }
        ],
        sidebar: {
            '/foo/': [{
                title: '程序员你为什么这么累',
                collapsable: true,
                children: [
                    '',
                    'rest-defined',
                    'controller',
                    'aop',
                    'log',
                    'exception',
                    'i18n-valid',
                    'util',
                    'function',
                    'config',
                    'change',
                    'github'
                ]
            }],
            '/ajax/': [{
                title: 'Ajax跨越安全详解',
                collapsable: true,
                children: [
                    '',
                ]
            }]
        }
    }, //themeConfig
}
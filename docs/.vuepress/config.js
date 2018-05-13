module.exports = {
    title: '知识树',
    description: '把代码写复杂很容易，把代码写简单很难，这里讲的是如何编写简单易读的代码',
    dest: './dist',    // 设置输出目录
    base: '/', // 设置站点根路径
    themeConfig: {
        repo: 'https://github.com/xurong/xurong.github.io' ,
        nav: [
            { text: '首页', link: '/' },
            { text: '算法', link: '/foo/' },
            { text: '数据结构', link: '/bar/' }
        ],
        sidebar: {
            '/foo/': [{
                title: '算法',
                collapsable: false,
                children: [
                    '',
                    'one',
                    'two'
                ]
            }],
            '/bar/': [{
                title: '数据结构',
                collapsable: false,
                children: [
                    '',
                    'three',
                    'four'
                ]
            }]
        }
    }, //themeConfig
}
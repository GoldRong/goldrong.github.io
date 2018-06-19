module.exports = {
    title: 'Knowledge Lab',
    description: '把代码写复杂很容易，把代码写简单很难，这里讲的是如何编写简单易读的代码',
    dest: './dist',    // 设置输出目录
    base: '/', // 设置站点根路径
    themeConfig: {
        repo: 'https://github.com/xurong/xurong.github.io',
        nav: [
            {text: '首页', link: '/'},
            {text: '数据结构', link: '/bar/'},
            {text: 'POS金融工具', link: 'http://114.67.236.168/#/BitmapViewer'},
            {
                text: '数据结构和算法',
                items: [
                    {text: '算法', link: 'http://www.cnblogs.com/chengxiao/category/880910.html'},
                    {text: '张晓康', link: 'https://zhuanlan.zhihu.com/p/37289934'},
                    {
                        text: '赵海英',
                        link: 'https://www.bilibili.com/video/av18777526/?from=search&seid=12584358532423887040'
                    },
                    {text: '机器学习算法', link: 'https://feisky.xyz/machine-learning/'}
                ]
            },
            {
                text: 'Android',
                items: [
                    {text: 'Carson_Ho', link: 'https://www.jianshu.com/u/383970bef0a0'},
                    {text: 'gityuan', link: 'http://gityuan.com/android/'}
                ]
            },
            {
                text: '微服务',
                items: [
                    {
                        text: '千锋Java微服务',
                        link: 'https://www.bilibili.com/video/av21634197?from=search&seid=11680738431147186091'
                    },
                    {text: 'Spring', link: 'https://topsale.gitbooks.io/java-cloud-dubbo/content/'},
                    {text: '纯洁的微笑', link: 'http://www.ityouknow.com/'},
                    {text: 'DocsHome', link: 'https://github.com/DocsHome'},
                    {text: '后端架构师图谱', link: 'https://github.com/xingshaocheng/architect-awesome'},
                    {text: 'ganecheng', link: 'http://www.ganecheng.tech/'},
                    {text: 'Java3y', link: 'https://www.jianshu.com/u/c4503bc2c490'}
                ]
            },
            {
                text: '兴业银行密钥',
                items: [
                    {text: '密钥管理', link: 'http://58.247.43.50:50909'},
                    {text: '密钥上送', link: 'http://mtms.cib.cibfintech.com/mtms/'}
                ]
            }
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
            }]
        }
    }, //themeConfig
}
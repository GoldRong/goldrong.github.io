module.exports = {
    title: '危险游戏',
    description: '把代码写复杂很容易，把代码写简单很难，这里讲的是如何编写简单易读的代码',
    dest: './dist',    // 设置输出目录
    base: '/', // 设置站点根路径
    themeConfig: {
        repo: 'https://github.com/xurong/xurong.github.io',
        nav: [

            {text: 'POS金融工具', link: 'http://114.67.236.168/#/BitmapViewer'},
            {text: 'Teambition', link: 'https://www.teambition.com/organization/55263514a7d66b384f02e9a1'},
            {text: '阿里RAP', link: 'http://rap2.taobao.org/repository'},
            {text: 'B站', link: 'https://space.bilibili.com/232756076/fans/follow'},
            {
                text: '数据结构和算法',
                items: [
                    {text: 'JavaGuide', link: 'https://github.com/Snailclimb/JavaGuide'},
                    {text: 'CS-Notes', link: 'https://github.com/CyC2018/CS-Notes'},
                    {text: '后端架构师图谱', link: 'https://github.com/xingshaocheng/architect-awesome'},
                    {text: '兰亭风雨', link: 'https://blog.csdn.net/ns_code/article/details/17565503'},
                    {
                        text: '设计模式导学',
                        link: 'https://blog.csdn.net/lovelion/article/details/17517213?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io'
                    }
                ]
            },
            {
                text: '密钥管理',
                items: [
                    {text: '电子签购单管理系统', link: 'http://58.247.43.50:9991'},
                    {text: '盛付通扫码参数管理', link: 'http://58.247.43.50:9999'},
                    {text: '汇付天下密钥管理', link: 'http://58.247.43.50:9992'},
                    {text: '兴业数金密钥管理', link: 'http://58.247.43.50:50909'},
                    {text: '兴业数金密钥上送', link: 'http://mtms.cib.cibfintech.com/mtms/'}
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
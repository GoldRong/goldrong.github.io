module.exports = {
    title: 'Spring',
    description: '把代码写复杂很容易，把代码写简单很难，这里讲的是如何编写简单易读的代码',
    dest: './dist',    // 设置输出目录
    base: '/', // 设置站点根路径
    themeConfig: {
        repo: 'https://github.com/xurong/xurong.github.io',
        nav: [
            {text: '首页', link: '/'},
            {text: 'POS金融工具', link: 'http://114.67.236.168/#/BitmapViewer'},

            {
                text: 'Android',
                items: [
                    {text: 'gityuan', link: 'http://gityuan.com/android/'},
                    {text: 'Carson_Ho', link: 'https://www.jianshu.com/u/383970bef0a0'},
                    {text: '安卓自定义View教程目录', link: 'http://www.gcssloop.com/customview/CustomViewIndex/'}
                ]
            },
            {
                text: '数据结构和算法',
                items: [

                    {text: 'JCSprout', link: 'https://github.com/crossoverJie/JCSprout'},
                    {text: '后端架构师图谱', link: 'https://github.com/xingshaocheng/architect-awesome'},
                    {text: '二叉搜索树', link: 'http://www.ganecheng.tech/'},
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
                text: 'JAVA',
                items: [
                    {text: '尚硅谷_SpringCloud（全）', link: 'https://www.bilibili.com/video/av22613028'},
                    {text: '尚硅谷SpringBoot全集', link: 'https://www.bilibili.com/video/av23478787'},
                    {text: 'Java3y', link: 'https://www.jianshu.com/u/c4503bc2c490'},
                    {text: '纯洁的微笑', link: 'http://www.ityouknow.com/archives.html'},
                    {
                        text: '史上最全设计模式导学',
                        link: 'https://blog.csdn.net/lovelion/article/details/17517213?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io'
                    },
                ]
            },
            {
                text: '密钥管理',
                items: [
                    {text: '电子签购单管理系统', link: 'http://58.247.43.50:9991'},
                    {text: '盛付通扫码参数管理', link: 'http://58.247.43.50:9999'},
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
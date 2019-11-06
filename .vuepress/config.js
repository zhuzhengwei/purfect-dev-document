module.exports = {
    title: "后台管理系统设计文档",
    markdown: {
        lineNumbers: false
    },
    themeConfig: {
        // 顶部导航栏
        nav: [
            {text: '首页', link: '/'},
            {
                text: '接口设计',link: '/api/'
            },
            {
                text: '业务逻辑的实现', link:'/business_logic/'
            },
            {
                text: '数据库设计',link: '/database/'
            }
        ],
        // 侧边栏
        sidebar: 'auto'
    }

}
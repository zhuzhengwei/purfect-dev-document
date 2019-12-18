module.exports = {
    title: "后台管理系统设计文档",
    markdown: {
        lineNumbers: false
    },
    themeConfig: {
        // 顶部导航栏
        /*nav: [
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
        ],*/
        // 侧边栏
        // sidebar: 'auto'
        sidebar:
                [
                    {
                        title:'PC端接口设计',
                        sidebarDepth: 1,
                        children: [
                            '/api/official/',
                            '/api/facility/',
                            '/api/textbook/',
                            '/api/recruit/',
                            '/api/enrolment/',

                        ]
                    },
                    {
                        title:'移动端接口设计',
                        sidebarDepth: 1,
                        children: [
                            '/api/AddressBook/',
                            '/api/elective/',
                            '/api/apply/',
                            '/api/banner/',
                            '/api/notice/',
                            '/api/QrCode/',
                            '/api/Login/',
                            '/api/Location/',
                            '/api/Home/',
                            '/api/sms/',
                            '/api/Conference/',
                            '/api/Project/',
                            '/api/forum/',
                            '/api/attendance.md',
                            '/api/community.md',
                            '/api/forumComment.md',
                            '/api/notification.md',
                        ]
                    },
                    {
                        title: 'PC端业务逻辑',
                        children:[
                            '/business_logic/textbook/',
                            '/business_logic/excel/',
                            '/business_logic/enrolment/',
                            '/business_logic/apply/',
                        ],
                    },
                    {
                        title: '移动端业务逻辑',
                        children:[
                        ],
                    },
                    {
                        title: '数据库设计',
                        children:[
                            '/database/enrolment/',
                            '/database/apply/',
                        ],
                    }
                ],
            
    }
}
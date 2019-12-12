# 办事大厅

根据当前登陆用户, 获取办事大厅所显示的有效工作流程

- url:api/flows/my

-  请求数据

| 参数名       | 是否必须     | 参数类型  | 说明 |
| -------- |:----------:| -----:   | ----- |
| school  | NO      | int|string      | 可选参数, 学校的 ID 或名称 |

- 请求参数说明: 可以提交学校的 id 或者名称进行查询. 如果未提供, 则以当前登陆用户的信息为准, 获取该用户所在学校的校历信息

- 响应数据

``` json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "types": [
            {
                "name": "学生专用", // 办事流程的分类名称
                "key": 5, // 类型的整数值
                "flows": [
                    {
                        "id": 10,
                        "name": "病假",
                        "icon": "http://abc.com/assets/img/icon1" // 需要前端 APP 自行判断所需的图片大小
                    },{
                        "id": 11,
                        "name": "事假",
                        "icon": "http://abc.com/assets/img/icon1"
                    }
                ]
            },
            {
                "name": "日常办公", // 办事流程的分类名称
                "key": 6, // 类型的整数值
                "flows": [
                    {
                        "id": 20,
                        "name": "出差",
                        "icon": "http://abc.com/assets/img/icon1"
                    },{
                        "id": 21,
                        "name": "用章",
                        "icon": "http://abc.com/assets/img/icon1"
                    }
                ]
            },
        ]
    }
}
```

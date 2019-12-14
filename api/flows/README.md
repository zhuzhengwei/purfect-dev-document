# 办事大厅

## 加载办事大厅中的可用流程

根据当前登陆用户, 获取办事大厅所显示的有效工作流程

- url: /api/pipeline/flows/my

- 请求数据

| 参数名       | 是否必须     | 参数类型  | 说明 |
| -------- |:----------:| -----:   | ----- |
| school  | NO      | int|string      | 可选参数, 学校的 ID 或名称 |

- 请求参数说明: 可以提交学校的 id 或者名称进行查询. 如果未提供, 则以当前登陆用户的信息为准, 获取该用户所在学校的校历信息

- 响应数据
  - 对学生来讲, 启动任意流程, 只需要访问 url.base + url.start_flow + "?api_token=123456&flow_id=1"
  - 对学生来讲, 查看自己申请的流程, 只需要访问 url.base + url.view_flows_in_progress + "?api_token=123456"
  - url.extra 为保留字段, 未来任何新增的 h5 功能, 放在这里面. 目前没有实际用途

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
        ],
        "url": { // 学生使用 H5 版本的工作流所要用的 url 的集合
            "base": "http://abc.com", // 网址 url
            "start_flow": "/h5/flow/user/start", // 启动流程的 URI
            "view_flows_in_progress": "/h5/flow/user/in-progress", // 查看自己流程的 URI
            "extra": "" // 保留字段, 对于任意非启动流程和查看流程之外的功能的 uri
        }
    }
}
```

## 测试 url

- 查看用户自己的待审核流程: https://admin.dev.pftytx.com/h5/flow/user/in-progress?api_token=d1f4f5d1-fef7-438f-a3dc-14eb1727b649
- 
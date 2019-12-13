# 社区接口

## 1.发布帖子
-  url: api/forum/posted

-  请求数据

| 参数名   | 是否必须     | 参数类型  | 说明         |
| -------- | :----------: | -----:    | -----:       |
| token    | YES          | string    |              |
| type     | YES          | int       | 1 图片 2视频 |
| content  | YES          | string    | 内容         |
| image[]  | NO           | array     | 图片         |
| video    | NO           | resources | 视频         |
| cover    | NO           | resources | 视频封面     |

- 响应数据
``` json
{
    "code": 1000,
    "message": "发布成功",
    "data": []
}
```

## 2.帖子列表
-  url: api/forum/list

-  请求数据

| 参数名   | 是否必须     | 参数类型 | 说明   |
| -------- | :----------: | -----: | -----: |
| token    | YES          | string |        |
| page     | YES          | int    |        |

- 响应数据
``` json
{
    "code": 1000,
    "message": "帖子列表",
    "data": {
        "currentPage": 1,
        "lastPage": 1,
        "total": 4,
        "list": [
            {
                "id": 4,
                "content": "测试5",
                "see_num": 0,
                "created_at": "2019-12-13 17:32:22",
                "user_id": 14,
                "type": "分类2",
                "comment_num": 0,
                "like_num": 0
            },
            {
                "id": 3,
                "content": "测试3",
                "see_num": 0,
                "created_at": "2019-12-13 17:32:15",
                "user_id": 14,
                "type": "分类2",
                "comment_num": 0,
                "like_num": 0
            }
        ]
    }
}
```


## 2.帖子详情
-  url: api/forum/details

-  请求数据

| 参数名   | 是否必须     | 参数类型 | 说明   |
| -------- | :----------: | -----: | -----: |
| id       | YES          | int |        |

- 响应数据
``` json
{
    "code": 1000,
    "message": "帖子详情",
    "data": {
        "id": 1,
        "school_id": 1,
        "user_id": 14,
        "content": "测试",
        "see_num": 0,
        "type_id": 1,
        "is_up": 0,
        "status": 2,
        "created_at": "2019-12-13 17:32:04",
        "updated_at": "2019-12-13 17:32:04",
        "avatar": "/assets/img/dp.jpg",
        "user_name": "Sandra Gerlach",
        "type": "分类1",
        "like_num": 0
    }
}
```




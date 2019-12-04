#  通知管理

## 1.通知列表

- url:api.notice.list

-  请求数据

| 参数名       | 是否必须     | 参数类型  | 说明 |
| -------- |:----------:| -----:   | ----- |
| type  | Yes      | int      | 类型 1:通知, 2:公告, 3:检查|
| page  | Yes      | int      | 页码 默认第一页|


- 响应数据

``` json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "currentPage": 1,
        "lastPage": 1,
        "total": 1,
        "data": [
            {
                "id": 7,
                "title": "xxxx",
                "type": 3,
                "created_at": "2019-12-03 15:22:29",
                "inspect_id": 1,
                "notice_medias": [
                    {
                        "url": "/storage/users/1/IVqXqxyJv.jpeg"
                    },
                    {
                        "url": "/storage/users/1/DJqD.jpeg"
                    }
                ],
                "image_media": {   // 当type为2时,才有该值
                    "url": "/storage/users/1/I1qklz.jpeg"
                },
                "inspect": {           // 当type为3时才有此值
                    "name": "卫生"
                }
            }
        ]
    }
}
```


## 2.详情接口

- url:api.notice.info

-   请求参数

| 参数名       | 是否必须     | 参数类型  | 说明 |
| -------- |:----------:| -----:   | ----- |
| notice_id  | Yes      | int      | 主键ID|

- 响应数据

``` json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "notice": {
            "id": 7,
            "school_id": 1,
            "title": "xxxx",
            "content": "xxxx",
            "organization_id": 1,
            "image": "",
            "release_time": "2019-10-01 00:00:00",
            "note": "",
            "inspect_id": 1,
            "type": 3,
            "user_id": 1,
            "status": 1,
            "created_at": "2019-12-03 15:22:29",
            "notice_medias": [
                {
                    "url": "/storage/users/1/IVqXNl1JP7bYqklz.jpeg"
                },
                {
                    "url": "/storage/users/1/DJqmzh62smm8DOAi.jpeg"
                }
            ],
             "image_media": {   // 当type为2时,才有该值
                "url": "/storage/users/1/I1qklz.jpeg"
             },
            "inspect": {     // 当type为3时才有此值
                "name": "卫生"
            }
        }
    }
}

```
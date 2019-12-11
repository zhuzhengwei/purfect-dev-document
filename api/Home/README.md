# 首页接口

## 1.首页接口   
-  url: api//home/getHomePageInfo

-  请求数据

| 参数名   | 是否必须     | 参数类型 | 说明                   |
| -------- | :----------: | -----:   | -----:                 |
| pageNum  | NO           | int      | 分页条数 (首页展示5条) |

- 响应数据
``` json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "currentPage": 1,
        "lastPage": 1,
        "total": 7,
        "list": [
            {
                "id": 4,
                "type": 1,
                "title": "3",
                "tags": "",
                "time": "2019-12-11",
                "image": ""
            },
            {
                "id": 1,
                "type": 1,
                "title": "123",
                "tags": "",
                "time": "2019-12-03",
                "image": "/storage/users/1/IVqXqxNs4c1yJv3sKF4oAdw14NMyNl1JP7bYqklz.jpeg"
            }
        ],
        "school_name": "Gerhard Bins 大学",
        "school_logo": ""
    }
}

```
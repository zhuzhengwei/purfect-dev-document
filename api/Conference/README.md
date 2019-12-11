# 会议管理

## 1. 待完成

- URL: /api/conferences/unfinished

- 请求方式:get

- 请求数据

| 参数名  | 是否必须     | 参数类型  | 说明       |
| -------|:----------:| -----:   | -----:    |
| page   | Yes        | int      | 页码|

- 返回数据

``` json

{
    "code": 1000,
    "message": "OK",
    "data": {
        "currentPage": 1,
        "lastPage": 1,
        "total": 1,
        "list": [
            {
                "id": 5,
                "status": 2,   // 状态 0:未签到 1:已签到 2:已签退
                "begin": "14:34",  // 签到开始时间
                "end": "14:34",    // 签到结束时间
                "date": "2019-12-11", // 当天时间
                "conference": {
                    "title": "i81TPDQaKE",  // 标题
                    "from": "10:24",        // 会议开始时间
                    "to": "10:29",          // 会议结束时间
                    "room": {
                        "name": "Dr. Hilma Trantow MD"  // 参会地点
                    },
                    "user": {
                        "name": "Warren Jerde"  // 组织人
                    }
                }
            }
        ]
    }
}
```


## 2.已完成

- URL: /api/conferences/accomplish

- 请求方式:get

- 请求数据

| 参数名  | 是否必须     | 参数类型  | 说明       |
| -------|:----------:| -----:   | -----:    |
| page   | Yes        | int      | 页码|

- 返回数据

```json

{
    "code": 1000,
    "message": "OK",
    "data": {
        "currentPage": 1,
        "lastPage": 1,
        "total": 3,
        "list": [
            {
                "id": 4,
                "status": 0,
                "begin": "",
                "end": "",
                "date": "2019-12-11",
                "conference": {
                    "title": "2ybFvAiojs",
                    "from": "10:24",
                    "to": "10:29",
                    "room": {
                        "name": "Dr. Hilma Trantow MD"
                    },
                    "user": {
                        "name": "Warren Jerde"
                    }
                }
            }
        ]
    }
}

```


## 3. 自己创建的会议

- URL: /api/conferences/oneselfCreate

- 请求方式:get

- 请求数据

| 参数名  | 是否必须     | 参数类型  | 说明       |
| -------|:----------:| -----:   | -----:    |
| page   | Yes        | int      | 页码|

- 返回数据

``` json

{
    "code": 1000,
    "message": "OK",
    "data": {
        "currentPage": 1,
        "lastPage": 1,
        "total": 2,
        "list": [
            {
                "id": 1,
                "title": "SGgDIKxnTu",
                // 状态 0:未审核 1:审核  2:拒绝  3:等待开始 4:进行中 5:已结束
                "status": 5,  
                "from": "10:21",
                "to": "10:26",
                "date": "2019-12-11",
                "user": {
                    "name": "Breanna Hammes IV"
                },
                "room": {
                    "name": "Dr. Hilma Trantow MD"
                }
            }
        ]
    }
}
```

##  4.会议详情


- URL: /api/conferences/conference-info

- 请求方式:post

- 请求数据

| 参数名  | 是否必须     | 参数类型  | 说明       |
| -------|:----------:| -----:   | -----:    |
| id   | Yes        | int      | 会议ID|

- 返回数据


```json

{
    "code": 1000,
    "message": "OK",
    "data": {
        "conference": {
            "id": 4,
            "title": "2ybFvAiojs",
            "sign_out": 0,
            "from": "10:24",
            "to": "10:29",
            "video": 0,
            "remark": "",
            "status": 0,
            "created_at": "2019-12-11 10:24:00",
            "date": "2019-12-11",
            "user": {
                "name": "Warren Jerde"
            },
            "room": {
                "name": "Dr. Hilma Trantow MD"
            },
            "medias": [
                "http:\/\/www.teacher.com\/storage\/users\/1\/BhphjKoFvPkLAAChP5VTICtTdnYIWB1RLrZQ4kdu.jpeg"
            ]
        }
    }
}
```
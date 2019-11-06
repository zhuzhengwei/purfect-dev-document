# 设备接口

## 1.获取建筑接口   
-  url:school_manager/facility/getBuildingList

-  请求数据

| 参数名       | 是否必须     | 参数类型  | 说明       |
| --------    |:----------:| -----:   | -----:    |
| campus_id   | Yes        | int      | 学院ID|

- 响应数据
``` json
{
    "code": 1000,
    "message": "请求成功",
    "data": {
        "building": [
            {
                "id": 1,                // 建筑ID
                "campus_id": 246,       // 学院ID
                "name": "逸夫楼",        // 建筑名字
                "type": 1,
                "description": "123123" // 描述
            }
        ]
    }
}

```

## 2.获取教室接口
- url:school_manager/facility/getRoomList
-  请求数据

| 参数名       | 是否必须     | 参数类型  | 说明       |
| --------    |:----------:| -----:   | -----:    |
| building_id | Yes        | int      | 建筑ID|

- 响应数据
``` json
{
    "code": 1000,
    "message": "请求成功",
    "data": {
        "room": [
            {
                "id": 1,            // 教室ID
                "building_id": 1,   // 建筑ID
                "name": "101教室",   // 教室名字
                "type": 1,           
                "exam_seats": 30,   // 考试容纳的人数
                "seats": 1          // 教室容纳人数
            }
        ]
    }
}

```






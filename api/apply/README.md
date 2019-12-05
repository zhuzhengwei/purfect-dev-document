# 申请管理

## 1.申请类型列表

- 接口地址:api/students/applications-type


- 响应数据
```json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "type": [
            {
                "id": 1,
                "name": "请假",
                "media": {
                    "url": "\/storage\/users\/1\/IVqXqxNs4c1yJv3sKF4oAdw14NMyNl1JP7bYqklz.jpeg"
                }
            }
        ]
    }
}    
```


## 2.添加申请

- 接口地址:api/students/applications-create

- 请求数据

| 参数名   | 是否必须 | 参数类型  | 说明       |
| --------|:-------:| -----:   | -----:    |
| application['application_type_id'] | Yes | int   | 申请类型ID |
| application['reason'] | Yes | string   |申请理由  |
| application['census'] | Yes | int   |户口类型 1:农村 2:城市  |
| application['census'] | No | int   |户口类型 1:农村 2:城市  |
| application['family_population'] | No | int   |家庭人口  |
| application['general_income'] | No | int   |家庭月总收入  |
| application['per_capita_income'] | No | int   |人均收入  |
| application['income_source'] | No | int   |收入来源  |

- 响应数据

```json
{
    "code": 1000,
    "message": "申请成功",
    "data": {
        "application_type_id": 1,
        "reason": "括酒监特硷习辨垂膜隧察毯渤鞭惶朔汇吉芍勺",
        "census": 1,
        "family_population": 4,
        "general_income": 10000,
        "per_capita_income": 2000,
        "income_source": "打工",
        "user_id": 5,
        "school_id": 1,
        "grade_id": 1,
        "updated_at": "2019-11-26 11:29:27",
        "created_at": "2019-11-26 11:29:27",
        "id": 3
    }
}
```


## 3.用户申请列表

- 接口地址:api/students/applications-list

- 响应数据

```json

{
    "code": 1000,
    "message": "OK",
    "data": {
        "currentPage": 1,
        "lastPage": 1,
        "total": 3,
        "data": [
            {
                "id": 3,
                "created_at": "2019-11-26 11:29:27",
                "status": 0,
                "application_type": "请假"
            },
            {
                "id": 2,
                "created_at": "2019-11-26 10:32:43",
                "status": 0,
                "application_type": "请假"
            },
            {
                "id": 1,
                "created_at": "2019-11-26 10:31:28",
                "status": 1,
                "application_type": "请假"
            }
        ]
    }
}

```








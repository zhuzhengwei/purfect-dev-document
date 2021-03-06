# 选修课接口

## 1.学生选课列表
-  url: api/course/elective/list

-  请求数据

| 参数名    | 是否必须     | 参数类型 | 说明   |
| --------  | :----------: | -----:   | -----: |
| api_token | Yes          | string   |        |



- 响应数据
``` json
{
    "code": 1000,
    "message": "OK",
    "data": [
        {
            "course_id": 9,
            "course_name": "测试课程123",
            "course_time": [
                {
                    "weeks": 1,
                    "time": 1,
                    "location": ""
                }
            ],
            "value": 1,
            "seats": 1,
            "applied": 1,
            "expired_at": ""
        },
        {
            "course_id": 10,
            "course_name": "测试课程222",
            "course_time": [
                {
                    "weeks": 1,
                    "time": 2,
                    "location": ""
                }
            ],
            "value": 1,
            "seats": 1,
            "applied": 1,
            "expired_at": ""
        }
    ]
}
```

## 2.选修课详情
-  url: api/course/elective/details

-  请求数据

| 参数名    | 是否必须     | 参数类型 | 说明   |
| --------  | :----------: | -----:   | -----: |
| api_token | Yes          | string   |        |
| course_id | Yes          | Int      |        |

-响应数据
```json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "course_name": "测试课程",
        "teacher_name": [
            {
                "name": "马文豪"
            }
        ],
        "value": 1,
        "seats": 1,
        "applied": 1,
        "schedules": [
            {
                "weeks": 1,
                "time": 1,
                "location": ""
            }
        ],
        "expired_at": "",
        "threshold": 1,
        "introduction": "123123"
    }
}
```

## 3.选修课报名
-  url: api/course/elective/enroll/35

-  请求数据

| 参数名    | 是否必须     | 参数类型 | 说明   |
| --------  | :----------: | -----:   | -----: |
| api_token | Yes          | string   |        |
| id | Yes          | Int      |   课程id 例如：35    |

-响应数据

```
{
	"code": 1000,
	"message": "OK",
	"data": {
		"course_id": "35",
		"teacher_id": 902,
		"user_id": 6,
		"school_id": 1,
		"updated_at": "2019-12-10 14:53:04",
		"created_at": "2019-12-10 14:53:04",
		"id": 1
	}
}
```

## 4.选修课报名结果
-  url: api/course/elective/getresult/35

-  请求数据

| 参数名    | 是否必须     | 参数类型 | 说明   |
| --------  | :----------: | -----:   | -----: |
| api_token | Yes          | string   |        |
| id | Yes          | Int      |   课程id 例如：35    |

-响应数据

```
{
	"code": 1000,
	"message": "OK",
	"data": {
		"id": 1,
		"course_id": 35,
		"teacher_id": 902,
		"user_id": 6,
		"status": 0,
		"created_at": "2019-12-10 14:53:04",
		"updated_at": "2019-12-10 14:53:04",
		"school_id": 1
	}
}
```

 - 响应值说明
 
 status '0 申请中、1 开班成功申请成功、 2 开班成功申请失败'
 
 ```
 {
	"code": 999,
	"message": "课程报名人数已满，您没有报名成功，请选择其它课程报名"
}

{
	"code": 999,
	"message": "课程不存在"
}



 ```


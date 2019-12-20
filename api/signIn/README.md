# 学生签到


## 1.课程签到统计接口

-  url: /api/attendance/sign-in-details

- 请求方式 : get

-  请求数据

| 参数名       | 是否必须     | 参数类型  | 说明 |
| -------- |:----------:| -----:   | ----- |
| year  | Not      | int      | 学年, 默认当前学年|
| term  | Not      | int      | 学期, 默认当前学期|

- 响应数据

``` json
{
    "code": 1000,
    "message": "OK",
    "data": [
        {
            "id": 1,
            "name": "一年级语文", // 课程名称
            "sign_num": 1,   // 签到次数
            "leaves_num": 0, // 请假次数
            "truant_num": 0  // 旷课次数
        },
        {
            "id": 8,
            "name": "数学",
            "sign_num": 0,
            "leaves_num": 0,
            "truant_num": 0
        }
    ]
}
```

## 2.课程签到详情

- url: /api/attendance/sign-in-details

- 请求方式 : post

- 请求数据

| 参数名       | 是否必须     | 参数类型  | 说明 |
| -------- |:----------:| -----:   | ----- |
| course_id| Yes      | int      | 课程ID|
| year  | Not      | int      | 学年, 默认当前学年|
| term  | Not      | int      | 学期, 默认当前学期|

- 响应数据

``` json
{
    "code": 1000,
    "message": "OK",
    "data": [
        {
            "mold": 1, // 1:签到  2:请假  3:旷课
            "time_slots": "第一节课",
            "weekday_index": 7,  //星期
            "data": "2019-12-19",
            "time": "20:50"
        },
        {
            "mold": 2,
            "time_slots": "第四节课",
            "weekday_index": 3,
            "data": "2019-12-20",
            "time": "10:07"
        }
    ]
}
```

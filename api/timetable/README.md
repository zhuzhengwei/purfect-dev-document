# 学生端的课程表接口

## 学生端获取当天或者当前周的课程表

根据当前登陆用户, 当前的调用时间, 获取当前用户当天的课程表

- url: /api/timetable/load-by-student

-  请求数据

| 参数名       | 是否必须     | 参数类型  | 说明 |
| -------- |:----------:| -----:   | ----- |
| student  | YES      | string      | 必填: 值为任意非空值 |
| type  | YES      | string      | 必填: daily 表示获取当天的, weekly 表示获取一周的 |
| week  | NO      | int      | 可选参数: 加载周课程表时使用, 学校校历周的周序号, 例如 1, 表示获取当前学期第一周的课程表. 如不提供, 则默认为当前周 |
| day  | NO      | int      | 可选参数: 加载当天课程表时使用. 周天序号, 例如 1, 表示周一. 如不提供, 则默认为当天 |

- 响应数据
    - 作息时间安排 timeSlots: 表示了当前的作息时间安排
    - 课程表 timetable: 每个当前安排的时间段对应的课程
    - 当前数据: 表示当前的数据的基本信息:

``` json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "timetable": [
            [
                "", // 没有安排课
                {
                    "course": "挖掘机高级1",
                    "teacher": "张老师",
                    "teacher_id": 469,
                    "building": "教学一楼",
                    "room": "1-101",
                    "room_id": 1,
                    "id": 2,
                    "published": true,
                    "repeat_unit": 1,
                    "optional": false,
                    "weekday_index": 1,
                    "time_slot_id": 16,
                    "specials": ""
                },
                {
                    "course": "挖掘机高级1",
                    "teacher": "张老师",
                    "teacher_id": 469,
                    "building": "教学一楼",
                    "room": "1-101",
                    "room_id": 1,
                    "id": 2,
                    "published": true,
                    "repeat_unit": 1,
                    "optional": false,
                    "weekday_index": 1,
                    "time_slot_id": 17,
                    "specials": ""
                }
            ]
        ],
        "timeSlots":[
            {
                "id": 15,
                "current": 1, // 当前正在上课
                "school_id": 1,
                "type": 3,
                "from": "07:30:00",
                "to": "08:00:00",
                "name": "早自习",
                "created_at": "2019-11-18 11:31:52",
                "updated_at": "2019-11-23 03:32:25",
                "deleted_at": null
            },
            {
                "id": 16,
                "current": 0,   // 不是当前正在上的课
                "school_id": 1,
                "type": 1,
                "from": "08:00:00",
                "to": "08:45:00",
                "name": "第一节课",
                "created_at": "2019-11-18 11:31:52",
                "updated_at": "2019-11-18 11:31:52",
                "deleted_at": null
            },
            ... // 作息时间安排的其他字段
        ],
        "current": {
            "date": "2019-12-13",      // 请求的是哪一天的, 与发送的请求中的 day 相同, 如果请求中未提供, 则为今天
            "lesson":{},               // 目前正在上的课程
            "weekday": "1",            // 星期一
            "calendarWeekIndex": "3"   // 校历周的第三周; 与发送的请求中的 week 相同, 如果请求中未提供, 则为今天所在的校历周
        }
    }
}
```
# 学生课程表 h5 页面的入口

/h5/timetable/student/view?api_token=6385fe01-f69c-4876-89ed-34f4978ff3a8&type=daily&day=2019-12-18&student=1

网址 URL 的参数说明:

- 必须提供的参数: api_token 值为学生的 token
- 必须提供的参数: student 值为 1
- 选填字段: type 表示是加载当天的课表还是一周的, 值为 daily 表示加载某天的; 值为 week 表示获取一周的. 默认值为 daily, 取当天的
- 选填字段: day 表示准备加载哪一天的课表, 不填写时表示加载今天的

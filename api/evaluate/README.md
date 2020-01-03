# 评教模块

## 1.判断是否开启评教模块

- url:/api/evaluate/record/isEvaluate

- 请求方式:get

- 响应数据

``` json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "status": true,
        "evaluate": {
            "year": 2019,
            "type": 1
        }
    }
}
```

## 2.评价教师列表

- url:/api/evaluate/record/teacher-list

- 请求方式:post

- 请求数据

| 参数名   | 是否必须     | 参数类型 | 说明   |
| -------- | :----------: | -----:   | -----: |
| student[year]    | Yes          | int      |  学年    |
| student[type]    | Yes          | int      |  学期    |


- 响应数据

``` json
{
    "code": 1000,
    "message": "OK",
    "data": [
        {
            "evaluate_teacher_id": 2,
            "name": "赵永全"
        }
    ]
}
```


## 3.模版数据

- url:/api/evaluate/record/template

- 请求方式:get

- 响应数据

```json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "currentPage": 1,
        "lastPage": 1,
        "total": 2,
        "list": [
            {
                "id": 2,
                "school_id": 1,
                "title": "老师的普通话是否标准",
                "score": 10,
                "type": 1,
                "created_at": "2020-01-02 19:17:11"
            }
        ]
    }
}
```

## 4.学生评价老师
- url: /api/evaluate/record/crete

- 请求方式:post

- 请求参数

| 参数名   | 是否必须     | 参数类型 | 说明   |
| -------- | :----------: | -----:   | -----: |
| evaluate[evaluate_teacher_id]    | Yes      | int      |     评价老师列表id   |
| evaluate[record][key][evaluate_id]    | Yes      | int      |    题目ID   |
| evaluate[record][key][score]    | Yes      | int      |    分数   |
| evaluate[desc]    | No      | string      |     描述   |



- 响应数据
```json
{
    "code": 1000,
    "message": "评教成功",
    "data": []
}
```

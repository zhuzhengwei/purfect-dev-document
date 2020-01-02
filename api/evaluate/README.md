# 评教模块

##  1.学生评价老师
- 地址: /api/evaluate/record/crete

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
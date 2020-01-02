# 评学

## 1.获取班级列表  
-  url: /teacher/evaluation/grade-list

-  请求数据

| 参数名   | 是否必须     | 参数类型 | 说明   |
| -------- | :----------: | -----:   | -----: |
| token    | Yes          | int      |        |

- 响应数据
``` json
{
    "code": 1000,
    "message": "OK",
    "data": [
        {
            "grade_id": 50,    
            "name": "19护理1班"
        },
        {
            "grade_id": 51,
            "name": "19护理2班"
        }
    ]
}
```

## 2.获取学生  
-  url: /teacher/evaluation/grade-student

-  请求数据

| 参数名   | 是否必须     | 参数类型 | 说明   |
| -------- | :----------: | -----:   | -----: |
| grade_id | Yes          | int      | 班级ID |

- 响应数据
``` json
{
    "code": 1000,
    "message": "OK",
    "data": [
        {
            "user_id": 170592,
            "name": "何宝云"
        },
        {
            "user_id": 170604,
            "name": "刘吴霞"
        },
        {
            "user_id": 170603,
            "name": "刘璐"
        },
    ]
}

```

## 3.获取评价模板
-  url: /teacher/evaluation/template

-  请求数据

| 参数名   | 是否必须     | 参数类型 | 说明   |
| -------- | :----------: | -----:   | -----: |
| token    | Yes          | int      |        |

- 响应数据
``` json
{
    "code": 1000,
    "message": "OK",
    "data": [
        {
            "evaluate_id": 1,  // 评价模板ID
            "score": 10,       // 分数
            "title": "上课认真听讲" 
        },
        {
            "evaluate_id": 2,
            "score": 10,
            "title": "道德品质"
        },
        {
            "evaluate_id": 3,
            "score": 10,
            "title": "公民素养"
        },
        {
            "evaluate_id": 4,
            "score": 10,
            "title": "学习态度"
        },
        {
            "evaluate_id": 5,
            "score": 10,
            "title": "学习能力"
        },
        {
            "evaluate_id": 6,
            "score": 10,
            "title": "合作能力与交流"
        }
    ]
}
```

## 4.评价学生
-  url: /teacher/evaluation/student

-  请求数据

| 参数名            | 是否必须     | 参数类型 | 说明       |
| --------          | :----------: | -----:   | -----:     |


- 响应数据
``` json
{
    "code": 1000,
    "message": "评价成功",
    "data": []
}
```


# 教材接口

## 1.添加或编辑教材   
-  接口地址: school_manager.textbook.save

    
-  请求数据

school_id 默认是从session中获取

-  请求数据

| 参数名       | 是否必须 | 参数类型  | 说明       |
| --------    |:-------:| -----:   | -----:    |
| id          | NO      | string   | id有值时是修改,没有是新增 |
| name        | Yes     | string   | 教材名称  |
| press       | No      | string   | 出版社    |
| author      | No      | string   | 作者      |
| edition     | No      | string   | 版本      |
| course_id   | Yes     | int      | 课程ID    |
| type        | No      | int      | 教材类型   |
| purchase_price| No    | float    | 采购价     |
| price       | No      | float    | 学生购买价  |
| introduce   | No      | string   | 教材介绍   |


- 响应数据
```json

{
    "code": 1000,
    "message": "创建成功",
    "data": []
}

```

## 2.查询某专业的教材采购情况

-  接口地址: school_manager.textbook.loadMajorTextbook

-  请求数据

school_id 默认是从session中获取

| 参数名       | 是否必须 | 参数类型  | 说明       |
| --------    |:-------:| -----:   | -----:    |
| major_id    | Yes     | int      | 专业ID  |


- 响应数据

- 根据type值判断老生还是新生 0:老生  1:新生

``` json
{
    "code": 1000,
    "message": "OK",
    "data": [
         "major_textbook" => [
                {
                    "id": 3,                      // 课程ID
                    "code": "1234",               // 课程编号
                    "name": "语文",                // 课程名称
                    "year": 4,                    // 年级 
                    "term": 1,                    // 学期
                    "textbooks": [                // 教材
                        {
                            "id": 4,              // 教材ID
                            "name": "语文",        // 教材名称
                            "press": "新华出版社",  // 出版社
                            "author": "三毛",      // 作者
                            "course_id": 3,       // 课程ID
                            "purchase_price": 80, // 采购价
                            "price": 100,         // 学生购买价
                        }
                    ],
                    "type": 0,                    // 当type为0时表示在校老生
                    "textbook_num": 10            // 教材购买数量
                },
                {
                "id": 7,
                "code": "1111",
                "name": "画画",
                "year": 1,
                "term": 1,
                "textbooks": [
                    {
                        "id": 3,
                        "name": "画画",
                        "press": "新华出版社",
                        "author": "三毛",
                        "course_id": 7,
                        "purchase_price": 80,
                        "price": 100
                    }
                ],
                "type": 1,     // 当type为1时,表示即将入学的新生
                "textbook_num": {
                    "general_plan_seat": 50,       // 计划统招人数
                    "self_plan_seat": 100,         // 计划自招人数
                    "total_plan_seat": 150,        // 计划总共招生人数
                    "general_informatics_seat": 1, // 统招报名人数
                    "self_informatics_seat": 0,    // 自招报名人数
                    "total_informatics_seat": 1    // 总共报名人数
                }
            }

         ]
    ]
}


```






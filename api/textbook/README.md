# 教材接口

## 1.添加或编辑教材   
-  接口地址: teacher.textbook.save

    
-  请求数据

school_id 默认是从session中获取

-  请求数据

| 参数名              | 是否必须 | 参数类型  | 说明       |
| --------           |:-------:| -----:   | -----:    |
| textbook['id']     | NO      | string   | id有值时是修改,没有是新增 |
| textbook['name']   | Yes     | string   | 教材名称  |
| textbook['press']  | No      | string   | 出版社    |
| textbook['author'] | No      | string   | 作者      |
| textbook['edition']| No      | string   | 版本      |
| textbook['course_id']| Yes     | int      | 课程ID    |
| textbook['type']   | No      | int      | 教材类型   |
| textbook['purchase_price']|No| float    | 采购价     |
| textbook['price']    | No      | float    | 学生购买价  |
| textbook['introduce']| No      | string   | 教材介绍   |


- 响应数据
```json

{
    "code": 1000,
    "message": "创建成功",
    "data": []
}

```

## 2.查询某专业的教材采购情况

-  接口地址: teacher.textbook.loadMajorTextbook

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
         "major_textbook":[
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

## 3.教材列表

- 接口地址:school_manager.textbook.list

- 没有请求参数
school_id 默认是从session中获取

- 响应数据

``` json
{
	"code": 1000,
	"message": "OK",
	"data": {
		"textbook": [{  
			"id": 1,                             
			"name": "数学",                          // 教材名称
			"press": "新华出版社",                    // 出版社
			"author": "",                           // 作者
			"edition": "1",                         // 版本
			"course_id": 4,                         // 课程ID
			"school_id": 50,                        // 学校ID
			"type": "专业教材",                      // 教材类型
			"purchase_price": 80.01,                // 采购价
			"price": 100,                           // 学生购买价
			"introduce": "",                        // 教材介绍
			"created_at": "2019-11-06 12:00:49",    // 创建时间
			"course": {                             // 课程
				"id": 4,         
				"code": "111",                      // 课程编号
				"name": "数学",                      // 课程名称
				"scores": 10,                       // 学分
				"year": 2,                          // 年级
				"term": 1,                          // 学期
				"optional": false                   // 选修  必修
			}
		}]
	}
}
```

## 4.查询某班教材采购情况

- 接口地址: teacher.textbook.loadGradeTextbook

- 请求数据

| 参数名       | 是否必须 | 参数类型  | 说明    |
| --------    |:-------:| -----:   | -----: |
| grade_id    | Yes     | int      | 班级ID  |


- 响应数据  

``` json

{
    "code": 1000,
    "message": "OK",
    "data": [
        {
            "id": 3,                          // 课程ID
            "code": "1234",                   // 课程编号
            "name": "语文",                    // 课程名称
            "year": 2,                        // 年级
            "term": 1,                        // 学期
            "textbook_num": 5,                // 教材数量
            "textbooks": [
                {
                    "id": 1,                     // 教材ID
                    "name": "GA09j8jNsEVHYqzA",  // 教材名称
                    "press": "新华出版社",         // 出版社
                    "author": "三毛",             // 作者
                    "course_id": 3,              // 课程ID
                    "purchase_price": 80,        // 采购价
                    "price": 100                 // 学生价
                }
            ]
        }
    ]
}

```


- 下载班级教材列表

- 接口地址:teacher.textbook.gradeTextbookDownload

- 请求数据

| 参数名       | 是否必须 | 参数类型  | 说明    |
| --------    |:-------:| -----:   | -----: |
| grade_id    | Yes     | int      | 班级ID  |
| download_type| No  |  string| csv/excel/ |



## 5.获取校区下的教材采购情况

- 接口地址: school_manager.textbook.loadCampusTextbook

- 请求数据

| 参数名       | 是否必须 | 参数类型  | 说明    |
| --------    |:-------:| -----:   | -----: |
| campus_id   | Yes     | int      | 班级ID  |


- 响应数据

根据type值判断老生还是新生 0:老生 1:新生

```json

 {
          "code": 1000,
          "message": "OK",
          "data": [
              {
                  "id": 34,             
                  "school_id": 1,       // 学校ID
                  "major_id": 17,       // 专业ID
                  "major_name": "Alena Upton PhD 专业",  // 专业名称
                  "course_id": 1,       // 课程ID
                  "course_code": "一",  // 课程编号
                  "course_name": "一年级语文",  // 课程名称
                  "course": {                 // 课程
                      "id": 1,                // 课程ID
                      "school_id": 1,         // 学校ID
                      "uuid": "a7fe9fb6-9df0-4147-8bf4-33a5a72c1cb3",
                      "code": "一",           // 课程编号
                      "name": "一年级语文",    // 课程名称 
                      "scores": 10,          // 学分
                      "optional": false,     
                      "year": 1,             // 年级
                      "term": 1,             // 学期
                      "desc": "qwdwweq",     // 描述
                      "created_at": "2019-11-08 09:26:29",
                      "updated_at": "2019-11-08 16:33:19",
                      "textbooks": [         // 教材
                          {
                              "id": 1,       // 教材ID
                              "name": "49UBEmycybDCaUFj",    // 教材名称
                              "press": "新华出版社",           // 出版社
                              "author": "三毛",               // 作者
                              "course_id": 1,                // 课程ID
                              "purchase_price": 80,          // 采购价
                              "price": 100                   // 学生购买价
                          }
                      ]
                  },
                  "type": 1,            // type 为1 表示新入学学生购买的教材 为0表示老生
                  "textbook_num": {           // 教程购买数量
                      "general_plan_seat": 0,         // 计划统招人数
                      "self_plan_seat": 0,            // 计划自招人数
                      "total_plan_seat": 0,           // 计划总共招生人数
                      "general_informatics_seat": 0,  // 统招报名人数
                      "self_informatics_seat": 0,     // 自招报名人数
                      "total_informatics_seat": 0     // 总共报名人数
                  }
              }
          ]
      }

```

- 下载校区教材列表

- 接口地址:school_manager.textbook.gradeTextbookDownload

- 请求数据

| 参数名       | 是否必须 | 参数类型  | 说明    |
| --------    |:-------:| -----:   | -----: |
| campus_id    | Yes     | int      | 校区ID  |
| download_type| No  |  string| csv/excel/ |




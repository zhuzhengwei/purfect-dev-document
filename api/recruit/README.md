# 报名管理

## 学生报名
### 1.报名接口
#### 接口地址 : api/student-register/submit-form

此接口的目的, 是为让系统保存学生的报名表单

#### 1: 请求参数

| 参数名              | 是否必须        | 参数类型 | 说明
| -------------       | :-------------: | -----:   | -----:
| version             | Yes             | string   | 版本号
| form                | Yes             | Object   | 用户的 profile 数据, 字段名与数据库名完全相同. ID 为空表示新学生, ID 不为空表示该 profile 已经存在
| major_id            | Yes             | string   | 用户报名的专业的 ID
| school_id           | Yes             | string   | 用户报名的学校的 ID
| recruitment_plan_id | Yes             | string   | 招生计划的 ID


#### 响应数据: json 格式

```json
{
    "code": 1000,
    "message": "报名成功",
    "data": []
}
```


## 专业列表
#### 接口地址 : /api/student-register/load-open-majors

此接口的目的, 是为让系统保存学生的报名表单

#### 1: 请求参数

| 参数名         | 是否必须        | 参数类型 | 说明                           |
| ------------- | :-------------: | -----:   | -----:                         |
| version       | Yes             | String   | 表示当前呼叫方的版本号         |
| mobile        | No              | String   | 当前用户的手机号码, 可以为空   |
| id_number     | NO              | String   | 当前用户的身份证号码, 可以为空 |
| school_id     | Yes              | String   |学校ID |



#### 响应数据: json 格式

```json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "majors": [
            {
                "id": 1,
                "name": "Holly Ledner 专业",
                "fee": 10000,
                "period": 3,
                "seats": 100,
                "enrolled": 0,
                "applied": 0,
                "status": 1
            },
            {
                "id": 2,
                "name": "Dianna Thiel 专业",
                "fee": 0,
                "period": 3,
                "seats": 100,
                "enrolled": 0,
                "applied": 0,
                "status": 0
            },
        ]
    }
}
```
## 获取专业的详情信息
#### 接口地址 : /api/student-register/load-open-majors

获取专业的详情信息 

#### 1: 请求参数

| 参数名        | 是否必须        | 参数类型 | 说明                   |
| ------------- | :-------------: | -----:   | -----:              |
| version       | Yes             | String   | 表示当前呼叫方的版本号 |
| id            | yes             | String   | 请求加载的专业的 ID    |



#### 响应数据: json 格式

```json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "major": {
            "id": 2,
            "seats": 100,
            "enrolled": 0,
            "applied": 0,
            "name": "Dianna Thiel 专业",
            "fee": 0,
            "period": 3,
            "description": "Reiciendis aut adipisci consequatur quia quisquam. Dicta error aut eum nesciunt ipsum sed id necessitatibus. Nam soluta quisquam molestiae maxime quasi quo. Expedita quam ducimus voluptatem exercitationem."
        }
    }
}
```

## 辅助用户填写信息
#### 接口地址 : /api/student-register/load-open-majors

此接口的目的, 是为了可以自动的帮助用户填充报名表单数据. 同时也用来查询自己的已报名课程

#### 1: 请求参数
| 参数名       | 是否必须          | 参数类型  | 说明  |
| ------------- |:-------------:| -----:| -----:|
| version     | Yes | String | 表示当前呼叫方的版本号 |
| mobile      |  No      |   String | 当前用户的手机号码, 可以为空 |
| id_number   | NO     |    String | 当前用户的身份证号码, 可以为空 |



#### 响应数据: json 格式

```json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "profile": {
            "id": 168315,
            "name": "Pattie Feest",
            "mobile": "33335567",
            "email": "",
            "id_number": "201928128038509",
            "gender": 1,
            "nation_name": "叶赫那拉氏",
            "political_name": "党员",
            "source_place": "北京",
            "country": "北京",
            "birthday": "2019-11-01 00:00:00",
            "qq": "",
            "wx": "",
            "parent_name": "帕菲特",
            "parent_mobile": "99997751",
            "examination_score": ""
        },
        "applied": [
            {
                "id": 1,
                "status": 3,
                "relocation_allowed": 2,
                "name": "Holly Ledner 专业"
            }
        ]
    }
}
```

## 报名列表(后台管理)
#### 接口地址 : school_manager.registration.list

#### 1: 请求参数

| 参数名        | 是否必须        | 参数类型 | 说明
| ------------- | :-------------: | -----:   | -----:
| time          | NO              | array    | tiem数组用于时间查询 created_at 开始时间 , end_time 结束时间
| major         | NO              | int      | 专业ID
| name          | NO              | string   | 用户名字
| status        | NO              | string   | 状态
| sort          | NO              | string   | 用于 调剂的排序 (desc , asc)


#### 响应数据: json 格式

```json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 54,
                "user_id": 168390,
                "name": "123",
                "school_id": 1,
                "major_id": 1,
                "relocation_allowed": 1,
                "status": 1,
                "student_profile": {
                    "user_id": 168390,
                    "gender": 1,
                    "nation_name": "",
                    "political_name": "",
                    "source_place": "",
                    "parent_name": "帕菲特",
                    "parent_mobile": "110",
                    "birthday": ""
                },
                "school": {
                    "id": 1,
                    "name": "Gregoria Reinger 大学"
                },
                "major": {
                    "id": 1,
                    "name": "Holly Ledner 专业"
                }
            }
        ]
    }
}
```

## 报名详情(后台管理)
#### 接口地址 : school_manager.registration.details

#### 1: 请求参数

| 参数名        | 是否必须        | 参数类型 | 说明
| ------------- | :-------------: | -----:   | -----:
| id            | YES             | int      | 报名ID


#### 响应数据: json 格式

```json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "id": 1,
        "user_id": 168315,
        "name": "Pattie Feest",
        "school_id": 1,
        "major_id": 1,
        "relocation_allowed": 2,
        "status": 3,
        "note": "",
        "created_at": "2019-11-04 16:37:47",
        "user": {
            "id": 168315,
            "mobile": "33335567",
            "email": ""
        },
        "student_profile": {
            "user_id": 168315,
            "gender": 1,
            "nation_name": "叶赫那拉氏",
            "political_name": "党员",
            "source_place": "北京",
            "parent_name": "帕菲特",
            "parent_mobile": "99997751",
            "birthday": "2019-11-01 00:00:00",
            "id_number": "201928128038509",
            "country": "北京",
            "qq": "",
            "wx": "",
            "state": "北京",
            "city": "北京市",
            "area": "朝阳区",
            "examination_score": "",
            "detailed_address": ""
        },
        "school": {
            "id": 1,
            "name": "Gregoria Reinger 大学"
        },
        "major": {
            "id": 1,
            "name": "Holly Ledner 专业"
        }
    }
}
```

## 报名审核(后台管理)
#### 接口地址 : school_manager.registration.examine

#### 1: 请求参数

| 参数名        | 是否必须        | 参数类型 | 说明
| ------------- | :-------------: | -----: | -----:
| id            | YES             | int    | 报名ID
| data          | YES             | array  | key 是字段 val 是需要修改的内容 (备注: note, 专业 :major_id)

#### 响应数据: json 格式

```json
{
    "code": 1000,
    "message": "更新成功",
    "data": []
}
```

## 获取所有未分配的学生(后台管理)
#### 接口地址 : api.get.unassigned.grades

#### 1: 请求参数

无 (但是必须登录并且session中有学校的ID)

#### 响应数据: json 格式

```json
{
    "code": 1000,
    "message": "OK",
    "data": [
        {
            "major_id": 3,
            "user_id": 168005,
            "name": "Woodrow Crist"
        },
        {
            "major_id": 2,
            "user_id": 168007,
            "name": "Barbara Stanton"
        },
        {
            "major_id": 3,
            "user_id": 168027,
            "name": "Emmitt Nolan"
        }
    ]
}
```

## 给学生分配班级(后台管理)
#### 接口地址 : api.distribution.grades

#### 1: 请求参数

| 参数名        | 是否必须        | 参数类型 | 说明
| ------------- | :-------------: | -----:   | -----:
| user_id       | Yes             | int      | 用户ID
| name          | Yes             | string   | 用户名称
| grade_id      | Yes             | int      | 班级ID (多选也是,但是班级ID 是一样的)

考虑到会有多选的情况所以要生成二维数组

#### 请求参数示例:
```array
[
    ['user_id' => 1, 'name' => 'wenhao', 'grade_id' => '1'],
    ['user_id' => 2, 'name' => 'wenhao', 'grade_id' => '1'],
]
```

#### 响应数据: json 格式

```json
{
    "code": 1000,
    "message": "分配班级成功",
    "data": []
}

```
# 接口设计

## 获取系统预置步骤   
#### 接口地址 : teacher.get.preset.step

该接口用于生成自己学校的公文流程的所需数据

#### 1: 请求参数

无 (但是必须登录并且session中有学校的ID)

#### 响应数据: json 格式

```json
{
	"code": 1000,
	"message": "OK",
	"data": [
		{
			"id": 1,
			"name": "拟稿",
			"describe": "拟稿---描述",
			"level": "1"
		}, 
		{
			"id": 2,
			"name": "核稿",
			"describe": "核稿---描述",
			"level": "2"
		}, 
		{
			"id": 3,
			"name": "办公室主任核稿",
			"describe": "办公室主任核稿---描述",
			"level": "3"
		}
	]
}	
```



## 生成公文流程

#### 接口地址 : teacher.production.process

生成自己学校的公文流程

#### 1: 请求参数

| 参数名          | 是否必须         | 参数类型   | 说明
| -------------  | :-------------: | -----:    | -----:
| name       	 | Yes             | string    | 流程名称
| process_data   | Yes             | array 	   | process_data中 key是第几步骤  val是步骤的Id

#### 响应数据: json 格式

```json
{
    "code": 1000,
    "message": "流程添加成功",
    "data": []
}
```



## 获取该学校所有公文流程

#### 接口地址 : teacher.get.official.document

用于展示已生成的流程列表

#### 1: 请求参数

无 (但是必须登录并且session中有学校的ID)

#### 响应数据: json 格式

```json
{
    "code": 1000,
    "message": "OK",
    "data": [
        {
            "id": 1,
            "name": "流程名称"
        },
        {
            "id": 3,
            "name": "流程名称"
        }
        .....
    ]
}	
```



## 获取一条公文流程的详情

#### 接口地址 : teacher.get.one.process

用于展示已生成的流程列表

#### 1: 请求参数

| 参数名          | 是否必须         | 参数类型   | 说明
| -------------  | :-------------: | -----:    | -----:
| progress_id    | Yes             | string    | 流程ID

#### 响应数据: json 格式

```json
{
	"code": 1000,
	"message": "OK",
	"data": [{
		"id": 1,
		"preset_step_id": 1,
		"index": 1, // 步骤的顺序 正序排列
		"preset_step": {
			"id": 1,
			"name": "拟稿",  // 步骤名称
			"describe": "拟稿---描述"  // 步骤描述
		},
		"progress_steps_user": [{ // 流程中步骤的负责人 type 1表示审核人 2表示抄送人 此数组在没有负责人或者抄送人的时候为空
				"progress_steps_id": 1,   // 步骤ID
				"type": 1, 
				"name": "Sharon Greenfelder" 
			},
			{
				"progress_steps_id": 1,
				"type": 2,  
				"name": "Marguerite Corkery"
			},
			{
				"progress_steps_id": 1,
				"type": 1,
				"name": "Reuben Raynor"
			}
		]
	}.....]
}      	
```

## 获取步骤负责人 

#### 接口地址 :  (此接口王哥已完成请找他)

用于展示步骤负责人 (学校所有老师或者教工)

#### 1: 请求参数

无

#### 响应数据: json 格式

```json
{
    "code": 1000,
    "message": "",
    "data": []
}   	
```


## 添加步骤负责人

#### 接口地址 : teacher.add.step.user

用于展示已生成的流程列表

#### 1: 请求参数

| 参数名                         | 是否必须        | 参数类型 | 说明
| -------------                  | :-------------: | -----:   | -----:
| step_user['progress_steps_id'] | Yes             | array    | 步骤ID
| step_user['user_id']           | Yes             | array    | 用户ID 
| step_user['type']              | Yes             | array    | 类型 1审核人 2抄送人

#### 响应数据: json 格式

```json
{
    "code": 1000,
    "message": "添加步骤负责人成功",
    "data": []
}   	
```

## 修改步骤负责人

#### 接口地址 : teacher.add.step.user

用于展示已生成的流程列表

#### 1: 请求参数

| 参数名                         | 是否必须        | 参数类型 | 说明
| -------------                  | :-------------: | -----:   | -----:
| id                             | Yes             | int      | 步骤ID 
| step_user['user_id']           | Yes             | array    | 用户ID 
| step_user['type']              | Yes             | array    | 类型 1审核人 2抄送人

#### 响应数据: json 格式

```json
{
    "code": 1000,
    "message": "修改步骤负责人成功",
    "data": []
}   	
```

## 学生报名API
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


### 2.可以报名的专业列表
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
### 3.获取专业的详情信息
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

### 4.辅助用户填写信息接口
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

## 学生报名后台管理
### 1.报名列表
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

### 2.报名详情
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

### 2.报名审核
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


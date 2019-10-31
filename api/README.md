# 接口设计

## 获取系统预置步骤   
#### 接口地址 : teacher.get.preset.step

该接口用于,生成自己学校的公文流程的所需数据

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


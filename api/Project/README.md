# 项目管理

## 1.创建项目

- URL: /api/oa/create-project

- 请求方式:post

- 请求参数

| 参数名       | 是否必须     | 参数类型  | 说明       |
| --------    |:----------:| -----:   | -----:    |
| project[title] |Yes      | string      | 项目标题|
| project[content] |Yes      | string    | 项目内容|
| member[] |Yes      | array    | 项目成员|


- 响应数据

```json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "id": 5
    }
}
```

## 2.创建任务

- URL: /api/oa/create-project

- 请求方式: post

- 请求参数

| 参数名       | 是否必须     | 参数类型  | 说明       |
| --------    |:----------:| -----:   | -----:    |
| task[user_id] |No      | int      | 任务发起人,无userId默认为系统登陆者|
| task[title] |Yes      | string    | 任务标题|
| task[content] |Yes      | string    | 任务内容|
| task[project_id] |Yes      | int    | 项目ID|


- 响应数据

```json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "id": 5
    }
}
```

## 3.创建任务评论

- URL: /api/oa/create-discussion

- 请求方式:post

- 请求参数

| 参数名       | 是否必须     | 参数类型  | 说明       |
| --------    |:----------:| -----:   | -----:    |
| discussion[content] |Yes     | string | 评论内容|
| discussion[project_task_id] |Yes     | int | 任务ID|

- 响应数据 

```json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "id": 4
    }
}
```

## 4.项目列表

- URL: /api/oa/create-discussion

- 请求方式: get

- 响应数据

``` json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "currentPage": 1,
        "lastPage": 1,
        "total": 3,
        "list": [
            {
                "id": 5,
                "school_id": 1,
                "user_id": 10,
                "title": "玩儿不认同吧",
                "content": "才热我保护你吧二根特额外如果 v 而为",
                "status": 1,  // 1:正在进行  2:已结束
                "created_at": "2019-12-13 00:00:00"
            }
        ]
    }
}
```

## 5.任务列表

- URL: /api/oa/task-list

- 请求方式:get

- 请求参数

| 参数名       | 是否必须     | 参数类型  | 说明       |
| --------    |:----------:| -----:   | -----:    |
| project_id  |Yes     | int  | 项目ID|

- 响应数据

``` json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "currentPage": 1,
        "lastPage": 1,
        "total": 1,
        "list": [
            {
                "id": 3,
                "status": 1,  // 1:正在进行  2:已结束
                "project_id": 4,
                "user_id": 13,
                "title": "电饭煲 v 儿",
                "content": "测让我把二班呢人",
                "created_at": "2019-12-12 20:47:12",
                "user": {
                    "name": "Ms. Beulah Swaniawski"
                }
            }
        ]
    }
}
```

## 6.评论列表

- URL: /api/oa/discussion-list

- 请求方式: get

- 请求数据

| 参数名       | 是否必须     | 参数类型  | 说明       |
| --------    |:----------:| -----:   | -----:    |
| task_id  |Yes     | int  | 任务ID|

- 响应数据

```json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "discussion": [
            {
                "id": 2,
                "project_task_id": 3,
                "user_id": 14,
                "content": "擦身而过为 ",
                "created_at": "2019-12-12 18:26:53",
                "user": {
                    "name": "Prof. Monica Roberts I"
                }
            }
        ]
    }
}
```


## 7.项目详情

- URL: /api/oa/project-info

- 请求方式: get

- 请求数据

| 参数名       | 是否必须     | 参数类型  | 说明       |
| --------    |:----------:| -----:   | -----:    |
| project_id  |Yes     | int  | 项目ID|

- 响应数据

```json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "project": {
            "id": 4,
            "school_id": 1,
            "user_id": 10,
            "title": "玩儿不认同吧",
            "content": "才热我保护你吧二根特额外如果 v 而为",
            "status": 1,
            "created_at": "2019-12-12 00:00:00",
            "members": [
                {
                    "name": "Nia Crooks"
                },
                {
                    "name": "Ms. Beulah Swaniawski"
                }
            ]
        }
    }
}
```


## 8.编辑项目

- URL: /api/oa/update-project

- 请求方式: post

- 请求数据

| 参数名       | 是否必须     | 参数类型  | 说明       |
| --------    |:----------:| -----:   | -----:    |
| project[id]  |Yes     | int  | 项目id|
| project[title]  |Yes     | string  | 项目标题|
| project[content]  |Yes     | string  | 项目内容|

- 响应数据

```json
{
    "code": 1000,
    "message": "编辑成功",
    "data": []
}
```

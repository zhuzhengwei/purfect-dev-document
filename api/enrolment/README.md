# 迎新助手接口

##  1.创建系统迎新接口

- 接口地址：operator.enrolmentStep.create

- 请求参数

| 参数名    | 是否必须 | 参数类型  | 说明    |
| -------- |:-------:| -----:  | -----: |
| name     | Yes     | string  | 迎新名称  |

- 响应数据

``` json
{
    "code": 1000,
    "message": "创建成功",
    "data": {
        "name": "验证信息82",
        "id": 17
    }
}

```


## 2.系统迎新列表 
- 接口地址：api.enrolmentStep.getEnrolmentStepList

- 响应数据
```json

{
    "code": 1000,
    "message": "请求成功",
    "data": [
        {
            "id": 1,
            "name": "验证信息1"
        }
    ]
}

```

## 3.添加/修改 学校迎新流程接口

- 接口地址:api.schoolEnrolmentStep.saveEnrolment

- 请求参数

| 参数名    | 是否必须 | 参数类型  | 说明    |
| -------- |:-------:| -----:  | -----: |
| enrolment['id']    | NO     | int  | 没有新增，存在修改  |
| enrolment['name']     | Yes     | string  | 步骤名称  |
| enrolment['enrolment_step_id']| Yes | int  | 系统步骤ID  |
| enrolment['school_id']| Yes     | int      | 学校ID  |
| enrolment['campus_id']| Yes     | int      | 校区ID  |
| enrolment['describe'] | NO      | text     | 描述  |
| enrolment['sort']     | Yes     | int     | 序号  |
| enrolment['user_id']  | Yes     | int     | 负责人  |
| enrolment['assists']  | NO     | array     | 协助人 user_id  |
| enrolment['medias']  | NO     | array     | 文件 media_id  |
| enrolment['task'][key]['name']  | NO     | string     | 子类步骤名称  |
| enrolment['task'][key]['describe']  | NO     | string     | 描述  |
| enrolment['task'][key]['type']  | NO     | int     | 类型 0可选 1必须执行 默认为0  |


- 响应数据
```json

{
    "code": 1000,
    "message": "创建成功",
    "data": {
        "id": 17,
        "name": "佛泡暇骡凹",
        "enrolment_step_id": 1,
        "school_id": 1,
        "campus_id": 1,
        "describe": "杉戎滑毒磁仓孪纪痉拒懈抹",
        "sort": 5,
        "user_id": 10,
        "created_at": "2019-11-20 14:38:13"
    }
}

```


## 5.学校迎新步骤详情

- 接口地址:api.schoolEnrolmentStep.getEnrolmentInfo

- 请求参数

| 参数名    | 是否必须 | 参数类型  | 说明    |
| -------- |:-------:| -----:  | -----: |
| id     | Yes     | int  | 步骤ID  |


- 响应数据

```json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "id": 1,
        "name": "辽陷金僧概",
        "enrolment_step_id": 1,
        "school_id": 1,
        "campus_id": 1,
        "describe": "涎播骡赂蜕摆汰澜咕逗红铃亢吗嫌律丘仁嘲写帝",
        "sort": 2,
        "user_id": 10,
        "created_at": "2019-11-20 15:44:51",
        "user": {
            "id": 10,
            "uuid": "365ad7c6-19f1-4d77-8d19-2a721891a439",
            "name": "Warren Jerde",
            "mobile": "1000006"
        },
        "tasks": [
            {
                "id": 19,
                "school_enrolment_step_id": 1,
                "name": "莽湘空举匹",
                "describe": "婪瘸寇驳筐歼脑呵骄凹埔踞勺颅烧色放尉饺狗尝",
                "type": 1
            }
        ],
        "assists": [
            {
                "id": 61,
                "school_enrolment_step_id": 1,
                "user_id": 11,
                "user": {
                    "id": 11,
                    "uuid": "7e48ea92-ce5f-46fa-baac-ed1f50e4d8ea",
                    "name": "Stevie Grant",
                    "mobile": "1000007"
                }
            },
        ],
        "medias": [
            {
                "id": 20,
                "school_enrolment_step_id": 1,
                "media_id": 1,
                "media": {
                    "id": 1,
                    "file_name": "DSC_0363.JPG",
                    "keywords": "DSC_0363.JPG",
                    "url": "\/storage\/users\/1\/IVqXqxNs4c1yJv3sKF4oAdw14NMyNl1JP7bYqklz.jpeg"
                }
            }
        ]
    }
}

```


## 4.删除学校迎新步骤 接口

- 接口地址:api.schoolEnrolmentStep.deleteEnrolment

- 请求参数


| 参数名    | 是否必须 | 参数类型  | 说明    |
| -------- |:-------:| -----:  | -----: |
| id      | Yes     | int  | 迎新步骤ID  |

- 响应数据

```json
{
    "code": 1000,
    "message": "删除成功",
    "data": []
}

```


- 请求参数
 - 接口 /修改/删除
 - 根据当前步骤获取下一步流程信息 没有当前步骤默认返回第一步


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

## 4.学校迎新列表

- 接口地址:api.school-enrolment-step.step-list

- 请求参数

| 参数名    | 是否必须 | 参数类型  | 说明    |
| -------- |:-------:| -----:  | -----: |
| school_id| Yes   | int | 学校ID|
| campus_id| Yes   | int | 校区ID|

- 响应数据

```json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "enrolment": [
            {
                "id": 1,
                "name": "疵涂塘牌片",
                "enrolment_step_id": 1,
                "school_id": 1,
                "campus_id": 1,
                "describe": "肠每钾细驾时弥灵抚松逞梅胸汀残千险纹放龟校蹿拇鹅困箩劫骋纺攘镐凤婚顺采儡阶忿羚毖讽裸软告溪券跑醋集顿托稻钱鬼牌孙歼抬古拿洁谜毯湍导驼唾梨潞鲜离罚首轻行璃埃茎歧喜凯晶扫匿钩茅司刨萎颓师核稍孪扩讲蹄蔼秒跑",
                "sort": 1,
                "user_id": 10,
                "created_at": "2019-11-22 13:43:35"
            }
        ]
    }
}
```



## 5.学校迎新步骤详情

- 接口地址:api.schoolEnrolmentStep.getEnrolmentInfo

- 请求参数

| 参数名    | 是否必须 | 参数类型  | 说明    |
| -------- |:-------:| -----:  | -----: |
| id       | No       | int  | 迎新步骤当前ID，没有则默认第一步,step_type=0时,id不能为空 |
| step_type| Yes   | enum[0,1,2] | 0:查看详情，id不能为空,1:查看上一步,2:查看下一步 默认为0 |
| school_id| Yes   | int | 学校ID|
| campus_id| Yes   | int | 校区ID|


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
        "campus": {
            "name": "Anderson Ltd 校区"
        },
        "user": {
            "name": "Warren Jerde",
            "mobile": "1000006"
        },
        "tasks": [
            {
                "name": "莽湘空举匹",
                "describe": "婪瘸寇驳筐歼脑呵骄凹埔踞勺颅烧色放尉饺狗尝",
                "type": 1
            }
        ],
        "assists": [
            {
                "name": "Stevie Grant",
                "mobile": "1000007"
            }
        ],
        "medias": [
            {
                "url": "\/storage\/users\/1\/IVqXqxNs4c1yJv3sKF4oAdw14NMyNl1JP7bYqklz.jpeg"
            }
        ]
    }
}

```

## 6.更新步骤排序

- 接口地址:api.school-enrolment-step.update-sort

- 请求参数

| 参数名    | 是否必须 | 参数类型  | 说明    |
| -------- |:-------:| -----:  | -----: |
| enrolment[key]['id']| Yes     | int  | 迎新步骤ID  |
| enrolment[key]['sort']| Yes     | int  | 排序  |

- 响应格式

```json
{
    "code": 1000,
    "message": "更新成功",
    "data": []
}
```




## 7.删除学校迎新步骤 接口

- 接口地址:api.schoolEnrolmentStep.deleteEnrolment

- 请求参数

| 参数名    | 是否必须 | 参数类型  | 说明    |
| -------- |:-------:| -----:  | -----: |
| id       | Yes     | int  | 迎新步骤ID,批量删除以逗号拼接字符串 |



- 响应数据

```json
{
    "code": 1000,
    "message": "删除成功",
    "data": []
}

```


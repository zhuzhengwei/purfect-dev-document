# 用户接口

## 1.登录接口   
-  url: api/user/login

-  请求数据

| 参数名        | 是否必须     | 参数类型 | 说明        |
| --------      | :----------: | -----:   | -----:   |
| mobile        |  NO          | int      | 手机号    |
| password      |  NO          | string      | 密码     |
| id_number     |  NO          | string      | 身份证号     |
| type          |  NO          | int         | 登录类型 1手机号登录 2身份证号登录     |
| app_type      | Yes          | int         | APP版本 6:学生端 9:教师端    |
| platform      | NO           | string      | 手机平台 : 'ios','Android'|
| model         | NO           | string      | 手机型号 |
| device_number | NO           | string      | 设备号   |
| push_id       | NO           | string      | 推送ID   |
| version       | NO           | string      | APP版本  |


- 响应数据
``` json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "token": "f8608ace-710f-440e-9dc5-bea1ad78fb8c",
        "status": true  // true 身份已验证, false 未验证
    }
}
```

## 1.退出登录   
-  url: api/user/logout

-  请求数据

| 参数名        | 是否必须     | 参数类型 | 说明        |
| --------     | :----------: | -----:   | -----:   |
| token        | Yes          | int      |      |

- 响应数据
``` json
{
    "code": 1000,
    "message": "退出成功",
    "data": []
}
```

## 1.修改密码   
-  url: api/user/editUserPasswordInfo

-  请求数据

| 参数名       | 是否必须     | 参数类型 | 说明   |
| --------     | :----------: | -----:   | -----: |
| token        | Yes          | int      | token |
| password     | Yes          | string   | 旧密码 |
| new_password | Yes          | string   | 新密码 |



- 响应数据
``` json
{
	"code": 1000,
	"message": "密码修改成功,请重新登录",
	"data": []
}
```

## 1.忘记密码   
-  url: api/user/findUserPasswordInfo

-  请求数据

| 参数名       | 是否必须     | 参数类型 | 说明      |
| --------     | :----------: | -----:   | -----: |
| mobile        | Yes          | int      | 手机号 |
| password     | Yes          | string   | 新密码 |
| code 		   | Yes          | int   	 | 验证码 |
| type         | Yes          | int      |  忘记密码 传 2  |



- 响应数据
``` json
{
	"code": 1000,
	"message": "密码修改成功,请重新登录",
	"data": []
}
```

## 1.用户信息   
-  url: api/user/getUserInfo

-  请求数据

| 参数名       | 是否必须     | 参数类型 | 说明      |
| --------     | :----------: | -----:   | -----: |
| token        | Yes          | int      |  |



- 响应数据
``` json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "name": "Sandra Gerlach",
        "gender": 1,
        "birthday": "",
        "state": "石家庄",
        "city": "石家庄",
        "area": "石家庄",
        "school_name": "Gerhard Bins 大学",
        "institute": "cupiditate 学院",
        "department": "quos系",
        "major": "Gerhard Mills 专业",
        "year": 2018,
        "grade_name": "Mr. Leonel Jenkins DVM 专业"
    }
}
```

## 1.修改用户信息   
-  url: api/user/updateUserInfo

-  请求数据

| 参数名       | 是否必须     | 参数类型 | 说明   |
| --------     | :----------: | -----:   | -----: |
| token        | Yes          | int      |        |
| data[state]  | No           | string   | 省     |
| data[city]   | No           | string   | 市     |
| data[area]   | No           | string   | 区     |
| data[gender] | No           | string   | 性别   1:男 2:女|
| avatar       | No           | file     | 头像   |



- 响应数据
``` json
{
    "code": 1000,
    "message": "修改成功",
    "data": []
}
```

## 1.修改手机号   
-  url: api/user/updateUserMobileInfo

-  请求数据

| 参数名       | 是否必须     | 参数类型 | 说明      |
| --------     | :----------: | -----:   | -----: |
| mobile        | Yes          | int      | 手机号 |
| password     | Yes          | string   | 密码 |
| code         | Yes          | int      | 验证码 |
| type         | Yes          | int      |  修改手机号 传 3  |



- 响应数据
``` json
{
    "code": 1000,
    "message": "手机号修改成功,请重新登录",
    "data": []
}
```



## 1.手动签到   
-  url: api/manual/attendances

-  请求数据

| 参数名       | 是否必须     | 参数类型 | 说明   |
| --------     | :----------: | -----:   | -----: |
| token        | Yes          | int      |        |


- 响应数据
``` json
{
    "code": 1000,
    "message": "签到成功",
    "data": []
}
```


## 1.老师信息   
-  url: api/user/getTeacherInfo

-  请求数据

| 参数名       | 是否必须     | 参数类型 | 说明      |
| --------     | :----------: | -----:   | -----: |
| token        | Yes          | int      |  |



- 响应数据
``` json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "name": "童  萍",
        "avatar": "/assets/img/dp.jpg",
        "gender": 2,
        "birthday": "1985-07-18",
        "state": "",
        "city": "",
        "area": "",
        "school_name": "礼县职业中等专业学校",
        "organization": "",  // 用户所在机构的职务
        "gradeManger": "",   // 用户的班级
        "yearManger": "",    // 用户年级组长
        "myGroup": [         // 用户的小组
            {
                "name": "语文组",
                "isLeader": false  // 是否为组长
            }
        ],
        "institute": "",
        "department": "",
        "major": ""
    }
}
```


## 1.扫码获取个人信息   
-  url: api/QrCode/information

-  请求数据

| 参数名   | 是否必须     | 参数类型 | 说明   |
| -------- | :----------: | -----:   | -----: |
| token    | Yes          | int      |        |
| code     | Yes          | string   |        |


- 响应数据
``` json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "name": "安娜",
        "avatar": "http://teacher.test/assets/img/dp.jpg",
        "grade_name": "19护理1班",
        "school_name": "礼县职业中等专业学校"
    }
}
```

## 1.意见反馈

- url: api/user/proposal

-   请求参数

| 参数名   | 是否必须     | 参数类型 | 说明     |
| -------- | :----------: | -----:   | -----    |
| type     | Yes          | int      | 类型     |
| content  | Yes          | string   | 反馈内容 |
| image[0] | false        | array    | 图片    |

- 参数详解: type 类型说明
    - 1: 欢聚易堂
    - 2: 外卖
    - 3: 求职
    - 4: Wifi
    - 5: 课表
    - 6: 其他
    - 7: 课件
    - 8: 党建
    - 9: 办公
    - 10: 社区
    - 11: 认证


- 响应数据

``` json
{
    "code": 1000,
    "message": "反馈成功",
    "data": []
}
```
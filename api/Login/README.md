# 用户接口

## 1.登录接口   
-  url: api/user/login

-  请求数据

| 参数名        | 是否必须     | 参数类型 | 说明        |
| --------      | :----------: | -----:   | -----:   |
| mobile        | Yes          | int      | 手机号    |
| password      | Yes          | string      | 密码     |
| app_type      | Yes          | int         | APP版本 6:学生端 9:教师端    |
| platform      | NO           | string      | 手机平台 |
| model         | NO           | string      | 手机型号 |
| type          | NO           | string      | 设备类型 |
| device_number | NO           | string      | 设备号   |
| push_id       | NO           | string      | 推送ID   |
| version       | NO           | string      | APP版本  |


- 响应数据
``` json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "token": "xxxxxx"
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



- 响应数据
``` json
{
	"code": 1000,
	"message": "密码修改成功,请重新登录",
	"data": []
}
```



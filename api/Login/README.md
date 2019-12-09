# 登录接口

## 1.登录接口   
-  url: api/user/login

-  请求数据

| 参数名        | 是否必须     | 参数类型 | 说明        |
| --------      | :----------: | -----:   | -----:   |
| mobile        | Yes          | int      | 手机号    |
| password      | Yes          | string      | 密码     |
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
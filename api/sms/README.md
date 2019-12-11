# 发送短信

## 发送短信   

#### 接口地址 : api/campus/handleAffairs/getAddressBook/class



#### 1: 请求参数

| 参数名          | 是否必须         | 参数类型   | 说明
| -------------  | :-------------: | -----:    | -----:
| mobile       	 | Yes             | int       | 手机号
| type           | Yes             | int 	   | 类型

- type 可传值 :
- 0 注册
- 1 登录
- 2 忘记密码

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
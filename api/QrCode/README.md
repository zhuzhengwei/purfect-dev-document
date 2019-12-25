# 二维码

## 生成二维码

- 接口地址: api/QrCode/getQrCode

- 请求数据

| 参数名    | 是否必须  | 参数类型 | 说明      |
| -------- | :-------: | -----:   | -----: |

- 响应数据
```json
{
    "code": 1000,
    "message": "生成二维码",
    "data": {
        "code": "data:image/png;base64......" //移动端拿到之后需要base64解密 
    }
}   
```

## 2.创建二维码使用记录

- Url: api/code/create-record

- 请求方式: post

- 请求数据

| 参数名    | 是否必须  | 参数类型 | 说明      |
| -------- | :-------: | -----:   | -----: |
| code[facility_id]| Yes | int| 设备ID|
| code[type]| Yes | int| 类型 1:验证 2:支出|
| code[desc]| No | string| 描述|


- 响应数据

```json
{
    "code": 1000,
    "message": "创建成功",
    "data": {
        "id": 3
    }
}
```






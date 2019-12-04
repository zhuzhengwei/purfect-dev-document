# banner接口

## 获取banner

- 接口地址: api/banner/getBanner

- 请求数据

| 参数名   | 是否必须  | 参数类型 | 说明      |
| -------- | :-------: | -----:   | -----: |
| posit    | Yes       | int      | 位置    |

- 响应数据
```json
{
    "code": 1000,
    "message": "OK",
    "data": [
        {
            "id": 1,
            "type": 2,
            "title": "标题",
            "image_url": "图片URL"
        }
    ]
}   
```

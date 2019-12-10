#  省市区三级联动

## 1.省份列表

- url : api/location/get-provinces

- 请求方式 : get

- 返回数据

```json

{
    "code": 1000,
    "message": "OK",
    "data": {
        "provinces": [
            {
                "id": 110000,
                "name": "北京"
            }
        ]
    }
}

```


## 2.城市列表

- url : api/location/get-cities

- 请求方式 : post

- 请求数据 

| 参数名    | 是否必须 | 参数类型  | 说明       |
| -------  |:-------:| -----:   | -----:    |
| parent_id| Yes   | int   | 父级ID|

- 返回数据

```json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "cities": [
            {
                "id": 140800,
                "name": "运城市"
            }
        ]
   }
}
```

## 3. 区县列表

- url : api/location/get-districts

- 请求方式 : post

- 请求数据 

| 参数名    | 是否必须 | 参数类型  | 说明       |
| -------  |:-------:| -----:   | -----:    |
| parent_id| Yes   | int   | 父级ID|

- 返回数据

```json
{
    "code": 1000,
    "message": "OK",
    "data": {
        "districts": [
            {
                "id": 140802,
                "name": "盐湖区"
            }
        ]
   }
}
```

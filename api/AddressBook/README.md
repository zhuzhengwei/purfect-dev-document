# 电话簿

## 1.班级电话簿   
-  url: api/campus/handleAffairs/getAddressBook/class

-  请求数据

| 参数名   | 是否必须     | 参数类型 | 说明   |
| -------- | :----------: | -----:   | -----: |
| uuid     | Yes          | string   |        |

- 响应数据
``` json
{
  "code" : "1000",
  "data" : {
    "schoolmate_list" : [
      {
        "name" : "姓名",
        "tel" : "13205423608",
        "type" : "班长"
      },
      {
        "name" : "姓名",
        "tel" : "电话号",
        "type" : ""
      }
    ],
    "teacher_list" : [
      {
        "name" : "姓名",
        "tel" : "13205423608",
        "type" : "班主任"
      }
    ]
  },
  "message" : "获取通讯录班级数据"
}
```


## 1.学校部门电话簿   
-  url: api/campus/handleAffairs/getAddressBook/class

-  请求数据

| 参数名   | 是否必须       | 参数类型 | 说明      |
| -------- | :----------: | -----:   | -----: |
| uuid     | Yes          | string   |        |

- 响应数据
``` json
{
    "code": "1000",
    "data": {
        "department_list": [
            {
                "name": "办公室",
                "tel": "010-54567478"
            },
            {
                "name": "办公室",
                "tel": "010-54567478"
            }
        ]
    },
    "message": "获取通讯录办公室数据"
}
```
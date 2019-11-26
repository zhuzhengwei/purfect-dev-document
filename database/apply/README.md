# 申请管理

## 1.申请类型表

- application_types

| 字段名  | 类型  | 长度  | 不是NULL |  描述   |
| ----   |:-----:| -----:   | -----: | -----:|
| ID     | int  | 11    |  YES      |  主键ID |
| name   | varchar| 20  |  YES      |  类型名称 |
| school_id | int| 11  |  YES      |  学校ID |


## 2.申请内容表

- applications 

| 字段名  | 类型  | 长度  | 不是NULL |  描述   |
| ----   |:-----:| -----:   | -----: | -----:|
| ID     | int  | 11    |  YES      |  主键ID |
| user_id| int  | 11    |  YES      |  用户ID |
| school_id| int  | 11    |  YES      |  学校ID |
| application_id| int  | 11    |  YES      |  申请类型 |
| reason  | text  | 0    |  YES      |  申请理由 |
| census  | tinyint  | 3    |  NO      |  户口类型 1:农村 2:城市 |
| family_population  | tinyint  | 3    |  NO      |  家庭人口 |
| general_income  | int  | 7    |  NO      |  家庭月总收入 |
| per_capita_income  | int  | 7    |  NO      |  人均月收入 |
| income_source  | varchar  | 20    |  NO      |  收入来源 |
| status| tinyint  | 3    |  YES      |  状态 |
| last_update_by| int  | 11    |  NO      |  审核人 |
| created_at| date  |  0   |  YES      |  创建时间 |
| updated_at| date  |  0   |  YES      |  编辑时间 |


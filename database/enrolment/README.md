# 迎新助手表设计

## 系统预设步骤表  

   - enrolment_steps

| 字段名  | 类型  | 长度  | 不是NULL |  描述   |
| ----   |:-----:| -----:   | -----: | -----:|
| ID     | int  | 11    |  YES      |  主键ID |
| name   | varchar| 100    |  YES   |  名称 |


## 学校迎新步骤表  

   - school_enrolment_steps
   
| 字段名  | 类型  | 长度  | 不是NULL |  描述   |
| ----   |:-----:| -----:   | -----: | -----:|
| ID     | int  | 11    |  YES      |  主键ID |
| name   | varchar| 80    |  YES   |  步骤名称 |
| enrolment_step_id| int| 11    |  YES   |  系统步骤ID |
| school_id| int| 11    |  YES   |  学校ID |
| campus_id| int| 11    |  YES   |  校区ID |
| describe| text|     |  NO   |  描述 |
| sort  | smallint| 5 |  YES   |  序号 |
| user_id  | int|11 |  YES   |  负责人 user_id  |


## 学校迎新步骤协助人关联表
    
   - school_enrolment_step_assists
   
| 字段名  | 类型  | 长度  | 不是NULL |  描述   |
| ----   |:-----:| -----:   | -----: | -----:|
| ID     | int  | 11    |  YES      |  主键ID |
| school_enrolment_step_id| int| 11    |  YES   |  迎新步骤ID |
| user_id | int  | 11    |  YES      |  用户ID |

## 学校迎新媒体关联表

   - school_enrolment_step_medias
   
| 字段名  | 类型  | 长度  | 不是NULL |  描述   |
| ----   |:-----:| -----:   | -----: | -----:|
| ID     | int  | 11    |  YES      |  主键ID |
| school_enrolment_step_id| int| 11    |  YES   | 迎新步骤ID |
| media_id  | int|11 |  NO   |  图片关联媒体ID  |
   


## 学校迎新步骤子类 

   - school_enrolment_step_tasks
   
| 字段名  | 类型  | 长度  | 不是NULL |  描述   |
| ----   |:-----:| -----:   | -----: | -----:|
| ID     | int  | 11    |  YES      |  主键ID |
| school_enrolment_step_id| int| 11    |  YES   |  迎新步骤ID |
| name   | varchar| 80    |  YES   |  步骤名称 |
| describe| text|     |  NO   |  描述 |
| type| tinyint|   3 |  YES   |  类型  0可选 1必须执行 默认为0 |


## 学生迎新表

 - student_enrolment_steps
 
| 字段名  | 类型  | 长度  | 不是NULL |  描述   |
| ----   |:-----:| -----:   | -----: | -----:|
| ID     | int  | 11    |  YES      |  主键ID |
| user_id | int  | 11    |  YES      |  用户ID |
| school_enrolment_step_id | int  | 11 |  YES |  迎新步骤ID |
| school_enrolment_step_task_id | int  | 11 |  YES |  子类步骤ID |
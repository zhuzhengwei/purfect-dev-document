## 该仓库用帕菲特后台管理系统 文档说明

### 移动端接口全局请求头(Headers)

| 参数名        | 是否必须       | 参数类型 | 说明                              |
| --------      | :----------: | -----:   | -----:                           |
| Authorization | Yes          | string   | Bearer空格 拼接上服务端返回的token  |
| schoolUuid 	  | Yes        | string   | 服务端返回的学校uuid               |
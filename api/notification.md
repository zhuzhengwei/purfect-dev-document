### 系统消息接口使用说明

1. 消息列表

- url 
	/api/notification/list?api_token=f095f24f-00ce-4027-b8ee-bbb86c6cea9f


#### 请求数据


| 参数名 | 是否必须 | 参数类型 | 说明 |
| page | 否 | int | 页码 默认第一页 |


#### 响应数据

    ```{
	"code": 1000,
	"message": "OK",
	"data": [{
		"ticeid": 1,
		"create_at": "",
		"tice_title": "支付成功！",
		"tice_content": "{'线下消费:食堂', '店铺名称'}",
		"tice_money": "15.19",
		"webview_url": "",
		"type": 0,
		"priority": 0,
		"tice_header": "易码通"
	}, {
		"ticeid": 2,
		"create_at": "",
		"tice_title": "你有一条新的通知！",
		"tice_content": "{'2019年全校党员大会正式开幕'}",
		"tice_money": "",
		"webview_url": "",
		"type": 0,
		"priority": 0,
		"tice_header": "消息"
	}]
	}
	```


####   SystemNotification功能使用说明



消息系统需要承载种类众多的消息推送，有各种格式，但是基本上每行都是分号分割的字符串，所以定义了content字段的格式为一个json的字符串，对应json对象的元素就是消息内容的每行数据



比如

![image](https://user-images.githubusercontent.com/17819237/70487792-7cd67b80-1b31-11ea-8022-0e845e3e7451.png)



这里的content是

{ '充值天数：150天, 	'充值时间：2019-09-09 12:00'}

这里的Title是：你的校园网已成功充值



#### 表结构


```mysql
CREATE TABLE `system_notifications` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `school_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '针对哪个学校. 0',
  `sender` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '发信人 ID, 0 表示系统自动发送',
  `to` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '收信人ID, 默认 0 表示所有人',
  `type` smallint(5) unsigned NOT NULL DEFAULT '0' COMMENT '消息类别, 0表示系统消息',
  `priority` smallint(5) unsigned NOT NULL DEFAULT '0' COMMENT '消息级别, 0表示一般消息',
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '消息内容',
  `next_move` text COLLATE utf8mb4_unicode_ci COMMENT '下一步操作',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `money` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '钱数，没有则不填写',
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '标题',
  `category` int(10) unsigned DEFAULT NULL COMMENT '消息种类：1 易码通， 2 校园网， 3通知，4公告，5检查，6课件，7课程，8考试， 9招生， 10申请，11订单，12值周，13就业，14选课，15会员，16签到， 17优惠券，18绿色通道，19退费，20消息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```



#### 向表中写数据时的注意事项：

- category最好填写，否则将按照默认“消息”输出

- content内容如果为多行，请使用json的格式写入，每行为json的一个元素例如

  - ```json
     { '充值天数：150天, 	'充值时间：2019-09-09 12:00'}
    ```

- 增加了money和title两个字段，如果消息中有钱数展示，请填写money字段，title字段最好填写

- next_move字段是用来跳转详情页使用的，如果消息需要跳转到app中的某个native页面，需要在此字段中以json的格式写入，具体格式与前端协商

- 测试地址： http://teacher.backend.com/api/notification/list?api_token=99382f5f-977b-4e16-a82c-94783d29d749&page=1

- 测试时分页信息用page字段提交，每页20条记录

- 增加category分类时，请在model文件中的常量中更新

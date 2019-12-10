  
### 值周接口使用说明

1. 本周值周列表

- url   /api/attendance/list?api_token=f095f24f-00ce-4027-b8ee-bbb86c6cea9f
- 请求数据








|参数名 | 是否必须 | 参数类型 | 说明|
| --------      | :----------: | -----:   | -----:                             |
|week | 否 | int | 页码 默认当前周,week=1下一周  week=-1前一周|



- 响应数据

    

```json
{
	"code": 1000,
	"message": "OK",
	"data": [{
		"star_time": "2019-12-09 08:00:00",
		"end_time": "2019-12-09 12:00:00",
		"teacher": [{
			"name": "Anita Sipes",
			"department": "sint系",
			"major": "国际金融法"
		}, {
			"name": "Brianne Prosacco",
			"department": "magnam系",
			"major": "人力资源"
		}],
		"task": "报名咨询1"
	}, {
		"star_time": "2019-12-09 12:00:00",
		"end_time": "2019-12-09 14:00:00",
		"teacher": [{
			"name": "Astrid Windler",
			"department": "minima系",
			"major": "个人所得税"
		}],
		"task": "报名咨询1"
	}, {
		"star_time": "2019-12-09 14:00:00",
		"end_time": "2019-12-09 18:00:00",
		"teacher": [{
			"name": "Astrid Windler",
			"department": "minima系",
			"major": "个人所得税"
		}],
		"task": "报名咨询1"
	}, {
		"star_time": "2019-12-10 12:00:00",
		"end_time": "2019-12-10 14:00:00",
		"teacher": [{
			"name": "Anita Sipes",
			"department": "sint系",
			"major": "国际金融法"
		}],
		"task": "报名咨询1"
	}, {
		"star_time": "2019-12-11 14:00:00",
		"end_time": "2019-12-11 18:00:00",
		"teacher": [{
			"name": "Annabelle Torphy Sr.",
			"department": "sint系",
			"major": "国际金融法"
		}],
		"task": "报名咨询1"
	}, {
		"star_time": "2019-12-11 18:00:00",
		"end_time": "2019-12-11 22:00:00",
		"teacher": [{
			"name": "Aisha Beier",
			"department": "sint系",
			"major": "国际金融法"
		}],
		"task": "报名咨询1"
	}, {
		"star_time": "2019-12-12 08:00:00",
		"end_time": "2019-12-12 12:00:00",
		"teacher": [{
			"name": "Anika Nienow",
			"department": "sint系",
			"major": "股票与期货"
		}],
		"task": "报名咨询1"
	}, {
		"star_time": "2019-12-13 14:00:00",
		"end_time": "2019-12-13 18:00:00",
		"teacher": [{
			"name": "Anika Nienow",
			"department": "sint系",
			"major": "股票与期货"
		}],
		"task": "报名咨询1"
	}, {
		"star_time": "2019-12-14 12:00:00",
		"end_time": "2019-12-14 14:00:00",
		"teacher": [{
			"name": "Alisha Hagenes",
			"department": "minima系",
			"major": "国税原理"
		}],
		"task": "报名咨询1"
	}, {
		"star_time": "2019-12-14 18:00:00",
		"end_time": "2019-12-14 22:00:00",
		"teacher": [{
			"name": "Anita Sipes",
			"department": "sint系",
			"major": "国际金融法"
		}],
		"task": "报名咨询1"
	}, {
		"star_time": "2019-12-15 18:00:00",
		"end_time": "2019-12-15 22:00:00",
		"teacher": [{
			"name": "Astrid Windler",
			"department": "minima系",
			"major": "个人所得税"
		}],
		"task": "报名咨询1"
	}]
}
```



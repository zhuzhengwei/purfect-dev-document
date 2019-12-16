### 社群接口使用说明

**1. 申请创建一个社群**

- url   /api/forum/community/approve?api_token=99382f5f-977b-4e16-a82c-94783d29d749&name=社群名称&detail=社群简介&logo=logo文件&pic1=pic1文件&pic2=pic2文件&pic3=pic3文件

- 请求数据

|参数名 | 是否必须 | 参数类型 | 说明|
| --------      | :----------: | -----:   | -----:                             |
|api_token | 是 | str | token |
|name | 是 | str |社群名称 |
|detail | 是 | str |社群简介 |
|logo | 是 | file |社群logo图片 |
|pic1 | 是 | file |社群证明文件图片1 |
|pic2 | 是 | file |社群证明文件图片2 |
|pic3 | 是 | file |社群证明文件图片3 |



- 响应数据



```
{ "code": 1000, "message": "添加成功", "data": [] }
```


**2. 当前用户所在学校的社群列表**

- url   api/forum/community/communities?api_token=99382f5f-977b-4e16-a82c-94783d29d749
- 请求数据

|参数名 | 是否必须 | 参数类型 | 说明|
| --------      | :----------: | -----:   | -----:                             |
|api_token | 是 | str | token |



- 响应数据

```
{
	code: 1000,
	message: "OK",
	data: [{
		school_id: 1,
		name: "足球社",
		detail: "丰富业余生活，锻炼身体",
		logo: "http://purfect.test/storage/app/community/20191216/1216/vC4jhou3dcKxiKonoXUxdQRgozG17D5GidGgdTw1.jpeg",
		pic1: "http://purfect.test/storage/app/community/20191216/1216/T1Wm5EgAZsWZccI1UkrdT9SLGmcfe1h5OHW6LB8l.jpeg",
		pic2: "",
		pic3: "",
		user_id: 6,
		user_name: "Elmer Schultz",
		user_avatar: "http://teacher.backend.com/assets/img/dp.jpg",
		member: 0
	}]
}
```


**3. 当前用户所在学校的某一个社群详情**

- url   api/forum/community/community/1?api_token=99382f5f-977b-4e16-a82c-94783d29d749
- 请求数据

|参数名 | 是否必须 | 参数类型 | 说明|
| --------      | :----------: | -----:   | -----:                             |
|api_token | 是 | str | token |
|community_id | 是 | int | 本例中此值为1 |



- 响应数据

```
{
	code: 1000,
	message: "OK",
	data: {
		community: {
			school_id: 1,
			name: "足球社",
			detail: "丰富业余生活，锻炼身体",
			logo: "http://purfect.test/storage/app/community/20191216/1216/vC4jhou3dcKxiKonoXUxdQRgozG17D5GidGgdTw1.jpeg",
			pic1: "http://purfect.test/storage/app/community/20191216/1216/T1Wm5EgAZsWZccI1UkrdT9SLGmcfe1h5OHW6LB8l.jpeg",
			pic2: "",
			pic3: "",
			user_id: 6,
			user_name: "Elmer Schultz",
			user_avatar: "http://teacher.backend.com/assets/img/dp.jpg"
		},
		socialFollow: [{
				user_id: 6,
				user_name: "Elmer Schultz",
				user_avatar: "http://teacher.backend.com/assets/img/dp.jpg"
			},
			{
				user_id: 7,
				user_name: "Emil Cummings",
				user_avatar: "http://teacher.backend.com/assets/img/dp.jpg"
			},
			{
				user_id: 8,
				user_name: "Cyrus Will",
				user_avatar: "http://teacher.backend.com/assets/img/dp.jpg"
			}
		],
		socialFollowed: [{
			user_id: 6,
			user_name: "Elmer Schultz",
			user_avatar: "http://teacher.backend.com/assets/img/dp.jpg"
		}],
		like: 0,
		members: [{
				id: 1,
				school_id: 1,
				community_id: 1,
				user_id: 6,
				user_name: "Elmer Schultz",
				status: 1,
				reason: "少啰嗦",
				created_at: "2019-12-16 15:47:01",
				updated_at: "2019-12-16 15:52:45",
				user_avatar: "http://teacher.backend.com/assets/img/dp.jpg"
			},
			{
				id: 2,
				school_id: 1,
				community_id: 1,
				user_id: 6,
				user_name: "Elmer Schultz",
				status: 1,
				reason: "少啰嗦",
				created_at: "2019-12-16 15:47:02",
				updated_at: "2019-12-16 15:52:45",
				user_avatar: "http://teacher.backend.com/assets/img/dp.jpg"
			},
			{
				id: 3,
				school_id: 1,
				community_id: 1,
				user_id: 6,
				user_name: "Elmer Schultz",
				status: 1,
				reason: "少啰嗦",
				created_at: "2019-12-16 15:47:24",
				updated_at: "2019-12-16 15:52:45",
				user_avatar: "http://teacher.backend.com/assets/img/dp.jpg"
			},
			{
				id: 4,
				school_id: 1,
				community_id: 1,
				user_id: 6,
				user_name: "Elmer Schultz",
				status: 1,
				reason: "少啰嗦",
				created_at: "2019-12-16 15:47:57",
				updated_at: "2019-12-16 15:52:45",
				user_avatar: "http://teacher.backend.com/assets/img/dp.jpg"
			},
			{
				id: 5,
				school_id: 1,
				community_id: 1,
				user_id: 6,
				user_name: "Elmer Schultz",
				status: 1,
				reason: "少啰嗦",
				created_at: "2019-12-16 15:48:05",
				updated_at: "2019-12-16 15:52:45",
				user_avatar: "http://teacher.backend.com/assets/img/dp.jpg"
			},
			{
				id: 6,
				school_id: 1,
				community_id: 1,
				user_id: 6,
				user_name: "Elmer Schultz",
				status: 1,
				reason: "少啰嗦",
				created_at: "2019-12-16 15:48:05",
				updated_at: "2019-12-16 15:52:45",
				user_avatar: "http://teacher.backend.com/assets/img/dp.jpg"
			}
		]
	}
}
```

**4. 团长查看申请列表**

- url   api/forum/community/joinlist?community_id=1&api_token=99382f5f-977b-4e16-a82c-94783d29d749
- 请求数据

|参数名 | 是否必须 | 参数类型 | 说明|
| --------      | :----------: | -----:   | -----:                             |
|api_token | 是 | str | token |
|community_id | 是 | int | 本例中此值为1 |



- 响应数据

```
{
	code: 1000,
	message: "OK",
	data: [{
			id: 7,
			school_id: 1,
			community_id: 1,
			user_id: 6,
			user_name: "Elmer Schultz",
			status: 0,
			reason: "赶紧同意",
			created_at: "2019-12-16 16:10:30",
			updated_at: "2019-12-16 16:10:30"
		},
		{
			id: 8,
			school_id: 1,
			community_id: 1,
			user_id: 6,
			user_name: "Elmer Schultz",
			status: 0,
			reason: "赶紧同意",
			created_at: "2019-12-16 16:10:31",
			updated_at: "2019-12-16 16:10:31"
		}
	]
}
```


**5. 申请加入某个社群**

- url   api/forum/community/join?community_id=1&api_token=99382f5f-977b-4e16-a82c-94783d29d749&reason=赶紧同意
- 请求数据

|参数名 | 是否必须 | 参数类型 | 说明|
| --------      | :----------: | -----:   | -----:                             |
|api_token | 是 | str | token |
|community_id | 是 | int | 本例中此值为1 |
|reason | 是 | int | 本例中此值为“赶紧同意”|



- 响应数据

```
{
code: 1000,
message: "添加成功",
data: [ ]
}
```




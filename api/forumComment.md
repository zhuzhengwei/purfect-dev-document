  
### 社区评论接口使用说明

**1. 某文章的评论列表**

- url   /api/forum/comments/1?api_token=99382f5f-977b-4e16-a82c-94783d29d749
- 请求数据

|参数名 | 是否必须 | 参数类型 | 说明|
| --------      | :----------: | -----:   | -----:                             |
|api_token | 是 | str | token |
|forumid | 是 | int | 本例中此值为1 |



- 响应数据



```
{
code: 1000,
message: "OK",
data: {
info: {
comment_count: 3,
comment_reply_count: 7,
comment_total: 10
},
comments: [
{
comment: {
id: 3,
user_id: 6,
forum_id: 1,
content: "test3",
created_at: "2019-12-13 13:35:41",
updated_at: "2019-12-13 13:35:41",
user_name: "Dr. Hilma Trantow MD",
user_avatar: "/assets/img/dp.jpg",
reply_count: 0
},
reply: [ ]
},
{
comment: {
id: 2,
user_id: 6,
forum_id: 1,
content: "test2",
created_at: "2019-12-13 13:35:33",
updated_at: "2019-12-13 13:35:33",
user_name: "Dr. Hilma Trantow MD",
user_avatar: "/assets/img/dp.jpg",
reply_count: 6
},
reply: [
{
id: 2,
comment_id: 2,
user_id: 6,
to_user_id: 6,
forum_id: 1,
reply: "testrply",
created_at: "2019-12-13 13:37:08",
updated_at: "2019-12-13 13:37:08",
to_user_name: "Dr. Hilma Trantow MD",
to_user_avatar: "/assets/img/dp.jpg",
from_user_name: "Dr. Hilma Trantow MD",
from_user_avatar: "/assets/img/dp.jpg"
},
{
id: 3,
comment_id: 2,
user_id: 6,
to_user_id: 6,
forum_id: 1,
reply: "testrply",
created_at: "2019-12-13 13:37:08",
updated_at: "2019-12-13 13:37:08",
to_user_name: "Dr. Hilma Trantow MD",
to_user_avatar: "/assets/img/dp.jpg",
from_user_name: "Dr. Hilma Trantow MD",
from_user_avatar: "/assets/img/dp.jpg"
},
{
id: 4,
comment_id: 2,
user_id: 6,
to_user_id: 6,
forum_id: 1,
reply: "testrply3",
created_at: "2019-12-13 13:37:14",
updated_at: "2019-12-13 13:37:14",
to_user_name: "Dr. Hilma Trantow MD",
to_user_avatar: "/assets/img/dp.jpg",
from_user_name: "Dr. Hilma Trantow MD",
from_user_avatar: "/assets/img/dp.jpg"
},
{
id: 5,
comment_id: 2,
user_id: 6,
to_user_id: 6,
forum_id: 1,
reply: "testrply3",
created_at: "2019-12-13 13:37:15",
updated_at: "2019-12-13 13:37:15",
to_user_name: "Dr. Hilma Trantow MD",
to_user_avatar: "/assets/img/dp.jpg",
from_user_name: "Dr. Hilma Trantow MD",
from_user_avatar: "/assets/img/dp.jpg"
},
{
id: 6,
comment_id: 2,
user_id: 6,
to_user_id: 6,
forum_id: 1,
reply: "testrply4",
created_at: "2019-12-13 13:37:19",
updated_at: "2019-12-13 13:37:19",
to_user_name: "Dr. Hilma Trantow MD",
to_user_avatar: "/assets/img/dp.jpg",
from_user_name: "Dr. Hilma Trantow MD",
from_user_avatar: "/assets/img/dp.jpg"
},
{
id: 7,
comment_id: 2,
user_id: 6,
to_user_id: 6,
forum_id: 1,
reply: "testrply4",
created_at: "2019-12-13 13:37:19",
updated_at: "2019-12-13 13:37:19",
to_user_name: "Dr. Hilma Trantow MD",
to_user_avatar: "/assets/img/dp.jpg",
from_user_name: "Dr. Hilma Trantow MD",
from_user_avatar: "/assets/img/dp.jpg"
}
]
},
{
comment: {
id: 1,
user_id: 6,
forum_id: 1,
content: "test",
created_at: "2019-12-13 13:24:11",
updated_at: "2019-12-13 13:24:11",
user_name: "Dr. Hilma Trantow MD",
user_avatar: "/assets/img/dp.jpg",
reply_count: 1
},
reply: [
{
id: 1,
comment_id: 1,
user_id: 6,
to_user_id: 6,
forum_id: 1,
reply: "testrply",
created_at: "2019-12-13 13:29:53",
updated_at: "2019-12-13 13:29:53",
to_user_name: "Dr. Hilma Trantow MD",
to_user_avatar: "/assets/img/dp.jpg",
from_user_name: "Dr. Hilma Trantow MD",
from_user_avatar: "/assets/img/dp.jpg"
}
]
}
]
}
}
```


**2. 添加某文章的评论**

- url   /api/forum/comments/addcomment/1?api_token=99382f5f-977b-4e16-a82c-94783d29d749&content=评论内容
- 请求数据

|参数名 | 是否必须 | 参数类型 | 说明|
| --------      | :----------: | -----:   | -----:                             |
|api_token | 是 | str | token |
|forumid | 是 | int | 本例中此值为1 |
|content | 是 | str | 评论的内容 |


- 响应数据

```
{
code: 1000,
message: "添加成功",
data: [ ]
}
```


**3. 添加某评论的回复**

- url   /api/forum/comments/addreply/1?api_token=99382f5f-977b-4e16-a82c-94783d29d749&reply=回复内容
- 请求数据

|参数名 | 是否必须 | 参数类型 | 说明|
| --------      | :----------: | -----:   | -----:                             |
|api_token | 是 | str | token |
|commentid | 是 | int | 本例中此值为1 |
|reply | 是 | str | 回复的内容 |


- 响应数据

```
{
code: 1000,
message: "添加成功",
data: [ ]
}
```

**4. 给某社区文章点赞**

- url   /api/forum/comments/addlike/1?api_token=99382f5f-977b-4e16-a82c-94783d29d749
- 请求数据

|参数名 | 是否必须 | 参数类型 | 说明|
| --------      | :----------: | -----:   | -----:                             |
|api_token | 是 | str | token |
|forumid | 是 | int | 本例中此值为1 |



- 响应数据

```
{
code: 1000,
message: "添加成功",
data: [ ]
}
```

**5. 删除某社区文章点赞**

- url   /api/forum/comments/dellike/1?api_token=99382f5f-977b-4e16-a82c-94783d29d749
- 请求数据

|参数名 | 是否必须 | 参数类型 | 说明|
| --------      | :----------: | -----:   | -----:                             |
|api_token | 是 | str | token |
|forumid | 是 | int | 本例中此值为1 |



- 响应数据

```
{
code: 1000,
message: "删除成功",
data: [ ]
}
```

# 第一个页面
文档看到这里应该对SCUI有了一定的了解，接一去我们动动手，开始编写我们的第一个页面。

## 1.建立路由表
在静态路由或服务端返回的动态路由中建立一个新的路由，这时候登录框架后在菜单中就显示了“新的页面”的菜单项
``` javascript
{
	name: "newPage",
	path: "/newPage",
	meta: {
		title: "新的页面"
	},
	component: "newPage"
}
```

## 2.建立API
在API管理 @/api/model 中新建user.js
``` javascript
// @/api/model/user.js

import config from "@/config"
import http from "@/utils/request"

export default {
	userInfo: {
		url: `${config.MOCK_URL}/userInfo`,
		name: "获取当前用户信息",
		get: async function(){
			return await http.get(this.url)
		}
	}
}
```
## 3.建立视图
在 @views 中新建VUE文件 newPage.vue
``` html
<!-- views/newPage.vue -->

<template>
	<h2>{{ userId }}</h2>
	<h3>{{ userName }}</h3>
</template>

<script>
	export default {
		name: 'newPage',
		data() {
			return {
				userId: "",
				userName: ""
			}
		},
		mounted() {
			this.getInfo()
		},
		methods: {
			async getInfo(){
				var res = await this.$API.user.userInfo.get()
				this.userId = res.data.userId
				this.userName = res.data.userName
			}
		}
	}
</script>
```

呐~ 一个路由到视图的页面就完成啦
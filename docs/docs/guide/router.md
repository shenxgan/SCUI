# 路由
路由是整套系统中最重要的存在，和系统左侧导航、页面标题甚至页面缓存都存在一定的关系。而我们的SCUI将这两者同步，大大减少了前端工作人员对左侧菜单的布局。

## 系统路由
当某些页面与业务脱节，而且百年不变的页面，比如登录,404,500等的页面可作为系统路由固定在路由表。[相关代码](https://github.com/shenxgan/scui/blob/main/src/router/systemRouter.js)

## 动态路由
SCUI 使用动态路由。将复杂的路由表编写转换为可人工前台增删改的操作。获取路由的步骤如下：
1. 用户登录获取路由MAP存在localStorage [相关代码](https://github.com/shenxgan/scui/blob/main/src/views/login.vue)
2. 监听路由，当不存在路由时，**一次性**加载localStorage，转换成路由对象push到路由表 [相关代码](https://github.com/shenxgan/scui/blob/main/src/router/index.js)

## 静态路由
并非所有的项目都需要精细化权限的动态路由，只需要以角色区分的路由菜单，或者直接固定的路由。

书写格式与动态路由格式一致，比较动态路由在meta中多加入了role角色权限，为数组类型。一个菜单是否有权限显示，取决于它以及后代菜单是否有权限。如果又配置了静态路由，又启用了动态路由，系统会将静态路由插入动态路由之前。

相关配置在 ```@\config\route.js```


## 路由对象
``` javascript
{
	name: "router-name",
	path: "/router-url",
	meta: {
		icon: "el-icon-eleme-filled",
		title: "路由名称"
	},
	component: 'home',
}
```

|key		|说明																												|
|--			|--																													|
|*name		|路由的标识，必填且与页面组件的name一致，否则 ```<keep-alive>``` 页面缓存效果失效。									|
|*path		|路由在游览器地址栏里的hash值，也就是说这个路由要用什么URL地址来访问。												|
|component	|加载的页面组件位置，系统将自动组装成 ```() => import(/* webpackChunkName: "home" */ '@/views/home')``` 的形式。	|
|children	|子集路由。	|
|redirect	|重定向地址。	|
|*meta		|元数据，见下方。	|

### meta
|key				|说明	|
|--					|--		|
|*title				|显示名称。展示在菜单，标签和面包屑等中		|
|hidden				|是否隐藏菜单，大部分用在无需显示在左侧菜单中的页面，比如详情页		|
|affix				|是否固定，类似首页控制台在标签中是没有关闭按钮的		|
|icon				|显示图标，建立2级菜单都设置图标，否则菜单折叠都将显示空白		|
|*type				|类型：菜单，Iframe，外链，按钮		|
|hiddenBreadcrumb	|是否隐藏面包屑		|
|active				|左侧菜单的路由地址活动状态，比如打开详情页需要列表页的菜单活动状态		|
|color				|颜色值		|
|fullpage			|是否整页打开路由（脱离框架系），例如：```fullpage: true```		|
|role				|静态路由时，所能访问路由的角色，例如：```role: ["SA"]```		|
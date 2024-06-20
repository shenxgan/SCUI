# 和服务端进行交互
## 请求流程
SCUI封装```axios```后可以优雅的请求后端API，一个完整的前端交互到服务端处理流程是这样的
1. UI组件交互操作
2. 通过统一管理的API对象列表
3. 通过统一请求拦截
4. 使用封装的请求库发送请求
5. 等待服务端返回结果
6. 结果处理
7. 更新视图

## 统一API列表管理
为了方便管理和维护API接口地址，我们将所有的请求都放在```@api```文件夹中，并且按照约定的对象格式编写API对象，
最后SCUI将API对象列表挂载在VUE中，使用```this.$API```，使其在任何地方都可以调用，而不用每次都引入。
``` javascript
login: {
	url: `${APIURL}/login`,						//APIURL
	name: "用户登录",							//API名称
	get: async function(data){					//请求方法
		return await http.get(this.url, data);
	}
}
```

## 统一的请求拦截
在每一次发送请求前，请求库都会有个钩子函数处理发送前的各类参数。比如在请求头部里添加Authorization。
相关配置在 ```@utils/request.js``` HTTP request 拦截器中。

## 如何使用？
在定义好API对象后就可以在VUE视图文件或JS文件中调用此对象了。
``` javascript
async login(){
	var data = {
		user: "admin",
		password: "123"
	}
	var userInfo = await this.$API.user.login.get(data);
}
```

## 请求错误处理
错误分为两种，一种是接口服务端正常而业务错误错误，比如密码错误，用户名不存在。第二种为服务端报错，比如500了。

第一种处理比较方便，一般接口都会约定在返回的数据中含有code节点，然后根据code值该弹窗的弹窗就行了。
``` javascript
//返回成功
{
	code: 200,
	data: {},
	msg: ""
}

//返回失败
{
	code: 500,
	data: {},
	msg: "用户名不存在"
}
```

而第二种是服务端报错,HTTP请求返回报错了。可以使用try，catch包围$API就可以捕捉到错误，我们拿本文第一个例子举例：
``` javascript
async login(){
	var data = {
		user: "admin",
		password: "123"
	}
	try {
		var userInfo = await this.$API.user.login.get(data)
	}catch (error) {
		//这里捕捉到错误
	}
}
```
值得一说的是，在大部分编写中，大家不必特意编写try，catch，因为在封装的请求库中已经对第二种报错做了统一的弹窗提示。
相关代码```@utils/request.js```
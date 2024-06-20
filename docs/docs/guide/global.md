## 全局对象
本文针对SCUI新增的全局对象解释，原挂载在VUE中的对象，请参阅VUE官网。

|对象	|说明				|映射						|
|--		|--					|--							|
|$CONFIG|系统全局配置			|```@/config/index.js```	|
|$TOOL	|系统工具集			|```@/utils/tool.js```		|
|$HTTP	|封装的axios请求库	|```@/utils/request.js```	|
|$API	|接口表				|```@/api/index.js```		|
|$HAS	|获取当前用户权限表	|```@/utils/permission.js```|


## 全局组件
挂载在VUE实例中的全局组件在使用时不需要 ```import``` 和 ```components:{}``` 直接和HTML/VUE原生组件一样使用即可。

本项目更新组件频繁，不在本文档红详细描述，所有组件均在 ```@/components``` 中。

## 全局组件配置
前端开发者将面对各种各式各样的接口格式，所以是否需要一个地方来规定请求参数和分析返回数据格式呢？
除了前面说到 ```$CONFIG``` 系统全局配置外，本项目还抽离了若干组件的配置作为全局配置，减少代码重复率。
|文件路径						|说明															|
|--								|--																|
|```@/config/table.js```		|规定请求参数名以及返回数据分析，pageSize等						|
|```@/config/tableSelect.js```	|规定请求参数名以及返回数据分析，选中的label/value，pageSize等	|
|```@/config/upload.js```		|请求API对象，maxSize，返回数据分析等							|
|```@/config/filterBar.js```	|过滤器运算符配置，常用过滤的请求配置							|
|```@/config/iconSelect.js```	|图标选择器配置							|
|```@/config/select.js```		|异步、字典选择器配置							|
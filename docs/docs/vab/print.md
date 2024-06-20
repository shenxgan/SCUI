# print 打印
我并没有把打印归类到组件中去。因为功能太过于简单，没必要也不值得。所以直接当做工具放在 ```@/utils/print.js```
使用的时候 ```import``` 一下就行了

``` javascript
import print from '@/utils/print'

//局部调用
print(this.$refs[ref])

//支持直接传入HTML字符串
print("<div></div>")
```

- 局部或全局打印
- 保留所有样式，包括字体图标
- 支持忽略元素
- 分页打印
- 直接打印HTML，比如远程获取HTML模板

[演示地址](https://python-abc.xyz/scui-doc/demo/#/vab/print)
> 演示地址需模拟登录高权限角色后查看
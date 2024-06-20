# scStatistic 统计数值
超级简单的组件，目的就是为了少写点样式。新手朋友们也可以复制一份自己尝试写一些可复用的组件

[演示地址](https://python-abc.xyz/scui-doc/demo/#/vab/statistic)
> 演示地址需模拟登录高权限角色后查看

## Props
|参数			|说明					|类型	|可选值	|默认值	|
|--				|--						|--		|--		|--		|
|title			|标题					|String	|-		|-		|
|value			|显示值					|String	|-		|-		|
|prefix			|前缀					|String	|-		|-		|
|suffix			|后缀					|String	|-		|-		|
|description	|描述					|String	|-		|-		|
|tips			|提示					|String	|-		|-		|
|groupSeparator	|是否将value添加千分符	|Boolean|-		|false		|

## Slot
|name	|说明					|
|--		|--						|
|-		|自定义description区域	|
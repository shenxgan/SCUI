# scContextmenu 右键菜单
为了界面的简洁度，把一些操作放在右键菜单里是PC桌面系统里常用的手段。
- 无限级菜单
- 自定义图标和后缀
- 优化了边缘位置处理

[演示地址](https://python-abc.xyz/scui-doc/demo/#/vab/contextmenu)
> 演示地址需模拟登录高权限角色后查看

## contextmenuItem Props
|参数		|说明											|类型				|可选值	|默认值					|
|--			|--												|--					|--		|--						|
|title		|菜单名											|String				|-		|-						|
|suffix		|菜单名右侧后缀									|String				|-		|-						|
|icon		|图标											|String				|-		|-						|
|divided	|是否显示分割线									|Boolean			|-		|false					|
|disabled	|是否禁用										|Boolean			|-		|false					|
|command	|指令											|string				|-		|-						|

## contextmenu Event
|事件名称		|说明										|回调参数						|
|--				|--											|--								|
|visibleChange	|菜单出现/隐藏时触发							|出现则为 true，隐藏则为 false	|
|command		|点击菜单项触发的事件回调						|contextmenu-item 的指令	|

## contextmenu Methods
|方法名			|说明										|参数							|
|--				|--											|--								|
|openMenu		|显示菜单									|右键事件对象						|
|closeMenu		|关闭菜单									|-								|
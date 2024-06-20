# scTable 数据表格
重磅封装的数据表格，适用于常见的各类列表页

[演示地址](https://python-abc.xyz/scui-doc/demo/#/vab/table/base)
> 演示地址需模拟登录高权限角色后查看

## Props
|参数				|说明						|类型	|可选值	|默认值								|
|--					|--							|--		|--		|--									|
|data				|静态数据					|Array	|-		|-									|
|apiObj				|远程数据API对象			|Object	|-		|-									|
|rowKey				|表格行唯一值，树形表格必填	|String	|-		|-									|
|params				|远程数据默认请求参数		|Object	|-		|-									|
|column				|可自定义的列				|Array	|-		|-									|
|remoteSort			|是否开启远程排序			|Boolean|-		|false								|
|remoteFilter		|是否开启远程过滤			|Boolean|-		|false								|
|hidePagination		|是否隐藏分页				|Boolean|-		|false								|
|hideDo				|是否隐藏工具栏				|Boolean|-		|false								|
|stripe				|是否开启斑马纹				|Boolean|-		|false								|
|highlightCurrentRow|是否要选中行活动状态			|Boolean|-		|false								|
|paginationLayout	|分页布局					|String	|-		|total, prev, pager, next, jumper	|

## Event
|事件名称		|说明										|回调参数	|
|--				|--											|--			|
|selectionChange|当选择项发生变化时会触发该事件				|selection	|
|currentChange	|当当表格的当前行发生变化的时候会触发该事件	|selection	|

## Methods
|方法名			|说明										|参数							|
|--				|--											|--								|
|refresh		|刷新表格									|					|
|upData			|更新表格(合并上一次params)					|params, page		|
|reload			|重载表格(替换params)							|params, page		|

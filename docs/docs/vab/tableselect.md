# scTableSelect 表格选择器

select深度巧妙改造的表格选择器, 非常适用于大量数据选择的场景

[演示地址](https://python-abc.xyz/scui-doc/demo/#/vab/tableselect)
> 演示地址需模拟登录高权限角色后查看

## Props
|参数		|说明			|类型			|可选值	|默认值	|
|--			|--				|--				|--		|--		|
|v-model	|默认值			|Array,String	|-		|-		|
|apiObj		|远程数据API对象|Object			|-		|-		|
|placeholder|选中提示语		|String			|-		|请选择	|
|multiple	|是否多选		|Boolean		|-		|false	|
|disabled	|是否禁用		|Boolean		|-		|false	|
|props		|规定数据格式		|Object			|-		|		|

### props
|参数		|说明							|类型	|可选值	|默认值		|
|--			|--								|--		|--		|--			|
|label		|选中后显示名					|String	|-		|label		|
|value		|选中数据值						|String	|-		|value		|
|page		|请求参数名，当前分页			|String	|-		|page		|
|pageSize	|请求参数名，每页数据量			|String	|-		|pageSize	|
|keyword	|请求参数名，远程搜索时的关键词	|String	|-		|keyword	|

## Slot
|name	|说明					|
|--		|--						|
|header	|表格上方插糟，传递参数包含{form, submit}	|
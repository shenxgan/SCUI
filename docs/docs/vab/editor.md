# scEditor 富文本编辑器

关于富文本编辑器是VUE开发环节中的大坑，这里选择使用 tinymce 是经过多个比较最终决定的。

[演示地址](https://python-abc.xyz/scui-doc/demo/#/vab/editor)
> 演示地址需模拟登录高权限角色后查看

## Props
|参数		|说明			|类型	|可选值	|默认值	|
|--			|--				|--		|--		|--		|
|v-model	|编辑器默认值	|String	|-		|-		|
|placeholder|输入提示		|String	|-		|100%	|
|height		|编辑器高度		|Number	|-		|300	|
|disabled	|是否禁用		|Boolean|-		|false	|
|toolbar	|开启的工具条		|String|-		|见下方	|

## toolbar
选择需要开启的工具条,"|"竖杠代表分隔符 "\"斜杠代表分组换行
``` sh
'undo redo |  forecolor backcolor bold italic underline strikethrough link | formatselect fontselect fontsizeselect | \
 alignleft aligncenter alignright alignjustify outdent indent lineheight | bullist numlist | \
 image table  preview | code selectall'
```
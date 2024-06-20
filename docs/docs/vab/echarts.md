# scEcharts 图表
重新优雅封装百度Echarts，使用更方便而且暴露Echarts所有方法

#### 为什么要封装
- 符合Vue开发初衷
- 统一的主题管理
- 不用每个地方都监听resize

[演示地址](https://python-abc.xyz/scui-doc/demo/#/vab/chart)
> 演示地址需模拟登录高权限角色后查看

## Props
|参数	|说明		|类型	|可选值	|默认值	|
|--		|--			|--		|--		|--		|
|option	|Echarts选项|Object	|-		|-		|
|height	|图表高度	|String	|-		|100%	|
|width	|图表宽度	|String	|-		|100%	|
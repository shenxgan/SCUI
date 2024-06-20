# scCropper 图像剪裁
重新封装了cropperjs，使得使用更加方便，并且加入图像压缩功能。大部分使用方式是在上传文件前打开裁剪弹窗，处理完毕后再上传文件。

scUpload组件已经内置了裁剪功能

- 固定剪裁比例
- 实时预览
- 支持设置图像压缩率
- 支持导出Blob，File对象

[演示地址](https://python-abc.xyz/scui-doc/demo/#/vab/cropper)
> 演示地址需模拟登录高权限角色后查看

## Props
|参数		|说明											|类型				|可选值	|默认值					|
|--			|--												|--					|--		|--						|
|src		|图像地址										|String				|-		|-						|
|aspectRatio|固定剪裁比例 比如1/1, 4/3, 16/9					|Number				|-		|NaN					|
|compress	|压缩率 范围0.1-1								|Number				|-		|1						|

## Methods
|方法名			|说明										|参数							|
|--				|--											|--								|
|setAspectRatio	|重新设定剪裁比例								|aspectRatio					|
|getCropData	|获取裁剪后的数据								|cb,type (文件类型，默认image/jpeg)	|
|getCropBlob	|获取裁剪后的	Blob							|cb,type							|
|getCropFile	|获取裁剪后的	File							|cb,fileName,type					|
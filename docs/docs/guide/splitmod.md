# 模块抽离
当项目时间累积，使用第三方模块的数量将会不断增加，从来导致打包后app.js过大，这时候就要抽离一些非常用或者体积过大的模块。

比如本项目中的富文本编辑器和百度echarts。使用频率低，文件还硕大，所以决定将这2着分离出独立的JS文件，自动按需加载使用。

## splitChunks
本项目采用Webpack官方splitChunks分割模块。
``` javascript
//vue.config.js

splitChunks: {
	chunks: "all",
	automaticNameDelimiter: '~',
	name: true,
	cacheGroups: {
		//第三方库抽离
		vendor: {
			name: "modules",
			test: /[\\/]node_modules[\\/]/,
			priority: -10
		},
		elicons: {
			name: "elicons",
			test: /[\\/]node_modules[\\/]@element-plus[\\/]icons[\\/]/
		},
		tinymce: {
			name: "tinymce",
			test: /[\\/]node_modules[\\/]tinymce[\\/]/
		},
		echarts: {
			name: "echarts",
			test: /[\\/]node_modules[\\/]echarts[\\/]/
		}
	}
}
```
这样配置在打包后生成的文件列表，如下：
``` sh
┌── dist
│	└── js
│	│	├── modules.b98a1fa8.js		# 其他第三方依赖
│	│	├── tinymce.a3eec3b4.js		# 富文本编辑器tinymce依赖
│	│	├── echarts.c17b2673.js		# 百度echarts用到的依赖
│	│	├── elicons.1733fe4c.js		# @element-plus/icons依赖
│	│	├── app.73ba8337.js			# 项目框架
│	│	└── ***.js					# 其他视图
│	└── ***
```

## 分析
在打包完成后，将在 dist 根目录下生成report.html，可以查看各个模块的体积分析，从而决定是否需要抽离。

<img src="/report.jpg">

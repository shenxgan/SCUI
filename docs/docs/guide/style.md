# 布局&样式
SCUI提供4套布局方案，分别是默认的分栏布局和头部导航布局，均可在配置中设置。

## 布局
在 ```config/index.js``` 中可配置LAYOUT，就可以配置不同的布局，LAYOUT提供4个配置项（default，header，menu，dock），分别对应默认的分栏布局、头部导航布局、经典菜单布局和Dock布局满足不同的视觉需求。

默认布局

<img src="/demo1.jpg">

头部导航布局

<img src="/demo2.jpg">

经典菜单布局

<img src="/demo3.jpg">

Dock布局

<img src="/demo4.jpg">

## 样式
采用scss动态样式语言，还是那句话：约定大于配置。我们约定有个样式总入口，然后@import不同的类型。这样做在联合开发中有极大的便利。
``` sh
┌── style				# 全局样式
│	├── style.scss		# 总入口
│	├── app.scss		# 框架样式
│	├── fix.scss		# 第三方样式库的FIX文件
│	├── media.scss		# 媒体查询样式(移动端样式)
│	├── pages.scss		# 页面样式
│	└── ***.scss		# 其他自定义
```

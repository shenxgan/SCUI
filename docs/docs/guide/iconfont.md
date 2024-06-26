# 图标
本项目1.4.0开始弃用iconfont，改为svg组件方式，为了使图标组件名称与其他组件发生冲突，SCUI在注册图标组件时使用了前缀
- el-icon-* 为@element-plus/icons组件
- sc-icon-* 为扩展的图标组件

``` html
<el-icon>
	<el-icon-chat-dot-round />
</el-icon>
```

因为SVG图标组件扩展非常便利，所以本项目并未集成很多的图标。使用者可以随意扩展“有用”的图标。

## 扩展图标

::: tip :white_check_mark:自动脚本
在项目根路径添加了 `icon.sh` 脚本，可用于一键添加图标
:::

使用svg组件方式后扩展图标将变得非常便利。大致分为两步
- 1. @/assets/icons 中创建图标单文件组件
- 2. @/assets/icons/index.js 导出

``` sh
#@/assets/icons

┌── icons
│	├── index.js
│	├── 图标单文件组件.vue
```

### 关于自定义图标单文件组件
``` html
// @/assets/icons/Code.vue

<template>
	<svg t="1637029965066" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4502" width="200" height="200"><path d="M981.333333 512l-301.696 301.696-60.330666-60.330667L860.672 512l-241.365333-241.365333 60.330666-60.330667L981.333333 512zM163.328 512l241.365333 241.365333-60.330666 60.330667L42.666667 512l301.696-301.696 60.330666 60.330667L163.328 512z" p-id="4503"></path></svg>
</template>
```

SVG代码推荐使用iconFont，可以很方便的复制SVG代码。

推荐iconFont项目：[iconFont REMIX ICON](https://www.iconfont.cn/collections/detail?spm=a313x.7781069.0.da5a778a4&cid=25353)

## 图标脚本介绍
提供对所有扩展图标的增删改查功能，极大方便图标的管理。脚本位于项目根路径、名为 `icon.sh`
动作 | 示例 | 说明
-- | -- | --
增 | `./icon.sh add BugFill '{svgContent}'` | 图标名称：首字母大写，驼峰格式<br>svg 内容：需要使用引号引起来
删 | `./icon.sh del BugFill` |
改 | `./icon.sh add BugFill '{svgContent}'` | 与添加用法一样，只是同名的会进行覆盖
查列表 | `./icon.sh ls` | 列出当前所有扩展图标
查用法 | `./icon.sh eg` 或者 `./icon.sh ex` | 查询图标的用法

### 图标的三种用法
```html
<el-button icon="sc-icon-bug-fill"></el-button>
<el-icon><sc-icon-bug-fill /></el-icon>
<el-icon><component is="sc-icon-bug-fill" /></el-icon>
```

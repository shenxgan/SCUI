# 代码风格指南

在真正开始编写项目前建议先阅读一遍指南，这对团队联合开发的代码规范和统一有很大帮助。当其中不规范的部分eslint也会提醒报错，比如定义了变量未使用等。

当然还有一些规范 eslint 并不能效验，还是需要自己注意，本文主要以文件名规则展开。

## 视图
所有视图文件都应该在 views 文件下下，并且都使用各自的文件夹分开。如有多个单词名组合建议.vue文件都使用横线链接。

栗子
- @/views/user/index.vue
- @/views/user-ent/index.vue

## JS文件
所有.js文件也建议遵循横线链接

栗子
- @/utils/permission.js
- @/utils/user-flag.js

## 组件Component
关于组件的命名方式，虽然VUE官方推荐大写开头。但本项目还是喜欢以小写开头的小驼峰，就是任性！。建议使用文件夹分开。

栗子
- @/components/scEcharts/index.vue
- @/components/scUpload/index.vue

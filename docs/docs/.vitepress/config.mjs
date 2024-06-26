import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: "zh-CN",
  title: "SCUI 文档",
  description: "高性能中后台前端解决方案",
  base: '/scui-doc/',
  head: [
    ['link', { rel: 'icon', href: '/scui-doc/logo.png' }],
    // ['link', { rel: 'stylesheet', href: '/static/css/style.css' }],
  ],
  cleanUrls: true,  // 干净的路由，不带 .html
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/vab/' },
      { text: '演示地址', link: 'https://python-abc.xyz/scui-doc/demo' },
    ],
    sidebar: {
			'/guide/': [
        {
          text: '基础',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '路由', link: '/guide/router' },
            { text: '布局样式', link: '/guide/style' },
            { text: '和服务端进行交互', link: '/guide/server' },
            { text: '第一个页面', link: '/guide/newPage' },
            { text: '构建与部署', link: '/guide/build' },
          ]
        },
        {
          text: '进阶',
          items: [
            { text: '代码风格指南', link: '/guide/codestyle' },
            { text: '模块抽离', link: '/guide/splitmod' },
            { text: '图标', link: '/guide/iconfont' },
            { text: '全局', link: '/guide/global' },
          ]
        },
      ],
			'/vab/': [
        {
          text: '组件介绍',
          items: [
            { text: '介绍', link: '/vab/' },
          ]
        },
        {
          text: '扩展组件',
          items: [
            { text: 'scEcharts 图表', link: '/vab/echarts' },
            { text: 'scEditor 富文本编辑器', link: '/vab/editor' },
            { text: 'scFilterBar 数据过滤器', link: '/vab/filterbar' },
            { text: 'scFormTable 表格表单', link: '/vab/formTable' },
            { text: 'scTable 数据表格', link: '/vab/table' },
            { text: 'scTableSelect 表格选择器', link: '/vab/tableselect' },
            { text: 'scUpload 上传', link: '/vab/upload' },
            { text: 'scStatistic 统计数值', link: '/vab/statistic' },
            { text: 'scCropper 图像剪裁', link: '/vab/cropper' },
            { text: 'scContextmenu 右键菜单', link: '/vab/contextmenu' },
          ]
        },
        {
          text: '内置工具',
          items: [
            { text: 'print 打印', link: '/vab/print' },
            { text: 'tool 工具集', link: '/vab/tool' },
          ]
        },
      ],
    },
    outline: {
      level: 'deep',
      // label: '本页导航'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/shenxgan/SCUI' }
    ],
    editLink: {
      pattern: 'https://github.com/shenxgan/scui/edit/main/docs/docs/:path',
      // text: 'Edit this page on GitHub',
      text: '在 GitHub 上编辑此页面',
    },
    lastUpdated: {
      text: '最后更新于',
    },
    search: {
      provider: 'local'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  },
  // https://github.com/vuejs/vitepress/blob/main/src/node/markdown/markdown.ts
  markdown: {
    lineNumbers: true,
    // https://github.com/antfu/shikiji/blob/main/docs/themes.md#all-themes
    theme: { light: 'min-light', dark: 'min-dark' },
  },
})

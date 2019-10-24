module.exports = {
  theme: 'reco',
  base: '/',
  lang: 'zh-cn',
  title: '回忆时光博客',
  author: '回忆时光',
  description: 'blog',
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }],
    ['meta', {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,user-scalable=no'
    }],
  ],
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/dongranliu/dongranliu.github.io',
    // 自定义仓库链接文字。
    repoLabel: 'GitHub仓库',
    docsBranch: 'source',
    editLinks: true,
    type: 'blog',
    // 默认为 "Edit this page"
    editLinkText: '帮助我改善此页面',
    startYear: '2017',
    huawei: true,
    themePicker: false,
    noFoundPageByTencent: false,
    lastUpdated: '最后更新时间',
    nav: [{
        text: '首页',
        link: '/',
        icon: 'reco-home'
      },
      {
        text: '时间轴',
        link: '/timeLine/',
        icon: 'reco-date'
      },
      {
        text: '关于我',
        link: '/about/',
        icon: 'reco-account'
      }
    ],
    blogConfig: {
      tag: {
        location: 2, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认文案 “标签”
      },
    }
  },
  markdown: {
    lineNumbers: true
  },
  evergreen: true,
  plugins: [
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          const moment = require('moment')
          return moment(timestamp).format('YYYY-MM-DD HH:mm')
        },
      },
    ],
  ],
}

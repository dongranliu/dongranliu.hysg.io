module.exports = {
  base: '/',
  title: '回忆时光博客',
  description: 'blog',
  themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/dongranliu/dongranliu.github.io/',
        // 自定义仓库链接文字。
        repoLabel: 'GitHub仓库',
        nav: [
            { text: '首页', link: '/' },
            { text: '文章', link: '/blog/firstblog.md' }
        ]
    },
    sidebar: [
      ['/', '首页'],
      ['/blog/FirstBlog.md', '我的第一篇博文']
    ]
}

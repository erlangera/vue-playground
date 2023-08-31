module.exports = {
  title: 'Vue 源码',
  description: 'Vue源码实验例子',
  base: '/',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  plugins: ['@vuepress/plugin-medium-zoom'],
  themeConfig: {
    nav: [
      { text: 'Vue 2.x', link: '/v2/' },
      { text: 'Vue 3.x', link: '/v3/' }
    ],
    sidebar: {
      '/v2/': [
        '',
        'reactive/',
        'constructor/',
        'lifecycle/',
        'component/',
        'directive/'
        // {
        //   title: '',
        //   collapsable: false,
        //   children: [],
        // },
      ],
      '/v3/': [
        '',
        'reactive/'
      ]
    },
  },
  markdown: {
    // lineNumbers: true,
  },
};

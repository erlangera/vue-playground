module.exports = {
  title: 'Vue 源码',
  description: 'Vue源码实验例子',
  base: '/vue-playground/',
  themeConfig: {
    nav: [{ text: 'Vue 2.x', link: '/v2/' }],
    sidebar: {
      '/v2/': [
        '',
        {
          title: '数据驱动',
          collapsable: false,
          children: [['reactive/', 'Introduction']],
        },
      ],
    },
  },
};

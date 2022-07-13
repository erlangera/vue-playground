import("../vue.study.esm.js").then((module) => {
  const { Vue } = module;
  const Tag = Vue.component('tag', {
    props: ['label'],
    render(h) {
      return h(
        'span',
        {
          attrs: {
            style: 'background: #ecf5ff; color: #409eff; border: 1px solid #d9ecff; border-radius: 4px; padding: 5px;'
          }
        }, 
        this.label)
    }
  });
  const app = new Vue({
    components: {
      tag2: Tag
    },
    render(h) {
      return h('div', [
        h('tag', {props: {label: 'Test'}}),
        h('tag2', {props: {label: 'Test2'}})]
      );
    },
  });
  app.$mount("#app");
});

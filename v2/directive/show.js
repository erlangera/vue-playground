import("../vue.study.esm.js").then((module) => {
  const { Vue } = module;

  const app = new Vue({
    data() {
      return {
        value: 1,
      };
    },
    template: "<span v-on:click='value++'>{{value}}<span v-show='value%2' style='display: block;'>Test</span></span>"
  });
  app.$mount("#app");
});

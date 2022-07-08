import("../vue.study.esm.js").then((module) => {
  const { Vue } = module;
  const app = new Vue({
    data() {
      return {
        value: 1,
      };
    },
    render(h) {
      const that = this
      return h(
        "span",
        {
          on: {
            click() {
              that.value++;
            },
          },
        },
        `Count ${this.value}`
      );
    },
  });
  app.$mount("#app");
});

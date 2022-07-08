let app;
import("../vue.study.esm.js").then((module) => {
    const { Vue } = module;
    app = new Vue({
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
                // 需要注意的是Vue对象销毁后并不会直接影响其在页面上的显示
                // (显示内容不会直接消失，但相关响应式功能已停止)
                that.$destroy();
              },
            },
          },
          `Count ${this.value}`
        );
      },
    });
    app.$mount("#app");
  });
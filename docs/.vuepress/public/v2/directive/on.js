import("../vue.study.esm.js").then((module) => {
  const { Vue } = module;

  const o = Vue.compile("<span v-on:click='Date.now()'>test</span>");
});

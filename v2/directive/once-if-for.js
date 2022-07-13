import("../vue.study.esm.js").then((module) => {
  const { Vue } = module;

  const o = Vue.compile("<span v-once>test</span>");

  const i = Vue.compile('<span v-if="true">test</span>');

  const f = Vue.compile('<span v-for="item in [2, 4, 6]">test</span>');

  const oi = Vue.compile('<span v-once v-if="true">test</span>');
});

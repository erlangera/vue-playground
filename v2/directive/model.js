import("../vue.study.esm.js").then((module) => {
  const { Vue } = module;

  const app = new Vue({
    data() {
      return {
        value: '',
        value2: ''
      };
    },
    template: 
      `<div>
        <input v-model="value" />
        {{value}}
        <select v-model="value2">
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
        {{value2}}
      </div>`
  });
  app.$mount("#app");
});

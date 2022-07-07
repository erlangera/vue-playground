import("../vue.study.esm.js").then((module) => {
    const { Vue } = module;
    const app = new Vue({
        render(h) {
            return h('span', null, 'Test')
        }
    })
    app.$mount('#app')
})
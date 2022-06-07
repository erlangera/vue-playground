import('../../vue.study.esm.js').then(module => {
    const { Vue, Observer, Watcher } = module;

    let obj = { data: { val: 2} };
    let arr = [1, 2, { data: 3 }, { data: "4" }];
    let ob_obj = new Observer(obj);
    let ob_arr = new Observer(arr);
    // let vm = new Vue();
    let watcher = new Watcher({_watchers:[]}, () => obj.data, console.log);
    obj.data = { val: 3 };
});
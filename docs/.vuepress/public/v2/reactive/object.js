import("../vue.study.esm.js").then((module) => {
  const { Observer, Watcher } = module;
  const vm = {
    _watchers: [],
    _data: {
      obj: {
        a: 2,
      },
    },
  };
  const { _data: data } = vm;
  const ob = new Observer(data);
  const watcher = new Watcher(vm, () => data.obj.a, console.log, {}, true);
  data.obj = {
    a: 3,
  };
});

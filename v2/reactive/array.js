import("../vue.study.esm.js").then((module) => {
  const { Observer, Watcher } = module;
  const vm = {
    _watchers: [],
    _data: {
      obj: [{ a : 1 }, [{ a : 2 }]],
    },
  };
  const { _data: data } = vm;
  const ob = new Observer(data);
  const watcher = new Watcher(vm, () => data.obj, console.log, {}, true);
  data.obj[0].a = -1; // 这里将调用a字段的getter，其dep并未收集到watcher
  data.obj[1].unshift({ a: 3 }); // 这里将通过data.obj[1].__ob__.dep触发的notify
});

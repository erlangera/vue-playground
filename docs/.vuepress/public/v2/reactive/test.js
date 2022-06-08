import('../vue.study.esm.js').then(module => {
    const { Observer, Watcher } = module;
    let vm = {
        _watchers: [],
        _data: {
          obj: {
            a: 2,
          },
        },
      };
      const { _data: data } = vm;
      new Observer(data);
      new Watcher(vm, () => data.obj.a, console.log, true);
      data.obj = {
        a: 3,
      };
});
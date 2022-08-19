import("./reactivity.esm-browser.js").then((module) => {
  console.log(module);
  const { reactive, ReactiveEffect } = module;
  const obj = reactive({
    a: 1,
    b: 2,
  });
  const effect = new ReactiveEffect(
    () => {
      console.log("effect fn");
      return obj.a + obj.b;
    },
    () => {
      console.log("effect scheduler");
    }
  );
  effect.run();
  obj.a++;
  console.log("a");
});

# 响应式原理
响应式原理涉及三个对象`src\core\observer\index.ts`中的`Observer`、`src\core\observer\dep.ts`中的`Dep`和`src\core\observer\watcher.ts`中的`Watcher`，其关系为`Observer`->`Dep`<->`Watcher`

![Observer、Dep、Watcher关系图](./reactive.png)

<<< @/docs/v2/reactive/test.js

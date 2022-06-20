# 构造函数
构造函数Vue的构造过程，这里以runtime+compiler版本为例。依赖路径为`src\platforms\web\entry-runtime-with-compiler.ts` -> `src\platforms\web\runtime\index.ts` -> `src\core\instance\index.ts`

<<< @/docs/.vuepress/public/v2/constructor/constructor.js

<Playground :code-path="$withBase('/v2/constructor/constructor.js')" />

如下图自行设置断点。
![constructor断点](./constructor.png)

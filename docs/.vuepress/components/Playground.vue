<template>
  <div>
    <iframe v-if="iframeFlag" ref="sandboxRef" src="/vue-playground/sandbox.html" style="display: none;" @load="run(codePath)"></iframe>
    <span v-if="debuggerPathFn">
      <input v-model="debuggerFlag" type="checkbox" />断点
    </span>
    <button @click="play">运行</button>
  </div>
</template>

<script>
export default {
  name: "Playground",
  props: {
    codePath: {
      type: String,
    },
    debuggerPathFn: {
      type: Function,
    }
  },
  data() {
    return {
      iframeFlag: false,
      debuggerFlag: false
    }
  },
  methods: {
    play() {
      if (this.iframeFlag) {
        this.iframeFlag = false;
        this.$nextTick(() => {
          this.iframeFlag = true;
        })
      } else {
        this.iframeFlag = true;
      }
    },
    run(path) {
      if (this.debuggerPathFn) {
        this.$refs.sandboxRef.contentWindow.run(
          this.debuggerPathFn(this.debuggerFlag)
        ).then(() => {
          this.$refs.sandboxRef.contentWindow.run(path);
        })
      } else {
        this.$refs.sandboxRef.contentWindow.run(path);
      }
    }
  },
};
</script>
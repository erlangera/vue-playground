<template>
  <div>
    <iframe v-if="iframeFlag" ref="sandboxRef" src="/vue-playground/sandbox.html" style="display: none;" @load="run(codePath)"></iframe>
    <div ref="scriptContainerRef"></div>
    <input v-model="debuggerFlag" type="checkbox">Dep断点</input>
    <button @click="play">play</button>
  </div>
</template>

<script>
export default {
  name: "Playground",
  props: {
    codePath: {
      type: String,
    },
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
      this.$refs.sandboxRef.contentWindow.run(
        this.$withBase(`/v2/reactive/toggle-debugger-${this.debuggerFlag}.js`)
      ).then(() => {
        this.$refs.sandboxRef.contentWindow.run(path);
      })
    }
  },
};
</script>
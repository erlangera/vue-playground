<template>
  <div>
    <span v-if="debuggerPathFn">
      <input v-model="debuggerFlag" type="checkbox" />断点
    </span>
    <button @click="play">运行</button>
    <div :class="{placeholder: showIframe}">
      <iframe v-if="iframeFlag" v-show="showIframe" ref="sandboxRef" src="/sandbox.html" @load="run(codePath)"></iframe>
    </div>
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
    },
    showIframe: {
      type: Boolean,
      default: false
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
<style scoped>
.placeholder {
  height: 300px;
  width: auto;
  margin-top: 5px;
  border: 1px solid;
}
iframe {
  height: 100%;
  width: 100%;
  border: none;
}
</style>
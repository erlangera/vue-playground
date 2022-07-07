<template>
  <div class="collapse">
    <button @click="collapse = !collapse">折叠</button>
    <div v-show="!collapse">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collapse",
  data() {
    return {
      collapse: false
    };
  }
};
</script>

<style scoped>
.collapse {
  border: 1px solid;
}
</style>
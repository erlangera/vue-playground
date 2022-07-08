<template>
  <div class="collapse">
    <button @click="collapse = !collapse">代码折叠 {{ collapse ? '🔻' : '🔺'}}</button>
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
  border: 1px solid #ebebeb;
  border-radius: 3px;
}
.collapse > button {
  display: block;
  border: 0;
  outline: 0;
}
</style>
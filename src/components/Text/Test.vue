<template>
  <div>
    <svg width="0" height="0" viewBox="0 0 100 100">
      <!-- defs:容器 -->
      <defs>
        <!-- g:打包成一个固定的组件 -->
        <symbol id="more" viewBox="0 0 100 100">
          <circle r="5" cx="20" cy="25" fill="currentColor"></circle>
          <circle r="5" cx="20" cy="50" fill="currentColor"></circle>
          <circle r="5" cx="20" cy="75" fill="currentColor"></circle>
          <line x1="40" y1="25" x2="100" y2="25" stroke-width="8" stroke="currentColor"></line>
          <line x1="40" y1="50" x2="100" y2="50" stroke-width="8" stroke="currentColor"></line>
          <line x1="40" y1="75" x2="100" y2="75" stroke-width="8" stroke="currentColor"></line>
        </symbol>
        <symbol id="filledArrowRight" viewBox="0 0 100 100">
          <polyline points="20 10,80 50, 20 90" fill="currentColor"></polyline>
        </symbol>
        <symbol id="arrowRight" viewBox="0 0 100 100">
          <polyline points="30 10,70 50, 30 90" fill="transparent" stroke="currentColor" stroke-width="5"></polyline>
        </symbol>
      </defs>

    </svg>

  </div>

</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "TestComponent",
  setup(props, context) {
    const message = "hello world";
    const count = ref(1);
    const doubleCount = computed(() => count.value * 2);
    const addCount = () => {
      count.value++;
    };

    return {
      message,
      doubleCount,
      addCount,
    };
  },
};
</script>

<style lang="scss" scoped>
.test {
  color: red;
}
</style>
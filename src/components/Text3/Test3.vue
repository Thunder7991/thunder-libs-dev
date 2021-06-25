<template>
  <div class="test">
    {{message}}
  </div>
</template>

<script>
import {computed,ref} from 'vue'
export default {
  name: "TestComponent3",
  setup(props, context) {
    const message = "hello world3";

    return {
      message,

    };
  },
};
</script>

<style lang="scss" scoped>
.test {
  color: red;
}
</style>
<template>
  <div class="thunder-loading">
    <!-- stroke-dasharray : 2 π r / 需要展示的部分(4) -->
    <svg :width="width" :height="height" viewBox="0 0 50 50" preserveAspectRatio="xMidYMid meet">
      <circle
        cx="25"
        cy="25"
        r="22 "
        fill="none"
        stroke-width="3"
        :stroke="outsideColor"
        stroke-dasharray="34"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 25 25;360 25 25"
          :dur="`${duration}s`"
          repeatCount="indefinite"
        ></animateTransform>
        <animate attributeName="stroke" :values="outsideColorAnimation" dur="2s" repeatCount="indefinite"></animate>
      </circle>
      <circle
        cx="25"
        cy="25"
        r="12 "
        fill="none"
        stroke-width="3"
        :stroke="insideColor"
        stroke-dasharray="19"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="360 25 25;0 25 25"
          :dur="`${duration}s`"
          repeatCount="indefinite"
        ></animateTransform>
        <animate attributeName="stroke" :values="insideColorAnimation" dur="2s" repeatCount="indefinite"></animate>
      </circle>
    </svg>
    <div class="thunder-loading-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  name: 'ThunderLoading',
  props: {
    width: {
      type: [Number, String],
      default: 50,
    },
    height: {
      type: [Number, String],
      default: 50,
    },
    outsideColor: {
      type: String,
      default: '#3be6cb',
    },
    insideColor: {
      type: String,
      default: '#02bcfe',
    },
    duration: {
      type: [Number, String],
      default: 2,
    },
  },
  setup(props, ctx) {
    const outsideColorAnimation = computed(() => `${props.outsideColor};${props.insideColor};${props.outsideColor}`);
    const insideColorAnimation = computed(() => `${props.insideColor};${props.outsideColor};${props.insideColor}`);

    return {
      outsideColorAnimation,
      insideColorAnimation,
    };
  },
};
</script>

<style lang="scss" scoped>

.thunder-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
}
</style>

<template>
  <div class="thunder-flybox" :ref="refName">
    <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`">
      <defs>
        <!-- path：元素是用来定义形状的通用元素。所有的基本形状都可以用path元素来创建。-->
        <path :id="pathId" :d="path" fill="none"></path>
        <!--radialGradient: 用来定义径向渐变，以对图形元素进行填充或描边。 -->
        <radialGradient :id="radialGradientId" cx="50%" cy="50%" fx="100%" fy="50%" r="50%">
          <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
        </radialGradient>
        <!-- mask:蒙版 -->
        <mask :id="maskId">
          <circle :r="startLength" cx="0" cy="0" :fill="`url(#${radialGradientId})`">
            <animateMotion :dur="`${duration}s`" :path="path" rotate="auto" repeatCount="indefinite"></animateMotion>
          </circle>
        </mask>
      </defs>
      <use :href="`#${pathId}`" stroke-width="1" :stroke="lineColor"></use>
      <use :href="`#${pathId}`" stroke-width="3" :stroke="startColor" :mask="`url(#${maskId})`"></use>
    </svg>
    <div class="thunder-fly-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed, ref, onMounted, getCurrentInstance } from 'vue';
import { v4 as uuidv4 } from 'uuid';
export default {
  name: 'ThunderFlyBox',
  props: {
    lineColor: {
      type: String,
      default: '#235fa7',
    },
    startColor: {
      type: String,
      default: '#4fd2dd',
    },
    startLength: {
      type: [Number, String],
      default: 50,
    },
    duration: {
      type: [Number, String],
      default: 5,
    },
  },
  setup(props, ctx) {
    const uuid = uuidv4();
    const width = ref(0);
    const height = ref(0);
    const refName = 'thunderFlyBox';
    const pathId = `${refName}-path-${uuid}`;
    const radialGradientId = `${refName}-radient-${uuid}`;
    const maskId = `${refName}-maslId-${uuid}`;

    const path = computed(
      () => `M5 5 L${width.value - 5} 5 L${width.value - 5} ${height.value - 5} L5 ${height.value - 5} Z`
    );
    const init = () => {
      const instance = getCurrentInstance();
      const dom = instance.ctx.$refs[refName];
      width.value = dom.clientWidth;
      height.value = dom.clientHeight;
    };
    onMounted(() => {
      init();
    });
    return {
      width,
      height,
      refName,
      path,
      pathId,
      radialGradientId,
      maskId,
    };
  },
};
</script>

<style lang="scss" scoped>
.thunder-flybox {
  position: relative;
  width: 100%;
  height: 100%;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .thunder-fly-box-content {
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
}
</style>

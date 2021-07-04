<template>
  <div id="thunder-container" :ref="refName">
    <template v-if="ready">
      <slot></slot>
    </template>
  </div>
</template>

<script>
import { ref, getCurrentInstance, onMounted, onUnmounted, nextTick } from 'vue';
import { debounce } from '../../util/index';
export default {
  name: 'Container',
  props: {
    options: Object,
  },
  setup(props, ctx) {
    const refName = 'thunderContainer';
    const width = ref(0);
    const height = ref(0);
    const originalWidth = ref(0);
    const originalHeight = ref(0);
    const ready = ref(false);
    let context, dom, observerObj;
    const initSize = () => {
      return new Promise((resolve) => {
        nextTick(() => {
          dom = context.$refs[refName];
          //获取大屏的真是尺寸
          if (props.options && props.options.width && props.options.height) {
            width.value = props.options.width;
            height.value = props.options.height;
          } else {
            width.value = dom.clientWidth;
            height.vlaue = dom.clientHeight;
          }
          //获取画布的尺寸
          if (!originalWidth.value || !originalHeight.value) {
            //在没有复制的情况下调用次函数
            originalWidth.value = window.screen.width;
            originalHeight.value = window.screen.height;
          }
          resolve();
        });
      });
    };

    const updateSize = () => {
      if (width.value && height.value) {
        dom.style.width = `${width.value}px`;
        dom.style.height = `${height.value}px`;
      } else {
        dom.style.width = `${originalWidth.value}px`;
        dom.style.height = `${originalHeight.value}px`;
      }
    };

    const updateScale = () => {
      //获取真实的视口尺寸
      const currentWidth = document.body.clientWidth;
      const currentHeight = document.body.clientHeight;
      //获取大屏的最终宽高 当 width没有值的情况下
      const realWidth = width.value || originalWidth.value;
      const realHeight = height.value || originalHeight.value;
      const widthScale = currentWidth / realWidth;
      const heightScale = currentHeight / realHeight;
      dom && (dom.style.transform = `scale(${widthScale},${heightScale})`);
    };
    const onResize = async (e) => {
      await initSize();
      updateScale();
    };

    // 新的需求, 页面更新样式
    const initMutationObserver = () => {
      const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      observerObj = new MutationObserver(onResize);
      observerObj.observe(dom, { attributes: true, attributeFilter: ['style'], attributesOldValue: true });
    };

    const removeMutationObserver = () => {
      if (observerObj) {
        observerObj.disconnect();
        observerObj.takeRecords();
        observerObj = null;
      }
    };
    onMounted(async () => {
      ready.value = false;
      context = getCurrentInstance().ctx;
      await initSize();
      updateSize();
      updateScale();
      window.addEventListener('resize', debounce(150, onResize));
      initMutationObserver();
      ready.value = true;
    });

    onUnmounted(() => {
      window.removeEventListener('resize', onResize);
      removeMutationObserver();
    });
    return {
      refName,
      ready,
    };
  },
};
</script>

<style lang="scss" scoped>
#thunder-container {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  transform-origin: left top;
  z-index: 999;
}
</style>

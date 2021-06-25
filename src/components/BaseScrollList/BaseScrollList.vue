<template>
  <div class="scroll-list" :id="id">
    <div
      class="base-scroll-list-header"
      :style="{ backgroundColor: config.headerBg, height: `${config.headerHeight}px` }"
    >
      <div
        class="header-item base-scroll-list-text"
        v-for="(headerItem, i) in headerData"
        :key="headerItem + i"
        :style="{width:`${columnWidths[i]}px`,...headerStyle[i]}"
        v-html="headerItem"
      ></div>
    </div>
    <div class="base-scroll-list-rows"></div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import useScreen from '../../hooks/userScreen';
import { onMounted, ref } from 'vue';
import cloneDeep from 'lodash/cloneDeep';
import assgin from 'lodash/assign';
export default {
  name: 'BaseScrollList',
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, ctx) {
    const id = `scroll-list-${uuidv4()}`;
    const { config } = props;
    const { width, height } = useScreen(id);
    const defaultConfig = {
      //标题的数据
      headerData: [],
      //标题的样式
      headerStyle: [],
      //标题的背景颜色
      headerBg: 'rgb(90,90,90)',
      // 标题的高度
      headerHeight: 35,
      //标题是否展示
      headerIndex: false,
      headerIndexContext: '#',
      headerIndexStyle: {
        width:'50px'
      },
    };
    const actualConfig = ref([]);
    const headerData = ref([]);
    const headerStyle = ref([]);
    const columnWidths = ref([]);
    const handleHeader = (config) => {
      const _headerData = cloneDeep(config.headerData);
      const _headerStyle = cloneDeep(config.headerStyle);
      if (_headerData.length === 0) {
        return;
      }
      if (config.headerIndex) {
        _headerData.unshift(config.headerIndexContext);
        _headerStyle.unshift(config.headerIndexStyle);
      }
      //动态计算header中没一列的宽度 (因为unshift元素后需要重新计算宽高)
      const avgWidth = width.value / _headerData.length;
      const _columnWidth = new Array(_headerData.length).fill(avgWidth);
      columnWidths.value = _columnWidth;
      headerData.value = _headerData;
      headerStyle.value = _headerStyle;
    };
    onMounted(() => {
      const _actualConfig = assgin(defaultConfig, props.config);
      handleHeader(_actualConfig);
      actualConfig.value = _actualConfig;
    });
    return {
      id,
      headerData,
      headerStyle,
      actualConfig,
      columnWidths
    };
  },
};
</script>

<style lang="scss" scoped>
.scroll-list {
  width: 100%;
  height: 100%;
  .base-scroll-list-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .base-scroll-list-header {
    display: flex;
    font-size: 15px;
    align-items: center;
  }
  .header-item {
    width: 150px;
  }
  .base-scroll-list-rows {
  }
}
</style>

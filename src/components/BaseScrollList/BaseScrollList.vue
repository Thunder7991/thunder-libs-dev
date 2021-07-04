<template>
  <div class="scroll-list" :id="id">
    <div
      class="base-scroll-list-header"
      :style="{
        backgroundColor: actualConfig.headerBg,
        height: `${actualConfig.headerHeight}px`,
        fontSize: `${actualConfig.headerFontSize}px`,
        color: actualConfig.headerColor,
      }"
      v-if="actualConfig.showMenu"
    >
      <div
        class="header-item base-scroll-list-text"
        v-for="(headerItem, i) in headerData"
        :key="headerItem + i"
        :style="{ width: `${columnWidths[i]}px`, ...headerStyle[i] }"
        v-html="headerItem"
        :align="aligns[i]"
      ></div>
    </div>
    <div class="base-scroll-list-rows-wrapper" :style="{ height:actualConfig.showMenu? `${height - actualConfig.headerHeight}px`: `${height}px` }">
      <div
        class="base-scroll-list-rows"
        v-for="(rowData, index) in currentRowsData"
        :key="rowData.rowIndex"
        :style="{
          height: `${rowHeights[index]}px`,
          backgroundColor: rowData.rowIndex % 2 === 0 ? rowBg[1] : rowBg[0],
          fontSize: `${actualConfig.rowFontSize}px`,
          color: actualConfig.rowColor,
          lineHeight: `${rowHeights[index]}px`,
        }"
      >
        <div
          class="base-scroll-list-colums base-scroll-list-text"
          v-for="(cloData, colIndex) in rowData.data"
          v-html="cloData"
          :key="cloData + colIndex"
          :style="{
            width: `${columnWidths[colIndex]}px`,
            ...rowStyle[colIndex],
          }"
          :align="aligns[colIndex]"
        >
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import useScreen from '../../hooks/userScreen';
import { onMounted, ref, watch } from 'vue';
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
      //序号列标题的内容
      headerIndexContext: '#',
      //序号列头部的样式
      headerIndexStyle: {
        width: '50px',
      },
      //存储序号列
      headerIndexData: [],
      //序号列内容的展示
      rowIndexStyle: {
        width: '50px',
      },
      data: [], //二维数组
      //显示的数据量(行数)
      rowNum: 5,
      //每行的样式
      rowStyle: [],
      //奇数和偶数的背景颜色
      rowBg: [],
      //居中方式
      aligns: [],
      headerFontSize: 28,
      rowFontSize: 28,
      headerColor: '#fff',
      rowColor: '#000',
      moveNumber: 1, //移动的位置
      duration: 2000, //动画间隔时间
    };
    const id = `scroll-list-${uuidv4()}`;
    const { config } = props;
    const { width, height } = useScreen(id);
    const actualConfig = ref([]);
    const headerData = ref([]);
    const headerStyle = ref([]);
    const rowStyle = ref([]);
    const columnWidths = ref([]);
    const rowHeights = ref([]);
    const rowsData = ref([]);
    const rowBg = ref([]);
    const rowNum = ref(defaultConfig.rowNum);
    const aligns = ref([]);
    const currentRowsData = ref([]); //
    const currentIndex = ref(0); //动画指针
    const isAnimationStart = ref(true);
    let avgHeight;
    const handleHeader = (config) => {
      let _headerData = cloneDeep(config.headerData);
      const _headerStyle = cloneDeep(config.headerStyle);
      const _rowStyle = cloneDeep(config.rowStyle);
      const _aligns = cloneDeep(config.aligns);
      // rowStyle
      const _rowsData = cloneDeep(config.data);

      if (_headerData.length === 0) {
      _headerData=  new Array(_rowsData[0].length).fill([]);
      }
      if (config.headerIndex) {
        _headerData.unshift(config.headerIndexContext);
        _headerStyle.unshift(config.headerIndexStyle);
        _rowStyle.unshift(config.rowIndexStyle);
        
        _rowsData.forEach((rows, index) => {
    
          //处理序号列的数据
          if (config.headerIndexData && config.headerIndexData.length > 0 && config.headerIndexData[index]) {
            rows.unshift(config.headerIndexData[index]);
          } else {
            rows.unshift(index + 1);
          }
        
        });
        _aligns.unshift('center');
      }
      //动态计算header中没一列的宽度 (因为unshift元素后需要重新计算宽高)
      let usedWidth = 0; // 记录父级元素剩余的width宽度
      let usedColmnNum = 0;
      _headerStyle.forEach((style, index) => {
        if (style.width) {
          usedWidth = +style.width.replace('px', '');
          usedColmnNum++; //获取设置width属性的元素数量
        }
      });
      //动态计算列款时: 剩余的宽度 / 剩余无width元素的个数
      const avgWidth = (width.value - usedWidth) / (_headerData.length - usedColmnNum);
      const _columnWidth = new Array(_headerData.length).fill(avgWidth);
      _headerStyle.forEach((style, index) => {
        if (style.width) {
          const headerWidth = +style.width.replace('px', '');
          // usedColumnNum++; //获取设置width属性的元素数量
          _columnWidth[index] = headerWidth;
        }
      });
      columnWidths.value = _columnWidth;
      headerData.value = _headerData;
      headerStyle.value = _headerStyle;
      rowStyle.value = _rowStyle;
      const { rowNum } = config;
      // rowNum:默认是10 _rowsData.length是23
      if (_rowsData.length >= rowNum) {
        const newRowData = [..._rowsData, ..._rowsData];
        rowsData.value = newRowData.map((item, index) => ({
          data: item,
          rowIndex: index,
        }));
      } else {
        rowsData.value = _rowsData.map((item, index) => {
          return {
            data: item,
            rowIndex: index,
          };
        });

      }

      aligns.value = _aligns;
    };
    //赋值rowsData
    const handleRows = (config) => {
      //动态计算每行数据的高度
      const { headerHeight } = config;
      rowNum.value = config.rowNum;
      const unusedHeight = height.value - headerHeight;
      //如果rowNum大于实际的数据长度,则以实际数据长度为准
      if (rowNum.value > rowsData.value.length) {
        avgHeight = unusedHeight / rowsData.value.length;
        rowNum.value = rowsData.value.length;
      }
      avgHeight = unusedHeight / rowNum.value; //平均高度F
      rowHeights.value = new Array(rowNum.value).fill(avgHeight);
      //获取行背景色
      if (config.rowBg) {
        rowBg.value = config.rowBg;
      }
    };
    const startAnimation = async () => {
      if (!isAnimationStart.value) return;
      const config = actualConfig.value;
      const { rowNum, moveNumber, duration } = config;
      const totalLength = rowsData.value.length;
      if (totalLength < rowNum) return;
      const index = currentIndex.value;
      const _rowsData = cloneDeep(rowsData.value);

      //将数据重新头尾连接
      const rows = _rowsData.slice(index);
      rows.push(..._rowsData.slice(0, index));
      currentRowsData.value = rows;
      //先将所有行高度还原
      rowHeights.value = new Array(totalLength).fill(avgHeight);
      const waitTime = 300;
      if (!isAnimationStart.value) return;
      await new Promise((resolve) => setTimeout(resolve, waitTime));
      //将moveNumber的航高度设置为0
      rowHeights.value.splice(0, moveNumber, ...new Array(moveNumber).fill(0));
      currentIndex.value += moveNumber;
      //是否到达最后一组数据
      const isLast = currentIndex.value - totalLength;
      //解决移动的次数大于1
      if (isLast >= 0) {
        currentIndex.value = isLast;
      }
      if (!isAnimationStart.value) return;
      //延迟操作 sleep休眠
      await new Promise((resolve) => setTimeout(resolve, duration - waitTime));
      if (!isAnimationStart.value) return;
      // stopAnimation()
      // await startAnimation();
    };
    const stopAnimation = () => {
      isAnimationStart.value = false;
    };
   
    const update = () => {
      stopAnimation();
      const _actualConfig = assgin(defaultConfig, props.config);
      rowsData.value = _actualConfig.data || [];
      handleHeader(_actualConfig);
      handleRows(_actualConfig);
      actualConfig.value = _actualConfig;
      //展示动画
      isAnimationStart.value = true;
      startAnimation();
    };
     onMounted(() =>{
    })
    watch(
      () => props.config,
      () => {
        update();
      }
    );
    return {
      id,
      headerData,
      headerStyle,
      actualConfig,
      columnWidths,
      rowsData,
      rowHeights,
      rowStyle,
      rowBg,
      aligns,
      currentRowsData,
      height,
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
  .base-scroll-list-rows-wrapper {
    overflow: hidden;

    .base-scroll-list-rows {
      display: flex;
      align-items: center;
      transition: all 0.3s linear;
      .base-scroll-list-colums {
        height: 100%;
      }
    }
  }
}
</style>

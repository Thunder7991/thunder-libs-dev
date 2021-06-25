<template>
    <div :class="[className, 'echarts']"></div>
</template>

<script>
import { watch, onMounted ,nextTick} from 'vue';
import * as Echarts from 'echarts';
import { v4 as uuidv4 } from 'uuid';
export default {
  name: 'VueEcharts',
  props: {
    option: Object,
    theme: [String, Object],
  },
  setup(props) {
    let dom, chart;
     let className = `echarts${uuidv4()}`
      const initChart = () => {
        if (!chart) {
          dom = document.getElementsByClassName(className)[0]
          chart = Echarts.init(dom, props.theme)
        }
        if (props.option) {
          chart.setOption(props.option)
        }
      }
      onMounted(() => {
        initChart()
      })
      watch(() => props.option, () => {
        initChart()
      })

   return {
        className
      }
  },
};
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>

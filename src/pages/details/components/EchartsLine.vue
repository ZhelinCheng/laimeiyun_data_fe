<template>
  <div :id="id" class="echarts-line"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legendScroll';
// import 'echarts/lib/component/axisPointer';
import walden from './walden';
/* eslint-disable */
import { mapGetters } from 'vuex';

export default {
  name: 'EchartsLine',
  data() {
    return {
      lineEle: {}
    };
  },
  props: ['xAxisData', 'seriesData', 'memberID', 'id'],
  mounted() {
    this.lineEle = echarts.init(document.getElementById(this.id), walden);
  },
  computed: {
    ...mapGetters([
      'getBaseItem'
    ])
  },
  watch: {
    seriesData() {
      this.initTable();
    }
  },
  methods: {
    initTable(type = false) {
      this.lineEle.setOption({
        backgroundColor: '#fff',
        title: {
          text: this.getBaseItem(this.memberID).name + this.seriesData.title,
          subtext: this.seriesData.subtext,
          x: 'center'
        },
        // tooltip提示
        tooltip: {
          trigger: 'axis'
        },
        // tooltip提示文字
        legend: {
          data: [this.seriesData.inverse ? '排名' : '增长'],
          x: 'left'
        },
        // 工具栏组件
        toolbox: {
          show: !this.$isMobile,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
          }
        },
        grid: [{
          left: this.id === 'j-echarts-day' ? 60 : 45,
          right: 15
        }],
        xAxis: {
          // type: 'time',
          boundaryGap: false,
          data: this.xAxisData,
          splitLine:{show: false}
          // position: 'top'
        },
        yAxis: {
          type: 'value',
          inverse: this.seriesData.inverse,
          axisLabel: {
            formatter: '{value}'
          }
        },
        series: [
          {
            name: this.seriesData.inverse ? '排名' : '增长',
            type: 'line',
            data: this.seriesData.data,
            smooth: true,
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              label: {
                show: !this.seriesData.inverse,
                position: 'middle',
              },
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          }
        ]
      }, type);
    }
  }
};
</script>

<style lang="less" scoped>
  .echarts-line {
    margin: 0 auto;
    width: 1260px;
    height: 400px;
  }

  @media all and (max-width: 1200px) {
    .echarts-line {
      width: 98%;
    }
  }
</style>

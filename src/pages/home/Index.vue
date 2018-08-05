<template>
    <div class="home">
      <el-alert
        title="接口开放"
        type="warning"
        description="本网站所有数据接口开放，接口文档在ICP备案左边。"
        center>
      </el-alert>
      <h2 class="home-title">火箭少女101数据中心（公测版）</h2>
      <TableListHour
        :tableData=tableData
        :tableTitle=tableTitleHour
      />
      <TableListDay
        :tableData=tableData
        :tableTitle=tableTitleDay
      />
    </div>
</template>

<script>
import TableListHour from './components/TableListHour';
import TableListDay from './components/TableListDay';

export default {
  name: 'Index',
  data() {
    return {
      tableData: [],
      tableTitleHour: '小时数据',
      tableTitleDay: '天数据'
    };
  },
  components: {
    TableListHour,
    TableListDay
  }
};
</script>

<style scoped>
  .home {
    color: #666;
  }
  .home-title {
    margin: 1em 0 1.2em;
    font-size: 1.2em;
    text-align: center;
    font-weight: bold;
    color: #606266;
  }
</style>

<template>
    <div class="home">
      <el-alert
        title="说明"
        type="warning"
        description="点击“分时详情”，发现更多。如果发现页面数据有任何错误，可以发送邮件：i@zhelin.me 反馈给我。"
        center>
      </el-alert>
      <h2 class="home-title">火箭少女101数据中心（尝鲜版）</h2>
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

<template>
  <div class="table-list">
    <h3 class="table-list-title">{{$store.state.base.titleDay}}</h3>
    <el-table
      :data="$store.state.base.baseData"
      size="mini"
      stripe
      class="table-list-box"
      style="width: 100%">
      <el-table-column
        fixed
        prop="name"
        label="成员"
        width='66'>
      </el-table-column>
      <el-table-column label="微博数据">
        <el-table-column
          prop="weibo_read.num"
          sortable
          label="阅读数"
          width='90'>
        </el-table-column>
        <el-table-column
          prop="weibo_read.num_add"
          sortable
          label="阅读变化"
          :width=itemWidth>
        </el-table-column>
        <el-table-column
          prop="weibo_read.total"
          sortable
          label="阅读评分"
          :width=itemWidth>
        </el-table-column>
        <el-table-column
          prop="weibo_int.repost"
          sortable
          label="微博互动"
          :width=itemWidth>
        </el-table-column>
        <el-table-column
          prop="weibo_int.comment"
          sortable
          label="评论互动"
          :width=itemWidth>
        </el-table-column>
        <el-table-column
          prop="weibo_int.interact"
          sortable
          label="总互动数"
          :width=itemWidth>
        </el-table-column>
        <el-table-column
          prop="weibo_int.interact_add"
          sortable
          label="总互变化"
          :width=itemWidth>
        </el-table-column>
        <el-table-column
          prop="weibo_int.total"
          sortable
          label="互动评分"
          :width=itemWidth>
        </el-table-column>
        <el-table-column
          prop="weibo_inf.search"
          sortable
          label="搜索量"
          :width=itemWidth>
        </el-table-column>
        <el-table-column
          prop="weibo_inf.mention"
          sortable
          label="提及阅读"
          :width=itemWidth>
        </el-table-column>
        <el-table-column
          prop="weibo_inf.mention_search"
          sortable
          label="影响力"
          :width=itemWidth>
        </el-table-column>
        <el-table-column
          prop="weibo_inf.mention_search_add"
          sortable
          label="影响变化"
          width='100'>
        </el-table-column>
        <el-table-column
          prop="weibo_inf.total"
          sortable
          label="影响评分"
          :width=itemWidth>
        </el-table-column>
        <el-table-column
          prop="weibo_love.people"
          sortable
          label="送花人数"
          :width=itemWidth>
        </el-table-column>
        <el-table-column
          prop="weibo_love.each"
          sortable
          label="送花次数"
          :width=itemWidth>
        </el-table-column>
        <el-table-column
          prop="weibo_love.close"
          sortable
          label="爱慕值"
          :width=itemWidth>
        </el-table-column>
        <el-table-column
          prop="weibo_love.close_add"
          sortable
          label="爱慕变化"
          :width=itemWidth>
        </el-table-column>
        <el-table-column
          prop="weibo_love.total"
          sortable
          label="爱慕评分"
          :width=itemWidth>
        </el-table-column>
        <el-table-column
          prop="weibo_total.total"
          sortable
          label="总评分"
          :width=itemWidth>
        </el-table-column>
        <el-table-column
          prop="weibo_total.rank"
          sortable
          label="榜单排名"
          :width=itemWidth>
        </el-table-column>
        <el-table-column
          prop="weibo_index"
          sortable
          label="微博指数"
          :width=itemWidth>
        </el-table-column>
        <el-table-column
          prop="weibo_index_add"
          sortable
          label="指数变化"
          :width=itemWidth>
        </el-table-column>
        <el-table-column
          prop="weibo_ring"
          label="指数环比"
          :width=itemWidth>
        </el-table-column>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="更多"
        width="70">
        <template slot-scope="scope">
          <el-button @click="showStatistics(scope.row)" type="text" size="small" class="table-list-statistics">分时详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <p class="table-list-info">
      * 这个网站与之前的性质是不一样的，具体请<a onclick="_czc.push(['_trackEvent', '数据页性质', '点击', '跳转豆瓣']);" href="https://www.douban.com/group/topic/121160607/">点击此处查看</a><br>
      * 天数据每天10:07分获取，获取的是昨天的数据，增长是与前天做对比。
    </p>
  </div>
</template>

<script>
import home from '../../../mixins/home';

export default {
  name: 'TableListDay',
  data() {
    return {
      itemWidth: 95
    };
  },
  mixins: [home]
};
</script>

<style scoped>
  @import "./TableList.less";
</style>

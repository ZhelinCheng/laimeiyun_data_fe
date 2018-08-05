<template>
  <div class="table-list">
    <h3 class="table-list-title">{{$store.state.base.titleHour}}</h3>
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
        <el-table-column label="微博粉丝">
          <el-table-column
            prop="weibo_fans"
            sortable
            label="粉丝"
            :width="itemWidth + 10">
          </el-table-column>
          <el-table-column
            prop="weibo_fans_add"
            sortable
            label="增长"
            :width=itemWidth>
          </el-table-column>
        </el-table-column>
        <el-table-column label="* 平均转评赞（表下有说明）">
          <el-table-column
            prop="weibo_comment"
            sortable
            label="评论"
            :width="itemWidth">
          </el-table-column>
          <el-table-column
            prop="weibo_forward"
            sortable
            label="转发"
            :width="itemWidth">
          </el-table-column>
          <el-table-column
            prop="weibo_like"
            sortable
            label="点赞"
            :width="itemWidth">
          </el-table-column>
        </el-table-column>
        <el-table-column label="超级话题">
          <el-table-column
            prop="super_read"
            label="阅读"
            :width=itemWidth>
          </el-table-column>
          <el-table-column
            prop="super_post"
            label="帖子"
            :width=itemWidth>
          </el-table-column>
          <el-table-column
            prop="super_fans"
            label="粉丝"
            :width=itemWidth>
          </el-table-column>
          <el-table-column
            prop="super_rank"
            label="排名"
            :width=itemWidth>
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column label="百度数据">
        <el-table-column label="百科浏览">
          <el-table-column
            prop="baike_browse"
            sortable
            label="浏览"
            :width=itemWidth>
          </el-table-column>
          <el-table-column
            prop="baike_browse_add"
            sortable
            label="增长"
            :width=itemWidth>
          </el-table-column>
        </el-table-column>
        <el-table-column label="百科鲜花">
          <el-table-column
            prop="baike_flowers"
            sortable
            label="鲜花"
            :width=itemWidth>
          </el-table-column>
          <el-table-column
            prop="baike_flowers_add"
            sortable
            label="增长"
            :width=itemWidth>
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column label="腾讯数据">
        <el-table-column label="Doki数据">
          <el-table-column
            prop="doki_fans"
            sortable
            label="粉丝"
            :width=itemWidth>
          </el-table-column>
          <el-table-column
            prop="doki_fans_add"
            sortable
            label="增长"
            :width=itemWidth>
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="更多"
        min-width="70"
      >
        <template slot-scope="scope">
          <el-button @click="showStatistics(scope.row)" type="text" size="small" class="table-list-statistics">分时详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <p class="table-list-info">
      * 这个网站与之前的性质是不一样的，具体请<a onclick="_czc.push(['_trackEvent', '数据页性质', '点击', '跳转豆瓣']);" href="https://www.douban.com/group/topic/121160607/">点击此处查看</a><br>
      * 小时数据在每个小时的第55分钟获取，增长也是与上一小时55分获取的数据对比。微博平均转赞评数据是取成员最近八条微博的平均值（排除最新发的那条）。
    </p>
  </div>
</template>

<script>
import home from '../../../mixins/home';

export default {
  name: 'TableListHour',
  data() {
    return {
      itemWidth: 75
    };
  },
  mixins: [home]
};
</script>

<style scoped>
  @import "./TableList.less";
</style>

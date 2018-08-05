<template>
    <div class="doc">
      <el-alert
        title="说明"
        type="warning"
        description="微博势力的评分及排名两项数据之前一直统计的是周数据，目前已修正为天数据。"
        center>
      </el-alert>
      <h2 class="home-title">火箭少女101数据中心API文档</h2>
      <div class="doc-content">
        <div class="hd">
          <p>基础URL：https://api.laimeiyun.cn/</p>
          <p>示例URL：https://api.laimeiyun.cn/v1/member/info/6</p>
          <p>* 接口数据内不会包含状态码，请根据HTTP状态码进行判断。接口限频，请勿频繁请求。</p>
        </div>
        <table class="doc-table">
          <tr>
            <th>更新周期</th>
            <th>版本</th>
            <th>接口</th>
            <th>接收参数</th>
            <th>返回参数</th>
            <th>说明</th>
          </tr>
          <tr>
            <td rowspan="7">全部</td>
            <td rowspan="7">v1</td>
            <td rowspan="7">member/info/:id<br>（返回成员今昨两天的所有数据）</td>
            <td rowspan="7">成员排名id 或 all</td>
            <td>id</td>
            <td>成员排名</td>
          </tr>
          <tr>
            <td>name</td>
            <td>姓名</td>
          </tr>
          <tr>
            <td>weibo_index_id</td>
            <td>微博指数ID</td>
          </tr>
          <tr>
            <td>create_hour</td>
            <td>小时数据最近获取时间</td>
          </tr>
          <tr>
            <td>create_day</td>
            <td>天数据最近获取时间</td>
          </tr>
          <tr>
            <td>prev_data</td>
            <td>上一次的数据</td>
          </tr>
          <tr>
            <td>...</td>
            <td>其他接口说明</td>
          </tr>
          <tr>
            <td rowspan="13">一小时</td>
            <td rowspan="13">v1</td>
            <td rowspan="13">
              hour/day/:id（25小时）<br>
              hour/month/:id（31天）
            </td>
            <td rowspan="13">成员排名id</td>
            <td>id</td>
            <td>成员排名</td>
          </tr>
          <tr>
            <td>create_date</td>
            <td>数据获取时间</td>
          </tr>
          <tr>
            <td>baike_browse</td>
            <td>百科浏览</td>
          </tr>
          <tr>
            <td>baike_flowers</td>
            <td>百科鲜花</td>
          </tr>
          <tr>
            <td>weibo_forward</td>
            <td>微博转发（平均需要除以8）</td>
          </tr>
          <tr>
            <td>weibo_comment</td>
            <td>微博评论（平均需要除以8）</td>
          </tr>
          <tr>
            <td>weibo_like</td>
            <td>微博点赞（平均需要除以8）</td>
          </tr>
          <tr>
            <td>weibo_fans</td>
            <td>微博粉丝</td>
          </tr>
          <tr>
            <td>doki_fans</td>
            <td>Doki粉丝</td>
          </tr>
          <tr>
            <td>super_rank</td>
            <td>超话排名</td>
          </tr>
          <tr>
            <td>super_read</td>
            <td>超话阅读</td>
          </tr>
          <tr>
            <td>super_post</td>
            <td>超话帖子</td>
          </tr>
          <tr>
            <td>super_fans</td>
            <td>超话粉丝</td>
          </tr>
          <tr>
            <td rowspan="33">一天</td>
            <td rowspan="33">v1</td>
            <td rowspan="33">
              day/week/:id（7天）<br>
              day/month/:id（31天）
            </td>
            <td rowspan="33">成员排名id</td>
            <td>id</td>
            <td>成员排名</td>
          </tr>
          <tr>
            <td>create_date</td>
            <td>数据获取时间</td>
          </tr>
          <tr>
            <td>weibo_ring</td>
            <td>微博指数环比</td>
          </tr>
          <tr>
            <td>weibo_index</td>
            <td>微博指数</td>
          </tr>
          <tr>
            <td>weibo_total.total_week</td>
            <td>微博势力本周总评分</td>
          </tr>
          <tr>
            <td>weibo_total.rank_week</td>
            <td>微博势力本周总排名</td>
          </tr>
          <tr>
            <td>weibo_total.title</td>
            <td>所在榜单</td>
          </tr>
          <tr>
            <td>weibo_total.total_day</td>
            <td>微博势力昨日评分</td>
          </tr>
          <tr>
            <td>weibo_total.rank_day</td>
            <td>微博势力昨日排名</td>
          </tr>
          <tr>
            <td>weibo_read.total_week</td>
            <td>微博阅读本周总评分</td>
          </tr>
          <tr>
            <td>weibo_read.num</td>
            <td>微博阅读总数</td>
          </tr>
          <tr>
            <td>weibo_read.send</td>
            <td>微博发博数</td>
          </tr>
          <tr>
            <td>weibo_read.total_day</td>
            <td>微博阅读昨日评分</td>
          </tr>
          <tr>
            <td>weibo_read.rank_day</td>
            <td>微博阅读昨日排名</td>
          </tr>
          <tr>
            <td>weibo_int.total_week</td>
            <td>微博互动本周总评分</td>
          </tr>
          <tr>
            <td>weibo_int.repost</td>
            <td>微博被互动数</td>
          </tr>
          <tr>
            <td>weibo_int.comment</td>
            <td>评论被互动数</td>
          </tr>
          <tr>
            <td>weibo_int.story</td>
            <td>故事被互动数</td>
          </tr>
          <tr>
            <td>weibo_int.interact</td>
            <td>互动总数</td>
          </tr>
          <tr>
            <td>weibo_int.total_day</td>
            <td>微博互动昨日评分</td>
          </tr>
          <tr>
            <td>weibo_int.rank_day</td>
            <td>微博互动昨日排名</td>
          </tr>
          <tr>
            <td>weibo_inf.total_week</td>
            <td>社会影响力本周总评分</td>
          </tr>
          <tr>
            <td>weibo_inf.search</td>
            <td>搜索量</td>
          </tr>
          <tr>
            <td>weibo_inf.mention</td>
            <td>提及他的微博阅读数</td>
          </tr>
          <tr>
            <td>weibo_inf.mention_search</td>
            <td>社会影响力</td>
          </tr>
          <tr>
            <td>weibo_inf.total_day</td>
            <td>社会影响力昨日评分</td>
          </tr>
          <tr>
            <td>weibo_inf.rank_day</td>
            <td>社会影响力昨日排名</td>
          </tr>
          <tr>
            <td>weibo_love.total_week</td>
            <td>爱慕值本周总评分</td>
          </tr>
          <tr>
            <td>weibo_love.people</td>
            <td>送花人数</td>
          </tr>
          <tr>
            <td>weibo_love.each</td>
            <td>送花次数</td>
          </tr>
          <tr>
            <td>weibo_love.close</td>
            <td>爱慕值</td>
          </tr>
          <tr>
            <td>weibo_love.total_day</td>
            <td>爱慕值昨日评分</td>
          </tr>
          <tr>
            <td>weibo_love.rank_day</td>
            <td>爱慕值昨日排名</td>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Index'
};
</script>

<style lang="less" scoped>
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

  .doc-content {
    margin: 0 auto 40px;
    max-width: 1200px;
    line-height: 1.5;
    .hd {
      margin-bottom: .8em;
      text-align: left;
      color: #999;
    }
  }

  .doc-table {
    width: 100%;
    border-collapse:collapse;

    td, th {
      display: table-cell;
      vertical-align: middle;
    }

    tr,td {
      border: 1px solid #ccc;
    }
    th {
      height: 36px;
      line-height: 36px;
      color: #909399;
      background-color: #f5f7fa;
    }
    td {
      padding: 12px 0;
      color: #606266;
    }
  }
</style>

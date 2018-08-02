<template>
  <div class="details">
    <div class="details-hour">
      <div class="details-tabs">
        <el-radio-group @change="radioChangeHour" v-model="radioItemHour" size="mini">
          <el-radio-button label="baike_browse">浏览</el-radio-button>
          <el-radio-button label="baike_flowers">鲜花</el-radio-button>
          <el-radio-button label="weibo_fans">微博</el-radio-button>
          <el-radio-button label="doki_fans">Doki</el-radio-button>
          <el-radio-button label="super_rank">超话</el-radio-button>
        </el-radio-group>
      </div>
      <EchartsLine
        :xAxisData="xAxisDataHour"
        :seriesData="seriesDataHour"
        :memberID="memberID"
        id='j-echarts-hour'
      />
      <EchartsLine
        :xAxisData="xAxisDataHourDay"
        :seriesData="seriesDataHourDay"
        :memberID="memberID"
        id='j-echarts-hourday'
      />
    </div>
    <div class="details-day">
      <div class="details-tabs">
        <el-radio-group @change="radioChangeDay" v-model="radioItemDay" size="mini">
          <el-radio-button label="weibo_index">指数</el-radio-button>
          <el-radio-button label="weibo_read">阅读</el-radio-button>
          <el-radio-button label="weibo_int">互动</el-radio-button>
          <el-radio-button label="weibo_inf">影响</el-radio-button>
          <el-radio-button label="weibo_love">爱慕</el-radio-button>
          <el-radio-button label="weibo_total">排名</el-radio-button>
        </el-radio-group>
      </div>
      <EchartsLine
        :xAxisData="xAxisDataDay"
        :seriesData="seriesDataDay"
        :memberID="memberID"
        id='j-echarts-day'
      />
    </div>
  </div>
</template>

<script>
import EchartsLine from './components/EchartsLine';

export default {
  name: 'Index',
  components: {
    EchartsLine
  },
  data() {
    return {
      memberID: 6,
      radioItemHour: 'baike_browse',
      hourData: {},
      xAxisDataHour: [],
      seriesSaveHour: {},
      seriesDataHour: {},

      hourDayData: {},
      xAxisDataHourDay: [],
      seriesSaveHourDay: {},
      seriesDataHourDay: {},

      radioItemDay: 'weibo_index',
      dayData: {},
      xAxisDataDay: [],
      seriesSaveDay: {},
      seriesDataDay: {}
    };
  },
  created() {
    this.memberID = parseInt(this.$route.params.id, 10) || 6;
    // 获取24小时
    this.getHourData('day');
    // 获取30天
    this.getHourData();
    this.getDayData();
  },
  methods: {
    // 选项切换
    radioChangeHour(val) {
      this.seriesDataHour = this.seriesSaveHour[val];
      this.seriesDataHourDay = this.seriesSaveHourDay[val];
    },
    radioChangeDay(val) {
      this.seriesDataDay = this.seriesSaveDay[val];
    },
    // 获取小时数据
    async getHourData(type) {
      let data = null;
      // 初始化状态
      this.radioItemHour = 'baike_browse';
      if (type === 'day') {
        data = await this.$api.getHourDataApi(this.memberID);
        this.seriesSaveHour = {
          baike_browse: { title: '百科浏览增长趋势', subtext: '24h浏览分时增长变化', data: [] },
          baike_flowers: { title: '百科鲜花增长趋势', subtext: '24h鲜花分时增长变化', data: [] },
          weibo_fans: { title: '微博粉丝增长趋势', subtext: '24h微博粉丝分时增长变化', data: [] },
          doki_fans: { title: 'Doki粉丝增长趋势', subtext: '24h Doki粉丝分时增长变化', data: [] },
          super_rank: { title: '超话排名变化趋势', subtext: '超级话题排名变化', data: [], inverse: true }
        };
      } else {
        data = await this.$api.getHourDayDataApi(this.memberID);
        this.seriesSaveHourDay = {
          baike_browse: { title: '百科浏览增长趋势', subtext: '30天浏览增长变化', data: [] },
          baike_flowers: { title: '百科鲜花增长趋势', subtext: '30天鲜花增长变化', data: [] },
          weibo_fans: { title: '微博粉丝增长趋势', subtext: '30天微博粉丝增长变化', data: [] },
          doki_fans: { title: 'Doki粉丝增长趋势', subtext: '30天Doki粉丝增长变化', data: [] },
          super_rank: { title: '超话排名变化趋势', subtext: '30天超级话题排名变化', data: [], inverse: true }
        };
      }
      data = data.list;
      let len = data.length;
      let axis = [];
      for (let i = len - 2; i >= 0; i--) {
        let item = data[i];
        let prev = data[i + 1];
        if (type === 'day') {
          axis.push(this.$tools.formatTimeStamp(item.create_date, 'hh:mm'));
          this.seriesSaveHour.baike_browse.data.push(item.baike_browse - prev.baike_browse);
          this.seriesSaveHour.baike_flowers.data.push(item.baike_flowers - prev.baike_flowers);
          this.seriesSaveHour.weibo_fans.data.push(item.weibo_fans - prev.weibo_fans);
          this.seriesSaveHour.doki_fans.data.push(item.doki_fans - prev.doki_fans);
          this.seriesSaveHour.super_rank.data.push(item.super_rank);
        } else {
          axis.push(this.$tools.formatTimeStamp(item.create_date, 'MM-dd'));
          this.seriesSaveHourDay.baike_browse.data.push(item.baike_browse - prev.baike_browse);
          this.seriesSaveHourDay.baike_flowers.data.push(item.baike_flowers - prev.baike_flowers);
          this.seriesSaveHourDay.weibo_fans.data.push(item.weibo_fans - prev.weibo_fans);
          this.seriesSaveHourDay.doki_fans.data.push(item.doki_fans - prev.doki_fans);
          this.seriesSaveHourDay.super_rank.data.push(item.super_rank);
        }
      }
      if (type === 'day') {
        this.xAxisDataHour = axis;
        this.hourData = data;
        this.seriesDataHour = this.seriesSaveHour.baike_browse;
      } else {
        this.xAxisDataHourDay = axis;
        this.hourDayData = data;
        this.seriesDataHourDay = this.seriesSaveHourDay.baike_browse;
      }
    },
    // 获取天数据
    async getDayData() {
      let data = await this.$api.getDayDataApi(this.memberID);
      this.seriesSaveDay = {
        weibo_index: { title: '微博指数增长趋势', subtext: '7日微博指数增长变化', data: [] },
        weibo_read: { title: '微博阅读增长趋势', subtext: '7日微博阅读增长变化', data: [] },
        weibo_int: { title: '微博互动增长趋势', subtext: '7日微博互动增长变化', data: [] },
        weibo_inf: { title: '微博影响增长趋势', subtext: '7日微博影响增长变化', data: [] },
        weibo_love: { title: '微博爱慕增长趋势', subtext: '7日微博爱慕增长变化', data: [] },
        weibo_total: { title: '微博势力排名变化趋势', subtext: '7日微博势力排名变化趋势', data: [], inverse: true }
      };
      this.radioItemDay = 'weibo_index';
      data = data.list;
      let len = data.length;
      let axis = [];
      for (let i = len - 2; i >= 0; i--) {
        let item = data[i];
        let prev = data[i + 1];
        axis.push(this.$tools.formatTimeStamp(item.create_date - 86400, 'MM-dd'));
        this.seriesSaveDay.weibo_index.data.push(item.weibo_index - prev.weibo_index);
        this.seriesSaveDay.weibo_read.data.push(item.weibo_read.num - prev.weibo_read.num);
        this.seriesSaveDay.weibo_int.data.push(item.weibo_int.interact - prev.weibo_int.interact);
        this.seriesSaveDay.weibo_inf.data.push(item.weibo_inf.mention_search - prev.weibo_inf.mention_search);
        this.seriesSaveDay.weibo_love.data.push(item.weibo_love.close - prev.weibo_love.close);
        this.seriesSaveDay.weibo_total.data.push(item.weibo_total.rank_day);
      }
      this.xAxisDataDay = axis;
      this.dayData = data;
      this.seriesDataDay = this.seriesSaveDay.weibo_index;
    }
  },
  watch: {
    /* eslint-disable */
    '$route.params.id': function (to) {
      if (to) {
        this.memberID = parseInt(to, 10);
        this.getHourData('day');
        this.getHourData();
        this.getDayData();
      }
    }
  }
};
</script>

<style lang="less" scoped>
  .details {
    margin-top: 2em;
    .details-tabs {
      margin-bottom: 1.6em;
    }
    .details-hour {
      margin-bottom: 1.6em;
    }
  }
</style>

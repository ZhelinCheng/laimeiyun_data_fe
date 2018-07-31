/**
 * Created by ChengZheLin on 2018/7/29.
 */

const home = {
  methods: {
    // 显示分时数据
    showStatistics(item) {
      this.$router.push({ name: 'Details/Index', params: { id: item.id } });
      _czc.push(['_trackEvent', '成员详情按钮', '点击', item.id]);
    }
  }
};

export default home;

/**
 * Created by ChengZheLin on 2018/7/29.
 */

const state = {
  titleHour: '每小时数据',
  titleDay: '每天数据',
  baseData: []
};

// getters
const getters = {
  getBaseItem: sta => id => sta.baseData.find(item => item.id === id)
};

// actions
const actions = {
  /* eslint-disable */
  async getMainData({ commit }, payload) {
    let data = await payload.getHomeInfo();
    data = data.list;
    const len = data.length;

    let dataItem = data[0];

    let titleHour = `每小时数据（获取周期：${payload.formatTimeStamp(dataItem.prev_data.create_hour, 'MM-dd hh:mm')} 至
      ${payload.formatTimeStamp(dataItem.create_hour, 'MM-dd hh:mm')}
      ）`;

    let titleDay = `每天数据（获取周期：${payload.formatTimeStamp(dataItem.prev_data.create_day, 'MM-dd hh:mm')} 至
      ${payload.formatTimeStamp(dataItem.create_day, 'MM-dd hh:mm')}
      ）`;

    for (let i = 0; i < len; i++) {
      let item = data[i];
      let prev = item.prev_data;
      item.baike_browse_add = item.baike_browse - prev.baike_browse;
      item.weibo_fans_add = item.weibo_fans - prev.weibo_fans;
      item.baike_flowers_add = item.baike_flowers - prev.baike_flowers;
      item.doki_fans_add = item.doki_fans - prev.doki_fans;
      item.weibo_read.num_add = item.weibo_read.num - prev.weibo_read.num;
      item.weibo_int.interact_add = item.weibo_int.interact - prev.weibo_int.interact;
      item.weibo_inf.mention_search_add = item.weibo_inf.mention_search - prev.weibo_inf.mention_search;
      item.weibo_love.close_add = item.weibo_love.close - prev.weibo_love.close;
      item.weibo_index_add = item.weibo_index - prev.weibo_index;

      item.weibo_comment = parseInt(item.weibo_comment / 8);
      item.weibo_forward = parseInt(item.weibo_forward / 8);
      item.weibo_like = parseInt(item.weibo_like / 8);

      let super_rank = item.super_rank;
      item.super_rank = super_rank ? super_rank : '100+';

      data[i] = item;
    }
    let baseData = data;

    commit('setBaseInfo', {
      baseData,
      titleHour,
      titleDay
    })
  }
};

// mutations
const mutations = {
  setBaseInfo(state, payload) {
    state.titleHour = payload.titleHour;
    state.titleDay = payload.titleDay;
    state.baseData = payload.baseData
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

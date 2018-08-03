/**
 * Created by ChengZheLin on 2018/7/28.
 */

import axiosApi from './api';

function getHomeInfo() {
  return axiosApi('member/info/all');
}

// 获取24小时数据
function getHourDataApi(id) {
  return axiosApi(`hour/day/${id}`);
}

// 获取30天小时数据
function getHourDayDataApi(id) {
  return axiosApi(`hour/month/${id}`);
}

function getDayDataApi(id) {
  return axiosApi(`day/month/${id}`);
}

export default {
  getHomeInfo,
  getHourDataApi,
  getDayDataApi,
  getHourDayDataApi
};

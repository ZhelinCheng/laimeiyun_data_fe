/**
 * Created by ChengZheLin on 2018/7/28.
 */

import axiosApi from './api';

function getHomeInfo() {
  return axiosApi('member/info/all');
}

function getHourDataApi(id) {
  return axiosApi(`hour/${id}`);
}

function getDayDataApi(id) {
  return axiosApi(`day/week/${id}`);
}

export default {
  getHomeInfo,
  getHourDataApi,
  getDayDataApi
};

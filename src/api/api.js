/**
 * Created by ChengZheLin on 2018/7/28.
 */
/* eslint-disable */
import axios from 'axios';
import { Message } from 'element-ui';

async function axisoApi(url, params = {}) {
  try {
    const res = await axios.get(`https://api.laimeiyun.cn/v1/${url}`, {
      params
    });
    if (res.status !== 200) {
      Message({
        message: res.statusText,
        type: 'warning'
      });
    }
    return res.data;
  } catch (e) {
    Message({
      message: '数据获取失败！😭',
      type: 'error'
    });
    return {};
  }
}

export default axisoApi;

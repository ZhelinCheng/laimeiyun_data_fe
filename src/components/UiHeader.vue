<template>
  <div class="header">
    <a href="https://m.laimeiyun.cn" onclick="_czc.push(['_trackEvent', '数据页Banner', '点击', '跳转https://m.laimeiyun.cn']);" class="link">
      <img src="../assets/lmycn_banner.jpg" alt="">
      <span class="header-info-author">图：赖美云后援会美工组</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'UiHeader'
};
</script>

<style lang="less" scoped>
  .header {
    position: relative;
    font-size: 0;
    .link {
      display: block;
      width: 100%;
      img {
        width: 100%;
      }
    }
    .header-info-author {
      position: absolute;
      left: 2%;
      right: 2%;
      bottom: 6%;
      padding-right: 30px;
      text-align: right;
      color: #223ca1;
      font-size: 12px;
    }
  }

  @media all and (max-width: 1200px) {
    .header-info-author {
      display: none;
    }
  }
</style>

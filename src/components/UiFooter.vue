<template>
  <div class="footer">
    <p  class="index-info">
      请在PC端使用Chrome、火狐、Edge、IE10+等现代浏览器
    </p>
    <p class="index-record">
      <a href="http://www.miitbeian.gov.cn" rel="nofollow">蜀ICP备16004713号-8</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'UiFooter'
};
</script>

<style lang="less" scoped>
  .footer {
    padding: 1em 0;
    text-align: center;
    font-size: 12px;
    line-height: 2;
    color: #717171;
    background-color: #f5f5f5;
    a {
      text-decoration: none;
      color: inherit;
    }
  }
</style>

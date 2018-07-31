<template>
  <div id="app">
    <UiHeader/>
      <router-view/>
    <UiFooter/>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    /* eslint-disable */
    '$route': function () {
      if (window._czc) {
        let location = window.location;
        let contentUrl = location.pathname + location.hash;
        let refererUrl = '/';
        window._czc.push(['_trackPageview', contentUrl, refererUrl])
      }
    }
  }
};
</script>

<style>
</style>

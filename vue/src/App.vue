<template>
  <div id='app'>
    <avapi-map v-if='path == "map"'
               confId='5ae6df87a93f4e1e02a6122a'
               lat='41.38605'
               lng='2.17014'
               zoom='13'>
    </avapi-map>
    
    <avapi-lse v-if='path == "lse"'
               confId='5ae6e03da93f4e1e02a6122b'
               lat='41.390847'
               lng='2.16902'>
    </avapi-lse>
  </div>
</template>

<script>
  import Vue from 'vue'
  import vueAvapi from 'vue-avapi'
  Vue.use(vueAvapi)

  export default {
    name: 'app',
    data () {
      return {
        path: window.location.pathname.slice(1)
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
  }

  .vxmap {
    height: 100vh;
  }

  .vxlse {
    max-width: 800px;
    margin: auto;
    margin-top: 50px;
    padding: 20px;
    border: 1px solid #eee;
  }
</style>

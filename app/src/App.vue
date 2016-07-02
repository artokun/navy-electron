<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <navigation></navigation>
    <drawer></drawer>
    <main class="mdl-layout__content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import Navigation from './components/Navigation'
  import Drawer from './components/Drawer'
  import store from 'src/vuex/store'
  require('./plugins/material.min.js')

  export default {
    store,
    vuex: {},
    components: {
      Navigation,
      Drawer
    }
  }
</script>

<style lang="scss">
  @import url(http://fonts.googleapis.com/css?family=Roboto:300,400,500,700);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);
  @import url(https://code.getmdl.io/1.1.3/material.indigo-pink.min.css);
</style>

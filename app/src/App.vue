<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <navigation></navigation>
    <drawer></drawer>
    <main class="mdl-layout__content">
      <router-view></router-view>
    </main>
    <footer-view></footer-view>
  </div>
</template>

<script>
  import Navigation from './components/Navigation'
  import Drawer from './components/Drawer'
  import FooterView from './components/FooterView'
  import store from 'src/vuex/store'
  require('./plugins/material.min.js')

  export default {
    store,
    vuex: {
      actions: {
        SET_USER: ({dispatch}, user) => dispatch('SET_USER', user),
        REMOVE_USER: ({dispatch}) => dispatch('REMOVE_USER')
      }
    },
    components: {
      Navigation,
      Drawer,
      FooterView
    },
    ready () {
      this.$auth.onAuthStateChanged(user => {
        if (user) {
          this.SET_USER(user)
          this.$router.go('/')
        } else {
          this.REMOVE_USER()
          this.$router.go('/auth')
        }
      })
      window.componentHandler.upgradeAllRegistered()
    }
  }
</script>

<style lang="scss">
  @import url(http://fonts.googleapis.com/css?family=Roboto:300,400,500,700);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);
  @import url(https://code.getmdl.io/1.1.3/material.indigo-amber.min.css);

  .page-content {
    height: calc(100vh - 112px);
  }
</style>

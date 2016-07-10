<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <!-- Navigation -->
    <navigation></navigation>
    <!-- Drawer -->
    <drawer></drawer>
    <!-- Main Content -->
    <main class="mdl-layout__content">
      <router-view></router-view>
    </main>
    <!-- Footer -->
    <footer-view></footer-view>
    <!-- Snackbar Notifications -->
    <snackbar></snackbar>
  </div>
</template>

<script>
  import Navigation from './components/layout/Navigation'
  import Drawer from './components/layout/Drawer'
  import FooterView from './components/layout/FooterView'
  import Snackbar from './components/partials/Snackbar'
  import store from 'src/vuex/store'
  require('./plugins/material.min.js')

  export default {
    store,
    vuex: {
      actions: {
        SET_USER: ({dispatch}, user) => dispatch('SET_USER', user),
        REMOVE_USER: ({dispatch}) => dispatch('REMOVE_USER')
      },
      getters: {
        user: ({user}) => user.user
      }
    },
    components: {
      Navigation,
      Drawer,
      FooterView,
      Snackbar
    },
    ready () {
      this.$auth.onAuthStateChanged(user => {
        if (user && user.emailVerified) {
          return this.SET_USER(user)
        }
        if (this.user) {
          this.$notify('Successfully Logged Out!')
        }
        this.REMOVE_USER()
        this.$router.go({ name: 'login' })
      })
      window.componentHandler.upgradeAllRegistered()
    }
  }
</script>

<style lang="scss">
  @import url(http://fonts.googleapis.com/css?family=Roboto:300,400,500,700);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);
  @import url(https://code.getmdl.io/1.1.3/material.indigo-amber.min.css);

  body {
    font-family: roboto;
  }

  .mdl-layout__content {
    height: 100%;
  }

  .page-content {
    padding: 10px;
    box-sizing: border-box;
    height: 100%;
    flex-direction: column;
  }
</style>

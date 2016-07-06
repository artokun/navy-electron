<template>
  <header class="mdl-layout__header">
    <div class="mdl-layout-icon"></div>
    <div class="mdl-layout__header-row">
      <span class="mdl-layout__title">Navy<strong>App</strong></span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" v-if="user" v-link="{path: '/'}">Home</a>
        <a class="mdl-navigation__link" href="#" v-link="{path: '/login'}" v-if="!user">Login</a>
        <a class="mdl-navigation__link" href="#" @click.prevent="logout" v-else>Logout</a>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'navigation',
    vuex: {
      getters: {
        user: ({user}) => user.user
      }
    },
    methods: {
      logout () {
        this.$auth.signOut()
      }
    }
  }
</script>

<style scoped>

</style>

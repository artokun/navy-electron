<template>
  <header class="mdl-layout__header">
    <div class="mdl-layout-icon"></div>
    <div class="mdl-layout__header-row">
      <span class="mdl-layout__title">Navy<strong>App</strong></span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" v-link="{path: '/'}">Home</a>
        <a class="mdl-navigation__link" href="#" @click.prevent="login" v-if="!user.name">Login</a>
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
        user: ({user}) => user
      }
    },
    methods: {
      login () {
        this.$auth.signIn()
      },
      logout () {
        this.$auth.signOut()
        this.$router.go('/')
      }
    }
  }
</script>

<style scoped>

</style>

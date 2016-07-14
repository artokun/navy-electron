<template>
  <div class="mdl-layout__drawer" id="drawer">
    <span class="mdl-layout__title" v-if="!user">Menu</span>
    <span class="mdl-layout__title" v-else>{{ user.displayName }}</span>
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link" v-if="!user" v-link="{name: 'registration'}">Register</a>
      <a class="mdl-navigation__link" v-link="{path: '/test'}">Test</a>
      <a class="mdl-navigation__link" v-link="{path: '/users'}">Users</a>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'drawer',
    vuex: {
      getters: {
        user: ({user}) => user.detail
      }
    }
  }
</script>

<style scoped>

</style>

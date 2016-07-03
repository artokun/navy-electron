<template>
  <div class="mdl-layout__drawer" id="drawer">
    <span class="mdl-layout__title" v-if="!user.name">Menu</span>
    <span class="mdl-layout__title" v-else>{{ user.name }}</span>
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link" v-link="{name: 'foo', params: { userId: 123 }}">Foo</a>
      <a class="mdl-navigation__link" v-link="{name: 'bar', params: { userId: 123 }}">Bar</a>
      <a class="mdl-navigation__link" v-link="{path: '/fiz'}">Fiz</a>
      <a class="mdl-navigation__link" v-link="{path: '/baz'}">Baz</a>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'drawer',
    vuex: {
      getters: {
        user: ({user}) => user
      }
    }
  }
</script>

<style scoped>

</style>

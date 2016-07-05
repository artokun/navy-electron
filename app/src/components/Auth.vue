<template>
  <div class="page-content">
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
      Log In
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Auth',
    vuex: {
      getters: {
        user: ({user}) => user.user
      }
    }
  }
</script>

<style lang="scss" scoped>
.page-content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>

<template>
  <div class="page-content">
    <p>Register</p>
    <form action="#">
      <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="text" id="email" v-model="email">
        <label class="mdl-textfield__label" for="email">Email...</label>
      </div>
      <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="password" id="password" v-model="password">
        <label class="mdl-textfield__label" for="password">Password...</label>
      </div>
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" @click.prevent="onRegister">
        Button
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    data: () => ({ email: '', password: '' }),
    name: 'registration',
    methods: {
      onRegister () {
        this.$auth.createUserWithEmailAndPassword(this.email, this.password).catch(({ code, message }) => {
          console.debug(code, message)
        })
      }
    },
    ready () {
      window.componentHandler.upgradeAllRegistered()
    }
  }
</script>

<style lang="scss" scoped>

</style>

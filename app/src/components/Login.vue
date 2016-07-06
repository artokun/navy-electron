<template>
  <div class="page-content">
    <form @submit.prevent>
      <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="text" id="email" v-model="email">
        <label class="mdl-textfield__label" for="email">Email...</label>
      </div>
      <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="password" id="password" v-model="password">
        <label class="mdl-textfield__label" for="password">Password...</label>
      </div>
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" @click.prevent="onLogin">
        Login
      </button>
    </form>
    <pre>
      {{ errors | json }}
    </pre>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data: () => ({ email: '', password: '', errors: {} }),
    vuex: {
      getters: {
        user: ({user}) => user.user
      }
    },
    methods: {
      onLogin () {
        this.$auth.signInWithEmailAndPassword(this.email, this.password).then(user => {
          if (user.emailVerified) {
            this.$router.go({name: 'landing-page'})
            this.$notify(`${user.displayName} has Successfully Logged In!`)
          } else {
            this.$router.go({name: 'fiz'})
          }
        }).catch(error => {
          this.errors = error
        })
      }
    },
    compiled () {
      if (this.user) {
        if (this.user.emailVerified) {
          this.$router.go('landing-page')
        }
      }
    },
    ready () {
      window.componentHandler.upgradeAllRegistered()
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

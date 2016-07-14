<template>
  <div class="page-content">
    <form @submit.prevent="onLogin" novalidate>
  		<div class="mdl-card mdl-shadow--6dp">
  			<div class="mdl-card__title mdl-color--primary mdl-color-text--white">
  				<h2 class="mdl-card__title-text">Navy<strong>App</strong></h2>
  			</div>
  	  	<div class="mdl-card__supporting-text">
          <div class="mdl-textfield mdl-js-textfield" :class="error.email ? 'is-invalid' : ''">
            <input class="mdl-textfield__input" type="email" id="email" v-model="email">
            <label class="mdl-textfield__label" for="email">Email...</label>
            <span class="mdl-textfield__error">{{error.email}}</span>
          </div>
          <div class="mdl-textfield mdl-js-textfield" :class="error.password ? 'is-invalid' : ''">
            <input class="mdl-textfield__input" type="password" id="password" v-model="password">
            <label class="mdl-textfield__label" for="password">Password...</label>
            <span class="mdl-textfield__error">{{error.password}}</span>
          </div>
  			</div>
  			<div class="mdl-card__actions mdl-card--border">
  				<button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" @submit.prevent="onLogin">Log in</button>
  			</div>
      </form>
		</div>
    <a href="#" @click.prevent="forgotPassword">forgot password</a>
    <a href="#" v-link="{name: 'registration'}">register</a>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'Login',
    data () {
      return {
        email: '',
        password: '',
        error: {
          email: null,
          password: null
        }
      }
    },
    vuex: {
      getters: {
        user: ({user}) => user.detail
      }
    },
    router: {
      activate ({ next, redirect }) {
        if (this.user) {
          if (this.user.emailVerified) {
            console.debug('already logged in')
            redirect({ name: 'Locations' })
          }
          this.$notify(`${this.user.displayName} has not validated their email at ${this.user.email}!`)
        }
        next()
      }
    },
    methods: {
      onLogin () {
        this.$auth.signInWithEmailAndPassword(this.email, this.password).then(user => {
          if (user.emailVerified) {
            this.$router.go({name: 'Locations'})
            this.$notify(`${user.displayName} has Successfully Logged In!`)
          } else {
            this.$notify(`Please verify your email address at ${user.email}`)
          }
        }).catch(error => {
          switch (error.code) {
            case 'auth/invalid-email':
            case 'auth/user-not-found':
            case 'auth/user-disabled':
              return Vue.set(this.error, 'email', error.message)
            case 'auth/wrong-password':
              return Vue.set(this.error, 'password', error.message)
          }
        })
      },
      forgotPassword () {
        console.debug('forgot password')
      }
    },
    ready () {
      window.componentHandler.upgradeAllRegistered()
    }
  }
</script>

<style lang="scss" scoped>
.page-content {
  background-color: #dedede;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
}
a {
  margin-top: 5px;
  color: #0033DD;
  text-decoration: none;
}
</style>

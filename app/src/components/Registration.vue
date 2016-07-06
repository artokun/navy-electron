<template>
  <div class="page-content">
    <p>Register</p>
    <div class="register-step" v-if="!verificationEmailSent">
      <form @submit.prevent>
        <div class="mdl-textfield mdl-js-textfield" :class="error.rank ? 'is-invalid' : ''">
          <input class="mdl-textfield__input" type="text" id="rank" v-model="rank">
          <label class="mdl-textfield__label" for="rank">Rank/Rate (i.e. HM1, LCDR)...</label>
          <span class="mdl-textfield__error">{{error.rank}}</span>
        </div>
        <div class="mdl-textfield mdl-js-textfield" :class="error.fName ? 'is-invalid' : ''">
          <input class="mdl-textfield__input" type="text" id="fName" v-model="fName">
          <label class="mdl-textfield__label" for="fName">First Name...</label>
          <span class="mdl-textfield__error">{{error.fName}}</span>
        </div>
        <div class="mdl-textfield mdl-js-textfield" :class="error.lName ? 'is-invalid' : ''">
          <input class="mdl-textfield__input" type="text" id="lName" v-model="lName">
          <label class="mdl-textfield__label" for="lName">Last Name...</label>
          <span class="mdl-textfield__error">{{error.lName}}</span>
        </div>
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
        <div class="mdl-textfield mdl-js-textfield" :class="error.confirmPassword ? 'is-invalid' : ''">
          <input class="mdl-textfield__input" type="password" id="confirm-password" v-model="confirmPassword">
          <label class="mdl-textfield__label" for="password">Confirm Password...</label>
          <span class="mdl-textfield__error">{{error.confirmPassword}}</span>
        </div>
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" @click.prevent="onRegister">
          Register
        </button>
      </form>
    </div>
    <div class="verification-step" v-else>
      Please check your email for a validation link sent to: {{email}}, to access the booking application
    </div>
    <pre>
      {{ error | json }}
    </pre>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'registration',
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        verificationEmailSent: false,
        fName: null,
        lName: null,
        rank: null,
        photoURL: null,
        error: {}
      }
    },
    computed: {
      nameWithRank () {
        return this.rank ? `${this.rank} ${this.lName}, ${this.fName}` : `${this.fName} ${this.lName}`
      }
    },
    methods: {
      onRegister () {
        this.error = {}
        if (this.password !== this.confirmPassword) {
          Vue.set(this.error, 'confirmPassword', 'Passwords don\'t match')
          return
        }
        this.$auth.createUserWithEmailAndPassword(this.email, this.password).then(user => {
          user.updateProfile({
            displayName: this.nameWithRank,
            photoURL: this.photoURL
          })
          user.sendEmailVerification().then(() => {
            this.$notify(`Verification Code has been sent to ${this.email}`)
            this.verificationEmailSent = true
            this.pollForRedirect(user).then(
              success => {
                this.$parent.SET_USER(user)
                this.$notify(`Verification Code has been validated for ${this.nameWithRank}`)
                this.$router.go({ name: 'landing-page' })
              },
              failure => {
                this.$router.go({ name: 'login' })
              }
            )
          }).catch(error => {
            Vue.set(this.error, 'verification', error.message)
          })
        }).catch(error => {
          Vue.set(this.error, 'registration', error.message)
        })
      },
      pollForRedirect (user) {
        return new Promise((resolve, reject) => {
          let counter = 1
          let pollingInterval = setInterval(() => {
            user.reload()
            if (this.$auth.currentUser.emailVerified) {
              clearInterval(pollingInterval)
              resolve('success')
            }
            counter += 1
            if (counter >= 120) {
              clearInterval(pollingInterval)
              reject('failure')
            }
          }, 1000)
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

<template>
  <div class="page-content">
		<div class="mdl-card mdl-shadow--6dp" transiton="fade" v-show="!verificationEmailSent">
      <form @submit.prevent="onRegister" novalidate>
  			<div class="mdl-card__title mdl-color--primary mdl-color-text--white">
  				<h2 class="mdl-card__title-text">Register</h2>
  			</div>
  	  	<div class="mdl-card__supporting-text">
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
        </div>
        <div class="mdl-card__actions mdl-card--border">
  				<button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" @submit.prevent="onRegister">Register</button>
  			</div>
      </form>
    </div>
    <div v-show="verificationEmailSent" transition="fade" class="validation-card mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Welcome</h2>
      </div>
      <div class="mdl-card__supporting-text">
        You should recieve and email shortly with a validation link.
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <a @click.prevent class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          Time remaining: {{counter}}
        </a>
      </div>
      <div class="mdl-card__menu">
        <button @click.prevent class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
          <i class="material-icons">email</i>
        </button>
      </div>
    </div>
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
        counter: 120,
        error: { email: null, password: null }
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
            displayName: this.nameWithRank
          })
          user.sendEmailVerification().then(() => {
            this.$notify(`Verification Code has been sent to ${this.email}`)
            this.verificationEmailSent = true
            this.pollForRedirect(user).then(
              success => {
                let registration = { first_name: this.fName, last_name: this.lName, rank: this.rank }
                this.createUserProfile(user, registration)
                this.$parent.SET_USER(user)
                this.$notify(`Verification Code has been validated for ${this.nameWithRank}`)
                this.$router.go({ name: 'locations' })
              },
              failure => {
                this.$notify('User not validated in time, redirecting to login')
                user.delete().then(success => this.$router.go({ name: 'login' }))
              }
            )
          }).catch(error => {
            Vue.set(this.error, 'email', error.message)
          })
        }).catch(error => {
          switch (error.code) {
            case 'auth/email-already-in-use':
            case 'auth/invalid-email':
            case 'auth/operation-not-allowed':
              return Vue.set(this.error, 'email', error.message)
            case 'auth/weak-password':
              return Vue.set(this.error, 'password', error.message)
          }
        })
      },
      pollForRedirect (user) {
        return new Promise((resolve, reject) => {
          let pollingInterval = setInterval(() => {
            user.reload()
            if (this.$auth.currentUser.emailVerified) {
              clearInterval(pollingInterval)
              resolve('success')
            }
            this.counter -= 1
            if (this.counter <= 0) {
              clearInterval(pollingInterval)
              reject('failure')
            }
          }, 1000)
        })
      },
      createUserProfile (user, { first_name, last_name, rank }) {
        this.$database.ref('users/' + user.uid).set({
          first_name,
          last_name,
          rank,
          isAdmin: false,
          isBooking: true
        })
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
</style>

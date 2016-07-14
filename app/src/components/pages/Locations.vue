<template>
  <div class="page-content">
    <div v-show="$loadingRouteData" class="mdl-spinner mdl-js-spinner is-active"></div>
    <div v-show="!$loadingRouteData" v-for="(key, value) in locationList" class="demo-card-square mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title mdl-card--expand" :style="imageURL(value.image)">
        <h2 class="mdl-card__title-text">{{ value.name }}</h2>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" v-link="{ name: 'Test', params: { locationId: key }}">
          Search Clinics
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Locations',
    data () {
      return {
        loaded: false
      }
    },
    vuex: {
      getters: {
        user: ({user}) => user.detail,
        locationList: ({location}) => location.list
      },
      actions: {
        getLocations: ({ dispatch }, list) => { dispatch('GET_ALL_LOCATIONS', list) }
      }
    },
    methods: {
      imageURL (url) {
        return `background-image: url(${url})`
      }
    },
    route: {
      activate ({to, next, redirect}) {
        if (to.auth && this.user) {
          if (this.user.emailVerified) {
            return next()
          }
          this.$notify('You are not authorized to view this page')
          return redirect({ name: 'Login' })
        } else {
          this.$notify('You are not signed in')
          return redirect({ name: 'Login' })
        }
      },
      data ({ next }) {
        this.$database.ref('locations').on('value', snapshot => {
          this.getLocations(snapshot.val())
          next({loaded: true})
        })
      }
    },
    ready () {
      window.componentHandler.upgradeAllRegistered()
    }
  }
</script>

<style scoped>
  .page-content {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .demo-card-square.mdl-card {
    width: 200px;
    height: 320px;
    margin: 15px 5px;
  }
  .demo-card-square > .mdl-card__title {
    color: #fff;
    background: center left no-repeat #46B6AC;
  }
</style>

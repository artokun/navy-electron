<template>
  <div class="page-content">
    <div v-for="n in 4" class="demo-card-square mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title mdl-card--expand">
        <h2 class="mdl-card__title-text">Camp Pendleton</h2>
      </div>
      <div class="mdl-card__supporting-text">
        Insert address here
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          Enter Clinic
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Clinics',
    vuex: {
      getters: {
        user: ({user}) => user.user
      }
    },
    route: {
      activate ({to, next, abort}) {
        if (to.auth && this.user) {
          if (this.user.emailVerified) {
            return next()
          }
          this.$notify('You are not authorized to view this page')
          return abort('You are not authorized to view this page')
        } else {
          this.$notify('You are not signed in')
          return abort('You are not signed in')
        }
      }
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
    background:
      url('http://placekitten.com/320/320') bottom left 15% no-repeat #46B6AC;
  }
</style>

<template>
  <div class="page-content">
    <button type="button" name="button" @click="onGetUsers">Get all users</button>
    <ul class="demo-list-two mdl-list">
      <li class="mdl-list__item mdl-list__item--two-line" v-for="item in list">
        <span class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-avatar">person</i>
          <span>{{ item.rank }} {{ item.last_name }}, {{ item.first_name }}</span>
          <span class="mdl-list__item-sub-title"> isBooking? {{ item.isBooking }}</span>
        </span>
        <span class="mdl-list__item-secondary-content">
          <span class="mdl-list__item-secondary-info">Admin</span>
          <a v-if="item.isAdmin" class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Users',
    vuex: {
      actions: {
        getAllUsers: ({dispatch}, list) => dispatch('GET_ALL_USERS', list)
      },
      getters: {
        user: ({user}) => user.user,
        list: ({user}) => user.list
      }
    },
    methods: {
      onGetUsers () {
        this.$database.ref('/users/').once('value').then(snapshot => {
          this.getAllUsers(snapshot.val())
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

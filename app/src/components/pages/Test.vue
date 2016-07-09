<template>
  <div class="page-content">

    <!-- Filter Notification -->
    <div class="filter-notification">
      Filtering by default location: <span>Camp Pendleton</span>
    </div>

    <!-- Search -->
    <div class="navigation-search">
      <form action="#">
        <div class="mdl-textfield mdl-js-textfield">
          <label class="search-icon" for="sample6">
            <i class="material-icons md-48">search</i>
          </label>
          <input class="mdl-textfield__input" type="text" id="sample1">
        </div>
      </form>
    </div>
    
    <div class="pane-layout">
      <!-- Pane Left - Navigation -->
      <div class="pane pane__left">
        <div class="mdl-card mdl-card mdl-shadow--2dp" v-for="n in 10">
          <div class="mdl-card__title">
            
          </div>
          <div class="mdl-card__supporting-text">
            <div class="location-clinic">Camp Pendleton <i class="material-icons">chevron_right</i>General Surgery</div>
            <div class="scope">Hernia</div>
            <i class="info-icon material-icons">info</i>
          </div>
        </div>
      </div>
      
      <!-- Pane Right - Details -->
      <div class="pane pane__right">
        <div class="pane__content">
          
        </div>
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
    ready () {
      window.componentHandler.upgradeAllRegistered()
    }
  }
</script>

<style lang="scss" scoped>
  // Layout
  .pane {
    &-layout {
      display: flex;
      flex-grow: 1;
    }

    &__left {
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      flex-grow: 0;
      border-right: 1px solid rgba(0,0,0,.15);
    }

    &__right {
      display: flex;
      flex-grow: 1;
    }

    &__content {
      // background-color: blue;
      flex-grow: 1;
    }
  }

  // Cards
  .mdl-card {
    text-transform: uppercase;
    margin: 0px 15px 15px 2px;
    transition: all 0.1s ease-in;
    min-height: 165px;
    cursor: pointer;
    
    &:hover {
      transform: translate(3px);
    }

    &__title {
      color: #fff;
      height: 90px;
      background: url('//getmdl.io/assets/demos/welcome_card.jpg') center / cover;
    }
  }

  // Navigation Search
  .filter-notification {
    font-size: 16px;
    span {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .navigation-search {
    .mdl-textfield {
      width: 100%;
      overflow: hidden;
      padding: 15px 0;
    }
    .mdl-textfield__input {
      padding-left: 35px;
      font-size: 2em;
      text-transform: uppercase;
    }
    .search-icon {
      position: absolute;
      left: 0;
      bottom: 19px;
      .material-icons {
        font-size: 30px;
      }
    }
  }
  
  
  .location-clinic {
    font-size: 12px;
    i {
      font-size: 17px;
      line-height: 12px;
      position: relative;
      top: 4px;
      left: -1px;
      color: rgba(0,0,0,0.3);
    }
  }
  .info-icon {
    position: absolute;
    right: 15px;
    bottom: 14px;
  }
  .scope {
    font-size: 24px;
    font-weight: 600;
    color: rgba(0,0,0,.8);
    padding-top: 6px;
  }
  #navigation-pane {
    height: calc(100vh - 248px);
    border-right: 1px solid rgba(0,0,0,.15);
    padding: 0 15px;
    overflow: scroll;
  }
  
</style>
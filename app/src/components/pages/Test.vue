<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">
      <!-- Expandable Textfield -->
      <form action="#">
        <div id="mdl-search" class="mdl-textfield mdl-js-textfield">
          <label class="search-icon" for="sample6">
            <i class="material-icons md-48">search</i>
          </label>
          <input class="mdl-textfield__input" type="text" id="sample1">
        </div>
      </form>
    </div>
    <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone">
      <div id="navigation-pane" class="pane">
        <div class="mdl-card mdl-shadow--2dp" v-for="n in 10">
          <div class="mdl-card__supporting-text">
            <div class="location-clinic">Camp Pendleton <i class="material-icons">chevron_right</i>General Surgery</div>
            <div class="scope">Hernia</div>
            <i class="info-icon material-icons">info</i>
          </div>
        </div>
      </div>
    </div>
    <div class="mdl-cell mdl-cell--8-col mdl-cell--8-col-tablet mdl-cell--8-col-phone">
      <div id="details-pane" class="pane">
        
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
  .mdl-card {
    min-height: inherit;
  }
  .mdl-layout__content {
    overflow: hidden;
  }
  .search-icon {
    position: absolute;
    left: 0;
    bottom: 24px;
    .material-icons {
      font-size: 30px;
    }
  }
  .mdl-card {
    text-transform: uppercase;
    margin-bottom: 15px;
    cursor: pointer;
    transition: all 0.1s ease-in;
    &:hover {
      transform: translate(3px);
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
  #mdl-search {
    &.mdl-textfield {
      overflow: hidden;
    }
    .mdl-textfield__input {
      padding-left: 35px;
      font-size: 2em;
      text-transform: uppercase;
    }
    width: 100%;
  }
</style>
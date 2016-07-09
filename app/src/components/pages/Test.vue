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
        <div class="demo-card-event mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title mdl-card--expand">
              Camp Pendleton<span> General Surgery</span><br>
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Hernia
            </a>
            <div class="mdl-layout-spacer"></div>
            <i class="material-icons">event</i>
          </div>
        </div>
        <div class="mdl-card mdl-shadow--2dp">
          <div class="mdl-card__supporting-text">
            <div class="location">Camp Pendleton</div>
            <div class="clinic">General Surgery</div>
            <div class="scope">Hernia</div>
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
  .page-content {
    
  }
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
  #navigation-pane {
    height: calc(100vh - 248px);
    border-right: 1px solid rgba(0,0,0,.15);
    padding: 0 15px;
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


  .demo-card-event.mdl-card {
    background: #3E4EB8;
  }
  .demo-card-event > .mdl-card__actions {
    border-color: rgba(255, 255, 255, 0.2);
  }
  .demo-card-event > .mdl-card__title {
    align-items: flex-start;
  }
  .demo-card-event > .mdl-card__title > h4 {
    margin-top: 0;
  }
  .demo-card-event > .mdl-card__actions {
    display: flex;
    box-sizing:border-box;
    align-items: center;
  }
  .demo-card-event > .mdl-card__actions > .material-icons {
    padding-right: 10px;
  }
  .demo-card-event > .mdl-card__title,
  .demo-card-event > .mdl-card__actions,
  .demo-card-event > .mdl-card__actions > .mdl-button {
    color: #fff;
  }
</style>
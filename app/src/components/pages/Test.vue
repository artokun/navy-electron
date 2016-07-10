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
          <h3>Hernia <small>Camp Pendleton / General Surgery</small></h3>
          <p>If seen by General Surgery in the past year for the same issue, patient is considered an established patient, and a new consult is not required. Send consult back to referring provider and instruct patient to call General Surgery Clinic for follow-up appointment.</p>
          <!-- <p>
            <b>Appoint to MTF</b>
            <ul>
              <li>ADSM = 14 days  Book/Schedule # 1  All General Surgeons</li>
              <li>Retired/Dependent= 21 days Book/Schedule with All General Surgeons</li>
              <li>MAX ATC 28 days ( 28 ATC met if patient offered an appointment with in 28 days, but declines)</li>
            </ul>
          </p> -->
          <h5>Appoint to MTF</h5>
          <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
            <tbody>
              <thead>
                <tr>
                  <th class="mdl-data-table__cell--non-numeric">Type</th>
                  <th class="mdl-data-table__cell--non-numeric">Days</th>
                  <th class="mdl-data-table__cell--non-numeric">Direction</th>
                </tr>
              </thead>
              <tr>
                <td class="mdl-data-table__cell--non-numeric">ADSM</td>
                <td class="mdl-data-table__cell--non-numeric">14 days</td>
                <td class="mdl-data-table__cell--non-numeric">Book/Schedule #1 all General Surgeons.</td>
              </tr>
              <tr>
                <td class="mdl-data-table__cell--non-numeric">Retired/Dependent</td>
                <td class="mdl-data-table__cell--non-numeric">21 days</td>
                <td class="mdl-data-table__cell--non-numeric">Book/Schedule with all General Surgeons.</td>
              </tr>
              <tr>
                <td class="mdl-data-table__cell--non-numeric">MAX ATC</td>
                <td class="mdl-data-table__cell--non-numeric">28 days</td>
                <td class="mdl-data-table__cell--non-numeric">Met if patient offered an appointment within 28 days, but declines.</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>Document all interactions with patient/phone/voicemail. Example info required: <em>Left VM on cell phone</em></li>
            <li>After <strong>(3)</strong> contacts with patient on <strong>(3)</strong> separate days return to CP Referral Management, with comment</li>
            <li>If no appointments within <strong>(28)</strong> ATC days, return referral to CP Referral Management</li>
          </ul>
          <h5>Patient Categories Available</h5>
          <ul>
            <li>ADSM</li>
            <li>ADFM</li>
            <li>RET</li>
            <li>RETFM</li>
            <li>PLUS</li>
          </ul>
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
  // Table
  .mdl-data-table {
    td, th {
      line-height: inherit;
    }
  }

  h3 {
    text-transform: uppercase;
    font-weight: 600;
    small {
      font-size: 16px;
    }
  }

  // Layout
  .pane {
    &-layout {
      height: calc(100vh - 235px);
      display: flex;
    }
    @media (max-width: 1024px) {
      &-layout {
        height: calc(100vh - 227px);
      }
    }

    &__left {
      float: left;
      width: 335px;
      height: 100%;
      padding: 0 10px;
      overflow-y: auto;
      border-right: 1px solid rgba(0,0,0,.15);
    }

    &__right {
      float: left;
      width: calc(100vw - 397px);
      height: 100%;
      padding: 0 10px;
      overflow-y: auto;
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
    min-height: 80px;
    cursor: pointer;

    &:hover {
      transform: translate(3px);
    }

    &__title {
      height: 3px;
      padding: 0;
      background: rgb(63, 81, 181);
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
    color: #3f51b5;
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

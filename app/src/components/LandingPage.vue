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
    name: 'landing-page'
  }
</script>

<style scoped>
  .page-content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: calc(100vh - 56px);
  }
  .demo-card-square.mdl-card {
    width: 200px;
    height: 320px;
  }
  .demo-card-square > .mdl-card__title {
    color: #fff;
    background:
      url('http://placekitten.com/320/320') bottom right 15% no-repeat #46B6AC;
  }
</style>

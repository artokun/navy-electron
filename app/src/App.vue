<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'src/vuex/store'

  export default {
    store
  }
</script>

<style lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Lato:300);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);
  @import url(https://code.getmdl.io/1.1.3/material.indigo-pink.min.css);

  $font-family-primary: 'Lato', Helvetica, sans-serif;
  $font-family-icons: 'Material Icons';

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body { height: 100%; }

  body {
    align-items: center;
    background:
      radial-gradient(
        ellipse at center,
        rgba(255, 255, 255, 1) 0%,
        rgba(229, 229, 229, .85) 100%
      );
    background-position: center;
    display: flex;
    font-family: $font-family-primary;
    justify-content: center;
    text-align: center;
  }
</style>

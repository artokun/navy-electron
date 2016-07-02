<template>
  <header class="mdl-layout__header">
    <div class="mdl-layout-icon"></div>
    <div class="mdl-layout__header-row">
      <span class="mdl-layout__title">Navy<strong>App</strong></span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" v-link="{path: '/'}">Home</a>
        <a class="mdl-navigation__link" v-link="{path: '/'}">Sign In</a>
      </nav>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
        <label class="mdl-button mdl-js-button mdl-button--icon" for="fixed-header-drawer-exp">
          <i class="material-icons">search</i>
        </label>
        <div class="mdl-textfield__expandable-holder">
          <input class="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'navigation'
  }
</script>

<style scoped>

</style>

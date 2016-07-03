<template>
  <footer class="mdl-mini-footer">
  <div class="mdl-mini-footer__left-section">
    <div class="mdl-logo">NavyApp</div>
    <ul class="mdl-mini-footer__link-list">
      <li><a href="#">Help</a></li>
      <li><a href="#">Privacy & Terms</a></li>
    </ul>
  </div>
  <span class="mdl-mini-footer__version"><strong>Protoype</strong> Version 0.3.1</span>
</footer>
</template>

<script>
  export default {
    name: 'footer-view'
  }
</script>

<style lang="scss" scoped>
  .mdl-mini-footer {
    padding: 10px 30px;
    position: relative;

    &__version {
      position: absolute;
      width: 160px;
      right: 0;
      top: 17px;
    }
  }
</style>

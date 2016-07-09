<template>
  <footer class="mdl-mini-footer">
    <div class="mdl-mini-footer__left-section">
      <div class="mdl-logo">NavyApp</div>
      <ul class="mdl-mini-footer__link-list">
        <li><a href="#">Help</a></li>
        <li><a href="#">Privacy & Terms</a></li>
      </ul>
    </div>
    <div class="mdl-mini-footer__right-section">
      <div class="mdl-mini-footer__version"><strong>Protoype</strong> Version 0.3.1</div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'footer-view'
  }
</script>

<style lang="scss" scoped>
  .mdl-mini-footer {
    padding: 9px 16px 20px;
    &__version {
      line-height: 36px;
    }
  }
</style>

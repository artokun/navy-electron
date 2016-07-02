<template>
  <div class="page-content">
    <p>Bar</p>
    <p>Current route path: {{$route.path}}</p>
    <p>Current route params: {{$route.params | json}}</p>
  </div>
</template>

<script>
  export default {
    name: 'bar'
  }
</script>

<style scoped>
  .page-content {
    background-color: yellow;
  }
</style>

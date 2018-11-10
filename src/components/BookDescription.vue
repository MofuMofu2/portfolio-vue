<template>
  <div class="book-description">
    <div class="description" v-bind:description="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'bookDescription',
  data() {
    return {
      text: ''
      }
  }
}
</script>

<style scoped>
  .book-description {
    margin-top: 20px;
    width: 570px;
  }
  .description {
    font-size: 16px;
    line-height: 26px;
  }
</style>

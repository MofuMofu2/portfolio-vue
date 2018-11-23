<template>
  <div class="book-image">
    <img :src="frontImage" alt="bookImage">
    <img :src="backImage" alt="bookImage">
  </div>
</template>

<script>
export default {
  name: "bookImage",
  props: ['id'],
  computed: {
    frontImage: function() {
      return require('../assets/bookImage/' + this.id + '/front.png')
    },
    backImage: function() {
      return require('../assets/bookImage/' + this.id + '/back.png')
    }
  }
}
</script>

<style scoped>
  .book-image {
    height: 400px;
    margin-top: 30px;
    width: 570px;
  }
  img {
    height: 100%;
    width: 285px;
  }
</style>

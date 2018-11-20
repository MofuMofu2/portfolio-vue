<template>
  <div class="book-image">
    <img :src="image_src" alt="bookImage">
  </div>
</template>

<script>
export default {
  name: "bookImage",
  props: '[id]',
  data() {
    return {
      image_src: require("../assets/bookImage/1.png")
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

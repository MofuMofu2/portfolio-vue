<template>
  <div id="book-image">
    <img :src="image_src" alt="bookImage">
  </div>
</template>

<script>
export default {
  name: "bookImage",
  data() {
    return {
      image_src: require("../assets/bookImage/1.png")
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="page-footer">
    <a href="https://twitter.com/froakie0021"><img :src="image_src" alt="twitter"></a>
  </div>
</template>

<script>
export default {
  name: 'pageFooter',
  data () {
    return {
      image_src: require("../assets/Twitter_Social_Icon_Rounded_Square_Color.svg")
    }
  }
}
</script>

<style scoped>
  .page-footer {
    background-color: #E5E400;
    height: 100px;
  }
  img {
    height: 40px;
    width: 40px;
  }
</style>

<template>
  <div class="page-footer">
    <a href="https://twitter.com/froakie0021" target="blank"><img :src="twitter_src" alt="twitter"></a>
    <a href="https://github.com/MofuMofu2/portfolio-vue" target="blank"><img :src="github_src" alt="github"></a>
  </div>
</template>

<script>
export default {
  name: 'pageFooter',
  data () {
    return {
      twitter_src: require("../assets/Twitter_Social_Icon_Rounded_Square_Color.svg"),
      github_src: require("../assets/GitHub-Mark.svg")
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
    height: 30px;
    margin: 5px;
    width: 30px;
  }
</style>

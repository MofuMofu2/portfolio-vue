<template>
  <div class="page-footer">
    <div class="icons">
      <a href="https://twitter.com/froakie0021" target="blank"><img :src="twitter_src" alt="twitter"></a>
      <a href="https://github.com/MofuMofu2/portfolio-vue" target="blank"><img :src="github_src" alt="github"></a>
    </div>
    <div class="copyright">
      <p>©︎ 2018 りまりま団</p>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'pageFooter',
  data() {
    return {
      twitter_src: require("../assets/footer/Twitter_Social_Icon_Rounded_Square_Color.svg"),
      github_src: require("../assets/footer/GitHub-Mark.svg")
    }
  }
}
</script>

<style scoped>
  .page-footer {
    background-color: #E5E400;
    height: 100px;
  }
  .icons {
    margin-right: 30px;
    text-align: right;
  }
  .icons img {
    height: 30px;
    margin: 10px;
    width: 30px;
  }
  .page-footer p {
    color: #32BDED;
    text-align: center;
  }

</style>

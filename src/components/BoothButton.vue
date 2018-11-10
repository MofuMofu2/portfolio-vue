<template>
  <div class="booth-button">
    <div class="button">
      <a href="booth.url"><p>電子版をポチる</p></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'boothButton',
  data() {
    return {
      booth: [
        {
          url: 'https://booth.pm/ja/items/490460'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .booth-button {
    margin-top: 60px;
    height: 200px;
  }
  .button {
    display: flex;
    flex-direction: center;
    justify-content: center;
  }
  a {
    background-color: #32BDED;
    color: #E40067;
    font-size: 20px;
    font-weight: bold;
    height: 60px;
    text-align: center;
    text-decoration: none;
    width: 400px;
    
  }
</style>

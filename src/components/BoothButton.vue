<template>
  <div class="booth-button">
    <div class="button">
      <a v-bind:href="boothUrl"><p>電子版をポチる</p></a>
    </div>
  </div>
</template>

<script>
import bookData from '../assets/book-data.json'
export default {
  name: 'boothButton',
  props: ['id'],
  data() {
    return {
        bookData: bookData
    }
  },
  computed: {
    boothUrl: function() {
      // JSONからBOOTHのURLを取得して返却する
      return bookData[this.id].booth_url;
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
    background-color: #3ebde0;
    color: #e40067;
    font-size: 20px;
    font-weight: bold;
    height: 60px;
    text-align: center;
    text-decoration: none;
    width: 400px;
    
  }
</style>

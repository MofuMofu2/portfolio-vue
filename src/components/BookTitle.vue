<template>
  <div class="book-title">
    <div class="fanbook-title">
      <div class="fan-book" v-bind:title="item">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookTitle',
  data() {
    return {
      item: "ログと情報をレッツ・ラ・まぜまぜ！～ELK Stack で作るBI環境～"
    }
  }
}
</script>

<style scoped>
  .book-title {
    background-color: #E5E400;
    color: #32BDED;
    font-size: 30px;
  }
  .fanbook-title {
    width: 520px;
  }
</style>

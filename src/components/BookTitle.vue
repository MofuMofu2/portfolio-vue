<template>
  <div class="book-title">
    <div class="fanbook-title">
      <div class="fan-book" v-bind:title="bookTitle">{{ bookTitle }}</div>
    </div>
  </div>
</template>

<script>
import bookData from '../assets/book-data.json'
export default {
  name: 'bookTitle',
  props: ['id'],
  data() {
    return {
      bookData: bookData
    }
  },
  computed: {
    bookTitle: function() {
      //JSONから本のタイトルを取得する
      return bookData[this.id].book_title;
    }
  }
}
</script>

<style scoped>
  .book-title {
    background-color: #e5e400;
    color: #3ebde0;
    font-size: 30px;
  }
</style>

<template>
  <div class="book-title">
    <div class="fanbook-title">
      <div class="fan-book" v-bind:title="bookTitle" v-bind:id="currentBookId">{{ bookTitle }}</div>
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
    background-color: #E5E400;
    color: #32BDED;
    font-size: 30px;
  }
  .fanbook-title {
    width: 520px;
  }
</style>

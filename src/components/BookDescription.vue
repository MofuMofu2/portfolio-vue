<template>
  <div class="book-description">
    <div class="description" v-bind:description="descText">{{ descText }}</div>
  </div>
</template>

<script>
import bookData from '../assets/book-data.json'
export default {
  name: 'bookDescription',
  props: ['id'],
  data() {
    return {
      bookData: bookData
      }
  },
  computed: {
    descText : function() {
      return bookData[this.id].book_description
    }
  }
}
</script>

<style scoped>
  .book-description {
    color: #3a3839;
    margin-top: 20px;
    width: 570px;
  }
  .description {
    font-size: 16px;
    line-height: 26px;
  }
</style>

<template>
  <div id="app">
    <div class="header">
      <title-header></title-header>
      <book-title></book-title>
    </div>
    <div class="main">
      <button class="back_button" type="button" v-on:click="removeCount">
        <img v-bind:src="left_arrow" alt="back">
      </button>
      <div class="left-contents">
        <book-image></book-image>
        <description-list></description-list>
      </div>
      <div class="right-contents">
        <book-description></book-description>
        <book-info></book-info>
        <booth-button></booth-button>
      </div>
      <button class="next_button" v-on:click="addCount">
        <img v-bind:src="right_arrow" alt="next">
      </button>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import 'normalize.css'
import titleHeader from './components/Header.vue'
import bookData from './assets/book-data.json'
import bookDescription from './components/BookDescription.vue'
import bookImage from './components/BookImage.vue'
import bookInfo from './components/BookInfo.vue'
import bookTitle from './components/BookTitle.vue'
import boothButton from './components/BoothButton.vue'
import descriptionList from './components/DescriptionList.vue'
import pageFooter from './components/Footer.vue'

export default {
  name: 'app',
  props: ['currentBookId'],
  components: {
    'title-header': titleHeader,
    'book-description':bookDescription,
    'book-image': bookImage,
    'book-info': bookInfo,
    'book-title': bookTitle,
    'booth-button': boothButton,
    'description-list': descriptionList,
    'page-footer': pageFooter
  },
  data() {
    return {
      bookData: bookData,
      bookId: 0,
      left_arrow: require("./assets/arrow/baseline-keyboard_arrow_left-24px.svg"),
      right_arrow: require("./assets/arrow/baseline-keyboard_arrow_right-24px.svg")
    }
  },
  methods: {
    addCount() {
      if (this.bookId !== bookData.length ) {
        return this.bookId++;
      } else {
        return;
      }
    },
    removeCount() {
      if (this.bookId !== 0) {
        return this.bookId--;
      } else {
        return 0;
      }
    }

  }

}
</script>

<style>
  #app {
    background-color: #E5E400;
  }
  .main {
    display: flex;
    margin: 20px;
  }

  .left-contents {
    width: 50%;
  }

  .right-contents {
    width: 50%;
  }
</style>

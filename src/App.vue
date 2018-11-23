<template>
  <div id="app">
    <div class="header">
      <title-header></title-header>
      <book-title v-bind:id="currentBookId"></book-title>
    </div>
    <div class="main">
      <button class="back-button" type="button" v-on:click="removeCount">
        👈
      </button>
      <div class="left-contents">
        <book-image v-bind:id="currentBookId"></book-image>
        <description-list v-bind:id="currentBookId"></description-list>
      </div>
      <div class="right-contents">
        <book-description v-bind:id="currentBookId"></book-description>
        <book-info v-bind:id="currentBookId"></book-info>
        <booth-button v-bind:id="currentBookId"></booth-button>
      </div>
      <button class="next-button" v-on:click="addCount">
        👉
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
  computed: {
    currentBookId: function() {
      return this.bookId;
    }
  },
  methods: {
    addCount() {
      if (this.bookId < bookData.length -1) {
        return this.bookId++;
      } else if (this.bookId >= bookData.length - 1) {
          this.bookId = bookData.length - 1;
          return this.bookId;
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
    background-color: #e5e400;
    height: 100vh;
  }
  .main {
    display: flex;
    margin: 20px;
  }

  button {
    background-color: #3ebde0;
    border: none;
    height: 30px;
    width: 30px;
  }

  .book-title {
    margin: 10px;
  }

  .back-button {
    margin-top: 40%;
    margin-right: 10px;
  }

  .next-button {
    margin-top: 40%;
    margin-left: 10px;
  }

  .left-contents {
    width: 50%;
  }

  .book-image {
    margin-left: 10px;
  }

  .description-list {
    margin-left: 10px;
  }

  .right-contents {
    width: 50%;
  }
</style>

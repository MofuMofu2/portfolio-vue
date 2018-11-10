<template>
  <div id="app">
    <title-header></title-header>
    <div class="main">
      <div class="left-contents">
        <book-title></book-title>
        <book-image></book-image>
        <description-list></description-list>
      </div>
      <div class="right-contents">
        <book-description></book-description>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import 'normalize.css'
import titleHeader from './components/Header.vue'
import bookDescription from './components/BookDescription.vue'
import bookImage from './components/BookImage.vue'
import bookTitle from './components/BookTitle.vue'
import descriptionList from './components/DescriptionList.vue'
import pageFooter from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    'title-header': titleHeader,
    'book-description':bookDescription,
    'book-image': bookImage,
    'book-title': bookTitle,
    'description-list': descriptionList,
    'page-footer': pageFooter
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

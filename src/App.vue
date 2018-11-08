<template>
  <div id="app">
    <title-header></title-header>
    <div class="main">
      <book-title></book-title>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import 'normalize.css'
import titleHeader from './components/Header.vue'
import bookTitle from './components/BookTitle.vue'
import pageFooter from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    'title-header': titleHeader,
    'book-title': bookTitle,
    'page-footer': pageFooter
  }
}
</script>

<style>
  #app {
    background-color: #E5E400;
  }
  .main {
    margin: 20px;
  }
</style>

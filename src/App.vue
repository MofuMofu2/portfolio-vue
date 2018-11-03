<template>
  <div id="app">
    <title-header></title-header>
    <page-footer></page-footer>
  </div>
</template>

<script>
import 'normalize.css'
import titleHeader from './components/Header.vue'
import pageFooter from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    'title-header': titleHeader,
    'page-footer': pageFooter
  }
}
</script>

<style>

</style>

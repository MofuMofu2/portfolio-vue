<template>
  <div class="book-info">
    <div class="basic-info">
      <h4>発刊年月・イベント名</h4>
      <div class="published-year">
        <ul>
          <li v-for="(info, key) in infoTexts" v-bind:key="info.id"> {{ info.caption }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookInfo',
  data() {
    return {
      infoTexts: [
        { caption: '2017年' },
        { caption: '4月'},
        { caption: '技術書典2' }
      ]
    }
  }
}
</script>

<style scoped>
  h4 {
    font-size: 20px;
  }
  li {
    list-style: none;
  }
</style>

<template>
  <div class="book-info">
    <div class="basic-info">
      <div class="published-year">
        <h4>発刊年月・イベント名</h4>
        <div class="published-info" v-for="(info, key) in infoTexts" v-bind:key="info.id">
          {{ info.caption }}
        </div>
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
  .book-info {
    font-size: 16px;
    line-height: 26px;
  }
  .published-info {
    float: left;
    margin-right: 5px;
  }
  h4 {
    font-size: 20px;
  }
</style>

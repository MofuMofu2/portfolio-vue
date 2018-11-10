<template>
  <div class="book-info">
    <div class="basic-info">
      <div class="published-year">
        <h4>発刊年月・イベント名</h4>
        <div class="published-info" v-for="(info, key) in infoTexts" v-bind:key="info.id">
          {{ info.caption }}
        </div>
      </div>
      <div class="posts-info">
        <h4>関連URL</h4>
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
      ],
      posts: [
        { link: 'http://rimarimadan.hatenablog.com/entry/2017/04/12/%E6%8A%80%E8%A1%93%E6%9B%B8%E5%85%B82_%E3%82%82%E3%81%B5%E3%82%82%E3%81%B5%E3%81%A1%E3%82%83%E3%82%93%E3%81%AE%E6%88%A6%E3%81%84%E5%B1%A5%E6%AD%B4'},
        { link: 'http://amzn.asia/d/be7bGtk'},
        { link: 'https://booth.pm/ja/items/490460'}
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
    margin-right: 5px;
  }
  h4 {
    font-size: 20px;
  }
</style>

<template>
  <div class="book-info">
    <div class="basic-info">
      <div class="published-year">
        <h4>発刊年月・イベント名</h4>
        <ul>
          <li v-for="(info, key) in infoTexts" v-bind:key="info.id">
            {{ info.caption }}
          </li>
        </ul>
      </div>
      <div class="posts-info">
        <h4>関連URL</h4>
        <ul>
          <li v-for="(list, key) in posts" v-bind:key="list.id"><a href="list.url">{{ list.title }}</a></li>
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
      ],
      posts: [
        { title: '技術書典2 もふもふちゃんの戦い履歴',
          url: 'http://rimarimadan.hatenablog.com/entry/2017/04/12/%E6%8A%80%E8%A1%93%E6%9B%B8%E5%85%B82_%E3%82%82%E3%81%B5%E3%82%82%E3%81%B5%E3%81%A1%E3%82%83%E3%82%93%E3%81%AE%E6%88%A6%E3%81%84%E5%B1%A5%E6%AD%B4'
          },
        { title: '商業本',
          url: 'http://amzn.asia/d/be7bGtk'
          }
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

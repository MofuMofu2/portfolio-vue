<template>
  <div class="description-list">
    <div class="overview">
      <h3>KUSO POINT</h3>
      <ul>
        <li v-for="(item, key) in overviews" v-bind:key="item.id">
          {{ item.promotion }}
        </li>
      </ul>
    </div>
    </div>
</template>

<script>
export default {
  name: 'descriptionList',
  data() {
    return {
      overviews: [
        { promotion: 'ふざけたタイトル' },
        { promotion: 'なにも伝わってこない表紙' },
        { promotion: '布教本のはずなのにまさかの省略記法を使っている' }
      ]
    }
  }
}
</script>

<style scoped>
  .descriptiion-list {
    height: 250px;
    margin-top: 20px;
    width: 570px;
  }
  h3 {
    font-size: 24px;
  }
  li {
    font-size: 16px;
    line-height: 26px;
  }
</style>

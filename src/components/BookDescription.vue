<template>
  <div class="book-description">
    <div class="description" v-bind:description="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'bookDescription',
  data() {
    return {
      text: 'Elasticsearch社のプロダクトであるElasticsearch・Logstash・Kibanaを用いてログを分析してみようという本です。各ミドルウェアのインストールからKibanaでグラフを描画するまでの道のりを一通り網羅しつつまとめました。インプレスR＆Dさんから商業化もされています。'
      }
  }
}
</script>

<style scoped>
  .description {
    height: 250px;
  }
</style>

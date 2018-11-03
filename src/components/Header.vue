<template>
  <div class="tite-header">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'titleHeader',
  data () {
    return {
      title: '同人誌が…溢れ出す！'
    }
  }
}
</script>

<style scoped>
  h1 {
    align-items: center;
    background-color: #32BDED;
    color: #E5E400;
    display: flex;
    font-size: 28px;
    height: 50px;
    margin: 0;
  }
</style>

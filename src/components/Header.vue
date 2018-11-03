<template>
  <h1>{{ title }}</h1>
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
    background-color: #32BDED;
    color: #E5E400;
    height: 50px;
    margin: 0;
  }
</style>

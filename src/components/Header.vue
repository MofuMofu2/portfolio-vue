<template>
  <h1>{{ title }}</h1>
</template>
<script>
export default {
  name: 'titleHeader',
  data () {
    return {
      title: '同人誌展示会場'
    }
  }
}
</script>

<style scoped>
  h1 {
    background-color: #32BDED;
    color: #E5E400;
    height: 100px;
  }
</style>

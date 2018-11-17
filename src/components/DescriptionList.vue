<template>
  <div class="description-list">
    <div class="overview">
      <h3>KUSO POINT</h3>
      <ul>
        <li v-for="(item, keys) in promotionData " v-bind:key="item.id">
          {{ item.overviews_promotion }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import bookData from '../assets/book-data.json'
export default {
  name: 'descriptionList',
  data() {
    return {
      bookData: bookData,
    }
  },
  computed: {
    promotionData: function() {
      console.log(bookData);
      const dataList = bookData;
      console.log(dataList[0]);
      console.log(bookData[0].overviews.overviews_promotion);
      return bookData[0].overviews.overviews_promotion;
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

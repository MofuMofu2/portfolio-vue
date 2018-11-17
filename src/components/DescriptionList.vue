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
      // 繰り返し処理でoverviews_promotionの値だけ抜いてreturnする
      const dataList = bookData[0].overviews.forEach((array_element, index, array) => {
        console.log(array_element);
      });
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

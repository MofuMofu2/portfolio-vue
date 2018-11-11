import Vue from 'vue';
import VueRouter from 'vue-router';
import Article from './pages/Article.vue';
import Top from './pages/Top.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter)

export default new VueRouter ({
  routes: [
    {
      path: '/', component: Top
    },
    {
      path: '/article', component: Article
    },
    {
      path: '/top', component: Top
    }
  ]
});
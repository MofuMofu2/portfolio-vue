import Vue from 'vue';
import VueRouter from 'vue-router';
import Article from './pages/Article.vue';
import Top from './pages/Top.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Top},
  { path: '/article', component: Article },
  { path: '/top', component: Top}
];

const router = new VueRouter ({
  routes
});

const app = new Vue({
  router
}).$mount('#app');
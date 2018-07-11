import Vue from 'vue';
import Login from './index.vue';

const vm = new Vue({
  el: '#app',
  render: h => h(Login)
});

Vue.use({ vm });

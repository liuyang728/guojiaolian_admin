import Vue from 'vue';
import Login from './index.vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);

const vm = new Vue({
  el: '#app',
  render: h => h(Login)
});

Vue.use({ vm });

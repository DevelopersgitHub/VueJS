// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import frontVue from './components/frontVue'
import backVue from './components/backVue'

Vue.config.productionTip = false;

new Vue({
  el: '#app1',
  router,
  components: {frontVue},
  template: '<frontVue/>'
});
new Vue({
  el: '#app2',
  router,
  components: {backVue},
  template: '<backVue/>'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});



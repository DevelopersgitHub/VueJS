// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import App1 from './App1'
import router from './router'

Vue.config.productionTip = false;

var data = {
    header: 'Counter Program',
    count: 0
  }
;
Vue.component('counter', {
  data() {
    return data
  },
  template: '<div><h2>{{header}}</h2>' +
  '<button v-on:click="increase">+</button>' +
  '<span> {{count}}</span>' +
  '</div>',
  methods: {
    increase() {
      this.count++;
    }
  }
});

Vue.component('message-comp', {
  props: ['message'],
  template: '<h2>{{message}}</h2>'
});
Vue.component('user-info', {
  //props: ["user"],
  props: {
    user: {
      type: Object,
      default() {
        return {
            nameUser: 'Tom',
            ageUser: 18
        }
      }
    }
  },
  template: '<div><h2>User</h2><p>Name: {{user.nameUser}}</p><p>Age: {{user.ageUser}}</p></div>'
});
Vue.component('userList',{
  //props: ["usersList"],
  props: {
    usersList: {
      type: Array,
      default(){
        return [{
          name: 'Ret',
          age: 20
        },{
          name: 'Set',
          age: 22
        },{
          name: 'Fgrrr',
          age: 212
        }];
      }
    }
  },
  template: '<ul><li v-for="user in usersList"><p> Name: {{user.name}}</p><p> Age: {{user.age}}</p></li></ul>'
});
Vue.component('user', {
  props: {
    nameUser: {
      type: String,
      required: true,
      default: 'Tom',
      /*validator(value) {
        return value != 'admin' && value != '';
      }*/
    },
    ageUser: {
      type: Number,
      required: true,
      default: 18,
      /*validator(value) {
        return value >= 0 && value < 100;
      }*/
    }
  },
  template: '<div><h2>User</h2><p>Name: {{nameUser}}</p><p>Age: {{ageUser}}</p></div>'
});
//props: ['nameUser', 'ageUser'],

/*nameUser: {
  type: String,
  required: true,
  default: 'Tom',
  validator(value){
    return value!='admin' && value!='';
  }
},
ageUser: {
  type: Number,
  required: true,
  default: 18,
  validator(value){
    return value >= 0 && value < 100;
  }
}*/
Vue.component('hello', {
  template: '<compVue/>'
});

Vue.component('section-header', {
  template: '<h3>Header</h3>'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});

new Vue({
  el: '#app1',
  router,
  components: {App1},
  template: '<App1/>'
});

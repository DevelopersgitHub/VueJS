// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {EventBus} from "./event-bus";

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
Vue.component('userList', {
  //props: ["usersList"],
  props: {
    usersList: {
      type: Array,
      default() {
        return [{
          name: 'Ret',
          age: 20
        }, {
          name: 'Set',
          age: 22
        }, {
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
/*Vue.component('userdetails', {
  props: ["user"],
  template: '<div class="userDetailsDiv"><p>Name: {{user.name}}</p><p>Age: {{user.age}}</p></div>'
});
Vue.component('userlist', {
  props: ["users"],
  template: '<div><userDetails v-for="user in users" v-bind:key="user.name" v-bind:user="user"></userDetails></div>'
});*/

Vue.component('userdetails', {
  props: ["user"],
  template: '<div><h2>Информация о пользователе</h2><div v-if="visible"><p>Name: {{user.name}}<p>Age: {{user.age}}</p></div></div>',
  data() {
    return {
      visible: false
    }
  }
});
Vue.component('userlist', {
  props: ["users"],
  template: '<div><userDetails v-for="user in users" v-bind:key="user.name" v-bind:user="user"></userDetails></div>'
});

Vue.component('useredit', {
  props: ["user"],
  data() {
    return {
      userName: this.user
    }
  },
  //template: '<div><h2>Hello, {{userName}}</h2><input type="text" v-model="userName"/><p>Name: {{userName}}</p></div>'
  template: '<div><input type="text" v-model="userName" v-on:input="onUserChange"/><p>Name: {{userName}}</p></div>',
  methods: {
    onUserChange() {
      this.$emit(/*'userchange'*/ 'update:user', /*userName*/ this.userName);
    }
  }
});
Vue.component('userform', {
  props: ["addfn"],
  data() {
    return {
      user: {
        name: '',
        age: 18
      }
    }
  },
  template: '<div><input type="text" v-model="user.name"/><input type="number" v-model="user.age"/><button v-on:click="addfn({name: user.name, age: user.age})">Добавить</button></div>',
  //template: '<div><input type="text" v-model="user.name"/><br/><br/><input type="number" v-model="user.age"/><br/><br/><button v-on:click="userAdd">Add</button></div>',
  methods: {
    userAdd(event) {
      this.users.push({name: this.user.name, age: this.user.age});
    }
  }
});
Vue.component('useritem', {
  props: ["user", "index", "removefn"],
  //<button v-on:click="userDelete(index)">Delete</button>
  template: '<div><p>Name: {{user.name}}<br> Age: {{user.age}}</p><button v-on:click="removefn(index)">Delete</button></div>',
  methods: {
    userDelete(index) {
      this.$emit('userdelete', index);
    },
    userChange(index) {
      this.$emit('userchange', index);
    }
  }
});
Vue.component('userchange', {
  props: ["name"],
  template: '<div><input v-model="name"/><button @click="save">Save</button></div>',
  methods: {
    save() {
      this.$emit("userchange", this.name);
    }
  }
});
Vue.component('userreset', {
  props: ["name"],
  template: '<div><p>Имя: {{name}}</p><button @click="reset">Reset</button></div>',
  methods: {
    reset() {
      this.$emit("userreset");
    }
  }
});

Vue.component('usered', {
  props: ["user"],
  template: '<div><input v-model="userName"/><button @click="save">Save</button></div>',
  data() {
    return {
      userName: this.user
    }
  },
  methods: {
    save() {
      EventBus.$emit("userchange", this.userName);
    }
  }
});
Vue.component('userinf', {
  props: ["user"],
  template: '<div><p>Имя: {{userName}}</p></div>',
  data() {
    return {
      userName: this.user
    }
  },
  created() {
    EventBus.$on("userchange", (name) => {
      this.userName = name;
    })
  }
});
var toggleMixin = {
  data() {
    return {
      state: true,
      on: "ON",
      off: "OFF"
    }
  },
  methods: {
    toggle() {
      this.state = !this.state;
    }
  },
  created() {
    console.log("Mixin has been created");
    this.$options.template =
      '<div>' + this.$options.template + '<button @click="toggle" v-show="state">{{on}}</button><button @click="toggle" v-show="!state">{{off}}</button></div>'
  }
};
Vue.component('light', {
  template: '<h3>{{header}}</h3>',
  mixins: [toggleMixin],
  computed: {
    header() {
      return this.state ? 'Свет включен' : 'Свет выключен';
    }
  },
  created() {
    console.log("Light component has been created");
  }
});
Vue.component('enabled', {
  template: '{{enabled()}}',
  mixins: [toggleMixin],
  methods: {
    enabled(){
      return this.state ? 'Включить функцию' : 'Выключить функцию';
    }
  },
  created() {
    console.log("enabled component has been created");
  }
});
Vue.mixin({
  created() {
      console.log('Global mixin has been created');
  }
});
Vue.component('messageMixin', {
  template: '<h2>Hello</h2>'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});

/*new Vue({
  el: '#app1',
  router,
  components: {App1},
  template: '<App1/>'
});*/

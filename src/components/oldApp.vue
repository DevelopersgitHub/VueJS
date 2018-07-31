<template>
  <div>
    <!-- <img src="./assets/logo.png">
    <p>Welcome</p>
    <userlist v-bind:users="users" ref="details"></userlist>
    <userdetails v-bind:user="user" ref="details"></userdetails>
    <button v-on:click="toogle()">Show</button>
    <useredit v-bind:user="nameUser"></useredit>
    <br/>
    <br/>
    <br/>
    <input type="text" v-model.lazy="nameUser"/>
    <button v-on:click="resetName(nameUser)">Set Name</button>
    <p>{{nameUser}}</p>-->

    <h2>Hello, {{nameUser}}</h2>
    <useredit v-bind:user.sync="nameUser"></useredit>
    <!--v-on:update:user="change"v-on:userchange="change"-->

    <router-view/>
  </div>
</template>

<script>
  var footer = {
    template: '<p><b>Footer</b></p>'
  };
  var comp1 = {
    template: '<div>Content 1</div>'
  };
  export default {
    name: 'App2',
    data() {
      return {
        nameUser: '',
        users: [{
          name: 'Tom',
          age: 18
        },{
          name: 'Bob',
          age: 23
        },{
          name: 'Alice',
          age: 21
        }],
        user: {
          name: 'Tom',
          age: 18
        }
      }
    },
    methods: {
      toggle(){
        this.$refs.details.visible = !this.$refs.details.visible;
      },
      resetName(value){
        this.nameUser = value;
      },
      change(value){
        this.nameUser = value;
      }
    },
    components: {
      /*'section-content': comp1,
      'section-footer': footer*/
    }
  }
</script>

<style>

</style>

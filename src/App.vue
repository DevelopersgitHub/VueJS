<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <p>Welcome</p>
    <h2>Список пользователей</h2>
    <userform v-bind:user="user"></userform>
    <userform v-bind:addfn="add"></userform>
    <div>
      <useritem v-for="(user, index) in users"
                :user="user"
                :index="index"
                :key="index"
                :removefn="remove">
        v-on:userdelete="remove"
        v-on:userchange="change">
      </useritem>
    </div>
    <h2>User</h2>
    <userchange :user="user" @userchange="change"></userchange>
    <userreset :name="user" @userreset="reset"></userreset>
    <h2>User</h2>
    <usered :user="user"></usered>
    <userinf :user="user"></userinf>-->
    <!--<h1>Миксины</h1>
    <light></light>
    <enabled></enabled>-->
    <messageMixin></messageMixin>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        user: 'Tom',
        users: [
          {name: 'Tom', age: 23},
          {name: 'Bob', age: 26},
          {name: 'Alice', age: 28}
        ],
        //user: {}
      }
    },
    methods: {
      add(user) {
        this.users.push(user);
      },
      remove(index) {
        this.users.splice(index, 1);
      },
      /*change(index){
        this.user = this.users[index];
      },*/
      change(name) {
        this.user = name;
      },
      reset() {
        this.user = 'Tom';
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-left: 100px;
  }

  body {
    background: url('./assets/background.jpg'), no-repeat;
    font-family: Helvetica, sans-serif;
    font-size: 18px;
    color: #272727;
  }
</style>

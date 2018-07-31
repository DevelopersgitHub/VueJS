<template>
  <div id="oldApp2">
    <section-header></section-header>
    <section-content></section-content>
    <counter></counter>
    <counter></counter>
    <counterLocal></counterLocal>
    <input type="text" v-model.lazy="welcome"/><br><br>
    <message-comp v-bind:message="welcome"></message-comp>
    <!-- <input type="text" v-model="user.nameUser"/>
    <input type="number" v-model="user.ageUser"/>
    <user v-bind="user"></user> -->
    <input type="text" v-model="user.nameUser"/>
    <input type="number" v-model="user.ageUser"/>
    <user-info v-bind:user="user"></user-info>
    <user-info></user-info>
    <user-list v-bind:usersList="usersList"></user-list>
    <user-list></user-list>
    <router-view/>
  </div>
</template>

<script>
  var comp2 = {
    template: '<div>Content 2</div>'
  };
  var compCounter = {
    template: '<div><h2>{{header}}</h2></div>',
    data() {
      return {
        header: 'Counter Local Program'
      }
    }
  };
  export default {
    name: "oldApp2",
    data() {
      return {
        welcome: '',
        user: {
          nameUser: '',
          ageUser: ''
        },
        usersList:
          [{
            name: 'Tom',
            age: 18
          },{
            name: 'Bob',
            age: 23
          },{
            name: 'Alice',
            age: 21
          }]
      }
    },
    components: {
      'section-content': comp2,
      'counterLocal': compCounter
    }
  }
</script>

<style scoped>
  #app1 {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-left: 100px;
  }

  body {
    background: url('../assets/background.jpg'), no-repeat;
    font-family: Helvetica, sans-serif;
    font-size: 18px;
    color: #272727;
  }
</style>

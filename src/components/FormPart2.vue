<template>
  <div>
    <input type="radio" value="Tom" v-model="user"/>
    <label>Tom</label><br/>
    <input type="radio" value="Bob" v-model="user"/>
    <label>Bob</label><br/>
    <input type="radio" value="Sam" v-model="user"/>
    <label>Sam</label><br/>
    <input type="radio" value="Alice" v-model="user"/>
    <label>Alice</label><br/>
    <span>Выбрано: {{ user }}</span>
    <br/>
    <input type="radio" v-bind:value="{name: 'Tom', age: 22}" v-model="users"/>
    <label>Tom</label><br/>
    <input type="radio"  v-bind:value="{name: 'Bob', age: 25}" v-model="users"/>
    <label>Bob</label><br/>
    <input type="radio"  v-bind:value="{name: 'Sam', age: 19}" v-model="users"/>
    <label>Sam</label><br/>
    <input type="radio"  v-bind:value="{name: 'Alice', age: 20}" v-model="users"/>
    <label>Alice</label><br/>
    <span>Выбрано: {{ users.name }} - {{ users.age }}</span>
    <template v-for="user in userArray">
      <input type="radio" v-bind:value="user" v-model="selectedUser"/>
      <label> {{ user.name }}</label><br/>
    </template>
    <span v-if="selectedUser">Выбрано: {{ selectedUser.name }} - {{ selectedUser.age }}</span><br/>
  </div>
</template>

<script>
  export default {
    name: "FormPart2",
    data() {
      return {
        user: '',
        users: {},
        userArray: [
          {name:'Tom', age:22},
          {name:'Bob', age:25},
          {name:'Sam', age:28},
          {name:'Alice', age:26}
        ],
        selectedUser: null
      }
    }
  }
</script>

<style scoped>

</style>

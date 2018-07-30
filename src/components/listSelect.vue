<template>
  <div>
    <select v-model="user">
      <option>Tom</option>
      <option>Bob</option>
      <option>Sam</option>
    </select>
    <span>Выбрано: {{ user }}</span>
    <select v-model="users" multiple>
      <option>Tom</option>
      <option>Bob</option>
      <option>Sam</option>
      <option>Alice</option>
    </select>
    <span>Выбрано: {{ users }}</span>
    <select v-model="selectedUser">
      <option v-for="user in usersArray" v-bind:value="user.name">{{ user.name }}</option>
    </select>
    <span>Выбрано: {{ selectedUser }}</span>

    <select v-model="selUsers">
      <option v-for="user in usersArray" v-bind:value="user">{{ user.name }}</option>
    </select>
    <span>Выбрано: {{selUsers.name}} - {{selUsers.age}}</span>

    <select v-model="allSelUsers" multiple>
      <option v-for="user in usersArray" v-bind:value="user">{{ user.name }}</option>
    </select>
    <h3>Выбранные объекты: </h3>
    <ul v-model="allSelUsers">
      <li v-for="user in allSelUsers"> {{ user.name }} - {{ user.age }} </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "listSelect",
    data() {
      return {
        user: '',
        users: [],
        usersArray:[
          {name:'Tom', age:22},
          {name:'Bob', age:25},
          {name:'Sam', age:28},
          {name:'Alice', age:26}
        ],
        selectedUser: '',
        selUsers: '',
        allSelUsers: []
      }
    }
  }
</script>

<style scoped>

</style>

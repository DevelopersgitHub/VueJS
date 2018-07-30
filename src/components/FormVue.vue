<template>
  <div class="col-md-4">
    <label>Логин</label>
    <input type="text" v-model="login" placeholder="Введите логин" class="form-control"/><br/>
    <label>Пароль</label>
    <input type="password" v-model="password" placeholder="Введите пароль" class="form-control"/><br/>
    <label>Возраст</label>
    <input type="number" v-model="age" min="18" placeholder="Введите возраст" class="form-control"/><br/>
    <label>Дата регистрации</label>
    <input type="date" v-model="date" placeholder="Введите дату" class="form-control"/><br/>
    <textarea v-model="comment" class="form-control"></textarea><br/>
    <div>
      <h3>Введенная информация</h3>
      <p>Логин: {{ login }}</p>
      <p>Пароль: {{ password }}</p>
      <p>Дата регистрации: {{ date }}</p>
      <p>Возраст: {{ age }}</p>
      <h3>Комментарий</h3>
      <p style="white-space: pre-line">{{ comment }}</p>
    </div>
    <input type="checkbox" id="checkbox" v-model="checked"/>
    <label for="checkbox">{{ checked }}</label>
    <input type="checkbox" v-model="light" v-bind:true-value="on" v-bind:false-value="off"/>
    <span v-if="light===on">Выключить</span>
    <span v-else>Включить</span>
    <br/>
    <input type="checkbox" value="Tom" v-model="selectedUsers"/>
    <label>Tom</label><br/>
    <input type="checkbox" value="Bob" v-model="selectedUsers"/>
    <label>Bob</label><br/>
    <input type="checkbox" value="Sam" v-model="selectedUsers"/>
    <label>Sam</label><br/>
    <input type="checkbox" value="Alice" v-model="selectedUsers"/>
    <label>Alice</label><br/>
    <span>Выбрано: {{ selectedUsers }}</span>
    <br/>
    <br/>
    <br/>
    <template v-for="user in users">
      <input type="checkbox" v-bind:value="user" v-model="selectedUsers"/>
      <label>{{ user.name }}</label><br/>
    </template>
    <ul>
      <li v-for="user in selectedUsers">{{ user.name }} - {{ user.age }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "FormVue",
    data() {
      return {
        login: '',
        password: '',
        date: '',
        age: 22,
        comment: 'Комментарий...',
        checked: true,
        on: true,
        off: false,
        light: true,
        selectedUsers: [],
        users: [
          {name: 'Tom', age: 22},
          {name: 'Bob', age: 25},
          {name: 'Sam', age: 28},
          {name: 'Alice', age: 26},
        ]
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div>
    <p>
      <input type="text" v-model="newPhone.name"/>
      <input type="number" v-model="newPhone.cost"/>
      <button v-on:click="pushArray(newPhone)">Добавить</button>
    </p>
    <ul>
      <li v-for="(phone, index) in phones">
        <p>{{phone.name }} {{phone.cost }}
          <button v-on:click="phones.splice(index, 1)">Удалить</button>
        </p>
      </li>
    </ul>
    <!--<input type="text" v-model="newPhone"/>
   <button v-on:click="phones.push(newPhone)">Добавить</button>
   <ul>
     <li v-for="(phone, index) in phones">
       <p>{{ index + 1 }} . Name: {{ phone.name }}</p>
       <p>Cost: {{ phone.cost }}</p>
     </li>
     <p> {{ phone }} <button v-on:click="phones.splice(index, 1)">Удалить</button></p>
   </ul>
   <li v-for="(phone, index) in phones"> {{ index + 1 }}. {{ phone.name }}</li>
   <ul>
     <li v-for="user in users">
       <p v-for="(value, key) in user">{{ key }} : {{ value }}</p>
     </li>
   </ul>
   <ul>
     <template v-for="user in users">
       <li>Name: {{ user.name }}</li>
       <li>newUser: {{ user.newUser }}</li>
     </template>
   </ul>
   <span v-for="n in 100"> {{ n }}</span>-->

  </div>
</template>

<script>
  export default {
    name: "forVue",
    data() {
      return {
        newPhone: {
          name: 'Phone',
          cost: 0
        },
        phones: [
          {
            name: 'Iphone6',
            cost: '100$'
          },
          {
            name: 'Iphone7',
            cost: '120$'
          },
          {
            name: 'Iphone8',
            cost: '160$'
          },
          {
            name: 'IphoneX',
            cost: '200$'
          }
        ],
        newPhones: ['Iphone6', 'Iphone7', 'Iphone8', 'IphoneX',],
        users: [
          {
            name: 'Mikhail',
            newUser: 'true'
          },
          {
            name: 'Vlad',
            newUser: 'false'
          },
          {
            name: 'Robert',
            newUser: 'false'
          }
        ]
      }
    },
    methods: {
      pushInto(value){
        var val = value.split(", ");
        let item = {};
        item.name = val[0];
        item.cost = val[1];
        this.phones.push(item)
      },
      pushArray(newPhone){
        this.phones.push(newPhone);
      }
    }
  }
</script>

<style scoped>
  ul {
    float: top;
  }
</style>

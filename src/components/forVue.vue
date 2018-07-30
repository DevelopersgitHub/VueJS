<template>
  <div>
    <p>
      <input ref="input1" type="text" v-model="newPhone.title"/>
      <input ref="input2" type="text" v-model="newPhone.company"/>
      <input type="number" v-model="newPhone.price"/>
      <button v-on:click="pushArray(newPhone)">Добавить</button>
      <button v-on:click="updateSlice()"></button>
    </p>
    <ul>
      <li v-for="(phone, index) in phones">
        <p>{{phone.title }} {{phone.company }} {{phone.price + '$'}}
          <button v-on:click="phones.splice(index, 1)">Удалить</button>
        </p>
      </li>
    </ul>
    <br/>
    <input type="number" v-model="start"/>
    <input type="number" v-model="end"/>
    <ol>
      <li v-for="(user, index) in visibleList">
        <p>
          {{ user.name }}
          {{ user.newUser }}
        </p>
      </li>
    </ol>
    <br/>
    <input type="text" v-model="companys"/>
    <ol>
      <li v-for="phone in filteredList">
        {{ phone.title }}
        {{ phone.company }}
        {{ phone.price }}
      </li>
    </ol>
    <table>
      <tr>
        <td><a @click="sortParam = 'title'">Модель</a></td>
        <td><a @click="sortParam='company'">Компания</a></td>
        <td><a @click="sortParam='price'">Цена</a></td>
      </tr>
      <tr v-for="phone in sortedList">
        <td>{{ phone.title }}</td><td>{{ phone.company }}</td><td>{{ phone.price }}</td>
      </tr>
    </table>
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
  /*var sortByTitle = function(d1, d2){return d1.title.toLowerCase() > d2.title.toLowerCase()};
  var sortByCompany = function(d1, d2){return d1.company.toLowerCase() > d2.company.toLowerCase()};
  var sortByPrice = function(d1, d2){return d1.price > d2.price};*/
  export default {
    name: "forVue",
    data() {
      return {
        companys: '',
        sortParam: '',
        start: 0,
        end: 0,
        newPhone: {
          title: 'Phone',
          company: '0',
          price: 0
        },
        phones: [
          {
            title: 'Iphone6',
            company: 'Iphone',
            price: 400
          },
          {
            title: 'IphoneX',
            company: 'Iphone',
            price: 300
          },
          {
            title: 'Iphone5',
            company: 'Iphone_M',
            price: 500
          },
          {
            title: 'Samsung',
            company: 'Samsung S8',
            price: 200
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
    computed: {
      visibleList() {
          return this.users.slice(this.start, this.end);
      },
      filteredList(){
        var comp = this.companys;
        return this.phones.filter(function(elem){
          if(comp === '') {
            return true;
          } else {
            return elem.title.indexOf(comp) > -1;
          }
        });
      },
      sortedList(){
        switch (this.sortParam){
          case 'title':
            return this.phones.sort(this.sortTitle);
          case 'company':
            return this.phones.sort(this.sortCompany);
          case 'price':
            return this.phones.sort(this.sortPrice);
          default: return this.phones;
        }
      }
    },
    methods: {
      pushInto(value) {
        var val = value.split(", ");
        let item = {};
        item.name = val[0];
        item.cost = val[1];
        this.phones.push(item)
      },
      /*pushArray(){
        let item = {};
        item.name = this.$refs.input1.value;
        item.cost = this.$refs.input2.value;
        this.phones.push(item);
      }*/
      pushArray(value) {
          this.phones.push(value);
          this.newPhone = {title: 'Phone', company: 0, price: 0};
      },
      updatePhones(newPhone) {
        this.$set(this.phones, Math.floor(Math.random() * 4), newPhone);
        this.newPhone = {name: 'Phone', cost: 0};
      },
      updateSlice() {
        this.phones = this.phones.slice(0, 2);
      },
      sortTitle(d1, d2){
          return d1.title.toLowerCase() > d2.title.toLowerCase();

      },
      sortCompany(d1, d2){
        return d1.company.toLowerCase() > d2.company.toLowerCase();
      },
      sortPrice(d1, d2){
        return d1.price > d2.price;
      }
    }
  }
</script>

<style scoped>
  ul {
    float: top;
  }
</style>

<template>
  <div>
    <div id="form">
    <form action="">
      <li v-for="big in bigList" v-bind:class="{'strike' : big.new}">{{ big.name }}</li>
      <input id="input" type="text" v-model="message" v-on:keyup.enter="onClickAddList">
      <button id="listButton" v-on:click.prevent="onClickAddList"></button>
    </form>
      <button v-on:click="increment">+</button>
      <button v-if="counter>0" v-on:click="decrement" >-</button>
      <div>{{ counter }}</div>

      <input type="text" v-model="number"/>
      <p>{{ number }} : {{ factorial(number) }}</p>

      <input type="text" v-model="message"/>
      <input type="text" v-model="message"/>
      <p>{{ message }}</p>

      <input type="text" v-model="nameMes"/>
      <input type="text" v-model="ageMes"/>
      <p>Имя: {{ nameMes }}, Age: {{ ageMes }}</p>
      <!-- <p>{{ checkAge() }}</p> -->
      <p> {{ enabled }}</p>
    </div>
  </div>
</template>

<script>
  export default {
        name: "List",
      data() {
          return {
            nameMes: 'Tom',
            ageMes: '25',
            message: '',
            bigList: [
              {
                name: 'Mihail',
                new: true
              },
              {
                name: 'Vlad',
                new: true
              },
              {
                name: 'Robert',
                new: false
              }
            ],
            counter: 0,
            number: 5
          }
      },
      computed:{
          enabled(){
            console.log('computed');
            if(this.ageMes > 17) {
              return ' доступ разрешен';
            } else {
              return ' доступ запрещен';
            }
          }
      },
      methods: {
        onClickAddList(){
          var input = document.getElementById("input");
          this.bigList.push({name: input.value});
        },
        increment(){
          this.counter++;
        },
        decrement(){
          this.counter--;
        },
        factorial(n){
          var result = 1;
          for(var i=1; i <= n; i++){
            result *= i;
          }
          return result;
        },
        checkAge(){
          console.log('check');
          if(this.ageMes > 17) {
            return ' доступ разрешен';
          } else {
            return ' доступ запрещен';
          }
        }
      }
    }
</script>

<style scoped>
  body{
    background-color: #3949ab;
    font-family: Helvetica, sans-serif;
    font-size: 18px;
    color: #272727;
  }
  form{
    float:left;
    margin-left: 20px;
    list-style: none;
    width: 340px;
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
  }
  li{
    display: block;
    padding: 20px 30px;
  }
  li:last-child{
    border-bottom: none;
  }
  .strike{
    float:left;
    text-decoration: line-through;
    color: #aaa;
  }
  button#listButton{
    width: 120px;
    height: 20px;
  }
</style>

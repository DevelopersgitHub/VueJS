<template>
  <div id="footer">
    <input id="input1" type="text" v-on:input="setMessage">
    <p v-once>{{ message }}</p>
    <button v-on:click="getMessage">Отправить</button>
    <p>Connect with us: </p>
    <a :href="link"> {{ text }} </a>
    <br>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        message: 'Привет',
        text: 'Google',
        link: 'https://google.com',
        counter: 0,
      }
    },
    methods: {
        setMessage(event){
          this.message = event.target.value;
        },
        getMessage(){
          var el = document.getElementById("input1");
          this.message = el.value;
        },
        increment(){
          this.counter++;
        },
        decrement(){
          this.counter--;
        }
    }
  }
</script>

<style scoped>
  div#footer{
    float: left;
    margin-top: 0;
    margin-left: 150px;
  }
</style>

<template>
  <div id="right">
    <p>{{ msg }}</p>

    <p>{{ get() }}</p>
    <p>{{ set('M M') }}</p>

    <p>{{ set('Vlad R') }}</p>
    <p>{{ set('Vlad S') }}</p>

    <p>{{ getV() }}</p>

    <input type="text" v-on:input="setMessage"/>
    <p> {{ msg }}</p>

    <button id="appButton" @click="msgRev" type="button" class="btn"></button>
    <br>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
     return {
       msg: 'Default message and setter',
       firstName: 'Mihail',
       lastName: 'Mikhailov',
       newFirstName: '',
       newLastName: ''
     }
  },
  methods: {
      enabled(){
        this.isActive =!this.isActive;
      },
    msgR(){
      return this.msg
    },
    msgRev () {
      this.msg = this.msg.split('').reverse().join('')
    },
    get(){
      return this.firstName + " " + this.lastName;
    },
    getV(){
      return this.newFirstName + " " + this.newLastName;
    },
    set(fullName){
      var names = fullName.split(' ');
      this.newFirstName = names[0];
      this.newLastName = names[names.length-1];
    },
    setMessage(event) {
        this.msg = event.target.value;
    }
  }
}
</script>

<!-- <script>
  var http = require('http');
  var static = require('node-static');
  var file = new static.Server(".");

  http.createServer(function (req, res) {
    file.serve(req,res);
  }).listen(8080);
  console.log('Server running on port 8081');
</script> -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button#appButton{
  width: 50px;
  height: 10px;
}
div#right{
  float:right;
  list-style: none;
  width: 340px;
  margin-right: 20px;
  background-color: #fff;
  padding: 6px 0;
  border-radius: 2px;
}
.region{
  background-color: #999;
  width: 100px;
  height: 100px;
  display: inline-block;
  margin: 10px;
}
.active{
  background-color: red;
}
</style>

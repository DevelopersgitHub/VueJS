<template>
  <div>
    <br/>
    <input type="text" v-model="nameI"/>
    <input type="number" v-model="age"/>
    <p>{{ nameI }} - {{ age}}</p>
  </div>
</template>

<script>
  export default {
    name: 'ObjVue',
    data() {
      return {
        nameI: 'Tom',
        age: '25',
      }
    },
  };

  /*var vm2 = new Vue({
    name: "Obj",
    data(){
      title: ''
    },
    methods: {
      onClick(){
        vm2.setName(this.title);
        //vm2.title = this.title;
      }
    }
  });*/
</script>

<style scoped>

</style>

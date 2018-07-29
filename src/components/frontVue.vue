<template>
  <div id="app1">
    <input type="text" v-model="name"/>
    <input type="number" v-model="age"/>
    <p>Name: {{ name }}, Age: {{ age }}</p>
    <br/>
  </div>
</template>

<script>
  import { EventBus } from '../event-bus.js';
  export default {
    name: 'frontVue',
    data() {
      return {
        name: 'Tom',
        age: 22
      }
    },
    mounted(){
      EventBus.$on('change_name', (newName) => {
        this.name = newName;
      });
    }
  };


</script>

<style scoped>

</style>

<template>
  <div id="app2">
    <input type="text" v-model="title"/>
    <button v-on:click="onClick">Change</button>
  </div>
</template>
<script>
  import { EventBus } from '../event-bus.js';
  export default {
    name: 'backVue',
    data() {
      return {
        title: 'Smith'
      }
    },
    methods: {
      onClick() {
        EventBus.$emit('change_name', this.title);
      }
    }
  };

</script>

<style scoped>

</style>

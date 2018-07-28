<template>
  <div id="app2">
    <input type="text" v-model="title"/>
    <button v-on:click="onClick">Change</button>
  </div>
</template>
<script>
  export default {
    name: 'backVue',
    data(){
      return {
        title: ''
      }
    },
    methods: {
      onClick() {
        frontVue.setName(this.title);
      }
    }
  };

</script>

<style scoped>

</style>

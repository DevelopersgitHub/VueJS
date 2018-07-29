<template>
  <div>
    <p ref="header">Welcome!</p>
    <button v-on:click="onClick">Change</button>
    <br/>
    <h2> {{ message }}</h2>
    <button v-on:click="update()">Update</button>
    <button v-on:click="destroy()">Destroy</button>
  </div>
</template>

<script>
  export default {
    name: "RefsComponent",
    data() {
      return {
        message: "Welcome to Vue.js"
      }
    },
    methods: {
      destroy() {
        this.$destroy();
      },
      update() {
        this.message = 'Updated';
        this.$forceUpdate();
      },
      onClick() {
        this.$refs.header.innerText = "Hello in Vue.js";
      }
    },
    beforeCreate() {
      console.log('beforeCreate()');
    },
    created() {
      console.log('beforeCreate()');
    },
    beforeMount() {
      console.log('beforeMount()');
    },
    mounted() {
      console.log('mounted()');
    },
    beforeUpdate() {
      console.log('beforeUpdate()');
    },
    updated() {
      console.log('updated()');
    },
    beforeDestroy() {
      console.log('beforeDestroy()');
    },
    destroyed() {
      console.log('destroyed()');
    }
  }
</script>

<style scoped>

</style>

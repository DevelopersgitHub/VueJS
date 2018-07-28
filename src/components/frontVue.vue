<template>
  <div id="app1">
    <input type="text" v-model="name"/>
    <input type="number" v-model="age"/>
    <p>Name: {{ name }}, Age: {{ age }}</p>
    <br/>
  </div>
</template>

<script>
export default {
  name: 'frontVue',
  data() {
    return {
      name: 'Tom',
      age: 22
    }
  },
  methods: {
    setName(newName) {
      this.name = newName;
    }
  }
};

</script>

<style scoped>

</style>

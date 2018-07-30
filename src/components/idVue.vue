<template>
  <div class="col-md-4">
    <input type="text" v-model.lazy="name"/><span> Введено: {{ name }}</span>
    <br/>
    <br/>
    <input v-model.number="age" type="number"/>
    <span>Введено: {{ age }}</span>
    <br/>
    <br/>
    <input type="text" v-model.trim="message"/>
    <span>Введено: {{ message }}</span>
    <br/>
    <br/>
    <input v-model.lazy.trim="message"/>
    <br/>
    <br/>
    <input v-model.lazy.number="age" type="number"/>
  </div>
</template>

<script>
  export default {
    name: "idVue",
    data() {
      return {
        name: '',
        age: 0,
        message: ''
      }
    }
  }
</script>

<style scoped>

</style>

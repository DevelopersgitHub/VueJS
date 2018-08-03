<template>
  <div>
   <!--<h2>Products {{$route.params.id}}</h2>
    <h3>Category: {{$route.params.category}}</h3>
    <h3>Id: {{$route.params.id}}</h3>-->
    <h1>Товары: <router-view></router-view></h1>
    <template v-if="visible">
      <h1>Заголовок 1</h1>
      <p v-if="visible">Первый параграф</p>
    </template>
    <template v-else>
      <h1>Заголовок 2</h1>
      <p>Второй параграф</p>
    </template>
    <br/>
    <div v-show="visible">XXX</div>
    <button v-on:click="visible = !visible"> {{ visible ? 'Отключи меня, если сможешь!' : 'Эй, не так быстро!' }}</button>
    <br/>
    <br/>
    <button v-on:click="visible = !visible"> {{ visible ? 'К параграфу 2' : 'К параграфу 1' }}</button>
    <br/>
    <br/>
    <input type="number" v-model="number"/>
    <p v-if="number == 1">Один</p>
    <p v-else-if="number == 2">Два</p>
    <p v-else>Больше 2</p>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        visible: true,
        number: 1
      }
    },
    methods: {
      onClick() {
        this.visible = !this.visible;
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>Welcome</p>
    <FormVue/>
    <router-view/>
  </div>
</template>
<script>
  import FormVue from './components/FormVue';
  export default {
    name: 'App',
    components: {FormVue}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-left: 100px;
  }

  body {
    background: url('./assets/background.jpg'), no-repeat;
    font-family: Helvetica, sans-serif;
    font-size: 18px;
    color: #272727;
  }
</style>

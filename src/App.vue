<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>Welcome</p>
    <section-header></section-header>
    <section-content></section-content>
    <section-footer></section-footer>
    <router-view/>
  </div>
</template>

<script>
  var footer = {
    template: '<p><b>Footer</b></p>'
  };
  var comp1 = {
    template: '<div>Content 1</div>'
  };
  export default {
    name: 'App',
    components: {
      'section-content': comp1,
      'section-footer': footer
    }
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

<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <p class="strike">Welcome to the world unique things</p>
    <List/>
    <Footer/> -->
    <img src="./assets/logo.png">
   <p class="strike">Welcome</p>
   <Class/>
   <router-view/>
 </div>
</template>

<script>
 import List from './components/List';
 import Footer from './components/Footer';
 import Class from './components/Class';
export default {
   name: 'App',
   components: { Class, Footer, List }
}
</script>

<style>
#app {
 font-family: 'Avenir', Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
 margin-top: 20px;
}

body{
 background: url('./assets/background.jpg'), no-repeat;
 font-family: Helvetica, sans-serif;
 font-size: 18px;
 color: #272727;
}
.strike{
  color: #aaa;
}
</style>

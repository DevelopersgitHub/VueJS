<template>
  <div id="app">
    <!--<ads></ads>
     <ads>
       <div>
         <p>Открыт набор на бесплатные курсы Udacity.</p>
         <p>Заявки принимаются до 16 октября</p>
       </div>
     </ads>
     <container>
       <h1 slot="header">Заголовок статьи</h1>
       <p slot="header">Дата статьи: 13/10/2017</p>
       <p>Первый абзац.</p>
       <p>Второй абзац.</p>
       <p slot="footer">Футер</p>
     </container>
     <user>
       <template slot-scope="props">
         <h3>Данные о пользователе</h3>
         <p>Имя: {{props.username}}</p>
         <p>Возраст: {{props.userage}}</p>
       </template>
     </user>
   <userlist v-bind:users="users">
     <li slot-scope="props" class="user">
       {{props.username}}
     </li>
   </userlist>
     {{message | capitalize}}
     <h2>{{message | uppercase}}</h2>
     <message></message>-->
    <!--<ul>
      <li>
        <router-link tag="div" to="/" exact active-class="active">List</router-link>
      </li>
      <li>
        <router-link to="/class" active-class="active">Class</router-link>
      </li>
      <li>
        <router-link to="/footer" active-class="active">Footer</router-link>
      </li>
    </ul>

    <ul>
      <li>
        <router-link tag="div" to="/" exact active-class="active">List</router-link>
      </li>
      <li>
        <router-link to="/products/tablets" active-class="active">Tablets</router-link>
      </li>
      <li>
        <router-link to="/products/phones" active-class="active">Phones</router-link>
      </li>
    </ul>-->

    <!-- <ul>
       <li>
         <router-link to="/" exact active-class="active">Home</router-link>
       </li>
       <li>
         <router-link to="/products" active-class="active">Products</router-link>
       </li>
     </ul>
    <router-link to="/" exact>Главная</router-link>-->
    <router-view/>
    <!--<router-view name="ads"/>
    <router-view name="content"/>-->
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        users: ['Tom', 'Bob', 'Sam'],
        message: "hello, world"
      }
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

  .user {
    font-size: 14px;
    padding: 6px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
  }

  a {
    padding: 5px;
  }

  a.router-link-active, li.router-link-active > a {
    color: red;
  }

  .active {
    color: green;
  }


</style>

<template>
  <div>
    <h2>Товар  {{$route.params.id}}</h2>
    <!-- <h2>Товары</h2>
    <ul>
      <li>
        <router-link to="/phones">Смартфоны</router-link>
      </li>
      <li>
        <router-link to="/tablets">Планшеты</router-link>
      </li>
    </ul>-->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "Products"
  }
</script>

<style scoped>

</style>

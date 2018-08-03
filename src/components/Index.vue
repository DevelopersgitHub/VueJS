<template>
  <div>
    <h3>Выберите категорию</h3>
    <div>
      <router-link to="/products/phones">Смартфоны</router-link>
    </div>
    <div>
      <router-link to="/products/tablets">Планшеты</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Index"
  }
</script>

<style scoped>

</style>

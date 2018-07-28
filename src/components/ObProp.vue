<template>
  <div>
    <p>Введите число: <input type="text" v-model="number"/></p>
    <p>{{ result }}</p>
  </div>
</template>

<script>
  export default {
    name: "ObProp",
    data() {
      return {
        number: '',
        result: ''
      }
    },
    watch: {
      number(newNumber) {
        if (newNumber > 0) {
          this.factorial(newNumber);
        } else {
          this.result = 'Факториал от: ' + newNumber + ' = ' + 1;
        }
      }
    },
    methods: {
      factorial(newNumber) {
        this.result = 'Идет вычисление факториала...';
        var vm = this;
        setTimeout(function () {
          var res = 1;
          for (var i = 1; i <= newNumber; i++) {
            res *= i;
          }
          vm.result = 'Факториал от: ' + newNumber + ' = ' + res;
        }, 2000);
      },
    }
  }
</script>

<style scoped>

</style>

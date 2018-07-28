<template>
    <div id="class">
        <div class="region" v-bind:class="something"></div>
        <div class="region" v-bind:class="{bounded : isBounded}"></div>
        <button v-on:click="enabled()"></button>
        <button v-on:click="enabledB()"></button>
    </div>
</template>

<script>
  export default {
    name: "Class",
    data() {
      return {
        isActive: false,
        isBounded: false,
        classObj: {
          active: this.isActive,
          bounded: this.isBounded
        }
      }
    },
    methods: {
      enabled() {
        this.isActive = !this.isActive;
      },
      enabledB() {
        this.isBounded = !this.isBounded;
    }
    },
    computed: {
      something(){
        return this.classObj;
      }
      /*classObj(){
        return {
          active: this.isActive,
          bounded: this.isBounded
      }
      }*/
    }
  }
</script>

<style scoped>
  .region {
    background-color: #999;
    width: 100px;
    height: 100px;
    display: inline-block;
    margin: 10px;
  }

  .active {
    background-color: red;
  }
  .bounded {
    border: 2px solid green;
  }
</style>

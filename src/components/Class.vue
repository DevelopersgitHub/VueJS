<template>
  <div id="class">
    <div class="region" v-bind:class="classObj">
      <button v-on:click="something()"></button>
    </div>
    <div class="region" v-bind:class="{ active : isActive }">
      <button v-on:click="enabled()"></button>
    </div>
    <div class="region" v-bind:class="{ bounded : isBounded }">
      <button v-on:click="enabledB()"></button>
    </div>
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
          active: false,
          bounded: false
        }
      }
    },
    computed: {
      /*classObj(){
        return {
          active: this.isActive,
          bounded: this.isBounded
      }
      }*/
    },
    methods: {
      enabled() {
        this.isActive = !this.isActive;
      },
      enabledB() {
        this.isBounded = !this.isBounded;
      },
      something() {
        if (this.classObj.active) {
          this.classObj.active = false;
          this.classObj.bounded = false;
        } else {
          this.classObj.active = true;
          this.classObj.bounded = true;
        }
      }
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

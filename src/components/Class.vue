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
    <br/>
    <div class="region" v-bind:class="[clazz, size]"></div>
    <input type="text" v-model="clazz" />
    <input type="text" v-model="size" />
    <br/>
    <div class="region" v-bind:style="[styleObjColor, styleObjAdd]"></div>
    <input type="text" v-model="color" />
    <input type="text" v-model="width" />
    <input type="text" v-model="height" />
    <br/>
    <p>{{  message }}</p>
    <input type="text" v-model="message" />
  </div>
</template>

<script>
  export default {
    name: "Class",
    data() {
      return {
        message: 'Введите сообщение',
        isActive: false,
        isBounded: false,
        clazz: 'region',
        color: 'red',
        width: 75,
        height: 75,
        size: "small",
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

      styleObjColor() {
        return {
          'background-color': this.color
        }
      },
      styleObjAdd() {
        return {
          width: this.width + 'px',
          height: this.height + 'px'
        }
      }
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
    width: 20px;
    height: 20px;
    display: inline-block;
    margin: 5px;
  }

  .active {
    background-color: red;
  }

  .bounded {
    border: 2px solid green;
  }
  .big {
    width: 100px;
    height: 100px;
  }
  .small {
    width: 50px;
    height: 50px;
  }

</style>

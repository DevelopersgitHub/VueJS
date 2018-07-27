<template>
    <div id="class">
        <div class="region" :class="{'active' : isActive}" v-on:click="enabled()">
            region

        </div>
        <div class="region"></div>
    </div>
</template>

<script>
    export default {
        name: "Class",
        data(){
            return {
                isActive: false
            }
        },
        methods: {
            enabled(){
                this.isActive = !this.isActive;
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
</style>

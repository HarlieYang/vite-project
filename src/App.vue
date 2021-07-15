<!--
 * @Author: your name
 * @Date: 2021-07-15 21:35:24
 * @LastEditTime: 2021-07-15 22:08:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/App.vue
-->
<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

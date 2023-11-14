<script >
import Navbar from './components/Navbar.vue'
import 'ant-design-vue/dist/reset.css';
export default {
  name: 'App',
  components: {
    Navbar
  }
}
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

<template>
  <Navbar/>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view/>
</template>

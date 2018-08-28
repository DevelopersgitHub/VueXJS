<template>
  <div id="app">
    <side-bar></side-bar>
    <router-view></router-view>
  </div>
</template>


<script>

  import SideBar from "./components/Main/SideBar";
  export default {
    name: 'App',
    components: {SideBar}
  }

</script>


<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../node_modules/animate.css/animate.min.css";

  html, body {
    margin: 0;
    padding: 0;
  }

  #app {
    overflow:  hidden;
    min-height: 800px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: dimgray;
    padding-top: 60px;
    max-height: 1024px;
    background-color: seashell;
    background-size: cover;
  }

  .quadra {
    display: block;
    margin: 60px auto;
    width: 300px;
    height: 100px;
  }

  .vueSlide {
    margin: 60px auto;
  }

</style>

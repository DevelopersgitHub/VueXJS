<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>

  import "../node_modules/velocity-animate/velocity.min"
  import "../node_modules/gsap/TweenMax"


  export default {
    name: 'App'
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
    min-height: 1024px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: dimgray;
    padding-top: 60px;
    max-height: 1024px;
    background: url('./assets/fon.jpeg');
    background-size: cover;
  }


</style>

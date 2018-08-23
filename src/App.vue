<template>
  <div id="app">
    <input type="number" min="0" max="255" class="text-info" v-model.number="color.red"/>
    <input type="number" min="0" max="255" class="text-info" v-model.number="color.green"/>
    <input type="number" min="0" max="255" class="text-info" v-model.number="color.blue"/>
    <vue-slider-custom :color="color"></vue-slider-custom>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {

    name: 'App',
    data() {
      return {
        color: {
          red: 0,
          green: 0,
          blue: 0
        }
      }
    }
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

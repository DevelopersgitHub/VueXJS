<template>
  <div id="app" class="app-container">
    <input type="number" min="0" max="255" class="text-info" v-model.number="color.red"/>
    <input type="number" min="0" max="255" class="text-info" v-model.number="color.green"/>
    <input type="number" min="0" max="255" class="text-info" v-model.number="color.blue"/>
    <p>{{colorHex}} parent</p>
    <VueSliderCustom :colorHex="colorHex"></VueSliderCustom>
    <router-view></router-view>
  </div>
</template>
<script>

  export default {
    name: 'App',
    components: {
      VueSliderCustom: () => import('./components/VueSliderCustom'),
    },
    data() {
      return {
        color: {
          red: 255,
          green: 255,
          blue: 255
        }
      }
    },
    computed: {
      colorHex() {
        return this.rgbToHex(this.color.red, this.color.green, this.color.blue)
      }
    },
    methods: {
      componentToHex(c) {
        let hex = Number(c).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      },
      rgbToHex(r, g, b) {
        return '#' + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
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

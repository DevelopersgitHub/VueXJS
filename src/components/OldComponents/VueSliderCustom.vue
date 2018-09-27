<template>
  <div>
    <p>{{child_color}} child</p>
    <div
      :style="{'background': colorHex}"
      class="quadra animated bounceIn">
    </div>

    <vueSlider class="vueSlide"
               ref="slider"
               v-model="child_color"
               :min="0"
               :max="255" width="400px"/>
  </div>
</template>

<script>
/*
  import vueSlider from 'vue-slider-component';*/

  export default {
    name: "VueSliderCustom",
    props: ['colorHex'],
    components: {
      vueSlider
    },
    computed: {
      child_color: {
        get() {
          return this.colorHex
        },
        set(n) {
          this.$parent.color = this.hexToRgb(n)
        }
      }
    },
    methods: {
      hexToRgb(hex) {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          red: parseInt(result[1], 16),
          green: parseInt(result[2], 16),
          blue: parseInt(result[3], 16)
        } : {
          red: 0,
          green: 0,
          blue: 0
        };
      }
    }
  }
</script>

<style>

</style>

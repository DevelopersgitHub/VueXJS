<template>
  <div class="images m-t-10">
    <div v-if="images.length">
      <div v-for="(image, index) in images" class="d-inline">
        <img :src="image.url" width="300px" class="animated bounceIn border-light">
      </div>
      <div class="form-row mx-5">
        <button class="btn btn-info" @click="addImage">Save image</button>
        <input type="text" class="form-control" style="width: 50%;" v-model="link">
      </div>
    </div>
    <div v-else class="pacman">
      <Pacman :color="'#426084'"></Pacman>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Images",
    data() {
      return {
        images: '',
        link: ''
      }
    },
    methods: {
      addImage() {
        this.$axios.post('image', {
          link: this.link,

        })
          .then(res => console.log(res))
      }
    },
    created() {
      this.$axios.get('images')
        .then((res) => {
          console.log(res)
          this.images = res.data
        })
    }
  }
</script>

<style scoped>
  .pacman {
    display: flex;
    justify-content: center;
  }
</style>

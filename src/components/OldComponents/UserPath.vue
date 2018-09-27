<template>
  <div>
    <button @click="getInfo">Go</button>
  </div>
</template>

<script>
  export default {
    methods: {
      getInfo() {
        this.$router.push('/')
        // console.log(localStorage.getItem('paths'));
      },
    }
  }
</script>

<style scoped>

</style>

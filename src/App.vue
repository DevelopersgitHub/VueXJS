<template>
  <div id="app">
   <!-- <h1>
      <a name="hello-world" href="#hello-world">
        Hello, World!
      </a>
    </h1>-->
    <anchored-heading/>
    <router-view></router-view>
  </div>
</template>


<script>


  export default {
    name: 'App',
    data() {
      return {
        blogTitle: 'Title'
      }
    },
    render(createElement) {
      return createElement('h' + this.blogTitle)
    }
  }

</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../node_modules/animate.css/animate.min.css";


</style>

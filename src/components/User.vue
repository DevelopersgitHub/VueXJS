<template>
  <div id="user" :style="{ 'background-color':  color }">
    <h2>{{ $route.params.id }} - {{ $route.params.color }}</h2>
    <button @click="bb"> >></button>
    <button @click="cc"> ome </button>
  </div>
</template>

<script>
  export default {
    name: "User",
    data() {
      return {
        color: ''
      }
    },
    methods: {
      bb() {
        console.log()
        this.$router.push('/home/user/10/color/red')
      }   ,   cc() {
        console.log()
        this.$router.push('/home')
      }
    },
    computed: {
      /*colorBack(value) {
        this.color = value;
        return this.color;
      }*/
    },
    beforeRouteEnter: (to, from, next) => {
      next(vm => {
        vm.color = to.params.color
      });
    },
    beforeRouteUpdate: (to, from, next) => {
      const answer = window.confirm("Yes/No");
      console.log('fssdfsdf')
      if (answer) {
        next();
      } else {
        next(false);
      }
    },
    beforeRouteLeave: (to, from, next) => {
      const answer = window.confirm("Yes/No");
      console.log('fssdfsdf')
      if (answer) {
        next();
      } else {
        next(false);
      }
    }
  }
</script>

<style scoped>
  #user {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
</style>

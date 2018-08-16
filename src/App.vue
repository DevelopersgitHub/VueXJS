<template>
  <div id="app">
    <button @click="getAllInfo">Get Info</button>
    {{by}}
    <router-view></router-view>
    <button @click="cur='10'">10</button>
    <button @click="cur='12'">12</button>
  </div>
</template>


<script>

  import User from './components/User';

  export default {
    name: 'App',
    components: {User},
    data() {
      return {
        get history() {
          // let h =
          return JSON.parse(localStorage.getItem('paths')).filter(e => e.id)
        },
        cur: '10'
      }
    },
    computed: {
      by() {
        return this.history.filter(e=> e.id === this.cur)
      }
    },
    /* beforeRouteLeave: (to, from, next) => {

       this.userID = to.params.userID;
       this.fullPath = to.path;
       localstorage.setItem('paths', {
         userID: to.params.userID,
         fullPath: to.path
       });
       next()
     },*/
    methods: {
      getAllInfo() {
        let userInfo = JSON.parse(localStorage.getItem('paths'));
        console.log(userInfo);
        this.userID = userInfo[1].id;
        this.fullPath = userInfo[1].path;
      }
    }
  }

</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../node_modules/animate.css/animate.min.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>

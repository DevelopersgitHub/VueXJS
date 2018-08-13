<template>
  <div id="app">
    <h1>{{count}}</h1>
    <button @click="increment"></button>
    <button @click="decrement"></button>
    <br>
    {{todos}}

    <!--<ul v-for="todo in todos">{{todo.name}}</ul>-->
    <hr>
    <!--<ul v-for="todo in bla">{{todo.name}}</ul>-->
    <button @click="showDoneTodo"></button>
    <router-view/>
  </div>
</template>

<script>

  import {mapState} from 'vuex';
  export default {
    name: 'App',
    data() {
      return {
        payload: {
          name: 'Tom',
          age: 25
        }
      }
    },
    computed:{
    ...mapState({
        count: 'count',
        todos: 'todos'
      }),
      bla(){
        return this.$store.getters.doneTodo;
      }
    }
    /*count() {
      return this.$store.state.count;
    },*/
    ,
    methods: {
      increment() {
        this.$store.commit('increment');
      },
      decrement() {
        this.$store.commit('decrement');
      },
      doneTodos() {
        return this.$store.getters.doneTodo;
      },
      showDoneTodo() {
        this.$store.commit('showDoneTodo', this.payload.age);
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

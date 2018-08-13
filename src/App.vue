<template>
  <div id="app">
    <!--<h1>{{count}}</h1>
    <button @click="increment"></button>
    <button @click="decrement"></button>
    <br>
    {{todos}}
    <button @click="showDoneTodo"></button>-->


    <hr>
    <ul>
      <li v-for="(user, index) in infoUser" :key="index">
        {{user.userId}} -  {{user.title}}
      </li>
    </ul>
    <button @click="getUser"></button>
    <hr>

    <router-view/>
  </div>
</template>

<script>

  import {mapState} from 'vuex';
  /*import $ from "jquery";*/
  import axios from 'axios';

  export default {
    name: 'App',
    data() {
      return {
        payload: {
          name: 'Tom',
          age: 25
        },
        users: [],
        infoUser: []
      }
    },
    computed: {
      ...mapState({
        count: 'count',
        todos: 'todos'
      }),
      bla() {
        return this.$store.getters.doneTodo;
      }
    },
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
      },
      getUser() {
       /* let self = this
        $.ajax({
          url: 'https://randomuser.me/api/',
          dataType: 'json',
          success(data) {
            self.infoUser = data.results;
            console.log(this.infoUser)
          }
        });

        'https://randomuser.me/api/'
        params: {
           results: 5,
           gender: 'female'
         }*/


      /* axios.get('http://jsonplaceholder.typicode.com/posts', {
        params: {
          results: 10
        }
       }).then(response => this.infoUser = response.data)*/



      

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

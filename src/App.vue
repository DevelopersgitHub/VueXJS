<template>
  <div id="app">
    <!--<h1>{{count}}</h1>
    <button @click="increment"></button>
    <button @click="decrement"></button>
    <br>
    {{todos}}
    <button @click="showDoneTodo"></button>-->


    <!--    <hr>
        <ul>
          <li v-for="(user, index) in infoUser" :key="index">
            {{user.userId}} - {{user.title}}
          </li>
        </ul>-->
    <button @click="getUser">Load data</button>
    <hr>
    <input type="text" v-model="noteList.body" placeholder="Body">
    <input type="text" v-model="noteList.title" placeholder="title">
    <input type="number" v-model="noteList.userId" placeholder="userID">
    <button @click="requestPost">Change data</button>
    <!--  <button @click="getOnceUser">Get once user</button>
    <button @click="show =! show"></button>
      <transition name="fade">
        <p v-if="show">Hello, Vue.js</p>
      </transition>
  -->


    <li v-for="(user, index) in infoUser" :key="index">
      {{index}} - {{user.userId}} - {{user.title}}
    </li>
    <hr>


    <router-view/>
  </div>
</template>

<script>

  import {mapState} from 'vuex';
  /*import $ from "jquery";*/
  import axios from 'axios';
  import {HTTP} from './util/index.js';

  export default {
    name: 'App',
    data() {
      return {
        payload: {
          name: 'Tom',
          age: 25
        },
        users: [],
        infoUser: [],
        noteList:
          {
            body: '',
            title: '',
            userId: 1,
          },
        show: true
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

        HTTP.get('posts', {}).then(response => this.infoUser = response.data)

      },
      requestPost() {
        HTTP.post('posts', this.noteList)
          .then(res => this.infoUser.push(this.noteList));
        /*getOnceUser() {
        this.infoUser.filter(user => user.userId === 101)
      }*/
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

  .fade-enter-active, .fade-leave.active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>

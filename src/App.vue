<template>
  <div id="app">
    <!--<h1>{{count}}</h1>
    <button @click="increment"></button>
    <button @click="decrement"></button>
    <br>
    {{todos}}
    <button @click="showDoneTodo"></button>
    <hr>
    <ul>
      <li v-for="(user, index) in infoUser" :key="index">
        {{user.userId}} - {{user.title}}
      </li>
    </ul>
    <button @click="getUser">Load data</button>
    <hr>
    <input type="text" v-model="noteList.body" placeholder="Body">
    <input type="text" v-model="noteList.title" placeholder="title">
    <input type="number" v-model="noteList.userId" placeholder="userID">
    <button @click="requestPost">Change data</button>
    <button @click="getOnceUser">Get once user</button>
    <button @click="show =! show"></button>
      <transition name="fade">
        <p v-if="show">Hello, Vue.js</p>
      </transition>
    <li v-for="(user, index) in infoUser" :key="index">
      {{index}} - {{user.userId}} - {{user.title}}
    </li>
    <hr>


    <div>
      <input-one/>
      <input-two/>
        <result/>
    </div>-->


    <hr>
    <input type="text" v-model="randomName" placeholder="Add data about yourself"/>
    <input type="text" v-model="randomValue" placeholder="Value"/>
    <input v-model="s_type" placeholder="Add your s_type"/>
    <button @click="OnClick(randomName, randomValue, s_type)">+</button>
    <p>{{dataUser.last_name}}</p>


    <hr>
    <!--<input v-model="s_type" placeholder="Add s_type"/>-->
    <input v-model="s_type" placeholder="Add s_type"/>
    <button type="button" @click="cc">add</button>
    <hr>

    <router-view/>
  </div>
</template>

<script>
  let f = 324234234;
  import {mapState} from 'vuex';
  /*import $ from "jquery";*/
  import axios from 'axios';
  import {HTTP} from './util/index.js';

  export default {
    name: 'App',
    data() {
      return {
        randomName: '',
        randomValue: '',
        s_type: '',
        dataUser: {
          id: 10,
          name: 'Vladimir',
          last_name: 'Borisov'
        },
        bool: false,

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
    watch: {
     /* 'dataUser.name'(n){
        console.log(n, 'name')
      },
      setTimeout(() => {
             this.bool = true;
           }, 1000);*/
    /*else {
          alert('Add correct s_type!');
        }*/
      'dataUser.sex'(value) {
        console.log(value)
        if (value.trim().toLowerCase() === 'male') {
          this.dataUser.last_name = this.dataUser.last_name.slice(1, this.dataUser.last_name.length)
        } else if (value.trim().toLowerCase() === 'female') {
          this.dataUser.last_name = this.dataUser.last_name + 'a';
        }
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
      cc(){
        this.$set(this.dataUser, 'sex', this.s_type);
        // console.log(this.dataUser)
      },
      OnClick(randomName, randomValue, s_type) {
        /*let randomField = randomName.value;
        Object.assign(this.dataUser, {randomName: 'randomValue'});*/

        this.dataUser[randomName] = randomValue;
        this.dataUser.s_type = s_type;
        console.log(this.dataUser);
      },
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
      },
      getLet() {
        let letExample = 10;
        // let h
        if (letExample > 5) {
          var h = 3
        }
        console.warn(h)
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

  /*.fade-enter-active, .fade-leave.active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }*/

  input[type = number] {
    width: 100px;
    height: 20px;
    float: left;
    padding: 5px;
    margin: 0 auto 10px 10px;
    border: 2px solid grey;
    border-radius: 10px;

  }

  .result {
    width: 100px;
    height: 20px;
    margin: 0 auto;
    padding: 0 10px;
    color: green;
    /*animation-duration: 0.3s;*/

  }

  button {
    width: 30px;
    height: 20px;
    margin-right: 20px;
  }
</style>

<template>
  <div id="app">
    <div class="animated bounceInLeft m-b-10">
      <button @click="unblock" class="btn btn-info">Unblock editing</button>
      <button @click="block" class="btn btn-danger">Block editing</button>
    </div>
    <hr/>
    <table class="table animated tada m-t-10">
      <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">First name</th>
        <th scope="col">Last name</th>
        <th scope="col">Age</th>
        <th scope="col">Login</th>
        <th scope="col">Password</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, index) in users" :key="index">
        <td v-if="!todo_editing" @dblclick="editItem(user)">{{user.id}}</td>
        <input v-else v-model="user.id" @keyup.enter="todo_editing=!todo_editing"/>
        <td v-if="!todo_editing" @dblclick="editItem(user)">{{user.first_name}}</td>
        <input v-else v-model="user.first_name" @keyup.enter="todo_editing=!todo_editing"/>
        <td v-if="!todo_editing" @dblclick="editItem(user)">{{user.last_name}}</td>
        <input v-else v-model="user.last_name" @keyup.enter="todo_editing=!todo_editing"/>
        <td v-if="!todo_editing" @dblclick="editItem(user.id, index)">{{user.age}}</td>
        <input v-else v-model="user.age" @keyup.enter="todo_editing=!todo_editing"/>
        <td v-if="!todo_editing" @dblclick="editItem(user)">{{user.login}}</td>
        <input v-else v-model="user.login" @keyup.enter="todo_editing=!todo_editing"/>
        <td v-if="!todo_editing" @dblclick="editItem(user)">{{user.password}}</td>
        <input v-else v-model="user.password" @keyup.enter="todo_editing=!todo_editing"/>
      </tr>
      </tbody>
    </table>
    <div class="footer"></div>
    <router-view></router-view>
  </div>
</template>

<script>
  let ids = [101, 102, 430, 222, 332, 123, 211];
  let first_names = ['Vlad', 'Mikhail', 'Ruslan', 'Vitaliy', 'Oleg', 'Aleksander', 'Dmitriy'];
  let last_names = ['Borisov', 'Bond', 'Nikolaev', 'Smit', 'Robson', 'Anri', 'Statham'];
  let ages = [45, 32, 76, 54, 23, 43, 32];
  let logins = ['bond@mail.ru', 'v@cronix.ms', 'bondaroll@yandex.ru', 'familly@gmail.com', 'g@mail.com', 'f@yandex.ru', 'k@cronix.ms'];
  let passwords = ['1111112', 'admin', '222123', 'bond', '12321', '312321m', '3434d'];
  let usersRandom = [];
  for (let i = 0; i < 7; i++) {
    usersRandom[i] = {
      id: ids[Math.floor(Math.random() * 6 + 1)],
      first_name: first_names[Math.floor(Math.random() * 6 + 1)],
      last_name: last_names[Math.floor(Math.random() * 6 + 1)],
      age: ages[Math.floor(Math.random() * 6 + 1)],
      login: logins[Math.floor(Math.random() * 6 + 1)],
      password: passwords[Math.floor(Math.random() * 6 + 1)]
    }
  }
  export default {
    name: 'App',
    data() {
      return {
        users: usersRandom,
        todo_editing: false,
        newUsers: []
      }
    },
    methods: {
      editItem(id, index) {
        this.todo_editing = true;
      },
      block() {
        this.users = Object.freeze(this.users);
      },
      unblock() {
        this.newUsers = Object.assign([], this.users)
      }
    }
  }
</script>


<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../node_modules/animate.css/animate.min.css";

  html, body {
    margin: 0;
    padding: 0;
  }

  #app {
    min-height: 890px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: dimgray;
    padding-top: 60px;
    background-color: seashell;
    background-size: cover;
  }

  .quadra {
    display: block;
    margin: 60px auto;
    width: 300px;
    height: 100px;
  }

  .vueSlide {
    margin: 60px auto;
  }

</style>

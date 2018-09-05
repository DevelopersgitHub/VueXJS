<template>
  <div id="app">
    <hr/>
    <p style="color: white">{{info}}</p>
    <hr/>
    <!-- <table class="table table-dark m-t-10">
       <thead>
       <tr>
         <th scope="col">ID</th>
         <th scope="col">First name</th>
         <th scope="col">Last name</th>
         <th scope="col">Age</th>
         <th scope="col">Login</th>
         <th scope="col">Password</th>
         <th scope="col">Block/Unblock</th>
       </tr>
       </thead>
       <tbody>
       <tr v-for="(user, index) in users" :key="index">
         <td class="m-t-10" v-if="!user.editing" @dblclick="user.editing = !user.editing">{{user.id}}</td>
         <input class="form-control" v-else v-model="user.id" @keyup.enter="editItem(user, index)"/>

         <td class="m-t-10" v-if="!user.editing" @dblclick="user.editing = !user.editing">{{user.first_name}}</td>
         <input class="form-control" v-else v-model="user.first_name" @keyup.enter="editItem(user, index)"/>

         <td class="m-t-10" v-if="!user.editing" @dblclick="user.editing = !user.editing">{{user.last_name}}</td>
         <input class="form-control" v-else v-model="user.last_name" @keyup.enter="editItem(user, index)"/>

         <td class="m-t-10" v-if="!user.editing" @dblclick="user.editing = !user.editing">{{user.age}}</td>
         <input class="form-control" v-else v-model="user.age" @keyup.enter="editItem(user, index)"/>

         <td class="m-t-10" v-if="!user.editing" @dblclick="user.editing = !user.editing">{{user.login}}</td>
         <input class="form-control" v-else v-model="user.login" @keyup.enter="editItem(user, index)"/>

         <td class="m-t-10" v-if="!user.editing" @dblclick="user.editing = !user.editing">{{user.password}}</td>
         <input class="form-control" v-else v-model="user.password" @keyup.enter="editItem(user, index)"/>

         <td class="m-t-10">
           <button @click="unblock" class="btn btn-info">Unblock editing</button>
           <button @click="block(users)" class="btn btn-danger">Block editing</button>
         </td>
       </tr>
       </tbody>
     </table>

     <p>{{newUsers.age}}</p>-->

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
      password: passwords[Math.floor(Math.random() * 6 + 1)],
      editing: false
    }
  }

  import {wss} from './assets/Socket/websocket';

  export default {
    name: 'App',
    data() {
      return {
        users: usersRandom,
        todo_editing: false,
        newUsers: {},
        info: []
      }
    },
    watch: {
      users(value) {
        value = this.newUsers;
      }
    },
    methods: {
      block(obj) {
        /*  let propNames = Object.getOwnPropertyNames(obj);
          propNames.forEach((name) => {
            let prop = obj[name];
            if (typeof prop === 'object' && prop !== null) {
  */
        this.users = Object.freeze(obj);
        console.log(this.newUsers);

        /*
                  }
                });*/
        return Object.freeze(obj);
      },
      editItem(user, idx) {
        user.editing = !user.editing;
        this.users[idx] = user
      },
      unblock() {
        console.log(this.users)
      }
    },
    created() {
      wss.onmessage = (msg) => {
        this.info = JSON.parse(event.data);
        for (let key of  this.info) {
          if (key !== null && typeof(key) === 'object' && key !== 'hb') {
            this.info = key[0];
          }
        }
      };
      let msg = JSON.stringify({
        event: 'subscribe',
        channel: 'ticker',
        symbol: 'tBTCUSD'
      })
      wss.onopen = () => {
        console.log('WebSocket is connected.');
        wss.send(msg);
      };
    }
  }
</script>

<style>
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
    background: url('https://cdn.magdeleine.co/wp-content/uploads/2015/02/YS4_5968_69_70-2-3-1400x933.jpg');
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

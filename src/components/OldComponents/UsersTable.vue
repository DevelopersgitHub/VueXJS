<template>
  <div class="users_table">
    <table class="table table-dark animated bounceInLeft" v-if="users.length">
      <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Time limits</th>
        <th scope="col">Edit & Remove</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, index) in users" @click="$router.push(`${user.id}`)">
        <th scope="row">{{user.id}}</th>
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
        <td>
          <button class="btn btn-dark" @click="onClick">Edit</button>
          <button class="btn btn-primary" type="submit" @click="removeItem">Remove</button>
        </td>
      </tr>
      </tbody>
    </table>

    <!--<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"-->
    <!--placeholder="Enter color" v-model="color">-->

    <!--<div>-->
    <!--<div class="mt-3 mb-3">-->
    <!--<b-modal id="modalPrevent"-->
    <!--ref="modal"-->
    <!--title="Edit of data"-->
    <!--v-model="modalShow"-->
    <!--@ok="handleOk"-->
    <!--@shown="clearName">-->
    <!--<form @submit.stop.prevent="handleSubmit">-->
    <!--<b-form-input type="text"-->
    <!--placeholder="Enter your name"-->
    <!--v-model="name">-->
    <!--</b-form-input>-->
    <!--<br/>-->
    <!--<b-form-input type="text"-->
    <!--placeholder="Enter your time of limits"-->
    <!--v-model="time_limits">-->
    <!--</b-form-input>-->
    <!--</form>-->
    <!--</b-modal>-->
    <!--</div>-->
    <!--</div>-->
    <div v-else class="pacman mx-auto">
      <Pacman :color="'#426084'"></Pacman>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>

  export default {
    data() {
      return {
        users: [
          // {
          //   id: 1,
          //   name: 'Vlad',
          //   time_limits: 120
          // },
          // {
          //   id: 2,
          //   name: 'Mikhail',
          //   time_limits: 60
          // }
        ],
        name: '',
        time_limits: '',
        color: ''
      }
    },
    methods: {
      removeItem(event) {
        console.log('fsdsdfsdfsdf')
        this.users.splice(Number(this.$route.params.id) - 1, 1);
        event.stopImmediatePropagation()
      },
      onClick(event) {
        console.log(event)
        this.modalShow = !this.modalShow;
        event.stopPropagation();
      },
      clearName() {
        this.name = '';
        this.time_limits = '';
      },
      handleOk(evt) {
        this.modalShow = !this.modalShow;
        evt.preventDefault();
        if (!this.name && !this.time_limits) {
          alert('Please enter value')
        } else {
          this.handleSubmit()
        }
      },
      handleSubmit() {
        let objIndex = this.users.findIndex((user => user.id === Number(this.$route.params.id)));
        this.users[objIndex].name = this.name;
        this.users[objIndex].time_limits = this.time_limits;
        this.clearName();
        this.$refs.modal.hide();
      }
    },
    created() {
      this.$axios.get('users')
        .then(res => {
          console.log(res)
          this.users = res.data
        })
        .catch(err => console.log(err))
    }
  }
</script>

<style>
  .users_table {
    max-width: 800px;
    margin: 200px auto;
  }
</style>

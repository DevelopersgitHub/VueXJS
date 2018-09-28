<template>
  <div id="login">
    <div class="container align-content-center" style="height: 50%">
      <div class="card border border-light w-50 h-50 m-auto"
           :class="{'animated bounceInLeft': !card, 'animated bounceOutRight': card}">
        <div class="form-row">
          <div class="form-group m-auto">
            <label for="log_in" style="color: cornflowerblue; padding-top: 40px">Enter email</label>
            <input id="log_in" type="text" class="form-control" style="width: 300px" v-model="user.email">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group m-auto">
            <label for="password" style="color: cornflowerblue; padding-top: 20px">Enter
              password</label>
            <input id="password" type="password" class="form-control" style="margin-bottom: 50px; width: 300px"
                   v-model="user.password" @keyup.enter="cardInTrue">
          </div>
        </div>
        <!--<div class="custom-radio">-->
        <!--<label for="check" class="custom-control-label" style="color: cornflowerblue; padding-top: 5px">Remember-->
        <!--me</label>-->
        <!--<input id="check" type="checkbox" class="custom-control-input" style="padding-top: 30px">-->
        <!--</div>-->
        <b-btn class="btn btn-info" style="margin-bottom: 10px" @click="cardInTrue">Log In</b-btn>
        <!--<button class="btn btn-success d-inline w-20 m-b-10" style="margin-top: 20px" @click="cardInTrue">Log In</button>-->
        <b-btn class="btn btn-info" v-b-modal="'modal'">Sign Up</b-btn>
      </div>
    </div>
    <div>
      <b-modal id="modal" @ok="addUser">
        <!--<div class="card border border-light w-50 h-50 m-auto"-->
        <!--:class="{'animated bounceInLeft': !card, 'animated bounceOutRight': card}">-->
        <!--<div class="form-row">-->
        <div class="form-group w-30">
          <label for="name" style="color: cornflowerblue; padding-top: 20px">Enter first name</label>
          <input id="name" type="text" class="form-control" style="margin-bottom: 10px"
                 v-model="newUser.name">
          <label for="log_in1" style="color: cornflowerblue">Enter email</label>
          <input id="log_in1" type="text" class="form-control" v-model="newUser.email">
          <div class="form-group m-auto w-30">
            <label for="password1" style="color: cornflowerblue; padding-top: 20px">Enter
              password</label>
            <input id="password1" type="password" class="form-control" style="margin-bottom: 10px"
                   v-model="newUser.password">
          </div>
        </div>
        <!--</div>-->
      </b-modal>
    </div>
  </div>
</template>

<script>
  import Cookies from 'js.cookie'

  export default {
    name: "Login",
    data() {
      return {
        user: {
          email: 'vlad@vlad.ru',
          password: '123456'
        },
        newUser: {
          name: 'Bob',
          email: 'bob@bob.ru',
          password: '12345'
        },
        card: false,
        modal: false
      }
    },
    methods: {
      addUser() {
        this.$axios.post('client', this.newUser)
          .then(res => console.log(res))
      },
      cardInTrue() {
        this.card = true;
        this.$axios.post('login', {
          email: this.user.email,
          password: this.user.password
        })
          .then((res) => {
            Cookies.set('token', res.data.user.api_token)
            this.card = false;
            this.$router.push('/images')
          })
          .catch(err => console.log(err))
      }
    },
    // created() {
    //   this.$axios.get('users')
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    // }
  }
</script>

<style scoped>

</style>

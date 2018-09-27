<template>
  <div id="login">
    <div class="container align-content-center" style="height: 50%">
      <div class="card border border-light w-50 h-50 m-auto" :class="{'animated bounceOutRight': card}">
        <div class="form-row">
          <div class="form-group m-auto w-30">
            <label for="log_in" style="color: cornflowerblue; padding-top: 40px">Enter email</label>
            <input id="log_in" type="text" class="form-control" v-model="user.email">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group m-auto w-30">
            <label for="password" style="color: cornflowerblue; padding-top: 20px">Enter
              password</label>
            <input id="password" type="password" class="form-control" style="margin-bottom: 10px"
                   v-model="user.password" @keyup.enter="cardInTrue">
          </div>
        </div>
        <!--<div class="custom-radio">-->
        <!--<label for="check" class="custom-control-label" style="color: cornflowerblue; padding-top: 5px">Remember-->
        <!--me</label>-->
        <!--<input id="check" type="checkbox" class="custom-control-input" style="padding-top: 30px">-->
        <!--</div>-->
        <button class="btn btn-success w-30" style="margin-top: 20px" @click="cardInTrue">Log In</button>
      </div>
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
          email: '',
          password: ''
        },
        card: false
      }
    },
    methods: {
      cardInTrue() {
        this.card = true;
        this.$axios.post('login', {
          email: this.user.email,
          password: this.user.password
        })
          .then((res) => {
            if (Cookies.get('token') !== res.data.user.api_token) {
              Cookies.set('token', res.data.user.api_token)
            }
            this.$router.push('/users_table')
          })
          .catch(err => console.log(err))

      }
    }
  }
</script>

<style scoped>

</style>

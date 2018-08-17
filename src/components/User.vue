<template>
  <div id="user">

    <h2 class="m-l-200"></h2>
    <div class="container_iframe animated slideInLeft">
      <iframe width="560" height="315"
              src="https://www.youtube.com/embed/VBOSOREJE68"
              frameborder="0"
              allowfullscreen>
      </iframe>
    </div>
    <div class="animated bounceIn" style="margin-right: 400px">
      <ul class="p-r-200" v-for="user in users">
        <li style="list-style: none">
          Count of sec watch for {{user.name}} : {{user.time_limits}}
          <button @click="count(user)">{{ user.time_limits }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        locale: '',
        users: [
          {
            id: 1,
            name: 'Vlad',
            time_limits: 120
          },
          {
            id: 2,
            name: 'Mikhail',
            time_limits: 60
          }
        ],
        valueTime: 0
      }
    },
    /*  watch: {
        valueTime() {
          if (this.valueTime === 0) {
            if (this.$route.params === 1) {
              this.valueTime = this.users[0].time_limits
            } else {
              this.valueTime = this.users[1].time_limits
            }
          }
        }
      },*/
    methods: {
      count(value) {
        if (Number(this.$route.params.id) === value.id) {
          this.timer(value.time_limits)
        }
      },
      timer(value) {
        value--;
        console.log(value)
        if (value > 0) {
          setTimeout(() => {
            this.timer()
          }, 1000)
        }

        //this.$router.push('/');


      }
    }
  }


</script>

<style>

  #user {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .container_iframe {
    border-bottom: 5px solid black;
    border-radius: 2px;
  }

</style>

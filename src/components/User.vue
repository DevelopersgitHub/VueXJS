<template>
  <div id="user">
    <h2 class="m-l-200"></h2>
    <div class="container_iframe animated slideInLeft">
      <iframe v-if="link.length" width="300" height="200" :src="link" allow="autoplay"
              frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="animated bounceIn" style="margin-right: 400px">
      <ul class="p-r-200" v-for="user in users">
        <li v-if="Number($route.params.id) === user.id" style="list-style: none">
          <p> Count of sec watch for {{user.name}} : {{user.time_limits}}</p>
          <button @click="playVid(user)">Play/Pause</button>
          <br>
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
        link: 'https://www.youtube.com/embed/VBOSOREJE68?&autoplay=1',
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
        ]
      }
    },
    created() {
      this.setData()
    },
    methods: {
      setData() {
        console.log(JSON.parse(localStorage.getItem('users')))
        if (!JSON.parse(localStorage.getItem('users'))) {
          localStorage.setItem("users", JSON.stringify(this.users));
        } else{
          this.users = JSON.parse(localStorage.getItem('users'))
        }
      },
      timer(value) {
        value--;
        let idx = this.users.findIndex(e => e.id === Number(this.$route.params.id))
        this.users[idx].time_limits = value
        console.log(this.users[idx].time_limits)
        localStorage.setItem("users", JSON.stringify(this.users));
        if (value > 0) {
          setTimeout(() => {
            this.timer(value);
          }, 1000)
        } else {
          this.link = ''
          this.$router.push('/');
        }
      },
      playVid(value) {
        if (Number(this.$route.params.id) === value.id) {
          this.timer(value.time_limits)
        } else {
          this.$router.push(`${value.id}`)
        }
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

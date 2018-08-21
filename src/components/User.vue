<template>
  <div id="user">
    <h2 class="m-l-200"></h2>
    <div class="container_iframe animated slideInLeft">
      <!--      allow="autoplay"-->
      <iframe type="text/html" width="300" height="200"
              v-if="link.length" :src="link"
              frameborder="0" allowfullscreen allow="autoplay">
      </iframe>
      <br/>
    </div>
    <div class="animated bounceIn" style="margin-right: 400px">
      <ul class="p-r-200" v-for="user in users">
        <li v-if="Number($route.params.id) === user.id" style="list-style: none">
          <p> Count of sec watch for {{user.name}} : {{user.time_limits}}</p>
          <button @click="valueS(user)">Play/Pause</button>
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
        link: 'https://www.youtube.com/embed/VBOSOREJE68?autoplay=0',
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
        global_time: 0,
        init: false
      }
    },
    // watch: {
    //   link() {
    //     if (this.init) {
    //       localStorage.setItem("users", JSON.stringify(this.users));
    //     } else {
    //       this.init = true;
    //     }
    //   }
    // },
    created() {
      this.setData();
    },
    methods: {
      setData() {
        console.log(JSON.parse(localStorage.getItem('users')))
        if (!JSON.parse(localStorage.getItem('users'))) {
          localStorage.setItem("users", JSON.stringify(this.users));
        } else {
          this.users = JSON.parse(localStorage.getItem('users'))
        }
      },
      timer(value) {
        value--;
        this.global_time = value
        let idx = this.users.findIndex(e => e.id === Number(this.$route.params.id))
        this.users[idx].time_limits = value
        if (value > 0 || this.link.includes('autoplay=1')) {
          setTimeout(() => {
            this.timer(value);
          }, 1000)
        } else {
          localStorage.setItem("users", JSON.stringify(this.users));
        }
      },
      valueS(value) {
        this.link = this.link.includes('autoplay=1') ? this.link.replace(/autoplay=1/, 'autoplay=0') : this.link.replace(/autoplay=0/, 'autoplay=1')
        if (this.link.includes('autoplay=1')) {
          this.count(value);
          localStorage.setItem("users", JSON.stringify(this.users));
        }
      },
      count(value) {
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

  .video-control {
    text-decoration: underline;
    cursor: pointer;
    color: #00f;
  }

  iframe {
    width: 100%;
    border: none;
  }

</style>

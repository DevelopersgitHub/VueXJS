<template>
  <div>
    <p>Info for user: {{$route.params.userID}}</p>
    <button type="button"></button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        color: '',
        users: [
          {
            userID: 1,
            fullName: 'Mihail Mikhailov',
            status: 'junior'
          },
          {
            userID: 2,
            fullName: 'Vladislav Guschin',
            status: 'middle'
          }
        ]
      }
    },
    methods: {
      bb() {
        console.log()
        this.$router.push('/user/10')
      }   ,   cc() {
        console.log()
        this.$router.push('/home')
      }
    },
    computed: {
      /*colorBack(value) {
        this.color = value;
        return this.color;
      }*/
    },
  //   beforeRouteEnter: (to, from, next) => {
  //     next(vm => {
  //       // console.warn(vm.$route.params)
  //       // vm.color = to.params.color
  //     });
  //   },
  //   beforeRouteUpdate: (to, from, next) => {
  //     const answer = window.confirm("Yes/No");
  //     console.log('fssdfsdf')
  //     if (answer) {
  //       next();
  //     } else {
  //       next(false);
  //     }
  //   },
  //   beforeRouteLeave: (to, from, next) => {
  //     const answer = window.confirm("Yes/No");
  //     console.log('fssdfsdf')
  //     if (answer) {
  //       next();
  //     } else {
  //       next(false);
  //     }
  //   }
  }
</script>

<style scoped>
  #user {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
</style>

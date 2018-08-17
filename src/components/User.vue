<template>
  <div id="user">
    <p v-model="locale">{{ $t("message.hello") }}</p>
    <button @click="onClick"></button>
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
            locale: 'ja'
          },
          {
            id: 2,
            name: 'Mikhail',
            locale: 'en'
          }
        ]
      }
    },
    watch: {
      '$route'(to, from) {
        this.locale = to.params;
        if (this.locale === 'vlad') {
          this.$i18n.locale = this.users.filter(el => el.id === 1).locale;
        } else {
          this.$i18n.locale = this.users[1].locale;
        }
      }
    },
   /* beforeRouteUpdate (to, from, next) {
      this.locale = to.params;
      if (this.locale === 'vlad') {
        this.$i18n.locale = 'ja';
      } else {
        this.$i18n.locale = 'en';
      }
      next()
    },*/
    methods: {
      onClick() {
        this.$router.push('/user/mihail');
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


</style>

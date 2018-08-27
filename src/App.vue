<template>
  <div id="app" class="app-container">
    <p>
      Задайте вопрос, на который можно ответить "да" или "нет":
      <input v-model="question">
    </p>
    <p>{{ answer }}</p>
    <router-view></router-view>
  </div>
</template>
<script>
  import _ from 'lodash';
  import {HTTP} from './util';
  export default {
    name: 'App',
    components: {
      VueSliderCustom: () => import('./components/VueSliderCustom'),
    },
    data() {
      return {
        question: '',
        answer: 'Пока вы не зададите вопрос, я не могу ответить!',
        color: {
          red: 255,
          green: 255,
          blue: 255
        }
      }
    },
    created() {
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    watch: {
      question(newQuestion, oldQuestion) {
        this.answer = 'Ожидаю, когда вы закончите печатать...'
        this.debouncedGetAnswer()
      }
    },
    methods: {
      getAnswer() {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Вопросы обычно заканчиваются вопросительным знаком. ;-)'
          return
        }
        this.answer = 'Думаю...'
        var vm = this;
        HTTP.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Ошибка! Не могу связаться с API. ' + error
          })
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
    min-height: 1024px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: dimgray;
    padding-top: 60px;
    max-height: 1024px;
    background: url('./assets/fon.jpeg');
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

<template>
  <div id="app">
    <button @click="show = !show">
      Переключить
    </button>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    >
      <p v-if="show">
        Демо
      </p>
    </transition>

    <!--<transition name="slide-fade">
      <p v-if="show">Name</p>
    </transition>

    <transition name="bounce">
      <p v-if="show">Name</p>
    </transition>


    <button @click="show = !show">
      Переключить рендеринг
    </button>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <p v-if="show">привет</p>
    </transition>-->


    <button @click="show = !show">Go</button>
    <div class="animated zoomInDown">
      <button
        class="animated"
        v-for="tab in tabs"
        :key=tab.name
        :class="{ 'tab-button' : currentTab.name === tab.name, rotateIn: currentTab.name === tab.name }"
        @click="currentTab = tab"
      >{{tab.name}}
      </button>
      <component :is="currentTab.component"
                 class="tab"></component>
    </div>
    <router-view></router-view>
  </div>
</template>


<script>

  import "../node_modules/velocity-animate/velocity.min"

  let tabs = [
    {
      name: 'Home',
      component: {
        template: '<div class="animated zoomIn"><h1>Home</h1></div>'
      }
    },
    {
      name: 'User',
      component: {
        template: '<div class="animated zoomIn"><iframe src="./components/UserPath.vue"></iframe><h1>User</h1></div>'
      }
    },
    {
      name: 'UserPath',
      component: {
        template: '<div class="animated zoomIn"><h1>UserPath</h1></div>'
      }
    }
  ]

  export default {
    name: 'App',
    data() {
      return {
        tabs: tabs,
        currentTab: tabs[0],
        show: false
      }
    },
    methods: {
      beforeEnter: function (el) {
        el.style.opacity = 0
      },
      enter: function (el, done) {
        Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
        Velocity(el, { fontSize: '1em' }, { complete: done })
      },
      leave: function (el, done) {
        Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
        Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
        Velocity(el, {
          rotateZ: '45deg',
          translateY: '30px',
          translateX: '30px',
          opacity: 0
        }, { complete: done })
      }
    }

    /*watch: {
      currentTab(value) {
        if(value.name !== this.currentTab.name) {

        }
      }
    }*/
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
    margin: 0 auto;
    max-height: 1024px;
    background: url('./assets/fon.jpeg');
    background-size: cover;
  }

  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #e0e0e0;
    margin-bottom: -1px;
    margin-right: -1px;
  }

  .tab-button:hover {
    background: #e0e0e0;
  }

  .tab-button.active {
    background: azure;
  }

  .tab {
    border: 1px solid #ccc;
    padding: 10px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
  {
    opacity: 0;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }


  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

</style>

<template>
  <div id="app">
    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <img src="./assets/fone.jpg"/>
        </div>
        <div class="back">
          <img src="./assets/logo.png"/>
        </div>
      </div>
    </div>
    <!-- <input v-model="docState"/>
     <p>{{docState}}</p>
   <transition name="fade" mode="out-in">
     <button class="animated slide-down":key="docState">{{buttonMessage}}</button>
   </transition>-->
    <button @click="add">Add</button>
    <button @click="remove">Remove</button>
    <button @click="shuffle">Перемешать</button>
    <transition-group name="list-complete" tag="p">
      <span
        v-for="(item, index) in items"
        :key="item"
        class="list-complete-item">
         {{item}}
      </span>
    </transition-group>
    <hr>

    <!--<button @click="show = !show">
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
-->
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

    <!--
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
        </div>-->
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
        show: false,
        docState: '',
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextItem: 10
      }
    },
    computed: {
      buttonMessage() {
        switch (this.docState) {
          case 'edit' :
            return 'Edit';
          case 'save' :
            return 'save';
          case 'cancel' :
            return 'cancel'
        }
      }
    },
    methods: {
      beforeEnter: function (el) {
        el.style.opacity = 0
      },
      enter: function (el, done) {
        Velocity(el, {opacity: 1, fontSize: '1.4em'}, {duration: 300})
        Velocity(el, {fontSize: '1em'}, {complete: done})
      },
      leave: function (el, done) {
        Velocity(el, {translateX: '15px', rotateZ: '50deg'}, {duration: 600})
        Velocity(el, {rotateZ: '100deg'}, {loop: 2})
        Velocity(el, {
          rotateZ: '45deg',
          translateY: '30px',
          translateX: '30px',
          opacity: 0
        }, {complete: done})
      },
      randomIndex() {
        return Math.floor(Math.random() * this.items.length)
      },
      add() {
        this.items.splice(this.randomIndex(), 0, this.nextItem++)
      },
      remove() {
        this.items.splice(this.randomIndex(), 1)
      },
      shuffle() {
        this.items = _.shuffle(this.items)
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

  /*
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
    .flip-list-move {
      transition: transform 1s;
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

    .list-item {
      display: inline-block;
      margin-right: 10px;
    }

    .list-enter-active, .list-leave-active {
      transition: all 1s;
    }

    .list-enter, .list-leave-to !* .list-leave-active до версии 2.1.8 *!
    {
      opacity: 0;
      transform: translateY(30px);
    }*/

  .list-complete-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
  }

  .list-complete-enter, .list-complete-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .list-complete-leave-active {
    position: absolute;
  }


  .flip-container {
    perspective: 1000px;
  }

  .flip-container:hover .flipper, .flip-container.hover .flipper {
    transform: rotateY(180deg);
  }

  .flip-container, .front, .back {
    width: 320px;
    height: 480px;
  }
  .flipper {
    transition: 0.6s;
    transform-style: preserve-3d;

    position: relative;
  }
  .front, .back {
    backface-visibility: hidden;

    position: absolute;
    top: 0;
    left: 0;
  }
  .front {
    z-index: 2;
  }
  .back {
    transform: rotateY(180deg);
  }


/*
  .vertical.flip-container {
    position: relative;
  }

  .vertical .back {
    transform: rotateX(180deg);
  }

  .vertical.flip-container .flipper {
    transform-origin: 100% 213.5px; !* half of height *!
  }

  .vertical.flip-container:hover .flipper {
    transform: rotateX(-180deg);
  }*/

</style>

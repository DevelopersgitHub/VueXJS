<template>
  <div>
    <div class="sun"
         :class="{'up': sunUp,
         'down': sunDown}"
         :style="{'margin-top': value + 'px'}">
    </div>
    <!--<input type="text" v-model="test" @keyup.enter="add(test)"/>
    <ul>
      <li v-for="item in items">{{item}}</li>
    </ul>-->
  </div>
</template>

<script>

  export default {
    name: "SideBar",
    data() {
      return {
        sunUp: false,
        sunDown: false,
        items: [],
        test: '',
        value: 50
      }
    },
    methods: {
      add(item) {
        this.items.push(item);
        this.test = '';
      },
      moveUp() {
        this.value -= 5;
      },
      moveDown() {
        this.value += 5;
      }
    },
    created: function () {
      window.addEventListener('keydown', (event) => {
          if (event.keyCode === 38) {
            this.sunUp = true;
            this.sunDown = false;
            this.moveUp()
          } else if (event.keyCode === 40) {
            this.sunDown = true;
            this.sunUp = false;
            this.moveDown()
          }
        }
      )
    }
  }
</script>

<style>
  .sun {
    display: block;
    width: 200px;
    height: 200px;
    margin: 200px auto;
    background-color: burlywood;
    border: 1px solid sandybrown;
    border-radius: 50%;
  }

  .up {
    display: block;
    width: 200px;
    height: 200px;
    margin: 500px auto;
    background-color: yellow;
    border: 1px solid sandybrown;
    border-radius: 50%;
  }

  .down {
    display: block;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    background-color: crimson;
    border: 1px solid sandybrown;
    border-radius: 50%;
  }
</style>

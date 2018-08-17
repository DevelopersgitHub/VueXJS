<template>
  <div id="app">
    <button
      v-for="tab in tabs"
      :key=tab.name
      :class="{'tab-button' : currentTab.name === tab.name}"
      @click="currentTab = tab"
    >{{tab.name}}
    </button>
    <component :is="currentTab"
               class="tab"></component>
    <router-view></router-view>
  </div>
</template>


<script>

  var tabs = [
    {
      name: 'Home',
      template: '<div><h1>Home</h1></div>'
    },
    {
      name: 'User',
      template: '<div><h1>User</h1></div>'
    },
    {
      name: 'UserPath',
      template: '<div><h1>UserPath</h1></div>'
    }
  ]

  export default {
    name: 'App',
    data() {
      return {
        tabs: tabs,
        currentTab: tabs[0],
      }
    }
  }

</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../node_modules/animate.css/animate.min.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
  }

  .tab-button:hover {
    background: #e0e0e0;
  }

  .tab-button.active {
    background: #e0e0e0;
  }

  .tab {
    border: 1px solid #ccc;
    padding: 10px;
  }

</style>

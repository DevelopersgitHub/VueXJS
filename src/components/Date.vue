<template>
  <div id="date">
    <div class="animated bounceIn span-group">
      <p>{{txt | filterDate}}</p>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash';

  let moment = require('moment');
  let tz = require('moment-timezone');
  let format = require('vue-moment')

  export default {
    name: "Date",
    data() {
      return {
        someDate: 0
      }
    },
    created() {
      this.someDate = Date.now();
      this.bounceMethods = _.debounce(this.startTime, 1000);
    },
    methods: {
      startTime() {
        this.someDate++;
      }
    },
    watch: {
      someDate() {
        this.bounceMethods();
      }
    },
    computed: {
      txt: {
        get(){
          return this.someDate;
        },
        set(value) {
          this.txt = value;
        }
      }
    },
    filters: {
      filterDate() {
        return moment().format('h:mm:ss');
      }
    }
  }

</script>

<style>
  .span-group {
    display: block;
    width: 500px;
    height: 100px;
    margin: 60px auto;
    padding: 10px;
  }

  .span-element {
    width: 100px;
    height: 50px;
    color: white;
    background-color: darkred;
    padding: 20px;
    margin: 5% 10px;
    border: 2px solid whitesmoke;
    border-radius: 3px;
  }

  #txt {
    width: 100px;
    background-color: whitesmoke;
    color: black;
  }
</style>

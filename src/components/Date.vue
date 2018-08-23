<template>
  <div id="date">
    <div class="animated bounceIn span-group">
      <p>{{txt}}</p>
      <p>{{someDate}}</p>
      <!--<span class="span-element">{{ someDate | moment("hh") }}</span>
      <p class="d-inline">:</p>
      <span class="span-element">{{ someDate | moment("mm")}}</span>
      <p class="d-inline">:</p>
      <span class="span-element">{{ someDate | moment("ss")}}</span>-->
    </div>
  </div>
</template>

<script>
  let moment = require('moment');
  export default {
    name: "Date",
    data() {
      return {
        someDate: 0,
        txt: ''
      }
    },
    created() {
      this.someDate = Date.now();
      // console.log(_.last([1,2,3]), 'fdsf')
    },
    methods: {
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

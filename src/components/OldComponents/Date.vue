<template>
  <div id="date">
    <input type="text" style="border-color: darkcyan;" id="gg" v-model="someText">
    <div style="width: 50%;color: cadetblue;overflow:hidden;padding: 10px">{{secProperty}}</div>

    <!--<br/>-->
    <!--<p class="w-50" style="border-color: darkcyan;">{{someText}}</p>-->
    <!--<br/>-->
    <!--<p v-if="someText.length" style="width:50%;color:darkcyan;">{{someText | myFilter}}</p>-->
    <!--<div class="animated bounceIn span-group">-->
    <!--<p>{{txt | filterHour}}</p>-->
    <!--<span class="points">:</span>-->
    <!--<p>{{txt | filterMinutes}}</p>-->
    <!--<span class="points">:</span>-->
    <!--<p>{{txt | filterSeconds}}</p>-->
    <!--</div>-->
  </div>
</template>

<script>
  import _ from 'lodash';

  let moment = require('moment'),
    tz = require('moment-timezone'),
    format = require('vue-moment')

  export default {
    name: "Date",
    data() {
      return {
        someDate: 0,
        secProperty: ''
      }
    },
    // created() {
    //   this.someDate = Date.now();
    //   this.bounceMethods = _.debounce(this.startTime, 1000);
    // },
    methods: {
      // randomText() {
      //   let size = 120,
      //     newsContent = el,
      //     newsText = newsContent.text();
      //   if (newsText.length > size) {
      //     newsContent.text(newsText.slice(0, size) + ' ...');
      //   }
      // },


      startTime() {
        this.someDate++;
      },
      // revText(){
      //   this.someText = this.someText + ' ...'
      // }
    },
    watch: {

      // value = value.length > 0 ? (value.length > 50 ? value.slice(0, -3) + '...' : '') : ''
    },
    // someDate() {
    //   this.bounceMethods();
    // },

    computed: {
      someText: {
        get() {
          return this.secProperty
        },
        set(value) {
          if (value.endsWith('...')) {
            this.secProperty = value + '...'
          } else if (value.length >= 40) {
            this.secProperty = value.slice(0, -10) + '...';
            console.log(this.secProperty)
          } else {
            this.secProperty = value
          }
        }
      },
      current_time: {
        get() {
          let date = moment("h:mm:ss")
          return Date.parse(date)
        }
      },
      txt: {
        get() {
          return this.someDate;
        },
        set(value) {
          this.txt = value;
        }
      },
      // someText(value) {
      //   return value + ' ...'
      // }
    },
    filters: {
      // filterText(value) {
      //   console.log(value)
      //   if (value.endsWith('...')) {
      //     return value.replace(/.{3}/, '')
      //   } else {
      //     return value
      //   }
      // }
      // }
      // filterHour() {
      //   return moment().format('h');
      // },
      // filterMinutes() {
      //   return moment().format('mm');
      // },
      // filterSeconds() {
      //   return moment().format('ss');
      // }
    },
    // directives: {
    //   random: {
    //     inserted: (el) => {
    //       let size = 12,
    //         newsContent = el.innerHTML,
    //         newsText = document.getElementById('');
    //       if (newsText.length > size) {
    //         newsContent.text(newsText.slice(0, size) + ' ...');
    //       }
    //     }
    //   }
  // }
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

  .span-group {
    display: block;
    height: 150px;
    background: black;
    border: 2px solid slategrey;
    border-radius: 5px;
  }

  p {
    display: inline-block;
    color: white;
  }

  .points {
    font-size: 10vh;
    color: white;
  }

  .has-overflow:after {
    content: "..."
  }

  #date {
    width: 500px;
  }
</style>

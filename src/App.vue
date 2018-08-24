<template>
  <div id="app" class="app-container">

    <h1 class="title">Set a Password</h1>
    <p class="subtitle">Must contain at least</p>

    <div class="rules-container">

      <div class="pink-line"></div>

      <ul class="rules-list">
        <li v-for="(rule, index) in rules" :key="index" class="rule-item">
          <div :ref="`label_${index}`">
            <span class="rule-text">{{rule.label}}</span>
          </div>
          <div class="green-line" :ref="`line_${index}`"></div>
        </li>
      </ul>

    </div>

    <form @submit.prevent="submitForm">
      <input class="password-input" type="password" v-model="password">
      <button class="save-button" :class="{'valid': validForm}" type="submit">
        <strong>SAVE</strong>
      </button>
    </form>


      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" placeholder="Username"/>
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="Password"/>
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
      </Form>




    <input type="number" min="0" max="255" class="text-info" v-model.number="color.red"/>
    <input type="number" min="0" max="255" class="text-info" v-model.number="color.green"/>
    <input type="number" min="0" max="255" class="text-info" v-model.number="color.blue"/>
    <vue-slider-custom :color="color"></vue-slider-custom>
    <router-view></router-view>
  </div>
</template>
<script>

  import TweenLite from 'gsap';

  const specialCharsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
  const upperCaseRegex = /[A-Z]/
  const numberRegex = /[0-9]/

  const validationRules = [
    {
      label: '8 Characters',
      validate: input => input.length >= 8,
      labelWidth: 100 // this depends on the label length
    },
    {
      label: '1 Special Character',
      validate: input => specialCharsRegex.test(input),
      labelWidth: 150
    },
    {
      label: '1 Upper Case',
      validate: input => upperCaseRegex.test(input),
      labelWidth: 110
    },
    {
      label: '1 Number',
      validate: input => numberRegex.test(input),
      labelWidth: 80
    }
  ]

  export default {
    name: 'App',
    data() {
      return {
        password: '',
        color: {
          red: 0,
          green: 0,
          blue: 0
        },
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: 'Please fill in the user name', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Please fill in the password.', trigger: 'blur' },
            { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ]
        }
      }
    },
    computed: {
      rules() {
        return validationRules.map(rule => {
          return {
            label: rule.label,
            isValid: rule.validate(this.password),
            labelWidth: rule.labelWidth
          }
        })
      },
      validForm() {
        // returns false if at least one rule is invalid
        return !this.rules.some(rule => !rule.isValid)
      }
    },
    watch: {
      // method that triggers when computed rules change
      rules: function (newRules, oldRules) {
        newRules.forEach((newRule, index) => {
          const oldRule = oldRules[index]
          if (newRule.isValid !== oldRule.isValid) {
            // rule changed its valid property
            this.animateRule(index, newRule.isValid)
          }
        })
      }
    },
    methods: {
      animateRule(index, isValid) {
        const rule = this.rules[index]
        const greenLine = this.$refs[`line_${index}`]
        const ruleText = this.$refs[`label_${index}`]

        const greenLineWidth = isValid ? rule.labelWidth : 0
        const textOpacity = isValid ? 0.6 : 1
        const textPositionX = isValid ? 7 : -7

        // animate green line's width to strike element
        TweenLite.to(greenLine, 0.3, {
          width: greenLineWidth
        })

        // animate text transparency
        TweenLite.to(ruleText, 0.3, {
          opacity: textOpacity
        })

        // move the text to the side a little bit and then get back
        TweenLite.to(ruleText, 0.15, {
          x: textPositionX,
          onComplete: () => {
            TweenLite.to(ruleText, 0.15, {
              x: 0
            })
          }
        })
      },
      submitForm() {
        console.info('TODO: connect to your back-end');
      },
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      }
    }
  }

</script>


<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../node_modules/animate.css/animate.min.css";
  @import "../node_modules/iview/dist/styles/iview.css";

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


  .title {
    text-align: center;
    padding-top: 20px;
    font-size: 20px;
    margin-bottom: 0;
  }
  .subtitle {
    text-align: center;
    color: rgba(255, 255, 255, 0.5); /* semitransparent */
    font-size: 14px;
    margin: 0;
  }

  .rules-container {
    width: 200px;
    margin: 0 auto; /* center */
    margin-bottom: 30px;
    color: #2A1E49;
    background-color: white;
    border-radius: 5px;
    transform: rotate(-3deg);
  }

  /* pink left line to make the list look like a notebook sheet */
  .pink-line {
    position: absolute;
    border-left: solid #f84194 1px;
    height: 120px; /* depends on container height */
    left: 18px;
  }

  .rules-list {
    padding: 15px 0 10px 0;
  }
  .rule-item {
    position: relative;
    list-style-type: none; /* remove bullets */
    width: 100%;
    margin-bottom: 5px;
    border-bottom: solid blue 1px;
  }
  .rule-text {
    /* set text beside the pink line */
    margin-left: 25px;
  }

  /* line that croses each rule */
  .green-line {
    position: absolute;
    background-color: #32B997;
    height: 3px;
    top: 8px;
    left: 22px;
    transform: rotate(2deg);
    width: 0; /* starting width so it doesn't show */
  }

  .password-input {
    width: 220px;
    outline: none;
    border: none;
    padding: 8px 10px 10px;
    border-radius: 2px;
    margin-bottom: 30px;
    margin-left: calc(50% - 120px);
    font-size: 20px;
  }

  .save-button {
    outline: none;
    border: none;
    width: 100%;
    padding: 10px;
    color: rgba(0, 0, 0, 0.4);
    font-size: 17px;
    background-color: #EDEDED;
    transition: background-color .3s; /* will animate the backround color when the class changes*/
  }
  .save-button.valid {
    background-color: #F9B800;
    cursor: pointer;
  }

</style>

export const generalData = {
  data() {
    return {
      red: 0,
      green: 0,
      blue: 0
    }
  },
  computed: {
    color() {
      return {
        red: this.red,
        green: this.green,
        blue: this.blue
      }
    }
  }
};

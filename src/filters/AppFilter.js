import Vue from 'vue';

export default Vue.filter('filterApp',
  (value) => {
    console.log(value, 'bla ')
    return value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
});

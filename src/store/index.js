import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 0,
  todos: [
    {id: 1, name: 'Cronix', done: true},
    {id: 2, name: 'Systems', done: false},
    {id: 3, name: 'CS', done: true}
  ]
};

const mutations = {
  increment: state => state.count++,
  decrement: state => state.count--,
  showDoneTodo (state, payload) {state.todos = payload}
};

const getters = {
  /*doneTodo:
    state => {
      return state.todos.filter(todo => todo.done).length
    }*/
};

export default new Vuex.Store({
  state,
  mutations,
  getters
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    todos: [
      {
        description: "Feed jellyfish",
        owner: "Hailey",
        date: "2020-01-26",
        time: "12:00:00"
      },
      {
        description: "Grow plankton",
        owner: "Sarah",
        date: "2021-01-16",
        time: "15:30:00"
      },
      {
        description: "Clean ocean",
        owner: "Team Ocean",
        date: "2021-01-15",
        time: "10:00:00"
      },
      {
        description: "Relocate Irukandji",
        owner: "Mark",
        date: "2020-12-29",
        time: "08:00:00"
      }
    ]
  },

  mutations: {

    addTodo(state, todo) {
      state.todos.unshift(todo);
    },

    removeTodo(state, todo) {
      state.todos = state.todos.filter(obj => obj !== todo);
    }

  }

})

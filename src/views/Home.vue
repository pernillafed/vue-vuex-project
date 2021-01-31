<template>
  <div class="home">
    <div class="container">
      <h1>{{ heading }}</h1>
      <TodoCard v-for="(todo, i) in todos" :key="i" :todo="todo"/>
    </div>
  </div>
</template>

<script>

import TodoCard from "../components/TodoCard";

export default {

  data() {
    return {
      heading: "Your TODO's"
    }
  },

  components: {
    TodoCard
  },

  computed: {
    todos() {
      return this.$store.state.todos;
    }
  }

}

</script>

<style scoped>

  .home {
    display: flex;
    justify-content: center;
  }

</style>
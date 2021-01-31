<template>
    <div class="todo-card">
        <h2>{{ todo.description }}</h2>
        <div class="wrapper">
            <p class="owner">{{ todo.owner }}</p>
            <div class="timestamp">
                <p class="date">{{ todo.date }}</p>
                <p class="time">{{ todo.time }}</p>
            </div>
        </div>
        <img src="../assets/delete.png" alt="Trash icon" title="Delete" id="trash" @click="removeTodo">
  </div>
</template>

<script>

export default {

    props: ["todo"],

    methods: {

        removeTodo() {
            this.$store.commit("removeTodo", this.todo);
        }

    }

}

</script>

<style scoped>

    .todo-card {
        display: grid;
        grid-template-columns: 52% 36% 6%;
        column-gap: 3%;
        background: #ffffff;
        padding: 40px;
        border-radius: 30px;
        box-shadow: 5px 5px 5px #6d6d6d80;
        margin: 20px;
    }

    .owner {
        font-weight: bold;
    }

    .timestamp {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
    }

    .date {
        margin-right: 14px;
    }

    #trash {
        width: 50px;
    }

    #trash:hover {
        cursor: pointer;
    }

</style>
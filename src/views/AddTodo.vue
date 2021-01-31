<template>
    <div class="add-todo">
        <div class="container">
            <h1>{{ heading }}</h1>
            <form @submit.prevent="addTodo">
                <label for="description">Description</label>
                <label for="owner">Owner</label>
                <input type="text" id="description" placeholder="todo description..." v-model="description">
                <input type="text" id="owner" placeholder="todo owner..." v-model="owner">
                <button type="submit" id="add">Add to list <img src="../assets/jellyfish-icon.png" alt="A jellyfish icon" id="jelly-icon"></button>
            </form>
            <div class="img-wrapper">
                <img src="../assets/jellyfish-add.jpg" alt="Some jellyfish" id="jellyfish-img">
            </div>
        </div>
    </div>
</template>

<script>

export default {

    data() {
        return {
            heading: "Add TODO",
            description: "",
            owner: ""
        }
    },

    methods: {

        addTodo() {
            if (this.description && this.owner) {
                let newTodo = {
                    description: this.description,
                    owner: this.owner,
                    date: new Date().toLocaleDateString(),
                    time: new Date().toLocaleTimeString()
                }
                this.$store.commit("addTodo", newTodo);
                this.$router.push({path: '/'});
            } else {
                alert("Invalid input! Please try again.");
            }
        }
    }

}

</script>

<style scoped>

    .add-todo {
        display: flex;
        justify-content: center;
    }

    form {
        margin: 20px;
        padding: 40px;
        background: #fff;
        border-radius: 30px;
        box-shadow: 5px 5px 5px #6d6d6d80;
        display: grid;
        grid-template-columns: 38% 38% 22%;
        column-gap: 1%;
        row-gap: 4px;
    }

    label {
        margin-left: 3px;
    }

    input {
        border: 1px solid #6d6d6d80;
        border-radius: 15px;
        padding: 2px 8px;
    }

    input:focus {
        outline: none;
        box-shadow: 0 0 5px #a9bfdd;
    }

    #description {
        grid-column-start: 1;
        grid-column-end: 2;
    }

    #add {
        margin-left: 10%;
        padding: 5px 10px;
        background: #d0def0;
        border: none;
        border-radius: 15px;
        box-shadow: 2px 2px 2px #6d6d6d80;
        text-transform: uppercase;

    }

    #add:hover {
        background: #dce4f0;
    }

    #add:focus {
        outline: none;
    }

    #jelly-icon {
        width: 16px;
        position: relative;
        top: 3px;
        right: -3px;
        margin-left: 2px;
    }

    .img-wrapper {
        margin: 20px;
    }

    #jellyfish-img {
        width: 100%;
        border-radius: 30px;
        position: relative;
        bottom: -7px;
    }

</style>
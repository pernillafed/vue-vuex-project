<template>
    <div class="navbar">
        <div class="heading">
            <img src="../assets/jellyfish-logo.png" alt="Jellyfish logo">
            <span>{{ companyName }}</span>
        </div>
        <div class="links">
            <router-link to="/">HOME</router-link>
            <router-link to="/about">ABOUT</router-link>
            <router-link to="/add-todo">ADD</router-link>
        </div>
    </div>
</template>

<script>

export default {

    data() {
        return {
            companyName: "Jellyfish TODO"
        }
    }

}

</script>

<style scoped>

    .navbar {
        background: #2323a0;
        padding: 0.8rem;
        display: flex;
        justify-content: space-between;
        box-shadow: 0 2px 10px #000;
    }

    .heading {
        display: flex;
    }

    img {
        width: 32px;
        margin-left: 0.5rem;
    }

    span {
        color: #dbe5f3;
        font-size: 1.3rem;
        margin-left: 1rem;
        font-weight: bold;
        text-transform: uppercase;
    }

    .links {
        display: flex;
        align-items: center;
    }

    a {
        color: #dbe5f3;
        font-size: 1.1rem;
        text-decoration: none;
        margin-left: 1rem;
        margin-right: 0.5rem;
    }

    a:hover {
        color: #fff;
    }

</style>
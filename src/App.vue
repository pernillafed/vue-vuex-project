<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>

import Navbar from "./components/Navbar";

export default {

  name: "App",

  components: {
    Navbar
  }
  
}

</script>

<style>

  * {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  body {
    background-image: url(./assets/jellyfish-background.jpg);
    background-size: cover;
    min-height: 100vh;
  }

  .container {
        background: #ffffffcc;
        width: 60%;
        margin: 35px 0;
        border-radius: 30px;
    }

  h1 {
    text-align: center;
    padding: 20px 0;
  }

</style>
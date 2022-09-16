<template>
  <div id="app">
    <!-- Header -->
    <navbar-component/>

    <!-- Body -->
    <router-view/>

    <!-- Footer -->
    <footer-component/>

  </div>
</template>

<script>
import navbarComponent from "@/components/NavbarComponent";
import footerComponent from "@/components/footerComponent";

export default {
  name: 'App',
  components:{
    navbarComponent,
    footerComponent
  },

  beforeCreate() {
    document.title = "Drugs4Covid"
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>

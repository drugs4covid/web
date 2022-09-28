<template>
  <v-app>
    <!-- Navbar -->
    <navbar-component/>

    <!-- Body -->
    <v-main>
      <router-view/>
    </v-main>

    <!-- Footer -->
    <footer-component/>

  </v-app>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  name: 'App',
  components:{
    FooterComponent,
    NavbarComponent,
  },

  beforeCreate() {
    document.title = "Drugs4Covid"
  }
};
</script>

<style>

</style>

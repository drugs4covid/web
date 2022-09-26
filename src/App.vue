<template>
  <v-app>
    <!-- Navbar -->
    <navbar-component/>

    <!-- Body -->
    <v-main>
      <router-view/>
    </v-main>

    <!-- Footer -->
  </v-app>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent";

export default {
  name: 'App',
  components:{
    NavbarComponent,
  },

  beforeCreate() {
    document.title = "Drugs4Covid"
  }
};
</script>

<style>

</style>

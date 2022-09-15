<template>
  <div id="app">

    <!-- Header -->
    <b-navbar toggleable="lg" variant="light" fixed="top" sticky style="max-width: fit-content; alignment: center">
      <b-navbar-brand to="/">
        <b-img src="./assets/d4c-logo.svg"
        ></b-img>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <v-spacer></v-spacer>
          <b-navbar-nav fill>
            <b-nav-item v-for="(navItem) in navBarItems"
                        :to=navItem.href
                        :key="navItem.text"
            >
              {{navItem.text}}
            </b-nav-item>
          </b-navbar-nav>
      </b-collapse>


      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-navbar>

    <!-- Body -->
    <router-view/>

    <!-- Footer -->
    <template>
      <v-footer>
        <b-container fluid>
          <v-divider></v-divider>
          <b-row no-gutters align-h="between">
            <b-col>
              <b-img height="50px" style="vertical-align: middle" src="./assets/d4c-logo.svg"/>
            </b-col>
            <b-col>
              <b-row style="font-size: small">
                With the financial support of
              </b-row>
              <b-row align-h="center">
                  <b-img height="50px" style="vertical-align: middle" src="./assets/BBVA-logos/JPG/AFF LOGO Fundación 2 colores/USO PRINCIPAL/Fundacion-BBVA_principal.png"></b-img>
                <b-col cols="5" style="text-align: left; font-size: xx-small  ;color: rgb(0,0,0,.65)">
                  Drugs4Covid++  - AYUDAS FUNDACIÓN BBVA A EQUIPOS DE INVESTIGACIÓN CIENTÍFICA SARS-CoV-2 y COVID-19
                </b-col>
              </b-row>
            </b-col>
            <b-col>
              <b-img width="50px" src="./assets/oeg-logo.jpg"/>
              <b-img width="50px" src="./assets/ETSIINF-logo.png"/>
              <b-img height="50px" src="./assets/UPM-logo.png"/>
            </b-col>
          </b-row>
          <br/>
        </b-container>
      </v-footer>
    </template>

  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    navBarItems:[
      {
        text: 'Home',
        disabled: false,
        href: '/',
      },
      {
        text: 'About',
        disabled: false,
        href: '/about',
      },
      {
        text: 'Knowledge Graph',
        disabled: false,
        href: '/knowledge-graph',
      },
      {
        text: 'Services',
        disabled: false,
        href: '/services',
      },
      {
        text: 'Resources',
        disabled: false,
        href: '/resources',
      },
      {
        text: 'Corpus',
        disabled: false,
        href: '/corpus',
      },
    ],
  }),
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

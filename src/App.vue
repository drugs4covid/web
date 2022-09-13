<template>
  <div id="app">

    <!-- Header -->
    <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top" sticky>
      <b-navbar-brand to="/">Drugs4Covid</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
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
    <br/>
    <router-view/>

    <!-- Footer -->


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

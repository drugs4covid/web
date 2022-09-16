<template>
  <div id="app">

    <!-- Header -->
    <b-navbar toggleable="lg" variant="light" fixed="top" sticky style="alignment: center">
      <b-navbar-brand to="/">
        <b-img src="./assets/d4c-logo.svg"
        ></b-img>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <v-spacer></v-spacer>
        <b-navbar-nav fill>
          <b-nav-item :to="navHome.to">{{navHome.text}}</b-nav-item>

          <b-nav-item-dropdown :text="navKG.text">
            <b-dropdown-item v-for="view in navKG.views"
                             :href="view.href"
                             :key="view.name"
                             :text="view.name"
            >
              {{view.name}}
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown :text="navCorpus.text">
            <b-dropdown-item v-for="view in navCorpus.views"
                             :href="view.href"
                             :key="view.name"
                             :text="view.name"
            >
              {{view.name}}
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown :text="navResources.text">
            <b-dropdown-item v-for="view in navResources.views"
                             :href="view.href"
                             :key="view.name"
                             :text="view.name"
            >
              {{view.name}}
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item :to="navAbout.to">{{navAbout.text}}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <template #button-content>
            <b-icon icon="globe"></b-icon>
          </template>
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
                {{ footerText.textA }}
              </b-row>
              <b-row align-h="center">
                <b-img height="50px" style="vertical-align: middle" src="./assets/BBVA-logos/JPG/AFF LOGO Fundación 2 colores/USO PRINCIPAL/Fundacion-BBVA_principal.png"></b-img>
                <b-col cols="5" style="text-align: left; font-size: xx-small  ;color: rgb(0,0,0,.65)">
                  {{footerText.textB}}
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
    footerText: {
      textA: "With the financial support of",
      textB: "Drugs4Covid++ - AYUDAS FUNDACIÓN BBVA A EQUIPOS DE INVESTIGACIÓN CIENTÍFICA SARS-CoV-2 y COVID-19",
    },
    navHome: {
      text: 'Home',
      to: '/',
    },
    navKG: {
      text: 'Knowledge Graph',
      to: '/knowledge-graph',
      views:[
        {
          name: "Graph DB",
          href: "https://d4c.linkeddata.es/rdf",
        },
        {
          name: "SPARQL",
          href: "https://d4c.linkeddata.es/sparql",
        },
        {
          name: "Ontology",
          href: "https://drugs4covid.github.io/EBOCA-portal/index.html",
        },
      ]
    },
    navCorpus: {
      text: 'Corpus',
      to: '/corpus',
      views:[
        {
          name: "D4C Custom Search",
          href: "https://search.drugs4covid.oeg-upm.net/customsearch",
        },
        {
          name: "Query Builder",
          href: "http://librairy.linkeddata.es/solr/#/cord19-paragraphs/query",
        },
        {
          name: "KeyQ",
          href: "https://aiproc.linkeddata.es/",
        },
      ]
    },
    navResources: {
      text: 'Resources',
      to: '/resources',
      views:[
        {
          name: "GitHub",
          href: "https://github.com/drugs4covid",
        },
        {
          name: "Jupiter Notebooks",
          href: "https://short.upm.es/54udg",
        },
        {
          name: "Articles",
          href: "https://arxiv.org/abs/2012.01953",
        },
      ]
    },
    navAbout: {
      text: 'About',
      to: '/about',
    },
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

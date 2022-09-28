<template>
  <v-container fluid>
    <v-app-bar app>

      <!-- Lang switch -->
      <v-btn icon>
        <v-icon>mdi-earth</v-icon>
      </v-btn>

      <!-- Navigation Drawer Icon -->
      <v-app-bar-nav-icon @click="drawer = true"
                          class="d-flex d-sm-none"
      >
      </v-app-bar-nav-icon>

      <!-- Navbar title -->
      <router-link to="/">
        <v-img src="@/assets/d4c-logo.svg" contain max-width="250px"></v-img>
      </router-link>

      <!-- Navigation tabs -->
      <template #extension>
        <v-tabs v-model="tab" align-with-title class="d-none d-sm-flex">
          <v-menu
              v-for="(navItem, index) in navItems"
              :key="index"
              offset-y
              bottom
          >
            <template #activator="{ on, attrs }">
              <v-tab
                  v-bind="attrs"
                  v-on="on"
              >
                {{$t(navItem.label)}}
              </v-tab>
            </template>

            <v-list v-if="navItem.views">
              <v-list-item
                  v-for="(view, index) in navItem.views"
                  :key="index"
                  :href="view.href"
                  :to="view.to"
              >
                <v-list-item-title v-text="$t(view.label)"/>

              </v-list-item>
            </v-list>

          </v-menu>
        </v-tabs>
      </template>
    </v-app-bar>

    <!-- Navigation Drawer-->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-group
            v-for="navItem in navItems"
            :key="navItem.name"
            no-action
        >
          <template #activator>
            <v-list-item-content>
              <v-list-item-title v-text="$t(navItem.label)"/>
            </v-list-item-content>
          </template>

          <v-list-item
              v-for="(view, index) in navItem.views"
              :key="index"
              :href="view.href"
              :to="view.to"
          >
            <v-list-item-content>
              <v-list-item-title v-text="$t(view.label)"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <template ></template>

  </v-container>
</template>

<script>
export default {
  name: "NavbarComponent",
  data: () =>({
    drawer: false,
    tab: null,
    items: [
      'web', 'shopping', 'videos', 'images', 'news',
    ],
    titleImgSrc: "@/assets/d4c-logo.svg",

    locales: ["en", "es"],
    navItems:[
      {
        name: "Services",
        label: "title.services",
        to: "/services",
        views:[
          {
            label: "title.bioNLP",
            to: "/services/bio-nlp",
          },
          {
            label: "title.searchEngine",
            to: "/services/search-engine",
          },
          {
            label: "title.qa",
            to: "/services/qa",
          },
        ]
      },
      {
        name: "kg",
        label: "title.knowledgeGraph",
        to: "/knowledge-graph",
        views:[
          {
            label: "title.graphDB",
            href: "https://d4c.linkeddata.es/rdf",
          },
          {
            label: "title.sparql",
            href: "https://d4c.linkeddata.es/rdf/sparql",
          },
          {
            label: "title.ontology",
            href: "https://drugs4covid.github.io/EBOCA-portal/index.html",
          },
        ]
      },
      {
        name: "corpus",
        label: "title.corpus",
        to: "/corpus",
        views:[
          {
            label: "title.customSearch",
            href: "https://search.drugs4covid.oeg-upm.net/customsearch",
          },
          {
            label: "title.queryBuilder",
            href: "http://librairy.linkeddata.es/solr/#/cord19-paragraphs/query",
          },
          {
            label: "title.keyQ",
            href: "https://aiproc.linkeddata.es/",
          },
        ]
      },
      {
        name: "resources",
        label: "title.resources",
        to: "/resources",
        views:[
          {
            label: "title.code",
            to: "/resources/code",
          },
          {
            label: "title.jupiterNotebooks",
            href: "https://short.upm.es/54udg",
          },
          {
            label: "title.articles",
            href: "https://arxiv.org/abs/2012.01953",
          },
        ]
      },
      {
        name:"about",
        label: "title.about",
        to: "/about",
      },
    ],

  })
}
</script>

<style scoped>

</style>
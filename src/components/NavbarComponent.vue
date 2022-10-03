<template>
  <v-container fluid>
    <v-app-bar app dark>

      <!-- Lang switch -->
      <locale-switch/>

      <!-- Navigation Drawer Icon -->
      <v-app-bar-nav-icon @click="drawer = true"
                          class="d-flex d-md-none"
      />

      <!-- Navbar title -->
      <router-link to="/">
        <v-img src="@/assets/d4c-logo.svg" contain max-width="250px"></v-img>
      </router-link>

      <!-- Navigation tabs -->
      <v-tabs id="tab" v-model="tab" class="d-none d-md-flex">
        <v-menu
            v-for="(navItem, index) in navItems"
            :key="index"
            offset-y
            bottom
            open-on-hover
        >
          <template #activator="{ on, attrs }">
            <v-tab
                v-bind="attrs"
                v-on="on"
                :to="navItem.to"
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

      <!-- Search Engine Icon -->
      <v-spacer></v-spacer>
      <v-menu offset-y bottom
              :close-on-content-click="false"
      >
        <template #activator="{ on, attrs }">
          <v-btn v-bind="attrs"
                 v-on="on"
                 icon
          >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>

        <search-engine-input id="search-engine-input"/>

      </v-menu>

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

  </v-container>
</template>

<script>
import SearchEngineInput from "@/components/SearchEngineInput";
import LocaleSwitch from "@/components/LocaleSwitch";
export default {
  name: "NavbarComponent",
  components: {
    LocaleSwitch,
    SearchEngineInput
  },

  data: () =>({
    drawer: false,
    tab: null,
    items: [
      'web', 'shopping', 'videos', 'images', 'news',
    ],
    titleImgSrc: "@/assets/d4c-logo.svg",

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
            href: "https://d4c.linkeddata.es/sparql",
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
            to: "/corpus/text-search"
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
#tab{
  justify-content: right;
}
#search-engine-input{
  background-color: #272727;
}
</style>
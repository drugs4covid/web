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
        <v-img :src="pageLogo" contain max-width="250px"></v-img>
      </router-link>

      <!-- Navigation tabs -->
      <v-tabs id="tab" v-model="tab" class="d-none d-md-flex">
        <v-menu v-for="(navItem, index) in navItems"
                :key="index"
                offset-y bottom open-on-hover
        >
          <template #activator="{ on, attrs }">
            <v-tab v-bind="attrs"
                   v-on="on"
                   v-text="$t(navItem.label)"
                   :to="{name: navItem.to}"
            />
          </template>

          <v-list v-if="navItem.views">
            <div v-for="(view, index) in navItem.views"
                 :key="index"
            >
              <v-list-item v-if="view.href" :href="view.href">
                <v-list-item-title v-text="$t(view.label)"/>
              </v-list-item>

              <v-list-item v-else :to="{name: view.to}">
                <v-list-item-title v-text="$t(view.label)"/>
              </v-list-item>
            </div>
          </v-list>

        </v-menu>
      </v-tabs>

      <!-- Search Engine Icon -->
      <v-spacer/>
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

        <search-engine-input id="search-engine-input" redirect/>
      </v-menu>

    </v-app-bar>

    <!-- Navigation Drawer-->
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list nav dense>
        <v-list-group v-for="(navItem, index) in navItems"
                      :key="index"
                      no-action
        >
          <template #activator>
            <v-list-item-content>
              <router-link id="router-link" :to="{name: navItem.to}">
                <v-list-item-title v-text="$t(navItem.label)"/>
              </router-link>
            </v-list-item-content>
          </template>

          <template #appendIcon>
              <v-icon v-show="navItem.views">
                mdi-chevron-down
              </v-icon>
          </template>

          <v-list-item v-show="navItem.views" v-for="(view, index) in navItem.views"
                       :key="index"
          >
            <v-list-item-content v-if="view.href">
              <a id="router-link" :href="view.href">
                <v-list-item-title v-text="$t(view.label)"/>
              </a>
            </v-list-item-content>

            <v-list-item-content v-else>
              <router-link id="router-link" :to="{name: view.to}">
                <v-list-item-title v-text="$t(view.label)"/>
              </router-link>
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
import store from "@/store";
import NavbarLogo from "@/assets/d4c-logo.svg";

export default {
  name: "NavbarComponent",
  components: {
    LocaleSwitch,
    SearchEngineInput
  },

  data: () =>({
    drawer: false,
    tab: null,
    pageLogo: NavbarLogo,
    navItems:[
      {
        label: "title.services",
        to: "services",
        views:[
          {
            label: "title.bioNLP",
            to: "bio-ner",
          },
          {
            label: "title.searchEngine",
            to: "bio-search",
          },
          {
            label: "title.qa",
            to: "bio-qa",
          },
        ]
      },
      {
        label: "title.knowledgeGraph",
        to: "knowledge-graph",
        views:[
          {
            label: "title.graphDB",
            to: "rdf",
            href: store.state.links.d4c.rdf
          },
          {
            label: "title.sparql",
            to: "sparql",
            href: store.state.links.d4c.sparql
          },
          {
            label: "title.ontology",
            to: "ontology",
            href: store.state.links.d4c.ontology
          },
        ]
      },
      {
        label: "title.corpus",
        to: "corpus",
        views:[
          {
            label: "title.customSearch",
            to: "text-search"
          },
          {
            label: "title.queryBuilder",
            to: "repository",
          },
          {
            label: "title.keyQ",
            to: "keyQ",
            href: store.state.links.d4c.keyQ
          },
        ]
      },
      {
        label: "title.resources",
        to: "resources",
        views:[
          {
            label: "title.code",
            to: "code",
            href: store.state.links.github.d4c
          },
          {
            label: "title.jupiterNotebooks",
            to: "notebooks",
          },
          {
            label: "title.annotatedCorpus",
            to: "annotated-corpus",
          },
        ]
      },
      {
        label: "title.articles",
        to: "papers",
      },
      {
        label: "title.about",
        to: "about",
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
#router-link{
  text-decoration: none;
  color: inherit;
}
</style>
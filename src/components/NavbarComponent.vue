<template>
  <v-container fluid>
    <v-app-bar app dark :key="key">

      <!-- Lang switch -->
      <locale-switch @locale="reloadNav"/>

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

        <bio-search-input id="search-engine-input" redirect/>
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
import BioSearchInput from "@/components/BioSearchInput";
import LocaleSwitch from "@/components/LocaleSwitch";
import store from "@/store";
import NavbarLogo from "@/assets/d4c-logo.svg";

export default {
  name: "NavbarComponent",
  components: {
    LocaleSwitch,
    BioSearchInput
  },

  data: () =>({
    key: "nav",
    drawer: false,
    tab: null,
    pageLogo: NavbarLogo,
    navItems:[
      {
        label: "nav.services",
        to: "services",
        views:[
          {
            label: "nav.bioNER",
            to: "bio-ner",
          },
          {
            label: "nav.bioSearch",
            to: "bio-search",
          },
          {
            label: "nav.bioQA",
            to: "bio-qa",
          },
        ]
      },
      {
        label: "nav.knowledgeGraph",
        to: "knowledge-graph",
        views:[
          {
            label: "nav.rdf",
            to: "rdf",
            href: store.state.links.d4c.rdf
          },
          {
            label: "nav.sparql",
            to: "sparql",
            href: store.state.links.d4c.sparql
          },
          {
            label: "nav.ontology",
            to: "ontology",
            href: store.state.links.d4c.ontology
          },
        ]
      },
      {
        label: "nav.corpus",
        to: "corpus",
        views:[
          {
            label: "nav.textSearch",
            to: "text-search"
          },
          {
            label: "nav.repository",
            to: "repository",
          },
          {
            label: "nav.annotatedCorpus",
            to: "annotated-corpus",
            href: store.state.links.zenodo.annotatedCorpus
          },
          {
            label: "nav.keyQ",
            to: "keyQ",
            href: store.state.links.d4c.keyQ
          }
        ]
      },
      {
        label: "nav.resources",
        to: "resources",
        views:[
          {
            label: "nav.code",
            to: "code",
            href: store.state.links.github.d4c
          },
          {
            label: "nav.notebooks",
            to: "notebooks",
          },
        ]
      },
      {
        label: "nav.papers",
        to: "papers",
      },
      {
        label: "nav.about",
        to: "about",
      },
    ],
  }),
  methods: {
    reloadNav(key){
      this.key = key
    }
  }
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
<template>
  <b-navbar toggleable="lg" variant="light" fixed="top" sticky style="alignment: center">
    <b-navbar-brand to="/">
      <b-img src="@/assets/d4c-logo.svg"
      ></b-img>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav fill class="ml-auto">
        <b-nav-item :to="navHome.to">
          {{$t(navHome.label)}}
        </b-nav-item>

        <b-nav-item-dropdown :text="$t(navServices.label)">
          <b-dropdown-item v-for="(view, index) in navServices.views"
                           :to="view.href"
                           :key="index"
          >
            {{$t(view.label)}}
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown :text="$t(navKG.label)">
          <b-dropdown-item v-for="(view, index) in navKG.views"
                           :href="view.href"
                           :key="index"
          >
            {{$t(view.label)}}
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown :text="$t(navCorpus.label)">
          <b-dropdown-item v-for="(view, index) in navCorpus.views"
                           :href="view.href"
                           :key="index"
          >
            {{$t(view.label)}}
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown :text="$t(navResources.label)">
          <b-dropdown-item v-for="(view, index) in navResources.views"
                           :href="view.href"
                           :to="view.href"
                           :key="index"
          >
            {{$t(view.label)}}
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item :to="navAbout.to">
          {{$t(navAbout.label)}}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>

    <b-navbar-nav class="ml-auto">
        <b-nav-dropdown right>
          <template #button-content>
            <b-icon icon="globe"></b-icon>
          </template>
          <b-dropdown-item v-for="(lang, i) in locales"
                           :key="`Lang${i}`"
                           @click="$i18n.locale=lang"
          >
            {{ lang.toUpperCase() }}
          </b-dropdown-item>
        </b-nav-dropdown>
    </b-navbar-nav>

  </b-navbar>
</template>

<script>
export default {
  name: "NavbarComponent",
  data: () =>({
    locales: ["en", "es"],
    navHome: {
      label: "title.home",
      to: "/",
    },
    navServices: {
      label: "title.services",
      to: "/services",
      views:[
        {
          label: "title.bioNLP",
          href: "/services/bio-nlp",
        },
        {
          label: "title.searchEngine",
          href: "/services/search-engine",
        },
        {
          label: "title.qa",
          href: "/services/qa",
        },
      ]
    },
    navKG: {
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
    navCorpus: {
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
    navResources: {
      label: "title.resources",
      to: "/resources",
      views:[
        {
          label: "title.code",
          href: "/resources/code",
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
    navAbout: {
      label: "title.about",
      to: "/about",
    },
  })
}
</script>

<style scoped>

</style>
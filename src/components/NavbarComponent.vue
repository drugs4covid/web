<template>
  <b-navbar toggleable="lg" variant="light" fixed="top" sticky style="alignment: center">
    <b-navbar-brand to="/">
      <b-img src="@/assets/d4c-logo.svg"
      ></b-img>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav fill class="ml-auto">
        <b-nav-item :to="navHome.to">{{navHome.text}}</b-nav-item>

        <b-nav-item-dropdown :text="navServices.text">
          <b-dropdown-item v-for="view in navServices.views"
                           :to="view.href"
                           :key="view.name"
                           :text="view.name"
          >
            {{view.name}}
          </b-dropdown-item>
        </b-nav-item-dropdown>

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
        <b-select v-model="$i18n.locale" right>
          <b-select-option v-for="(lang, i) in ['es', 'en']"
                  :key="`Lang${i}`"
                  :value="lang"
          >
            {{ lang }}
          </b-select-option>
        </b-select>
    </b-navbar-nav>

  </b-navbar>
</template>

<script>
export default {
  name: "NavbarComponent",
  data: () =>({
    navHome: {
      text: 'Home',
      to: '/',
    },
    navServices: {
      text: 'Services',
      to: '/services',
      views:[
        {
          name: "Bio-NLP",
          href: "/services/bio-nlp",
        },
        {
          name: "Search engine",
          href: "/services/search-engine",
        },
        {
          name: "QA",
          href: "/services/qa",
        },
      ]
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
          href: "https://d4c.linkeddata.es/rdf/sparql",
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
  })
}
</script>

<style scoped>

</style>
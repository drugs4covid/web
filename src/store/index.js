import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    externalLink:{
      sparql: "https://drugs4covid.oeg.fi.upm.es/sparql",
      rdf: "https://drugs4covid.oeg.fi.upm.es/rdf/",
      ontology  : "https://drugs4covid.github.io/EBOCA-portal/index.html",
      repository: "http://librairy.linkeddata.es/solr/#/cord19-paragraphs/query",
      keyQ: "https://aiproc.linkeddata.es/",
      search: "https://search.drugs4covid.oeg-upm.net/search/",

    },
    api: {
      bioNerEntities: "https://librairy.linkeddata.es/bio-ner/entities",
      solr: "https://librairy.linkeddata.es/solr/",
      qa: "https://d4c.linkeddata.es/qa/answers",
      bioApi: "https://librairy.linkeddata.es/bio-api/"
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

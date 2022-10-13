import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const GITHUB_BASE_URL = "https://github.com/"
const LIBRAIRY_BASE_URL = "https://librairy.linkeddata.es/"
const HUGGINGFACE_BASE_URL = "https://huggingface.co/"

export default new Vuex.Store({
  state: {
    bioNer: {
      github: GITHUB_BASE_URL.concat("drugs4covid/bio-ner"),
      api: LIBRAIRY_BASE_URL.concat("bio-ner/entities"),
      huggingFace: HUGGINGFACE_BASE_URL.concat("alvaroalon2")
    },
    bioSearch: {
      github: GITHUB_BASE_URL.concat("drugs4covid/bio-nlp"),
    },
    bioQa: {
      github: GITHUB_BASE_URL.concat("drugs4covid/KGQA"),
    },
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
    },
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

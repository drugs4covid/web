import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const GITHUB_BASE_URL = "https://github.com/"
const LIBRAIRY_BASE_URL = "https://librairy.linkeddata.es/"
const SOLR_BASE_URL = "https://librairy.linkeddata.es/solr/"
const HUGGINGFACE_BASE_URL = "https://huggingface.co/"
const D4C_BASE_URL = "https://drugs4covid.oeg.fi.upm.es/"

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
      api: "https://d4c.linkeddata.es/qa/answers"
    },
    rdf: {
      github: GITHUB_BASE_URL.concat("drugs4covid/EBOCA-Resources"),
      url: D4C_BASE_URL.concat("rdf")
    },
    sparql: {
      github: GITHUB_BASE_URL.concat("drugs4covid/KG"),
      url: D4C_BASE_URL.concat("sparql")
    },
    textSearch: {
      github: GITHUB_BASE_URL.concat("drugs4covid/bio-nlp"),
      librairy: LIBRAIRY_BASE_URL.concat("covid19-model")
    },
    repository: {
      solrDisease: SOLR_BASE_URL.concat("bioner-diseases/select?q=*%3A*"),
      solrDrugs: SOLR_BASE_URL.concat("bioner-drugs/select?q=*%3A*"),
      solrGenes: SOLR_BASE_URL.concat("bioner-genetic/select?q=*%3A*"),
      solrPapers: SOLR_BASE_URL.concat("cord19-papers/select?q=*%3A*"),
      solrParagraphs: SOLR_BASE_URL.concat("cord19-paragraphs/select?q=*%3A*"),
    },
    externalLink: { // For externalLink view. Must be refactored to use the other states
      sparql: "https://drugs4covid.oeg.fi.upm.es/sparql",
      rdf: "https://drugs4covid.oeg.fi.upm.es/rdf/",
      ontology  : "https://drugs4covid.github.io/EBOCA-portal/index.html",
      repository: "http://librairy.linkeddata.es/solr/#/cord19-paragraphs/query",
      keyQ: "https://aiproc.linkeddata.es/",
      search: "https://search.drugs4covid.oeg-upm.net/search/",
    },
    api: {
      solr: "https://librairy.linkeddata.es/solr/",
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

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const GITHUB_BASE_URL = "https://github.com/"
const LIBRAIRY_BASE_URL = "https://librairy.linkeddata.es/"
const HUGGINGFACE_BASE_URL = "https://huggingface.co/"
const D4C_BASE_URL = "https://drugs4covid.oeg.fi.upm.es/"

export default new Vuex.Store({
  state: {
    links: {
      github: {
        d4c: GITHUB_BASE_URL.concat("drugs4covid"),
        bioNer: GITHUB_BASE_URL.concat("drugs4covid/bio-ner"),
        bioNlp: GITHUB_BASE_URL.concat("drugs4covid/bio-nlp"),
        bioQa: GITHUB_BASE_URL.concat("drugs4covid/KGQA"),
        rdf: GITHUB_BASE_URL.concat("drugs4covid/EBOCA-Resources"),
        sparql: GITHUB_BASE_URL.concat("drugs4covid/KG"),
        notebooks: {
          cord19Indexing: GITHUB_BASE_URL.concat("drugs4covid/bio-nlp/blob/master/notebooks/documents/cord19_indexing.ipynb"),
          atcProcessing: GITHUB_BASE_URL.concat("drugs4covid/bio-nlp/blob/master/notebooks/drugs/atc_processing.ipynb"),
          meshProcessing: GITHUB_BASE_URL.concat("drugs4covid/bio-nlp/blob/master/notebooks/diseases/mesh_processing.ipynb")
        }
      },
      librairy: {
        bioNerEntities: LIBRAIRY_BASE_URL.concat("bio-ner/entities"),
        covid19Model: LIBRAIRY_BASE_URL.concat("covid19-model"),
        bioApi: LIBRAIRY_BASE_URL.concat("bio-api"),
        solrApi: LIBRAIRY_BASE_URL.concat("solr/"),
        solr: {
          diseases: LIBRAIRY_BASE_URL.concat("solr/bioner-diseases/select?q=*%3A*"),
          drugs: LIBRAIRY_BASE_URL.concat("solr/bioner-drugs/select?q=*%3A*"),
          genes: LIBRAIRY_BASE_URL.concat("solr/bioner-genetic/select?q=*%3A*"),
          papers: LIBRAIRY_BASE_URL.concat("solr/cord19-papers/select?q=*%3A*"),
          paragraphs: LIBRAIRY_BASE_URL.concat("solr/cord19-paragraphs/select?q=*%3A*"),
        },
      },
      huggingFace: {
        bioBert: HUGGINGFACE_BASE_URL.concat("alvaroalon2")
      },
      d4c: {
        qaAnswers: D4C_BASE_URL.concat("qa/answers"),
        rdf: D4C_BASE_URL.concat("rdf"),
        sparql: D4C_BASE_URL.concat("sparql"),
        bioNerEntitiesES: D4C_BASE_URL + "platform/entities",
        ontology  : "https://drugs4covid.github.io/EBOCA-portal/index.html",
        keyQ: "https://aiproc.linkeddata.es/",
        search: "https://search.drugs4covid.oeg-upm.net/search/",
      },
      zenodo: {
        annotatedCorpus: "https://doi.org/10.5281/zenodo.7193680"
      },
    },

    pdfDocuments: {
      id_1: "https://oa.upm.es/67901/1/TFM_RAFAEL_INES_GUILLEN.pdf",
      id_2: "https://oa.upm.es/67933/1/TFM_ALVARO_ALONSO_CASERO.pdf",
      id_3: "http://journal.sepln.org/sepln/ojs/ojs/index.php/pln/article/view/6437/3845",
      id_4: "https://oa.upm.es/71455/1/TFM_CHRISTIAN_MARLON_PANEQUE_MOREDA.pdf",
      id_5: "https://oa.upm.es/71427/1/TFG_DIEGO_FRAILE_EGIDO.pdf",
      id_6: "https://zenodo.org/record/7185255/files/TFM_IBAI_GUILLEN.pdf?download=1",
      id_7: "https://zenodo.org/record/7180962/files/master_thesis_LSG.pdf?download=1",
      id_8: "https://oa.upm.es/70949/1/TFG_JOSE_MANUEL_VEGA_GRADIT.pdf",
      id_9: "https://oa.upm.es/67901/1/TFM_RAFAEL_INES_GUILLEN.pdf",
      id_10: "",
      id_11: "",
      id_12: "https://link.springer.com/content/pdf/10.1007/978-3-031-17105-5_11.pdf",
      id_13: "",
      id_14: "",
      id_15: "",
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

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
        ontology  : "https://drugs4covid.github.io/EBOCA-portal/index.html",
        keyQ: "https://aiproc.linkeddata.es/",
        search: "https://search.drugs4covid.oeg-upm.net/search/",
      },
      zenodo: {
        annotatedCorpus: null
      },
    },

    citedDocuments: [
      /*ID 1*/[
        "10.5281/zenodo.7181114",
        "https://oa.upm.es/67901/1/TFM_RAFAEL_INES_GUILLEN.pdf"
      ],
      /*ID 2*/[
        "https://oa.upm.es/cgi/export/eprint/67933/BibTeX/upm-eprint-67933.bib",
        "https://oa.upm.es/67933/1/TFM_ALVARO_ALONSO_CASERO.pdf"
      ],
      /*ID 3: This should be migrated*/[
        "@article{PLN6437,author = {Carlos Badenes-Olmedo y Álvaro Alonso y Oscar Corcho},title = {An Overview of Drugs, Diseases, Genes and Proteins in the CORD-19 Corpus},journal = {Procesamiento del Lenguaje Natural},volume = {69},number = {0},year = {2022},keywords = {},abstract = {Several initiatives have emerged during the COVID-19 pandemic to gather scientific publications related to coronaviruses. Among them, the COVID-19 Open Research Dataset (CORD-19) has proven to be a valuable resource that provides full-text articles from the PubMed Central, bioRxiv and medRxiv repositories. Such a large amount of biomedical literature needs to be properly managed to facilitate and promote its use by health professionals, for example by tagging documents with the biomedical entities that appear on them. We created a biomedical named entity recognizer (NER) that normalizes (NEN) the drugs, diseases, genes and proteins mentioned in texts with the codes of the main standardization systems such as MeSH, ICD-10, ATC, SNOMED, ChEBI, GARD and NCBI. It is based on fine-tuning the BioBERT language model independently for each entity type using domain-specific datasets and an inverse index search to normalize the references. We have used the resultant BioNER+BioNEN system to process the CORD-19 corpus and offer an overview of the drugs, diseases, genes and proteins related to coronaviruses in the last fifty years.},issn = {1989-7553},url = {http://journal.sepln.org/sepln/ojs/ojs/index.php/pln/article/view/6437},pages = {165--176}}",
        "http://journal.sepln.org/sepln/ojs/ojs/index.php/pln/article/download/6437/3845"
      ],
      /*ID 4*/[
        "https://oa.upm.es/cgi/export/eprint/71455/BibTeX/upm-eprint-71455.bib",
        "https://oa.upm.es/71455/1/TFM_CHRISTIAN_MARLON_PANEQUE_MOREDA.pdf"
      ],
      /*ID 5*/[
        "https://oa.upm.es/cgi/export/eprint/71427/BibTeX/upm-eprint-71427.bib",
        "https://oa.upm.es/71427/1/TFG_DIEGO_FRAILE_EGIDO.pdf"
      ],
      /*ID 6*/[
        "10.5281/zenodo.7185254",
        "https://zenodo.org/record/7185255/files/TFM_IBAI_GUILLEN.pdf?download=1"
      ],
      /*ID 7*/[
        "10.5281/zenodo.7180961",
        "https://zenodo.org/record/7180962/files/master_thesis_LSG.pdf?download=1"
      ],
      /*ID 8*/[
        "https://oa.upm.es/cgi/export/eprint/70949/BibTeX/upm-eprint-70949.bib",
        "https://oa.upm.es/70949/1/TFG_JOSE_MANUEL_VEGA_GRADIT.pdf"
      ],
      /*ID 9*/[
        "https://oa.upm.es/cgi/export/eprint/67901/BibTeX/upm-eprint-67901.bib",
        "https://oa.upm.es/67901/1/TFM_RAFAEL_INES_GUILLEN.pdf"
      ],
      /*ID 10: Cannot be cited, no content*/
      /*ID 11: Cannot be cited, no content*/
      /*ID 12*/[
        "10.1007/978-3-031-17105-5_11",
        "https://link.springer.com/content/pdf/10.1007/978-3-031-17105-5_11.pdf"
      ]
    ],
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

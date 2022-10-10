<template>
  <v-container>
    <v-card flat>
      <v-card-title v-text="$t('papers.title')"/>
      <v-card-subtitle v-text="$t('papers.subtitle')"/>

      <v-col v-for="(cite, index) in citationsData"
             :key="index"
             cols="12"
      >
        <a :href="cite.URL">
          <h2 class="title" v-text="cite.title">
            {{cite.title}}
          </h2>
          <span v-show="cite.version">
            ({{ $t('label.version') }} {{cite.version}})
          </span>
        </a>
        <h3 class="subtitle-2">
          <span v-for="(author, index) in cite.author"
                :key="index"
          >
            {{author.given}} {{author.family}}
            <span v-if="index === cite.author.length-2" v-text="$t('label.and')"/>
            <span v-else-if="index === cite.author.length-1">.</span>
            <span v-else>, </span>
          </span>
        </h3>
        <v-card-text v-text="cite.abstract"/>

        <v-card-actions>
          <v-row>
            <v-col cols="12">
              <span v-show="cite.publisher">
                <em><span class="journal" v-text="cite.publisher"/></em>
              </span>
              <span v-if="cite.publisher && cite.issued">, </span>
              <span v-if="cite.publisher && !cite.issued">. </span>
              <span v-show="cite.issued">
                <span v-for="(datePart, index) in cite.issued['date-parts']"
                      :key="index"
                >
                  <span v-show="datePart[1]" v-text="$t('month.' + datePart[1])"/>
                  <span v-if="datePart[1]">, </span>
                  <span v-show="datePart[0]" v-text="datePart[0]"/>.
                </span>
              </span>
            </v-col>
            <v-col cols="12">
              <v-chip-group column>
                <v-chip v-for="(category) in new Set(cite.categories)"
                        :key="category"
                        v-text="category"
                        color="success"
                        label small
                />
              </v-chip-group>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-col>

    </v-card>
  </v-container>
</template>

<script>
import Cite from 'citation-js';

// More info about Cite input formats in:
// https://citation.js.org/api/0.3/tutorial-input_formats.html
// References made with plain bibtex should be refactored
const CITE_INPUT=[
  /*ID 1: Cannot be cited, there is no .bib or doi reference */
  /*ID 2*/"https://oa.upm.es/cgi/export/eprint/67933/BibTeX/upm-eprint-67933.bib",
  /*ID 3*/"@article{PLN6437,author = {Carlos Badenes-Olmedo y Álvaro Alonso y Oscar Corcho},title = {An Overview of Drugs, Diseases, Genes and Proteins in the CORD-19 Corpus},journal = {Procesamiento del Lenguaje Natural},volume = {69},number = {0},year = {2022},keywords = {},abstract = {Several initiatives have emerged during the COVID-19 pandemic to gather scientific publications related to coronaviruses. Among them, the COVID-19 Open Research Dataset (CORD-19) has proven to be a valuable resource that provides full-text articles from the PubMed Central, bioRxiv and medRxiv repositories. Such a large amount of biomedical literature needs to be properly managed to facilitate and promote its use by health professionals, for example by tagging documents with the biomedical entities that appear on them. We created a biomedical named entity recognizer (NER) that normalizes (NEN) the drugs, diseases, genes and proteins mentioned in texts with the codes of the main standardization systems such as MeSH, ICD-10, ATC, SNOMED, ChEBI, GARD and NCBI. It is based on fine-tuning the BioBERT language model independently for each entity type using domain-specific datasets and an inverse index search to normalize the references. We have used the resultant BioNER+BioNEN system to process the CORD-19 corpus and offer an overview of the drugs, diseases, genes and proteins related to coronaviruses in the last fifty years.},issn = {1989-7553},url = {http://journal.sepln.org/sepln/ojs/ojs/index.php/pln/article/view/6437},pages = {165--176}}",
  /*ID 4: Cannot be cited, there is no .bib or doi reference */
  /*ID 5*/"https://oa.upm.es/cgi/export/eprint/71455/BibTeX/upm-eprint-71455.bib",
  /*ID 6*/"https://oa.upm.es/cgi/export/eprint/71427/BibTeX/upm-eprint-71427.bib",
  /*ID 7: Cannot be cited, there is no .bib or doi reference */
  /*ID 8: Cannot be cited, there is no .bib or doi reference */
  /*ID 9*/"https://oa.upm.es/cgi/export/eprint/70949/BibTeX/upm-eprint-70949.bib",
  /*ID 10*/"https://oa.upm.es/cgi/export/eprint/67901/BibTeX/upm-eprint-67901.bib",
  /*ID 11: Cannot be cited, No content */
  /*ID 12: Cannot be cited, No content */
  /*ID 13*/"10.48550/arXiv.2208.01093",
  /*ID 13*/"10.1007/978-3-031-17105-5_1",
  /*ID 13*/"10.1007/978-3-031-17105-5_2",
  /*ID 13*/"10.1007/978-3-031-17105-5_3",
  /*ID 13*/"10.1007/978-3-031-17105-5_4",
  /*ID 13*/"10.1007/978-3-031-17105-5_5",
  /*ID 13*/"10.1007/978-3-031-17105-5_6",
  /*ID 13*/"10.1007/978-3-031-17105-5_7",
  /*ID 13*/"10.1007/978-3-031-17105-5_8",
  /*ID 13*/"10.1007/978-3-031-17105-5_9",
  /*ID 13*/"10.1007/978-3-031-17105-5_10",
  /*ID 14*/"10.1007/978-3-031-17105-5_11",
  /*ID 13*/"10.1007/978-3-031-17105-5_12",
  /*ID 13*/"10.1007/978-3-031-17105-5_13",
  /*ID 13*/"10.1007/978-3-031-17105-5_14",
  /*ID 13*/"10.1007/978-3-031-17105-5_15",
  /*ID 13*/"10.1007/978-3-031-17105-5_16",
  /*Example*/"https://doi.org/10.48550/arXiv.2012.01953",
  /*Example*/"10.48550/arXiv.2208.01093",
 ]

export default {
  name: "PapersView",
  computed: {
    citationsData() {
      return new Cite(CITE_INPUT).data
    },
  }
}
</script>

<style scoped>

</style>
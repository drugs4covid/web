<template>
  <v-container>
    <v-card flat>
      <v-card-title v-text="$t('bioNLPView.title')"/>
      <v-card-subtitle v-text="$t('bioNLPView.subTitle')"/>

        <v-form>
          <v-textarea
              v-model="sampleTxt"
              @input="analyzeSample()">
          </v-textarea>
        </v-form>

        <br/>
        <div v-show="entities">
          <h2 style="text-align: center">{{ $t('bioNLPView.resultsTitle') }}</h2>

          <div v-show="sampleTxt" v-html="sampleHTML"></div>

          <br/>
          <v-data-table v-for="(table, index) in tableList"
                        :key="index"
                        :headers="table.headers"
                        :items="table.items"
                        v-show="table.items.length !== 0"
                        dense disable-filtering disable-pagination
                        disable-sort hide-default-footer
          >
            <template #top>
              <v-card-title v-text="table.title"></v-card-title>
            </template>
          </v-data-table>
        </div>
    </v-card>
  </v-container>
</template>

<script>
import axiosService from "@/service/axiosService";
export default {
  name: "BioNLPView",
  data: () => ({
    entities: null,
    sampleHTML: null,
    sampleTxt: "In the absence of sufficient medication for COVID patients due to the increased demand, disused drugs have been employed or the doses of those available were modified by hospital pharmacists. Some evidences for the use of alternative drugs can be found in the existing scientific literature that could assist in such decisions. However, exploiting large corpus of documents in an efficient manner is not easy, since drugs may not appear explicitly related in the texts and could be mentioned under different brand names. Drugs4Covid combines word embedding techniques and semantic web technologies to enable a drug-oriented exploration of large medical literature. Drugs and diseases are identified according to the ATC classification and MeSH categories respectively. More than 60K articles and 2M paragraphs have been processed from the CORD-19 corpus with information of COVID-19, SARS, and other related coronaviruses. An open catalogue of drugs has been created and results are publicly available through a drug browser, a keyword-guided text explorer, and a knowledge graph. ",
    tableList: [
      {
        title: "Diseases",
        entityName: "diseases",
        items: [],
        headers: [
          { text: "Term", value: "text_term", align: "start", sortable: false,},
          { text: "Found Term", value: "found_term"},
          { text: "Mesh ID", value: "mesh_id" },
          { text: "CUI", value: "cui" },
          { text: "ICD10", value: "ICD10_id" },
          { text: "Other IDs", value: "cross_references" },
          { text: "Semantic Type", value: "semantic_type" },
        ],
      },
      {
        title: "Drugs/Chemicals",
        entityName: "chemicals",
        items: [],
        headers: [
          { text: "Term", value: "text_term", align: "start", sortable: false,},
          { text: "Found Term", value: "found_term" },
          { text: "Mesh ID", value: "mesh_id" },
          { text: "CHEBI ID", value: "chebi_id" },
          { text: "ATC", value: "ATC" },
          { text: "ATC Level", value: "ATC_level" },
          { text: "Other IDs", value: "cross_references" },
          { text: "CID", value: "cid" },
        ],
      },
      {
        title: "Genetics",
        entityName: "genetics",
        items: [],
        headers: [
          { text: "Term", value: "text_term", align: "start", sortable: false,},
          { text: "Found Term", value: "found_term" },
          { text: "NCBIgene ID", value: "ncbi_gene_id" },
          { text: "UniProt ID", value: "uniprot_id" },
          { text: "NCBItaxon", value: "ncbi_taxon_id" },
          { text: "Other IDs", value: "cross_references" },
        ],
      },
      {
        title: "COVID-19",
        entityName: "covid",
        items: [],
        headers: [
          { text: "Term", value: "text_term", align: "start", sortable: false,},
          { text: "Found Term", value: "found_term" },
          { text: "EBI Reference", value: "ebi_reference" },
          { text: "Evidence", value: "evidence_url" },
          { text: "Target", value: "target_url" },
          { text: "COVID-19 Association Score", value: "association_score" },
          { text: "PR id", value: "PR_id" },
        ],
      },
    ],
  }),
  methods:{
    analyzeSample(){
      axiosService.bioNLPAnalyze(this.sampleTxt)
          .then(response =>{
            this.entities = response.data.entities
            this.tableList.map(table => {
              table.items = this.entities[table.entityName]
            })
            this.sampleHTML = response.data.html
          })
    },
  },

}
</script>

<style scoped>

</style>
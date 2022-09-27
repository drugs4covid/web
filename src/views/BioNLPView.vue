<template>
  <v-container>
    <v-card flat>
      <v-card-title v-text="$t('bioNLPView.title')"/>
      <v-card-subtitle v-text="$t('bioNLPView.subTitle')"/>

        <v-form>
          <v-textarea class="elevation-1"
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
              <v-card-title v-text="$t(table.title)"></v-card-title>
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
    sampleTxt: "",
    tableList: [
      {
        title: "bioNLPView.tableTitles.disease",
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
        title: "bioNLPView.tableTitles.chemicals",
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
        title: "bioNLPView.tableTitles.genetics",
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
        title: "bioNLPView.tableTitles.covid",
        entityName: "covid",
        items: [],
        headers: [
          { text: "Term", value: "text_term", align: "start", sortable: false,},
          { text: "Found Term", value: "found_term" },
          { text: "EBI Reference", value: "ebi_reference" },
          { text: "Evidence", value: "evidence_url" },
          { text: "Target", value: "target_url" },
          { text: "COVID-19 Association Score", value: "association_score" },
          { text: "PR ID", value: "PR_id" },
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
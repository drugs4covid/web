<template>
  <v-container>
    <v-card flat>
      <v-card-title v-text="$t('bioNER.title')"/>
      <v-card-subtitle v-text="$t('bioNER.subtitle')"/>

      <v-form>
        <v-textarea v-model="sampleTxt"
                    @input="analyzeSample()"
                    :placeholder="$t('bioNER.placeholder')"
                    outlined
        />
      </v-form>

        <br/>
        <div v-if="entities">
          <h2 style="text-align: center">{{ $t('bioNER.resultsTitle') }}</h2>

          <div v-show="sampleTxt" v-html="sampleHTML"></div>

          <br/>
          <div v-for="(table, index) in tableList"
               :key="index"
          >
            <v-data-table :headers="table.headers"
                          :items="table.items"
                          v-if="table.items.length !== 0"
                          dense disable-filtering disable-pagination
                          disable-sort hide-default-footer
            >
              <template #top>
                <v-card-title v-text="$t(table.title)"></v-card-title>
              </template>
            </v-data-table>
          </div>
        </div>
    </v-card>
  </v-container>
</template>

<script>
import axiosService from "@/service/axiosService";
import i18n from "@/i18n";

export default {
  name: "BioNERView",
  data: () => ({
    entities: null,
    sampleHTML: null,
    sampleTxt: "",
    tableList: [
      {
        title: "bioNER.tables.titles.disease",
        entityName: "diseases",
        items: [],
        headers: [
          { text: i18n.t("bioNER.tables.headers.term"), value: "text_term", align: "start", sortable: false,},
          { text: i18n.t("bioNER.tables.headers.foundTerm"), value: "found_term"},
          { text: i18n.t("bioNER.tables.headers.meshId"), value: "mesh_id" },
          { text: i18n.t("bioNER.tables.headers.cui"), value: "cui" },
          { text: i18n.t("bioNER.tables.headers.icd10"), value: "ICD10_id" },
          { text: i18n.t("bioNER.tables.headers.crossReferences"), value: "cross_references" },
          { text: i18n.t("bioNER.tables.headers.semanticType"), value: "semantic_type" },
        ],
      },
      {
        title: "bioNER.tables.titles.chemicals",
        entityName: "chemicals",
        items: [],
        headers: [
          { text: i18n.t("bioNER.tables.headers.term"), value: "text_term", align: "start", sortable: false,},
          { text: i18n.t("bioNER.tables.headers.foundTerm"), value: "found_term"},
          { text: i18n.t("bioNER.tables.headers.meshId"), value: "mesh_id" },
          { text: i18n.t("bioNER.tables.headers.chebiId"), value: "chebi_id" },
          { text: i18n.t("bioNER.tables.headers.atc"), value: "ATC" },
          { text: i18n.t("bioNER.tables.headers.atcLevel"), value: "ATC_level" },
          { text: i18n.t("bioNER.tables.headers.crossReferences"), value: "cross_references" },
          { text: i18n.t("bioNER.tables.headers.cid"), value: "cid" },
        ],
      },
      {
        title: "bioNER.tables.titles.genetics",
        entityName: "genetics",
        items: [],
        headers: [
          { text: i18n.t("bioNER.tables.headers.term"), value: "text_term", align: "start", sortable: false,},
          { text: i18n.t("bioNER.tables.headers.foundTerm"), value: "found_term"},
          { text: i18n.t("bioNER.tables.headers.ncbiGeneId"), value: "ncbi_gene_id" },
          { text: i18n.t("bioNER.tables.headers.uniprotId"), value: "uniprot_id" },
          { text: i18n.t("bioNER.tables.headers.ncbiTaxonId"), value: "ncbi_taxon_id" },
          { text: i18n.t("bioNER.tables.headers.crossReferences"), value: "cross_references" },
        ],
      },
      {
        title: "bioNER.tables.titles.covid",
        entityName: "covid",
        items: [],
        headers: [
          { text: i18n.t("bioNER.tables.headers.term"), value: "text_term", align: "start", sortable: false,},
          { text: i18n.t("bioNER.tables.headers.foundTerm"), value: "found_term"},
          { text: i18n.t("bioNER.tables.headers.ebiReference"), value: "ebi_reference" },
          { text: i18n.t("bioNER.tables.headers.evidence"), value: "evidence_url" },
          { text: i18n.t("bioNER.tables.headers.target"), value: "target_url" },
          { text: i18n.t("bioNER.tables.headers.associationScore"), value: "association_score" },
          { text: i18n.t("bioNER.tables.headers.prId")  , value: "PR_id" },
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
          .catch(error => {
            console.log(error)
          })
    },
  },

}
</script>

<style scoped>

</style>
<template>
  <v-container>
    <v-card min-width="325px">
      <v-autocomplete v-model="selection"
                      :items="resultsList"
                      :search-input.sync="searchInput"
                      :value="searchInput"
                      :placeholder="$t('searchEngineView.placeholder', {numChar:2})"
                      prepend-inner-icon="mdi-magnify"
                      hide-no-data hide-selected cache-items
                      auto-select-first return-object outlined
                      hide-details hide-spin-buttons autofocus
                      @update:search-input="inputHandler"
                      @input="hitHandler"
      ></v-autocomplete>
    </v-card>
  </v-container>
</template>

<script>
import axiosService from "@/service/axiosService";

const SOLR_CORE_ATC = "atc"
const SOLR_CORE_DISEASES = "diseases"

const TYPE_DRUG = "drug"
const TYPE_DISEASE = "disease"

export default {
  name: "SearchEngineInput",
  data: () => ({
    resultsList: [],
    searchInput: "",
    selection: null,
  }),
  methods:{
    fetchSolrData(core, query, fieldList, filterQuery, rows) {
      axiosService.solrQueryService(core, query, fieldList, filterQuery, rows)
          .then(response => {
            if(response.data.response.numFound !== 0){

              this.resultsList = response.data.response.docs.map(doc => {
                let item = {
                  text: null,
                  value: null,
                  type: null,
                }

                if(core === SOLR_CORE_DISEASES) item.type = TYPE_DISEASE
                if(core === SOLR_CORE_ATC) item.type = TYPE_DRUG

                for(let key in doc){
                  key === 'id' ? item.value = doc[key] : item.text = doc[key]
                }

                item.text = item.text ?? item.value

                return item
              }).concat(this.resultsList)

            }
          })
          .catch(error => {
            console.log(error)
          })
    },
    inputHandler(input){
      if(input && input.length === 2) {
        this.resultsList = []

        this.fetchSolrData(SOLR_CORE_ATC, "*", "id,id", "id:" + input + "*", 10)
        this.fetchSolrData(SOLR_CORE_ATC, "*", "id,label_t", "label_t:" + input + "*", 10)
        this.fetchSolrData(SOLR_CORE_DISEASES, "*", "id,id", "id:" + input + "*", 10)
        this.fetchSolrData(SOLR_CORE_DISEASES, "*", "id,name_t", "name_t:" + input + "*", 10)
      }
    },
    hitHandler(item){
      this.$emit("select", item)
    }
  },
}
</script>

<style scoped>

</style>
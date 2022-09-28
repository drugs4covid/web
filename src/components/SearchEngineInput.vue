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

const SOLR_CORES = [
  'atc',
  'diseases',
]

export default {
  name: "SearchEngineInput",
  data: () => ({
    resultsList: [],
    searchInput: "",
    selection: null,
  }),
  methods:{
    fetchSolrData(core, fieldList, filterQuery, query, rows) {
      axiosService.solrQueryService(core, fieldList, filterQuery, query, rows)
          .then(response => {
            if(response.data.response.numFound !== 0){

              this.resultsList = response.data.response.docs.map(doc => {
                let item = {text: null, value: null}

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

        this.fetchSolrData(SOLR_CORES[0], "id,id", "id:" + input + "*", "*", 10)
        this.fetchSolrData(SOLR_CORES[0], "id,label_t", "label_t:" + input + "*", "*", 10)
        this.fetchSolrData(SOLR_CORES[1], "id,id", "id:" + input + "*", "*", 10)
        this.fetchSolrData(SOLR_CORES[1], "id,name_t", "name_t:" + input + "*", "*", 10)
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
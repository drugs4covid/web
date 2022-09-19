<template>
  <b-container>
    <b-form>
      <b-form-text>Search Engine</b-form-text>
      <b-form-input list="input-list-search-engine"
                    v-model="inputText"
                    placeholder="Type at least 2 characters to start searching"
      >

      </b-form-input>
      <b-form-datalist id="input-list-search-engine"
                       :options="resultsList"
                       :text-field="resultsList"
      >
      </b-form-datalist>
    </b-form>
  </b-container>
</template>

<script>
import axiosService from "@/service/axiosService";

const SOLR_CORES = [
    'atc',
    'diseases',
]

export default {
  name: "SearchEngineView",
  data: () => ({
    inputText: "",
    resultsList: [],
  }),
  methods:{
    executeSolrQuery(core, fieldList, filterQuery, query, rows) {
      axiosService.solrQueryService(core, fieldList, filterQuery, query, rows)
          .then(response => {
            this.resultsList.push(response.data)
          })
    }
  },
  watch:{
    inputText(input){
      if(input.length >= 2){
        this.resultsList = []
        this.executeSolrQuery(SOLR_CORES[0], "id,id","id:" + input + "*", "*",10)
        this.executeSolrQuery(SOLR_CORES[0], "id,label_t","label_t:" + input + "*", "*",10)
        this.executeSolrQuery(SOLR_CORES[1], "id,id","id:" + input + "*", "*",10)
        this.executeSolrQuery(SOLR_CORES[1], "id,name_t","name_t:" + input + "*", "*",10)
      }
    }
  }
}
</script>

<style scoped>

</style>
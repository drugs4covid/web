<template>
  <b-container>
    <b-form>
      <b-form-text>Search Engine</b-form-text>

      <vue-bootstrap-typeahead class="text-left"
                               :placeholder="placeholder"
                               :data="resultsList"
                               v-model="inputText"
                               :serializer="item => item.name"
                               size="sm"
                               @hit="hitHandler"
      >
      </vue-bootstrap-typeahead>

    </b-form>
  </b-container>
</template>

<script>
import axiosService from "@/service/axiosService";
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'

const SOLR_CORES = [
    'atc',
    'diseases',
]

export default {
  name: "SearchEngineView",
  components:{
    VueBootstrapTypeahead
  },
  data: () => ({
    inputText: "",
    placeholder: "Type at least 2 characters to start searching",
    resultsList: [],
    selectedResult: null
  }),
  methods:{
    fetchSolrData(core, fieldList, filterQuery, query, rows) {
      axiosService.solrQueryService(core, fieldList, filterQuery, query, rows)
          .then(response => {
            if(response.data.response.numFound !== 0){
              this.resultsList = response.data.response.docs.map(item => {
                let obj = {id: null, name: null}
                for(let key in item){
                  key === 'id' ? obj.id = item[key] : obj.name = item[key]
                }
                obj.name = obj.name ?? obj.id
                return obj
              }).concat(this.resultsList)

            }
          })
    },
    hitHandler(item){
      let type = "drug"
      let url = "https://search.drugs4covid.oeg-upm.net/search/"
      if(item.id.charAt(0) === 'D') {
        type = "disease"
      }

      window.location.href = url.concat(type,'/',item.id);
    }
  },
  watch:{
    inputText(newInput){
      if(newInput.length === 2) {
        this.resultsList = []
        this.fetchSolrData(SOLR_CORES[0], "id,id", "id:" + newInput + "*", "*", 10)
        this.fetchSolrData(SOLR_CORES[0], "id,label_t", "label_t:" + newInput + "*", "*", 10)
        this.fetchSolrData(SOLR_CORES[1], "id,id", "id:" + newInput + "*", "*", 10)
        this.fetchSolrData(SOLR_CORES[1], "id,name_t", "name_t:" + newInput + "*", "*", 10)
      }
    }
  }
}
</script>

<style scoped>

</style>
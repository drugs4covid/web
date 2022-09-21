<template>
  <b-container>
    <vue-typeahead-bootstrap class="text-left"
                             :placeholder="$t('searchEngineView.placeholder')"
                             :data="resultsList"
                             :serializer="item => item.name"
                             v-model="input"
                             size="sm"
                             @hit="hitHandler"
                             @input="inputHandler"
    >
    </vue-typeahead-bootstrap>
  </b-container>
</template>

<script>
import axiosService from "@/service/axiosService";
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';

const SOLR_CORES = [
  'atc',
  'diseases',
]

export default {
  name: "SearchEngineInput",
  components:{
    VueTypeaheadBootstrap
  },
  data: () => ({
    resultsList: [],
    input: "",
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
    inputHandler(input){
      if(input.length === 2) {
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
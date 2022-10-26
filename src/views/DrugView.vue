<template>
  <v-container>
    <v-card flat>
      <bio-search-input @select="selectHandler"/>
      <v-card-title>
        {{title}}
      </v-card-title>
      <v-card-subtitle>
        {{subtitle}}
      </v-card-subtitle>
      <v-card-text>
        {{data}}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import axiosService from "@/service/axiosService";
import BioSearchInput from "@/components/BioSearchInput";
import store from "@/store";

const SOLR_CORE_ATC = store.state.solrCores.atc

export default {
  name: "DrugView",
  components: {BioSearchInput},
  data: () => ({
    data: null,
    title: "",
  }),
  computed: {
    id(){
      return this.$route.params.id
    },
    type(){
      return this.$route.name
    },
  },
  methods: {
    selectHandler(selection) {
      this.fetchData(selection.type, selection.id)
    },
    fetchData(type, id){
      axiosService.solrQueryService(SOLR_CORE_ATC,'*',null, "id:" + id)
          .then(response => {
            if(response.data.response.docs.length === 1){
              this.data = response.data.response.docs
              this.title = this.data[0]["label_t"].charAt(0).toUpperCase()
                  + this.data[0]["label_t"].substring(1)
            }
            else{
              console.log(response.data)
            }
          })
          .catch(error => {
            console.log(error)
          })
    }

  },
  created() {
    this.$watch(
        () => this.$route.params,
        () => {this.fetchData(this.type, this.id)},
        {immediate: true}
    )
  }
}
</script>

<style scoped>

</style>
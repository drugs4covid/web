<template>
  <v-container>
    <v-card flat>
      <v-card-title v-text="$t('disease.title')"/>
      <v-card-subtitle v-text="$t('disease.code')"/>
      {{ disease }}
    </v-card>
  </v-container>
</template>

<script>
import axiosService from "@/service/axiosService";
import store from "@/store";

const SOLR_CORE_DISEASES = store.state.solrCores.atc

export default {
  name: "DiseaseView",
  computed: {
    id(){
      return this.$route.params.id
    }
  },
  data: () => ({
    disease: null
  }),
  methods: {
    fetchDisease(id){
      axiosService.solrQueryService(SOLR_CORE_DISEASES,'*',null, "id:" + id)
          .then(response => {
            this.disease = response.data
          })
          .catch(error => {
            console.log(error)
          })
    }

  },
  created() {
    this.fetchDisease(this.id)
  }
}
</script>

<style scoped>

</style>
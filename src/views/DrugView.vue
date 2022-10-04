<template>
  <v-container>
    <v-card flat>
      <v-card-title v-text="$t('drug.title')"/>
      <v-card-subtitle v-text="$t('drug.code')"/>
      {{ drug }}
    </v-card>
  </v-container>
</template>

<script>
import axiosService from "@/service/axiosService";

const SOLR_CORE_ATC = "atc"

export default {
  name: "DrugView",
  computed: {
     id(){
       return this.$route.params.id
     }
  },
  data: () => ({
    drug: null
  }),
  methods: {
    fetchDrug(id){
      axiosService.solrQueryService(SOLR_CORE_ATC,'*',null, "id:" + id)
          .then(response => {
            this.drug = response.data
          })
          .catch(error => {
            console.log(error)
          })
    }

  },
  created() {
    this.fetchDrug(this.id)
  }
}
</script>

<style scoped>

</style>
<template>
  <v-container>
    <v-card class="border-0">
      <v-card-title>Search Engine</v-card-title>
      <search-engine-input @select="selectHandler"/>
    </v-card>
  </v-container>
</template>

<script>
import SearchEngineInput from "@/components/SearchEngineInput";
export default {
  name: "SearchEngineView",
  components: {SearchEngineInput},

  methods:{
    selectHandler(item){
      let type = "drug"
      let url = "https://search.drugs4covid.oeg-upm.net/search/"
      if(item.value.charAt(0) === 'D') {
        type = "disease"
      }

      window.location.href = url.concat(type,'/',item.value);
    }
  }
}
</script>

<style scoped>

</style>
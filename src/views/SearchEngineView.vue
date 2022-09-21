<template>
  <b-container>
    <b-card class="border-0">
      <b-card-title>Search Engine</b-card-title>
      <search-engine-input @select="selectHandler"/>
    </b-card>
  </b-container>
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
      if(item.id.charAt(0) === 'D') {
        type = "disease"
      }

      window.location.href = url.concat(type,'/',item.id);
    }
  }
}
</script>

<style scoped>

</style>
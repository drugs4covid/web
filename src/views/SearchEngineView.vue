<template>
  <v-container>
    <v-card flat>
      <v-card-title v-text="$t('searchEngineView.title')"/>
      <v-card-subtitle v-text="$t('searchEngineView.subtitle')"/>
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
      this.$router.push({
        name: "search-" + item.type,
        params: {id: item.value}})
    }
  }
}
</script>

<style scoped>

</style>
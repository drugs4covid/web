<template>
  <v-container>
    <v-card flat>
      <v-card-title v-text="$t('bioSearch.title')"/>
      <v-card-subtitle v-text="$t('bioSearch.subtitle')"/>
      <bio-search-input redirect/>
    </v-card>
  </v-container>
</template>

<script>
import BioSearchInput from "@/components/BioSearchInput";
export default {
  name: "BioSearchView",
  components: {BioSearchInput},

}
</script>

<style scoped>

</style>
<template>
  <v-container>
    <v-card flat>
      <v-card-title v-text="$t('disease.title')"/>
      <v-card-subtitle v-text="$t('disease.code')"/>
      {{ id }}
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "DiseaseView",
  computed: {
    id(){
      return this.$route.params.id
    }
  }
}
</script>

<style scoped>

</style>
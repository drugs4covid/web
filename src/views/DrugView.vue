<template>
  <v-container>
    <v-card flat>
      <v-card-title v-text="$t('drug.title')"/>
      <v-card-subtitle v-text="$t('drug.code')"/>
      {{ id }}
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "DrugView",
  computed: {
     id(){
       return this.$route.params.id
     }
  }
}
</script>

<style scoped>

</style>
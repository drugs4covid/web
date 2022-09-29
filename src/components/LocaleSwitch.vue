<template>
  <v-btn icon @click="switchLocale">
    <v-icon>mdi-earth</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "LocaleSwitch",
  data: () =>({
    locales: ["en", "es"]
  }),
  methods: {
    switchLocale(){
      this.$i18n.locale = this.locales.find(locale => locale !== this.$i18n.locale)
    }
  }
}
</script>

<style scoped>

</style>
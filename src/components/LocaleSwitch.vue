<template>
  <div>
    <v-btn icon @click="switchLocale">
      <v-icon>mdi-earth</v-icon>
      {{$i18n.locale}}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "LocaleSwitch",
  methods: {
    switchLocale(){
      this.$i18n.locale = this.$i18n.availableLocales
          .find(locale => locale !== this.$i18n.locale)

      this.$emit("locale", this.$i18n.locale)
    }
  }
}
</script>

<style scoped>

</style>
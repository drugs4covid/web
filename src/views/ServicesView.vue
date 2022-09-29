<template>
  <v-container>
    <v-card flat class="text-center">
      <h1 class="text-center" v-text="$t('services.title')"/>
      <span v-text="$t('services.header')"/>

      <v-container>
        <v-row>

          <v-col v-for="(card, index) in cardItems"
                 :key="index"
          >
            <v-card>
              <v-card-title v-text="$t(card.title)"/>
              <v-card-subtitle v-text="$t(card.subtitle)"/>
              <v-card-text v-text="$t(card.text)"/>
              <v-card-actions>
                <v-btn v-text="$t(card.btnText)"
                       :to="card.to"
                />
              </v-card-actions>
            </v-card>
          </v-col>

        </v-row>
      </v-container>

    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ServicesView",
  data: () =>({
    cardItems: [
      {
        title: "services.bioNER.title",
        subtitle: "services.bioNER.subtitle",
        text: "services.bioNER.text",
        btnText: "services.bioNER.btnText",
        to: "/services/bio-nlp",
      },
      {
        title: "services.bioSearch.title",
        subtitle: "services.bioSearch.subtitle",
        text: "services.bioSearch.text",
        btnText: "services.bioSearch.btnText",
        to: "/services/search-engine",
      },
      {
        title: "services.bioQA.title",
        subtitle: "services.bioQA.subtitle",
        text: "services.bioQA.text",
        btnText: "services.bioQA.btnText",
        to: "/services/qa",
      },
    ],

  })

}
</script>

<style scoped>

</style>
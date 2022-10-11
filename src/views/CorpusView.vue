<template>
  <v-container>
    <v-card flat class="text-center">
      <h1 class="text-center" v-text="$t('corpus.title')"/>
      <span v-text="$t('corpus.header')"/>

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
                       :to="{name: card.to}"
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
  name: "CorpusView",
  data: () =>({
    cardItems: [
      {
        title: "corpus.textSearch.title",
        subtitle: "corpus.textSearch.subtitle",
        text: "corpus.textSearch.text",
        btnText: "corpus.textSearch.btnText",
        to: "text-search"
      },
      {
        title: "corpus.repository.title",
        subtitle: "corpus.repository.subtitle",
        text: "corpus.repository.text",
        btnText: "corpus.repository.btnText",
        to: "repository"
      },
      {
        title: "corpus.keyQ.title",
        subtitle: "corpus.keyQ.subtitle",
        text: "corpus.keyQ.text",
        btnText: "corpus.keyQ.btnText",
        to: "keyQ"
      },
    ],

  })

}
</script>

<style scoped>

</style>
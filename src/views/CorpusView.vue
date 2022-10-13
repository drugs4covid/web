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
              <v-card-title>
                {{$t(card.title)}}
                <v-spacer/>
                <v-btn icon plain v-show="card.code" :href="card.code">
                  <v-icon color="#c9510c">mdi-github</v-icon>
                </v-btn>
                <v-btn icon plain v-show="card.librairy" :href="card.librairy">
                  <v-icon color="#C69E54">mdi-book-open-variant</v-icon>
                </v-btn>
              </v-card-title>
              <v-card-text class="text-justify" v-html="$t(card.text)"/>
              <v-card-actions v-if="card.btnText">
                <v-spacer/>
                <v-btn v-text="$t(card.btnText)"
                       :to="{name: card.to}"
                       color="primary" outlined
                />
                <v-spacer/>
              </v-card-actions>
              <v-card-actions v-else-if="card.btnTextList">
                <v-col>
                  <v-btn v-for="(btn, index) in card.btnTextList"
                         :key="index"
                         v-text="$t(btn.text)"
                         :to="{name: card.to, params:{solrCore: btn.to}}"
                         color="primary" outlined label
                         style="margin: 5px"
                  />
                </v-col>
              </v-card-actions>
            </v-card>
          </v-col>

        </v-row>
      </v-container>

    </v-card>
  </v-container>
</template>

<script>
import store from "@/store/index.js"

export default {
  name: "CorpusView",
  data: () =>({
    cardItems: [
      {
        title: "corpus.textSearch.title",
        subtitle: "corpus.textSearch.subtitle",
        text: "corpus.textSearch.text",
        btnText: "corpus.textSearch.btnText",
        to: "text-search",
        code: store.state.textSearch.github,
        librairy: store.state.textSearch.librairy
      },
      {
        title: "corpus.repository.title",
        subtitle: "corpus.repository.subtitle",
        text: "corpus.repository.text",
        to: "repository",
        btnTextList: [
          {
            text: "corpus.repository.btnDiseases",
            to: store.state.repository.solrDrugs
          },
          {
            text: "corpus.repository.btnDrugs",
            to: store.state.repository.solrDrugs
          },
          {
            text: "corpus.repository.btnGenes",
            to: store.state.repository.solrGenes
          },
          {
            text: "corpus.repository.btnPapers",
            to: store.state.repository.solrPapers
          },
          {
            text: "corpus.repository.btnParagraphs",
            to: store.state.repository.solrParagraphs
          },
        ],
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
<template>
  <v-container>
    <v-card flat class="text-center">
      <h1 class="text-center" v-text="$t('corpus.title')"/>
      <span v-text="$t('corpus.header')"/>

      <v-container>
        <v-row>

          <v-col v-for="(card, index) in cardItems"
                 :key="index"
                 cols="12"
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

              <v-card-actions v-if="card.to==='repository'">
                <v-col>
                  <v-btn v-for="(btn, index) in card.btnList"
                         :key="index"
                         v-text="$t(btn.text)"
                         :href="btn.href"
                         color="primary" outlined label
                         style="margin: 5px"
                  />
                </v-col>
              </v-card-actions>

              <v-card-actions v-else-if="card.to==='keyQ'">
                <v-spacer/>
                <v-btn v-text="$t(card.btnText)"
                       :href="card.href"
                       color="primary" outlined
                />
                <v-spacer/>
              </v-card-actions>

              <v-card-actions v-else>
                <v-spacer/>
                <v-btn v-text="$t(card.btnText)"
                       :to="{name: card.to}"
                       color="primary" outlined
                />
                <v-spacer/>
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
        code: store.state.links.github.bioNlp,
        librairy: store.state.links.librairy.covid19Model
      },
      {
        title: "corpus.repository.title",
        subtitle: "corpus.repository.subtitle",
        text: "corpus.repository.text",
        to: "repository",
        btnList: [
          {
            text: "corpus.repository.btnDiseases",
            href: store.state.links.librairy.solr.diseases
          },
          {
            text: "corpus.repository.btnDrugs",
            href: store.state.links.librairy.solr.drugs
          },
          {
            text: "corpus.repository.btnGenes",
            href: store.state.links.librairy.solr.genes
          },
          {
            text: "corpus.repository.btnPapers",
            href: store.state.links.librairy.solr.papers
          },
          {
            text: "corpus.repository.btnParagraphs",
            href: store.state.links.librairy.solr.paragraphs
          },
        ],
      },
      {
        title: "corpus.keyQ.title",
        subtitle: "corpus.keyQ.subtitle",
        text: "corpus.keyQ.text",
        btnText: "corpus.keyQ.btnText",
        to: "keyQ",
        href: store.state.links.d4c.keyQ
      },
    ],

  })

}
</script>

<style scoped>

</style>
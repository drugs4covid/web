<template>
  <v-container>
    <v-card flat class="text-center">
      <h1 class="text-center" v-text="$t('knowledgeGraph.title')"/>
      <span v-text="$t('knowledgeGraph.header')"/>

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
                <v-btn icon plain v-show="card.huggingFace" :href="card.huggingFace">
                  <v-icon color="#FFD21E">mdi-emoticon-excited</v-icon>
                </v-btn>
              </v-card-title>
              <v-card-text class="text-justify" v-html="$t(card.text)"/>
              <v-card-actions>
                <v-spacer/>
                <v-btn v-text="$t(card.btnText)"
                       :to="{name: card.to}"
                       color="primary" outlined
                />
                <v-spacer/>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12">
            <div class="h_iframe">
              <iframe :src=$store.state.links.d4c.ontology
                      allowfullscreen id="iframe" loading="lazy"
              />
            </div>
          </v-col>

        </v-row>
      </v-container>

    </v-card>
  </v-container>
</template>

<script>
import store from "@/store/index.js"

export default {
  name: "KnowledgeGraphView",
  data: () =>({
    cardItems: [
      {
        title: "knowledgeGraph.rdf.title",
        subtitle: "knowledgeGraph.rdf.subtitle",
        text: "knowledgeGraph.rdf.text",
        btnText: "knowledgeGraph.rdf.btnText",
        to: "rdf",
        code: store.state.links.github.rdf
      },
      {
        title: "knowledgeGraph.sparql.title",
        subtitle: "knowledgeGraph.sparql.subtitle",
        text: "knowledgeGraph.sparql.text",
        btnText: "knowledgeGraph.sparql.btnText",
        to: "sparql",
        code: store.state.links.github.sparql
      },
    ],

  })

}
</script>

<style scoped>
#iframe{
  height: 1650px;
}
.h_iframe iframe {
  width: 100%;
  height: 100%;
}
.h_iframe {
  height: 100%;
  width: 100%;
}
</style>
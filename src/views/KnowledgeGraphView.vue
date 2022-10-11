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

          <v-col cols="12">
            <div class="h_iframe">
              <iframe :src=$store.state.externalLink.ontology
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
export default {
  name: "KnowledgeGraphView",
  data: () =>({
    cardItems: [
      {
        title: "knowledgeGraph.rdf.title",
        subtitle: "knowledgeGraph.rdf.subtitle",
        text: "knowledgeGraph.rdf.text",
        btnText: "knowledgeGraph.rdf.btnText",
        to: "rdf"
      },
      {
        title: "knowledgeGraph.sparql.title",
        subtitle: "knowledgeGraph.sparql.subtitle",
        text: "knowledgeGraph.sparql.text",
        btnText: "knowledgeGraph.sparql.btnText",
        to: "sparql"
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
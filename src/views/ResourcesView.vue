<template>
  <v-container>
    <v-card flat class="text-center">
      <h1 class="text-center" v-text="$t('resources.title')"/>
      <span v-text="$t('resources.header')"/>

      <v-container>
        <v-row>

          <v-col v-for="(card, index) in cardItems"
                 :key="index"
          >
            <v-card>
              <v-card-title>
                {{$t(card.title)}}

              </v-card-title>
              <v-card-text class="text-justify" v-html="$t(card.text)"/>

              <v-card-actions v-if="card.to==='notebooks'">
                <v-col>
                  <v-btn v-for="(btn, index) in card.btnList"
                         :key="index"
                         :href="btn.href"
                         v-text="$t(btn.text)"
                         color="primary" outlined label
                         style="margin: 5px"
                  />
                </v-col>
              </v-card-actions>

              <v-card-actions v-else-if="card.to==='code'">
                <v-spacer/>
                <v-btn icon plain :href="card.href">
                  <v-icon large color="#c9510c">mdi-github</v-icon>
                </v-btn>
                <v-spacer/>
              </v-card-actions>

              <v-card-actions v-else-if="card.to==='annotatedCorpus'">
                <v-spacer/>
                <v-btn v-text="$t(card.btnText)"
                       :href="card.href"
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
  name: "ResourcesView",
  data: () =>({
    cardItems: [
      {
        title: "resources.code.title",
        text: "resources.code.text",
        btnText: "resources.code.btnText",
        to: "code",
        href: store.state.links.github.d4c
      },
      {
        title: "resources.notebooks.title",
        text: "resources.notebooks.text",
        to: "notebooks",
        btnList: [
          {
            text: "resources.notebooks.sources.cord19Indexing.title",
            href: store.state.links.github.notebooks.cord19Indexing
          },
          {
            text: "resources.notebooks.sources.atcProcessing.title",
            href: store.state.links.github.notebooks.atcProcessing
          },
          {
            text: "resources.notebooks.sources.meshProcessing.title",
            href: store.state.links.github.notebooks.meshProcessing
          },
        ],
      },
      {
        title: "resources.annotatedCorpus.title",
        text: "resources.annotatedCorpus.text",
        btnText: "resources.annotatedCorpus.btnText",
        to: "annotatedCorpus",
        href: null
      },
    ],

  })

}
</script>

<style scoped>

</style>
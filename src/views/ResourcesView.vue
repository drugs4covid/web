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

              <v-card-actions v-if="card.to==='code'">
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
        btnText: "resources.notebooks.btnText",
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
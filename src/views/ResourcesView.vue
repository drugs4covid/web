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

        </v-row>
      </v-container>

    </v-card>
  </v-container>
</template>

<script>
//import store from "@/store/index.js"

export default {
  name: "ResourcesView",
  data: () =>({
    cardItems: [
      {
        title: "resources.code.title",
        text: "resources.code.text",
        btnText: "resources.code.btnText",
        to: "code",
      },
      {
        title: "resources.notebooks.title",
        text: "resources.notebooks.text",
        btnText: "resources.notebooks.btnText",
        to: "notebooks",
      },
      {
        title: "resources.annotatedCorpus.title",
        text: "resources.annotatedCorpus.text",
        btnText: "resources.annotatedCorpus.btnText",
        to: "annotatedCorpus",
      },
    ],

  })

}
</script>

<style scoped>

</style>
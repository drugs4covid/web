<template>
  <v-container>
    <v-card flat class="text-center">
      <h1 class="text-center" v-text="$t('services.title')"/>
      <span v-text="$t('services.header')"/>

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
import store from "@/store/index.js"

export default {
  name: "ServicesView",
  data: () =>({
    cardItems: [
      {
        title: "services.bioNER.title",
        text: "services.bioNER.text",
        btnText: "services.bioNER.btnText",
        to: "bio-ner",
        code: store.state.links.github.bioNer,
        huggingFace: store.state.links.huggingFace.bioBert
      },
      {
        title: "services.bioSearch.title",
        text: "services.bioSearch.text",
        btnText: "services.bioSearch.btnText",
        to: "bio-search",
        code: store.state.links.github.bioNlp
      },
      {
        title: "services.bioQA.title",
        text: "services.bioQA.text",
        btnText: "services.bioQA.btnText",
        to: "bio-qa",
        code: store.state.links.github.bioQa
      },
    ],
  })
}
</script>

<style scoped>

</style>
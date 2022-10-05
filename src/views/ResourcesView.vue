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
  name: "ResourcesView",
  data: () =>({
    cardItems: [
      {
        title: "resources.code.title",
        subtitle: "resources.code.subtitle",
        text: "resources.code.text",
        btnText: "resources.code.btnText",
        to: "/resources/code",
      },
      {
        title: "resources.notebooks.title",
        subtitle: "resources.notebooks.subtitle",
        text: "resources.notebooks.text",
        btnText: "resources.notebooks.btnText",
        to: "/resources/notebooks",
      },
      {
        title: "resources.papers.title",
        subtitle: "resources.papers.subtitle",
        text: "resources.papers.text",
        btnText: "resources.papers.btnText",
        to: "/resources/papers",
      },
    ],

  })

}
</script>

<style scoped>

</style>
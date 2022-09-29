<template>
  <v-container>
    <v-card flat class="text-center">
      <h1 class="text-center" v-text="$t('services.title')"/>
      <span v-text="$t('services.header')"/>

      <v-container>
        <v-row>

          <v-col v-for="(service, index) in services"
                 :key="index"
          >
            <v-card>
              <v-card-title v-text="$t(service.title)"/>
              <v-card-subtitle v-text="$t(service.subtitle)"/>
              <v-card-text v-text="$t(service.text)"/>
              <v-card-actions>
                <v-btn v-text="$t(service.btnText)"
                       :to="service.to"
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
  name: "ServicesView",
  data: () =>({
    services: [
      {
        title: "services.bioNER.title",
        subtitle: "services.bioNER.subtitle",
        text: "services.bioNER.text",
        btnText: "services.bioNER.btnText",
        to: "/services/bio-nlp",
      },
      {
        title: "services.bioSearch.title",
        subtitle: "services.bioSearch.subtitle",
        text: "services.bioSearch.text",
        btnText: "services.bioSearch.btnText",
        to: "/services/search-engine",
      },
      {
        title: "services.bioQA.title",
        subtitle: "services.bioQA.subtitle",
        text: "services.bioQA.text",
        btnText: "services.bioQA.btnText",
        to: "/services/qa",
      },
    ],

  })

}
</script>

<style scoped>

</style>
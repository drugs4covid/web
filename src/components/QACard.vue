<template>
  <v-container>
    <v-card>
      <v-card-title v-text="question"/>
      <v-card-subtitle v-text="answer"/>
        Type: {{type}}
        Confidence {{confidence}}
      <v-card-text v-text="evidence"/>

    </v-card>
  </v-container>
</template>

<script>

export default {
  name: "QACard",
  props: {
    question: String,
    answer: {
      default: "",
    },
    type: {
      type: String,
      default: "Literal"
    },
    confidence: {
      type: Number,
      default: 0,
    },
    evidence:{
      type: String,
      default: ""
    }

  },
}
</script>

<style scoped>

</style>
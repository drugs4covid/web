<template>
  <v-container>
    <v-card>

      <v-card-title v-text="question"/>
      <v-card-subtitle>
        <h2 id="answer" v-text="answer"/>
        <v-subheader v-text="$t('label.type') + ': ' + type"/>
        <v-subheader v-text="$t('label.confidence') + ': ' + confidence"/>
      </v-card-subtitle>
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
#answer{
  color: olivedrab;

}
</style>
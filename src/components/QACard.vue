<template>
  <v-container>
    <v-card>

      <v-card-title v-text="question"/>
      <v-card-subtitle>
        <h2 id="answer" v-text="answer"/>
        <v-subheader v-text="$t('label.type') + ': ' + type"/>
        <v-subheader v-text="$t('label.confidence') + ': ' + confidence"/>
      </v-card-subtitle>
      <v-card-text v-html="body"/>

    </v-card>
  </v-container>
</template>

<script>
const EVIDENCE_TYPE_LITERAL = "literal"
const EVIDENCE_TYPE_NUMBER = "number"
const EVIDENCE_TYPE_BOOL = "bool"

export default {
  name: "QACard",
  props: {
    question: String,
    answer: {
      default: "",
    },
    type: {
      type: String,
      default: EVIDENCE_TYPE_LITERAL || EVIDENCE_TYPE_NUMBER || EVIDENCE_TYPE_BOOL
    },
    confidence: {
      type: Number,
      default: 0,
    },
    evidence:{
      type: String,
      default: ""
    },
    start: Number,
    end: Number,
  },
  computed:{
    body(){
      if(this.type === EVIDENCE_TYPE_LITERAL){
        return this.evidence.substring(0, this.start) + '<mark>' +
            this.evidence.substring(this.start, this.end) + '</mark>' +
            this.evidence.substring(this.end, this.evidence.length)
      }
      return this.evidence
    }
  },
}
</script>

<style scoped>
#answer{
  color: olivedrab;
}
</style>
<template>
  <v-container>
    <v-card flat>
      <v-card-title v-text="$t('qaView.title')"/>
      <v-card-subtitle v-text="$t('qaView.subtitle')"/>

      <v-row>
        <v-col>
          <v-text-field v-model="question"
                        outlined
          />
        </v-col>
        <v-col>
          <v-subheader v-text="$t('qaView.maxAnswers')"/>
          <v-slider
              v-model="maxAnswers"
              thumb-label
              min="1"
              max="10"
          />
        </v-col>
      </v-row>

      <v-btn @click="askQuestion(question,maxAnswers)">TEST</v-btn>

      <div v-for="(answer, index) in answerList"
           :key="index"
      >
        <q-a-card :question="question"
                  :answer="answer.answer"
                  :type="answer.type"
                  :confidence="answer.confidence"
                  :evidence="answer.evidence"
        />
      </div>

    </v-card>
  </v-container>
</template>

<script>
import axiosService from "@/service/axiosService";
import QACard from "@/components/QACard";

export default {
  name: "QAView",
  components: {
    QACard
  },
  data: () => ({
    answerList: [],
    question: "What symptoms are associated with coronavirus?",
    maxAnswers: 1,
  }),
  methods:{
    askQuestion(question, maxAnswer){
      axiosService.qaAnswers(question, maxAnswer, false, false, true)
          .then(response => {
            this.answerList = response.data
          })
          .catch(error => {
            console.log(error)
          })
    }
  },
}
</script>

<style scoped>

</style>
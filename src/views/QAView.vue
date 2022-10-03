<template>
  <v-container>
    <v-card flat>
      <v-card-title v-text="$t('qaView.title')"/>
      <v-card-subtitle v-text="$t('qaView.subtitle')"/>

      <v-container>
        <v-row justify="center" align-content="center">

          <v-col cols="11">
            <v-text-field v-model="question"
                          :placeholder="$t('qaView.placeholder')"
                          outlined hide-details
            >
            </v-text-field>
          </v-col>

          <v-col cols="1">
            <v-btn height="56px"
                   :loading="loading"
                   outlined
                   @click="askQuestion(question,maxAnswers)"
            >
              <v-icon size="xx-large">mdi-chat-question-outline</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="12">
            <v-slider
                v-model="maxAnswers"
                class="align-center"
                max="25"
                min="1"
                hide-details
                :label="$t('qaView.maxAnswers')"
            >
              <template v-slot:append>
                <v-text-field
                    v-model="maxAnswers"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-col>

          <v-col>
            <v-row justify="center" align-content="center">
              <v-checkbox v-model="useD4C" label="D4c"
                          hide-details
              />
              <v-checkbox v-model="useDBPedia" label="DB Pedia"
                          hide-details hide-spin-buttons
              />
              <v-checkbox v-model="useWiki" label="Wikidata"
                          hide-details hide-spin-buttons
              />
            </v-row>
          </v-col>

        </v-row>
      </v-container>


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
    useWiki: false,
    useDBPedia: false,
    useD4C: true,
    loading: false
  }),
  methods:{
    askQuestion(){
      this.loading = true
      axiosService.qaAnswers(this.question, this.maxAnswers, this.useWiki, this.useDBPedia, this.useD4C)
          .then(response => {
            this.answerList = response.data
          })
          .catch(error => {
            console.log(error)
          })
          .finally(() => {
            this.loading = false
          })
    }
  },
}
</script>

<style scoped>

</style>
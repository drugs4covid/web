<template>
  <v-container>
    <v-card flat>
      <v-card-title v-text="$t('bioQA.title')"/>
      <v-card-subtitle v-text="$t('bioQA.subtitle')"/>

      <v-container>
        <v-form ref="form">

          <!-- QA Input -->
          <v-row align-content="center" class="mx-0">
              <v-text-field v-model="input"
                            :placeholder="$t('bioQA.placeholder')"
                            :rules="rules.input"
                            outlined
              >
                <template #append-outer>
                  <v-btn height="56px" width="56px"
                         class="search-btn"
                         :loading="loading"
                         outlined
                         @click="clickAskHandler"
                  >
                    <v-icon size="xx-large">mdi-chat-question-outline</v-icon>
                  </v-btn>
                </template>
              </v-text-field>
          </v-row>

          <!-- Source Checkboxes -->
          <v-row style="height: 50px" align-content="center" class="mx-0">
            <span class="v-label theme--light ml-0 pl-0"
                         v-text="$t('bioQA.subheader2')+':'"
            />
            <v-row justify="space-around" align-content="center">

              <v-checkbox v-model="useD4C"
                          class="my-0 py-0"
                          :label="$t('bioQA.d4c')"
                          :rules="rules.resource"
                          hide-spin-buttons hide-details
              />
              <v-checkbox v-model="useDBPedia"
                          class="my-0 py-0"
                          :label="$t('bioQA.dbPedia')"
                          :rules="rules.resource"
                          hide-spin-buttons hide-details
              />
              <v-checkbox v-model="useWiki"
                          class="my-0 py-0"
                          :label="$t('bioQA.wikidata')"
                          :rules="rules.resource"
                          hide-spin-buttons hide-details
              />
            </v-row>
          </v-row>

          <!-- Max Answers -->
          <v-row style="height: 50px" class="mx-0">
            <v-slider v-model="maxAnswers.value"
                      :max="maxAnswers.max"
                      :min="maxAnswers.min"
                      :label="$t('bioQA.subheader1')+':'"
            >
            </v-slider>
            <v-text-field v-model="maxAnswers.value"
                          :rules="rules.maxAnswers"
                          type="number"
                          class="mt-0 pt-0"
                          style="max-width: 75px"
                          dense
            />
          </v-row>

        </v-form>
      </v-container>

      <q-a-card v-for="(answer, index) in answerList"
                v-show="!loading"
                :key="index"
                :question="question"
                :answer="answer.answer"
                :type="answer.type"
                :confidence="answer.confidence"
                :evidence="answer.evidence"
                :start="answer.start"
                :end="answer.end"
      />

    </v-card>
  </v-container>
</template>

<script>
import axiosService from "@/service/axiosService";
import QACard from "@/components/QACard";

export default {
  name: "BioQAView",
  components: {
    QACard
  },
  data: () => ({
    answerList: [],
    input: "What traditional medicine has been used to treat Covid-19?",
    question: "",
    maxAnswers: {
      max: 25,
      min: 1,
      value: 3,
    },
    useWiki: true,
    useDBPedia: true,
    useD4C: true,
    loading: false,
  }),
  computed: {
   rules() {
      return {
        input: [
          v => !!v || this.$t("error.validation.required"),
        ],
        maxAnswers: [
          v => (this.maxAnswers.min <= v && v <= this.maxAnswers.max)
              || this.$t("error.validation.outOfRange", {min: this.maxAnswers.min, max: this.maxAnswers.max}),
        ],
        resource: [
          this.useWiki || this.useD4C || this.useDBPedia
        ],
      }
    }
  },
  methods:{
    clickAskHandler(){
      if (!this.$refs.form.validate()) {
        setTimeout(() => {this.$refs.form.resetValidation();}, 5000);
      }
      else{
        this.loading = true
        this.question = this.input

        this.askQuestion(this.question, this.maxAnswers.value, this.useWiki, this.useDBPedia, this.useD4C)
      }
   },
    askQuestion(question, maxAnswers, useWiki, useDBPedia, useD4C){
      axiosService.qaAnswers(question, maxAnswers, useWiki, useDBPedia, useD4C)
          .then(response => {
            this.answerList = response.data
          })
          .catch(error => {
            console.log(error)
          })
          .finally(() => {
            this.loading = false
          })
    },
  },
  mounted() {
    this.useDBPedia = false
    this.useWiki = false
  }
}
</script>

<style scoped>
.search-btn{
  margin-top: -18px;
}
</style>
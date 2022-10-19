<template>
  <v-container>
    <v-card flat>
      <v-card-title v-text="$t('qaView.title')"/>
      <v-card-subtitle v-text="$t('qaView.subtitle')"/>

      <v-container>
        <v-form ref="form">

          <!-- QA Input -->
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="input"
                            :placeholder="$t('qaView.placeholder')"
                            :rules="rules.inputText"
                            outlined
              >
                <template #append-outer>
                  <v-btn height="56px" width="56px"
                         class="search-btn"
                         :loading="loading"
                         outlined
                         @click="clickAskHandler()"
                  >
                    <v-icon size="xx-large">mdi-chat-question-outline</v-icon>
                  </v-btn>
                </template>
              </v-text-field>
            </v-col>
          </v-row>

          <!-- Max Answers -->
          <v-row>
            <v-subheader class="subheader" v-text="$t('qaView.subheader1')+':'"/>
            <v-slider v-model="maxAnswers"
                      class="align-center"
                      max="25" min="1"
                      hide-details
            >
              <template #prepend>
                <v-text-field v-model="maxAnswers"
                              :rules="rules.maxAnswers"
                              class="mt-0 pt-0 align-center"
                              single-line outlined dense hide-details
                              type="number"
                              style="width: 100px"
                />
              </template>
            </v-slider>
          </v-row>

          <!-- Source Checkboxes -->
          <v-row >
            <v-subheader class="subheader" v-text="$t('qaView.subheader2')+':'"/>

            <v-checkbox v-model="useD4C"
                        class="filter-checkbox"
                        :label="$t('qaView.d4c')"
                        :rules="rules.resource"
                        hide-spin-buttons
            />
            <v-checkbox v-model="useDBPedia"
                        class="filter-checkbox"
                        :label="$t('qaView.dbPedia')"
                        hide-spin-buttons
                        :rules="rules.resource"
            />
            <v-checkbox v-model="useWiki"
                        class="filter-checkbox"
                        :label="$t('qaView.wikidata')"
                        hide-spin-buttons
                        :rules="rules.resource"
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
  name: "QAView",
  components: {
    QACard
  },
  data: () => ({
    answerList: [],
    input: "What traditional medicine has been used to treat Covid-19?",
    question: "",
    maxAnswers: 3,
    useWiki: true,
    useDBPedia: true,
    useD4C: true,
    loading: false,
  }),
  computed: {
   rules() {
      return {
        inputText: [
          v => !!v || this.$t("error.validation.required"),
        ],
        maxAnswers: [
          v => (1 <= v && v <= 5) || this.$t("error.validation.outOfRange", {min: 1, max: 25}),
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

        this.askQuestion(this.question, this.maxAnswers, this.useWiki, this.useDBPedia, this.useD4C)
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
.subheader{
  width: 145px;
}
.search-btn{
  margin-top: -18px;
}
.filter-checkbox{
  min-width: 200px;
  margin-top: 8px;
}
</style>
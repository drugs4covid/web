<template>
  <v-container>
    <v-card flat>
      <v-card-title v-text="$t('textSearch.title')"/>
      <v-card-subtitle v-text="$t('textSearch.subtitle')"/>

      <v-container>
        <v-form ref="form">

          <v-row>
            <v-col cols="11">
              <v-text-field v-model="inputText"
                            :placeholder="$t('textSearch.placeholder')"
                            outlined required
              >
              </v-text-field>
            </v-col>

            <v-col>
              <v-btn height="56px"
                     width="56px"
                     outlined
                     @click="clickSearchHandler"
              >
                <v-icon size="xx-large">mdi-magnify</v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-subheader class="subheader" v-text="$t('textSearch.maxResults')+':'"/>
            <v-text-field id="max-result-field"
                          v-model="maxResults"
                          class="mt-0 pt-0 align-center"
                          hide-details single-line outlined dense
                          type="number"
                          style="max-width: 72px"
            />
            <v-col align-self="start">
              <v-slider
                  v-model="maxResults"
                  max="100"
                  min="1"
                  hide-details
                  thumb-label
              >
              </v-slider>
            </v-col>
          </v-row>

          <v-row>
            <v-subheader class="subheader" v-text="$t('textSearch.subheader')+':'"/>

              <v-checkbox class="filter-checkbox"
                          v-model="searchDiseases"
                          :label="$t('textSearch.diseases')"
                          hide-spin-buttons dense
              />
              <v-checkbox class="filter-checkbox"
                          v-model="searchDrugs"
                          :label="$t('textSearch.drugs')"
                          hide-spin-buttons dense
              />
              <v-checkbox class="filter-checkbox"
                          v-model="searchTexts"
                          :label="$t('textSearch.Texts')"
                          hide-spin-buttons dense
              />
          </v-row>

          <v-row>
            <v-subheader class="subheader" v-text="$t('textSearch.subheader')+':'"/>
            <v-col>
              <v-text-field class="filter-text-field"
                            v-model="atcLevelFilter"
                            :label="$t('textSearch.atcFilter')"
                            :disabled="!searchDrugs || disableATCFilter"
                            type="number"
                            outlined dense hide-details hide-spin-buttons
              >
                <template #append-outer>
                  <v-switch class="filter-switch"
                            v-model="disableATCFilter"
                            :disabled="!searchDrugs"
                            dense inset/>
                </template>
              </v-text-field>
              <v-text-field class="filter-text-field"
                            v-model="meshLevelFilter"
                            :label="$t('textSearch.meshFilter')"
                            :disabled="!searchDiseases || disableMeshFilter"
                            type="number"
                            outlined dense hide-details hide-spin-buttons
              >
                <template #append-outer>
                  <v-switch class="filter-switch"
                            v-model="disableMeshFilter"
                            :disabled="!searchDiseases"
                            dense inset/>
                </template>
              </v-text-field>
            </v-col>

          </v-row>
        </v-form>
      </v-container>

    </v-card>
  </v-container>
</template>

<script>
import axiosService from "@/service/axiosService";

export default {
  name: "TextSearchView",

  data: () => ({
    inputText: "",
    searchDrugs: false,
    searchDiseases: false,
    searchTexts: false,
    maxResults: 1,
    atcLevelFilter: 1,
    meshLevelFilter: 1,
    disableATCFilter: false,
    disableMeshFilter: false,
    resultList: [],

  }),
  methods:{
    clickSearchHandler(){
      if (!this.$refs.form.validate()) {
        setTimeout(() => {this.$refs.form.resetValidation();}, 5000);
      }
      else{
        this.searchBioApi()
      }
    },
    searchBioApi(){
      axiosService.qaAnswers(this.question, this.maxAnswers, this.useWiki, this.useDBPedia, this.useD4C)
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
.subheader{
  min-width: 180px;
}
.filter-checkbox{
  min-width: 200px;
  margin-top: 8px;
}
.filter-switch{
  margin-top: -3px;
}
.filter-text-field{
  width: 275px;
}
</style>
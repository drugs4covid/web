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
                            outlined required hide-details
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
                          v-model="diseases.isActive"
                          :label="$t('textSearch.diseases')"
                          hide-spin-buttons dense
              />
              <v-checkbox class="filter-checkbox"
                          v-model="drugs.isActive"
                          :label="$t('textSearch.drugs')"
                          hide-spin-buttons dense
              />
              <v-checkbox class="filter-checkbox"
                          v-model="texts.isActive"
                          :label="$t('textSearch.Texts')"
                          hide-spin-buttons dense
              />
          </v-row>

          <v-row>
            <v-subheader class="subheader" v-text="$t('textSearch.subheader')+':'"/>
            <v-col>
              <v-text-field class="filter-text-field"
                            v-model="drugs.levelFilter"
                            :label="$t('textSearch.atcFilter')"
                            :disabled="!drugs.isActive || !drugs.enableLevelFiler"
                            type="number"
                            max="5"
                            min="1"
                            outlined dense
              >
                <template #append-outer>
                  <v-switch class="filter-switch"
                            v-model="drugs.enableLevelFiler"
                            :disabled="!searchDrugs"
                            dense/>
                </template>
              </v-text-field>
              <v-text-field class="filter-text-field"
                            v-model="this.diseases.levelFilter"
                            :label="$t('textSearch.meshFilter')"
                            :disabled="!diseases.isActive || !this.diseases.enableLevelFiler"
                            type="number"
                            max="20"
                            min="1"
                            outlined dense
              >
                <template #append-outer>
                  <v-switch class="filter-switch"
                            v-model="texts.isActive"
                            :disabled="!searchDiseases"
                            dense/>
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
    drugs:{
      isActive: false,
      enableLevelFiler: false,
      levelFilter: 1,
      results: []
    },
    diseases:{
      isActive: false,
      enableLevelFiler: false,
      levelFilter: 1,
      results: []
    },
    texts:{
      isActive: false,
      results: []
    },
    maxResults: 1,
    resultList: [],

  }),
  methods:{
    clickSearchHandler(){
      if (!this.$refs.form.validate()) {
        setTimeout(() => {this.$refs.form.resetValidation();}, 5000);
      }
      else{
        this.resultList = []

        if(this.drugs.isActive){
          this.searchDrugs(this.maxResults, this.inputText, this.drugs.levelFilter)
        }
        if(this.diseases.isActive){
          this.searchDiseases(this.maxResults, this.inputText, this.diseases.levelFilter)
        }
        if(this.texts.isActive){
          this.searchText(this.maxResults, this.inputText)
        }

      }
    },
    searchDrugs(size, keywords, level){
      axiosService.bioAPISearch("drugs", size, keywords, level)
          .then(response => {
            this.drugs.results = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },
    searchDiseases(size, keywords, level){
      axiosService.bioAPISearch("diseases", size, keywords, level)
          .then(response => {
            this.diseases.results = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },
    searchText(size, keywords) {
      axiosService.bioAPISearch("texts", size, keywords)
          .then(response => {
            this.diseases.results = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },
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
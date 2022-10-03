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
              <v-btn height="56px" width="56px"
                     :loading="loadingDiseases || loadingDrugs || loadingTexts"
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
                            :label="$t('textSearch.drugsFilter')"
                            :disabled="!drugs.isActive || !drugs.enableLevelFiler"
                            type="number"
                            max="5"
                            min="1"
                            outlined dense
              >
                <template #append-outer>
                  <v-switch class="filter-switch"
                            v-model="drugs.enableLevelFiler"
                            :disabled="!drugs.isActive"
                            dense/>
                </template>
              </v-text-field>
              <v-text-field class="filter-text-field"
                            v-model="diseases.levelFilter"
                            :label="$t('textSearch.diseasesFilter')"
                            :disabled="!diseases.isActive || !diseases.enableLevelFiler"
                            type="number"
                            max="20"
                            min="1"
                            outlined dense
              >
                <template #append-outer>
                  <v-switch class="filter-switch"
                            v-model="diseases.enableLevelFiler"
                            :disabled="!diseases.isActive"
                            dense/>
                </template>
              </v-text-field>
            </v-col>

          </v-row>
        </v-form>

        <!-- Drugs results -->
        <v-data-table :headers="headers"
                      :items="drugs.results"
                      v-show="drugs.results.length !== 0"
                      dense disable-filtering disable-pagination
                      disable-sort hide-default-footer
        >
          <template #top>
            <v-card-title v-text="drugs.tableTitle"></v-card-title>
          </template>
        </v-data-table>
        <br/>
        <br/>

        <!-- Diseases results -->
        <v-data-table :headers="headers"
                      :items="diseases.results"
                      v-show="diseases.results.length !== 0"
                      dense disable-filtering disable-pagination
                      disable-sort hide-default-footer
        >
          <template #top>
            <v-card-title v-text="diseases.tableTitle"></v-card-title>
          </template>
        </v-data-table>
        <br/>
        <br/>

        <!-- Article results -->
        <v-row v-show="texts.results.length !== 0">
          <v-card-title v-text="$t('texts.tableTitle')"></v-card-title>

          <v-col v-for="(text, index) in texts.results"
                 :key="index"
                 cols="12"
          >
            <v-card>
              <v-card-title v-text="text.article.title"/>

              <v-card-subtitle v-text="text.section"/>
              <v-card-text v-text="text.text"/>
              <v-card-actions>
                <v-spacer/>
                <v-btn v-text="$t('textSearch.button.source')"
                       :href="text.article.url"
                       outlined color="primary"
                />
                <v-spacer/>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

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
    loadingDrugs: false,
    loadingDiseases: false,
    loadingTexts: false,
    drugs:{
      tableTitle: "textSearch.tableTitles.drugs",
      isActive: false,
      enableLevelFiler: false,
      levelFilter: 1,
      results: []
    },
    diseases:{
      tableTitle: "textSearch.tableTitles.diseases",
      isActive: false,
      enableLevelFiler: false,
      levelFilter: 1,
      results: []
    },
    texts:{
      tableTitle: "textSearch.tableTitles.texts",
      isActive: false,
      results: []
    },
    maxResults: 1,
    headers: [
      { text: "Name", value: "name", align: "start", sortable: false,},
      { text: "Code", value: "code"},
      { text: "Level", value: "level" },
      { text: "Frequency", value: "freq" },
    ],

  }),
  methods:{
    clickSearchHandler(){
      if (!this.$refs.form.validate()) {
        setTimeout(() => {this.$refs.form.resetValidation();}, 5000);
      }
      else{
        this.loadingDrugs = this.loadingDiseases = this.loadingTexts = true
        let level

        if(this.drugs.isActive){
          level = this.drugs.enableLevelFiler ? this.drugs.levelFilter : null
          this.searchDrugs(this.maxResults, this.inputText, level)
        }
        if(this.diseases.isActive){
          level = this.diseases.enableLevelFiler ? this.diseases.levelFilter : null
          this.searchDiseases(this.maxResults, this.inputText, level)
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
          .finally(() => {
            this.loadingDrugs = false
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
          .finally(() => {
            this.loadingDiseases = false
          })
    },
    searchText(size, keywords) {
      axiosService.bioAPISearch("texts", size, keywords)
          .then(response => {
            this.texts.results = response.data
          })
          .catch(error => {
            console.log(error)
          })
          .finally(() => {
            this.loadingTexts = false
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
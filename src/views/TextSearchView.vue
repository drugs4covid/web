<template>
  <v-container>
    <v-card flat>
      <v-card-title v-text="$t('textSearch.title')"/>
      <v-card-subtitle v-text="$t('textSearch.subtitle')"/>

      <v-container>
        <v-form ref="form">

          <!-- Search Input -->
          <v-row align-content="center" class="mx-0 my-0">
            <v-text-field v-model="input"
                          :placeholder="$t('textSearch.placeholder')"
                          :rules="rules.input"
                          outlined
            >
              <template #append-outer>
                <v-btn height="56px" width="56px"
                       class="search-btn"
                       :loading="loading"
                       outlined
                       @click="clickSearchHandler"
                >
                  <v-icon size="xx-large">mdi-magnify</v-icon>
                </v-btn>
              </template>
            </v-text-field>
          </v-row>

          <!-- Resources Checkboxes -->
          <v-row style="min-height: 50px" align-content="center" class="mx-0 my-0">
            <span class="v-label theme--light ml-0 pl-0"
                  v-text="$t('textSearch.subheader2')+':'"
            />
            <v-row justify="space-around" align-content="center">

              <v-checkbox v-model="drugs.isActive"
                          class="my-0 py-0"
                          :label="$t('textSearch.drugs')"
                          :rules="rules.resource"
                          hide-spin-buttons hide-details
              />
              <v-checkbox v-model="diseases.isActive"
                          class="my-0 py-0"
                          :label="$t('textSearch.diseases')"
                          :rules="rules.resource"
                          hide-spin-buttons hide-details
              />
              <v-checkbox v-model="texts.isActive"
                          class="my-0 py-0"
                          :label="$t('textSearch.texts')"
                          :rules="rules.resource"
                          hide-spin-buttons hide-details
              />
            </v-row>
          </v-row>

          <!-- Level Filters -->
          <v-row style="min-height: 80px" align-content="center" class="mx-0 my-0">
            <span class="v-label theme--light ml-0 pl-0 mr-6 mb-6"
                  v-text="$t('textSearch.subheader3')+':'"
            />
            <v-row justify="center" align-content="center">
              <v-text-field class="mx-1" style="max-width: 250px"
                            v-model="drugs.levelFilter.value"
                            :label="$t('textSearch.drugsFilter')"
                            :disabled="!drugs.isActive || !drugs.enableLevelFiler"
                            :rules="rules.drugLevelFilter"
                            :max="drugs.levelFilter.max"
                            :min="drugs.levelFilter.min"
                            type="number"
                            outlined dense
              >
                <template #append-outer>
                  <v-switch class="filter-switch"
                            v-model="drugs.enableLevelFiler"
                            :disabled="!drugs.isActive"
                            dense/>
                </template>
              </v-text-field>
              <v-text-field class="mx-1" style="max-width: 250px"
                            v-model="diseases.levelFilter.value"
                            :label="$t('textSearch.diseasesFilter')"
                            :disabled="!diseases.isActive || !diseases.enableLevelFiler"
                            :rules="rules.diseaseLevelFilter"
                            type="number"
                            max="20" min="1"
                            outlined dense
              >
                <template #append-outer>
                  <v-switch class="filter-switch"
                            v-model="diseases.enableLevelFiler"
                            :disabled="!diseases.isActive"
                            dense/>
                </template>
              </v-text-field>
            </v-row>
          </v-row>

          <!-- Max results slider -->
          <v-row style="min-height: 80px" align-content="start" class="mx-0 my-0">
            <v-slider v-model="maxResults.value"
                      :max="maxResults.max"
                      :min="maxResults.min"
                      :label="$t('textSearch.subheader1')+':'"
            >
            </v-slider>
            <v-text-field v-model="maxResults.value"
                          :rules="rules.maxResults"
                          type="number"
                          class="mt-0 pt-0"
                          style="max-width: 75px"
                          dense
            />
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
            <v-card-title v-text="$t('textSearch.tableTitles.texts')"/>
          </template>
          <template #header="header">
            {{$t(header.text)}}
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
            <v-card-title v-text="$t('textSearch.tableTitles.diseases')"/>
          </template>
          <template #header="header">
            {{$t(header.text)}}
          </template>
        </v-data-table>
        <br/>
        <br/>

        <!-- Article results -->
        <v-row v-show="texts.results.length !== 0">
          <v-card-title v-text="$t('textSearch.tableTitles.texts')"/>

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
                <v-btn v-text="$t('textSearch.btnSource')"
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
    input: "",
    loading: false,
    drugs:{
      isActive: true,
      enableLevelFiler: false,
      levelFilter: {
        max: 5,
        min: 1,
        value: 1
      },
      results: []
    },
    diseases:{
      isActive: true,
      enableLevelFiler: false,
      levelFilter: {
        max: 20,
        min: 1,
        value: 1
      },
      results: []
    },
    texts:{
      isActive: true,
      results: []
    },
    maxResults: {
      max: 100,
      min: 1,
      value: 1
    },
  }),
  computed:{
    headers() {
      return [
        { text: this.$t("tableHeader.name"), value: "name", align: "start", sortable: false,},
        { text: this.$t("tableHeader.code"), value: "code" },
        { text: this.$t("tableHeader.level"), value: "level" },
        { text: this.$t("tableHeader.frequency"), value: "freq" },
      ]
    },
    rules() {
      return {
        input: [
          v => !!v || this.$t("error.validation.required"),
        ],
        maxResults: [
          v => (this.maxResults.min <= v && v <= this.maxResults.max)
              || this.$t("error.validation.outOfRange", {min: this.maxResults.min, max: this.maxResults.max}),
        ],
        drugLevelFilter: [
          v => ((1 <= v && v <= 5) || !(this.drugs.isActive && this.drugs.enableLevelFiler))
              || this.$t("error.validation.outOfRange", {min: 1, max: 5}),
        ],
        diseaseLevelFilter: [
          v => ((1 <= v && v <= 20) || !(this.diseases.isActive && this.diseases.enableLevelFiler))
              || this.$t("error.validation.outOfRange", {min: 1, max: 20 }),
        ],
        resource: [
          this.drugs.isActive || this.diseases.isActive || this.texts.isActive
        ],
      }
    }
  },
  methods:{
    clickSearchHandler(){
      if (!this.$refs.form.validate()) {
        setTimeout(() => {this.$refs.form.resetValidation()}, 5000);
      }
      else{
        this.loading = true
        this.drugs.results = []
        this.diseases.results = []
        this.texts.results = []
        let level

        if(this.drugs.isActive){
          level = this.drugs.enableLevelFiler ? this.drugs.levelFilter : null
          this.searchDrugs(this.maxResults.value, this.input, level)
        }
        if(this.diseases.isActive){
          level = this.diseases.enableLevelFiler ? this.diseases.levelFilter : null
          this.searchDiseases(this.maxResults.value, this.input, level)
        }
        if(this.texts.isActive){
          this.searchText(this.maxResults.value, this.input)
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
            this.loading = false
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
            this.loading = false
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
            this.loading = false
          })
    },
  },
}
</script>

<style scoped>
.filter-switch{
  margin-top: -3px;
}
.search-btn{
  margin-top: -18px;
}
</style>
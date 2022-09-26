<template>
  <v-container>
    <v-card flat>
      <v-card-title v-text="$t('bioNLPView.title')"/>
      <v-card-subtitle v-text="$t('bioNLPView.subTitle')"/>

        <v-form>
          <v-textarea
              v-model="sampleTxt"
              @input="analyzeSample()">
          </v-textarea>
        </v-form>

        <br/>
        <div v-if="entities">
          <h2>{{ $t('bioNLPView.resultsTitle') }}</h2>
          <div v-html="sampleHTML"></div>

          <br/>
          <v-data-table v-for="(table, index) in table"
                        :key="index"
                        :headers="generateHeaders(value)"
                        :items="generateItems(value)"
          >
          </v-data-table>
        </div>
    </v-card>
  </v-container>
</template>

<script>
import axiosService from "@/service/axiosService";
export default {
  name: "BioNLPView",
  data: () => ({
    entities: null,
    sampleHTML: null,
    sampleTxt: "In the absence of sufficient medication for COVID patients due to the increased demand, disused drugs have been employed or the doses of those available were modified by hospital pharmacists. Some evidences for the use of alternative drugs can be found in the existing scientific literature that could assist in such decisions. However, exploiting large corpus of documents in an efficient manner is not easy, since drugs may not appear explicitly related in the texts and could be mentioned under different brand names. Drugs4Covid combines word embedding techniques and semantic web technologies to enable a drug-oriented exploration of large medical literature. Drugs and diseases are identified according to the ATC classification and MeSH categories respectively. More than 60K articles and 2M paragraphs have been processed from the CORD-19 corpus with information of COVID-19, SARS, and other related coronaviruses. An open catalogue of drugs has been created and results are publicly available through a drug browser, a keyword-guided text explorer, and a knowledge graph. ",
    tables: [],
  }),
  methods:{
    analyzeSample(){
      axiosService.bioNLPAnalyze(this.sampleTxt)
          .then(response =>{
            this.entities = response.data.entities
            this.sampleHTML = response.data.html
          })
    },
    generateTable(entity){
      let table = {
        header: [],
        items: []
      }

      for(let item in entity){
        table.header.push({
          item
        })
      }

      this.tables.push(entity)
    },
  },
  watch:{
    entities(newValue){
      this.tables = []
      for(let entity in newValue){
        this.generateTable(entity)
      }
    }
  }

}
</script>

<style scoped>

</style>
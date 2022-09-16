<template>
  <b-container>
    <b-card class="border-0"
            title="Bio NLP"
            sub-title="Find the biomedical entities hidden in text"
    >
      <b-card-body>
        <b-form>
          <b-form-textarea
              max-rows="10"
              v-model="sampleTxt"
              @input="analyzeSample()">
          </b-form-textarea>
        </b-form>

        <div v-html="sampleHTML"></div>

        <div v-if="entities">
          <div v-for="(value, key) in entities"
               v-show="value.length!==0"
               :key="key"
          >
            <h2>{{ key }}</h2>
            <b-table :items="value"></b-table>
          </div>
        </div>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
import axiosService from "@/service/axiosService";
export default {
  name: "BioNLPView",
  data: () => ({
    entities: null,
    sampleHTML: null,
    sampleTxt: ""
  }),
  methods:{
    analyzeSample(){
      axiosService.bioNLPAnalyze(this.sampleTxt)
          .then(response =>{
            this.entities = response.data.entities
            this.sampleHTML = response.data.html
          })
    }
  },

}
</script>

<style scoped>

</style>
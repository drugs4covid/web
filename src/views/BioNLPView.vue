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

        <br/>
        <div v-if="entities">
          <h2>Results</h2>
          <div v-html="sampleHTML"></div>

          <br/>
          <div v-for="(value, key) in entities"
               v-show="value.length!==0"
               :key="key"
          >
            <h3 class="text-left text-uppercase">{{ key }}</h3>
            <b-table :items="value"
                     striped
                     hover
            >
            </b-table><br/>
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
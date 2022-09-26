<template>
    <v-container fluid>

      <!--Search Header-->
      <v-card class="border-0" bg-variant="transparent" border-variant="light"
              style="max-height: 375px; min-width: 100%"
              overlay
              img-src="@/assets/header-background.jpg"
              img-height="375px"
              img-width="100%"
      >
        <v-card class="d-flex justify-content-center align-items-center h-100">
          <v-container >
            <v-row class="justify-content-center">
              <h1 class="mb-3">
                {{$t('homeView.header.title')}}
              </h1>
            </v-row>
            <v-row class="justify-content-center">
              <h4 class="mv-3">
                {{$t('homeView.header.subtitle')}}
              </h4>
            </v-row>
            <v-row class="justify-content-center">
              <search-engine-input style="max-width: 500px"
                                   @select="searchEngineResultHandler"
              />
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <br/>

      <!-- Tool Cards -->

        <v-card align="center" style="max-width: 300px"
                v-for="(tool, index) in tools"
                :key="index"
                :img-src="tool.img"
        >
          <v-card-title>
            {{ $t(tool.name) }}
          </v-card-title>
          <v-card-text style="text-align: justify" class="mb-2">
            {{ $t(tool.description) }}
          </v-card-text>
          <template>
            <v-btn type="button" variant="outline-primary"
                      :to="tool.buttonLink"
                      :disabled="tool.disabled"
            >
              {{ $t(tool.buttonText) }}
            </v-btn>
          </template>
        </v-card>



      <br/><hr/><br/><br/>
      <problem-component></problem-component>

      <br/><hr/><br/><br/>
      <resources-component></resources-component>

      <br/><hr/><br/><br/>
      <approach-component></approach-component>

    </v-container>
</template>

<script>
import ProblemComponent from "@/components/ProblemCard";
import ResourcesComponent from "@/components/ResourcesCard";
import ApproachComponent from "@/components/ApproachCard";
import SearchEngineInput from "@/components/SearchEngineInput";
import asset1 from "@/assets/bionlp-icon.png"
import asset2 from "@/assets/d4c-icon.png"

export default {
  name: 'HomeView',
  components: {
    SearchEngineInput,
    ApproachComponent,
    ResourcesComponent,
    ProblemComponent},
  data:()=>({
    tools:[
      {
        name: "title.bioNLP",
        description: "homeView.bioNLPCard.description",
        buttonText: "homeView.bioNLPCard.buttonText",
        buttonLink: "services/bio-nlp",
        disabled: false,
        img: asset1
      },
      {
        name: "title.qa",
        description: "homeView.qaCard.description",
        buttonText: "homeView.qaCard.buttonText",
        buttonLink: "services/qa",
        disabled: true,
        img: asset2
      }
    ]
  }),
  methods:{
    searchEngineResultHandler(result){
      let type = "drug"
      let url = "https://search.drugs4covid.oeg-upm.net/search/"
      if(result.id.charAt(0) === 'D') {
        type = "disease"
      }

      window.location.href = url.concat(type,'/',result.id);
    }
  }
}
</script>

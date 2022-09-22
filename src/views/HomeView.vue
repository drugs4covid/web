<template>
  <div id="home">
    <b-container fluid>

      <!--Search Header-->
      <b-card class="border-0" bg-variant="transparent" border-variant="light"
              style="max-height: 375px; min-width: 100%"
              overlay
              img-src="@/assets/header-background.jpg"
              img-height="375px"
              img-width="100%"
      >
        <b-card-body class="d-flex justify-content-center align-items-center h-100">
          <b-container >
            <b-row class="justify-content-center">
              <h1 class="mb-3">
                {{$t('homeView.header.title')}}
              </h1>
            </b-row>
            <b-row class="justify-content-center">
              <h4 class="mb-3">
                {{$t('homeView.header.subtitle')}}
              </h4>
            </b-row>
            <b-row class="justify-content-center">
              <search-engine-input style="max-width: 500px"
                                   @select="searchEngineResultHandler"
              />
            </b-row>
          </b-container>
        </b-card-body>
      </b-card>
      <br/>

      <!-- Tool Cards -->
      <b-card-group deck class="justify-content-center">

        <b-card align="center" style="max-width: 300px"
                v-for="(tool, index) in tools"
                :key="index"
                :img-src="tool.img"
        >
          <b-card-title>
            {{ $t(tool.name) }}
          </b-card-title>
          <b-card-text style="text-align: justify" class="mb-2">
            {{ $t(tool.description) }}
          </b-card-text>
          <template #footer>
            <b-button type="button" variant="outline-primary"
                      :to="tool.buttonLink"
                      :disabled="tool.disabled"
            >
              {{ $t(tool.buttonText) }}
            </b-button>
          </template>
        </b-card>

        <!-- Bio-NLP -->
        <b-card align="center" img-src="@/assets/bionlp-icon.png" style="max-width: 300px">
          <b-card-title>
            {{ $t('homeView.bioNLPCard.title') }}
          </b-card-title>
          <b-card-text style="text-align: justify" class="mb-2">
            {{ $t('homeView.bioNLPCard.description') }}
          </b-card-text>
          <template #footer>
            <b-button type="button" variant="outline-primary"
                      to="services/bio-nlp"
            >
              {{ $t('homeView.bioNLPCard.buttonText') }}
            </b-button>
          </template>
        </b-card>
      </b-card-group>

      <br/><hr/><br/><br/>
      <problem-component></problem-component>

      <br/><hr/><br/><br/>
      <resources-component></resources-component>

      <br/><hr/><br/><br/>
      <approach-component></approach-component>

    </b-container>
  </div>
</template>

<script>
import ProblemComponent from "@/components/ProblemCard";
import ResourcesComponent from "@/components/ResourcesCard";
import ApproachComponent from "@/components/ApproachCard";
import SearchEngineInput from "@/components/SearchEngineInput";
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
        img: "@/assets/bionlp-icon.png"
      },
      {
        name: "title.qa",
        description: "homeView.qaCard.description",
        buttonText: "homeView.qaCard.buttonText",
        buttonLink: "services/qa",
        disabled: true,
        img: "@/assets/d4c-icon.png"
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

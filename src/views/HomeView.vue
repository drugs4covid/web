<template>
  <div id="home">
    <b-container fluid>

      <!-- QA Search Header-->
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
              <h1 class="mb-3">Have a question?</h1>
            </b-row>
            <b-row class="justify-content-center">
              <h4 class="mb-3">Use our QA engine</h4>
            </b-row>
            <b-row class="justify-content-center">
              <b-form-input style="max-width: 400px"></b-form-input>
              <b-button type="primary" style="min-width: 38px" >
                Search
              </b-button>
            </b-row>
          </b-container>
        </b-card-body>
      </b-card>
      <br/>
      <!-- Tool Cards -->
      <b-card-group deck class="justify-content-center">
        <!-- Search Engine-->
        <b-card align="center" img-src="@/assets/d4c-icon.png" style="max-width: 300px">
          <b-card-title>
            {{ searchEngineCard.title }}
          </b-card-title>
          <b-card-text style="text-align: justify" class="mb-2">
            {{searchEngineCard.description}}
          </b-card-text>
          <template #footer>
            <b-button type="button" variant="outline-primary"
                      :href="searchEngineCard.href"
            >
              {{ searchEngineCard.buttonText }}
            </b-button>
          </template>
        </b-card>

        <!-- Bio-NLP -->
        <b-card align="center" img-src="@/assets/bionlp-icon.png" style="max-width: 300px">
          <b-card-title>
            {{ bioNLPCard.title }}
          </b-card-title>
          <b-card-text style="text-align: justify" class="mb-2">
            {{bioNLPCard.description}}
          </b-card-text>
          <template #footer>
            <b-button type="button" variant="outline-primary"
                      :to="bioNLPCard.to"
            >
              {{ bioNLPCard.buttonText }}
            </b-button>
          </template>
        </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data: () => ({
    searchEngineCard:
      {
        title: 'Search engine',
        img: '@/assets/test.jpg',
        description: 'An open web service to exploit the existing scientific literature about coronavirus (more than 60,000 papers) identifying drugs, diseases and articles and displaying their relations inside the corpus. You can search by ATC code, Generic Name, Disease Name or MESH code.',
        buttonText: 'Start Searching',
        href: 'https://search.drugs4covid.oeg-upm.net/',
      },
    bioNLPCard:
      {
        title: 'Bio-NLP',
        img: '@/assets/test.jpg',
        description: 'BioNER tool which aims to apply last state of the art models for the recognition of Biomedical Entities: Diseases, Chemicals and Genetical ents.',
        buttonText: 'Start Analyzing',
        to: 'services/bio-nlp',
      },
  }),
}
</script>

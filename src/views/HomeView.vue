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
            {{ $t('homeView.searchEngineCard.title') }}
          </b-card-title>
          <b-card-text style="text-align: justify" class="mb-2">
            {{ $t('homeView.searchEngineCard.description') }}
          </b-card-text>
          <template #footer>
            <b-button type="button" variant="outline-primary"
                      href="https://search.drugs4covid.oeg-upm.net/"
            >
              {{ $t('homeView.searchEngineCard.buttonText') }}
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
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

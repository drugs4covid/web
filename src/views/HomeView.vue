<template>
  <div id="home">
    <b-container>
      <!-- QA Search Header-->

      <b-card class="border-0" overlay
              bg-variant="transparent"
              border-variant="light"
              style="height: 375px; min-width: 100%"
      >
        <b-card-body class="d-flex justify-content-center align-items-center h-100">
          <b-container >
            <b-row class="justify-content-center">
              <h1 class="mb-3">Have a question?</h1>
            </b-row>
            <b-row class="justify-content-center">
              <h4 class="mb-3">Use our search engine</h4>
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

      <!-- Tool Cards -->
      <b-card-group deck class="justify-content-center">
        <b-card v-for="tool in toolItems"
                :key=tool.title
                :title=tool.title
                :img-src=tool.img
                :img-alt=tool.img_alt
                style="max-width: 275px"
                img-top overlay>

          <b-card-text style="text-align: justify">{{tool.description}}</b-card-text>
          <template #footer>
            <b-button squared variant="primary">
              {{ tool.button_text }}
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
    toolItems:[
      {
        title: 'Search engine',
        img: 'https://picsum.photos/300/300/?image=40',
        img_alt: 'Image',
        description: 'An open web service to exploit the existing scientific literature about coronavirus (more than 60,000 papers) identifying drugs, diseases and articles and displaying their relations inside the corpus. You can search by ATC code, Generic Name, Disease Name or MESH code.',
        button_text: 'Start Searching',
      },
      {
        title: 'Knowledge Graph Interface',
        img: 'https://picsum.photos/300/300/?image=41',
        img_alt: 'Image',
        description: 'A Knowledge Graph interface to run your own queries or run some examples of questions doctors and researchers might find useful.',
        button_text: 'Start Searching',
      },
      {
        title: 'Query Builder',
        img: 'https://picsum.photos/300/300/?image=42',
        img_alt: 'Image',
        description: 'A simple interface to learn how to use the D4C Api and start to run your own experiments.',
        button_text: 'Start Searching',
      },
    ],
  }),
}
</script>

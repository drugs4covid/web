<template>
  <v-container>
    <v-card flat>
      <v-skeleton-loader v-if="isLoading" type="article@5"/>

      <v-card-text v-else v-for="(cite, index) in citationsList"
                   :key="index"
      >

        <v-btn v-show="cite.pdf" :href="cite.pdf" icon plain>
          <v-icon color="#B0321F">mdi-file-download</v-icon>
        </v-btn>

        <a :href="cite.href" style="text-decoration: none">
          [{{index + 1}}]
        </a>

        <span v-text="cite.text"/>

      </v-card-text>

    </v-card>
  </v-container>
</template>

<script>
import Cite from 'citation-js';

// More info about Cite input formats in:
// https://citation.js.org/api/0.3/tutorial-input_formats.html
export default {
  name: "PapersView",
  data: () => ({
    citationsList: [],
    isLoading: true,
  }),
  mounted() {
    this.isLoading = true
    let docList = this.$store.state.citedDocuments

    for (let i=0; i<docList.length; i++){
      let citeText = new Cite(docList[i][0]).format('bibliography', {
        type: 'html',
        style: 'citation-apa',
        lang: 'en-US',
      })

      this.citationsList.push({
        text: citeText.substring(0, citeText.indexOf("http")),
        pdf: docList[i][1],
        href: citeText.slice(citeText.indexOf("http"))
      })
    }
    this.isLoading = false
  }
}
</script>

<style scoped>

</style>
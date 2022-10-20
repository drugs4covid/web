<template>
  <v-container>
    <v-card flat>
      <v-skeleton-loader v-if="isLoading" type="article@5"/>

      <v-card-text v-else v-for="(cite, index) in citationsList"
                   :key="index"
      >
        <v-row>
          <div>
            <!-- Document ID -->
            <span>[{{cite.id.split('_')[1]}}]{{' '}}</span>
            <!-- Authors -->
            <span>{{authorsToString(cite.author)}}.</span>
            <!-- Title -->
            <a :href="cite.URL" style="text-decoration: none">
              <em>"{{cite.title}}"</em>
            </a>
          </div>
        </v-row>

        <v-row>
          <v-btn v-show="getDocPDF(cite.id)" :href="getDocPDF(cite.id)" icon plain>
            <v-icon color="#B0321F">mdi-file-download</v-icon>
          </v-btn>
        </v-row>


      </v-card-text>

    </v-card>
  </v-container>
</template>

<script>
import Cite from 'citation-js';
import BibFile from '@/static/cites.bib'

// More info about Cite input formats in:
// https://citation.js.org/api/0.3/tutorial-input_formats.html
export default {
  name: "PapersView",
  data: () => ({
    citationsList: [],
    isLoading: true,
  }),
  methods: {
    parseBibtexFile(){
      this.citationsList = new Cite(BibFile).data
    },
    authorsToString(authorList) {
      return authorList.map(author => {
        return author.given + ' ' + author.family
      }).toString().replaceAll(',',", ")
    },
    getDocPDF(citeId){
      return this.$store.state.pdfDocuments[citeId]
    }
  },
  mounted() {
    this.isLoading = true
    this.parseBibtexFile()
    console.log(this.citationsList)

    this.isLoading = false
  },
}
</script>

<style scoped>

</style>
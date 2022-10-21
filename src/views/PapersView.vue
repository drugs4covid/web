<template>
  <v-container>
    <v-card flat>

      <v-card-text v-for="(cite, index) in citationsList"
                   :key="index"
      >
        <v-row>

          <v-col cols="11">
            <div>
              <!-- Document ID -->
              <span>[{{cite.id.split('_')[1]}}] {{' '}}</span>

              <!-- Authors -->
              <span>{{authorsToString(cite.author)}}.</span>

              <!-- Title -->
              <span v-show="cite.title">
                {{' '}}
                <a v-if="cite.URL" :href="cite.URL" style="text-decoration: none">
                  <em>"{{cite.title}}".</em>
                </a>
                <em v-else>"{{cite.title}}".</em>
              </span>

              <!-- Genre -->
              <span v-show="cite.genre">
                {{' '}} {{cite.genre}}.
              </span>

              <!-- Publisher -->
              <span v-show="cite.publisher">
                {{' '}} {{cite.publisher}}.
              </span>

              <!-- Book Info (title, vol, pages) -->
              <span v-if="cite['container-title'] || cite.volume || cite.page">
                {{' '}} {{bookInfoToString(cite['container-title'], cite.volume, cite.page)}}
              </span>

              <!-- Date -->
              <span v-if="cite.issued">
                {{' '}} {{dateToString(cite.issued['date-parts'])}}.
              </span>

            </div>
          </v-col>

          <v-col align-self="center">
            <v-btn v-show="getDocPDF(cite.id)" :href="getDocPDF(cite.id)" icon plain>
              <v-icon color="#B0321F">mdi-file-download</v-icon>
            </v-btn>
          </v-col>

        </v-row>
        <v-divider/>
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
  computed:{
    citationsList() {
      return new Cite(BibFile).data
    }
  },
  methods: {
    authorsToString(authorList) {
      return authorList.map(author => {
        return author.given + ' ' + author.family
      }).toString().replaceAll(',',", ")
    },
    dateToString(dateParts){
      return dateParts.map(date => {
        switch (date.length){
          case 1:
            return date[0]
          case 2:
            return this.$t('month.' + date[1]) + ', ' + date[0]
          default:
            return date.toString()
        }
      }).toString()
    },
    bookInfoToString(title, vol, page) {
      return [title, vol, page]
          .filter(item => item)
          .toString()
          .replaceAll(',',', ') + '.'
    },
    getDocPDF(citeId){
      return this.$store.state.pdfDocuments[citeId]
    }
  },
}
</script>

<style scoped>

</style>
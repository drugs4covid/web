<template>
  <v-container>
    <v-card flat>
      <v-card-title v-text="$t('code.title')"/>
      <v-card-subtitle v-text="$t('code.subtitle')"/>

      <v-col v-for="(cite, index) in citationsData"
             :key="index"
             cols="12"
      >
        <a :href="cite.URL">
          <h2 class="title" v-text="cite.title">
            {{cite.title}}
          </h2>
          <span v-show="cite.version">
            ({{ $t('label.version') }} {{cite.version}})
          </span>
        </a>
        <h3 class="subtitle-2">
          <span v-for="(author, index) in cite.author"
                :key="index"
          >
            {{author.given}} {{author.family}},
          </span>
        </h3>
        <v-card-text v-text="cite.abstract"/>

        <v-card-actions>
          <v-row>
            <v-col cols="12">
              <span v-show="cite.publisher">
                <em><span class="journal" v-text="cite.publisher"/></em>
              </span>
              <span v-if="cite.publisher && cite.issued">, </span>
              <span v-if="cite.publisher && !cite.issued">. </span>
              <span v-show="cite.issued">
                <span v-for="(datePart, index) in cite.issued['date-parts']"
                      :key="index"
                >
                  <span v-show="datePart[1]" v-text="$t('month.' + datePart[1])"/>
                  <span v-if="datePart[1]">, </span>
                  <span v-show="datePart[0]" v-text="datePart[0]"/>.
                </span>
              </span>
            </v-col>
            <v-col cols="12">
              <v-chip-group column>
                <v-chip v-for="(category) in new Set(cite.categories)"
                        :key="category"
                        v-text="category"
                        color="success"
                        label small
                />
              </v-chip-group>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-col>

    </v-card>
  </v-container>
</template>

<script>
import Cite from 'citation-js';

// More info about Cite input formats in:
// https://citation.js.org/api/0.3/tutorial-input_formats.html
const CITE_INPUT=[
  "https://doi.org/10.48550/arXiv.2012.01953",
  "10.48550/arXiv.2012.01953",
  "https://doi.org/10.48550/arXiv.2208.01093",
  "10.48550/arXiv.2208.01093",
  "@ARTICLE{smit54,AUTHOR = {J. G. Smith and H. K. Weston},TITLE = {Nothing Particular in this Year's History},YEAR = {1954},JOURNAL = {J. Geophys. Res.},VOLUME = {2},PAGES = {14-15}}",
  "@book{ANTLR,author = {Terence Parr},edition = {First},interhash = {d9ef4ed82183b86b6a3004161de5ea44},intrahash = {1688029f4c14bd3b234933a48e902c03},publisher = {Pragmatic Bookshelf},series = {Pragmatic Programmers},title = {The Definitive ANTLR Reference: Building Domain-Specific Languages},url = {http://www.amazon.com/Definitive-ANTLR-Reference-Domain-Specific-Programmers/dp/0978739256%3FSubscriptionId%3D13CT5CVB80YFWJEPWS02%26tag%3Dws%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D0978739256},year = 2007,ean = {9780978739256},keywords = {Me:MastersThesis antlr compilers languages lexers parsers programming},asin = {0978739256},description = {Amazon.com: The Definitive ANTLR Reference: Building Domain-Specific Languages (Pragmatic Programmers): Terence Parr: Books},isbn = {0978739256},biburl = {http://www.bibsonomy.org/bibtex/21688029f4c14bd3b234933a48e902c03/gron},dewey = {005.45},month = May}",
]

export default {
  name: "CodeView",
  computed: {
    citationsData() {
      return new Cite(CITE_INPUT).data
    },
    citationsFormated() {
      return CITE_INPUT.map(item => {
        return new Cite(item).format('bibliography', {
          format: 'html',
          template: 'apa'
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
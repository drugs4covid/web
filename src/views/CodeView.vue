<template>
  <v-container>
    <v-card flat>
      <v-card-title v-text="$t('code.title')"/>
      <v-card-subtitle v-text="$t('code.subtitle')"/>

      <v-row>
        <v-col v-for="(cite, index) in citationsFormated"
               :key="index"
               cols="12"
        >
          <span v-html="cite"/>
        </v-col>
      </v-row>

      <div class="csl-bib-body">
        <div data-csl-entry-id="https://doi.org/10.5281/zenodo.1005176" class="csl-entry">Willighagen, L., & Willighagen, E. (2017, October 9). Larsgw/Citation.Js V0.3.3. Zenodo. https://doi.org/10.5281/zenodo.1005176</div>
      </div>

<!--      <li v-for="(entry, index) in citationList"-->
<!--          :key="index"-->
<!--      >-->
<!--                        <span v-if="entry.available">-->
<!--                            <a :href="entry.available" target="_blank">-->
<!--                                <span style="text-decoration: underline;" class="title">{{ entry.title }}</span>,-->
<!--                            </a>-->
<!--                        </span>-->
<!--        <span v-else-if="entry.FILE">-->
<!--                             <a :href="paper_pool + entry.FILE" target="_blank">-->
<!--                                <span style="text-decoration: underline;" class="title">{{ entry.title }}</span>,-->
<!--                            </a>-->
<!--                        </span>-->
<!--        <span v-else>-->
<!--                            <span style="text-decoration: underline;" class="title">{{ entry.title }}</span>,-->
<!--                        </span>-->
<!--        <div class="author">-->
<!--                            <span v-if="entry.author">-->
<!--                                {{ entry.author }}-->
<!--                            </span>-->
<!--        </div>-->
<!--        <div>-->
<!--          <span v-if="entry.journal"><em><span class="journal">{{ entry.journal }}</span></em>,</span>-->
<!--          <span v-else-if="entry.bookTitle"><em><span class="journal">{{ entry.bookTitle }}</span></em>,</span>-->
<!--          <span v-if="entry.location"><span class="location">{{ entry.location }}</span>,</span>-->
<!--          <span v-if="entry.volume"><span class="volume">vol. {{ entry.volume }}</span>,</span>-->
<!--          <span v-if="entry.number"><span class="number">no. {{ entry.number }}</span>,</span>-->
<!--          <span v-if="entry.pages"><span class="pages">pp. {{ entry.pages }}</span>,</span>-->
<!--          <span v-if="entry.month"><span class="month">{{ entry.month }}</span>,</span>-->
<!--          <span v-if="entry.year"><span class="year">{{ entry.year }}</span>.</span>-->
<!--          <span v-else>.</span>-->

<!--          <a role="button" data-toggle="collapse" :href="'#' + entry.BIBTEXKEY + '-bib'" aria-expanded="false" :aria-controls="entry.BIBTEXKEY + '-bib'" >-->
<!--            [bib]-->
<!--          </a>-->
<!--        </div>-->
<!--        <div v-if="entry.keywords">-->
<!--          <span class="badge badge-success" v-for="(keyword) in entry.keywords"-->
<!--                :key="keyword"-->
<!--          >-->
<!--            {{ keyword }}-->
<!--          </span>-->
<!--        </div>-->
<!--        <div v-else-if="entry.label">-->
<!--          <span  class="badge badge-success" v-for="keyword in entry.label"-->
<!--                 :key="keyword"-->
<!--          >-->
<!--            {{ keyword }}-->
<!--          </span>-->
<!--        </div>-->
<!--      </li>-->

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
    "@ARTICLE{smit54,AUTHOR = {J. G. Smith and H. K. Weston},TITLE = {Nothing Particular in this Year's History},YEAR = {1954},JOURNAL = {J. Geophys. Res.},VOLUME = {2},PAGES = {14-15}}"
]

export default {
  name: "CodeView",
  computed: {
    citationsList() {
      return CITE_INPUT.map(item => {
        return new Cite(item).data
      })
    },
    citationsFormated (){
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
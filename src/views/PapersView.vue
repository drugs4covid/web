<template>
  <v-container>
    <v-card flat>
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
            {{author.given}} {{author.family}}
            <span v-if="index === cite.author.length-2" v-text="$t('label.and')"/>
            <span v-else-if="index === cite.author.length-1">.</span>
            <span v-else>, </span>
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
export default {
  name: "PapersView",
  data: () => ({
    citationsData: null
  }),
  mounted() {
    this.citationsData = new Cite(this.$store.state.citedDocuments).data
  }
}
</script>

<style scoped>

</style>
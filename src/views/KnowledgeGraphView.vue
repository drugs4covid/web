<template>
  <div id="knowledge-graph">
    <b-container>
      <b-card-group deck>
        <b-card class="border-0" align="left">
          <b-card-title> {{ graphDBCard.title }}</b-card-title>
          <b-card-sub-title style="text-align: justify" class="mb-2">
            {{graphDBCard.text}}
          </b-card-sub-title>
          <b-button type="button" variant="outline-primary" :href="graphDBCard.href">
            {{ graphDBCard.buttonText }}
          </b-button>
        </b-card>

        <b-card class="border-0" align="left">
          <b-card-title>{{ sparqlCard.title }}</b-card-title>
          <b-button type="button" variant="outline-primary" :href="sparqlCard.href">
            {{ sparqlCard.buttonText }}
          </b-button>
        </b-card>
      </b-card-group>

      <b-card class="border-0" align="left">
        <b-card-title>{{ ontologyCard.title }}</b-card-title>
        <b-embed type="iframe" :src="ontologyCard.href"></b-embed>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "CorpusView",
  data: () => ({
    graphDBCard:{
      title: "Graph DB",
      text: "Ontotext GraphDB is a highly efficient and robust graph database with RDF and SPARQL support. This documentation is a comprehensive guide that explains every feature of GraphDB, as well as topics such as setting up a repository, loading and working with data, tuning its performance, scaling, etc.",
      buttonText: "Logging",
      href: "https://d4c.linkeddata.es/rdf",
    },
    sparqlCard:{
      title: "SPARQL",
      text: "",
      buttonText: "Go There",
      href: "https://d4c.linkeddata.es/rdf",
    },
    ontologyCard:{
      title: "Ontology",
      text: "",
      buttonText: "",
      href: "https://drugs4covid.github.io/EBOCA-portal/index.html",
    },
  }),
}
</script>

<style scoped>

</style>
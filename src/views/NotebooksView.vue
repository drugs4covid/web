<template>
  <v-container>
    <v-card flat>
      <v-card-title>
        <v-img max-width="50px" src="@/assets/jupyter-logo.svg"></v-img>
        {{$t('resources.notebooks.title')}}
      </v-card-title>
      <v-card-subtitle v-html="$t('resources.notebooks.text')"/>

      <v-col v-for="(notebook, index) in notebooksList"
             :key="index"
             cols="12"
      >
        <a :href="notebook.href">
          <h2 class="title" v-text="$t(notebook.text)"/>
        </a>
      </v-col>

    </v-card>
  </v-container>
</template>

<script>

export default {
  name: "NotebooksView",
  // data: ()=>({
  //   notebooksList: []
  // }),
  computed:{
    notebooksList(){
      return Object.entries(this.$store.state.links.github.notebooks)
          .map(([key,value]) => {
            return {
              title: this.$t("resources.notebooks.sources.".concat(key,".title")),
              text: "resources.notebooks.sources." + key + ".description",
              href: value,
            }
          })
    },

  }
}
</script>

<style scoped>

</style>
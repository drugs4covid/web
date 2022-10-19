<template>
  <v-container>
    <v-card flat>
      <v-card-title>
        <v-img max-width="70px" src="@/assets/solr-logo.png"
               style="margin: 7px"
        />
        {{$t('corpus.repository.title')}}
      </v-card-title>
      <v-card-subtitle v-html="$t('corpus.repository.text')"/>

      <v-chip-group column center-active>
        <v-spacer/>
        <v-chip v-for="(repo, index) in repositoryList"
                :key="index"
                :href="repo.href"
                color="primary"
                label
                outlined
        >
          {{$t(repo.btnText)}}
        </v-chip>
        <v-spacer/>
      </v-chip-group>

    </v-card>
  </v-container>
</template>

<script>

export default {
  name: "RepositoryView",
  computed:{
    repositoryList(){
      return Object.entries(this.$store.state.links.librairy.solr)
          .map(([key,value]) => {
            return {
              btnText: "corpus.repository.btn" + key.charAt(0).toUpperCase() + key.slice(1),
              href: value,
            }
          })
    },

  }
}
</script>

<style scoped>

</style>
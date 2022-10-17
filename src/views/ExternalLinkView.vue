<template>
  <div>
    <h2 v-show="!isLoaded">
      Redirecting
    </h2>
    <h2 v-show="isLoaded">
      Could not redirect, source does not exists
    </h2>
  </div>
</template>
<script>
export default {
  name: "ExternalLinkView",
  data: () => ({
    isLoaded: false
  }),
  computed: {
    source() {
      return this.$route.name
    },
    params() {
      return this.$route.params
    }
  },
  mounted() {
    console.log(this.source)
    console.log(this.params)
    this.isLoaded = true
    //window.location.href = this.$store.state.externalLink[this.source]
  },
}
</script>

<style scoped>

</style>
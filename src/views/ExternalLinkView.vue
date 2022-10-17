<template>
  <div/>
</template>
<script>
export default {
  name: "ExternalLinkView",
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
    //window.location.href = this.$store.state.externalLink[this.source]
  }
}
</script>

<style scoped>

</style>
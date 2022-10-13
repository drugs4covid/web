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
  created() {
    console.log(this.source)
    window.location.href = this.$store.state.externalLink[this.source]
  }
}
</script>

<style scoped>

</style>
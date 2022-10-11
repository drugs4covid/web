<template>
  <div/>
</template>
<script>
export default {
  name: "ExternalLinkView",
  computed: {
    source(){
      return this.$route.name
    }
  },
  created() {
    window.location.href = this.$store.state.externalLink[this.source]
  }
}
</script>

<style scoped>

</style>
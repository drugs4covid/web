<template>
  <div style="margin: auto; margin-top:1%;">
    <v-btn v-text="entity_value" v-bind:color="entity_type ==='E' ? '#f1d6fa':'#d4fcd5'">
    </v-btn>
    </div>
</template>

<script>
export default {
  name: "EntityButton",
  props: {
    entity_value: String,
    entity_type: String,
        default: "M" || "E"
  },
}
</script>

<style scoped>


</style>
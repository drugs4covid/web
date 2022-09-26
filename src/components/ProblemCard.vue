<template>
  <v-container>
    <v-card no-body class="overflow-hidden border-0">
      <v-row no-gutters>

        <v-col>
            <v-card-title>
              {{$t('problem.title')}}
            </v-card-title>
            <v-card-subtitle>
              {{$t('problem.subtitle')}}
            </v-card-subtitle>
            <v-card-text>
              {{$t('problem.text')}}
            </v-card-text>
        </v-col>

        <v-col >
          <v-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></v-img>
        </v-col>

      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ProblemComponent"
}
</script>

<style scoped>

</style>
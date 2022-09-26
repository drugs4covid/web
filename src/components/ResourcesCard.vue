<template>
  <v-container>
    <v-card no-body class="overflow-hidden border-0">
      <v-row no-gutters>

        <v-col>
            <v-card-title>
              {{$t('resources.title')}}
            </v-card-title>
            <v-card-subtitle>
              {{$t('resources.subtitle')}}
            </v-card-subtitle>
            <v-card-text>
              {{$t('resources.text')}}
            </v-card-text>
        </v-col>

      </v-row>
      <v-row no-gutters>
        <v-col>
          <v-img src="https://picsum.photos/400/400/?image=21" alt="Image" class="rounded-0"></v-img>
        </v-col>
        <v-col>
          <v-img src="https://picsum.photos/400/400/?image=22" alt="Image" class="rounded-0"></v-img>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ResourcesComponent"
}
</script>

<style scoped>

</style>
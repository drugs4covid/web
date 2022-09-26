<template>
  <v-container>
    <v-card no-body class="overflow-hidden border-0">
      <v-card-title>
        {{$t('approach.title')}}
      </v-card-title>
      <v-item-group light>
        <v-card v-for="(step, index) in steps"
                :key="index"
        >
          <v-card-title>
            {{ $t(step.title) }}
          </v-card-title>
          <v-card-text>
            {{ $t(step.text) }}
          </v-card-text>
            <v-btn>
              {{ $t('approach.buttonText') }}
            </v-btn>
        </v-card>
      </v-item-group>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ApproachComponent",
  data:()=>({
    steps:[
      {
        title: "approach.step1.title",
        text: "approach.step1.text",
      },
      {
        title: "approach.step2.title",
        text: "approach.step2.text",
      },
      {
        title: "approach.step3.title",
        text: "approach.step3.text",
      },
      {
        title: "approach.step4.title",
        text: "approach.step4.text",
      }
    ]
  })
}
</script>

<style scoped>

</style>
<template>
  <b-container>
    <b-card no-body class="overflow-hidden border-0">
      <b-card-title>
        {{$t('approach.title')}}
      </b-card-title>
      <b-card-group deck>
        <b-card v-for="(step, index) in steps"
                :key="index"
        >
          <b-card-title>
            {{ $t(step.title) }}
          </b-card-title>
          <b-card-text>
            {{ $t(step.text) }}
          </b-card-text>
          <template #footer>
            <b-button>
              {{ $t('approach.buttonText') }}
            </b-button>
          </template>
        </b-card>
      </b-card-group>
    </b-card>
  </b-container>
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